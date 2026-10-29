// node beats2_decode.mjs bundle.json threshold minLen < {scene_id, source, index}  ->  {scene_id, beats}
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext } from "../../src/analyzers/rules.js";
import { decodeBeats2, decodeBeats2TopK } from "../../src/analyzers/model.js";
const [path, thr, ml] = process.argv.slice(2);
const bundle = JSON.parse(readFileSync(path, "utf8"));
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  const sc = parse(readFileSync(r.source, "utf8")).scenes[r.index ?? 0];
  if (!sc) continue;
  process.stdout.write(JSON.stringify({ scene_id: r.scene_id, beats: thr.startsWith("k")
    ? decodeBeats2TopK(sceneContext(sc), bundle.models.beat2, Number(thr.slice(1)), Number(ml))
    : decodeBeats2(sceneContext(sc), bundle.models.beat2, Number(thr), Number(ml)) }) + "\n");
}
