// Feature export for the description models (beat type, place, atmosphere, character role / traits).
// stdin: JSON lines {scene_id, source, index, beats}; stdout: {scene_id, beat:[[k, feats]], scene: feats,
// chars: [[charId, name, feats]], cast: [names]}. Uses the shipped Phase 1 model for who / mood inputs.
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext } from "../../src/analyzers/rules.js";
import { analyzeModel } from "../../src/analyzers/model.js";
import { beatTypeFeatures, sceneFeatures, charFeatures } from "../../src/analyzers/describe.js";

const bundle = JSON.parse(readFileSync(new URL("../../public/models/analyzers.json", import.meta.url), "utf8"));
const cache = new Map();
const sceneOf = (src, k) => {
  if (!cache.has(src)) cache.set(src, parse(readFileSync(src, "utf8")).scenes);
  return cache.get(src)[k ?? 0];
};
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  const scene = sceneOf(r.source, r.index);
  const ctx = sceneContext(scene);
  const result = analyzeModel(scene, bundle, null, { addressee: true });
  const bs = [...r.beats].sort((a, b) => a - b);
  const groups = bs.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= bs.length || i < bs[k + 1])));
  process.stdout.write(JSON.stringify({
    scene_id: r.scene_id,
    beat: groups.map((g, k) => [k, beatTypeFeatures(ctx, g, result)]),
    scene: sceneFeatures(ctx, scene, result),
    chars: ctx.cast.chars.map((c) => [c.id, c.name, charFeatures(ctx, c.id, result)]),
    names: ctx.cast.chars.map((c) => c.names),
  }) + "\n");
}
