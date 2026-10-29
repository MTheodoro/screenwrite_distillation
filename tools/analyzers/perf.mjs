// Latency check: per-scene analysis time (rules and model) and a full-script cold run.
// node perf.mjs [bundle.json] [scenesDir]
// Run under CPU throttling with e.g. `taskset`/cpulimit, or use test/perf.test.js thresholds scaled x4.
import { readFileSync, readdirSync } from "node:fs";
import { parse } from "../../src/analyzers/fountain.js";
import { analyzeRules } from "../../src/analyzers/rules.js";
import { analyzeModel } from "../../src/analyzers/model.js";
import { loadEmbedder } from "../../src/analyzers/embed.js";

const root = new URL("../../", import.meta.url).pathname;
const bundle = JSON.parse(readFileSync(process.argv[2] || root + "public/models/analyzers.json", "utf8"));
const embedder = bundle.meta.emb ? loadEmbedder(readFileSync(root + "models-archive/embed.bin")) : null;
const dir = process.argv[3] || root + "data/analyzers/gen/scenes/";
const texts = readdirSync(dir).filter((f) => f.endsWith(".fountain")).slice(0, 300).map((f) => readFileSync(dir + f, "utf8"));
const scenes = texts.map((t) => parse(t).scenes[0]).filter(Boolean);

function time(label, fn) {
  const per = [];
  for (const s of scenes) { const t = performance.now(); fn(s); per.push(performance.now() - t); }
  per.sort((a, b) => a - b);
  const mean = per.reduce((a, b) => a + b, 0) / per.length;
  console.log(`${label}: mean ${mean.toFixed(2)} ms, p50 ${per[per.length >> 1].toFixed(2)}, p95 ${per[Math.floor(per.length * 0.95)].toFixed(2)} ms/scene`);
  return mean;
}
for (let r = 0; r < 2; r++) time("rules (warm-up)", analyzeRules);
time("rules", analyzeRules);
for (let r = 0; r < 2; r++) time("model (warm-up)", (s) => analyzeModel(s, bundle, embedder));
time("model", (s) => analyzeModel(s, bundle, embedder));

// Full script: ~120 pages ≈ 110 scenes of mixed length; parse + analyze everything once.
const script = texts.slice(0, 110).join("\n\n");
const t = performance.now();
const all = parse(script).scenes;
for (const s of all) analyzeModel(s, bundle, embedder);
console.log(`full script (${all.length} scenes, ${script.split("\n").length} lines): ${(performance.now() - t).toFixed(0)} ms`);
