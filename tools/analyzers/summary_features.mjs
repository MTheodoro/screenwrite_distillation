// Key-line features per labeled beat. stdin: {scene_id, source, index, beats: [{start, summary}]};
// stdout: {scene_id, beats: [{units, X, sents}]} (sents = keySentence per unit, for scoring composed summaries)
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext } from "../../src/analyzers/rules.js";
import { analyzeModel } from "../../src/analyzers/model.js";
import { keyFeatures, keySentence } from "../../src/analyzers/summarize.js";
const bundle = (await import("../../src/analyzers/weights.js")).default;
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  try {
  const sc = parse(readFileSync(r.source, "utf8")).scenes[r.index ?? 0];
  if (!sc) continue;
  const ctx = sceneContext(sc);
  const result = analyzeModel(sc, bundle, null, { addressee: true });
  const starts = r.beats.map((b) => b.start);
  const beats = starts.map((s, k) => {
    const units = ctx.content.filter((i) => i >= s && (k + 1 >= starts.length || i < starts[k + 1]));
    return { units, X: units.map((i) => keyFeatures(ctx, i, units, result, k)), sents: units.map((i) => keySentence(ctx, i, result)) };
  });
  process.stdout.write(JSON.stringify({ scene_id: r.scene_id, beats }) + "\n");
  } catch (e) { process.stderr.write(r.scene_id + ": " + e.message + "\n"); }
}
