// node beats2_probs.mjs < {scene_id, source, index}  ->  {scene_id, units, p}  (shipped bundle)
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext } from "../../src/analyzers/rules.js";
import { unitTension, predictRaw } from "../../src/analyzers/model.js";
import { beat2Features } from "../../src/analyzers/rules.js";
const bundle = (await import("../../src/analyzers/weights.js")).default;
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  const sc = parse(readFileSync(r.source, "utf8")).scenes[r.index ?? 0];
  if (!sc) continue;
  const ctx = sceneContext(sc);
  unitTension(ctx, bundle);
  const p = ctx.content.map((i, j) => (j === 0 ? 1 : predictRaw(bundle.models.beat2, beat2Features(ctx, i, Math.min(j, 7), 1))));
  process.stdout.write(JSON.stringify({ scene_id: r.scene_id, units: ctx.content, p }) + "\n");
}
