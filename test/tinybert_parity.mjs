// Plain-JS tiny BERT vs PyTorch fp32 reference (data/analyzers/phase3/parity.jsonl from export_xenc_js.py).
import { readFileSync } from "node:fs";
import { loadTinyBert } from "../src/analyzers/tinybert.js";
const m = loadTinyBert(readFileSync(new URL("../public/models/who-tiny.bin", import.meta.url)));
const rows = readFileSync(new URL("../data/analyzers/phase3/parity.jsonl", import.meta.url), "utf8").trim().split("\n").map(JSON.parse);
let max = 0, sum = 0, signAgree = 0;
const t = performance.now();
for (const r of rows) { const z = m.score(r.text, r.cand); max = Math.max(max, Math.abs(z - r.logit)); sum += Math.abs(z - r.logit); signAgree += (z > 0) === (r.logit > 0); }
const ms = (performance.now() - t) / rows.length;
console.log(`pairs ${rows.length}: max |dlogit| ${max.toFixed(3)}, mean ${(sum / rows.length).toFixed(4)}, sign agreement ${(100 * signAgree / rows.length).toFixed(1)}%, ${ms.toFixed(2)} ms/pair, vocab ${m.vocabSize}`);
