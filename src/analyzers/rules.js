// Rule-based analyzers. Each rule exposes numeric signals (features) and keeps its old verdict path.
// Feature order is defined by the *_FEATURES arrays; models and Python export depend on it.
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
export const EMB = { boundary: 16, actor: 16, addr: 16, emo: 64, tension: 32 };

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
    boundary: [...BOUNDARY_FEATURES, ...(emb ? ["embCosPrev"] : []), ...tail(EMB.boundary, "e")],
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

function tensionLex(t) { return lexCount(t, "threat") + lexCount(t, "conflict") + lexCount(t, "urgency") - lexCount(t, "calm"); }
function unitTensionLex(ctx, i) {
  const st = unitStats(ctx, i);
  return st.lex[0] + st.lex[1] + st.lex[2] - st.lex[3];
}

export function boundaryFeatures(ctx, i) {
  const f = boundaryBase(ctx, i);
  if (!ctx._embedder) return f;
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
  "lastSpeakerSpoke", "subjectless", "prevActor", "prevActorSamePara", "prevActorDist"];

// Sentence with no grammatical subject at the start: "Opens a folder." "Flips." "Slowly." "Warm face."
const DET = /^(a|an|the|this|that|these|those|his|her|their|its|my|our|your|some|no|every|each|one|two|three|on|in|at|from|behind|outside|inside|across|through|under|over|near|beside|somewhere|nobody|someone|everyone|it|there|then|now|later|silence|nothing)\b/i;
export function subjectless(ctx, i) {
  const u = ctx.units[i];
  if (u.kind !== "action") return 0;
  const ms = ctx.cast.mentions[i], prons = ctx.cast.pronouns[i];
  if ((ms.length && ms[0].at <= 1) || (prons.length && prons[0].at <= 1)) return 0;
  const t = u.text.trim();
  if (DET.test(t)) return 0;
  return /^[A-Z][a-z]+(s|es|ed|ly|ing)\b/.test(t) || /^[A-Z][a-z]+\.$/.test(t) || words(t) <= 3 ? 1 : 0;
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

export function actorCandidates(ctx, i) {
  const set = new Set(ctx.pres[i]);
  for (const m of ctx.cast.mentions[i]) set.add(m.c);
  return [SPECIAL.NONE, ...[...set].sort((a, b) => a - b)];
}

export function actorFeatures(ctx, i, c) {
  const f = actorBase(ctx, i, c);
  return ctx._embedder ? f.concat(embHead(ctx, i, EMB.actor)) : f;
}

function actorBase(ctx, i, c) {
  const u = ctx.units[i];
  const ms = ctx.cast.mentions[i];
  const prons = ctx.cast.pronouns[i];
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  const nPresent = cands.length;
  const plural = PLURAL.test(u.text) ? 1 : 0;
  const initPron = prons.length && prons[0].at <= 1 ? prons[0].g : null;
  if (c === SPECIAL.NONE) {
    const pa = prevActorOf(ctx, i);
    return [1, 0, 1, 0, 0, 0, 0, initPron ? 1 : 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, nPresent, 0, plural,
      ms.length ? 1 : 0, prons.length ? 1 : 0, u.sent ?? 0, 0, 0, log1p(words(u.text)), 0,
      subjectless(ctx, i), pa.ids.length ? 0 : 1, pa.samePara, log1p(pa.dist)];
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
  ];
}

// Rule verdict: array of char ids (empty = NONE).
export function ruleActors(ctx, i) {
  const u = ctx.units[i];
  const ms = ctx.cast.mentions[i];
  const prons = ctx.cast.pronouns[i];
  const cands = actorCandidates(ctx, i).filter((x) => x >= 0);
  if (ms.length && ms[0].at <= 1) return [ms[0].c];
  if (subjectless(ctx, i)) { const pa = prevActorOf(ctx, i); if (pa.ids.length && pa.dist <= 4) return pa.ids; }
  const initPron = prons.length && prons[0].at <= 1 ? prons[0].g : null;
  const salient = (filter) => cands.filter(filter).sort((a, b) => candRecency(ctx, i, a) - candRecency(ctx, i, b));
  if (initPron === "p" || /^(both|together|the two|everyone)\b/i.test(u.text)) {
    const s = salient(() => true).slice(0, 2);
    if (s.length) return s;
  }
  if (initPron) {
    const s = salient((c) => ctx.cast.chars[c].gender === initPron || ctx.cast.chars[c].gender === "?");
    if (s.length) return [s[0]];
  }
  if (ms.length) return [ms[0].c];
  if (/^(she|he|they|her|his)\b/i.test(u.text) && cands.length) return [salient(() => true)[0]];
  return [];
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
  const sp = ctx.speaker[i];
  const set = new Set(ctx.pres[i]);
  for (const m of ctx.cast.mentions[i]) set.add(m.c);
  const ns = nextSpeaker(ctx, i, sp);
  if (ns >= 0) set.add(ns);
  set.delete(sp);
  return [SPECIAL.ALL, SPECIAL.SELF, SPECIAL.NOBODY, ...[...set].sort((a, b) => a - b)];
}

export function addrFeatures(ctx, i, c) {
  const f = addrBase(ctx, i, c);
  return ctx._embedder ? f.concat(embHead(ctx, i, EMB.addr)) : f;
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
  "threat", "calm"];

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
  if (!ctx._embedder) return f;
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
    if (u.kind === "action") lines[i] = { who: ruleActors(ctx, i), emo };
    else lines[i] = { speaker: ctx.speaker[i], to: ruleAddressee(ctx, i), emo };
    prevEmo = emo;
  }
  const beatUnits = beats.map((b, k) => ctx.content.filter((i) => i >= b && (k + 1 >= beats.length || i < beats[k + 1])));
  const tension = beatUnits.map((bu) => ruleTension(tensionFeatures(ctx, bu)));
  return { cast: ctx.cast.chars.map((c) => ({ id: c.id, name: c.name })), beats, lines, tension };
}
