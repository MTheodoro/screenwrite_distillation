// Phase 3: tiny transformer cross-encoder for ambiguous who-attribution (Transformers.js, WASM).
// Only lines whose Phase 1 top-two margin is below `margin` are re-scored, in one batch per scene,
// after the fast result has already been delivered.
import { AutoTokenizer, AutoModelForSequenceClassification, env } from "@huggingface/transformers";

const NONE_NAME = "nobody (setting)";

export async function loadXenc({ localPath, modelId = "who-xenc", margin = 0.3, topk = 3 } = {}) {
  env.allowRemoteModels = false;
  env.localModelPath = localPath;
  const tokenizer = await AutoTokenizer.from_pretrained(modelId);
  const model = await AutoModelForSequenceClassification.from_pretrained(modelId, { dtype: "q8" });
  return { tokenizer, model, margin, topk };
}

function contextText(scene, u, n = 2) {
  const prev = scene.units.slice(0, u).filter((x) => x.kind === "action" || x.kind === "dialogue").slice(-n);
  const fmt = (x) => (x.kind === "dialogue" ? `${x.name}: ` : "") + x.text;
  return prev.map(fmt).join(" ") + " [TARGET] " + scene.units[u].text;
}

function candName(cast, c) {
  if (c < 0) return NONE_NAME;
  const ch = cast[c];
  const title = ch.name.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
  return ch.gender === "m" ? `${title} (he)` : ch.gender === "f" ? `${title} (she)` : title;
}

// result: output of analyzeModel(scene, ...); cast: ctx.cast.chars (needs gender). Mutates and returns result.
export async function refineWho(xenc, scene, result, cast, candidatesOf) {
  const pairs = [];
  for (const [k, line] of Object.entries(result.lines)) {
    if (!("who" in line) || line.margin >= xenc.margin || line.who.length > 1) continue; // joint actions: trust Phase 1
    const u = Number(k);
    const first = [line.who.length ? line.who[0] : -1];
    if (line.runnerUp !== null && line.runnerUp !== undefined) first.push(line.runnerUp);
    const order = [...first, ...candidatesOf(u).filter((c) => !first.includes(c))].slice(0, xenc.topk);
    const text = contextText(scene, u);
    for (const c of order) pairs.push({ u, c, text, cand: candName(cast, c) });
  }
  if (!pairs.length) return result;
  const enc = await xenc.tokenizer(pairs.map((p) => p.text), { text_pair: pairs.map((p) => p.cand), padding: true, truncation: true, max_length: 128, return_token_type_ids: true });
  const { logits } = await xenc.model(enc);
  const scores = logits.data;
  const best = new Map();
  pairs.forEach((p, k) => {
    const b = best.get(p.u);
    if (!b || scores[k] > b.s) best.set(p.u, { s: scores[k], c: p.c });
  });
  for (const [u, { c }] of best) {
    const line = result.lines[u];
    const prevTop = line.who.length ? line.who[0] : -1;
    if (c !== prevTop) line.who = c < 0 ? [] : [c]; // same winner: keep Phase 1's set (joint actions)
    line.refined = true;
  }
  return result;
}
