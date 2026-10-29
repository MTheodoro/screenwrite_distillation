// Analyzer service: incremental, hash-cached scene analysis. Environment-agnostic (Worker or Node).
// The worker glue (worker.js) supplies storage (IndexedDB) and the weight loader (fetch + Cache API).
import { parse } from "./fountain.js";
import { analyzeRules } from "./rules.js";
import { analyzeModelStages, unitLines } from "./model.js";
import { sceneContext, actorCandidates } from "./rules.js";

export const ANALYZER_VERSION = "1";

// FNV-1a 53-bit-ish hash (two 32-bit lanes) -> hex. Fast enough for whole scenes.
export function hashText(s) {
  let h1 = 0x811c9dc5, h2 = 0x01000193 ^ s.length;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2 ^ c, 0x5bd1e995);
  }
  return (h1 >>> 0).toString(16).padStart(8, "0") + (h2 >>> 0).toString(16).padStart(8, "0");
}

// Split script text into scene chunks at headings, keeping exact text per scene for hashing.
export function splitScenes(text) {
  const { scenes } = parse(text);
  return scenes;
}

export class AnalyzerService {
  constructor({ storage = null, loadBundle = null, schedule = (fn) => setTimeout(fn, 0), embedder = null, loadRefiner = null } = {}) {
    this.loadRefiner = loadRefiner;    // async () => { refine(scene, result) } (Phase 3 cross-encoder), optional
    this.refiner = null;
    this.focus = null;                 // Set of scene indices to refine (visible / edited); null = none
    this.storage = storage;            // { get(key), set(key, value) } async, may be null
    this.loadBundle = loadBundle;      // async () => bundle JSON
    this.schedule = schedule;
    this.embedder = embedder;          // optional async loader for Phase 2 embeddings
    this.bundle = null;
    this.bundlePromise = null;
    this.mem = new Map();              // hash -> result
    this.queue = [];
    this.generation = 0;
    this.running = false;
  }

  // Lazy: weights are fetched only when a view that needs them asks.
  ensureModel() {
    if (!this.bundlePromise && this.loadBundle) {
      this.bundlePromise = this.loadBundle().then(async (b) => {
        this.bundle = b;
        if (this.loadRefiner) this.refiner = await this.loadRefiner().catch(() => null); // optional: degrade to Phase 1
        this.mem.clear();
        return b;
      })
        .catch((e) => { this.bundlePromise = null; throw e; });
    }
    return this.bundlePromise || Promise.resolve(null);
  }

  key(hash) { return `${ANALYZER_VERSION}:${this.bundle ? "m" : "r"}:${hash}`; }

  // The Phase 3 refiner is expensive (~1 s CPU per scene in plain JS): run it only for scenes the user is looking
  // at. Refined results replace the cached Phase 1 result for that scene hash.
  setFocus(indices) { this.focus = new Set(indices); }

  // Generator: one stage per scheduled task, so no single task blocks the worker for long.
  *analyzeScene(scene) {
    if (!this.bundle) return { ...analyzeRules(scene), unitLines: unitLines(scene) };
    return yield* analyzeModelStages(scene, this.bundle);
  }

  // Called with the full script text (debounced by the caller). Returns scene hashes in order; results
  // stream through onResult(index, hash, result) as they become available.
  async update(text, onResult) {
    const gen = ++this.generation;
    const scenes = splitScenes(text);
    const items = scenes.map((s, index) => ({ index, scene: s, hash: hashText(s.units.map((u) => u.cue || u.text).join("\n")) }));
    const pending = [];
    for (const it of items) {
      const k = this.key(it.hash);
      let r = this.mem.get(k);
      if (!r && this.storage) {
        r = await this.storage.get(k);
        if (r) this.mem.set(k, r);
      }
      // A focused scene whose cached result was never refined goes back through the pipeline.
      if (r && this.refiner && this.focus && this.focus.has(it.index) && !r.refinedPass) r = null;
      if (r) onResult(it.index, it.hash, r, true);
      else pending.push(it);
    }
    this.queue = pending.map((it) => ({ ...it, gen, onResult }));
    this.pump();
    this.lastStarts = scenes.map((s) => s.start);
    return items.map((it) => it.hash);
  }

  pump() {
    if (this.running) return;
    this.running = true;
    const step = () => {
      // Breadth-first over stages: every scene gets beats + tension (stage 1) before any scene gets who/emotion,
      // so on a cold open the Timeline fills in first. Stale generations are dropped.
      this.queue = this.queue.filter((x) => x.gen === this.generation);
      if (!this.queue.length) { this.running = false; return; }
      let qi = 0;
      for (let j = 1; j < this.queue.length; j++) if ((this.queue[j].stage || 0) < (this.queue[qi].stage || 0)) qi = j;
      const it = this.queue[qi];
      {
        it.stages ??= this.analyzeScene(it.scene);
        const st = it.stages.next();
        it.stage = (it.stage || 0) + 1;
        if (!st.done) {
          if (it.stage === 1) it.onResult(it.index, it.hash, st.value, false, false, "partial"); // beats + tension
          this.schedule(step);
          return;
        }
        this.queue.splice(qi, 1);
        const r = st.value;
        const k = this.key(it.hash);
        const refine = this.refiner && this.focus && this.focus.has(it.index);
        if (!refine) {
          this.mem.set(k, r);
          if (this.storage) this.storage.set(k, r);
        }
        it.onResult(it.index, it.hash, r, false);
        if (refine) {
          // Second pass: the transformer re-scores only low-margin who decisions, then the result is cached.
          const ctx = sceneContext(it.scene);
          this.refiner.refine(it.scene, r, ctx.cast.chars, (u) => actorCandidates(ctx, u)).then((rr) => {
            rr.refinedPass = true;
            this.mem.set(k, rr);
            if (this.storage) this.storage.set(k, rr);
            if (it.gen === this.generation) it.onResult(it.index, it.hash, rr, false, true);
          }).catch(() => {}).finally(() => this.schedule(step));
          return;
        }
      }
      this.schedule(step); // yield between scenes so newer edits pre-empt stale work
    };
    this.schedule(step);
  }
}
