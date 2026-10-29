# Screenwrite analyzers — spec and rule notes

No Screenwrite codebase was available, so the analyzers are built standalone. Rules are both the
baseline ("verdict path") and the feature extractors for the distilled models. Everything that runs
in the app lives in `src/analyzers/` (pure ES modules, Web Worker only); Python in `tools/analyzers/`
never reimplements features — it calls the JS through Node, so training and inference features are
identical by construction.

Pipeline per scene: **parse → beats → who → emotion → tension** (+ presence tracking).

## 0. Parser — `src/analyzers/fountain.js` (rules only, no model)

- Fountain → scenes → *units*. A unit is one action **sentence**, one whole **dialogue block**
  (cue + parentheticals + text), a **heading** or a **transition**.
- Headings: `INT/EXT/EST/INT./EXT/I/E` or forced `.`; transitions: `... TO:`, `FADE OUT.`, forced `>`.
- Cues: blank line before, all caps, non-empty line after, or forced `@`. Extensions `(V.O.)`, `(O.S.)`,
  `(CONT'D)` are split off; `^` marks dual dialogue.
- Notes `[[ ]]`, boneyard `/* */`, sections `#`, synopses `=`, page breaks `===`, title page: stripped.
- Action paragraphs are split into sentences (abbreviation-aware: Mr., Det., single initials...).

## Cast and presence — `src/analyzers/cast.js` (rules)

- Characters come from cue names and CAPS introductions in action ("MAYA OKAFOR (30s), ...",
  "a WOMAN in an apron"). All-caps sentences (shouting, SFX, signs) are ignored; a stop-list removes
  camera terms, sound words and acronyms.
- Alias merge: names whose key tokens (minus titles DET., MRS., JUDGE...) are a subset of another's are
  the same person (DET. RUIZ = RUIZ, ODALYS = ODALYS VEGA). Narrative aliases (STRANGER → INGRID) are
  *not* detected by rules; labels carry them, models handle candidates.
- Mentions: each name token as a capitalised word, possessive allowed.
- Gender guess: pronouns after a sentence-initial name in single-character sentences.
- Presence: a character is present from first cue/mention until an exit verb with them as first mention
  (leaves, exits, hangs up, ...). This is the candidate set for who/addressee.

## 1. Beat segmentation (model)

Between each pair of consecutive units: does a new beat start? A beat is the smallest unit in which
something dramatically changes (action, reaction, tactic shift, reveal, entrance). Beats can be dialogue
only, action only, mixed, and can split an action paragraph.
Rule signals: unit kind transition (A→D, D→A, D→D, A→A), paragraph start, speaker change, new speaker,
character entrance/introduction, exit, time/cut words ("suddenly", "later", "then"), question→answer,
mention-set overlap, lexical emotion shift, distance from paragraph/dialogue-run start.
Rule verdict: boundary on paragraph start after dialogue, entrance/exit, cut words, or after a run of
>6 units. Gold: majority vote of 3 Opus passes per boundary. Metric: boundary F1 (exact and ±1).

## 2. Who

- **Speaker**: from the cue + alias resolution (rules).
- **Actors** of an action/description sentence: a *set* of characters, or NONE (setting/objects) /
  OTHER (crowd, extras). Line type: action / description / setting.
  Rule signals per (unit, candidate): named in unit, position of first mention, sentence-initial name,
  possessive, number of mentions; sentence-initial pronoun and gender (dis)agreement; recency of last
  mention / last speech; last subject; previous/next speaker; introduction in this unit; present count,
  same-gender present count; plural cues (they/both/together/each other).
  Rule verdict: sentence-initial name → that character; else first name mentioned; else
  sentence-initial pronoun → most recent gender-compatible subject; "they/both" → last two salient; else NONE.
- **Addressee** of dialogue: set of characters, ALL, SELF or NONE.
  Rule signals: vocative (name in the line, esp. at start/end with comma), previous/next speaker,
  recent speakers, group words (everyone, you all, guys, folks), `you` count, V.O./phone/radio,
  parenthetical "(to X)", preceding action naming a candidate ("She turns to MARCUS").
  Rule verdict: "(to X)" or vocative → X; group words → ALL; V.O. without "you" → NONE;
  else previous speaker, else next speaker, else the only other present character.

## 3. Emotion

Per dialogue line (speaker) and per action line (its main actor): one of
neutral, joy, sadness, anger, fear, surprise, disgust, affection + intensity 0–1.
Rule signals: lexicon counts per class (text and parenthetical separately), negation, intensifiers,
`!`, `?`, `...`, `--` (interruptions), caps words, line length, speaker's previous emotion.
Rule verdict: arg-max lexicon class (parenthetical weighted ×2), else neutral; intensity from count +
punctuation.

## 4. Tension (per beat)

Score 0–1 per beat; the Timeline shows the per-beat curve, smoothed lightly inside each scene.
Learned from pairwise judgments (within scene from absolute scores with |Δ| ≥ 10, plus explicit
cross-scene pairs), fitted with Bradley–Terry, then a regressor from features to BT score.
Rule signals: threat/danger/violence/conflict lexicon, negations, imperatives, questions, exclamations,
interruptions, short-sentence ratio, mean sentence length, speaker switches per unit, dialogue share,
characters present, fear/anger emotion intensity, position in scene, beat length.
Rule verdict: weighted sum of normalised signals.

## Derived (no model)

- Interaction graph: who talks to whom, how often, with which emotion (addressee + emotion).
- Turning points: beats where tension or a character's emotion jumps sharply.

## Labeling (see label.py)

- Generation: Sonnet subagents, specs from `generate.py` (genres, lengths, 1–6 characters, hard cases).
- `train`: Haiku, one pass; per line `{scene_id, line, type, candidates, character, confidence}` plus
  addressee/emotion; beats + per-beat tension scores; cross-scene pairs in a second Haiku pass.
- `gold`: Opus, 3 passes with different instructions (script supervisor / linguist / dramaturg) and scene
  order. who/to/emotion kept only when all 3 agree; disagreements → `ambiguous.jsonl`. Beats: majority.
  Tension: 3 passes on the majority beats; pairs kept only if all 3 agree.
- Spend: subagents have no per-call bill; `spend.py` prices their real token usage at API rates so the
  250 USD plan stays enforceable.

## Results (gold: 116 scenes, 3 Opus passes, unanimous labels)

| Metric | Rules | Phase 1 model | + Phase 3 cross-encoder |
|---|---|---|---|
| Beat boundary F1 exact / ±1 | 0.63 / 0.82 | 0.83 / 0.90 | |
| Who exact / top-1 | 80.5% / 82.7% | 81.1% / 85.2% | 86.0% / 90.3% |
| Addressee exact | 77.9% | 83.6% | |
| Emotion acc / macro-F1 | 65.6% / 0.22 | 70.9% / 0.25 (0.29 with Phase 2 embeddings) | |
| Tension pairs within / across scenes | 55.6% / 51.4% | 84.0% / 69.2% | |

Shipped weights: `public/models/analyzers.json` (0.4 MB, Phase 1), `who-xenc/` (12 MB int8 ONNX, Phase 3, lazy),
`embed.bin` (1.2 MB, Phase 2, optional; only emotion gains).

Latency, headless Chromium, 4x CPU throttle (`tools/analyzers/perf_browser.mjs`): model stage p50 4.5 ms /
p95 10 ms / max ~22 ms; whole edited scene p50 ~17 ms; cold ~135-page script: rules 0.52 s, model 1.2 s.
Cross-encoder pass: ~31 ms/scene mean (unthrottled, Node), run after the fast result is delivered.
Note: CDP throttling does not apply to dedicated workers, so throttled numbers are measured on the main thread.
