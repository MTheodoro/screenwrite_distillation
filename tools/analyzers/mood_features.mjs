// Per-beat line-model aggregates for mood training. stdin: {scene_id, source, index, starts}; stdout: {scene_id, agg}
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext } from "../../src/analyzers/rules.js";
import { moodAggregates } from "../../src/analyzers/model.js";
const bundle = (await import("../../src/analyzers/weights.js")).default;
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  try {
    const sc = parse(readFileSync(r.source, "utf8")).scenes[r.index ?? 0];
    const ctx = sceneContext(sc);
    const st = r.starts;
    const groups = st.map((s, k) => ctx.content.filter((i) => i >= s && (k + 1 >= st.length || i < st[k + 1])));
    process.stdout.write(JSON.stringify({ scene_id: r.scene_id, agg: moodAggregates(ctx, groups, bundle) }) + "\n");
  } catch (e) { process.stderr.write(r.scene_id + ": " + e.message + "\n"); }
}
