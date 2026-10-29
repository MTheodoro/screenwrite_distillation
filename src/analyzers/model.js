// Inference for the distilled analyzers: rule features -> exported LightGBM trees -> decisions.
// Pure functions; runs in the Web Worker (and in Node for benchmarks/tests).
import {
  sceneContext, boundaryFeatures, actorCandidates, actorFeatures, addrCandidates, addrFeatures, emotionFeatures,
  unitTensionFeatures, attachEmbedder, SPECIAL,
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

function treeValue(p, root, x) {
  let n = root;
  while (p.f[n] >= 0) n = x[p.f[n]] <= p.v[n] ? p.l[n] : p.r[n];
  return p.v[n];
}

const sigmoid = (z) => 1 / (1 + Math.exp(-z));

export function predictRaw(m, x) {
  const p = pack(m);
  if (m.kind === "multiclass") {
    const k = m.num_class, out = new Float64Array(k);
    for (let i = 0; i < p.roots.length; i++) out[i % k] += treeValue(p, p.roots[i], x);
    let mx = -Infinity;
    for (const v of out) mx = Math.max(mx, v);
    let s = 0;
    for (let i = 0; i < k; i++) { out[i] = Math.exp(out[i] - mx); s += out[i]; }
    for (let i = 0; i < k; i++) out[i] /= s;
    return out;
  }
  let s = 0;
  for (let i = 0; i < p.roots.length; i++) s += treeValue(p, p.roots[i], x);
  return m.kind === "binary" ? sigmoid(s) : s;
}

function decodeSet(cands, probs, tau) {
  const order = cands.map((c, k) => [probs[k], c]).sort((a, b) => b[0] - a[0]);
  const [p0, top] = order[0];
  if (top < 0) return { ids: top === SPECIAL.NONE ? [] : [top], conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
  const ids = [top, ...order.slice(1).filter(([p, c]) => c >= 0 && p > tau).map(([, c]) => c)];
  return { ids, conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
}

// embedder: required when the bundle was trained with embedding features (meta.emb), see embed.js.
export function analyzeModel(scene, bundle, embedder = null) {
  const { models, meta } = bundle;
  const ctx = sceneContext(scene);
  if (meta.emb) {
    if (!embedder) throw new Error("this model bundle needs the embedding table");
    attachEmbedder(ctx, embedder);
  }
  const ext = (x) => x;
  // beats
  const beats = [];
  ctx.content.forEach((i, k) => {
    if (k === 0) { beats.push(i); return; }
    if (predictRaw(models.boundary, ext(boundaryFeatures(ctx, i), i)) > meta.boundary.threshold) beats.push(i);
  });
  const lines = {};
  for (const i of ctx.content) {
    const u = ctx.units[i];
    const ep = predictRaw(models.emo, ext(emotionFeatures(ctx, i), i));
    let best = 0;
    for (let k = 1; k < ep.length; k++) if (ep[k] > ep[best]) best = k;
    const emo = [meta.emo.classes[best], Math.max(0, Math.min(1, predictRaw(models.emo_int, ext(emotionFeatures(ctx, i), i))))];
    if (u.kind === "action") {
      const cands = actorCandidates(ctx, i);
      const probs = cands.map((c) => predictRaw(models.actor, ext(actorFeatures(ctx, i, c), i)));
      const d = decodeSet(cands, probs, meta.actor.tau);
      lines[i] = { who: d.ids, conf: d.conf, margin: d.margin, runnerUp: d.runnerUp, emo };
    } else {
      const cands = addrCandidates(ctx, i);
      const probs = cands.map((c) => predictRaw(models.addr, ext(addrFeatures(ctx, i, c), i)));
      const d = decodeSet(cands, probs, meta.addr.tau);
      lines[i] = { speaker: ctx.speaker[i], to: d.ids, conf: d.conf, margin: d.margin, emo };
    }
  }
  const groups = beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));
  const tension = scoreBeats(ctx, groups, bundle);
  return { cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name, names: c.names, gender: c.gender })), beats, lines, tension };
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
