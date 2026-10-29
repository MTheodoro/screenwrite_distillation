// Inference for the distilled analyzers: rule features -> exported LightGBM trees -> decisions.
// Pure functions; runs in the Web Worker (and in Node for benchmarks/tests).
import {
  sceneContext, boundaryFeatures, actorCandidates, actorFeatures, addrCandidates, addrFeatures, emotionFeatures,
  unitTensionFeatures, attachEmbedder, SPECIAL, ACTOR_FEATURES, strongActors,
} from "./rules.js";
import {
  BEAT_TYPES, PLACES, ATMOS, ROLES, TRAITS, beatTypeFeatures, sceneFeatures, charFeatures, beatSummary, placeText, characterText,
} from "./describe.js";

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
  const beats = [];
  ctx.content.forEach((i, k) => {
    if (k === 0 || predictRaw(models.boundary, boundaryFeatures(ctx, i)) > meta.boundary.threshold) beats.push(i);
  });
  const groups = beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));
  const result = {
    cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name, names: c.names, gender: c.gender })),
    beats, lines: {}, tension: scoreBeats(ctx, groups, bundle),
    unitLines: unitLines(scene), // unit index -> line offset from the scene's first line (cache-safe)
  };
  yield result;
  for (const i of ctx.content) {
    if (ctx.units[i].kind === "action") {
      const cands = actorCandidates(ctx, i);
      const feats = cands.map((c) => actorFeatures(ctx, i, c));
      const plural = feats[0][ACTOR_FEATURES.indexOf("plural")] > 0;
      const tau = plural && meta.actor.tau_plural != null ? meta.actor.tau_plural : meta.actor.tau;
      const d = decodeSet(cands, feats.map((x) => predictRaw(models.actor, x)), tau);
      const strong = strongActors(ctx, i); // high-precision rule patterns win over the model
      result.lines[i] = strong
        ? { who: strong, conf: 1, margin: 1, runnerUp: d.ids[0] ?? -1, rule: true }
        : { who: d.ids, conf: d.conf, margin: d.margin, runnerUp: d.runnerUp };
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
    let best = 0;
    for (let k = 1; k < ep.length; k++) if (ep[k] > ep[best]) best = k;
    result.lines[i].emo = [meta.emo.classes[best], Math.max(0, Math.min(1, predictRaw(models.emo_int, x)))];
  }
  result.beatMood = beatMood(result, ctx.content);
  if (bundle.describe) {
    yield result;
    describeScene(ctx, scene, result, bundle.describe);
  }
  return result;
}

// Stage 4 (only when the bundle has description models): beat summaries, place / atmosphere, characters.
function describeScene(ctx, scene, result, D) {
  const pick = (m, classes, x) => { const p = predictRaw(m, x); let b = 0; for (let k = 1; k < p.length; k++) if (p[k] > p[b]) b = k; return [classes[b], p[b]]; };
  const tags = (ms, labels, x, max, min) => ms.map((m, j) => [labels[j], m ? predictRaw(m, x) : 0])
    .sort((a, b) => b[1] - a[1]).filter((t, k) => k === 0 || t[1] >= min).slice(0, max).map((t) => t[0]);
  const name = (c) => (c >= 0 ? ctx.cast.chars[c].name : null);
  const b = result.beats;
  result.beatSummaries = b.map((start, k) => {
    const units = ctx.content.filter((i) => i >= start && (k + 1 >= b.length || i < b[k + 1]));
    const [type, conf] = pick(D.models.beat, D.meta.beat.classes.map((c) => BEAT_TYPES[c]), beatTypeFeatures(ctx, units, result));
    const score = new Map(), aim = new Map();
    for (const i of units) {
      const l = result.lines[i] || {};
      for (const c of l.who || []) score.set(c, (score.get(c) || 0) + 1);
      if (l.speaker >= 0) score.set(l.speaker, (score.get(l.speaker) || 0) + 1);
      for (const c of l.to || []) if (c >= 0) aim.set(c, (aim.get(c) || 0) + 1);
    }
    const top = (m, not) => [...m].filter(([c]) => c !== not).sort((x, y) => y[1] - x[1])[0]?.[0] ?? -1;
    const actor = top(score, -9), target = top(aim, actor) >= 0 ? top(aim, actor) : top(score, actor);
    const dt = k > 0 ? result.tension[k] - result.tension[k - 1] : 0;
    return { type, conf, actor, target, text: beatSummary(type, name(actor), name(target), dt, result.beatMood[k]) };
  });
  const sf = sceneFeatures(ctx, scene, result);
  const [place] = pick(D.models.place, D.meta.place.classes.map((c) => PLACES[c]), sf);
  const atmos = tags(D.models.atmos, ATMOS, sf, 2, 0.35);
  result.place = { place, atmos, text: placeText(scene.heading, place, atmos) };
  result.characters = ctx.cast.chars.filter((c) => c.spoke || ctx.content.some((i) => (result.lines[i]?.who || []).includes(c.id)))
    .map((c) => {
      const x = charFeatures(ctx, c.id, result);
      const [role] = pick(D.models.role, D.meta.role.classes.map((r) => ROLES[r]), x);
      const traits = tags(D.models.traits, TRAITS, x, 3, 0.4);
      return { id: c.id, role, traits, text: characterText(c.name, role, traits) };
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
