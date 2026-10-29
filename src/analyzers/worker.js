// Web Worker entry. The editor never imports analyzer code; it only posts text here.
//
// Messages in:
//   { type: "update", text }            full script text, debounced by the caller (e.g. 300 ms after typing stops)
//   { type: "need-model" }              first open of Timeline / character views: load distilled weights
//   { type: "focus", indices, text }    scenes on screen in a character view: refine their who-attribution
// Messages out:
//   { type: "scenes", hashes, starts }  scene hashes and first-line numbers, in script order
//   { type: "result", index, hash, result, cached, refined }   (refined: second message after the Phase 3 pass)
//   { type: "model", status: "ready" | "error", error? }
import { AnalyzerService } from "./service.js";
import { makeRefiner } from "./refine.js";

const MODEL_URL = new URL("../../public/models/analyzers.json", import.meta.url).href;
const REFINER_URL = new URL("../../public/models/who-tiny.bin", import.meta.url).href;
const CACHE_NAME = "screenwrite-analyzer-models-v1";
const DB_NAME = "screenwrite-analyzers";

function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onupgradeneeded = () => req.result.createObjectStore("results");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

function idbStorage() {
  const dbp = openDB().catch(() => null);
  const tx = async (mode, fn) => {
    const db = await dbp;
    if (!db) return undefined;
    return new Promise((resolve) => {
      const t = db.transaction("results", mode);
      const r = fn(t.objectStore("results"));
      t.oncomplete = () => resolve(r && r.result);
      t.onerror = () => resolve(undefined);
    });
  };
  return {
    get: (k) => tx("readonly", (s) => s.get(k)),
    set: (k, v) => tx("readwrite", (s) => s.put(v, k)),
  };
}

// Cache-first so weights stay available offline after the first load.
async function cachedFetch(url) {
  const cache = await caches.open(CACHE_NAME);
  let res = await cache.match(url);
  if (!res) {
    res = await fetch(url);
    if (!res.ok) throw new Error(`model fetch ${res.status}: ${url}`);
    await cache.put(url, res.clone());
  }
  return res;
}

async function loadBundle() {
  return (await cachedFetch(MODEL_URL)).json();
}

// Yield to the event loop between scenes; prefer a macrotask so new "update" messages are handled first.
const schedule = (fn) => setTimeout(fn, 0);

// Phase 3 refiner: plain-JS tiny BERT (~1 MB, no WASM runtime), loaded with the other weights.
async function loadRefiner() {
  const r = makeRefiner(await (await cachedFetch(REFINER_URL)).arrayBuffer());
  return { refine: async (scene, result, cast, candidatesOf) => r.refine(scene, result, cast, candidatesOf) };
}

const service = new AnalyzerService({ storage: idbStorage(), loadBundle, loadRefiner, schedule });
let lastText = "";

self.onmessage = async (e) => {
  const msg = e.data;
  if (msg.type === "update") {
    lastText = msg.text;
    const hashes = await service.update(msg.text, (index, hash, result, cached, refined = false) =>
      self.postMessage({ type: "result", index, hash, result, cached, refined }));
    self.postMessage({ type: "scenes", hashes, starts: service.lastStarts });
  } else if (msg.type === "focus") {
    service.setFocus(msg.indices);
    // Focused scenes without a refined result are re-run; everything else comes straight from cache.
    if (lastText) self.onmessage({ data: { type: "update", text: lastText } });
  } else if (msg.type === "need-model") {
    try {
      await service.ensureModel();
      self.postMessage({ type: "model", status: "ready" });
      if (lastText) self.onmessage({ data: { type: "update", text: lastText } }); // upgrade rule results
    } catch (err) {
      self.postMessage({ type: "model", status: "error", error: String(err) });
    }
  }
};
