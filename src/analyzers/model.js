// Inference for the distilled analyzers: rule features -> exported LightGBM trees -> decisions.
// Pure functions; runs in the Web Worker (and in Node for benchmarks/tests).
import {
  sceneContext, boundaryFeatures, addrCandidates, addrFeatures, emotionFeatures,
  unitTensionFeatures, attachEmbedder, SPECIAL, ruleActors, ruleWhy, lineKind, beat2Features, unitTokens,
} from "./rules.js";
import { explicitEmotion } from "./lexicon.js";
import { describeScene } from "./describe.js";
import { scoreTokens, gramIndices, scoreIndices } from "./wordtable.js";
import { summarizeBeat } from "./summarize.js";

// Trees are packed once into typed arrays (one set per model) for cache-friendly evaluation.
function pack(m) {
  if (m.packed) return m.packed;
  const n = m.trees.reduce((s, t) => s + t.f.length, 0);
  const f = new Int16Array(n), l = new Int32Array(n), r = new Int32Array(n), v = new Float64Array(n);
  const roots = new Int32Array(m.trees.length);
  let o = 0;
  m.trees.forEach((t, k) => {
    roots[k] = o;
    for (let i = 0; i < t.f.length; i++) {
      f[o + i] = t.f[i]; v[o + i] = t.f[i] < 0 ? t.v[i] : t.t[i];
      l[o + i] = o + t.l[i]; r[o + i] = o + t.r[i];
    }
    o += t.f.length;
  });
  m.packed = { f, l, r, v, roots };
  return m.packed;
}

function sumTrees(p, x, from, step, out, k) {
  const f = p.f, v = p.v, l = p.l, r = p.r, roots = p.roots;
  let s = 0;
  for (let i = from; i < roots.length; i += step) {
    let n = roots[i];
    let fi = f[n];
    while (fi >= 0) { n = x[fi] <= v[n] ? l[n] : r[n]; fi = f[n]; }
    s += v[n];
  }
  return s;
}

const sigmoid = (z) => 1 / (1 + Math.exp(-z));

export function predictRaw(m, x) {
  const p = pack(m);
  if (m.kind === "multiclass") {
    const k = m.num_class, out = new Float64Array(k);
    for (let c = 0; c < k; c++) out[c] = sumTrees(p, x, c, k);
    let mx = -Infinity;
    for (const v of out) mx = Math.max(mx, v);
    let s = 0;
    for (let i = 0; i < k; i++) { out[i] = Math.exp(out[i] - mx); s += out[i]; }
    for (let i = 0; i < k; i++) out[i] /= s;
    return out;
  }
  const s = sumTrees(p, x, 0, 1);
  return m.kind === "binary" ? sigmoid(s) : s;
}

function decodeSet(cands, probs, tau) {
  const order = cands.map((c, k) => [probs[k], c]).sort((a, b) => b[0] - a[0]);
  const [p0, top] = order[0];
  if (top < 0) return { ids: top === SPECIAL.NONE ? [] : [top], conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
  const ids = [top, ...order.slice(1).filter(([p, c]) => c >= 0 && p > tau).map(([, c]) => c)];
  return { ids, conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
}

// Analysis runs in three stages so the worker can yield between them (each stays well under a frame):
// 1. beats + tension, 2. who / addressee, 3. emotion. analyzeModel runs all three at once.
// embedder: required when the bundle was trained with embedding features (meta.emb), see embed.js.
// opts.addressee: also score who each dialogue line is addressed to (off by default: not used by the app).
export function* analyzeModelStages(scene, bundle, embedder = null, opts = {}) {
  const { models, meta } = bundle;
  if (bundle.describe) opts = { addressee: true, ...opts }; // beat summaries need "who it is aimed at"
  const ctx = sceneContext(scene);
  if (meta.emb) {
    if (!embedder) throw new Error("this model bundle needs the embedding table");
    attachEmbedder(ctx, embedder);
  }
  let beats = [];
  if (models.beat2 && ctx.content.length) {
    unitTension(ctx, bundle); // tension features for the boundary model
    // Dramatic beats (a turn in the scene), see decodeBeats2TopK; meta.beat2.threshold "kN" = N content units per beat.
    const b2 = meta.beat2 || {};
    const thr = String(b2.threshold ?? "k7");
    beats = thr.startsWith("k") ? decodeBeats2TopK(ctx, models.beat2, Number(thr.slice(1)), b2.minLen ?? 3)
      : decodeBeats2(ctx, models.beat2, Number(thr), b2.minLen ?? 3);
  } else {
    ctx.content.forEach((i, k) => {
      if (k === 0 || predictRaw(models.boundary, boundaryFeatures(ctx, i)) > meta.boundary.threshold) beats.push(i);
    });
  }
  const groups = beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));
  const result = {
    cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name, names: c.names, gender: c.gender })),
    beats, lines: {}, tension: scoreBeats(ctx, groups, bundle),
    unitLines: unitLines(scene), // unit index -> line offset from the scene's first line (cache-safe)
  };
  yield result;
  for (const i of ctx.content) {
    if (ctx.units[i].kind === "action") {
      // Who: rules only (they beat the distilled model on the gold sets). Every action line also gets a kind:
      // character / setting / event / extra / camera / abstract, so no text is left unclassified.
      const who = ruleActors(ctx, i);
      const stack = models.kind ? { model: models.kind, meta: meta.kind, predict: predictRaw } : null;
      result.lines[i] = { who, kind: lineKind(ctx, i, who, stack), why: ruleWhy(ctx, i) };
    } else if (!opts.addressee) {
      result.lines[i] = { speaker: ctx.speaker[i] };
    } else {
      const cands = addrCandidates(ctx, i);
      const d = decodeSet(cands, cands.map((c) => predictRaw(models.addr, addrFeatures(ctx, i, c))), meta.addr.tau);
      result.lines[i] = { speaker: ctx.speaker[i], to: d.ids, conf: d.conf, margin: d.margin };
    }
  }
  yield result;
  for (const i of ctx.content) {
    const x = emotionFeatures(ctx, i);
    const ep = predictRaw(models.emo, x);
    (ctx._emoP ??= new Map()).set(i, ep);
    let best = 0;
    for (let k = 1; k < ep.length; k++) if (ep[k] > ep[best]) best = k;
    let emo = meta.emo.classes[best], inten = Math.max(0, Math.min(1, predictRaw(models.emo_int, x)));
    // Explicit emotion words beat a "neutral" verdict (the model leans neutral on action lines).
    if (emo === "neutral") {
      const t = ctx.units[i].text, ex = explicitEmotion(t);
      if (ex) { emo = ex[0]; inten = Math.min(1, 0.45 + 0.15 * ex[1] + 0.1 * Math.min(2, (t.match(/!/g) || []).length)); }
    }
    result.lines[i].emo = [emo, inten];
  }
  result.beatMood = bundle.tables?.mood && models.mood ? beatMood2(ctx, result, bundle) : beatMood(result, ctx.content);
  if (models.keyline) {
    result.beatSummaries = groups.map((g, k) => summarizeBeat(ctx, g, result, k, models.keyline, predictRaw).text);
  }
  if (bundle.describe) {
    yield result;
    describeScene(ctx, scene, result, bundle.describe);
  }
  return result;
}

// Beat mood (stacked): beat and scene word tables (6 families) + position -> trees pick the family; the fine table
// picks the mood within it; intensity 1-5 follows the beat's tension. Text + signals mirror mood_table.py beat_text.
const EXPL = { anger: /\b(angry|furious|rage|hate|yell|shout|scream|slam|fuck|damn)\w*/gi, fear: /\b(afraid|scared|terrif|panic|trembl|fear)\w*/gi,
  sad: /\b(cry|cries|tears|sob|grief|mourn|funeral|sad|miss)\w*/gi, joy: /\b(laugh|grin|smile|cheer|celebrat|happy)\w*/gi,
  tender: /\b(hug|kiss|hold|gentle|soft|love|darling)\w*/gi, threat: /\b(gun|knife|blood|kill|dead|shoot|bomb|threat)\w*/gi };
function moodSignals(ctx, us) {
  const txt = us.map((i) => ctx.units[i].text).join(" ");
  const q = (txt.match(/\?/g) || []).length, e = (txt.match(/!/g) || []).length;
  const d = us.filter((i) => ctx.units[i].kind === "dialogue").length / Math.max(1, us.length);
  const sig = [q === 0 ? "__q0" : q <= 2 ? "__q1" : "__q3", e === 0 ? "__e0" : e <= 2 ? "__e1" : "__e3", d < 0.2 ? "__dlg0" : d < 0.6 ? "__dlg1" : "__dlg2"];
  for (const [k, r] of Object.entries(EXPL)) { const n = (txt.match(r) || []).length; if (n) sig.push(`__${k}${Math.min(n, 3)}`); }
  sig.push("__len" + (us.length <= 4 ? "s" : us.length <= 12 ? "m" : "l"));
  return sig;
}
export function moodTokens(ctx, units) {
  const us = units.filter((i) => ctx.units[i].kind === "action" || ctx.units[i].kind === "dialogue");
  const toks = moodSignals(ctx, us);
  for (const i of us) for (const t of unitTokens(ctx, i)) toks.push(t);
  return toks;
}
// Same scores as scoreTokens(t, moodTokens(ctx, units)), from per-unit cached vocabulary indices.
export function scoreMood(ctx, t, units, key) {
  const us = units.filter((i) => ctx.units[i].kind === "action" || ctx.units[i].kind === "dialogue");
  ctx._gi ??= new Map();
  if (!ctx._gi.has(key)) ctx._gi.set(key, new Map());
  const cache = ctx._gi.get(key);
  const sig = moodSignals(ctx, us);
  const set = gramIndices(t, us.length ? [...sig, unitTokens(ctx, us[0])[0]].filter((x) => x !== undefined) : sig);
  for (let k = 0; k < us.length; k++) {
    const i = us[k];
    if (!cache.has(i)) cache.set(i, gramIndices(t, unitTokens(ctx, i)));
    for (const j of cache.get(i)) set.add(j);
    const toks = unitTokens(ctx, i), next = k + 1 < us.length ? unitTokens(ctx, us[k + 1]) : null;
    if (toks.length && next && next.length) { const j = t.index.get(toks[toks.length - 1] + " " + next[0]); if (j !== undefined) set.add(j); }
  }
  return scoreIndices(t, set);
}
// Beat aggregates of the line models for the mood trees: mean / max of the line emotion probabilities, tension of the
// beat (mean, max, relative to the scene), dialogue share.
export function moodAggregates(ctx, groups, bundle) {
  const ut = unitTension(ctx, bundle);
  const all = ctx.content.map((i) => ut.get(i));
  const sceneMean = all.reduce((a, b) => a + b, 0) / Math.max(1, all.length);
  return groups.map((g) => {
    const mean = new Array(8).fill(0), max = new Array(8).fill(0);
    for (const i of g) {
      const p = ctx._emoP?.get(i) || predictRaw(bundle.models.emo, emotionFeatures(ctx, i));
      p.forEach((v, c) => { mean[c] += v / g.length; max[c] = Math.max(max[c], v); });
    }
    const ts = g.map((i) => ut.get(i));
    const tm = ts.reduce((a, b) => a + b, 0) / Math.max(1, ts.length);
    return [...mean, ...max, tm, Math.max(...ts), tm - sceneMean, g.filter((i) => ctx.units[i].kind === "dialogue").length / Math.max(1, g.length)];
  });
}

function beatMood2(ctx, result, bundle) {
  const T = bundle.tables.mood, fams = bundle.meta.mood.families, famOf = bundle.meta.mood.family_of;
  const b = result.beats;
  const groups = b.map((s, k) => ctx.content.filter((i) => i >= s && (k + 1 >= b.length || i < b[k + 1])));
  const ps = scoreMood(ctx, T.scene, ctx.content, "scene");
  const famProbs = (p) => fams.map((f) => p[T.scene.classes.indexOf(f)] ?? 0);
  const psF = famProbs(ps);
  const agg = bundle.meta.mood.agg ? moodAggregates(ctx, groups, bundle) : null;
  return groups.map((g, k) => {
    const pbRaw = scoreMood(ctx, T.beat, g, "beat");
    const pb = fams.map((f) => pbRaw[T.beat.classes.indexOf(f)] ?? 0);
    const pf = predictRaw(bundle.models.mood, [...pb, ...psF, k / Math.max(1, groups.length - 1), ...(bundle.meta.mood.agg ? agg[k] : [])]);
    let fam = 0;
    for (let j = 1; j < pf.length; j++) if (pf[j] > pf[fam]) fam = j;
    const family = fams[bundle.meta.mood.classes ? bundle.meta.mood.classes[fam] : fam];
    const fine = scoreMood(ctx, T.fine, g, "fine");
    let mood = null, best = -1;
    T.fine.classes.forEach((m, j) => { if (famOf[m] === family && fine[j] > best) { best = fine[j]; mood = m; } });
    const t = result.tension[k] ?? 0.5;
    return { family, mood, intensity: Math.max(1, Math.min(5, 1 + Math.round(4 * t))), conf: pf[fam] };
  });
}

// Mood per beat: the non-neutral emotion with the largest summed intensity over the beat's lines,
// [label, strength 0..1]; ["neutral", 0] when nothing stands out. Derived, no extra model.
export function beatMood(result, content) {
  const b = result.beats;
  return b.map((start, k) => {
    const end = k + 1 < b.length ? b[k + 1] : Infinity;
    const units = content.filter((i) => i >= start && i < end);
    const sum = new Map();
    for (const i of units) {
      const e = result.lines[i]?.emo;
      if (e && e[0] !== "neutral") sum.set(e[0], (sum.get(e[0]) || 0) + e[1]);
    }
    let best = ["neutral", 0];
    for (const [label, v] of sum) if (v > best[1]) best = [label, v];
    return best[0] === "neutral" ? best : [best[0], Math.min(1, best[1] / Math.max(1, units.length) * 2)];
  });
}

// Dramatic beats: greedy left-to-right decoding; a boundary needs p > threshold and at least minLen content units
// since the previous one (sinceLast / paragraphs-since-last are features, so decoding is sequential).
export function decodeBeats2(ctx, m, threshold = 0.5, minLen = 2) {
  const beats = [ctx.content[0]];
  let last = 0, paras = 0;
  for (let k = 1; k < ctx.content.length; k++) {
    const i = ctx.content[k];
    if (k - last >= minLen && predictRaw(m, beat2Features(ctx, i, k - last, paras)) > threshold) { beats.push(i); last = k; paras = 0; }
    else if (ctx.units[i].kind === "action" && ctx.units[i].sent === 0) paras++;
  }
  return beats;
}

// Alternative decoding: score every candidate once (sinceLast taken as the distance from the previous candidate
// paragraph start), then keep the top round(n / unitsPerBeat) with at least minLen units between boundaries.
export function decodeBeats2TopK(ctx, m, unitsPerBeat = 7, minLen = 2, floor = 0.05) {
  const n = ctx.content.length;
  const k = Math.max(0, Math.round(n / unitsPerBeat) - 1);
  const sc = [];
  for (let j = 1; j < n; j++) sc.push([predictRaw(m, beat2Features(ctx, ctx.content[j], Math.min(j, unitsPerBeat), 1)), j]);
  sc.sort((a, b) => b[0] - a[0]);
  const chosen = [0];
  for (const [p, j] of sc) {
    if (chosen.length > k || p < floor) break;
    if (chosen.every((c) => Math.abs(c - j) >= minLen)) chosen.push(j);
  }
  return chosen.sort((a, b) => a - b).map((j) => ctx.content[j]);
}

export function unitLines(scene) {
  return scene.units.map((u) => u.line - scene.start);
}

export function analyzeModel(scene, bundle, embedder = null, opts = {}) {
  const it = analyzeModelStages(scene, bundle, embedder, opts);
  let r = it.next();
  while (!r.done) r = it.next();
  return r.value;
}

// Tension is predicted per content unit (windowed features); a beat's score is the mean of its units.
export function unitTension(ctx, bundle) {
  if (ctx._unitTension) return ctx._unitTension;
  const feats = unitTensionFeatures(ctx);
  const m = new Map();
  ctx.content.forEach((i, k) => {
    m.set(i, predictRaw(bundle.models.tension, feats[k]));
  });
  ctx._unitTension = m;
  return m;
}

export function scoreBeats(ctx, groups, bundle) {
  const { lo, hi } = bundle.meta.tension;
  const ut = unitTension(ctx, bundle);
  const raw = groups.map((g) => g.reduce((s, i) => s + ut.get(i), 0) / Math.max(1, g.length));
  const norm = raw.map((v) => Math.max(0, Math.min(1, (v - lo) / (hi - lo || 1))));
  // light smoothing inside the scene: [0.2, 0.6, 0.2]
  return norm.map((v, k) => {
    const a = norm[k - 1] ?? v, b = norm[k + 1] ?? v;
    return 0.2 * a + 0.6 * v + 0.2 * b;
  });
}
