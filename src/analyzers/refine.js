// Phase 3 refiner on the plain-JS tiny BERT (tinybert.js): re-scores low-margin who decisions.
// No ONNX / WASM / Transformers.js; the model is one ~1 MB file.
import { loadTinyBert } from "./tinybert.js";

const NONE_NAME = "nobody (setting)";

export function contextText(scene, u, n = 2) {
  const prev = scene.units.slice(0, u).filter((x) => x.kind === "action" || x.kind === "dialogue").slice(-n);
  const fmt = (x) => (x.kind === "dialogue" ? `${x.name}: ` : "") + x.text;
  return prev.map(fmt).join(" ") + " [TARGET] " + scene.units[u].text;
}

export function candName(cast, c) {
  if (c < 0) return NONE_NAME;
  const ch = cast[c];
  const title = ch.name.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());
  return ch.gender === "m" ? `${title} (he)` : ch.gender === "f" ? `${title} (she)` : title;
}

// buffer: contents of public/models/who-tiny.bin. margin: Phase 1 top-two gap below which a line is re-scored.
export function makeRefiner(buffer, { margin = 0.3, topk = 2 } = {}) {
  const bert = loadTinyBert(buffer);
  // Async: yields between lines (~20-60 ms each) so newer edits are never stuck behind refinement.
  async function refine(scene, result, cast, candidatesOf) {
    for (const [k, line] of Object.entries(result.lines)) {
      if (!("who" in line) || line.margin >= margin || line.who.length > 1) continue; // joint actions: trust Phase 1
      const u = Number(k);
      const first = [line.who.length ? line.who[0] : -1];
      if (line.runnerUp !== null && line.runnerUp !== undefined) first.push(line.runnerUp);
      const order = [...first, ...candidatesOf(u).filter((c) => !first.includes(c))].slice(0, topk);
      await new Promise((r) => setTimeout(r, 0));
      const text = contextText(scene, u);
      let best = null;
      for (const c of order) {
        const s = bert.score(text, candName(cast, c));
        if (!best || s > best.s) best = { s, c };
      }
      const prevTop = line.who.length ? line.who[0] : -1;
      if (best.c !== prevTop) line.who = best.c < 0 ? [] : [best.c]; // same winner: keep Phase 1's set
      line.refined = true;
    }
    return result;
  }
  return { refine, size: bert.size };
}
