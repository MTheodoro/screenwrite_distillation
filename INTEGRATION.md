# Integrating the Screenwrite analyzers

This repo produces small, local, offline analyzers for Screenwrite. They answer, per scene:

- **Beats**: where each dramatic beat starts.
- **Tension**: a score from 0 to 1 per beat, for the Timeline.
- **Who**: which character performs or is described by each action line. The answer can be several characters, or none.
- **Addressee**: who each line of dialogue is spoken to. The answer is one or more characters, `ALL`, `SELF`, or no listener.
- **Emotion**: one of 8 labels plus an intensity, per line.

Everything runs in a **Web Worker** in the browser. Nothing is sent to a server, nothing writes into the screenplay, and the editor never imports analyzer code.

## 1. What to ship

| File | Gzipped | When it loads |
|---|---|---|
| `src/analyzers/{fountain,cast,lexicon,rules,model,service,worker}.js` | ~16 KB | with the worker |
| `src/analyzers/{refine,tinybert}.js` | ~6 KB | with the worker |
| `public/models/analyzers.json` (Phase 1 decision trees) | **80 KB** | first time the Timeline or a character view opens |
| `public/models/who-tiny.bin` (Phase 3 tiny BERT, int8) | **1.7 MB** | together with `analyzers.json` |

That's about **1.8 MB in total**, fetched once and cached for offline use. If you want to stay under 100 KB, drop `who-tiny.bin` and the refiner (see §6); the rule-based fallback and the Phase 1 models still work.

**Do not ship** anything in `models-archive/`. It holds the ONNX cross-encoders, which need ONNX Runtime / Transformers.js (≥ 8 MB with the runtime), and the optional embedding table. `@huggingface/transformers` is a dev dependency, used only for benchmarks. **No WASM runtime is required.**

Copy `src/analyzers/` into the app. Serve `public/models/` as static files next to the worker, or adjust the two URLs at the top of `worker.js`. The files are plain ES modules with no dependencies.

## 2. Architecture

```
editor (main thread)                         analyzer worker (src/analyzers/worker.js)
  text change ─ debounce 300 ms ─► {update, text} ─► split scenes, hash each scene
                                                     ├─ cached (memory / IndexedDB)? → result immediately
                                                     └─ otherwise queue it; one small task at a time:
                                                          stage 1 beats + tension  → "partial" result
                                                          stage 2 who + addressee
                                                          stage 3 emotion          → final result
  Timeline / character view opened ─► {need-model}   (lazy: fetches weights; rules until then)
  character view shows scenes [i..] ─► {focus, indices}  (Phase 3 refiner, focused scenes only)
  ◄── {scenes, hashes, starts}, {result, index, hash, result, cached, refined}, {model, status}
```

- **Incremental**: only scenes whose text changed are re-analyzed. Results are cached by scene hash in memory and in IndexedDB (`screenwrite-analyzers`).
- **Breadth-first**: on a cold open, every scene gets beats and tension before any scene gets who and emotion. The Timeline fills in first.
- **Pre-emptive**: a newer `update` cancels queued work from older text.
- **Phase 3 refiner**: costs about 1 s of worker CPU per scene, so it runs only on the scenes in `focus` and yields between lines. Everything else uses Phase 1.

## 3. Main-thread wiring (example)

```js
const worker = new Worker(new URL("./analyzers/worker.js", import.meta.url), { type: "module" });
let starts = [];
const results = new Map(); // scene index -> latest result

worker.onmessage = ({ data: m }) => {
  if (m.type === "scenes") starts = m.starts;
  if (m.type === "result") {
    results.set(m.index, m.result);
    // m.result.lines may be empty on a "partial" result (beats + tension only); m.refined marks the Phase 3 pass.
    scheduleRender(m.index); // update Timeline / character views, never the editor document
  }
};

// Debounced: never on every keystroke.
let timer;
editor.onChange(() => {
  clearTimeout(timer);
  timer = setTimeout(() => worker.postMessage({ type: "update", text: editor.getText() }), 300);
});

// Lazy weights: the first time a view that needs them opens.
timelineView.onFirstOpen(() => worker.postMessage({ type: "need-model" }));
characterView.onFirstOpen(() => worker.postMessage({ type: "need-model" }));

// Precise attribution only where the user is looking.
characterView.onVisibleScenes((indices) => worker.postMessage({ type: "focus", indices }));
```

Map units to editor lines: `starts[sceneIndex] + result.unitLines[unitIndex]` is the 0-based line of a unit in the text you posted. Results are keyed by scene hash, so the offsets stay valid when text above the scene moves.

## 4. Result format (one scene)

```js
{
  cast: [{ id, name, names, gender }],     // gender "m" | "f" | "?" (guessed from pronouns)
  beats: [unitIndex, ...],                 // units that start a beat
  tension: [0..1, ...],                    // one per beat, lightly smoothed
  unitLines: [lineOffset, ...],            // per unit, relative to the scene's first line
  lines: {
    [unitIndex]: {                         // action line
      who: [charId, ...],                  // [] = setting / nobody
      conf, margin, runnerUp, refined?,    // margin = top-1 minus top-2 probability
      emo: [label, intensity],             // neutral joy sadness anger fear surprise disgust affection
    },
    [unitIndex]: {                         // dialogue
      speaker: charId,
      to: [charId | -2 /*ALL*/ | -3 /*SELF*/ | -4 /*nobody*/],
      conf, margin, emo,
    },
  },
}
```

A unit is one action **sentence**, one dialogue block, a heading or a transition. The parser in `fountain.js` defines units, so the same text always gives the same indices.

Use `conf` and `margin` in the UI. For example, show a "?" when `margin < 0.2`, and let the writer correct it. Never write anything back into the screenplay.

## 5. Offline and versioning

- Weights are fetched cache-first into the Cache API (`screenwrite-analyzer-models-v1`), so they stay available offline after the first load. If the app has a service worker, add both model files to its precache.
- Results in IndexedDB are keyed `ANALYZER_VERSION:mode:sceneHash`. **Bump `ANALYZER_VERSION` in `service.js` whenever you ship new weights**, so stale results aren't reused. Also bump `CACHE_NAME` in `worker.js` to refetch the weights.

## 6. Options and trade-offs

| Setup | Download | Who: synthetic / real text (exact) | Cost |
|---|---|---|---|
| Rules only (no `need-model`) | ~16 KB code | 80.5% / 37% | ~2 ms/scene |
| Phase 1 (`analyzers.json`) | +80 KB | 81% / ~60% | ~5 ms/scene, 3 stages |
| + Phase 3 plain-JS refiner, focused scenes | +1.7 MB | 83% / **66%** | ~1 s CPU per focused scene |
| (archive) + Phase 3 bert-mini via ONNX Runtime | +8 MB + ≥4 MB runtime | 86% / 62% | ~30 ms/scene |

"Real text" is 21 excerpts from public-domain plays: a harder format than screenplays and a stress test, not a forecast. To drop the refiner, delete `loadRefiner` from `worker.js` and don't send `focus`.

## 7. Performance (measured)

Headless Chromium with 4× CPU throttle (`node tools/analyzers/perf_browser.mjs 4`):

- **Per stage (one worker task):** p50 ~4.5 ms, p95 ~10 ms. The worst stages, on very large scenes, reach ~20–30 ms.
- **Whole edited scene:** p50 ~17 ms.
- **Cold, ~135-page script:** beats + tension for every scene ~0.6–0.7 s, everything ~1.2–1.4 s.

None of this touches the main thread, so typing never waits on the analyzers. The original targets were < 16 ms per edited scene and < 500 ms cold. They are met per task, not for whole scenes or cold full scripts. The cache makes reopening instant.

## 8. Tests and tools

- `npm test`: service tests covering incremental re-analysis, cache, lazy loading, pre-emption and the refiner pass.
- `node test/tinybert_parity.mjs`: plain-JS tiny BERT vs PyTorch on 300 pairs. Expected: same decision about 98% of the time, small differences in the logits from int8 quantization.
- `node tools/analyzers/perf.mjs` (Node) and `perf_browser.mjs` (throttled Chromium).
- `python tools/analyzers/bench.py --bundle public/models/analyzers.json [--tiny] [--prefix pd_|s]`: accuracy against the Opus gold sets.

## 9. Retraining

Everything needed is in `tools/analyzers/` (see `NOTES.md`). The training data, meaning the synthetic scenes, Haiku and Opus labels, gold sets and play excerpts, lives on the `data-backup` branch. Copy its `data/analyzers/` into this tree, then:

```
python tools/analyzers/label.py units && python tools/analyzers/label.py export
python tools/analyzers/train.py                      # -> public/models/analyzers.json
python tools/analyzers/phase3_data.py
python tools/analyzers/train_phase3.py --base <bert-tiny> --ckpt data/analyzers/phase3/xenc_tiny.pt --no-onnx
python tools/analyzers/export_xenc_js.py --ckpt data/analyzers/phase3/xenc_tiny.pt --base <bert-tiny>
```

Features are computed **only in JS** (`rules.js`, called from Python through `features.mjs`), so training and the app always see identical inputs.

## 10. Known limits

- **Joint actions** ("They fight") are right only ~30% of the time.
- **Emotion on real text** is weak: about 48% accuracy. Treat it as a hint.
- **Narrative aliases** (STRANGER → INGRID once named) are not merged by the parser. The models handle them per line, but the cast list may show both names.
- **Training data is mostly synthetic.** The best next improvement is more real-text excerpts labeled by Haiku, at about $0.01 each.
