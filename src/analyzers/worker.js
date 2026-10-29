// Web Worker entry. The editor never imports analyzer code; it only posts text here.
//
// Messages in:
//   { type: "update", text, characters? } full script text, debounced by the caller (e.g. 300 ms after typing stops);
//                                       characters: the app's character tags [{ name, aliases?, gender? }]
//   { type: "need-model" }              first time analysis is shown: load the bundled weights module
// Messages out:
//   { type: "scenes", hashes, starts }  scene hashes and first-line numbers, in script order
//   { type: "result", index, hash, result, cached }
//   { type: "model", status: "ready" | "error", error? }
import { AnalyzerService } from "./service.js";

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

// Weights are a JS module bundled with the app (src/analyzers/weights.js, ~80 KB gzipped). The dynamic import
// keeps them out of the worker's startup; it never touches the network.
async function loadBundle() {
  return (await import("./weights.js")).default;
}

// Yield to the event loop between scenes; prefer a macrotask so new "update" messages are handled first.
const schedule = (fn) => setTimeout(fn, 0);

const service = new AnalyzerService({ storage: idbStorage(), loadBundle, schedule });
let lastText = "", lastChars = [];

self.onmessage = async (e) => {
  const msg = e.data;
  if (msg.type === "update") {
    lastText = msg.text; lastChars = msg.characters || [];
    const hashes = await service.update(msg.text, (index, hash, result, cached) =>
      self.postMessage({ type: "result", index, hash, result, cached }), lastChars);
    self.postMessage({ type: "scenes", hashes, starts: service.lastStarts });
  } else if (msg.type === "need-model") {
    try {
      await service.ensureModel();
      self.postMessage({ type: "model", status: "ready" });
      if (lastText) self.onmessage({ data: { type: "update", text: lastText, characters: lastChars } }); // upgrade rule results
    } catch (err) {
      self.postMessage({ type: "model", status: "error", error: String(err) });
    }
  }
};
