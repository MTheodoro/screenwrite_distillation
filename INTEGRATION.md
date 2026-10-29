# Integrating the Screenwrite analyzers

(Built without access to the Screenwrite codebase or UI. Where this says "Timeline" or "UI that shows analysis", map it
to whatever views the app actually has.)

These are small, local analyzers for Screenwrite. They run in a **Web Worker**, work offline, never write into the screenplay, and the editor never imports them. Per scene they produce:

- **Beats**: where each dramatic beat starts.
- **Tension**: a score from 0 to 1 per beat, for the Timeline.
- **Who**: which character performs, or is described by, each action line. The answer can be several characters, or none.
- **Mood**: one of 8 emotions plus a strength, for each line and summarized for each beat (`beatMood`).

(An addressee model, for who a line is spoken to, exists but is off by default. Pass `{ addressee: true }` to
`analyzeModelStages` to enable it.)

## 1. What to ship

| File | Size (gzipped) | Loaded |
|---|---|---|
| `src/analyzers/{fountain,cast,lexicon,rules,model,service,worker}.js` | ~16 KB | with the worker |
| `src/analyzers/weights.js` (distilled decision trees, generated) | ~80 KB | lazily, via `import()`, the first time analysis is shown |

The total is about **100 KB**, and **no network calls at all**. The weights are an ordinary ES module in the app's own bundle, so they work offline, under `file://`, in Electron and the like. There is no server, no `fetch`, no WASM and no dependency. Copy `src/analyzers/` into the app source, and make sure the bundler keeps `worker.js` as a module worker. Most bundlers handle `new Worker(new URL("./analyzers/worker.js", import.meta.url), { type: "module" })` out of the box. The worker's `import("./weights.js")` becomes a lazily loaded chunk of the app.

Do **not** ship `src/analyzers/{refine,tinybert,xenc,embed}.js`, `public/models/` or anything in `models-archive/`. Those are experiments and benchmark inputs.

## 2. How it runs

```
editor (main thread)                          analyzer worker
  text changes ─ 300 ms debounce ─► {update, text} ─► split into scenes, hash each scene
                                                      ├─ hash cached (memory / IndexedDB) → result at once
                                                      └─ else queued, one small task at a time:
                                                           1. beats + tension    → partial result
                                                           2. who + addressee
                                                           3. emotion            → final result
  first UI that shows analyzer output ─► {need-model}   (import bundled weights; rule-based results until then)
  ◄── {scenes, hashes, starts}   {result, index, hash, result, cached}   {model, status}
```

- **While typing:** nothing runs per keystroke. After a 300 ms pause, only the edited scene is re-analyzed. That takes about 3 ms, or about 14.5 ms (p50) on a 4× throttled CPU, split into three tasks of about 4–11 ms each. Results update about 0.3 s after the writer pauses. The main thread is never blocked.
- **Opening a script:** unchanged scenes come from the IndexedDB cache, so they are instant. On a cold open, every scene gets beats and tension first, so the Timeline fills in before who and emotion.
- **Stale work is dropped:** a newer `update` cancels anything queued from older text.

## 3. Main-thread wiring

```js
const worker = new Worker(new URL("./analyzers/worker.js", import.meta.url), { type: "module" });
let starts = [];               // first line of each scene in the posted text
const results = new Map();     // scene index -> latest result

worker.onmessage = ({ data: m }) => {
  if (m.type === "scenes") starts = m.starts;
  if (m.type === "result") {   // may arrive twice per scene: partial (beats + tension), then final
    results.set(m.index, m.result);
    scheduleRender(m.index);   // update whatever UI shows analysis, never the document
  }
};

let timer;
editor.onChange(() => {
  clearTimeout(timer);
  timer = setTimeout(() => worker.postMessage({ type: "update", text: editor.getText() }), 300);
});

// Lazy weights (80 KB, bundled; no network): send once, the first time any UI that displays beats / tension / who / mood opens.
// Alternatively send it at idle after startup (requestIdleCallback); it is cheap either way.
function ensureAnalyzerModel() {
  if (!ensureAnalyzerModel.sent) worker.postMessage({ type: "need-model" });
  ensureAnalyzerModel.sent = true;
}
```

The editor line of unit `u` in scene `i` is `starts[i] + results.get(i).unitLines[u]`, 0-based, in the text you posted. Results are cached by scene hash, so these offsets stay valid when text above the scene moves.

## 4. Result format (one scene)

```js
{
  cast: [{ id, name, names, gender }],     // gender "m" | "f" | "?"
  beats: [unitIndex, ...],                 // units that start a beat
  tension: [0..1, ...],                    // one per beat
  beatMood: [[label, strength], ...],      // one per beat: strongest non-neutral emotion, or ["neutral", 0]
  unitLines: [lineOffset, ...],            // per unit, relative to the scene's first line
  lines: {
    [unitIndex]: { who: [charId], conf, margin, runnerUp, emo: [label, intensity] },   // action line
    [unitIndex]: { speaker, emo },                                                       // dialogue (speaker = from the cue)
  },
}
```

A unit is one action **sentence**, one dialogue block, a heading or a transition, as `fountain.js` defines them. `who: []` means setting, or nobody.

**Show only confident answers.** `margin` is the gap between the best and the second-best answer. Use these thresholds:

```js
const SHOW_WHO = 0.4;   // ~94% correct on screenplay-style scenes, ~80% on plays; about half the lines shown
const who = line.margin >= SHOW_WHO ? line.who : null;   // null -> show "?" and let the writer choose
```

Below the threshold, show "?" and let the writer pick, or show the guess styled as a suggestion. A confidently shown wrong answer is worse than a gap. Accuracy against the share of lines shown, measured on the gold sets:

| Task / set | margin ≥ | 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 |
|---|---|---|---|---|---|---|---|---|
| Who synthetic | accuracy | 78% | 84% | 88% | 91% | 94% | 96% | 98% |
| | shown | 100% | 88% | 77% | 68% | 55% | 48% | 42% |
| Who plays | accuracy | 64% | 69% | 72% | 75% | 80% | 81% | 82% |
| | shown | 100% | 86% | 74% | 61% | 49% | 32% | 22% |

Make the thresholds a setting, so they can be tuned once real screenplays are measured.

## 5. Offline and updates

- **Everything is local.** Code and weights are part of the app bundle. Analysis results are cached in IndexedDB by scene hash, so reopening a script is instant.
- **When you ship new weights:** regenerate `weights.js` with `tools/analyzers/train.py`, and bump `ANALYZER_VERSION` in `service.js` so cached results from old weights aren't reused.

## 6. Accuracy and speed (measured)

| | Synthetic screenplay scenes (116) | Real text: public-domain play excerpts (21) |
|---|---|---|
| Beat boundaries, F1 (±1 line) | 0.90 | 0.93 |
| Who, exact / top-1 | 81% / 85% | ~60% / ~64% |
| Mood (line emotion), accuracy | 71% | 48% |
| Tension, pairs ordered correctly within a scene | 84% | — |

Gold labels are the agreement of 3 independent Claude Opus passes. Plays are a harder, different format, and no real screenplays were available to test on (copyright), so treat **who** and **emotion** as assistive hints. Beats, tension and addressee are solid.

Speed, measured in headless Chromium with a 4× CPU throttle (`node tools/analyzers/perf_browser.mjs 4`):

- **Per worker task:** p50 ~4.3 ms, p95 ~11 ms.
- **Whole edited scene:** p50 ~14.5 ms, p95 ~33 ms (large scenes).
- **Cold, ~135-page script:** ~1.3 s in total, with the Timeline (beats + tension) ready at ~0.65 s. Reopening is instant from cache.

## 7. Tests and tools

- `npm test`: worker service, covering incremental re-analysis, cache hits, lazy loading and pre-emption.
- `node tools/analyzers/perf.mjs` and `node tools/analyzers/perf_browser.mjs 4`: speed.
- `python tools/analyzers/bench.py --bundle public/models/analyzers.json [--prefix pd_|s]`: accuracy against the gold sets.
- Retraining: see `tools/analyzers/NOTES.md`. Training data lives on the `data-backup` branch.

## 8. Known limits

- **Who** and **emotion** are weaker on real text than on synthetic scenes; see the table in §6.
- Joint actions ("They fight") are right only about 30% of the time.
- Narrative aliases (STRANGER → INGRID once named) are not merged in the cast list.
