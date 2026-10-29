import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { AnalyzerService, hashText } from "../src/analyzers/service.js";

const bundlePath = new URL("../public/models/analyzers.json", import.meta.url);
const SCRIPT = `INT. KITCHEN - NIGHT

MAYA (30s) slams the fridge.

MAYA
Where were you, Jonah?

JONAH (30s) drops his keys.

JONAH
Out.

EXT. ROOF - LATER

Maya climbs the ladder. She stops.

MAYA
You can't hide up here.
`;

const syncSchedule = (fn) => queueMicrotask(fn);

function memoryStorage() {
  const m = new Map();
  return { m, get: async (k) => m.get(k), set: async (k, v) => { m.set(k, v); } };
}

function collect(service, text) {
  return new Promise((resolve) => {
    const got = new Map();
    let total = null;
    const done = () => total !== null && got.size === total && resolve(got);
    service.update(text, (index, hash, result, cached) => { got.set(index, { hash, result, cached }); done(); })
      .then((hashes) => { total = hashes.length; done(); });
  });
}

test("hash is stable and content-sensitive", () => {
  assert.equal(hashText("abc"), hashText("abc"));
  assert.notEqual(hashText("abc"), hashText("abd"));
});

test("analyzes every scene, then serves unchanged scenes from cache", async () => {
  const storage = memoryStorage();
  const s = new AnalyzerService({ storage, schedule: syncSchedule });
  const first = await collect(s, SCRIPT);
  assert.equal(first.size, 2);
  assert.ok([...first.values()].every((r) => !r.cached));
  // Edit only the second scene: the first must come from cache, the second re-analyzed.
  const edited = SCRIPT.replace("She stops.", "She stops dead.");
  const second = await collect(s, edited);
  assert.equal(second.get(0).cached, true);
  assert.equal(second.get(1).cached, false);
  assert.notEqual(second.get(1).hash, first.get(1).hash);
});

test("results persist through storage across service instances", async () => {
  const storage = memoryStorage();
  await collect(new AnalyzerService({ storage, schedule: syncSchedule }), SCRIPT);
  const again = await collect(new AnalyzerService({ storage, schedule: syncSchedule }), SCRIPT);
  assert.ok([...again.values()].every((r) => r.cached));
});

test("model weights load lazily and change the cache key", async () => {
  let loads = 0;
  const bundle = JSON.parse(readFileSync(bundlePath, "utf8"));
  const s = new AnalyzerService({ schedule: syncSchedule, loadBundle: async () => { loads++; return bundle; } });
  await collect(s, SCRIPT);
  assert.equal(loads, 0, "weights must not load before a view asks for them");
  await s.ensureModel();
  await s.ensureModel();
  assert.equal(loads, 1);
  const r = await collect(s, SCRIPT);
  assert.ok([...r.values()].every((x) => !x.cached && Array.isArray(x.result.tension)));
});

test("a newer update pre-empts stale queued work", async () => {
  const queue = [];
  const s = new AnalyzerService({ schedule: (fn) => queue.push(fn) });
  const seen = [];
  await s.update(SCRIPT, (i) => seen.push(["old", i]));
  await s.update(SCRIPT.replace("Out.", "Out!"), (i, h, r, cached) => seen.push(["new", i, cached]));
  while (queue.length) queue.shift()();
  assert.ok(!seen.some(([g]) => g === "old"), "stale generation must not deliver results");
});
