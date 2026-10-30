// Rule-based analyzers. Each rule exposes numeric signals (features) and keeps its old verdict path.
// Feature order is defined by the *_FEATURES arrays; models and Python export depend on it.
import EMO_TABLE from "./emotable.js";
import KIND_TABLE from "./kindtable.js";
import BEAT_CUE from "./beatcue.js";
import { scoreTable, scoreTokens, tokenize } from "./wordtable.js";
import { buildCast, presence, speakerId, pronounClass } from "./cast.js";
import { LEX, EMOTIONS, lexCount, count, NEGATION, INTENSIFIER, GROUP_ADDR, CUT_WORDS, IMPERATIVE } from "./lexicon.js";

const isContent = (u) => u.kind === "action" || u.kind === "dialogue";
const words = (t) => (t.match(/[A-Za-z']+/g) || []).length;
const log1p = (x) => Math.log(1 + Math.max(0, x));
const PLURAL = /\b(they|them|their|both|together|each other|one another|everyone|all of them|the two|the pair|the group)\b/i;
const EXIT_RE = /\b(leaves|exits|walks out|storms out|is gone|hangs up|disappears|departs|runs off|heads out)\b/i;
const ENTER_RE = /\b(enters|walks in|comes in|steps in|bursts in|arrives|appears|strides in|barges in)\b/i;
const VOICE = new Set(["V.O.", "V.O", "VO", "O.S.", "O.S", "OS", "O.C.", "FILTERED", "ON PHONE", "PHONE", "RADIO", "INTO PHONE", "OVER RADIO", "ON RADIO"]);

export const SPECIAL = { NONE: -1, ALL: -2, SELF: -3, NOBODY: -4 }; // NOBODY = dialogue addressed to no listener

// ---------------- context ----------------

export function sceneContext(scene) {
  const cast = buildCast(scene);
  const pres = presence(cast, scene);
  const units = scene.units;
  const n = units.length, nc = cast.chars.length;
  const speaker = units.map((u) => speakerId(cast, u));
  // Recency tables: last[c][i] = last unit index < i where c was named or spoke (or -1).
  const lastNamed = [], lastSpoke = [], lastSubj = [];
  for (let c = 0; c < nc; c++) {
    const ln = new Int32Array(n), ls = new Int32Array(n), lsub = new Int32Array(n);
    let a = -1, b = -1, s = -1;
    for (let i = 0; i < n; i++) {
      ln[i] = a; ls[i] = b; lsub[i] = s;
      const ms = cast.mentions[i];
      if (speaker[i] === c) { b = i; a = i; }
      if (ms.some((m) => m.c === c)) a = i;
      if (units[i].kind === "action" && ms.length && ms[0].c === c && ms[0].pos < 0.25) s = i;
    }
    lastNamed.push(ln); lastSpoke.push(ls); lastSubj.push(lsub);
  }
  const content = units.filter(isContent).map((u) => u.i);
  return { scene, units, cast, pres, speaker, lastNamed, lastSpoke, lastSubj, content };
}

const prevContent = (ctx, i) => { for (let j = i - 1; j >= 0; j--) if (isContent(ctx.units[j])) return j; return -1; };
const nextContent = (ctx, i) => { for (let j = i + 1; j < ctx.units.length; j++) if (isContent(ctx.units[j])) return j; return -1; };
const prevSpeaker = (ctx, i, not = -9) => { for (let j = i - 1; j >= 0; j--) if (ctx.speaker[j] >= 0 && ctx.speaker[j] !== not) return ctx.speaker[j]; return -1; };
const nextSpeaker = (ctx, i, not = -9) => { for (let j = i + 1; j < ctx.units.length; j++) if (ctx.speaker[j] >= 0 && ctx.speaker[j] !== not) return ctx.speaker[j]; return -1; };

function emoLex(text) {
  return EMOTIONS.slice(1).map((e) => lexCount(text, e));
}

function unitEmoLex(ctx, i) {
  ctx._emoLex ??= [];
  return (ctx._emoLex[i] ??= emoLex(ctx.units[i].text));
}

function firstSpeechUnit(ctx, sp) {
  if (!ctx._firstSpeech) {
    ctx._firstSpeech = new Map();
    for (const u of ctx.units) if (ctx.speaker[u.i] >= 0 && !ctx._firstSpeech.has(ctx.speaker[u.i])) ctx._firstSpeech.set(ctx.speaker[u.i], u.i);
  }
  return ctx._firstSpeech.get(sp);
}

// ---------------- optional static embeddings (Phase 2) ----------------
// attachEmbedder(ctx, embedder) enables extra features; without it every feature row is unchanged.
// Embeddings only pay off for emotion (Phase 2 benchmark), so the other analyzers ignore them.
export const EMB = { boundary: 0, actor: 0, addr: 0, emo: 32, tension: 0 };

export function attachEmbedder(ctx, embedder) {
  ctx._embedder = embedder;
  ctx._emb = [];
  return ctx;
}

function unitEmb(ctx, i) {
  if (!ctx._emb[i]) {
    const u = ctx.units[i];
    ctx._emb[i] = ctx._embedder.embed(u.text + (u.paren && u.paren.length ? " " + u.paren.join(" ") : ""));
  }
  return ctx._emb[i];
}

function embHead(ctx, i, k) {
  return Array.from(unitEmb(ctx, i).subarray(0, k));
}

function cosine(a, b) {
  let ab = 0, aa = 0, bb = 0;
  for (let d = 0; d < a.length; d++) { ab += a[d] * b[d]; aa += a[d] * a[d]; bb += b[d] * b[d]; }
  return aa && bb ? ab / Math.sqrt(aa * bb) : 0;
}

export function featureNames(emb = false) {
  const tail = (k, p) => (emb ? Array.from({ length: k }, (_, d) => `${p}${d}`) : []);
  return {
    boundary: [...BOUNDARY_FEATURES, ...(emb && EMB.boundary ? ["embCosPrev"] : []), ...tail(EMB.boundary, "e")],
    actor: [...ACTOR_FEATURES, ...tail(EMB.actor, "e")],
    addr: [...ADDR_FEATURES, ...tail(EMB.addr, "e")],
    emo: [...EMO_FEATURES, ...tail(EMB.emo, "e")],
    tension: [...TENSION_FEATURES, ...tail(EMB.tension, "e")],
  };
}

// ---------------- beats ----------------

export const BOUNDARY_FEATURES = ["prevA", "prevD", "curA", "curD", "paraStart", "speakerChange", "newSpeaker", "entrance",
  "exitPrev", "introHere", "cutWord", "prevQuestion", "mentionJacc", "emoShift", "dialogueRun", "sentInPara",
  "curWords", "prevWords", "posInScene", "curHasName", "curStartsPronoun", "tensionDelta", "imperative", "prevExclaim",
  "prevInterrupted", "parenHere"];

// Dramatic beats (beat2): the unit features plus window comparisons (W content units before vs from here) and the
// distance from the previous boundary (filled in during sequential decoding).
export const BEAT2_FEATURES = [...BOUNDARY_FEATURES, "topicJacc", "castJacc", "emoDist", "tensionShift", "dlgShareShift",
  "prevQuestions", "newCastAhead", "sinceLast", "sinceLastParas", "kindShift", "beatCue", "beatCuePrev", "beatCueNext", "tensHere", "tensBefore", "tensAfter", "tensShift", "emoModelShift"];
// Learned beat-start cue (beat_cue_table.py): this unit's words, the end of the previous unit, both kinds.
function beatCue(ctx, k) {
  ctx._cue ??= new Map();
  if (!ctx._cue.has(k)) {
    const i = ctx.content[k], p = k > 0 ? ctx.content[k - 1] : -1;
    if (i === undefined || k === 0) { ctx._cue.set(k, 0); return 0; }
    const toks = ["__k" + ctx.units[i].kind[0], "__pk" + ctx.units[p].kind[0], ...unitTokens(ctx, i),
      ...unitTokens(ctx, p).slice(-4).map((w) => "__p" + w)];
    ctx._cue.set(k, scoreTokens(BEAT_CUE, toks)[1]);
  }
  return ctx._cue.get(k);
}
const STOP = new Set("that this with from have they them their there what when where which while will would could should about into your just like been were then than over back down only also even still some very".split(" "));
function contentWords(ctx, i) {
  ctx._cw ??= new Map();
  if (!ctx._cw.has(i)) ctx._cw.set(i, new Set((ctx.units[i].text.toLowerCase().match(/[a-z]{4,}/g) || []).filter((w) => !STOP.has(w))));
  return ctx._cw.get(i);
}
function unitCast(ctx, i) {
  const s = new Set(ctx.cast.mentions[i].map((m) => m.c));
  if (ctx.units[i].kind === "dialogue" && ctx.speaker[i] >= 0) s.add(ctx.speaker[i]);
  return s;
}
const jacc = (a, b) => { let n = 0; for (const x of a) if (b.has(x)) n++; const u = a.size + b.size - n; return u ? n / u : 1; };
// Lowercased tokens of a unit's text (cached; beat and scene texts are concatenations of these).
export function unitTokens(ctx, i) {
  ctx._tok ??= new Map();
  if (!ctx._tok.has(i)) ctx._tok.set(i, tokenize(ctx.units[i].text));
  return ctx._tok.get(i);
}
// Emotion word-table probabilities of a unit (text + parentheticals), computed once per unit.
export function unitEmoTable(ctx, i) {
  ctx._et ??= new Map();
  if (!ctx._et.has(i)) {
    const u = ctx.units[i];
    const par = (u.paren || []).join(" ");
    ctx._et.set(i, scoreTokens(EMO_TABLE, [u.kind === "dialogue" ? "d" : "a", ...unitTokens(ctx, i), ...(par ? tokenize(par) : [])]));
  }
  return ctx._et.get(i);
}
export function beat2Features(ctx, i, sinceLast = 0, sinceLastParas = 0) {
  const k = ctx.content.indexOf(i), W = 4;
  const before = ctx.content.slice(Math.max(0, k - W), k), after = ctx.content.slice(k, k + W);
  const union = (idx, f) => { const s = new Set(); for (const j of idx) for (const x of f(ctx, j)) s.add(x); return s; };
  const mean = (idx) => { const m = new Array(8).fill(0); for (const j of idx) unitEmoTable(ctx, j).forEach((v, c) => { m[c] += v / idx.length; }); return m; };
  const eb = before.length ? mean(before) : null, ea = mean(after);
  const tl = (idx) => idx.reduce((s, j) => s + unitTensionLex(ctx, j), 0) / Math.max(1, idx.length);
  const dl = (idx) => idx.filter((j) => ctx.units[j].kind === "dialogue").length / Math.max(1, idx.length);
  const castB = union(before, unitCast), castA = union(after, unitCast);
  const kindOf = (j) => (ctx.units[j].kind === "dialogue" ? 1 : 0);
  return [
    ...boundaryBase(ctx, i),
    before.length ? jacc(union(before, contentWords), union(after, contentWords)) : 1,
    before.length ? jacc(castB, castA) : 1,
    eb ? eb.reduce((s, v, c) => s + Math.abs(v - ea[c]), 0) : 0,
    tl(after) - tl(before),
    dl(after) - dl(before),
    before.filter((j) => /\?/.test(ctx.units[j].text)).length,
    [...castA].filter((c) => !castB.has(c)).length,
    sinceLast, sinceLastParas,
    before.length ? Math.abs(before.map(kindOf).reduce((a, b) => a + b, 0) / before.length - after.map(kindOf).reduce((a, b) => a + b, 0) / after.length) : 0,
    beatCue(ctx, k), beatCue(ctx, k - 1), beatCue(ctx, k + 1),
    // model tension around the boundary (ctx._unitTension, filled by model.js / beats2_features before decoding)
    ...(() => {
      const ut = ctx._unitTension;
      if (!ut) return [0, 0, 0, 0, 0];
      const m = (idx) => idx.reduce((a, j) => a + ut.get(j), 0) / Math.max(1, idx.length);
      const tb = before.length ? m(before) : m(after), ta = m(after);
      const ep = ctx._emoP, em = (idx) => { const v = new Array(8).fill(0); if (ep) for (const j of idx) (ep.get(j) || []).forEach((x, c) => { v[c] += x / idx.length; }); return v; };
      const eb = em(before), ea = em(after);
      return [ut.get(i), tb, ta, ta - tb, eb.reduce((a, x, c) => a + Math.abs(x - ea[c]), 0)];
    })(),
  ];
}

function tensionLex(t) { return lexCount(t, "threat") + lexCount(t, "conflict") + lexCount(t, "urgency") - lexCount(t, "calm"); }
function unitTensionLex(ctx, i) {
  const st = unitStats(ctx, i);
  return st.lex[0] + st.lex[1] + st.lex[2] - st.lex[3];
}

export function boundaryFeatures(ctx, i) {
  const f = boundaryBase(ctx, i);
  if (!ctx._embedder || !EMB.boundary) return f;
  const p = prevContent(ctx, i);
  return f.concat([p >= 0 ? cosine(unitEmb(ctx, i), unitEmb(ctx, p)) : 1], embHead(ctx, i, EMB.boundary));
}

function boundaryBase(ctx, i) {
  const u = ctx.units[i];
  const p = prevContent(ctx, i);
  const pu = p >= 0 ? ctx.units[p] : null;
  const ms = ctx.cast.mentions[i], pms = p >= 0 ? ctx.cast.mentions[p] : [];
  const sa = new Set(ms.map((m) => m.c)), sb = new Set(pms.map((m) => m.c));
  if (u.kind === "dialogue") sa.add(ctx.speaker[i]);
  if (pu && pu.kind === "dialogue") sb.add(ctx.speaker[p]);
  const inter = [...sa].filter((x) => sb.has(x)).length, uni = new Set([...sa, ...sb]).size;
  let run = 0;
  for (let j = i - 1; j >= 0 && ctx.units[j].kind === "dialogue"; j--) run++;
  const firstSpeech = u.kind === "dialogue" && firstSpeechUnit(ctx, ctx.speaker[i]) === i;
  const intro = ctx.cast.chars.some((c) => c.first === i);
  const e1 = unitEmoLex(ctx, i), e0 = pu ? unitEmoLex(ctx, p) : e1;
  const prevSp = pu && pu.kind === "dialogue" ? ctx.speaker[p] : -1;
  return [
    pu && pu.kind === "action" ? 1 : 0, pu && pu.kind === "dialogue" ? 1 : 0,
    u.kind === "action" ? 1 : 0, u.kind === "dialogue" ? 1 : 0,
    u.kind === "action" && u.sent === 0 ? 1 : 0,
    u.kind === "dialogue" && prevSp >= 0 && prevSp !== ctx.speaker[i] ? 1 : 0,
    firstSpeech ? 1 : 0,
    ENTER_RE.test(u.text) ? 1 : 0,
    pu && pu.kind === "action" && EXIT_RE.test(pu.text) ? 1 : 0,
    intro ? 1 : 0,
    CUT_WORDS.test(u.text) ? 1 : 0,
    pu && /\?\s*$/.test(pu.text) ? 1 : 0,
    uni ? inter / uni : 1,
    e1.reduce((s, v, k) => s + Math.abs(v - e0[k]), 0),
    run,
    u.kind === "action" ? u.sent : -1,
    log1p(words(u.text)), pu ? log1p(words(pu.text)) : 0,
    ctx.content.indexOf(i) / Math.max(1, ctx.content.length - 1),
    ms.length ? 1 : 0,
    /^(he|she|they|his|her|their)\b/i.test(u.text) ? 1 : 0,
    unitTensionLex(ctx, i) - (pu ? unitTensionLex(ctx, p) : 0),
    IMPERATIVE.test(u.text) ? 1 : 0,
    pu && /!/.test(pu.text) ? 1 : 0,
    pu && /(--|—)\s*$/.test(pu.text) ? 1 : 0,
    u.paren && u.paren.length ? 1 : 0,
  ];
}

// Rule verdict: list of unit indices that start a beat.
export function ruleBeats(ctx) {
  const out = [];
  let since = 0;
  for (const i of ctx.content) {
    const f = boundaryFeatures(ctx, i);
    const first = out.length === 0;
    const b = first || (f[0] === 0 && f[1] === 1 && f[2] === 1) || // action after dialogue
      (f[4] && f[0]) || f[7] || f[8] || f[9] || f[10] || since >= 6;
    if (b) { out.push(i); since = 0; } else since++;
  }
  return out;
}

// ---------------- who: actors of action lines ----------------

export const ACTOR_FEATURES = ["isNone", "named", "firstPos", "initialName", "possessive", "nMentions", "isFirstMention",
  "initialPronoun", "pronGenderMatch", "pronGenderMismatch", "genderUnknown", "nPronounsMatch", "sinceNamed", "sinceSpoke",
  "sinceSubj", "isLastSubj", "recencyRank", "prevSpeaker", "nextSpeaker", "introHere", "present", "nPresent",
  "nSameGender", "plural", "unitHasNames", "unitHasPronouns", "sentInPara", "paraSubj", "otherNamedFirst", "words",
  "lastSpeakerSpoke", "subjectless", "prevActor", "prevActorSamePara", "prevActorDist", "isGroup", "pluralSubject",
  "groupPluralMatch", "fwdIntro", "verbless"];

// Pronoun subject near the start, allowing a leading connective ("Yet he", "But she", "Then they").
const LEAD = /^(?:\s*(?:yet|but|and|then|now|still|so|as|when|while|though|meanwhile|suddenly|slowly|finally|again)\b,?)+\s*$/i;
function initialPronoun(ctx, i) {
  const p = ctx.cast.pronouns[i][0];
  if (!p) return null;
  const before = ctx.units[i].text.slice(0, p.at);
  // "For the first time, she smiles." / "One by one, they listen." / "Perhaps she does."
  if (p.at <= 1 || LEAD.test(before) || (/^[^.;:!?"“]{0,60},\s*$/.test(before) && !ctx.cast.mentions[i].some((m) => m.at < p.at && !m.poss)) ||
      /^(?:perhaps|maybe|finally|together|instead|meanwhile|again|only then|for a moment|at last|somehow)\s+$/i.test(before)) return p.g;
  return null;
}
// Plural subject: "They ...", "All attempt", "Many of the people", "Some of them", "Everyone".
const PLURAL_SUBJ = /^(?:in turns,?\s*)?(they|all|several|none|everyone|everybody|both|neither|the group)\b/i;
// "Five people stand around the casket." / "Four jurors remain." / "The crew freezes." -> the characters present.
const COUNT_GROUP = /^(?:(?:two|three|four|five|six|seven|eight|nine|ten|several|a few|a handful of)\s+(?:[a-z-]+\s+){0,2}(?:people|men|women|friends|teenagers|teens|kids|jurors|students|officers|cops|soldiers|workers|strangers|players|members|figures|guests|passengers|sisters|brothers|siblings|investigators|agents|nurses|doctors)|the (?:crew|team|band|family|group|jury|panel|squad|gang|class|four|three|five|six|others))\b/i;
// No finite verb: "Mid-age, deep benevolent eyes, severe face."
const AUX = /\b(is|are|was|were|be|been|being|has|have|had|do|does|did|can|could|will|would|shall|should|may|might|must|\w+ed|\w+ing)\b/i;
// Appearance description fragment about the last-introduced character ("Mid-age, deep benevolent eyes, severe face.").
const LOOKS = /\b(eyes|face|hair|beard|skin|smile|voice|build|frame|hands|features|jaw|brow|gaze|robe|suit|coat|dress|uniform|habit|boots|scar|tattoo|glasses|mid-age|middle-aged|\d0s|years old|tall|short|thin|stocky|gaunt|handsome|beautiful|pretty|weathered)\b/i;
function verbless(t) { return !AUX.test(t) && LOOKS.test(t) && !/^(the|a|an|it|its)\b/i.test(t) ? 1 : 0; }

// Sentence with no grammatical subject at the start: "Opens a folder." "Flips." "Slowly." "Warm face."
const DET = /^(a|an|the|this|that|these|those|his|her|their|its|my|our|your|some|no|every|each|one|two|three|on|in|at|from|behind|outside|inside|across|through|under|over|near|beside|somewhere|nobody|someone|everyone|it|there|then|now|later|silence|nothing)\b/i;
export function subjectless(ctx, i) {
  const u = ctx.units[i];
  if (u.kind !== "action") return 0;
  const ms = ctx.cast.mentions[i], prons = ctx.cast.pronouns[i];
  if ((ms.length && ms[0].lead) || (prons.length && prons[0].at <= 1)) return 0;
  const t = u.text.trim();
  // Is this line continuing a character's action? (previous line is that character's action, in the same paragraph
  // or a look / point / turn line: "He looks at her. / At the cart.")
  const prev = i > 0 ? ctx.units[i - 1] : null;
  const pa = prev && prev.kind === "action" ? prevActorOf(ctx, i) : null;
  const cont = !!(pa && pa.ids.length && pa.dist === 1 && (prev.para === u.para || /\b(looks?|points?|glances?|stares?|nods?|gestures?|turns?|watches|studies)\b/i.test(prev.text)));
  if (verbless(t) && !PLURAL_SUBJ.test(t) && words(t) <= 12) return 1; // descriptive fragment
  if (cont && words(t) <= 6) {
    if (/^(?:then,?\s+)?(?:at|to|toward|towards|into|back to|over|down at|up at|across)\b/i.test(t) && !AUX.test(t)) return 1;   // "At the butler."
    if (/^(?:then,?\s+)?(?:doesn't|don't|can't|won't|isn't|hasn't|didn't|never|barely|almost|not)\b/i.test(t)) return 1;          // "Doesn't say anything."
    if (/^then\b/i.test(t) && !/^then\s+(the|a|an|it|there|silence|nothing)\b/i.test(t)) return 1;                                  // "Then stops." / "Then another."
    // short description of the character just shown: "Violent." "Red-rimmed." "Grey hood." "Phone in hand."
    const w = t.replace(/[.!?…]+$/, "").split(/\s+/);
    const adj = w.length <= 2 && w.every((x) => /^(?:[A-Z]?[a-z]+-)?[A-Za-z]+(?:ed|en|ful|less|ous|ive|y|al|ic|ish|er|ly|ing|ant|ent|ble)$/.test(x)) && !SETTING_NOUN.test(t);
    const looks = w.length <= 5 && (LOOKS.test(t) || /\bin (hand|his hand|her hand|hands)\b/i.test(t)) && !SETTING_NOUN.test(t.replace(LOOKS, ""));
    if ((adj || looks) && !/\b[A-Z]{3,}\b/.test(t)) return 1;
  }
  if (DET.test(t)) return 0;
  // "exasperated." / "Rising." / "Smiles." after a speech; not "Rain." / "BEEP." / "Her phone."
  if (words(t) <= 3 && prev && prev.kind === "dialogue" && /^(?:[a-z]|[A-Z][a-z]+(?:s|ed|ing|ly)\b)/.test(t) && !/^[A-Z]+\W*$/.test(t)) return 1;
  if (/^(something|nothing|everything|someone|somebody|anything|anyone)\b/i.test(t)) return 0;
  const ws = t.replace(/^(then|and|but|now|still|again|just|finally|slowly|quickly|suddenly),?\s+/i, "").split(/\s+/);
  const w0 = ws[0] || "";
  // "Forks clink." / "Pens scratch." / "Headlights sweep across ..." = plural noun + base-form verb (a subject), unlike
  // "Counts coins." (verb + plural object).
  if (/^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[a-z]+$/.test(ws[1]) && !/s$/.test(ws[1]) && !/^(to|the|a|an|his|her|their|its|at|up|down|back|away|out|in|on|off|over|into|from|with|it|him|them|me|us|toward|towards|across|through|slowly|quickly|again|for|around|behind|past|by|open|shut|half|one|another|something|nothing)$/.test(ws[1])) return 0;
  if (/^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[A-Z]{2,}/.test(ws[1])) return 0; // "Something RATTLES"
  if (!cont && /^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[a-z]+$/.test(ws[1]) && !/^(to|the|a|an|his|her|their|its|at|up|down|back|away|out|in|on|off|over|into|from|with|it|him|them|me|us|toward|towards|across|through|slowly|quickly|again|for|around|behind|past|by|open|shut)$/.test(ws[1])) return 0;
  // Verb-first fragment ("Opens a folder.", "Chews.", "Closes his eyes."); a bare noun or adverb has no actor.
  return /^[A-Z]?[a-z]+(?<!s)(s|es|ed|ing)\b/.test(w0) && !/(ness|ss|us|is|ics)$/i.test(w0.replace(/\W+$/, "")) ? 1 : 0;
}

// Actor of the nearest previous action unit (rule verdict, memoised), with distance.
function prevActorOf(ctx, i) {
  ctx._prevActor ??= new Map();
  if (ctx._prevActor.has(i)) return ctx._prevActor.get(i);
  let res = { ids: [], dist: 99, samePara: 0 };
  for (let j = i - 1, d = 1; j >= 0 && d < 12; j--) {
    const u = ctx.units[j];
    if (u.kind === "heading") break;
    if (u.kind !== "action") { d++; continue; }
    const ids = ruleActors(ctx, j);
    if (ids.length) { res = { ids, dist: d, samePara: ctx.units[i].para === u.para ? 1 : 0 }; break; }
    d++;
  }
  ctx._prevActor.set(i, res);
  return res;
}

function candRecency(ctx, i, c) {
  const a = ctx.lastNamed[c][i];
  return a < 0 ? 99 : i - a;
}

// At most MAX_CANDS characters per line: everyone named in the line, then the most recently seen. Keeps the
// per-candidate scorers cheap in big scenes; memoised per unit.
const MAX_CANDS = 4;
function capCandidates(ctx, i, set, must) {
  let ids = [...set];
  if (ids.length > MAX_CANDS) {
    const keep = ids.filter((c) => must.has(c));
    const rest = ids.filter((c) => !must.has(c)).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
    ids = keep.concat(rest).slice(0, Math.max(MAX_CANDS, keep.length));
  }
  return ids.sort((a, b) => a - b);
}

export function actorCandidates(ctx, i) {
  ctx._actorCands ??= [];
  if (ctx._actorCands[i]) return ctx._actorCands[i];
  const set = new Set(ctx.pres[i]);
  const named = new Set(ctx.cast.mentions[i].map((m) => m.c));
  for (const c of named) set.add(c);
  return (ctx._actorCands[i] = [SPECIAL.NONE, ...capCandidates(ctx, i, set, named)]);
}

export function actorFeatures(ctx, i, c) {
  const f = actorBase(ctx, i, c);
  return ctx._embedder && EMB.actor ? f.concat(embHead(ctx, i, EMB.actor)) : f;
}

function actorBase(ctx, i, c) {
  const u = ctx.units[i];
  const ms = ctx.cast.mentions[i];
  const prons = ctx.cast.pronouns[i];
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  const nPresent = cands.length;
  const plural = PLURAL.test(u.text) ? 1 : 0;
  const initPron = initialPronoun(ctx, i);
  const pluralSubj = initPron === "p" || PLURAL_SUBJ.test(u.text) ? 1 : 0;
  const vless = verbless(u.text);
  if (c === SPECIAL.NONE) {
    const pa = prevActorOf(ctx, i);
    return [1, 0, 1, 0, 0, 0, 0, initPron ? 1 : 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, nPresent, 0, plural,
      ms.length ? 1 : 0, prons.length ? 1 : 0, u.sent ?? 0, 0, 0, log1p(words(u.text)), 0,
      subjectless(ctx, i), pa.ids.length ? 0 : 1, pa.samePara, log1p(pa.dist), 0, pluralSubj, 0, 0, vless];
  }
  const ch = ctx.cast.chars[c];
  const mine = ms.filter((m) => m.c === c);
  const g = ch.gender;
  const pm = prons.filter((p) => p.g === g).length;
  const pmm = g !== "?" ? prons.filter((p) => p.g !== "p" && p.g !== g).length : 0;
  const rec = cands.map((x) => [x, candRecency(ctx, i, x)]).sort((a, b) => a[1] - b[1]);
  const rank = rec.findIndex((r) => r[0] === c);
  const lastSubjAll = cands.reduce((best, x) => (ctx.lastSubj[x][i] > (best[1] ?? -1) ? [x, ctx.lastSubj[x][i]] : best), [-1, -1]);
  // Subject of the paragraph's first sentence.
  let paraSubj = 0;
  if (u.kind === "action" && u.sent > 0) {
    const first = i - u.sent;
    const fm = ctx.cast.mentions[first];
    paraSubj = fm.length && fm[0].c === c && fm[0].pos < 0.25 ? 1 : 0;
  }
  const lastSp = prevSpeaker(ctx, i);
  return [
    0, mine.length ? 1 : 0, mine.length ? mine[0].pos : 1, mine.length && mine[0].at <= 1 ? 1 : 0,
    mine.some((m) => m.poss) ? 1 : 0, mine.length, ms.length && ms[0].c === c ? 1 : 0,
    initPron ? 1 : 0, initPron && initPron === g ? 1 : 0, initPron && g !== "?" && initPron !== "p" && initPron !== g ? 1 : 0,
    g === "?" ? 1 : 0, pm - pmm,
    log1p(candRecency(ctx, i, c)), log1p(ctx.lastSpoke[c][i] < 0 ? 99 : i - ctx.lastSpoke[c][i]),
    log1p(ctx.lastSubj[c][i] < 0 ? 99 : i - ctx.lastSubj[c][i]), lastSubjAll[0] === c ? 1 : 0,
    rank, lastSp === c ? 1 : 0, nextSpeaker(ctx, i) === c ? 1 : 0, ch.first === i ? 1 : 0,
    ctx.pres[i].includes(c) ? 1 : 0, nPresent,
    cands.filter((x) => ctx.cast.chars[x].gender === g && g !== "?").length, plural,
    ms.length ? 1 : 0, prons.length ? 1 : 0, u.sent ?? 0, paraSubj,
    ms.length && ms[0].c !== c ? 1 : 0, log1p(words(u.text)),
    lastSp === c && prevContent(ctx, i) >= 0 && ctx.units[prevContent(ctx, i)].kind === "dialogue" ? 1 : 0,
    subjectless(ctx, i), prevActorOf(ctx, i).ids.includes(c) ? 1 : 0,
    prevActorOf(ctx, i).ids.includes(c) ? prevActorOf(ctx, i).samePara : 0, log1p(prevActorOf(ctx, i).dist),
    ch.group ? 1 : 0, pluralSubj, ch.group && pluralSubj ? 1 : 0, ch.fwd === i ? 1 : 0, vless,
  ];
}

// High-precision patterns only (used to override the model): name-led sentence, introduced-before-named,
// plural subject with a group present, appearance fragment after an introduction. null = no strong rule.
export function strongActors(ctx, i) {
  const u = ctx.units[i];
  if (u.kind !== "action") return null;
  const ms = ctx.cast.mentions[i];
  const pair = namePair(ctx, i);
  if (pair) return pair;
  const joint = new Set(ms.filter((m) => m.pos < 0.4).map((m) => m.c)).size > 1 || PLURAL.test(u.text);
  if (ms.length && ms[0].lead) {
    const lp = leadPossessive(ctx, i);
    if (lp) return lp;
    return joint ? null : [ms[0].c]; // other joint shapes: leave to the model
  }
  if (NOBODY.test(u.text) || SCREEN_TEXT.test(u.text)) return [];
  const pa = pronounAppositive(ctx, i) || introAppositive(ctx, i);
  if (pa) return pa;
  if (EVERYONE.test(u.text)) { const all = everyone(ctx, i); if (all.length) return all; }
  const fwd = ctx.cast.chars.find((c) => c.fwd === i);
  if (fwd) return [fwd.id];
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  if (initialPronoun(ctx, i) === "p" || PLURAL_SUBJ.test(u.text)) {
    const g = cands.filter((c) => ctx.cast.chars[c].group);
    if (g.length) return [g.sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b))[0]];
  }
  if (verbless(u.text) && !ms.length) {
    const pa = prevActorOf(ctx, i);
    if (pa.ids.length === 1 && pa.dist <= 2 && pa.samePara) return pa.ids;
  }
  return null;
}

// Body parts act for their owner ("Maya's hands shake", "His jaw tightens"); other possessed things don't
// ("Hattie's board blinks", "His chair scrapes" -> nobody).
const BODY = /^(eyes?|face|hands?|fingers?|fingertips|knuckles|fists?|voice|breath|breathing|jaw|lips?|mouth|head|shoulders?|heart|knees?|legs?|feet|foot|arms?|gaze|smile|grin|hair|brow|forehead|chest|stomach|throat|body|back|expression|look|grip|pulse|tears|cheeks?|nose|neck|skin|teeth|tongue|wrists?|palms?|thumbs?|whole|own|eyelids|lashes|nostrils|posture|frame|silhouette|footsteps|steps|hand-|attention)\b/i;
// "MARISOL's husband, DESMOND, ..." -> DESMOND; "Maya's hands shake" -> Maya; "Maya's phone buzzes" -> nobody.
function leadPossessive(ctx, i) {
  const ms = ctx.cast.mentions[i], t = ctx.units[i].text;
  if (!ms[0].poss) return null;
  const nxt = ms.find((m) => m.at > ms[0].at && m.c !== ms[0].c);
  if (nxt && /^[\w\s.-]{0,30},\s*$/.test(t.slice(ms[0].at, nxt.at).replace(/^\S+['’]s\s+/, ""))) return [nxt.c];
  return [ms[0].c]; // "Maya's hands shake", "Maya's phone is dead": hers
}
// "Her partner, DET. REYNALD KOWALSKI, 50s, eats ..." -> the appositive name.
function pronounAppositive(ctx, i) {
  const ms = ctx.cast.mentions[i], t = ctx.units[i].text;
  const m = t.match(/^(?:his|her|their)\s+[\w-]+(?:\s+[\w-]+)?,\s*/i);
  if (m && ms.length && ms[0].at === m[0].length) return [ms[0].c];
  // "Her brother-in-law CLETUS, 50s, leans ..." / "His wife ILSE, forties, navigates ..."
  const r = t.match(/^(?:his|her|their)\s+(?:[a-z'-]+\s+){1,3}(?=[A-Z][A-Z'’-]+\b)/);
  if (r && ms.length && ms[0].at === r[0].length) return [ms[0].c];
  return null;
}
// A pronoun before anyone is on stage ("She mounts the mule." as the scene's first line): the next character of that gender.
function laterOfGender(ctx, i, g) {
  for (let j = i + 1; j < Math.min(ctx.units.length, i + 6); j++) {
    for (const m of ctx.cast.mentions[j]) if (ctx.cast.chars[m.c].gender === g) return m.c;
    const sp = ctx.speaker[j];
    if (sp >= 0 && ctx.cast.chars[sp].gender === g) return sp;
  }
  return -1;
}
// "Everyone turns." / "Nobody moves." -> everybody present.
const EVERYONE = /^(everyone|everybody|all of them|all eyes|the whole (room|table|group|family))\b/i;
// "Nobody moves." / "No one answers." -> nobody acts.
const NOBODY = /^(nobody|no one|none of them|neither of them)\b/i;
// On-screen text and inserts: "ON PHONE: where r u", "INSERT - TEXT MESSAGE", "SUPER: 1999".
const SCREEN_TEXT = /^(on (phone|screen|the screen|tv|laptop|monitor|her phone|his phone)|insert\b|super\b|title\b|chyron|text( message)?:|caption|subtitle|phone screen|["“]|[A-Z][a-z]+:\s)/i;
// Introduction appositive: "Next to Juniper, Sam, early 20s, ..." / "Her brother, Vic, 60s, ..." -> the introduced one.
const INTRO_APPOS = /^,\s*(?:\d{1,2}s?|(?:early|mid|late)[- ]\d0s|\d0s|age \d+|[a-z]+ish)\b/i;
function introAppositive(ctx, i) {
  const t = ctx.units[i].text, ms = ctx.cast.mentions[i];
  for (const m of ms) {
    if (m.at === 0) continue;
    const end = t.slice(m.at).match(/^[\w.'’-]+(?:\s+[A-Z][\w.'’-]+)*/);
    if (!end) continue;
    if (/,\s*$/.test(t.slice(0, m.at)) && INTRO_APPOS.test(t.slice(m.at + end[0].length))) return [m.c];
  }
  return null;
}
// Off-screen voices (every cue is V.O. / O.S. / phone / radio, never in an action line) are not "in the room".
function offscreen(ctx, c) {
  ctx._off ??= new Map();
  if (!ctx._off.has(c)) {
    const cues = ctx.units.filter((u) => u.kind === "dialogue" && ctx.speaker[u.i] === c);
    const inAction = ctx.units.some((u) => u.kind === "action" && ctx.cast.mentions[u.i].some((m) => m.c === c));
    ctx._off.set(c, /^(RADIO|DISPATCH|INTERCOM|PA|ANNOUNCER|NARRATOR|VOICE|PHONE|TV|SPEAKER)\b/.test(ctx.cast.chars[c].name) ||
      (!inAction && cues.length > 0 && cues.every((u) => (u.ext || []).some((e) => /^(V\.?O|O\.?S|O\.?C|PHONE|RADIO|FILTERED|ON PHONE|INTERCOM)/i.test(e)))));
  }
  return ctx._off.get(c);
}
function everyone(ctx, i, window = 99) {
  return [...new Set(ctx.pres[i])].filter((c) => candRecency(ctx, i, c) <= window && !offscreen(ctx, c) && !ctx.cast.chars[c].group);
}
const FRAG_SPEAKER_LOOSE = false;
const NUMBER = { two: 2, both: 2, three: 3, four: 4, five: 5, six: 6 };

// Run-on sentences: "Leon laughs, and Hannah steadies herself." / "Robin leans in, Barry covers his eyes" -> every
// character starting a clause (names only; needs at least two different ones).
function clauseSubjects(ctx, i) {
  const t = ctx.units[i].text, ms = ctx.cast.mentions[i];
  if (ms.length < 2) return null;
  const ids = [];
  for (const m of ms) {
    if (m.poss) continue;
    const before = t.slice(0, m.at);
    if (m.at <= 1 || m.lead || /(?:[,;]\s*(?:and\s+|then\s+|while\s+|as\s+)?|\s(?:and|while|as|but)\s+)$/.test(before)) {
      const after = t.slice(m.at).replace(/^\S+(?:\s+[A-Z]\S*)*\s*/, "");
      if (/^(?:[a-z]+(?:s|ed)\b|is\b|has\b|can't\b|doesn't\b|does\b|just\b|already\b|still\b|slowly\b|quickly\b)/.test(after) && !ids.includes(m.c)) ids.push(m.c);
    }
  }
  return ids.length >= 2 ? ids : null;
}

// "MAYA and JONAH face each other." / "Maya, Jonah and Ruth run." -> all names in the leading subject.
function namePair(ctx, i) {
  const u = ctx.units[i], ms = ctx.cast.mentions[i];
  if (!ms.length || !ms[0].lead || ms[0].poss) return null;
  const ids = [ms[0].c];
  let end = ms[0].at;
  for (const m of ms.slice(1)) {
    const gap = u.text.slice(end, m.at).replace(/^[A-Za-z'’.-]+(?:\s+[A-Z][A-Za-z'’.-]+)*/, "");
    if (/^\s*(,|,?\s+and|&)\s*$/i.test(gap) && !ids.includes(m.c)) { ids.push(m.c); end = m.at; } else break;
  }
  return ids.length > 1 ? ids : null;
}

// Rule verdict: array of char ids (empty = NONE). ctx._why[i] records which rule decided (see WHY_RELIABLE).
export function ruleActors(ctx, i) {
  ctx._why ??= new Map();
  const W = (why, ids) => { ctx._why.set(i, why); return ids; };
  const u = ctx.units[i];
  const ms = ctx.cast.mentions[i];
  const np = namePair(ctx, i);
  if (np) return W("namePair", np);
  const cs = clauseSubjects(ctx, i);
  if (cs) return W("clauses", cs);
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  if (ms.length && ms[0].lead) {
    const lp = leadPossessive(ctx, i);
    if (lp) return W("possessive", lp);
    return W(ms[0].at <= 1 ? "nameLead" : "titleLead", [ms[0].c]);
  }
  if (NOBODY.test(u.text)) return W("nobody", []);
  if (SCREEN_TEXT.test(u.text)) return W("screenText", []);
  const pa = pronounAppositive(ctx, i) || introAppositive(ctx, i);
  if (pa) return W("appositive", pa);
  if (EVERYONE.test(u.text)) { const all = everyone(ctx, i); if (all.length) return W("everyone", all); }
  if (false && COUNT_GROUP.test(u.text)) {
    const g = ctx.cast.chars.filter((c) => c.group && ctx.pres[i].includes(c.id));
    if (g.length) return W("countGroup", [g[0].id]);
    let all = everyone(ctx, i);
    if (!all.length) all = ctx.cast.chars.filter((c) => !c.group && !c.common).map((c) => c.id); // scene opening
    if (all.length > 1) return W("countGroup", all);
  }
  const fwd = ctx.cast.chars.find((c) => c.fwd === i);
  if (fwd) return W("introducedBefore", [fwd.id]);
  if (subjectless(ctx, i)) {
    // A stage direction next to a speech belongs to that speaker ("Smiles." / "Breaking off.").
    const pa = prevActorOf(ctx, i);
    if (pa.ids.length && pa.dist <= 1 && ctx.units[i - 1]?.kind === "action") return W("fragmentPrev", pa.ids);
    const nxt = ctx.units[i + 1], prv = ctx.units[i - 1];
    if (prv?.kind === "dialogue" && ctx.speaker[i - 1] >= 0 && nxt?.kind === "dialogue" && ctx.speaker[i + 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i + 1]]);
    if (FRAG_SPEAKER_LOOSE && prv?.kind === "dialogue" && ctx.speaker[i - 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i - 1]]);
    if (FRAG_SPEAKER_LOOSE && nxt?.kind === "dialogue" && ctx.speaker[i + 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i + 1]]);
    if (pa.ids.length && pa.dist <= 1) return W("fragmentPrev", pa.ids);
  }
  const initPron = initialPronoun(ctx, i);
  const salient = (filter) => cands.filter(filter).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
  // "The crowd turns." / "Many." / "The others scatter." -> extras, unless the crowd is a character (a group).
  if (/^(the (crowd|others|people|audience|room)|many|some|most|a few)\b/i.test(u.text)) {
    const g = salient((c) => ctx.cast.chars[c].group);
    return g.length ? W("pluralGroup", [g[0]]) : W("extras", []);
  }
  // "All three freeze." / "The four of them..." -> that many of the most recently active characters.
  const num = u.text.match(/^(?:all|the)\s+(two|three|four|five|six)\b|^(two|three|four|five|six)\s+of\s+them\b/i);
  if (num) {
    const k = NUMBER[(num[1] || num[2]).toLowerCase()];
    const s = salient((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group);
    const pres = everyone(ctx, i).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
    const pick = (pres.length >= k ? pres : s).slice(0, k);
    if (pick.length) return W("pluralCount", pick);
  }
  // "Their hands collide." / "Their eyes meet." -> the two most recent.
  if (/^their\s+(hands|fingers|eyes|lips|foreheads|knees|shoulders|gazes|mouths|faces|arms|feet)\b/i.test(u.text)) {
    const s2 = salient((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group).slice(0, 2);
    if (s2.length === 2) return W("pluralTwo", s2);
  }
  if (initPron === "p" || PLURAL_SUBJ.test(u.text) || /^(together|the two)\b/i.test(u.text)) {
    const g = salient((c) => ctx.cast.chars[c].group);
    if (g.length) return W("pluralGroup", [g[0]]);
    // "Both" / "the two" / "neither" -> the two most recent; "They" / "All" -> everyone present.
    if (!/^(both|the two|neither|together)\b/i.test(u.text)) { const all = everyone(ctx, i, 8); if (all.length > 1) return W("pluralAll", all); }
    const s2 = salient(() => true).slice(0, 2);
    if (s2.length) return W("pluralTwo", s2);
  }
  if (initPron) {
    const s1 = salient((c) => ctx.cast.chars[c].gender === initPron);
    const present = new Set(ctx.pres[i]);
    if (s1.length) {
      const unique = s1.filter((c) => present.has(c)).length === 1 && salient((c) => ctx.cast.chars[c].gender === "?").length === 0;
      if (unique || s1.length === 1) return W(unique ? "pronounUnique" : "pronounSalient", [s1[0]]);
      return W("pronounSalient", [discourseSubject(ctx, i, initPron, s1)]);
    }
    const q = salient((c) => ctx.cast.chars[c].gender === "?");
    if (q.length) return W("pronounUnknownGender", [q[0]]);
    const ahead = laterOfGender(ctx, i, initPron);
    if (ahead >= 0) return W("pronounAhead", [ahead]);
  }
  const subj = ms.find((m) => !m.poss && !/\b(at|to|toward|towards|in|on|with|behind|beyond|beside|near|from|for|of|by|past|around|into|onto|under|over|between|among|than|like)\s+$/i.test(u.text.slice(0, m.at)));
  if (subj) return W("firstMention", [subj.c]);
  if (ms.length) return W("objectOnly", []);
  if (/^(she|he|they|her|his)\b/i.test(u.text) && cands.length) return W("pronounFallback", [salient(() => true)[0]]);
  return W("none", []);
}

// Several same-gender candidates for a subject pronoun: right after a line of dialogue, the listener reacts (unless
// the pronoun sentence names the speaker's object, e.g. "She looks at him"); otherwise the most recent subject of that
// gender (actor of an earlier action line or a speaker), falling back to the most recently named.
const DISCOURSE = { mode: "recency", model: null, predict: null };
function discourseSubject(ctx, i, g, cands) {
  if (DISCOURSE.model) {
    // learned tie-break among the same-gender candidates (the actor model's scores)
    let best = cands[0], bp = -Infinity;
    for (const c of cands) { const p = DISCOURSE.predict(DISCOURSE.model, actorFeatures(ctx, i, c)); if (p > bp) { bp = p; best = c; } }
    return best;
  }
  const prev = ctx.units[i - 1];
  if (DISCOURSE.mode !== "recency" && prev && prev.kind === "dialogue") {
    const sp = ctx.speaker[i - 1];
    if (sp >= 0 && ctx.cast.chars[sp]?.gender === g) {
      // the listener: the other same-gender candidate who spoke or acted most recently
      const other = cands.filter((c) => c !== sp);
      if (other.length && DISCOURSE.mode !== "subject") return other[0];
    }
  }
  if (DISCOURSE.mode !== "listener") {
    for (let j = i - 1, d = 0; j >= 0 && d < 10; j--, d++) {
      const u = ctx.units[j];
      if (u.kind === "heading") break;
      const subj = u.kind === "dialogue" ? [ctx.speaker[j]] : (ctx._why?.has(j) ? ruleActors(ctx, j) : []);
      const hit = subj.find((c) => cands.includes(c));
      if (hit !== undefined) return hit;
    }
  }
  return cands[0];
}
export { DISCOURSE };

export function ruleWhy(ctx, i) {
  if (!ctx._why?.has(i)) ruleActors(ctx, i);
  return ctx._why.get(i);
}

// ---------------- who: addressee of dialogue ----------------

export const ADDR_FEATURES = ["special", "isAll", "isSelf", "isNobody", "vocative", "vocativeEdge", "parenTo", "prevSpeaker",
  "nextSpeaker", "spokeRecently", "prevActionNames", "present", "nPresent", "youCount", "groupWords", "voice", "question",
  "sinceSpoke", "sinceNamed", "recencyRank", "speakerAddressedBy", "words", "firstPerson", "turnIndex"];

// Case-insensitive name matcher per character, cached on the context.
function nameRe(ctx, c) {
  ctx._nameRe ??= new Map();
  if (!ctx._nameRe.has(c)) {
    const toks = ctx.cast.chars[c].names.flatMap((n) => n.split(/\s+/)).filter((t) => t.length > 1 && !/^(MR|MRS|MS|DR|DET)\.?$/.test(t));
    ctx._nameRe.set(c, toks.length ? new RegExp(`\\b(${toks.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})\\b`, "i") : null);
  }
  return ctx._nameRe.get(c);
}

export function addrCandidates(ctx, i) {
  ctx._addrCands ??= [];
  if (ctx._addrCands[i]) return ctx._addrCands[i];
  const sp = ctx.speaker[i];
  const set = new Set(ctx.pres[i]);
  const must = new Set(ctx.cast.mentions[i].map((m) => m.c));
  for (const c of must) set.add(c);
  const ns = nextSpeaker(ctx, i, sp), ps = prevSpeaker(ctx, i, sp);
  if (ns >= 0) { set.add(ns); must.add(ns); }
  if (ps >= 0) must.add(ps);
  set.delete(sp); must.delete(sp);
  return (ctx._addrCands[i] = [SPECIAL.ALL, SPECIAL.SELF, SPECIAL.NOBODY, ...capCandidates(ctx, i, set, must)]);
}

export function addrFeatures(ctx, i, c) {
  const f = addrBase(ctx, i, c);
  return ctx._embedder && EMB.addr ? f.concat(embHead(ctx, i, EMB.addr)) : f;
}

function addrBase(ctx, i, c) {
  const u = ctx.units[i];
  const sp = ctx.speaker[i];
  const text = u.text;
  const paren = (u.paren || []).join(" ");
  const cands = addrCandidates(ctx, i).filter((x) => x >= 0);
  const you = count(/\byou\b|\byour\b/gi, text);
  const group = GROUP_ADDR.test(text) ? 1 : 0;
  const voice = (u.ext || []).some((e) => VOICE.has(e)) || /phone|radio|intercom|into the/i.test(paren) ? 1 : 0;
  const q = /\?/.test(text) ? 1 : 0;
  const w = log1p(words(text));
  const fp = count(/\b(I|me|my|myself)\b/g, text);
  let turn = 0;
  for (let j = i - 1; j >= 0 && ctx.units[j].kind === "dialogue"; j--) turn++;
  if (c < 0) {
    return [1, c === SPECIAL.ALL ? 1 : 0, c === SPECIAL.SELF ? 1 : 0, c === SPECIAL.NOBODY ? 1 : 0, 0, 0, 0, 0, 0, 0, 0, 0,
      cands.length, you, group, voice, q, 0, 0, 0, 0, w, fp, turn];
  }
  const re = nameRe(ctx, c);
  const voc = re ? re.exec(text) : null;
  const vocEdge = voc && (voc.index < 3 || /^[,.!?\s]*$/.test(text.slice(voc.index + voc[0].length)) || /,\s*$/.test(text.slice(0, voc.index))) ? 1 : 0;
  const parenTo = re && /\bto\b/i.test(paren) && re.test(paren) ? 1 : 0;
  let spokeRecently = 0;
  for (let j = i - 1, k = 0; j >= 0 && k < 4; j--) if (ctx.speaker[j] >= 0) { k++; if (ctx.speaker[j] === c) spokeRecently = 1; }
  const pa = prevContent(ctx, i);
  const prevAct = pa >= 0 && ctx.units[pa].kind === "action" && ctx.cast.mentions[pa].some((m) => m.c === c) ? 1 : 0;
  const rec = cands.map((x) => [x, candRecency(ctx, i, x)]).sort((a, b) => a[1] - b[1]);
  // Did c's last line come right before and was the speaker named in it (they addressed the speaker)?
  let addressedBy = 0;
  const ps = prevContent(ctx, i);
  if (ps >= 0 && ctx.speaker[ps] === c && sp >= 0) {
    const r = nameRe(ctx, sp);
    if (r && r.test(ctx.units[ps].text)) addressedBy = 1;
  }
  return [0, 0, 0, 0, voc ? 1 : 0, vocEdge, parenTo, prevSpeaker(ctx, i, sp) === c ? 1 : 0, nextSpeaker(ctx, i, sp) === c ? 1 : 0,
    spokeRecently, prevAct, ctx.pres[i].includes(c) ? 1 : 0, cands.length, you, group, voice, q,
    log1p(ctx.lastSpoke[c][i] < 0 ? 99 : i - ctx.lastSpoke[c][i]), log1p(candRecency(ctx, i, c)),
    rec.findIndex((r) => r[0] === c), addressedBy, w, fp, turn];
}

export function ruleAddressee(ctx, i) {
  const cands = addrCandidates(ctx, i);
  const feats = new Map(cands.map((c) => [c, addrFeatures(ctx, i, c)]));
  const chars = cands.filter((c) => c >= 0);
  const pick = (k) => chars.filter((c) => feats.get(c)[k]);
  let x = pick(6); if (x.length) return x;           // (to X)
  x = pick(5); if (x.length) return [x[0]];          // vocative at edge
  const f0 = feats.get(SPECIAL.ALL);
  if (f0[14]) return [SPECIAL.ALL];                  // group words
  if (f0[15] && !f0[13]) return [SPECIAL.NOBODY];    // V.O. without "you"
  x = pick(7); if (x.length) return x;               // previous speaker
  x = pick(8); if (x.length) return x;               // next speaker
  if (chars.length === 1) return chars;
  return chars.length ? [chars[0]] : [SPECIAL.SELF];
}

// ---------------- emotion ----------------

export const EMO_FEATURES = ["isDialogue", ...EMOTIONS.slice(1).map((e) => "lex_" + e), ...EMOTIONS.slice(1).map((e) => "par_" + e),
  "negation", "intensifier", "exclaim", "question", "ellipsis", "interrupt", "capsWords", "words", "prevSameSpeakerEmo",
  "threat", "calm", ...EMOTIONS.map((e) => "tab_" + e), ...EMOTIONS.map((e) => "prevTab_" + e),
  ...EMOTIONS.map((e) => "nextTab_" + e), ...EMOTIONS.map((e) => "sceneTab_" + e)];
// Mean emotion-table probabilities over the scene (cached).
function sceneEmoTable(ctx) {
  if (!ctx._sceneEt) {
    const m = new Array(8).fill(0), n = Math.max(1, ctx.content.length);
    for (const j of ctx.content) unitEmoTable(ctx, j).forEach((v, c) => { m[c] += v / n; });
    ctx._sceneEt = m;
  }
  return ctx._sceneEt;
}

export function emotionFeatures(ctx, i, prevEmo = null) {
  const f = emotionBase(ctx, i, prevEmo);
  return ctx._embedder && prevEmo !== -1 ? f.concat(embHead(ctx, i, EMB.emo)) : f;
}

function emotionBase(ctx, i, prevEmo) {
  const u = ctx.units[i];
  if (prevEmo === null) {
    prevEmo = -1;
    if (u.kind === "dialogue") for (let j = i - 1; j >= 0; j--) if (ctx.speaker[j] === ctx.speaker[i]) { prevEmo = EMOTIONS.indexOf(ruleEmotion(ctx, j)[0]); break; }
  }
  const t = u.text;
  const par = (u.paren || []).join(" ");
  return [
    u.kind === "dialogue" ? 1 : 0, ...unitEmoLex(ctx, i), ...emoLex(par),
    count(NEGATION, t), count(INTENSIFIER, t), count(/!/g, t), count(/\?/g, t), count(/\.\.\.|…/g, t),
    /(--|—)\s*$/.test(t) ? 1 : 0, count(/\b[A-Z]{3,}\b/g, t), log1p(words(t)), prevEmo,
    lexCount(t, "threat"), lexCount(t, "calm"),
    ...unitEmoTable(ctx, i),
    // context: the neighbouring lines and the scene as a whole
    ...(() => { const k = ctx.content.indexOf(i), p = ctx.content[k - 1], q = ctx.content[k + 1];
      return [...(p !== undefined ? unitEmoTable(ctx, p) : new Array(8).fill(0)), ...(q !== undefined ? unitEmoTable(ctx, q) : new Array(8).fill(0)), ...sceneEmoTable(ctx)]; })(),
  ];
}

// Rule verdict: [emotion, intensity].
export function ruleEmotion(ctx, i) {
  const f = emotionFeatures(ctx, i, -1);
  const scores = EMOTIONS.slice(1).map((_, k) => f[1 + k] + 2 * f[8 + k]);
  const best = scores.reduce((b, v, k) => (v > scores[b] ? k : b), 0);
  if (scores[best] === 0) return ["neutral", 0.1];
  const inten = Math.min(1, 0.3 + 0.15 * scores[best] + 0.1 * f[17] + 0.05 * f[19]);
  return [EMOTIONS[best + 1], inten];
}

// ---------------- tension ----------------

export const TENSION_FEATURES = ["threat", "conflict", "urgency", "calm", "fear", "anger", "joy", "affection", "negation",
  "imperative", "questions", "exclaims", "interrupts", "shortSentRatio", "meanWords", "speakerSwitches", "dialogueShare",
  "nChars", "beatLen", "posInScene", "capsWords", "sceneThreat", "relThreat", "secondPerson"];

// beat = array of unit indices.
// Per-unit text statistics, computed once per scene and summed over beats / windows.
const TLEX = ["threat", "conflict", "urgency", "calm", "fear", "anger", "joy", "affection"];
function unitStats(ctx, i) {
  ctx._stats ??= [];
  let st = ctx._stats[i];
  if (st) return st;
  const u = ctx.units[i];
  const text = u.text + " " + (u.paren || []).join(" ");
  const w = words(u.text);
  st = {
    W: words(text), w, lex: TLEX.map((k) => lexCount(text, k)), neg: count(NEGATION, text),
    imp: IMPERATIVE.test(u.text) ? 1 : 0, q: count(/\?/g, text), ex: count(/!/g, text),
    intr: /(--|—)\s*$/.test(u.text) ? 1 : 0, short: w <= 4 ? 1 : 0, caps: count(/\b[A-Z]{3,}\b/g, text),
    you: count(/\byou\b/gi, text), dlg: u.kind === "dialogue" ? 1 : 0,
  };
  ctx._stats[i] = st;
  return st;
}

function sceneDensity(ctx) {
  if (ctx._density === undefined) {
    let t = 0, w = 0;
    for (const i of ctx.content) { const st = unitStats(ctx, i); t += st.lex[0]; w += st.W; }
    ctx._density = t / Math.max(1, w);
  }
  return ctx._density;
}

// beat = array of unit indices.
export function tensionFeatures(ctx, beat, sceneThreatDensity = null) {
  const f = tensionBase(ctx, beat, sceneThreatDensity);
  if (!ctx._embedder || !EMB.tension) return f;
  const m = new Float64Array(EMB.tension);
  for (const i of beat) { const e = unitEmb(ctx, i); for (let d = 0; d < m.length; d++) m[d] += e[d]; }
  return f.concat(Array.from(m, (v) => v / Math.max(1, beat.length)));
}

function tensionBase(ctx, beat, sceneThreatDensity) {
  const n = beat.length || 1;
  const density = sceneThreatDensity ?? sceneDensity(ctx);
  let W = 0, neg = 0, imp = 0, q = 0, ex = 0, intr = 0, short = 0, wsum = 0, caps = 0, you = 0, dlg = 0, switches = 0;
  const lex = new Array(TLEX.length).fill(0);
  const chars = new Set();
  for (let k = 0; k < beat.length; k++) {
    const i = beat[k], st = unitStats(ctx, i);
    W += st.W; neg += st.neg; imp += st.imp; q += st.q; ex += st.ex; intr += st.intr; short += st.short;
    wsum += st.w; caps += st.caps; you += st.you; dlg += st.dlg;
    for (let j = 0; j < lex.length; j++) lex[j] += st.lex[j];
    if (k > 0 && st.dlg && ctx.units[beat[k - 1]].kind === "dialogue" && ctx.speaker[i] !== ctx.speaker[beat[k - 1]]) switches++;
    for (const m of ctx.cast.mentions[i]) chars.add(m.c);
    if (ctx.speaker[i] >= 0) chars.add(ctx.speaker[i]);
  }
  W = Math.max(1, W);
  return [
    lex[0] / W * 100, lex[1] / W * 100, lex[2] / W * 100, lex[3] / W * 100,
    lex[4] / W * 100, lex[5] / W * 100, lex[6] / W * 100, lex[7] / W * 100,
    neg / n, imp / n, q / n, ex / n, intr / n, short / n, wsum / n, switches / n, dlg / n,
    chars.size, log1p(n), ctx.content.indexOf(beat[0]) / Math.max(1, ctx.content.length - 1),
    caps / n, density * 100, lex[0] / W - density, you / W * 100,
  ];
}

// Per-unit tension features: each content unit sees a window of +-2 content units, so a beat's tension
// (mean of its units) barely moves when a beat boundary shifts by one unit.
export function unitTensionFeatures(ctx, radius = 2) {
  const c = ctx.content;
  return c.map((i, k) => tensionFeatures(ctx, c.slice(Math.max(0, k - radius), k + radius + 1)));
}

export function ruleTension(f) {
  const s = 0.5 * f[0] + 0.25 * f[1] + 0.25 * f[2] - 0.3 * f[3] + 0.3 * f[4] + 0.25 * f[5] - 0.15 * f[6] - 0.1 * f[7] +
    0.2 * f[9] + 0.3 * f[11] + 0.4 * f[12] + 0.3 * f[13] + 0.2 * f[15];
  return 1 / (1 + Math.exp(-(s - 1)));
}

// ---------------- full rule analysis (verdict path) ----------------

export function analyzeRules(scene) {
  const ctx = sceneContext(scene);
  const beats = ruleBeats(ctx);
  const lines = {};
  let prevEmo = {};
  for (const i of ctx.content) {
    const u = ctx.units[i];
    const emo = ruleEmotion(ctx, i);
    if (u.kind === "action") lines[i] = { who: ruleActors(ctx, i), why: ruleWhy(ctx, i), emo };
    else lines[i] = { speaker: ctx.speaker[i], to: ruleAddressee(ctx, i), emo };
    prevEmo = emo;
  }
  const beatUnits = beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));
  const tension = beatUnits.map((bu) => ruleTension(tensionFeatures(ctx, bu)));
  return { cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name })), beats, lines, tension };
}

// ---------------- line kind: what a line without a character agent is ----------------
// "character" lines have who; the rest is setting (place, light, weather, how a space looks or sounds), event (an
// object, sound or machine acts), extra (people or creatures that are not characters), camera (shot / edit / on-screen
// text directions) or abstract (narration, reflection, time passing, beats).
export const LINE_KINDS = ["character", "setting", "event", "extra", "camera", "abstract"];
const CAMERA = /^(close on|close up|closeup|extreme|angle on|angle|insert|pov|p\.o\.v|we see|we hear|we follow|we move|we pan|back to|intercut|super:?|title:?|subtitle|caption|fade|cut to|smash cut|match cut|dissolve|black\.?$|tableau|montage|end montage|series of shots|end series|on screen|on the screen:|wide|wider|push in|pull back|pan|tilt|track|tracking|aerial|overhead|reverse|two shot|split screen|freeze frame|slow motion|time cut|jump cut|flashback|end flashback|back in|resume|later\.?$|moments later\.?$)\b/i;
const ABSTRACT = /^(a (long |brief |short )?(beat|pause|moment|second|breath)\b|beat\.?$|pause\.?$|a long time|time passes|days pass|weeks pass|months pass|years pass|hours pass|for a (while|moment|second)|no one (hears|sees|notices|knows|comes|answers)|nobody (hears|sees|notices|knows|comes|answers)|nothing (happens|changes|moves)|it is (the|a) (last|first|only)|this is (the|a|how|what|where|when)|some (things|wounds|people|doors)|that is all|that's all|which is (to say|why)|in another life|perhaps|maybe|somewhere,? (someone|a))/i;
const PERSON = /\b(man|men|woman|women|boy|boys|girl|girls|kid|kids|child|children|baby|toddler|teen|teenager|guard|guards|waiter|waitress|nurse|soldier|soldiers|cop|cops|officer|officers|stranger|strangers|figure|figures|passer-?by|passers-?by|crowd|people|tourists?|customers?|patrons?|students?|workers?|villagers?|diners?|commuters?|neighbou?rs?|someone|somebody|dog|dogs|cat|cats|horse|horses|bird|birds|gulls?|crows?|rats?|mice|mouse|cow|cows|sheep|goat|goats|wolf|wolves|deer|fox|owl|creature|creatures|monster|thing|beast|ghost|hand|hands|face|faces|eyes|voice|voices|footsteps|silhouette|shadow figure)\b/i;
const EXTRA_SUBJ = new RegExp("^(?:a|an|the|two|three|four|several|some|many|few|a few|other|another|one|an old|a young|a little)\\s+(?:[\\w-]+\\s+){0,3}?" + PERSON.source.replace(/^\\b|\\b$/g, ""), "i");
const SETTING_NOUN = /\b(rain|snow|sleet|hail|fog|mist|wind|breeze|storm|thunder|lightning|sun|sunlight|sunrise|sunset|dawn|dusk|twilight|moon|moonlight|stars|sky|clouds?|night|morning|afternoon|evening|light|lights|shadows?|darkness|dark|silence|quiet|heat|cold|dust|smoke|haze|room|hall|kitchen|office|street|road|field|forest|woods|river|lake|sea|ocean|beach|shore|harbou?r|mountains?|hills?|desert|city|town|village|house|building|walls?|floor|ceiling|windows?|corridor|hallway|stairs|garden|yard|park|church|bar|restaurant|cafe|shop|store|station|platform|parking lot|alley|bridge|dock|pier|landscape|horizon|view|space|interior|exterior)\b/i;
const STATIC_VERB = /\b(is|are|was|were|stands?|sits?|lies|lie|hangs?|looms?|stretch(es)?|glows?|gleams?|shines?|glitters?|shimmers?|twinkles?|flickers?|blankets?|covers?|fills?|lines?|dots?|surrounds?|overlooks?|rises?|towers?|sprawls?|extends?|leads?|smells?|reeks?|stinks?|seems?|remains?|waits?|sleeps?|rests?|settles?|hums?|falls?|drifts?|pours?|beats? down|bakes?)\b/i;
const EVENT_VERB = /\b(rings?|buzz(es)?|beeps?|clicks?|chimes?|slams?|bangs?|crash(es)?|smash(es)?|shatters?|breaks?|explodes?|bursts?|opens?|closes?|swings?|creaks?|squeaks?|thuds?|drops?|rolls?|spins?|tips?|topples?|tumbles?|skids?|screech(es)?|honks?|roars?|blares?|hisses?|whirs?|clatters?|rattles?|knocks?|cracks?|snaps?|pops?|blinks?|flashes?|goes (dark|off|out|black|dead|silent)|cuts? out|dies|stops?|starts?|lands?|hits?|strikes?|arrives?|pulls (up|in|away|out)|speeds?|races?|passes?|appears?|vanishes|disappears?|moves?|shifts?|turns?|changes?|ticks?|vibrates?|lights up|comes on|kicks in|boils?|burns?|spills?|leaks?|drips?)\b/i;

// Text + rule signals as tokens, the input of the learned kind table (kindtable.js).
export function kindSignals(ctx, i) {
  const t = ctx.units[i].text.trim();
  const sig = [];
  if (CAMERA.test(t)) sig.push("__cam");
  if (ABSTRACT.test(t)) sig.push("__abs");
  if (EXTRA_SUBJ.test(t)) sig.push("__ext");
  if (PERSON.test(t)) sig.push("__person");
  if (SETTING_NOUN.test(t)) sig.push("__place");
  if (STATIC_VERB.test(t)) sig.push("__static");
  if (EVENT_VERB.test(t)) sig.push("__event");
  if (!AUX.test(t) && !STATIC_VERB.test(t) && !EVENT_VERB.test(t) && !/\b[a-z]+s\b/.test(t.split(/\s+/).slice(1).join(" "))) sig.push("__noverb");
  if (/\b[A-Z]{3,}\b/.test(t.replace(/^[A-Z ]+(?=[,.])/, ""))) sig.push("__caps");
  if (t === t.toUpperCase() && /[A-Z]{2}/.test(t)) sig.push("__allcaps");
  const w = words(t);
  sig.push(w <= 2 ? "__w2" : w <= 5 ? "__w5" : w <= 12 ? "__w12" : "__wlong");
  if (i === ctx.content[0]) sig.push("__first");
  const prev = ctx.units[i - 1];
  if (prev && prev.kind === "dialogue") sig.push("__afterdlg");
  return sig.join(" ") + " " + t.toLowerCase();
}

// Context of a line for the kind stack: position in the scene, paragraph, neighbours.
export const KIND_CONTEXT = ["pos", "k", "firstPara", "sentInPara", "prevDialogue", "nextDialogue", "prevChar", "nextChar", "paraLen"];
export function kindContext(ctx, i) {
  const k = ctx.content.indexOf(i), n = ctx.content.length, u = ctx.units[i];
  const p = ctx.content[k - 1], q = ctx.content[k + 1];
  const isChar = (j) => j !== undefined && ctx.units[j].kind === "action" && ruleActors(ctx, j).length > 0 ? 1 : 0;
  const firstPara = ctx.content.slice(0, k + 1).every((j) => ctx.units[j].kind === "action" && ctx.units[j].para === ctx.units[ctx.content[0]].para) ? 1 : 0;
  const paraLen = ctx.units.filter((x) => x.kind === "action" && x.para === u.para).length;
  return [n > 1 ? k / (n - 1) : 0, Math.min(k, 20), firstPara, u.sent ?? 0, p !== undefined && ctx.units[p].kind === "dialogue" ? 1 : 0,
    q !== undefined && ctx.units[q].kind === "dialogue" ? 1 : 0, isChar(p), isChar(q), paraLen];
}

export function lineKind(ctx, i, who, stack = null) {
  const u = ctx.units[i];
  if (u.kind !== "action") return null;
  if (who && who.length) return "character";
  const t = u.text.trim();
  // High-precision patterns first; the learned word table decides the rest (setting vs event vs extra).
  if (CAMERA.test(t) || (/^[A-Z0-9 .,:'’!?-]+$/.test(t) && /[A-Z]{3,}/.test(t) && words(t) <= 6)) return "camera";
  if (ABSTRACT.test(t)) return "abstract";
  const p = scoreTable(KIND_TABLE, kindSignals(ctx, i));
  if (stack) {
    // table probabilities in fixed KINDS order + context -> trees (models.kind)
    const order = stack.meta.table_order;
    const x = [...order.map((k) => p[KIND_TABLE.classes.indexOf(k)] ?? 0), ...kindContext(ctx, i)];
    const q = stack.predict(stack.model, x);
    let b = 0;
    for (let k = 1; k < q.length; k++) if (q[k] > q[b]) b = k;
    return stack.meta.classes[b];
  }
  let best = 0;
  for (let k = 1; k < p.length; k++) if (p[k] > p[best]) best = k;
  return KIND_TABLE.classes[best];
}
