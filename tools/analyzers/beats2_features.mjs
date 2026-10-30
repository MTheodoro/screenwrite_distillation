// Features for dramatic-beat boundaries. stdin: {scene_id, source, index, starts?}; stdout per scene:
// {scene_id, units: [content unit ids], X: [[...features]] (sinceLast teacher-forced from starts), y: [0/1]}
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext, beat2Features } from "../../src/analyzers/rules.js";
import { unitTension } from "../../src/analyzers/model.js";
const bundle = (await import("../../src/analyzers/weights.js")).default;

const cache = new Map();
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  if (!cache.has(r.source)) cache.set(r.source, parse(readFileSync(r.source, "utf8")).scenes);
  const sc = cache.get(r.source)[r.index ?? 0];
  if (!sc) continue;
  const ctx = sceneContext(sc);
  unitTension(ctx, bundle);
  const starts = new Set(r.starts || []);
  const X = [], y = [], units = [];
  let last = ctx.content[0], paras = 0;
  ctx.content.forEach((i, k) => {
    if (k === 0) return;
    const since = ctx.content.indexOf(i) - ctx.content.indexOf(last);
    X.push(beat2Features(ctx, i, since, paras));
    y.push(starts.has(i) ? 1 : 0);
    units.push(i);
    if (sc.units[i].kind === "action" && sc.units[i].sent === 0) paras++;
    if (starts.has(i)) { last = i; paras = 0; }
  });
  process.stdout.write(JSON.stringify({ scene_id: r.scene_id, units, X, y }) + "\n");
}
