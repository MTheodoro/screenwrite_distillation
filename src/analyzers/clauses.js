// Clause splitting for who-readings: one action sentence can have several doers ("He is a man of few words, and she
// is a beauty."). Splits only where a new subject starts a new clause with its own verb, so shared-subject lists
// ("Winifred rises, smooths her coat, and walks away") and joint subjects ("HEITOR and UATAKI liked ...") stay whole.
// Each clause keeps its span in the sentence (from / to, connectives included, so a display can colour the whole
// sentence) and an analysis text (connectives stripped, a relative "who" replaced by its antecedent).
import { VERBS3 } from "./verbs.js";

const CONJ = "and|but|yet|so|or|then|while|as|until|because|though|although|whereas|before|after|when|once|since|whenever";
const AUXV = /^(?:is|are|was|were|has|have|had|got|gets|can|could|will|would|does|did|do|should|must|might|may|seems|seemed|looks|looked|becomes|became|keeps|kept|starts|started|begins|began|tries|tried|goes|went|comes|came|says|said|sits|sat|stands|stood|lies|lay|runs|ran|falls|fell|takes|took|makes|made|gives|gave|feels|felt|knows|knew|thinks|thought|sees|saw|hears|heard|finds|found|leaves|left|holds|held|brings|brought|tells|told|lets|puts|cuts|hits|sets|shuts|quits|spits|spat|laughs|cries|isn't|wasn't|doesn't|didn't|can't|won't|hasn't|hadn't|aren't|weren't|wouldn't|couldn't|'s|’s)$/i;
const SUBJ = new RegExp("^(?:(?:then|now|suddenly|finally|slowly|still)\\s+)?(?:he|she|they|i|we|it|everyone|everybody|nobody|no one|someone|somebody|all|both|neither|none|each|several|some|many|most|few|a few|one|two|three|four|five|this|that|these|those|the|a|an|his|her|their|my|our|[A-Z][A-Za-z'’.-]+)\\b");

function isVerb(w) {
  const x = w.replace(/[^A-Za-z'’]/g, "").toLowerCase();
  // base forms after a plural subject ("a few carry her"): the third-person form is a known verb
  const base = x.length > 2 && (VERBS3.has(x + "s") || VERBS3.has(x + "es") || VERBS3.has(x.replace(/y$/, "ies")));
  return !!x && (VERBS3.has(x) || AUXV.test(x) || base || (/^[a-z]{2,}ed$/.test(x) && !NOT_PAST.test(x)));
}
const NOT_PAST = /^(?:red|bed|shed|sled|need|seed|feed|speed|bleed|breed|weed|hundred|naked|sacred|wicked|beloved|aged|crooked|ragged|rugged|jagged|learned|blessed|cursed|wretched|kindred|hatred|bred|fled|led|wed|sped)$/;
const hasVerb = (s) => s.split(/\s+/).some(isVerb);
// A clause starts at `s` (text after the connective): a subject, then a verb within a few words.
function startsClause(s) {
  if (!SUBJ.test(s)) return false;
  const head = s.split(/[,;:]|\s(?:and|but|or)\s/)[0]; // the verb must come before the next comma / conjunction
  const ws = head.split(/\s+/).slice(0, 9);
  // "the owner jerks awake": determiner + noun + an -s word is a present-tense verb even when the lexicon lacks it
  return ws.slice(1).some(isVerb) || (/^(?:he|she|they|i|we)$/i.test(ws[0]) && ws.length > 1) || /^(?:the|a|an|his|her|their)\s+[a-z-]+\s+[a-z]+(?<!s)s\b/i.test(head);
}

// -> [{ from, to, text }] covering the whole sentence in order (one entry when nothing splits).
export function splitClauses(sentence) {
  const t = sentence;
  const cuts = new Set(); // positions where a new clause span starts
  const rel = new Map(); // span start -> antecedent text for a relative clause
  let m;
  // 1. semicolons; a colon after a real clause ("proposed another solution: watch while ...")
  for (const re = /[;:]\s+/g; (m = re.exec(t));) {
    const before = t.slice(0, m.index);
    if (t[m.index] === ":" && (before.split(/\s+/).length < 4 || /^[A-Z0-9 ().'’-]+$/.test(before) || /\b(?:reads?|says?|labell?ed|marked|text|message|screen|caption|sign)$/i.test(before))) continue;
    cuts.add(m.index + m[0].length);
  }
  // 2. ", <conj> <subject> <verb>" and " <conj> <subject> <verb>" after a clause that has its own verb
  for (const re = new RegExp(`(,\\s+|\\s+)(?:${CONJ})\\s+(?:then\\s+)?`, "gi"); (m = re.exec(t));) {
    const start = m.index + m[1].length, after = t.slice(m.index + m[0].length);
    // "the day when MATHILDA ..." / "the moment as ..." qualify a time noun: not a new clause
    if (/\b(?:day|night|moment|time|hour|minute|second|morning|evening|afternoon|week|year|month|point|instant|place|way)\s*$/i.test(t.slice(0, m.index)) && /^\s+(?:when|as|before|after|since|until|once|while)\s/i.test(m[0])) continue;
    const prevCut = Math.max(0, ...[...cuts].filter((c) => c <= m.index));
    if (!startsClause(after) || !hasVerb(t.slice(prevCut, m.index))) continue;
    // "and" / "or" without a comma joins two subjects ("Jen and Big Dave collide") unless a pronoun follows
    if (!/^,/.test(m[1]) && /^(?:and|or)$/i.test(m[0].trim().split(/\s+/)[0]) && !/^(?:then\s+)?(?:he|she|they|i|we)\b/i.test(after)) continue;
    cuts.add(start);
  }
  // 2b. comma splice: ", the owner jerks awake" / ", Nadia nods" (a new subject with its own verb right after a comma)
  for (const re = /,\s+(?=(?:the|a|an|his|her|their|he|she|they|[A-Z][A-Za-z'’-]+)\s)/g; (m = re.exec(t));) {
    const after = t.slice(m.index + m[0].length), prevCut = Math.max(0, ...[...cuts].filter((c) => c <= m.index));
    if (/^(?:his|her|their)\s/i.test(after) && !/^\S+\s+\S+\s+(?:is|are|was|were|has|had)\b/.test(after)) continue; // ", her hands shaking"
    if (/^(?:The|A|An)\s+(?:[a-z-]+\s+){0,2}[a-z-]+\s+(?:of|in|with|on|at|from|for|by)\b/.test(after) && !startsClause(after)) continue;
    const first = after.split(/\s+/)[0];
    if (/^[A-Z]/.test(first) && !/^(?:The|A|An|His|Her|Their)$/.test(first) && !isVerb(after.split(/\s+/)[1] || "")) continue; // "Rosa, 40s," / "HEITOR, a priest"
    if (startsClause(after) && hasVerb(t.slice(prevCut, m.index))) cuts.add(m.index + m[0].length);
  }
  // 3. a nominative pronoun with its verb in mid-sentence, no connective ("laughed so hard he got angry")
  for (const re = /\s(he|she|they)\s+(\S+)/gi; (m = re.exec(t));) {
    const at = m.index + 1, prevWord = (t.slice(0, m.index).match(/(\S+)$/) || [])[1] || "";
    if (/[,;:]$/.test(prevWord) || new RegExp(`^(?:${CONJ}|that|which|who|whom|whose|said|says|asked|asks|if|than|what|where|how|why|then)$`, "i").test(prevWord)) continue;
    if (!isVerb(m[2]) && !/^(?:[a-z]+ly)$/i.test(m[2])) continue;
    const prevCut = Math.max(0, ...[...cuts].filter((c) => c <= m.index));
    if (!hasVerb(t.slice(prevCut, m.index))) continue;
    cuts.add(at);
  }
  // 4. a subordinate clause first: "So when the girl was exhausted, all the men ... came"
  m = t.match(new RegExp(`^(?:(?:so|and|but|then)\\s+)?(?:${CONJ}|if)\\s+[^,;]{3,90},\\s+`, "i"));
  if (m && startsClause(t.slice(m[0].length)) && hasVerb(m[0])) cuts.add(m[0].length);
  // 5. "NAME, who ..." belongs to NAME
  for (const re = /([A-Z][A-Za-z'’.-]*(?:\s+[A-Z][A-Za-z'’.-]*)*|\bthe\s+[a-z]+),\s+who\s+/g; (m = re.exec(t));) {
    const start = t.indexOf("who", m.index + m[1].length);
    cuts.add(start);
    rel.set(start, m[1]);
  }
  const starts = [0, ...[...cuts].filter((c) => c > 0 && c < t.length)].sort((a, b) => a - b);
  const out = [];
  for (let k = 0; k < starts.length; k++) {
    const from = starts[k], to = k + 1 < starts.length ? starts[k + 1] : t.length;
    let text = t.slice(from, to).trim().replace(/[,;:]\s*$/, "");
    if (rel.has(from)) text = text.replace(/^who\s+/i, rel.get(from) + " ");
    else if (k > 0) text = text.replace(new RegExp(`^(?:(?:${CONJ}|if)\\s+)+(?:then\\s+)?`, "i"), "");
    else if (starts.length > 1) text = text.replace(/^(?:(?:so|and|but|then)\s+)?(?:when|as|after|before|once|while|if|because|although|though|since|until|whenever)\s+/i, ""); // "So when the girl was ..." -> "the girl was ..."
    if (!/[.!?…]$/.test(text)) text += ".";
    text = text[0].toUpperCase() + text.slice(1);
    if (text.replace(/\W/g, "").length) out.push({ from, to, text });
  }
  return out.length ? out : [{ from: 0, to: t.length, text: t }];
}
