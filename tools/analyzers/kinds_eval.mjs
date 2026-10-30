// stdin: JSON lines {source, index, u, kind}; stdout: {u, kind, pred, text} per line (rule line-kind classifier).
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import { sceneContext, lineKind, kindSignals, kindContext } from "../../src/analyzers/rules.js";

const cache = new Map();
for await (const line of createInterface({ input: process.stdin })) {
  if (!line.trim()) continue;
  const r = JSON.parse(line);
  const key = r.source + "#" + r.index;
  if (!cache.has(key)) {
    const sc = parse(readFileSync(r.source, "utf8")).scenes[r.index ?? 0];
    cache.set(key, sc ? sceneContext(sc) : { units: [] });
  }
  const ctx = cache.get(key);
  if (!ctx.units[r.u]) continue; // label for a unit the parser no longer produces
  const out = { ...r, pred: lineKind(ctx, r.u, []), text: ctx.units[r.u].text };
  if (process.argv.includes("--signals")) { out.sig = kindSignals(ctx, r.u); out.ctxf = kindContext(ctx, r.u); }
  process.stdout.write(JSON.stringify(out) + "\n");
}
