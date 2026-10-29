// Runs inside a real Web Worker: per-scene edit latency and cold full-script time.
import { parse } from "../../src/analyzers/fountain.js";
import { analyzeModel, analyzeModelStages } from "../../src/analyzers/model.js";
import { analyzeRules } from "../../src/analyzers/rules.js";
export async function run({ texts, script }) {
  const t0 = performance.now();
  const bundle = await (await fetch("../../public/models/analyzers.json")).json();
  const tLoad = performance.now() - t0;
  const scenes = texts.map((t) => parse(t).scenes[0]).filter(Boolean);
  for (const s of scenes.slice(0, 30)) analyzeModel(s, bundle); // warm-up (JIT)
  const per = [], perRules = [];
  for (const s of scenes) {
    let t = performance.now(); analyzeModel(s, bundle); per.push(performance.now() - t);
    t = performance.now(); analyzeRules(s); perRules.push(performance.now() - t);
  }
  const stage = [];
  for (const s of scenes) {
    const it = analyzeModelStages(s, bundle);
    let t = performance.now(), r;
    do { r = it.next(); const n = performance.now(); stage.push(n - t); t = n; } while (!r.done);
  }
  const q = (a, p) => [...a].sort((x, y) => x - y)[Math.floor(a.length * p)];
  let t = performance.now();
  const all = parse(script).scenes;
  for (const s of all) analyzeRules(s);
  const coldRules = performance.now() - t;
  t = performance.now();
  for (const s of all) analyzeModel(s, bundle);
  const coldModel = performance.now() - t;
  return ({ tLoad, model: { p50: q(per, 0.5), p95: q(per, 0.95), mean: per.reduce((a, b) => a + b) / per.length },
    stage: { p50: q(stage, 0.5), p95: q(stage, 0.95), max: Math.max(...stage) }, rules: { p50: q(perRules, 0.5), p95: q(perRules, 0.95) }, scenes: all.length, lines: script.split("\n").length, coldRules, coldModel });
}

if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) self.onmessage = async ({ data }) => self.postMessage(await run(data));
