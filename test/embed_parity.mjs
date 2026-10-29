// Parity: JS embeddings vs Python reference on N lines (stdin JSON lines {text, py}). Exit 1 if max abs diff >= 1e-4.
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { loadEmbedder } from "../src/analyzers/embed.js";
const e = loadEmbedder(readFileSync(new URL("../public/models/embed.bin", import.meta.url)));
let n = 0, max = 0;
for await (const l of createInterface({ input: process.stdin })) {
  const { text, py } = JSON.parse(l);
  const js = e.embed(text);
  for (let d = 0; d < js.length; d++) max = Math.max(max, Math.abs(js[d] - py[d]));
  n++;
}
console.log(`lines ${n}, max abs diff ${max.toExponential(2)}`);
process.exit(max < 1e-4 ? 0 : 1);
