// Web Worker entry. The editor never imports analyzer code; it only posts text here.
//
// Messages in:
//   { type: "update", text }            full script text, debounced by the caller (e.g. 300 ms after typing stops)
//   { type: "need-model" }              first open of Timeline / character views: load distilled weights
// Messages out:
//   { type: "scenes", hashes }          scene hashes in script order
//   { type: "result", index, hash, result, cached }
//   { type: "model", status: "ready" | "error", error? }
import { AnalyzerService } from "./service.js";

const MODEL_URL = new URL("../../public/models/analyzers.json", import.meta.url).href;
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
async function loadBundle() {
  const cache = await caches.open(CACHE_NAME);
  let res = await cache.match(MODEL_URL);
  if (!res) {
    res = await fetch(MODEL_URL);
    if (!res.ok) throw new Error(`model fetch ${res.status}`);
    await cache.put(MODEL_URL, res.clone());
  }
  return res.json();
}

// Yield to the event loop between scenes; prefer a macrotask so new "update" messages are handled first.
const schedule = (fn) => setTimeout(fn, 0);

const service = new AnalyzerService({ storage: idbStorage(), loadBundle, schedule });
let lastText = "";

self.onmessage = async (e) => {
  const msg = e.data;
  if (msg.type === "update") {
    lastText = msg.text;
    const hashes = await service.update(msg.text, (index, hash, result, cached) =>
      self.postMessage({ type: "result", index, hash, result, cached }));
    self.postMessage({ type: "scenes", hashes });
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
