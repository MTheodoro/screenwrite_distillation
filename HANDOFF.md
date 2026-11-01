# Handoff: local analyzers for Screenwrite

For the next session (local, next to the app). Written 1 Nov 2026 at the end of the cloud session that built v1–v7.

## Where things are

- **Code**: `github.com/MTheodoro/screenwrite_distillation`.
  - `main`: the shipped files are what the app has as **v7** (the last zip sent). `main` also holds the start of the
    work on the owner's who report (below): `clauses.js`, the fixtures and their runner. `clauses.js` is not imported
    by anything yet, so the app is unaffected.
- **Data** (training scenes, labels, gold sets: ~130 MB without caches): branch `data-backup`, folder `data/analyzers/`. It is
  gitignored on `main`. Get it with:
  ```sh
  git fetch origin data-backup
  git checkout origin/data-backup -- data/analyzers   # then: git restore --staged data/analyzers
  ```
  `data/analyzers/features/` is a cache and is rebuilt on demand (`dataset.py`).
- **Setup**: Node 22, `npm i` (dev-only dep for old experiments), Python 3.12+ with `numpy scikit-learn lightgbm`.
  Shipped code has no dependencies.

## What ships (copy into the app)

`src/analyzers/{fountain,cast,names,lexicon,rules,model,service,worker,wordtable,summarize,describe,taxonomy,emotable,kindtable,beatcue,verbs,weights}.js`
+ `INTEGRATION.md` (wiring, result format, the `why` confidence table, numbers). Plain ES modules, worker-only, offline.
Now that you sit next to the app, copy them in directly instead of zips, and read the app side first:
`shared/analysis.ts` (`doersIn`, the app's own who rules), `client/src/components/screenplay/screenplay-editor.tsx`
(`whoFromReads`: app rules first, analyzers fill gaps), `client/src/lib/script-analysis.ts` (the `why` → tier map, threshold 0.2).

## Commands (run in `tools/analyzers/`)

| What | Command | Time |
|---|---|---|
| Owner's who cases (47 checks) | `node who_fixtures.mjs` | 1 s |
| Who vs Opus gold | `python3 bench.py --prefix s0` and `--prefix s05` (`--bundle ../../public/models/analyzers.json` for model rows) | 1–2 s |
| Who on dev + per-rule accuracy | `python3 rules_dev.py --dump 0` | 20 s |
| Gold error dump by rule path | `python3 gold_err.py s0` (every miss with the 2 lines before; add `pathA,pathB` to filter) | 1 s |
| Line kind vs gold | `python3 kinds_eval.py [--dump N]` (table trains on gold too: CV via `kind_cv.py`) | 1 s |
| Ablate a rule | `WHO_OFF=name` (disable) / `WHO_ON=name` (enable an opt-in) on any of the above | |
| Unit tests | `npm test` (root) | 1 s |
| Offline check in Chromium | `node check_worker_offline.mjs` | 10 s |
| Speed (4× throttle) | `node perf_browser.mjs 4` (repo root) | 1 min |

Every who rule has an ablation switch. The working rule used all along: a rule stays on only if it does not lose on
**both** gold sets (s0, s05) and the two dev sets (syn, con); otherwise it goes opt-in (`ON.has(...)`), never deleted.
Gold scenes are never used for training (except the kind word table, measured by CV).

## Numbers at v7

Who exact set: s0 **95.1%**, s05 (contemporary) **93.5%**, dev syn 91.7 / con 90.8; ceiling (Opus vs Opus) 98%.
Line kind 87.7% (CV). Emotion 75%, beats F1±1 0.55, beat mood 62% family — those were not worked on after v3.
**But on the owner's own script (literary action, crowds, several doers per sentence) it is 20/47 on the reported
cases.** The gold sets under-cover that style; `test/fixtures/who_cases.json` is the owner's report as fixtures.

## The owner's report (31 Oct): what is done, what is next

The report itself is in the conversation; the fixture file has every case (wording neutralised, structure kept; please
keep fixture text non-explicit). Baseline `node who_fixtures.mjs`: 20/47.

Done (on `main`, not wired):
- `src/analyzers/clauses.js`: `splitClauses(sentence)` → `[{from, to, text}]`. Splits at `;`, a colon after a real
  clause, `, <conj> <subject> <verb>`, `<conj> <pronoun>`, comma splices with a new subject + verb, a mid-sentence
  nominative he/she/they with a verb ("so hard he got angry"), a leading subordinate clause, and `NAME, who ...`
  (analysis text becomes `NAME ...`). It does not split verb lists ("rises, smooths her coat, and walks away"),
  joint subjects ("HEITOR and UATAKI liked ..."), appositives, or "the day when ...". Spans include connectives, so a
  display can colour the whole sentence with no plain scraps. **Not wired into results yet.**
- `tools/analyzers/who_fixtures.mjs` runs the fixtures through `AnalyzerService.update` with tags, as the app does.

Next, in order (my plan; each step: run fixtures, then the four benches, keep only non-losers):
1. **Wire clauses.** Build a second scene whose action units are the clauses (keep `para`, add `src`, `from`, `to`),
   run `sceneContext` + `ruleActors` on it, map cast ids back to the unit-level cast by name, and return
   `lines[i].clauses = [{from, to, who, together, why, conf}]` (always present; one clause when nothing splits) from
   both `model.js` (line ~105) and `analyzeRules`. Measure on gold whether unit-level `who` should become the union
   of its clauses or stay as now.
2. **Confidence as a number**: `conf` per reading = the rule path's measured dev accuracy (table from
   `rules_dev.py`), so the app can drop its name → tier map (new `why` names are hidden at 0.1 today; e.g.
   `introducedBefore` showed at 0.3 for case 1, `pluralGroup` was hidden for case 12).
3. **Periphrasis table** in `cast.js` (cases 1–6, 17): bindings `{noun, char, unit}` from apposition
   (`NAME (…), a jesuit priest in …` → priest), `a … N called/named NAME`, `A … N. This is NAME.` (exists as `fwd`),
   `the NAME N` (`the PROCESSION folk`), `NAME. She was a nice girl`, a name's own head noun (PRIEST → the priest,
   THREE LITTLE PIGS → the pigs, these animals), and crowd words for the group character (people, folk, crowd,
   parade, a group of people), adding the script's group character to a scene that only uses crowd words.
   Resolution order: in-scene learned binding (most recent before the line) > a character in the scene named by
   that noun > script-wide. Today tagged characters (`c.tagName`) skip alias learning entirely in `cast.js`; that is
   why "the priest" never linked to the tag PRIEST (case 6). Return the table in the result.
4. **Agreement as a hard filter** (cases 18–24): plural names (THREE LITTLE PIGS) are groups (never he/she);
   he/she only to that gender or unknown; `Their/they` to groups, they/them characters or several. "One of the X
   ... he" → X. Gender from "her new husband, HORATIO".
5. **Subjects and crowds** (11–17): lead prefixes `Everyone in the NAME`, `all the men in the NAME`, `Among them NAME`;
   `including NAME` joins the subject; `All of them / everyone` → the group when the group is the one in view;
   generic `Some women …` → `nobody` (`why: "generic"`), returned as an explicit empty answer.
6. **Stability (case 25)** — likely cause found: the cache key is `ANALYZER_VERSION:` + scene hash and
   `ANALYZER_VERSION` stayed `"2"` through every rules update, with results persisted in IndexedDB. Text pasted back
   to an earlier state can then get a reading from an older build. Fix: a build stamp (hash of the shipped sources)
   in the key. Case 26: mark quick-stage results (`stage: "quick" | "model"`).
7. Sentence split "HORATIO.HORATIO" (no space after the stop) in `fountain.js` `splitSentences`.
8. List any new `why` names in `INTEGRATION.md`.

## Notes that save time

- `ruleActors` is memoised per line (`ctx._actors`); rules look back recursively, and without it long scenes went
  exponential. Anything that changes a line's reading must not depend on evaluation order.
- Gender: `cast.js` collects evidence per scene (`c.g`), the service sums it script-wide (`priorGender`), the name
  list (`names.js`) is a weak vote; `GDEBUG=1` prints every piece of gender evidence.
- Debug one line: `node why_line.mjs ../../data/analyzers/gen/scenes/s01058.fountain "She waits"` prints the cast
  with gender evidence, mentions, pronouns, the verdict and its rule path.
