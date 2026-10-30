// Rule-based analyzers. Each rule exposes numeric signals (features) and keeps its old verdict path.
// Feature order is defined by the *_FEATURES arrays; models and Python export depend on it.
import EMO_TABLE from "./emotable.js";
import KIND_TABLE from "./kindtable.js";
import BEAT_CUE from "./beatcue.js";
import { VERBS3, VERBS, NOUNS } from "./verbs.js";
import { scoreTable, scoreTokens, tokenize } from "./wordtable.js";
import { buildCast, presence, speakerId, pronounClass, sameChar } from "./cast.js";
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
  // window aggregates are memoised per (window, kind): each window is "after" for one unit and "before" for another
  ctx._win ??= new Map();
  const memo = (key, idx, fn) => { const kk = key + (idx.length ? idx[0] + ":" + idx[idx.length - 1] : "-"); if (!ctx._win.has(kk)) ctx._win.set(kk, fn(idx)); return ctx._win.get(kk); };
  const union = (idx, f) => memo(f === contentWords ? "w" : "c", idx, (ix) => { const s = new Set(); for (const j of ix) for (const x of f(ctx, j)) s.add(x); return s; });
  const mean = (idx) => memo("e", idx, (ix) => { const m = new Array(8).fill(0); for (const j of ix) unitEmoTable(ctx, j).forEach((v, c) => { m[c] += v / ix.length; }); return m; });
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
  let p = ctx.cast.pronouns[i][0];
  if (!p) return null;
  if (!OFF.has("clausepron") && !/^(he|she|they)$/.test(p.w)) {
    // "When it burns down to his fingers, he lets it fall." -> "he", the subject after the opening clause
    const sp = ctx.cast.pronouns[i].find((q) => /^(he|she|they)$/.test(q.w) && /^(?:When|As|While|After|Before|If|Once|Until|Because|Though|Although|Even as|Just as|The moment|By the time|Every time|Each time)\b[^.;:!?]{0,80},\s*$/.test(ctx.units[i].text.slice(0, q.at)));
    if (sp && !ctx.cast.mentions[i].some((m) => m.at < sp.at && !m.poss)) return sp.g;
  }
  const before = ctx.units[i].text.slice(0, p.at);
  if (/^(?:we see|we hear|we watch|we follow|we find|close on|closer on|angle on|on camera:?)\s+(?:that\s+)?$/i.test(before) && /^(he|she|they)$/.test(p.w)) return p.g;
  // "For the first time, she smiles." / "One by one, they listen." / "Perhaps she does."
  if (p.at <= 1 || LEAD.test(before) || (/^[^.;:!?"“]{0,60},\s*$/.test(before) && !ctx.cast.mentions[i].some((m) => m.at < p.at && !m.poss)) ||
      (!OFF.has("opener") && /^(he|she|they)$/.test(p.w) && /^(?:for|after|in|at|by|with|without|through|over|under|behind|beyond|beside|across|on|from|then|now|and|but)\s+(?:[a-z'-]+\s+){0,4}$/i.test(before) &&
        !/\b(him|her|them|his|their|hers)\b/i.test(before) && !ctx.cast.mentions[i].some((m) => m.at < p.at)) ||
      (!OFF.has("opener2") && /^(his|her)$/.test(p.w) && /^(?:for the first time|for a moment|for a second|for once|at last|again|then|now|suddenly|slowly|finally|somewhere|inside|outside|behind the [a-z]+|in the [a-z]+|under it|under the [a-z]+)\s+$/i.test(before) &&
        BODY.test(ctx.units[i].text.slice(p.at + p.w.length).trimStart().replace(ADJ_PRE, "")) && !ctx.cast.mentions[i].some((m) => m.at < p.at)) ||
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
const LOOKS = /\b(eyes|face|hair|beard|skin|smile|voice|build|frame|hands|features|jaw|brow|gaze|robe|suit|coat|dress|uniform|habit|boots|scar|tattoo|glasses|mid-age|middle-aged|\d0s|years old|tall|short|thin|stocky|gaunt|handsome|beautiful|pretty|weathered|mouth|lips|chin|cheeks|nose|neck|throat|shoulders|arms|legs|knees|feet|chest|teeth|tongue|eyebrows|forehead|mid-twenties|mid-thirties|mid-forties|mid-fifties|mid-sixties|twenties|thirties|forties|fifties|sixties|seventies|eighties|teens|teenage|elderly|ancient|wiry|lean|heavy|heavyset|broad|slight|bald|balding|grey-haired|gray-haired|freckled|tanned|sunburnt|scarred|bearded|clean-shaven|unshaven|dishevelled|disheveled|immaculate|rumpled|soaked|drenched|barefoot|shirtless|hatless|hooded)\b/i;
function verbless(t) { return !AUX.test(t) && LOOKS.test(t) && !/^(the|a|an|it|its)\b/i.test(t) && !(!OFF.has("vbless") && t.split(/\s+/).some((w) => VERBS3.has(w.replace(/\W+$/, "").toLowerCase()))) ? 1 : 0; }

// Sentence with no grammatical subject at the start: "Opens a folder." "Flips." "Slowly." "Warm face."
const DET = /^(a|an|the|this|that|these|those|his|her|their|its|my|our|your|some|no|every|each|one|two|three|on|in|at|from|behind|outside|inside|across|through|under|over|near|beside|somewhere|nobody|someone|everyone|it|there|then|now|later|silence|nothing)\b/i;
// One-word manner / state fragments that continue a character's action ("She looks. Quick." / "Almost." / "Twice.").
const MANNER = new Set(("quick quicker slow slower fast faster hard harder soft softer gentle careful almost again twice once thrice barely " +
  "closer nearer lower louder quieter quiet still steady sharp sharper tight tighter deep deeper long longer short shorter wide " +
  "wider high higher low flat calm cold colder warm warmer pale white red tense rigid frozen motionless breathless silent stiff " +
  "numb blank alert awake asleep upright prone limp loose taut late early first last alone together not never always worse better").split(" "));
// Words that cannot be the verb after a plural-looking first word ("Eases onto", "Forks clink" vs "Pulls a sandwich").
const NOT_VERB = /^(?:to|the|a|an|his|her|their|its|my|our|your|at|up|down|back|away|out|in|on|off|over|into|onto|from|with|without|it|him|them|me|us|toward|towards|across|through|against|beneath|beside|below|above|under|along|around|past|between|behind|before|after|inside|outside|like|as|then|there|here|hard|slowly|quickly|carefully|gently|again|once|twice|aside|forward|closer|together|apart|still|just|only|even|not|never|very|too|so|for|of|by|about|this|that|these|those|one|another|something|nothing|everything|each|every|all|both|half|some|any|no|more|most|less|open|shut|closed|wide|loose|tight|free|flat|high|low|left|right|ahead|straight|beyond|first|last|next|long|short|deep|close|near|far|loud|quiet|silent|empty|full|dead|alive|awake|asleep|alone|blank|white|black|red|dark|light)$/;
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
  // "He grins. / Small." / "Osei lifts the duffel. / Slowly.": a one-word manner line continues the previous actor's
  // action even in its own paragraph
  const oneWord = !OFF.has("adjpara") && /^[A-Z][a-z-]+[.!…]*$/.test(t) && !SOUND.test(t) && !SETTING_NOUN.test(t);
  const cont = !!(pa && pa.ids.length && pa.dist === 1 && (prev.para === u.para || oneWord || /\b(looks?|points?|glances?|stares?|nods?|gestures?|turns?|watches|studies)\b/i.test(prev.text)));
  if (/^(something|nothing|everything|someone|somebody|anything|anyone|silence|static|darkness|quiet|only|just|more|another|no)\b/i.test(t)) return 0;
  if (!OFF.has("capsfrag") && t === t.toUpperCase() && /[A-Z]{3}/.test(t) && !(words(t) === 1 && VERBS3.has(t.replace(/\W+$/, "").toLowerCase()))) return 0; // "BACK TO SCENE." / "BEEP." (but "LAUGHS.")
  if (!OFF.has("pluralnoun") && words(t) === 1 && /^[A-Z][a-z]+(?:s|es)[.!…]*$/.test(t) && !VERBS3.has(t.replace(/\W+$/, "").toLowerCase()) && (NOUNS.has(t.replace(/\W+$/, "").toLowerCase().replace(/es$/, "")) || NOUNS.has(t.replace(/\W+$/, "").toLowerCase().replace(/s$/, "")))) return 0; // "Bandages." / "Syringes."
  if (!OFF.has("wefrag") && /^(?:we|i|you)\b/i.test(t)) return 0;
  if (!OFF.has("numfrag") && /^(?:one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|twenty|thirty|forty|fifty|sixty|hundred|\d+)(?:\s+(?:feet|foot|meters?|metres?|yards?|miles?|seconds?|minutes?|hours?|days?|years?|more|left|down|to go|percent|degrees))?[.!…]*$/i.test(t)) return 0;
  // "Big Dave sits. / Slowly, like a man lowering something heavy." -> how he sits
  if (!OFF.has("mannerc") && pa && pa.ids.length && pa.dist === 1 && /^(?:[A-Z][a-z]+ly|Slow|Quick|Hard|Soft|Gentle|Fast|Careful|Quiet|Calm),\s/.test(t)) return 1;
  // "He looks at the tank. / At her. / At the dark ceiling." -> a chain of looks keeps the looker, whatever is looked at
  if (!OFF.has("lookchain") && pa && pa.ids.length && pa.dist === 1 && prev && prev.kind === "action" && /^(?:Then\s+)?(?:At|To|Toward|Towards|Back to|Up at|Down at)\b/.test(prev.text) &&
      /^(?:then\s+)?(?:at|to|toward|towards|up at|down at|back to|then at)\b/i.test(t) && words(t) <= 14) return 1;
  if (verbless(t) && !PLURAL_SUBJ.test(t) && words(t) <= 12) return 1; // descriptive fragment
  // Right after a character's introduction, a short verbless fragment keeps describing them ("SAL, 60, skipper, stands
  // at the wheel. Weather in every wrinkle." / "A city coat, no oilskin.")
  const introChain = (c) => { // the character's introduction, with only their own fragments in between
    const ch = ctx.cast.chars[c]; if (!ch) return false;
    for (let j = i - 1; j >= Math.max(0, i - 4); j--) {
      if (ch.intro === j || ch.fwd === j) return true;
      if (ctx.units[j].kind !== "action" || ctx.units[j].para !== u.para) return false;
      if (!OFF.has("chain") && ctx._why?.get(j) !== "fragmentPrev") return false;
    }
    return false;
  };
  if (cont && pa.ids.length === 1 && introChain(pa.ids[0]) && !PLURAL_SUBJ.test(t) && !SOUND.test(t) &&
      !(ON.has("chainverb") && t.split(/\s+/).slice(1).some((w) => { const x = w.replace(/\W+$/, "").toLowerCase(); return VERBS3.has(x) || VERBS.has(x); })) &&
      words(t) <= 8 && !/\b(is|are|was|were|has|have|had|does|did|do|can|could|will|would|shall|should|may|might|must)\b/i.test(t) &&
      !t.split(/\s+/).slice(1).some((x) => /^[a-z]+s[.,]?$/.test(x) && !BODY.test(x) && !/^(clothes|jeans|pants|sleeves|nails|braids|curls|freckles|wrinkles|keys|coins|papers|notes|tears|years|hours|minutes|seconds|words|things|times)$/.test(x.replace(/[.,]$/, ""))) && !/\b[A-Z]{3,}\b/.test(t)) return 1;
  if (cont && words(t) <= 6) {
    const lookPrev = /\b(looks?|points?|glances?|stares?|nods?|gestures?|turns?|watches|studies|eyes|scans|peers?)\b/i.test(prev.text);
    if (!ms.length && /^(?:then,?\s+)?(?:at|to|toward|towards|into|back|over|down|up|across|away|closer|forward|aside|out|in|through|past|behind|under|around|along)\b/i.test(t) && !AUX.test(t) &&
        (!SETTING_NOUN.test(t) || (!OFF.has("looksky") && lookPrev)) && !(!OFF.has("dirverb") && t.split(/\s+/).slice(1).some((w) => VERBS3.has(w.replace(/\W+$/, "").toLowerCase())))) return 1;   // "At the butler." / "Back down." / "At the sky." (but not "Behind her, the furnace roars.")
    if (/^(?:then,?\s+)?(?:doesn'?t|don'?t|can'?t|won'?t|isn'?t|hasn'?t|didn'?t|never|barely|almost|not|does not|do not|did not|cannot|will not|has not|is not|could not|would not|couldn'?t|wouldn'?t|haven'?t|still)\b/i.test(t)) return 1;          // "Doesn't say anything." / "Doesnt reply."
    if (/^then\b/i.test(t) && !/^then\s+(the|a|an|it|there|silence|nothing)\b/i.test(t)) return 1;                                  // "Then stops." / "Then another."
    // short description of the character just shown: "Violent." "Red-rimmed." "Grey hood." "Phone in hand."
    const w = t.replace(/[.!?…]+$/, "").replace(/^(?:Not|Still|Very|Too|So|Almost|Suddenly|Quite|Rather)\s+/i, "").replace(/\s+(?:either|too|now|again|anymore)$/i, "").split(/[\s,;]+/).filter(Boolean);
    const adj = w.length <= 2 && w.every((x) => /^(?:[A-Z]?[a-z]+-)?[A-Za-z]+(?:ed|en|ful|less|ous|ive|y|al|ic|ish|er|ly|ing|ant|ent|ble)$/.test(x) || MANNER.has(x.toLowerCase())) && !SETTING_NOUN.test(t);
    // "Steam curls around her shoulders." has its own subject and verb: not a description of her
    const ownSubj = w.length >= 3 && !isVerb(w[0]) && (VERBS3.has(w[1].toLowerCase()) || VERBS.has(w[1].toLowerCase()));
    const looks = w.length <= 5 && !ownSubj && (OFF.has("looksaux") || !/\b(?:is|are|was|were)\b/i.test(t)) && (LOOKS.test(t) || /\bin (hand|his hand|her hand|hands)\b/i.test(t)) && !SETTING_NOUN.test(t.replace(LOOKS, ""));
    const objLine = (OFF.has("objline") ? /\b(looks? (?:at|down at|up at|into|over|through|inside)|opens?|checks?|examines?|reads?|studies|inspects?|pulls? (?:it )?out|lifts? (?:it|the|a)|turns? (?:it )?over|holds? (?:it )?up|unfolds?|flips?|peers? (?:at|into)|glances? (?:at|down at)|unwraps?|unrolls?|tastes?|sniffs?|picks? up|tests?|tries|plays? it)\b/i
      : /\b(looks (?:at|down at|up at|into|over|through|inside)|opens|checks|examines|reads|studies|inspects|pulls (?:it )?out|lifts (?:it|the|a)|turns (?:it )?over|holds (?:it )?up|unfolds|flips|peers (?:at|into)|glances (?:at|down at)|unwraps|unrolls|tastes|sniffs|picks up|tests|tries|plays it|thumbs|taps|presses|swipes|scrolls|dials|clicks)\b/i).test(prev.text);
    const bodyObj = /\b(?:his|her|their)\s+(?:eyes?|mouth|hands?|arms?|fists?|jaw|lips|palms?|fingers?)\b/i.test(prev.text); // "She opens her eyes. / Calm." is her
    const manner = /ly\W*$/i.test(w[0] || "") || MANNER.has((w[0] || "").toLowerCase()); // "Slowly." / "Hard." is how, never what
    if (!OFF.has("objadj") && adj && objLine && !looks && !bodyObj && !manner) return 0; // "He opens it. Empty." describes the thing, not him
    if ((adj || looks) && !/\b[A-Z]{3,}\b/.test(t)) return 1;
  }
  if (DET.test(t)) return 0;
  {
    const ws0 = t.replace(/^(then|and|but|now|still|again|just|finally|slowly|quickly|suddenly),?\s+/i, "").split(/\s+/);
    // "Chairs topple." / "Feathers scatter." = plural noun + verb, never a fragment of the character's action
    // ("Adds salt." / "Pours tea." are verb + object: the first word is a known verb, not a noun)
    if (/^[A-Z][a-z]+s$/.test(ws0[0] || "") && ws0[1] && /^[a-z]+[.!]?$/.test(ws0[1]) && !/s[.!]?$/.test(ws0[1]) && !NOT_VERB.test(ws0[1].replace(/[.!]$/, "")) &&
        !isVerb(ws0[0]) && !/ly[.!]?$/.test(ws0[1])) return 0;
    if (isNoun(ws0[0]) && !(ws0[1] && VERB_COMPLEMENT.test(ws0[1]))) return 0; // "Photographs." / "String lights sway." (but "Heads for the door.")
    if (!OFF.has("pumps") && /^[A-Z][a-z]+s$/.test(ws0[0] || "") && ws0[1] && VERBS.has(ws0[1].replace(/[.!,]$/, "").toLowerCase())) return 0; // "Pumps hum below."
  }
  // "exasperated." / "Rising." / "Smiles." after a speech; not "Rain." / "BEEP." / "Her phone."
  if (words(t) <= 3 && prev && prev.kind === "dialogue" && /^(?:[a-z]|[A-Z][a-z]+(?:s|ed|ing|ly)\b)/.test(t) && !/^[A-Z]+\W*$/.test(t)) return 1;
  if (/^(something|nothing|everything|someone|somebody|anything|anyone)\b/i.test(t)) return 0;
  const ws = t.replace(/^(then|and|but|now|still|again|just|finally|slowly|quickly|suddenly),?\s+/i, "").split(/\s+/);
  const w0 = ws[0] || "";
  // "Forks clink." / "Pens scratch." / "Headlights sweep across ..." = plural noun + base-form verb (a subject), unlike
  // "Counts coins." (verb + plural object).
  if (/^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[a-z]+$/.test(ws[1]) && !/s$/.test(ws[1]) && !NOT_VERB.test(ws[1]) && !isVerb(w0) && !/ly$/.test(ws[1])) return 0;
  if (!cont && /^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[A-Z]{2,}/.test(ws[1])) return 0; // "Something RATTLES" (but "Hits PLAY." continues)
  if (!cont && /^[A-Z][a-z]+s$/.test(w0) && ws[1] && /^[a-z]+$/.test(ws[1]) && !NOT_VERB.test(ws[1]) && !isVerb(w0)) return 0;
  if (isNoun(w0) && !(ws[1] && VERB_COMPLEMENT.test(ws[1]))) return 0;
  // Verb-first fragment ("Opens a folder.", "Chews.", "Closes his eyes."); a bare noun or adverb has no actor.
  return isVerb(w0) || (/^[A-Z]?[a-z]+(?<!s)(s|es|ed|ing)\b/.test(w0) && !/(ness|ss|us|is|ics)$/i.test(w0.replace(/\W+$/, ""))) ? 1 : 0;
}
// Corpus lexicon (verbs.js): a word that is a verb far more often than a noun, and the reverse.
const isVerb = (w) => !OFF.has("lex") && VERBS3.has((w || "").replace(/\W+$/, "").toLowerCase());
const VERB_COMPLEMENT = /^(?:it|them|him|her|the|a|an|his|their|for|to|into|at|up|down|out|off|back|away|over|again|toward|towards|through|on|in|around|past|under|onto|one|two|some|nothing|something|everything|anything)\b/i;
const isNoun = (w) => { const x = (w || "").replace(/\W+$/, "").toLowerCase(); return !OFF.has("lex") && NOUNS.has(x) && !VERBS3.has(x); };
const SOUND = /^(?:click|clack|beep|buzz|bang|thud|thump|crash|crack|snap|splash|spray|static|silence|hum|ring|knock|rattle|clatter|hiss|whir|creak|footsteps|rain|wind|thunder|beat|nothing|darkness|black|blackout|boom|pop|ping|ding|tick|tock|drip|scrape|screech|roar|rumble|whoosh|whine)(?:s|ing|ping|ging|king)?\b/i;

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
  if (a < 0) return 99;
  if (OFF.has("tiepos")) return i - a;
  const ms = ctx.cast.mentions[a], k = ms.findIndex((m) => m.c === c);
  return i - a - (k > 0 ? k / 100 : 0);
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
const ADJ_PRE = /^(?:(?:[a-z]+(?:ed|en|y|ful|less|ous|ive|al|ic|ish|ing)|own|left|right|good|bad|big|small|tiny|long|short|thin|thick|wide|narrow|whole|entire|half|bare|dark|pale|wet|dry|cold|warm|hot|red|white|black|grey|gray|blue|green|brown|blonde?|silver|gold|old|new|free|other|first|second|last)\s+){0,2}/i;
const BODY = /^(eyes?|face|hands?|fingers?|fingertips|knuckles|fists?|voice|breath|breathing|jaw|lips?|mouth|head|shoulders?|heart|knees?|legs?|feet|foot|arms?|gaze|smile|grin|hair|brow|forehead|chest|stomach|throat|body|back|expression|look|grip|pulse|tears|cheeks?|nose|neck|skin|teeth|tongue|wrists?|palms?|thumbs?|whole|own|eyelids|lashes|nostrils|posture|frame|silhouette|footsteps|steps|hand-|attention|boots?|shoes?|sneakers?|heels?|socks?|shirt|blouse|coat|jacket|parka|hoodie|sweater|cardigan|dress|skirt|jeans|trousers|pants|suit|tie|scarf|gloves?|hat|cap|helmet|badge|glasses|sunglasses|watch|ring|necklace|earrings?|uniform|apron|scrubs|robe|cloak|cape|collar|sleeves?|cuffs?|lapels?|pockets?|belt|holster|backpack|purse|shadow|reflection|silhouette|outline|sweat|blood|bruise|wound|laugh|laughter|cough|sigh|gasp|stare|glare|frown|grimace|smirk|nod|shrug|wave|stride|gait|posture|stance|eyebrows?|eyelids|lashes|nostrils|lips?|mouth|chin|cheeks?|nose|neck|throat|chest|shoulders?|arms?|elbows?|wrists?|palms?|thumbs?|knuckles|knees?|legs?|ankles?|feet|foot|toes?|heel|hips?|waist|spine|back|skin|hair|beard|moustache|mustache|brow|forehead|temples?|jaw|teeth|tongue|voice|braids?|bun|ponytail|curls|fringe|bangs|freckles|wrinkles|complexion|figure|pen|pencil|blade|knife|sword|dagger|brush|spoon|fork|cup|glass|mug|bottle|flask|cigarette|lighter|gun|pistol|rifle|bow|staff|cane|umbrella|racket|bat|stick|club|paddle|oar|rope|reins|whip|torch|flashlight|lantern|candle|needle|thread|scissors|hammer|wrench|shovel|axe|pick|chisel|chalk|marker|crayon|clipboard|notebook|ledger|book|map|newspaper|paper|letter|envelope|card|cards|dice|chips|cigar|pipe|drink|coffee|tea|beer|wine|whisky|whiskey|sandwich|apple|bread|cane)\b/i;
// "MARISOL's husband, DESMOND, ..." -> DESMOND; "Maya's hands shake" -> Maya; "Maya's phone buzzes" -> nobody.
function leadPossessive(ctx, i) {
  const ms = ctx.cast.mentions[i], t = ctx.units[i].text;
  if (!ms[0].poss) return null;
  const nxt = ms.find((m) => m.at > ms[0].at && m.c !== ms[0].c);
  if (nxt && /^[\w\s.-]{0,30},\s*$/.test(t.slice(ms[0].at, nxt.at).replace(/^\S+['’]s\s+/, ""))) return [nxt.c];
  const after = t.slice(ms[0].at).replace(/^\S+(?:\s+\S+){0,3}?['’]s\s+/, "").replace(ADJ_PRE, "");
  if (!OFF.has("possshot") && (/^voice\s+(?:is cut off|cuts out|crackles|comes (?:through|over|from)|is (?:tinny|distant|muffled|gone)|drops out|breaks up)\b/i.test(after) ||
      (/^(?:close on|insert|angle on|on)\s/i.test(t.slice(0, ms[0].at)) && !/^(?:hands?|face|eyes?|fingers?|arms?|badge|ring|watch|wrists?|neck|shoulders?|back|feet|foot|boots?|shoes?|jacket|coat|collar|sleeves?|lap|knees?|chest|head|hair|lips|mouth|jaw|brow|scar|tattoo|knuckles|palms?|thumbs?)\b/i.test(after)))) return []; // a voice on the line / a shot of a thing (but "CLOSE ON Reeves's badge" is Reeves)
  // "Maya's hands shake" -> Maya; "Maya's phone rings" -> an event, nobody acts (unless she then does: "Maya's phone rings and she grabs it")
  if (OFF.has("poss") || BODY.test(after) || /\b(she|he|they)\b/i.test(after)) return [ms[0].c];
  // "Abiola's pen scratches." / "Zuzu's bucket tips." / "Artemus's camera flashes." -> what the owner is doing with it;
  // only a device going off by itself ("Desmond's phone rings.", "Dr. Nakamura's voice is cut off") is nobody's action
  if (!OFF.has("pobj2") && !DEVICE_EVENT.test(after)) return [ms[0].c];
  return [];
}
const DEVICE_EVENT = /^(?:phone|cell|mobile|radio|pager|watch|alarm|timer|screen|laptop|tablet|computer|monitor|tv|television|speaker|intercom|earpiece|headset|walkie|voice|name|face|reflection|image|picture|photo|door|car|truck|engine|chair|bed|window|house|room|office|shadow|footsteps|boots|heels|stomach|belly|line|number|message|text|email|cup|glass|plate|coffee|tea|drink|beer|food|dinner|lunch|dryer|washer|machine|printer|kettle|oven|toaster|blender|clipboard|bag|backpack|purse|suitcase|cubicle|desk|nameplate|badge|lamp|light|candle|cigarette|breath|hair|coat|dress|skirt|scarf|cape|cloak|shirt|sleeves?)\b(?![^.]*\b(?:slips?|falls?|drops?|flies|spills?|tips?|tumbles?)\b)/i;
// "Her phone buzzes." / "His chair scrapes." -> nobody; "Her jaw works." / "His face drains." -> the owner (handled by the
// pronoun path); returns [] only for the object case.
function pronounObject(ctx, i) {
  const t = ctx.units[i].text;
  const m = t.match(/^(?:(?:yet|but|and|then|now|still|so|suddenly|slowly|finally),?\s+)?(his|her|their)\s+(.*)$/i);
  if (!m) return null;
  if (BODY.test(m[2].replace(ADJ_PRE, ""))) return null;
  if (/\b(she|he|they)\b/i.test(t.slice(m[0].length))) return null; // "Her phone buzzes and she grabs it"
  // "Their father's oldest friend." right after someone's introduction describes them
  if (ON.has("pobjfrag") && words(t) <= 8 && !t.split(/\s+/).some((w) => VERBS3.has(w.toLowerCase()) || /^(?:is|are|was|has|have)$/.test(w))) {
    const pa = prevActorOf(ctx, i);
    if (pa.ids.length === 1 && pa.dist === 1 && ctx.units[i - 1]?.kind === "action") return pa.ids;
    return null;
  }
  if (!OFF.has("pobj3")) {
    // "Her nameplate." / "Her empty cubicle." / "Her own voice, tinny." -> a shot of a thing, nobody acts
    if (words(t) <= 8 && !t.split(/\s+/).some((w) => VERBS3.has(w.replace(/\W+$/, "").toLowerCase()) || /^(?:is|are|was|were|has|have)$/.test(w))) return [];
    // "Her son's Xbox sits on the table." / "Her husband's boss's wife has not arrived." -> about someone else's thing
    if (/^[a-z-]+['’]s\b/i.test(m[2])) return [];
  }
  // "Her pen stops mid-word." / "His strop stops." / "Her light has found a shelf." are the owner's doing; only a device
  // going off by itself ("Her phone buzzes.") is nobody's action (the pronoun path then resolves the owner)
  if (!OFF.has("pobj2") && !DEVICE_EVENT.test(m[2].replace(ADJ_PRE, ""))) return null;
  return [];
}
// "Her partner, DET. REYNALD KOWALSKI, 50s, eats ..." -> the appositive name.
function pronounAppositive(ctx, i) {
  const ms = ctx.cast.mentions[i], t = ctx.units[i].text;
  const m = t.match(/^(?:his|her|their)\s+[\w-]+(?:\s+[\w-]+)?,\s*/i);
  // the name may start with a token the cast does not know ("Their jammer, MARISOL "BRUISE" CASTILLO")
  if (m && ms.length && (ms[0].at === m[0].length || (ms[0].at > m[0].length && /^[A-Z"“”'’.\s-]*$/.test(t.slice(m[0].length, ms[0].at))))) return [ms[0].c];
  // "Her brother-in-law CLETUS, 50s, leans ..." / "His wife ILSE, forties, navigates ..."
  const r = t.match(/^(?:[Hh]is|[Hh]er|[Tt]heir)\s+(?:[a-z'-]+,?\s+){1,3}(?=[A-Z][A-Z'’-]+\b)/);
  if (r && ms.length && ms[0].at === r[0].length) return [ms[0].c];
  // "At the end of the table, her sister CAMILA ROMANO, 30s, ..." / "Beside him, her coach HALE, 50s, ..."
  const r2 = t.match(/^[^,.;:]{0,50},\s+(?:his|her|their)\s+(?:[a-z'-]+,?\s+){1,3}(?=[A-Z][A-Z'’-]+\b)/);
  if (r2 && ms.some((m) => m.at === r2[0].length)) return [ms.find((m) => m.at === r2[0].length).c];
  return null;
}
// A pronoun before anyone is on stage ("She mounts the mule." as the scene's first line): the next character of that gender.
function laterOfGender(ctx, i, g) {
  let first = -1;
  for (let j = i + 1; j < Math.min(ctx.units.length, i + 8); j++) {
    for (const m of ctx.cast.mentions[j]) { if (ctx.cast.chars[m.c].gender === g) return m.c; if (first < 0 && !ctx.cast.chars[m.c].group) first = m.c; }
    const sp = ctx.speaker[j];
    if (sp >= 0 && ctx.cast.chars[sp].gender === g) return sp;
    if (sp >= 0 && first < 0) first = sp;
  }
  // nobody of that gender ahead: the next character to appear, if their gender is simply unknown
  return !OFF.has("ahead") && first >= 0 && ctx.cast.chars[first].gender === "?" ? first : -1;
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
    const inAction = ctx.units.some((u) => u.kind === "action" && ctx.cast.mentions[u.i].some((m) => m.c === c && (OFF.has("offalias") || !m.alias) && (OFF.has("offlead") || m.lead)));
    ctx._off.set(c, /^(RADIO|DISPATCH|INTERCOM|PA|ANNOUNCER|NARRATOR|VOICE|PHONE|TV|SPEAKER)\b/.test(ctx.cast.chars[c].name) ||
      (!inAction && cues.length > 0 && cues.every((u) => (u.ext || []).some((e) => /^(V\.?O|O\.?S|O\.?C|PHONE|RADIO|FILTERED|ON PHONE|INTERCOM)/i.test(e)))));
  }
  return ctx._off.get(c);
}
// Everyone / they minus the people the line is about ("Everyone ignores him", "They follow Dr. Fontaine").
function excludeMentioned(ctx, i, ids) {
  const t = ctx.units[i].text;
  const named = new Set(ctx.cast.mentions[i].map((m) => m.c));
  const objG = /\bhim\b/i.test(t) ? "m" : /\b(?:at|to|for|with|toward|towards|past|behind|around|after|from|beside|above|over|under|ignores?|watch(?:es)?|follows?|stares? at|looks? at)\s+her\b/i.test(t) ? "f" : null;
  let objRef = -1;
  if (objG) { // the most recent character of that gender who spoke or acted just before
    for (let j = i - 1; j >= 0 && objRef < 0 && j > i - 4; j--) {
      const u = ctx.units[j];
      const cs = u.kind === "dialogue" ? [ctx.speaker[j]] : (OFF.has("disc2") && !ctx._why?.has(j)) ? ctx.cast.mentions[j].map((m) => m.c) : ruleActors(ctx, j);
      const hit = cs.find((c) => c >= 0 && ctx.cast.chars[c].gender === objG);
      if (hit !== undefined) objRef = hit;
    }
  }
  const out = ids.filter((c) => !named.has(c) && c !== objRef);
  return out.length ? out : ids;
}
function everyone(ctx, i, window = 99) {
  return [...new Set(ctx.pres[i])].filter((c) => candRecency(ctx, i, c) <= window && !offscreen(ctx, c) &&
    (!ctx.cast.chars[c].group || (ON.has("pairgroup") && !ctx.cast.chars[c].pseudo && /\b(?:TWINS|BROTHERS|SISTERS|PARENTS|COUPLE|BOYS|GIRLS|KIDS|CHILDREN|TEENAGERS)\b/.test(ctx.cast.chars[c].name))));
}
const FRAG_SPEAKER_LOOSE = false;
const NUMBER = { two: 2, both: 2, three: 3, four: 4, five: 5, six: 6 };
// An order given to the room ("Counsel, approach." / "Sit with me. Both of you." / "Everybody quiet."): the speaker is
// not among the "they" who obey it.
const ORDER = /^(?:[A-Z][a-z]+[,.!]\s*)?(?:approach|sit|stand|come|go|get|move|stop|wait|listen|look|give|put|drop|shut|hold|tell|take|leave|open|help|follow|run|hurry|out|quiet|down|up|back|everybody|everyone|all of you|both of you|nobody move|don't)\b/i;
// "Gus squints. Smiles. / The first real smile of the night." / "He shakes his head. / A small, defeated laugh." -> a gesture
// named after the gesture (adjectives only before the noun: "The lilies shiver" / "The pipes shudder" are things)
const GESTURE_NP = /^(?:A|An|The|Another|Then a|Then the|One)\s+(?:[a-z-]+(?<![sy]),?\s+){0,4}(?:look|laugh|smile|breath|sigh|nod|shrug|grin|wince|flinch|shudder|gasp|glance|frown|smirk|chuckle|exhale|swallow|shiver|snort|giggle|sob|grimace|blink|stare|glare|joke|kindness|half-smile|half-laugh|shake of the head|tilt of the head|hesitation|pause)\b(?:\s+(?:of|at|toward|towards|in|back|away|to|from|on|that|he|she|like|for|through|before|then|and)\b[^.]{0,50})?[.!…]*$/;
// "A small smile crosses his face." / "Blood runs down his cheek." / "The envelope trembles in her fingers." -> the owner
const BODY_OWNER = /^(?:A|An|The|Something|Nothing|Some|Another|Everything)\b[^.;]*?\b(?:smile|grin|frown|smirk|blood|sweat|tears?|tension|colou?r|flicker|flush|shadow|tremor|muscle|vein|fear|anger|panic|relief|recognition|doubt|pain|exhaustion|calm|life|warmth|envelope|paper|pen|knife|ribbon|scar|bruise|dust|mud|pistol|gun|rifle|weight|strain|years|lines|wrinkles|water|rain|pouch|bag|posture)\b[^.;]*?\b(his|her)\s+(?:[a-z-]+\s+)?(?:face|eyes|cheeks?|jaw|shoulders?|fingers?|hands?|voice|features|expression|mouth|lips|brow|neck|throat|knees?|lap|shins?|beard|shoes?|boots?|belt|posture|chest|temple|forehead|skin|arms?|back|legs?|feet|wrists?)\b/i;

// Run-on sentences: "Leon laughs, and Hannah steadies herself." / "Robin leans in, Barry covers his eyes" -> every
// character starting a clause (names only; needs at least two different ones).
function clauseSubjects(ctx, i) {
  const t = ctx.units[i].text, ms = ctx.cast.mentions[i];
  if (ms.length < 2) return null;
  const ids = [];
  for (const m of ms) {
    if (m.poss) continue;
    const before = t.slice(0, m.at);
    if (m.at <= 1 || m.lead || /(?:[,;]\s*(?:and\s+|then\s+|while\s+|as\s+)?|\s(?:and|while|as|but)\s+|[.!?]\s+(?:then\s+|and\s+)?|\b(?:sees|notices|realizes|realises|watches|hears|finds|feels)\s+(?:that\s+)?)(?:(?:Mr|Mrs|Ms|Miss|Dr|Doctor|Sir|Lady|Lord|Judge|Coach|Nurse|Officer|Detective|Det|Sgt|Sergeant|Capt|Captain|Lt|Agent|Professor|Prof|Father|Sister|Brother|Uncle|Aunt|Old|Young|Little|Big)\.?\s+)?$/i.test(before) ||
        (!OFF.has("clause2") && /\b(?:and|while)\s+(?:at|in|on|by|near|behind|beside|across|next to|over)\s+[^,]{0,30}\s$/i.test(before))) {
      const raw = t.slice(m.at), ap = OFF.has("clause2") ? null : raw.match(/^[A-Za-z'’.-]+(?:\s+[A-Z][A-Za-z'’.-]+)*,\s*[^,]{0,40},\s*/);
      const after = ap ? raw.slice(ap[0].length) : raw.replace(/^\S+(?:\s+[A-Z]\S*)*\s*/, "");
      if (/^(?:[a-z]+(?:s|ed)\b|is\b|has\b|can't\b|doesn't\b|does\b|just\b|already\b|still\b|slowly\b|quickly\b|are\b|were\b|have\b|had\b|turns?,|hasn't\b|isn't\b)/.test(after) && !ids.includes(m.c)) ids.push(m.c);
    }
  }
  // "The Courier punches Irina, she slams him against the Volvo, Hayes scrambles under the bumper." -> Irina too
  if (!OFF.has("clause3") && ids.length) for (const pc of t.matchAll(/(?:[,;.!?]\s*|\b(?:and|while|as|then)\s+)(he|she)\s+[a-z]+(?:s|es)\b/gi)) {
    const g = pc[1].toLowerCase() === "he" ? "m" : "f";
    const named = [...new Set(ms.filter((m) => !m.poss && !ids.includes(m.c) && ctx.cast.chars[m.c].gender === g).map((m) => m.c))];
    if (named.length === 1) ids.push(named[0]);
  }
  return ids.length >= 2 ? ids : null;
}

// "MAYA and JONAH face each other." / "Maya, Jonah and Ruth run." -> all names in the leading subject.
function namePair(ctx, i) {
  const u = ctx.units[i], ms = ctx.cast.mentions[i];
  const t = u.text;
  let ids = [], end = 0;
  // "He and Colter regard each other." -> the pronoun's referent plus the name
  const pn = !OFF.has("pair2") && t.match(/^(He|She)\s+and\s+(?=[A-Z])/);
  if (pn && ms.length && ms[0].at === pn[0].length) {
    const g = pn[1] === "He" ? "m" : "f";
    const cands = actorCandidates(ctx, i).filter((c) => c >= 0 && c !== ms[0].c && ctx.cast.chars[c].gender === g)
      .sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
    if (cands.length) { ids = [cands[0], ms[0].c]; end = ms[0].at; }
  }
  if (!ids.length) {
    // "Beside the font, twin girls PIP and POLLY (10, identical) float paper boats." -> the pair, introduced after a noun
    const twin = !OFF.has("pair4") && ms.length >= 2 && !ms[0].lead && ctx.cast.chars[ms[0].c].intro === i &&
      /^(?:[^,.;]{0,40},\s*)?(?:[a-z-]+\s+){1,4}$/.test(t.slice(0, ms[0].at)) && !/\b(?:he|she|they|at|to|with|behind|beside|near|from|for|of|by|toward|towards|and|on|in)\s+$/i.test(t.slice(0, ms[0].at));
    if (!ms.length || ms[0].poss || (!ms[0].lead && !twin)) return null;
    ids = [ms[0].c]; end = ms[0].at;
  }
  const TITLE = "(?:Father|Mother|Brother|Sister|Dr|Doctor|Mr|Mrs|Ms|Miss|Sir|Lady|Lord|Uncle|Aunt|Coach|Officer|Detective|Det|Sergeant|Sgt|Captain|Capt|Judge|Nurse|Professor|Prof|Private|Pvt|Corporal|Cpl|Lieutenant|Lt|Reverend|Rev|Deacon|Old|Young|Little|Big|Cousin|Grandma|Grandpa)\\.?\\s+";
  const REL = OFF.has("pair2") ? "" : "(?:(?:his|her|their)\\s+(?:[a-z-]+" + (OFF.has("pair4") ? "" : ",?") + "\\s+){1,2})?"; // "and her client, PERCIVAL"
  const APPOS = OFF.has("pair4") ? ",\\s*[^,]{0,30},\\s*" : "(?:,\\s*[^,]{0,30}){1,3},\\s*";
  const PRE = OFF.has("pair5") ? "" : "(?:[A-Z][A-Z'’.-]*\\s+){0,3}[\"“]?";
  const LOC = OFF.has("pair6") ? "" : "(?:(?:next to|beside|behind|opposite|across from|in front of)\\s+(?:him|her|them),?\\s*)?";
  const gapRe = new RegExp("^\\s*(?:\\([^)]*\\)\\s*|" + APPOS + ")?(?:,|,?\\s*\\band\\b|&|,?\\s*\\bthen\\b)\\s*" + LOC + "(?:" + TITLE + ")?" + REL + "(?:" + TITLE + ")?" + PRE + "$", "i");
  for (const m of ms) {
    if (m.at <= end || ids.includes(m.c)) continue;
    const gap = t.slice(end, m.at).replace(/^[A-Za-z'’.-]+(?:\s+[A-Z][A-Za-z'’.-]+)*/, "");
    if (globalThis.process?.env?.GDEBUG) console.error("gap", JSON.stringify(gap), gapRe.test(gap));
    if (gapRe.test(gap)) { ids.push(m.c); end = m.at; } else break;
  }
  if (!OFF.has("pair2")) {
    // "Teo grabs Obadiah, who yelps." / "Rosemary exchanges a look with Holden." -> both act
    for (const m of ms) {
      if (ids.includes(m.c) || m.poss) continue;
      const after = t.slice(m.at).replace(/^[A-Za-z'’.-]+(?:\s+[A-Z][A-Za-z'’.-]+)*/, "").replace(OFF.has("pair4") ? /^$/ : /^\s*\([^)]*\)/, "");
      const before = t.slice(0, m.at);
      // "... enters with NELL, 9, in a sailor dress" / "while his granddaughter PIPPA (8) ..." -> companions introduced here
      const companion = !OFF.has("pair4") && (ctx.cast.chars[m.c].intro === i || ctx.cast.chars[m.c].first === i) && /\b(?:with|beside|alongside|next to|opposite|across from|facing|and|while)\s+(?:(?:his|her|their)\s+(?:[a-z-]+\s+){1,2})?$/i.test(before) &&
        (/^\s*\(/.test(t.slice(m.at).replace(/^[A-Za-z'’.-]+(?:\s+[A-Z][A-Za-z'’.-]+)*/, "")) || INTRO_APPOS.test(after.trimStart()));
      if (companion || /^,\s*who\s+[a-z]+/.test(after) || /\b(?:exchanges?|exchanging|shares?|sharing|trades?)\s+(?:a\s+)?(?:look|glance|glances|nod|smile|words?|whisper|high-five|handshake|kiss)\s+with\s+$/i.test(before) ||
          /\b(?:and|while|as|until|before|after|when)\s+$/i.test(before) && /^\s+[a-z]+(?:s|es|ed)\b/.test(after)) ids.push(m.c);
    }
  }
  return ids.length > 1 ? ids : null;
}

// Rule verdict: array of char ids (empty = NONE). ctx._why[i] records which rule decided (see WHY_RELIABLE).
// Ablation switches for rule development (Node only): WHO_OFF="poss,nobody,opener,itc,..." disables rule paths.
const OFF = new Set((globalThis.process?.env?.WHO_OFF || "").split(",").filter(Boolean));
const ON = new Set((globalThis.process?.env?.WHO_ON || "").split(",").filter(Boolean)); // experimental paths
export function ruleActors(ctx, i) {
  ctx._why ??= new Map();
  ctx._actors ??= new Map();
  if (ctx._actors.has(i)) return ctx._actors.get(i); // rules look back at earlier lines: memoised, or long scenes go exponential
  const ids = ruleActorsUncached(ctx, i);
  ctx._actors.set(i, ids);
  return ids;
}
function ruleActorsUncached(ctx, i) {
  const W = (why, ids) => { ctx._why.set(i, why); return ids; };
  const u = ctx.units[i];
  const ms = ctx.cast.mentions[i];
  if (!OFF.has("introall")) {
    const intro = [...new Set(ms.filter((m) => !m.poss && ctx.cast.chars[m.c].intro === i && !ctx.cast.chars[m.c].group).map((m) => m.c))];
    if (intro.length >= 2) {
      const lead = ms.find((m) => m.lead && !m.poss);
      return W("introAll", lead && !intro.includes(lead.c) ? [lead.c, ...intro] : intro);
    }
  }
  const np = namePair(ctx, i);
  const cs = clauseSubjects(ctx, i);
  if (np && cs && !OFF.has("npunion")) return W("namePair", [...new Set([...np, ...cs])]);
  if (np) return W("namePair", np);
  if (cs) return W("clauses", cs);
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  // "Hosea looks at Ezekiel. / At Perpetua, pale. / At Clementine." / "Ashby-Grey studies her. / Then Yusuf." -> the looker
  if (!OFF.has("dirname") && ms.length && words(u.text) <= 4 && /^(?:Then|At|To|Toward|Towards|Back to|Now)\s+(?:at\s+)?[A-Z]/.test(u.text) && i > 0 && ctx.units[i - 1].kind === "action") {
    const pa = ruleActors(ctx, i - 1);
    if (pa.length === 1 && !pa.includes(ms[0].c) && (/\b(looks?|points?|glances?|stares?|nods?|gestures?|turns?|watches|studies|eyes|scans|checks)\b/i.test(ctx.units[i - 1].text) ||
        ctx._why.get(i - 1) === "dirFragment" || /^(?:Then|At)\b/.test(ctx.units[i - 1].text))) return W("dirFragment", pa);
  }
  const tailM = !OFF.has("tail") && u.text.match(/(?:,|;|\band)\s+((?:everyone|everybody|nobody|no one|all (?:two|three|four|five|six)|they both|both of them|the (?:two|three|four|five) of them|the (?:two|three|four|five)(?= (?:tumble|freeze|turn|stop|run|scatter|duck|look|stare|fall|rise|stand|sit|laugh|go|move|wait|watch)s?\b))\b.*)$/i);
  const core = tailM && !ms.some((m) => m.lead) ? tailM[1][0].toUpperCase() + tailM[1].slice(1) : u.text;
  if (!OFF.has("leadpair") && ms.length && ms[0].lead && !ms[0].poss && /\b(?:both of them|and they|and the two of them|and together they)\b/i.test(u.text)) {
    const others = [...new Set(ms.filter((m) => m.c !== ms[0].c).map((m) => m.c))];
    if (!others.length) { const op = u.text.match(/\b(him|her)\b/i); if (op) { const s = cands.filter((c) => c !== ms[0].c && !offscreen(ctx, c) && ctx.cast.chars[c].gender === (op[1].toLowerCase() === "him" ? "m" : "f")).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b)); if (s.length) others.push(s[0]); } }
    if (others.length) return W("leadPair", [ms[0].c, ...others]);
  }
  if (!OFF.has("leadall") && tailM && ms.length && ms[0].lead && /^(?:the (?:two|three|four|five)(?: of them)?|everyone|everybody|they all|all (?:two|three|four|five))\b/i.test(tailM[1])) {
    const all = everyone(ctx, i);
    if (!all.includes(ms[0].c)) all.push(ms[0].c);
    if (all.length > 1) return W("leadAll", all);
  }
  // "His head vanishes first. / Then hers." -> the other one, of that gender
  const hf = !OFF.has("hersfrag") && u.text.match(/^(?:Then\s+|Now\s+|And\s+)?(hers|his)[.!…]*$/i);
  if (hf) {
    const pa = prevActorOf(ctx, i);
    const s = cands.filter((c) => !offscreen(ctx, c) && ctx.cast.chars[c].gender === (hf[1].toLowerCase() === "hers" ? "f" : "m") && !pa.ids.includes(c)).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
    if (s.length) return W("possFragment", [s[0]]);
  }
  // "He doesn't let go. / Neither does anyone else." -> everyone but him
  if (!OFF.has("neitheranyone") && /^Neither (?:does|do|is|has|can|will|did|would|could) (?:anyone|anybody)\b/i.test(u.text)) {
    const pa = prevActorOf(ctx, i);
    const all = everyone(ctx, i).filter((c) => !(pa.dist <= 2 && pa.ids.includes(c)));
    if (all.length) return W("neither", all);
  }
  if (!OFF.has("voaction") && ms.length && ms[0].lead && /^\S+(?:\s+\S+){0,3}?\s+\((?:V\.?O\.?|O\.?S\.?|O\.?C\.?|ON (?:PHONE|RADIO|SPEAKER))\)/i.test(u.text)) return W("none", []); // "CONTROL (V.O.) comes through" is a voice, not a presence
  if (!OFF.has("voaction") && ms.length && ms[0].lead && /\b(?:is|are) not seen\b|\bis heard but not seen\b|\bonly (?:his|her|their) voice\b/i.test(u.text)) return W("none", []);
  if (!OFF.has("screenfirst") && (SCREEN_TEXT.test(u.text) || /\b(?:reads?|label|sign|banner|plaque|screen|contact|caption|subject|from|to|re)\s*:/i.test(u.text) ||
      /^[A-Z][A-Z .'’-]{1,30}\.$/.test(u.text) && ms.length === 1 && ms[0].at <= 1 && ctx.cast.chars[ms[0].c].names.some((n) => u.text.replace(/\.$/, "") === n))) {
    // "ON PHONE (TEXT FROM NELL): hello??" / "Lena: "dont look but greg is at the elevator"" -> the sender's action
    const from = !OFF.has("sender") && (u.text.match(/\b(?:from|text from|message from|texts? from)\s+["“]?([A-Z][\w'’.-]+)/i) ||
      (!OFF.has("sender2") ? u.text.match(/^(?:ON (?:PHONE|SCREEN)(?:\s*\([^)]*\))?:\s*)?([A-Z][a-z]+):\s/) : null));
    const sender = from && ctx.cast.chars.find((c) => !c.group && !c.pseudo && c.names.some((n) => sameChar(n, from[1]) || n.toUpperCase().split(/\s+/).includes(from[1].toUpperCase())));
    return W("screenText", sender ? [sender.id] : []);
  }
  if (ms.length && ms[0].lead) {
    const lp = leadPossessive(ctx, i);
    if (lp) return W("possessive", lp);
    return W(ms[0].at <= 1 ? "nameLead" : "titleLead", [ms[0].c]);
  }
  if (!OFF.has("first") && /^(?:I|I'm|I'd|I've|I'll|My|We|We're|We'd|We've|Our)\s/.test(u.text) && !/^(?:We|Our)\s+(?:see|hear|watch|follow|move|pan|push|pull|hold|cut|are in|are inside|are back|can tell|can see|can hear|can't see|don't see)\b/i.test(u.text)) {
    let nar = -1;
    for (let j = i - 1; j >= 0 && nar < 0; j--) if (ctx.units[j].kind === "dialogue" && ctx.speaker[j] >= 0 && (ctx.units[j].ext || []).some((e) => /^V\.?O/i.test(e))) nar = ctx.speaker[j];
    if (nar < 0) for (let j = i + 1; j < ctx.units.length && nar < 0; j++) if (ctx.units[j].kind === "dialogue" && ctx.speaker[j] >= 0 && (ctx.units[j].ext || []).some((e) => /^V\.?O/i.test(e))) nar = ctx.speaker[j];
    if (nar < 0) for (let j = i - 1; j >= 0 && nar < 0; j--) if (ctx.units[j].kind === "dialogue" && ctx.speaker[j] >= 0) nar = ctx.speaker[j];
    if (nar >= 0) return W("firstPerson", [nar]);
  }
  // Instruments: "The Judge raises his gavel. ... The gavel cracks." -> whoever last handled the gavel
  if (ON.has("instr") && !ms.length && !ctx.cast.pronouns[i].length && words(u.text) <= 7) { // 6% right on dev: opt-in
    const im = u.text.match(/^(?:the|his|her|their)\s+([a-z-]+)\s+(?:[a-z]+s|is|comes|goes|cracks|snaps|falls|lands|swings|lifts|rises|drops|hurls|flies|stops|moves|keeps)\b/i);
    if (im && !SETTING_NOUN.test(im[1]) && !/^(door|phone|light|lamp|screen|engine|car|train|bus|radio|tv|clock|bell|alarm|machine|kettle|siren|wind|rain|room|house|elevator|window|camera|music|song|tape|line|signal|hatch)$/i.test(im[1])) {
      const noun = im[1].toLowerCase();
      for (let j = i - 1, d = 0; j >= 0 && d < 8; j--, d++) {
        const pu = ctx.units[j];
        if (pu.kind !== "action") continue;
        if (new RegExp(`\\b(?:his|her|their|the|a|an)\\s+(?:[a-z-]+\\s+)?${noun}\\b`, "i").test(pu.text)) {
          const pa = ruleActors(ctx, j);
          if (pa.length === 1) return W("instrument", pa);
          break;
        }
      }
    }
  }
  if (tailM && /^they both\b|^both of them\b/i.test(core)) {
    const two = everyone(ctx, i).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b)).slice(0, 2);
    if (two.length === 2) return W("pluralTwo", two);
  }
  if (NOBODY.test(core)) { // "Nobody speaks." is everyone not speaking; "Nobody touched it." / "Nobody has emptied it in years." is nobody
    const past = /^(?:nobody|no one)\s+(?:has|had|ever|touched|came|saw|noticed|moved|answered|wanted|knew|asked|told|said|heard|thought|cared|left|took|did|was|were|would|could|will|can|seems?|seemed|remembers|remembered)\b/i.test(core) || /\b(?:in (?:a long time|years|months|weeks|ages)|anymore|any more|since|yet|before)\b/i.test(core);
    let all = OFF.has("nobody") || past ? [] : excludeMentioned(ctx, i, everyone(ctx, i));
    // "TOMASZ: Is the cleaner the Director? / Nobody answers." / "Oluwaseun smiles. / Nobody smiles back." -> everyone
    // but the one who just spoke or acted
    if (!OFF.has("nobody2") && all.length > 1) {
      const p = prevContent(ctx, i);
      if (p >= i - 2) {
        const pu = ctx.units[p];
        // after an action line, the one reacted to is whoever smiled / spoke / asked in it, else the last speaker before it
        const reactive = /\b(?:smiles?|laughs?|grins?|winks?|chuckles?|giggles?|says?|jokes?|asks?|speaks?|whispers?|offers?|tries|waits?|looks? (?:up|around|at them))\b/i.test(pu.text);
        const pa0 = prevActorOf(ctx, i); // "She says it lightly. / A joke. / Nobody laughs." -> not her
        let last = pu.kind === "dialogue" ? ctx.speaker[p]
          : reactive && ruleActors(ctx, p).length === 1 ? ruleActors(ctx, p)[0] : reactive && pa0.ids.length === 1 && pa0.dist <= 2 ? pa0.ids[0] : -1;
        if (last < 0 && pu.kind === "action" && p - 1 >= 0 && ctx.units[p - 1].kind === "dialogue" && ON.has("nobody3")) last = ctx.speaker[p - 1];
        if (last >= 0) all = all.filter((c) => c !== last);
      }
    }
    return W("nobody", all);
  }
  if (SCREEN_TEXT.test(u.text)) {
    // "ON PHONE (TEXT FROM NELL): hello??" / "A message from "GREG (VP)" lights up" -> the sender
    const from = !OFF.has("sender") && u.text.match(/\b(?:from|text from|message from|texts? from)\s+["“]?([A-Z][\w'’.-]+)/i);
    const sender = from && ctx.cast.chars.find((c) => !c.group && c.names.some((n) => sameChar(n, from[1]) || n.toUpperCase().split(/\s+/).includes(from[1].toUpperCase())));
    return W("screenText", sender ? [sender.id] : []);
  }
  const pa = pronounAppositive(ctx, i) || introAppositive(ctx, i);
  if (pa) return W("appositive", pa);
  const po = OFF.has("pobj") ? null : pronounObject(ctx, i);
  if (po) return W("pronounObject", po);
  if (EVERYONE.test(core)) {
    let all = excludeMentioned(ctx, i, everyone(ctx, i));
    // "A CLERK hurries in. / Everyone looks." -> everyone but the newcomer
    if (ON.has("newc")) { const nc = all.filter((c) => ctx.cast.chars[c].first >= i - 2); if (nc.length && nc.length < all.length) all = all.filter((c) => !nc.includes(c)); }
    if (all.length) return W("everyone", all);
  }
  // "Five figures sit on the platform's edge." / "Four people wait out their cycles." as the scene opens -> the cast of
  // the scene (when the count fits), nobody present yet
  if (!OFF.has("count2") && !ms.length) {
    const cm = (u.text.match(/^(two|three|four|five|six|seven|eight|nine|ten|a dozen)\b/i) ? u.text : u.text.replace(/^[A-Z][^,.;:]{0,40},\s+/, "")).match(/^(two|three|four|five|six|seven|eight|nine|ten|a dozen)\s+(?:[a-z-]+\s+){0,2}(?:people|men|women|figures|adults|friends|teenagers|teens|kids|children|jurors|students|officers|cops|soldiers|workers|strangers|players|members|guests|passengers|sisters|brothers|siblings|investigators|agents|nurses|doctors|merchants|climbers|miners|neighbou?rs|colleagues|detectives|recruits|campers|hikers|travell?ers|bodies|shapes|silhouettes|heads|faces|voices|beams|flashlight beams|flashlights|headlamps|survivors|refugees|prisoners|hostages|sailors|crew members|crewmen|volunteers|mourners|witnesses|suspects|candidates|contestants|dancers|musicians|actors|engineers|scientists|astronauts|pilots|divers|firefighters|paramedics|cadets|monks|nuns|sisters|strangers|travelers|riders|cyclists|runners|swimmers|skaters|boxers|fighters|wrestlers|lawyers|attorneys|clerks|judges|bankers|executives|managers|interns|employees|staff|servants|maids|cooks|waiters|bartenders|patrons|regulars|customers|shoppers|commuters|tourists|visitors|pilgrims|believers|congregants|parishioners|villagers|townspeople|neighbours|roommates|housemates|classmates|teammates|bandmates|cousins|grandparents|parents|orphans|runaways|outlaws|bandits|pirates|thieves|smugglers|gunmen|guards|sentries|scouts|hunters|trappers|farmers|ranchers|cowboys|settlers|colonists)\b/i)
      || (/^One (?:man|woman|boy|girl), one (?:man|woman|boy|girl)\b/i.test(u.text) ? [0, "two"] : null);
    if (!cm && !OFF.has("crewcast") && /^The (?:crew|team|band|family|group|squad|class|jury|panel|gang|trio|quartet|pair|couple|boys|girls|kids|children|men|women|others)\b/i.test(u.text) &&
        !ctx.pres[i].some((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group)) {
      const cast = ctx.cast.chars.filter((c) => !c.group && (!c.common || c.spoke) && !c.pseudo && !offscreen(ctx, c.id)).map((c) => c.id);
      if (cast.length >= 2) return W("countCast", cast);
    }
    if (cm) {
      const N = { two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, "a dozen": 12 }[cm[1].toLowerCase()];
      const opening = !ctx.pres[i].some((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group);
      const cast = ctx.cast.chars.filter((c) => !c.group && (!c.common || c.spoke) && !c.pseudo && !offscreen(ctx, c.id)).map((c) => c.id);
      if (opening && cast.length >= 2 && (cast.length === N || (N >= 3 && cast.length >= 3 && Math.abs(cast.length - N) <= 1))) return W("countCast", cast);
    }
  }
  if (ON.has("count") && COUNT_GROUP.test(u.text)) {
    const g = ctx.cast.chars.filter((c) => c.group && ctx.pres[i].includes(c.id));
    if (g.length) return W("countGroup", [g[0].id]);
    let all = everyone(ctx, i);
    if (!all.length) all = ctx.cast.chars.filter((c) => !c.group && !c.common).map((c) => c.id); // scene opening
    if (all.length > 1) return W("countGroup", all);
  }
  // "He answers on speaker and the voice is a man's." describes what "he" hears: not an introduction of the man
  const fwd = ctx.cast.chars.find((c) => c.fwd === i);
  if (fwd && !(!OFF.has("fwdpron") && ctx.cast.pronouns[i][0]?.at <= 1 && /^(he|she|they)$/.test(ctx.cast.pronouns[i][0].w))) return W("introducedBefore", [fwd.id]);
  // "Cloth-weaver LADY ISOLDE (60s, veil of spun silver)." / "And TIBBY MORROW, 60s, hidden inside the closet." -> the
  // one being introduced, when no other name comes before them
  if (!OFF.has("introline")) {
    const im = ms.find((m) => !m.poss && ctx.cast.chars[m.c].intro === i && /^[A-Z]/.test(u.text.slice(m.at, m.at + 1)));
    if (im && !ms.some((m) => m.at < im.at && !m.poss) && !/\b(he|she|they)\b/i.test(u.text.slice(0, im.at)) &&
        /^[\s,]*(?:\(|,\s*(?:\d{1,2}s?\b|(?:early|mid|late)[- ]|[a-z])|\.|$)/.test(u.text.slice(im.at).replace(/^[A-Z][A-Z'’."-]*(?:\s+[A-Z][A-Z'’."-]*)*/, ""))) return W("introLine", [im.c]);
  }
  // "Mo smiles. It is not a happy smile." / "He laughs. It becomes a cough." -> a comment on the character's own action
  if (ON.has("itc") && /^it\s+(?:is|isn't|is not|was|does|doesn't|does not|looks|becomes|takes|lands|reaches|comes|goes|has|hasn't|sounds|feels|means|works|fails|holds|lasts)\b/i.test(u.text) && !ctx.cast.mentions[i].length) {
    const prev = ctx.units[i - 1];
    if (prev && prev.kind === "action" && prev.para === u.para) {
      const pa = prevActorOf(ctx, i);
      if (pa.ids.length === 1 && pa.dist === 1 && !/\b(phone|door|light|lamp|engine|radio|tv|screen|car|train|bus|rain|wind|room|house|clock|bell|alarm|machine)\b/i.test(prev.text)) return W("itComment", pa.ids);
    }
  }
  if (subjectless(ctx, i)) {
    // A stage direction next to a speech belongs to that speaker ("Smiles." / "Breaking off.").
    const pa = prevActorOf(ctx, i);
    if (pa.ids.length && pa.dist <= 1 && ctx.units[i - 1]?.kind === "action") return W("fragmentPrev", pa.ids);
    const nxt = ctx.units[i + 1], prv = ctx.units[i - 1];
    if (prv?.kind === "dialogue" && ctx.speaker[i - 1] >= 0 && nxt?.kind === "dialogue" && ctx.speaker[i + 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i + 1]]);
    if (FRAG_SPEAKER_LOOSE && prv?.kind === "dialogue" && ctx.speaker[i - 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i - 1]]);
    if (FRAG_SPEAKER_LOOSE && nxt?.kind === "dialogue" && ctx.speaker[i + 1] >= 0) return W("fragmentSpeaker", [ctx.speaker[i + 1]]);
    if (pa.ids.length && pa.dist <= 1) return W("fragmentPrev", pa.ids);
    // "Swipes. / Red light. / Swipes again." -> the fragment continues across a short event line
    if (ON.has("frag2") && pa.ids.length && pa.dist === 2 && ctx.units[i - 1]?.kind === "action" && words(ctx.units[i - 1].text) <= 3 && ruleActors(ctx, i - 1).length === 0) return W("fragmentPrev", pa.ids);
  }
  if (!OFF.has("hesright") && /^(?:He|She|They)(?:'s|’s| is| are) (?:right|wrong|not wrong|correct|lying|not lying)\b/.test(u.text)) return W("none", []);
  const initPron = initialPronoun(ctx, i);
  const salient = (filter) => cands.filter((c) => (OFF.has("offs") || !offscreen(ctx, c)) && filter(c)).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
  // "He doesn't say anything. / Neither does Rosalind." / "Neither does she." -> that one person
  const nd = !OFF.has("neither") && u.text.replace(/^(?:[A-Z][a-z]+ly|Then|And|Now),\s*/, "").match(/^(Neither|So|Nor) (?:does|do|is|has|can|will|moves|speaks|answers|did|would|could)\s+(she|he|[A-Z][\w'’.-]+)\b/);
  if (nd) {
    const pa0 = prevActorOf(ctx, i);
    if (/^(she|he)$/.test(nd[2])) { const s = salient((c) => ctx.cast.chars[c].gender === (nd[2] === "she" ? "f" : "m") && !(nd[1] === "So" && pa0.dist <= 1 && pa0.ids.includes(c))); if (s.length) return W("neither", [s[0]]); }
    else if (ms.length && !ms[0].poss) return W("neither", [ms[0].c]);
  }
  // "The crowd turns." / "Many." / "The others scatter." -> extras, unless the crowd is a character (a group).
  if (/^(the (?:crowd|others|people|audience|room|other(?!\s+(?:side|end|hand|way|door|room|half|wall|shore|bank|table|chair|car|line|team|woman|man|girl|boy|one's))|(?:laughing|quiet|tall|short|first|second|third|older|younger|smaller|bigger|taller|little|big|other|new|last) one)|many|some|most|a few|one of them|one of the [a-z]+)\b/i.test(u.text)) {
    const g = salient((c) => ctx.cast.chars[c].group);
    return g.length ? W("pluralGroup", [g[0]]) : W("extras", []);
  }
  // "All three freeze." / "The four of them..." -> that many of the most recently active characters.
  const num = core.replace(/^(?:we see|we watch|we follow|close on|angle on)\s+/i, "").match(/^(?:all|the)\s+(two|three|four|five|six)\b|^(two|three|four|five|six)\s+of\s+them\b/i);
  if (num) {
    const k = NUMBER[(num[1] || num[2]).toLowerCase()];
    // "The two deckhands scramble." / "The two teenagers drift off." -> extras, when the noun is nobody's alias
    const noun = u.text.match(/^the\s+(?:two|three|four|five|six)\s+([a-z]+s)\b/i);
    if (!OFF.has("cntx") && noun && !ms.length && !/^(?:others|men|women|boys|girls|friends|siblings|sisters|brothers|of)$/i.test(noun[1])) return W("extras", []);
    const s = salient((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group);
    let pres = everyone(ctx, i).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
    // "TEDDY: I got one! / All four turn." -> the others, not the one they turn to
    const pc = prevContent(ctx, i);
    if (!OFF.has("cntx") && pc >= i - 2 && ctx.units[pc].kind === "dialogue" && ctx.speaker[pc] >= 0 && pres.length >= k && pres.length > 1) pres = pres.filter((c) => c !== ctx.speaker[pc]);
    const pick = (pres.length >= k ? pres : s).slice(0, k);
    if (pick.length) return W("pluralCount", pick);
  }
  // "Their hands collide." / "Their eyes meet." -> the two most recent.
  if (/^their\s+(hands|fingers|eyes|lips|foreheads|knees|shoulders|gazes|mouths|faces|arms|feet)\b/i.test(u.text)) {
    const s2 = salient((c) => !offscreen(ctx, c) && !ctx.cast.chars[c].group).slice(0, 2);
    if (s2.length === 2) return W("pluralTwo", s2);
  }
  const stripped = u.text.replace(/^(?:(?:yet|but|and|then|now|still|so|suddenly|slowly|finally|again|for a (?:moment|second|beat|heartbeat)),?\s+)+/i, "");
  if ((initPron === "p" || PLURAL_SUBJ.test(stripped) || /^(together|the two)\b/i.test(stripped)) && !(!OFF.has("allthe") && /^all (?:the|at once|of the|around|that|this|day|night|morning|evening|afternoon|week|year|along|over|right|good|clear|quiet|still|but|his|her|their|its)\b/i.test(stripped))) {
    if (!OFF.has("theyobj") && initPron === "p" && i > 0 && ctx.units[i - 1].kind === "action" && /^They\s+[a-z]+[.!…]*$/.test(u.text)) {
      const pt = ctx.units[i - 1].text, a1 = ruleActors(ctx, i - 1);
      if (a1.length === 1 && /\b(?:the|a|an|his|her|their|some|two|three|several)\s+(?:[a-z-]+\s+)?[a-z]+s[.!…]*$/.test(pt) && !/\b(?:him|her|them|each other)\b/i.test(pt)) return W("none", []);
    }
    // a character who goes by they/them, when they are the most recent subject and the line is not about several people
    if (!OFF.has("theysing") && initPron === "p" && i > 0 && ctx.units[i - 1].kind === "action" && /^They\s+(?:[a-z]+\s+)?(?:a|an|one|their own)\s+[a-z]/.test(u.text) && !/\b(both|each other|one another|all|together|the two)\b/i.test(u.text)) {
      const a1 = ruleActors(ctx, i - 1);
      if (a1.length === 1 && ctx.cast.chars[a1[0]].gender === "?" && !ctx.cast.chars[a1[0]].group && ctx.cast.chars[a1[0]].first >= i - 2) return W("theyThem", a1);
    }
    if (initPron === "p" && !/\b(both|each other|one another|all|together|the two)\b/i.test(u.text)) {
      const th = salient((c) => ctx.cast.chars[c].they);
      if (th.length && (candRecency(ctx, i, th[0]) <= 2 || salient(() => true)[0] === th[0])) return W("theyThem", [th[0]]);
    }
    const g = salient((c) => ctx.cast.chars[c].group);
    if (g.length) return W("pluralGroup", [g[0]]);
    // "Barnaby and Delphine rise together. / They arrive at it." -> the previous line's actors
    if (!OFF.has("theyprev") && i > 0 && ctx.units[i - 1].kind === "action") {
      const pa = ruleActors(ctx, i - 1);
      if (pa.length >= 2) return W("pluralPrev", pa);
    }
    if (!OFF.has("pair3")) {
      const one = (j) => (j >= 0 && ctx.units[j].kind === "action" ? ruleActors(ctx, j) : []);
      // "Nell picks up the radio. / Theo picks up the sack. / They follow." -> the two who just acted, one each
      const a1 = one(i - 1), a2 = one(i - 2);
      if (a1.length === 1 && a2.length === 1 && a1[0] !== a2[0] && !ctx.cast.chars[a1[0]].group && !ctx.cast.chars[a2[0]].group) return W("pluralPair", [a2[0], a1[0]]);
      // "She takes Tess's hand. / They run." -> the actor and the one person acted on
      if (a1.length === 1) {
        const others = [...new Set(ctx.cast.mentions[i - 1].filter((m) => m.c !== a1[0]).map((m) => m.c))];
        if (!others.length) { // "Takes her hand. / Together they look at the cross." -> the actor and the "her"
          const op = ctx.units[i - 1].text.match(/\b(him|her)(?=[.,;!?]|\s+(?:hand|arm|shoulder|wrist|face|hair|back|cheek|waist|elbow|chin|knee)s?\b)/i);
          if (op) { const s = salient((c) => c !== a1[0] && ctx.cast.chars[c].gender === (op[1].toLowerCase() === "him" ? "m" : "f")); if (s.length) others.push(s[0]); }
        }
        if (others.length === 1 && !ctx.cast.chars[others[0]].group) return W("pluralPair", [a1[0], others[0]]);
      }
      // "They answer at the same time." / "They laugh." right after an exchange -> the two speakers
      if (/\b(?:together|at the same time|at once|as one|in unison|same moment|same tone|simultaneously)\b/i.test(u.text) ||
          /^they\s+(?:answer|speak|say|reply|respond|laugh|chuckle|giggle|chorus|stop|freeze|bolt)\b/i.test(stripped)) {
        const sp = [];
        for (let j = i - 1, d = 0; j >= 0 && d < 2 && ctx.units[j].kind === "dialogue"; j--, d++) if (ctx.speaker[j] >= 0 && !sp.includes(ctx.speaker[j])) sp.push(ctx.speaker[j]);
        if (sp.length === 2) return W("pluralPair", sp.reverse());
      }
    }
    if (/\b(each other|one another)\b/i.test(u.text) || /^(?:they\s+)?both\b/i.test(stripped)) {
      // "Both men raise their hands." -> the two most recent men
      const bg = stripped.match(/^both\s+(men|women|boys|girls|brothers|sisters)\b/i);
      const gf = bg ? (/^(men|boys|brothers)$/i.test(bg[1]) ? "m" : "f") : null;
      let pool = salient((c) => !offscreen(ctx, c) && (!gf || ctx.cast.chars[c].gender === gf));
      if (!OFF.has("bothact") && /^(?:they\s+)?both\b/i.test(stripped)) {
        const actors = new Set();
        for (let j = i - 1, d = 0; j >= 0 && d < 8; j--, d++) if (ctx.units[j].kind === "action" && ctx._why?.has(j)) for (const c of ruleActors(ctx, j)) actors.add(c);
        const acted = pool.filter((c) => actors.has(c));
        if (acted.length >= 2) pool = acted;
      }
      const two = excludeMentioned(ctx, i, pool).slice(0, 2);
      if (two.length === 2) return W("pluralTwo", two);
    }
    // "Both" / "the two" / "neither" -> the two most recent; "They" / "All" -> everyone present.
    if (!/^(both|the two|neither|together)\b/i.test(stripped)) {
      let all = excludeMentioned(ctx, i, everyone(ctx, i, 8));
      // "VANCE: Sit. Down. / They sit." -> everyone but the one giving the order
      if (!OFF.has("imper") && i > 0 && ctx.units[i - 1].kind === "dialogue" && ctx.speaker[i - 1] >= 0 && all.length > 2 &&
          (IMPERATIVE.test(ctx.units[i - 1].text) || ORDER.test(ctx.units[i - 1].text))) all = all.filter((c) => c !== ctx.speaker[i - 1]);
      if (!OFF.has("imper2") && i > 1 && ctx.units[i - 1].kind === "action" && ctx.units[i - 2].kind === "dialogue" && ctx.speaker[i - 2] >= 0 && all.length > 2 &&
          (IMPERATIVE.test(ctx.units[i - 2].text) || ORDER.test(ctx.units[i - 2].text)) && ruleActors(ctx, i - 1).length === 1 && ruleActors(ctx, i - 1)[0] === ctx.speaker[i - 2]) all = all.filter((c) => c !== ctx.speaker[i - 2]);
      if (all.length > 1) return W("pluralAll", all);
    }
    const s2 = salient(() => true).slice(0, 2);
    if (s2.length) return W("pluralTwo", s2);
  }
  if (initPron) {
    // "Tobias grabs her arm. / She grabs his." -> Tobias is not "she": the previous actor is excluded when that line
    // used an object pronoun of this gender for someone else
    let excl = -1;
    if (!OFF.has("excl") && i > 0 && ctx.units[i - 1].kind === "action") {
      const pa = ruleActors(ctx, i - 1);
      // clear objects only: "him", "herself", "grabs her.", or a contact verb on someone else's body ("grabs her arm");
      // never the actor's own possessive ("adjusts his tie", "grabs her bag")
      const pt = ctx.units[i - 1].text;
      const CONTACT = "(?:grabs?|grips?|takes?|touch(?:es)?|holds?|catch(?:es)?|kiss(?:es)?|slaps?|strokes?|squeez(?:es)?|pulls?|shakes?|brushes|pats?|lifts?|cups?|seiz(?:es)?|clutch(?:es)?|wipes?|pins?|releases?|steadies|guides?|drags?|yanks?|tugs?)";
      const objG = initPron === "f" ? new RegExp(`\\b(?:herself|${CONTACT}\\s+her\\s+(?:${BODY.source.slice(2, -3)})|her)(?=[.,;!?]|\\s+(?:to|at|by|and|but|away|back|off|out|in|into|on|over|up|down|again|there|here|hard|gently|close|closer|tight)\\b|$)`, "i")
        : initPron === "m" ? new RegExp(`\\b(?:him|himself|${CONTACT}\\s+his\\s+(?:${BODY.source.slice(2, -3)}))\\b`, "i") : null;
      if (pa.length === 1 && objG && objG.test(pt) && !ctx.cast.mentions[i - 1].some((m) => m.c !== pa[0])) excl = pa[0];
    }
    const salientX = (f) => salient((c) => c !== excl && f(c));
    const s1 = salientX((c) => ctx.cast.chars[c].gender === initPron);
    // "Desmond's phone rings on the counter. / Everyone looks at it. / He answers on speaker." -> the phone's owner
    if (!OFF.has("pownr") && initPron !== "p") {
      for (let j = i - 1, d = 0; j >= 0 && d < 3; j--, d++) {
        const pu = ctx.units[j];
        if (pu.kind !== "action") continue;
        const pm = ctx.cast.mentions[j];
        if (pm.length && pm[0].poss && pm[0].lead && ruleActors(ctx, j).length === 0 && ctx.cast.chars[pm[0].c].gender === initPron && pm[0].c !== excl &&
            !ctx.cast.mentions[j].some((m) => m.c !== pm[0].c)) return W("pronounOwner", [pm[0].c]);
        if (ruleActors(ctx, j).length) break; // someone acted in between: ordinary discourse
      }
    }
    // "Pixie reaches for the monitor. / Santiago catches her wrist. / She pulls away." -> the "her" of the previous line:
    // the most recent subject before it who could be her
    if (!OFF.has("objchain") && initPron !== "p" && i > 1 && ctx.units[i - 1].kind === "action") {
      const a1 = ruleActors(ctx, i - 1), pt = ctx.units[i - 1].text;
      const objRe = initPron === "m" ? (OFF.has("objchain2") ? /\b(?:him|himself)\b/i : /\b(?:him|himself)\b|\b(?:at|on|to|around|against|under|over|from|off)\s+his\s+[a-z]/i) : /\b(?:herself)\b|\bher(?=[.,;!?]|\s+(?:to|at|by|and|but|away|back|off|out|in|into|on|over|up|down|again|there|here|hard|gently|close|closer|tight|a|an|the)\b)|\b(?:grabs?|grips?|takes?|touch(?:es)?|holds?|catch(?:es)?|kiss(?:es)?|slaps?|strokes?|squeez(?:es)?|pulls?|shakes?|brushes|pats?|lifts?|cups?|seiz(?:es)?|clutch(?:es)?|wipes?|pins?|releases?|steadies|guides?|drags?|yanks?|tugs?|taps?|covers?)\s+her\s+[a-z]/i;
      if (a1.length === 1 && ctx.cast.chars[a1[0]].gender !== initPron && objRe.test(pt) && !ctx.cast.mentions[i - 1].some((m) => m.c !== a1[0])) {
        for (let j = i - 2, d = 0; j >= 0 && d < 6; j--, d++) {
          const pu = ctx.units[j];
          if (pu.kind === "heading") break;
          const subj = pu.kind === "dialogue" ? [ctx.speaker[j]] : pu.kind === "action" ? ruleActors(ctx, j).concat(OFF.has("objchain2") ? [] : ctx.cast.mentions[j].map((m) => m.c)) : [];
          const hit = subj.find((c) => c >= 0 && c !== a1[0] && c !== excl && !ctx.cast.chars[c].group && (ctx.cast.chars[c].gender === initPron || ctx.cast.chars[c].gender === "?"));
          if (hit !== undefined) return W("pronounObjectChain", [hit]);
        }
      }
    }
    // "JUDGE TRAN (60s, ...) sits. / She taps a gavel." / "LAVALLE: I told you what you needed to hear. / He puts on his
    // glasses." -> the one who just acted or spoke, when their gender is simply unknown and nobody of the pronoun's
    // gender was in that line
    if (ON.has("recentq") && initPron !== "p" && i > 0) {
      const p = i - 1, pu = ctx.units[p];
      const r = pu.kind === "dialogue" ? (ctx.speaker[p] >= 0 ? [ctx.speaker[p]] : []) : pu.kind === "action" ? ruleActors(ctx, p) : [];
      const spokeRecently = (c) => [i - 2, i - 3].some((j) => j >= 0 && ctx.speaker[j] === c);
      if (r.length === 1 && r[0] !== excl && ctx.cast.chars[r[0]].gender === "?" && !ctx.cast.chars[r[0]].group && !offscreen(ctx, r[0]) &&
          !ctx.cast.mentions[p].some((m) => m.c !== r[0] && ctx.cast.chars[m.c].gender === initPron) &&
          !(pu.kind === "dialogue" && s1.some(spokeRecently))) return W("pronounRecent", [r[0]]);
    }
    const present = new Set(ctx.pres[i]);
    // "He kneels, checking the knot, while Desmond lowers himself onto his pack." -> both
    const withClause = (ids) => {
      if (OFF.has("pronclause")) return ids;
      const out = ids.concat(ms.filter((m) => !m.poss && !ids.includes(m.c) && /(?:,\s*)?\b(?:while|as|and)\s+$/i.test(u.text.slice(0, m.at)) &&
        /^\S+(?:\s+[A-Z]\S*)*\s+[a-z]+(?:s|es)\b/.test(u.text.slice(m.at))).map((m) => m.c));
      if (ON.has("jointv")) { // -0.1 on s0: opt-in
        // "She sits beside Ferdie, who has slumped in his chair." / "He hums with her, and neither corrects the other." / "She kisses him, hard."
        for (const m of ms) if (!m.poss && !out.includes(m.c) && /^\S+(?:\s+[A-Z]\S*)*,\s*who\s+(?:has|is|was|[a-z]+s)\b/.test(u.text.slice(m.at))) out.push(m.c);
        const jm = u.text.match(/\b(?:kisses|hugs|embraces|holds|high-fives|dances with|wrestles|shakes hands with|clinks (?:glasses|mugs|cups) with|bumps fists with|links arms with)\s+(him|her)\b/i) ||
          (/\b(?:with|beside|alongside|against|to|at)\s+(?:him|her)\b[^.]*\b(?:neither|each other|both|the other|one another|together)\b/i.test(u.text) ? u.text.match(/\b(him|her)\b/i) : null);
        if (jm) { const g2 = jm[1].toLowerCase() === "him" ? "m" : "f"; const o = salient((c) => !out.includes(c) && ctx.cast.chars[c].gender === g2); if (o.length) out.push(o[0]); }
      }
      // "She nearly slides off the ledge; he grabs her sleeve." -> the other one too
      const oc = ON.has("pronclause2") && u.text.slice(ctx.cast.pronouns[i][0].at + 2).match(/(?:;|,|\band|\bwhile|\bas|\bthen)\s+(he|she)\s+(?:[a-z]+\s+)?[a-z]+(?:s|es|ed)\b/i);
      if (oc) {
        const g2 = oc[1].toLowerCase() === "he" ? "m" : "f";
        if (g2 !== initPron) { const o = salient((c) => !out.includes(c) && ctx.cast.chars[c].gender === g2); if (o.length) out.push(o[0]); }
      }
      return out;
    };
    if (s1.length) {
      const unique = s1.filter((c) => present.has(c)).length === 1 && salient((c) => ctx.cast.chars[c].gender === "?").length === 0;
      if (unique || s1.length === 1) return W(unique ? "pronounUnique" : "pronounSalient", withClause([s1[0]]));
      return W("pronounSalient", withClause([discourseSubject(ctx, i, initPron, s1)]));
    }
    const q = salientX((c) => ctx.cast.chars[c].gender === "?");
    if (q.length) return W("pronounUnknownGender", [q[0]]);
    const ahead = laterOfGender(ctx, i, initPron);
    if (ahead >= 0) return W("pronounAhead", [ahead]);
  }
  if (ON.has("gesture") && !ms.length && i > 0 && ctx.units[i - 1].kind === "action" && GESTURE_NP.test(u.text)) {
    const pa = ruleActors(ctx, i - 1);
    if (pa.length === 1 && !ctx.cast.chars[pa[0]].group) return W("gesture", pa);
  }
  // "The camera follows him in." / "The camera freezes, but his breath comes through the mic." (found footage) -> the one filmed
  if (!OFF.has("camobj") && !ms.length) {
    const cm = u.text.match(/^(?:The camera|Camera|The lens)\b[^.]*\b(him|his|her)\b/i) || (!OFF.has("wesee") ? u.text.match(/^(?:We see|We watch|We follow|We find|We stay on|We hold on|We are with)\s+(him|her)\b/i) : null);
    if (cm) { const s = salient((c) => ctx.cast.chars[c].gender === (cm[1].toLowerCase() === "her" ? "f" : "m")); if (s.length) return W("cameraObject", [s[0]]); }
    // "The camera whips around." with one person in the scene: the one holding it
    if (!OFF.has("cam1") && /^The camera\b/i.test(u.text)) { const s = everyone(ctx, i); if (s.length === 1) return W("cameraObject", s); }
  }
  // "This is the last time any of them will take the sea for granted." -> narration about everyone present
  if (!OFF.has("narr") && (/^(?:This|It|That) (?:is|was|will be) the (?:last|first|only|closest|nearest)\b/i.test(u.text) || (!OFF.has("narr2") && /^We (?:can tell|can see|see|watch|know|understand)\b/i.test(u.text))) && /\b(?:they|them|their|either of them|both of them|the (?:two|three|four|five) of them|any of them|all of them|everyone)\b/i.test(u.text)) {
    const all = everyone(ctx, i);
    const two = /\b(?:either of them|both of them|the two of them|they will be two)\b/i.test(u.text);
    if (all.length > 1) return W("narration", two ? all.sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b)).slice(0, 2) : all);
  }
  if (!OFF.has("escapes") && !ms.length) {
    const em = u.text.match(/^(?:A|An|The|Another)\s+(?:[a-z-]+\s+)?(?:giggle|laugh|smile|sob|sigh|gasp|shudder|shiver|groan|whimper|yelp|cry|scream|breath|word|sound|hiccup|snort|chuckle|tear|flush|blush) (?:escapes|leaves|slips (?:from|out of)|breaks from|bursts from|comes out of|rises in|catches in|dies in) (him|her)\b/i);
    if (em) { const s = salient((c) => ctx.cast.chars[c].gender === (em[1].toLowerCase() === "him" ? "m" : "f")); if (s.length) return W("bodyOwner", [s[0]]); }
  }
  if (!OFF.has("owner") && !ms.length) {
    const om = u.text.match(BODY_OWNER);
    if (om) {
      const g = om[1].toLowerCase() === "his" ? "m" : "f";
      const s = salient((c) => ctx.cast.chars[c].gender === g);
      if (s.length) return W("bodyOwner", [s.length > 1 ? discourseSubject(ctx, i, g, s) : s[0]]);
    }
  }
  const subj = ms.find((m) => !m.poss && !/\b(at|to|toward|towards|in|on|with|behind|beyond|beside|near|from|for|of|by|past|around|into|onto|under|over|between|among|than|like)\s+$/i.test(u.text.slice(0, m.at)));
  if (subj) return W("firstMention", [subj.c]);
  // "A vein rises on Jethro's neck." / "Frosting drips from Tibby's nose." / "A root catches Bram's foot; he falls." -> the owner
  if (ON.has("namebody") && !ms.some((m) => !m.poss)) {
    const pm = ms.find((m) => m.poss && BODY.test(u.text.slice(m.at).replace(/^\S+(?:\s+\S+){0,3}?['’]s\s+/, "").replace(ADJ_PRE, "")));
    if (pm) return W("nameBody", [pm.c]);
  }
  if (ms.length) return W("objectOnly", []);
  if (ON.has("pfall") && /^(she|he|they|her|his)\b/i.test(u.text) && cands.length) return W("pronounFallback", [salient(() => true)[0]]); // 15% right: opt-in
  return W("none", []);
}

// Several same-gender candidates for a subject pronoun: right after a line of dialogue, the listener reacts (unless
// the pronoun sentence names the speaker's object, e.g. "She looks at him"); otherwise the most recent subject of that
// gender (actor of an earlier action line or a speaker), falling back to the most recently named.
const DISCOURSE = { mode: globalThis.process?.env?.WHO_DISC || "recency", model: null, predict: null };
function discourseSubject(ctx, i, g, cands) {
  if (ON.has("voc") || ON.has("voc2")) { // neutral on gold so far: opt-in
    // "COACH: Zeke, look at me. / He lifts his head." -> the one told to do something in the previous speech
    const pj = i - 1;
    if (pj >= 0 && ctx.units[pj].kind === "dialogue") {
      const sp = ctx.speaker[pj], pt = ctx.units[pj].text;
      const named = [...new Set(ctx.cast.mentions[pj].map((m) => m.c))].filter((c) => c !== sp && cands.includes(c));
      const directed = ON.has("voc") || (IMPERATIVE.test(pt.replace(/^[A-Z][a-z]+[,.!?]\s*/, "")) || /\?\s*$/.test(pt) || /^[A-Z][a-z]+[,.!]\s+[A-Z][a-z]+\b/.test(pt)) && !/\b(he|she|his|her|him)\b/i.test(pt);
      if (named.length === 1 && directed) return named[0];
    }
  }
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
    // "Priya tosses Desmond a roll of tape. He catches it." -> the previous line's object, when its actor is not a candidate
    const pj = i - 1;
    if (pj >= 0 && ctx.units[pj].kind === "action") {
      const actors = (OFF.has("disc2") && !ctx._why?.has(pj)) ? [] : ruleActors(ctx, pj);
      if (!actors.some((c) => cands.includes(c))) {
        const pt = ctx.units[pj].text;
        const objs = [...new Set(ctx.cast.mentions[pj].filter((m) => cands.includes(m.c) && (!m.poss || (!OFF.has("objposs") && BODY.test(pt.slice(m.at).replace(/^\S+(?:\s+\S+){0,3}?['’]s\s+/, "").replace(ADJ_PRE, ""))))).map((m) => m.c))];
        if (objs.length === 1) return objs[0];
      }
    }
    for (let j = i - 1, d = 0; j >= 0 && d < 10; j--, d++) {
      const u = ctx.units[j];
      if (u.kind === "heading") break;
      const subj = u.kind === "dialogue" ? [ctx.speaker[j]] : ((OFF.has("disc2") && !ctx._why?.has(j)) ? [] : ruleActors(ctx, j));
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
const CAMERA = /^(close on|close up|closeup|extreme|angle on|angle|insert|pov|p\.o\.v|we see|we hear|we follow|we move|we pan|back to|intercut|super:?|title:?|subtitle|caption|fade|cut to|smash cut|match cut|dissolve|black\.?$|white\.?$|tableau|montage|end montage|series of shots|end series|on screen|on the screen:|wide (?:shot|on|angle)|wide[.:]|wider\b|push in|pull back|pan\b|tilt\b|track\b|tracking shot|aerial|reverse angle|two shot|split screen|freeze frame|slow motion|time cut|jump cut|flashback|end flashback|back in|resume|later\.?$|moments later\.?$)(?:\b|$)/i;
const ABSTRACT = /^(a (long |brief |short )?(beat|pause|moment|second|breath)\b|beat\.?$|pause\.?$|a long time|time passes|days pass|weeks pass|months pass|years pass|hours pass|for a (while|moment|second)|no one (hears|sees|notices|knows|comes|answers)|nobody (hears|sees|notices|knows|comes|answers)|nothing (happens|changes|moves)|it is (the|a) (last|first|only)|this is (the|a|how|what|where|when)|some (things|wounds|people|doors)|that is all|that's all|which is (to say|why)|in another life|perhaps|maybe|somewhere,? (someone|a))/i;
const PERSON = /\b(man|men|woman|women|boy|boys|girl|girls|kid|kids|child|children|baby|toddler|teen|teenager|guard|guards|waiter|waitress|nurse|soldier|soldiers|cop|cops|officer|officers|stranger|strangers|figure|figures|passer-?by|passers-?by|crowd|people|tourists?|customers?|patrons?|students?|workers?|villagers?|diners?|commuters?|neighbou?rs?|someone|somebody|dog|dogs|cat|cats|horse|horses|bird|birds|gulls?|crows?|rats?|mice|mouse|cow|cows|sheep|goat|goats|wolf|wolves|deer|fox|owl|creature|creatures|monster|thing|beast|ghost|hand|hands|face|faces|eyes|voice|voices|footsteps|silhouette|shadow figure|bees?|moths?|fly|flies|tortoise|turtle|hooves|riders?|animals?|insects?|spiders?|snakes?|parrot|hamster|rabbit|kitten|puppy|pigeons?|seagulls?|hens?|chickens?|rooster|pigs?|bull|lamb|calf|goose|geese|ducks?|swans?|fish|shark|whale|bats?|squirrel|raccoon|bear|lion|tiger|elephant|monkey|hawk|eagle|raven|sparrow|robin|wasps?|hornets?|ants?|beetles?|worms?|frog|toad|lizard|crabs?|hound|mutt|pony|mule|donkey|camel|herd|flock|swarm)\b/i;
const EXTRA_SUBJ = new RegExp("^(?:a|an|the|two|three|four|several|some|many|few|a few|other|another|one|an old|a young|a little)\\s+(?:[\\w-]+\\s+){0,3}?" + PERSON.source.replace(/^\\b|\\b$/g, ""), "i");
const SETTING_NOUN = /\b(rain|snow|sleet|hail|fog|mist|wind|breeze|storm|thunder|lightning|sun|sunlight|sunrise|sunset|dawn|dusk|twilight|moon|moonlight|stars|sky|clouds?|night|morning|afternoon|evening|light|lights|shadows?|darkness|dark|silence|quiet|heat|cold|dust|smoke|haze|room|hall|kitchen|office|street|road|field|forest|woods|river|lake|sea|ocean|beach|shore|harbou?r|mountains?|hills?|desert|city|town|village|house|building|walls?|floor|ceiling|windows?|corridor|hallway|stairs|garden|yard|park|church|bar|restaurant|cafe|shop|store|station|platform|parking lot|alley|bridge|dock|pier|landscape|horizon|view|space|interior|exterior)\b/i;
const STATIC_VERB = /\b(is|are|was|were|stands?|sits?|lies|lie|hangs?|looms?|stretch(es)?|glows?|gleams?|shines?|glitters?|shimmers?|twinkles?|flickers?|blankets?|covers?|fills?|lines?|dots?|surrounds?|overlooks?|rises?|towers?|sprawls?|extends?|leads?|smells?|reeks?|stinks?|seems?|remains?|waits?|sleeps?|rests?|settles?|hums?|falls?|drifts?|pours?|beats? down|bakes?)\b/i;
const EVENT_VERB = /\b(rings?|buzz(es)?|beeps?|clicks?|chimes?|slams?|bangs?|crash(es)?|smash(es)?|shatters?|breaks?|explodes?|bursts?|opens?|closes?|swings?|creaks?|squeaks?|thuds?|drops?|rolls?|spins?|tips?|topples?|tumbles?|skids?|screech(es)?|honks?|roars?|blares?|hisses?|whirs?|clatters?|rattles?|knocks?|cracks?|snaps?|pops?|blinks?|flashes?|goes (dark|off|out|black|dead|silent)|cuts? out|dies|stops?|starts?|lands?|hits?|strikes?|arrives?|pulls (up|in|away|out)|speeds?|races?|passes?|appears?|vanishes|disappears?|moves?|shifts?|turns?|changes?|ticks?|vibrates?|lights up|comes on|kicks in|boils?|burns?|spills?|leaks?|drips?)\b/i;

// Ambient: a machine or fixture keeps doing what it does ("The vending machine hums.", "Ropes creak."); a discrete
// sound or a force acting on things is an event ("Sirens, very far away.", "Wind rocks the car.", "Candles fall.").
const AMBIENT = /^(?:the\s+)?(?:[a-z-]+\s+){0,2}(?:machine|dryers?|washers?|fluorescents?|tubes?|lamps?|lanterns?|engine|generator|fans?|fridge|freezer|heater|radiator|vending machine|organ|pendulums?|ropes?|bees|water|stove|foghorn|drone|chimes|clock|clocks|pipes?|vents?|lights?|bulbs?|neon|sign|screen|monitors?|speakers?|radio|jukebox|ceiling fan|compressor|boiler|kettle|refrigerator|ice machine|projector|turbines?|rotors?|rain|surf|waves|wind|crickets|cicadas|frogs|traffic)\b[^.]*\b(?:hums?|buzz(?:es)?|ticks?|creaks?|swings?|drifts?|turns?|thrums?|drones?|whirs?|sways?|rattles?|clicks?|flickers?|glows?|drips?|hisses|purrs?|idles?|cycles?|churns?|rumbles?|murmurs?|sighs?|breathes?|sags?|hangs?|dangles?|ticking|humming|buzzing|turning|dripping|swinging)\b/i;
const SOUND_LINE = /^(?:(?:a |the |another |then a |then the |somewhere,? |somewhere (?:above|below|behind|outside|inside|off),? |from [^,]{0,20},? |beyond [^,]{0,20},? )?(?:[a-z-]+ ){0,2}(?:sirens?|tires|tyres|footsteps|steps|plink|knock|knocks|whistle|screech|thud|thump|clang|clank|hiss|bang|crash|rumble|roar|click|beep|ring|chime|buzz|buzzer|horn|bell|gunshot|shot|shots|scream|shout|cry|crack|snap|pop|splash|rustle|rustling|scratching|scraping|tapping|knocking|ticking|hum|drone|whine|squeal|squeak|groan|creak|crunch|clatter|rattle|slam|boom|blast|explosion|alarm|siren)s?\b(?:[,.]|\s+(?:very |far |close |from |on |in |somewhere|again|then|outside|below|above|behind|overhead|down |up |are heard|is heard|echo|echoes|fade|fades|die|dies|stop|stops|answer|answers))|[A-Z]{3,}[.!]*$)/i;
const FORCE_EVENT = /^(?:the\s+)?(?:wind|light|sunlight|frost|rain|snow|dust|smoke|water|fire|flames?|candles?|a (?:gust|wave|beam|plume|flash|glint|spray|burst) of [a-z]+|lightning|thunder|the (?:wind|light|rain|snow|dust|smoke|water|fire|flames?|sun|tide|current|sea|river))\b[^.]*\b(?:rocks?|pulls?|floods?|slices?|rises?|pools?|sweeps?|cuts?|falls?|pours?|hits?|slams?|rattles?|tears?|rips?|whips?|lifts?|scatters?|catches|crawls?|races?|spills?|bursts?|cracks?|strikes?|snaps?|knocks?|pushes|shoves?|drives?|blows?|comes?|goes|dies|erupts?|explodes?|ticks?|pings?)\b/i;
// Text + rule signals as tokens, the input of the learned kind table (kindtable.js).
export function kindSignals(ctx, i) {
  const t = ctx.units[i].text.trim();
  const sig = [];
  if (!OFF.has("ksig")) {
    if (AMBIENT.test(t)) sig.push("__ambient");
    if (SOUND_LINE.test(t)) sig.push("__sound");
    if (FORCE_EVENT.test(t)) sig.push("__force");
    if (/^(?:[a-z-]+\s+){0,3}(?:[A-Z][a-z]+(?:'s|’s))\b/.test(t) || /^(?:his|her|their)\s+(?:[a-z-]+\s+){0,2}[a-z]+\.?$/i.test(t)) sig.push("__possfrag"); // "Her nameplate." / "Rhee's."
    if (/^(?:inside|underneath|beneath|behind it|on the (?:table|desk|floor|wall|screen|board))[:,]/i.test(t)) sig.push("__insert");
    if (/^[A-Z][a-z]+(?:,\s*[a-z]+)*[.!…]*$/.test(t) && words(t) <= 2) sig.push("__oneword");
  }
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
  // one-word lines Opus labels the same way every time: a state of the room vs a sound
  if (!OFF.has("kone") && /^(?:a\s+)?(?:silence|quiet|stillness|dark|darkness|black|dust|cold|heat|fog|rain|snow|wind|night|morning|dawn|dusk)[.!…]*$/i.test(t)) return "setting";
  if (!OFF.has("kone") && /^(?:a\s+|another\s+|then\s+(?:a\s+)?)?(?:click|tap|knock|plink|drip|thud|bang|crash|beep|ring|clang|snap|crack|pop|creak|rattle|hiss|boom|thump|splash|buzz|ping|tick|tock|whoosh|clatter|clunk|clink|whir|screech|squeak|slam|crunch|scrape|scratch|rustle|gurgle|splat|zap|whack|smack|thwack|crackle|sizzle|fizz|toot|honk|chirp|caw|bark|howl|growl|hum|drone|whine|wail|shriek|scream|shout|gasp|sigh|cough|sneeze|laugh|giggle|chuckle)(?:s|es|ing)?[.!…]*$/i.test(t)) return "event";
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
