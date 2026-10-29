// Run rules and (optionally) the distilled model on scenes; emit predictions + per-scene latency.
// node predict.mjs [bundle.json] < requests.jsonl   (requests: {scene_id, source, index, beats: [gold beat starts]})
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { analyzeRules, sceneContext, tensionFeatures, ruleTension } from "../../src/analyzers/rules.js";
import { analyzeModel, scoreBeats } from "../../src/analyzers/model.js";

import { loadEmbedder } from "../../src/analyzers/embed.js";
import { attachEmbedder } from "../../src/analyzers/rules.js";
import { actorCandidates } from "../../src/analyzers/rules.js";
import { loadXenc, refineWho } from "../../src/analyzers/xenc.js";
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const bundle = args[0] ? JSON.parse(readFileSync(args[0], "utf8")) : null;
const xenc = process.argv.includes("--xenc")
  ? await loadXenc({ localPath: new URL("../../models-archive/", import.meta.url).pathname, margin: Number(process.env.XENC_MARGIN || 0.5) })
  : null;
import { makeRefiner } from "../../src/analyzers/refine.js";
const tiny = process.argv.includes("--tiny")
  ? makeRefiner(readFileSync(new URL("../../models-archive/who-tiny.bin", import.meta.url)), { margin: Number(process.env.XENC_MARGIN || 0.3) })
  : null;
const embedder = bundle?.meta.emb ? loadEmbedder(readFileSync(new URL("../../models-archive/embed.bin", import.meta.url))) : null;
const cache = new Map();
const sceneOf = (src, k) => {
  if (!cache.has(src)) cache.set(src, parse(readFileSync(src, "utf8")).scenes);
  return cache.get(src)[k ?? 0];
};
const groupsOf = (ctx, beats) => beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));

// warm-up so JIT compilation doesn't count against the first scene
const rl = createInterface({ input: process.stdin });
const reqs = [];
for await (const line of rl) if (line.trim()) reqs.push(JSON.parse(line));
for (const r of reqs.slice(0, 5)) { const s = sceneOf(r.source, r.index); analyzeRules(s); if (bundle) analyzeModel(s, bundle, embedder); }

// Gold labels use the cast frozen in data/analyzers/units/<id>.json. Cast detection changes (merges, new names) shift
// ids, so predicted ids are mapped to frozen ids by name; a merged character matches any of its frozen ids.
import { sameChar } from "../../src/analyzers/cast.js";
function remap(r, scene, result) {
  let frozen;
  try { frozen = JSON.parse(readFileSync(new URL(`../../data/analyzers/units/${r.scene_id}.json`, import.meta.url), "utf8")).cast; } catch { return; }
  const now = sceneContext(scene).cast.chars;
  const map = now.map((c) => {
    const ids = frozen.map((f, k) => [f, k]).filter(([f]) => [f.name, ...(f.names || [])].some((n) => c.names.some((m) => sameChar(n, m)))).map(([, k]) => k);
    return ids.length ? ids : [1000 + c.id];
  });
  for (const l of Object.values(result.lines)) if (l.who) l.who = l.who.map((c) => (c >= 0 ? map[c] ?? [c] : c));
}

for (const r of reqs) {
  const scene = sceneOf(r.source, r.index);
  let t = performance.now();
  const rule = analyzeRules(scene);
  const tRule = performance.now() - t;
  remap(r, scene, rule);
  const ctx = sceneContext(scene);
  const gold = groupsOf(ctx, r.beats || []);
  const out = { scene_id: r.scene_id, rule, tRule, ruleTensionGold: gold.map((g) => ruleTension(tensionFeatures(ctx, g))) };
  if (bundle) {
    t = performance.now();
    out.model = analyzeModel(scene, bundle, embedder, { addressee: true });
    out.tModel = performance.now() - t;
    remap(r, scene, out.model);
    if (tiny) {
      const c2 = sceneContext(scene);
      t = performance.now();
      tiny.refine(scene, out.model, c2.cast.chars, (u) => actorCandidates(c2, u));
      out.tXenc = performance.now() - t;
      out.nRefined = Object.values(out.model.lines).filter((l) => l.refined).length;
    }
    if (xenc) {
      const c2 = sceneContext(scene);
      t = performance.now();
      await refineWho(xenc, scene, out.model, c2.cast.chars, (u) => actorCandidates(c2, u));
      out.tXenc = performance.now() - t;
      out.nRefined = Object.values(out.model.lines).filter((l) => l.refined).length;
    }
    if (embedder) attachEmbedder(ctx, embedder);
    out.modelTensionGold = scoreBeats(ctx, gold, bundle);
  }
  process.stdout.write(JSON.stringify(out) + "\n");
}
