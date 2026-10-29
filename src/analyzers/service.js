// Analyzer service: incremental, hash-cached scene analysis. Environment-agnostic (Worker or Node).
// The worker glue (worker.js) supplies storage (IndexedDB) and the weight loader (fetch + Cache API).
import { parse } from "./fountain.js";
import { analyzeRules } from "./rules.js";
import { analyzeModel } from "./model.js";
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

  key(hash) { return `${ANALYZER_VERSION}:${this.bundle ? (this.refiner ? "x" : "m") : "r"}:${hash}`; }

  analyzeScene(scene) {
    return this.bundle ? analyzeModel(scene, this.bundle) : analyzeRules(scene);
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
      if (r) onResult(it.index, it.hash, r, true);
      else pending.push(it);
    }
    this.queue = pending.map((it) => ({ ...it, gen, onResult }));
    this.pump();
    return items.map((it) => it.hash);
  }

  pump() {
    if (this.running) return;
    this.running = true;
    const step = () => {
      const it = this.queue.shift();
      if (!it) { this.running = false; return; }
      if (it.gen === this.generation) {
        const r = this.analyzeScene(it.scene);
        const k = this.key(it.hash);
        if (!this.refiner) {
          this.mem.set(k, r);
          if (this.storage) this.storage.set(k, r);
        }
        it.onResult(it.index, it.hash, r, false);
        if (this.refiner) {
          // Second pass: the transformer re-scores only low-margin who decisions, then the result is cached.
          const ctx = sceneContext(it.scene);
          this.refiner.refine(it.scene, r, ctx.cast.chars, (u) => actorCandidates(ctx, u)).then((rr) => {
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
