# Integrating the Screenwrite analyzers (v2)

(Built without access to the Screenwrite codebase or UI. Where this says "Timeline" or "character view", map it to the
views the app actually has.)

Small, local analyzers that run in a **Web Worker**, work offline, never write into the screenplay, and are never
imported by the editor. Per scene they produce:

- **Beats**: *dramatic* beats (a turn in the scene: new tactic, reveal, entrance, decision), typically 4–8 per scene.
  Not paragraphs.
- **Tension**: 0–1 per beat.
- **Beat mood**: the tone of each beat, as a writer would name it: a family (calm / warm / light / sad / tense /
  conflict), a mood within it (16: tense, suspense, ominous, playful, tender, melancholy, grief, hostile, …), and an
  intensity of 1–5.
- **Beat summaries**: one outline line per beat, built from the writer's own key sentence (pronouns resolved to names),
  e.g. `Desmond: "Two years, Pri. Two years and you didn't even look"`.
- **Who** (every action line is classified, nothing is left out):
  - `who`: the character(s) acting or described, possibly several.
  - `kind`: one of `character`, `setting` (place, light, weather), `event` (objects, sounds, machines),
    `extra` (unnamed people or animals), `camera` (shots, inserts, on-screen text) or `abstract` (narration, reflection,
    time passing).
  - `why`: which rule decided, for confidence display (see §5).
- **Line emotion**: 8 emotions + intensity per line (feeds beat mood).

## 1. What to ship

Copy these from `src/analyzers/` (all plain ES modules, no dependencies, no network):

| Files | Size (gz) | Loaded |
|---|---|---|
| `fountain cast names lexicon rules model service worker wordtable summarize describe taxonomy verbs` `.js` | ~70 KB | with the worker |
| `emotable kindtable beatcue` `.js` (learned word tables) | ~92 KB | with the worker |
| `weights.js` (trees + mood tables, generated) | ~175 KB | lazily via `import()` on `need-model` |

About **340 KB gzipped** in total (`verbs.js` is a corpus-derived verb/noun lexicon used by the who rules). Everything is in the app bundle: no `fetch`, no server, no WASM, works under
`file://` and in Electron. Keep `worker.js` a module worker:
`new Worker(new URL("./analyzers/worker.js", import.meta.url), { type: "module" })`.

Do **not** ship `refine.js`, `tinybert.js`, `xenc.js`, `embed.js`, `describe_weights.js`, `public/models/` or
`models-archive/` (experiments / training artefacts).

## 2. How it runs

```
editor (main thread)                          analyzer worker
  text changes ─ 300 ms debounce ─► {update, text, characters} ─► split into scenes, hash each scene
                                                      ├─ hash cached (memory / IndexedDB) → result at once
                                                      └─ else queued, one small task at a time:
                                                           1. beats + tension          → partial result
                                                           2. who + line kind
                                                           3. emotion, beat mood, beat summaries → final result
  first UI that shows analyzer output ─► {need-model}   (import bundled weights; rule-based results until then)
  ◄── {scenes, hashes, starts}   {result, index, hash, result, cached}   {model, status}
```

Only edited scenes are re-analyzed, ~0.3 s after the writer pauses; a newer `update` cancels queued work for older text.

## 3. Main-thread wiring

```js
const worker = new Worker(new URL("./analyzers/worker.js", import.meta.url), { type: "module" });
let starts = [];
const results = new Map();     // scene index -> latest result

worker.onmessage = ({ data: m }) => {
  if (m.type === "scenes") starts = m.starts;
  if (m.type === "result") { results.set(m.index, m.result); scheduleRender(m.index); }  // partial, then final
};

let timer;
editor.onChange(() => {
  clearTimeout(timer);
  timer = setTimeout(() => worker.postMessage({
    type: "update",
    text: editor.getText(),
    // NEW: the app's character tags, as given. Strongly recommended: names the app knows are never missed, and a
    // gender the writer set wins over inference. Shape: [{ name, aliases?: [], gender?: "m" | "f" }] or plain names.
    characters: app.characters.map((c) => ({ name: c.name, aliases: c.aliases || [], gender: c.gender })),
  }), 300);
});

function ensureAnalyzerModel() {   // once, when any analysis UI first opens (or at idle after startup)
  if (!ensureAnalyzerModel.sent) worker.postMessage({ type: "need-model" });
  ensureAnalyzerModel.sent = true;
}
```

The editor line of unit `u` in scene `i` is `starts[i] + results.get(i).unitLines[u]` (0-based, in the posted text).

**Script-wide characters.** Even without tags, the worker learns the cast across the whole script: a character
introduced in scene 3 is recognised by name in scene 40, and a pronoun that pins down someone's gender anywhere counts
everywhere ("ZORGABITCH draws a knife. She…" in scene 1 makes "She smiles" in scene 9 hers).

## 4. Result format (one scene)

```js
{
  cast: [{ id, name, names, gender }],          // gender "m" | "f" | "?"
  beats: [unitIndex, ...],                       // units that start a dramatic beat
  tension: [0..1, ...],                          // one per beat
  beatMood: [{ family, mood, intensity, conf }, ...],   // one per beat; intensity 1..5, conf = family probability
  beatSummaries: ["outline sentence", ...],      // one per beat
  unitLines: [lineOffset, ...],                  // per unit, relative to the scene's first line
  lines: {
    [unitIndex]: { who: [charId], kind, why, emo: [label, intensity] },   // action line
    [unitIndex]: { speaker, emo },                                        // dialogue (speaker = from the cue)
  },
}
```

A unit is one action **sentence**, one dialogue block, a heading or a transition. For a character view: a character's
lines are their dialogue + action lines with their id in `who`; add the scene's `setting` lines so the view keeps the
places they are in.

## 5. Confidence: what to show as fact

Who is rule-based; `why` names the rule and each rule has a measured accuracy. Show the reliable ones as facts and the
rest as suggestions the writer can confirm:

| `why` | share of action lines | accuracy (dev) | show as |
|---|---|---|---|
| `nameLead`, `titleLead`, `introLine`, `appositive`, `screenText`, `dirFragment` | ~29% | 92–100% | fact |
| `pronounUnique` (only one present character fits the pronoun) | ~8.5% | 95% | fact |
| `none` (no character: setting / event / camera …) | ~37% | 94% | fact (with `kind`) |
| `pronounSalient`, `pronounUnknownGender`, `pronounObjectChain`, `fragmentPrev`, `possessive` | ~16% | 86–89% | suggestion (strong) |
| `namePair`, `pluralTwo`, `pluralCount`, `pluralPair`, `firstMention`, `extras`, `objectOnly`, `pronounAhead` | ~4% | 68–81% | suggestion |
| `pluralAll`, `everyone`, `nobody`, `countCast`, `clauses`, `itComment`, `pronounFallback`, `narration` | ~3% | 15–60% | suggestion (weak) |

Measured on held-out labels (synthetic + contemporary scenes). Passing the app's character tags (§3) raises all of
these. Make the "fact" set a setting.

## 6. Accuracy and speed (measured)

Gold = the agreement of three independent Claude Opus passes. Ceiling = how often two Opus passes agree with each
other; no system can be meaningfully scored above it.

| | Synthetic + contemporary (176 scenes) | Contemporary only, 20 writer styles (60 scenes) | Ceiling |
|---|---|---|---|
| Who, exact set | 94.8% | 93.1% | 98% |
| Line kind (non-character lines) | 87.7% (5-fold CV; the gold labels also train the word table) | – | 95% |
| Line emotion | 75.4% | 74.7% | 92% |
| Dramatic beats, boundary F1 (±1 unit) | 0.55 | – | 0.76 (pass vs pass) |
| Beat mood family (6) / mood (16) | 62% / 36% | – | 83% / 67% |
| Tension, pairs ordered within scene | 84% | – | – |
| Beat summary, overlap with Opus summary (ROUGE-1) | 0.26 (first-line baseline 0.16) | – | 0.39 (best single line) |

Speed (headless Chromium, 4× CPU throttle, `node tools/analyzers/perf_browser.mjs 4`): per worker task p50 ~7 ms,
p95 ~16 ms; whole edited scene p50 ~22 ms, all off the main thread (typing never waits). A cold ~135-page script takes
~2 s in total, with the Timeline (beats + tension) at ~0.9 s; reopening is instant from cache.

## 7. Updates, tests, tools

- New weights: regenerate with the trainers in `tools/analyzers/` then `python tools/analyzers/ship.py`, and bump
  `ANALYZER_VERSION` in `service.js` (now `"2"`, so v1 cached results are not reused).
- `npm test`: worker service (incremental re-analysis, cache, lazy loading, pre-emption).
- `python tools/analyzers/bench.py --bundle public/models/analyzers.json [--prefix s0|s05]`: accuracy vs gold.
- `python tools/analyzers/rules_dev.py`: who rules on the dev sets, with per-rule accuracy and error dump.
- Training data: `data-backup` branch.

## 8. Known limits

- Beats and beat mood are the weakest: well below their (already low) human-agreement ceilings. Treat as hints.
- Joint actions ("They fight", "Neither moves") are right well under half the time.
- Descriptions of places / atmosphere / character roles exist (`describe.js`, `describe_weights.js`) but are not
  wired into the worker yet: accuracy is too low to show (place 52%, role 34%).
