// Feature export for training: Python never reimplements features, it calls this.
// stdin: JSON lines {scene_id, source, index?, beats: {name: [beat start unit ids]}}
// stdout: JSON lines with every feature row the models need, plus the rule verdicts.
import { readFileSync } from "node:fs";
import { createInterface } from "node:readline";
import { parse } from "../../src/analyzers/fountain.js";
import {
  sceneContext, boundaryFeatures, actorCandidates, actorFeatures, addrCandidates, addrFeatures, emotionFeatures,
  tensionFeatures, analyzeRules, BOUNDARY_FEATURES, ACTOR_FEATURES, ADDR_FEATURES, EMO_FEATURES, TENSION_FEATURES,
} from "../../src/analyzers/rules.js";

if (process.argv[2] === "--names") {
  console.log(JSON.stringify({ boundary: BOUNDARY_FEATURES, actor: ACTOR_FEATURES, addr: ADDR_FEATURES, emo: EMO_FEATURES, tension: TENSION_FEATURES }));
  process.exit(0);
}

const cache = new Map();
function sceneOf(source, index) {
  if (!cache.has(source)) cache.set(source, parse(readFileSync(source, "utf8")).scenes);
  return cache.get(source)[index ?? 0];
}

const beatGroups = (ctx, beats) => beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));

const rl = createInterface({ input: process.stdin });
for await (const line of rl) {
  if (!line.trim()) continue;
  const req = JSON.parse(line);
  const scene = sceneOf(req.source, req.index);
  const ctx = sceneContext(scene);
  const out = { scene_id: req.scene_id, boundary: [], actor: [], addr: [], emo: [], tension: {}, rule: analyzeRules(scene) };
  for (const i of ctx.content) {
    out.boundary.push([i, boundaryFeatures(ctx, i)]);
    out.emo.push([i, emotionFeatures(ctx, i)]);
    const u = ctx.units[i];
    if (u.kind === "action") for (const c of actorCandidates(ctx, i)) out.actor.push([i, c, actorFeatures(ctx, i, c)]);
    else for (const c of addrCandidates(ctx, i)) out.addr.push([i, c, addrFeatures(ctx, i, c)]);
  }
  for (const [name, beats] of Object.entries(req.beats || {})) {
    out.tension[name] = beatGroups(ctx, beats).map((g) => tensionFeatures(ctx, g));
  }
  out.tension.rule = beatGroups(ctx, out.rule.beats).map((g) => tensionFeatures(ctx, g));
  process.stdout.write(JSON.stringify(out) + "\n");
}
