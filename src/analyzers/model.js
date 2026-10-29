// Inference for the distilled analyzers: rule features -> exported LightGBM trees -> decisions.
// Pure functions; runs in the Web Worker (and in Node for benchmarks/tests).
import {
  sceneContext, boundaryFeatures, actorCandidates, actorFeatures, addrCandidates, addrFeatures, emotionFeatures,
  unitTensionFeatures, attachEmbedder, SPECIAL, ACTOR_FEATURES,
} from "./rules.js";

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
export function* analyzeModelStages(scene, bundle, embedder = null) {
  const { models, meta } = bundle;
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
  };
  yield result;
  for (const i of ctx.content) {
    if (ctx.units[i].kind === "action") {
      const cands = actorCandidates(ctx, i);
      const feats = cands.map((c) => actorFeatures(ctx, i, c));
      const plural = feats[0][ACTOR_FEATURES.indexOf("plural")] > 0;
      const tau = plural && meta.actor.tau_plural != null ? meta.actor.tau_plural : meta.actor.tau;
      const d = decodeSet(cands, feats.map((x) => predictRaw(models.actor, x)), tau);
      result.lines[i] = { who: d.ids, conf: d.conf, margin: d.margin, runnerUp: d.runnerUp };
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
  return result;
}

export function analyzeModel(scene, bundle, embedder = null) {
  const it = analyzeModelStages(scene, bundle, embedder);
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
