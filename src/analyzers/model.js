// Inference for the distilled analyzers: rule features -> exported LightGBM trees -> decisions.
// Pure functions; runs in the Web Worker (and in Node for benchmarks/tests).
import {
  sceneContext, boundaryFeatures, actorCandidates, actorFeatures, addrCandidates, addrFeatures, emotionFeatures,
  tensionFeatures, SPECIAL,
} from "./rules.js";

function treeValue(t, x) {
  let n = 0;
  while (t.f[n] >= 0) n = x[t.f[n]] <= t.t[n] ? t.l[n] : t.r[n];
  return t.v[n];
}

const sigmoid = (z) => 1 / (1 + Math.exp(-z));

export function predictRaw(m, x) {
  if (m.kind === "multiclass") {
    const k = m.num_class, out = new Float64Array(k);
    for (let i = 0; i < m.trees.length; i++) out[i % k] += treeValue(m.trees[i], x);
    let mx = -Infinity;
    for (const v of out) mx = Math.max(mx, v);
    let s = 0;
    for (let i = 0; i < k; i++) { out[i] = Math.exp(out[i] - mx); s += out[i]; }
    for (let i = 0; i < k; i++) out[i] /= s;
    return out;
  }
  let s = 0;
  for (const t of m.trees) s += treeValue(t, x);
  return m.kind === "binary" ? sigmoid(s) : s;
}

function decodeSet(cands, probs, tau) {
  const order = cands.map((c, k) => [probs[k], c]).sort((a, b) => b[0] - a[0]);
  const [p0, top] = order[0];
  if (top < 0) return { ids: top === SPECIAL.NONE ? [] : [top], conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
  const ids = [top, ...order.slice(1).filter(([p, c]) => c >= 0 && p > tau).map(([, c]) => c)];
  return { ids, conf: p0, runnerUp: order[1]?.[1] ?? null, margin: p0 - (order[1]?.[0] ?? 0) };
}

// emb: optional (unitIndex) -> Float32Array extra features (Phase 2). Appended to every feature row of that unit.
export function analyzeModel(scene, bundle, emb = null) {
  const { models, meta } = bundle;
  const ctx = sceneContext(scene);
  const ext = (x, i) => (emb ? x.concat(Array.from(emb(i))) : x);
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
  const tension = scoreBeats(ctx, groups, bundle, emb);
  return { cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name, names: c.names })), beats, lines, tension };
}

export function scoreBeats(ctx, groups, bundle, emb = null) {
  const { models, meta } = bundle;
  const raw = groups.map((g) => {
    let x = tensionFeatures(ctx, g);
    if (emb) x = x.concat(Array.from(emb(g)));
    return predictRaw(models.tension, x);
  });
  const { lo, hi } = meta.tension;
  const norm = raw.map((v) => Math.max(0, Math.min(1, (v - lo) / (hi - lo || 1))));
  // light smoothing inside the scene: [0.2, 0.6, 0.2]
  return norm.map((v, k) => {
    const a = norm[k - 1] ?? v, b = norm[k + 1] ?? v;
    return 0.2 * a + 0.6 * v + 0.2 * b;
  });
}
