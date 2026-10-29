// Extractive beat summaries: pick the beat's key line with a small learned scorer, then rewrite it into an outline
// sentence (pronouns -> names, trimmed). Built only from the writer's own sentences, so it never states something the
// script does not say; the scorer only decides which sentence matters most.
import { lexCount } from "./lexicon.js";

export const KEY_FEATURES = ["isAction", "isDialogue", "pos", "isFirst", "isLast", "words", "nWho", "kindChar",
  "kindSetting", "kindEvent", "startsName", "startsPronoun", "centrality", "threat", "conflict", "exclaim", "question",
  "entrance", "exit", "speakerIsActor", "nUnits", "firstBeat", "verbless", "hasQuote"];

const ENTER = /\b(enters|walks in|comes in|arrives|bursts in|appears|steps in|returns)\b/i;
const EXIT = /\b(leaves|exits|walks out|storms out|is gone|hangs up|disappears|departs|runs off)\b/i;
const WORDS = (t) => (t.toLowerCase().match(/[a-z]{3,}/g) || []);

function wordSet(ctx, i) {
  ctx._ws ??= new Map();
  if (!ctx._ws.has(i)) ctx._ws.set(i, new Set(WORDS(ctx.units[i].text)));
  return ctx._ws.get(i);
}
function centrality(ctx, i, units) {
  const a = wordSet(ctx, i);
  if (!a.size) return 0;
  let s = 0;
  for (const j of units) {
    if (j === i) continue;
    const b = wordSet(ctx, j);
    let n = 0;
    for (const w of a) if (b.has(w)) n++;
    s += n / Math.sqrt(a.size * Math.max(1, b.size));
  }
  return s / Math.max(1, units.length - 1);
}

// Main actor of a beat: who acts or speaks most in it.
export function beatActor(units, result) {
  const n = new Map();
  for (const i of units) {
    const l = result.lines[i] || {};
    for (const c of l.who || []) n.set(c, (n.get(c) || 0) + 1);
    if (l.speaker >= 0) n.set(l.speaker, (n.get(l.speaker) || 0) + 1);
  }
  return [...n].sort((a, b) => b[1] - a[1])[0]?.[0] ?? -1;
}

export function keyFeatures(ctx, i, units, result, beatIndex) {
  const u = ctx.units[i], t = u.text, l = result.lines[i] || {};
  const k = units.indexOf(i), actor = beatActor(units, result);
  const words = (t.match(/[A-Za-z']+/g) || []).length;
  return [
    u.kind === "action" ? 1 : 0, u.kind === "dialogue" ? 1 : 0, units.length > 1 ? k / (units.length - 1) : 0,
    k === 0 ? 1 : 0, k === units.length - 1 ? 1 : 0, Math.log(1 + words), (l.who || []).length,
    l.kind === "character" ? 1 : 0, l.kind === "setting" ? 1 : 0, l.kind === "event" ? 1 : 0,
    ctx.cast.mentions[i].length && ctx.cast.mentions[i][0].at <= 1 ? 1 : 0, /^(he|she|they|his|her|their)\b/i.test(t) ? 1 : 0,
    centrality(ctx, i, units), lexCount(t, "threat"), lexCount(t, "conflict"), (t.match(/!/g) || []).length,
    (t.match(/\?/g) || []).length, ENTER.test(t) ? 1 : 0, EXIT.test(t) ? 1 : 0,
    u.kind === "dialogue" && ctx.speaker[i] === actor ? 1 : 0, units.length, beatIndex === 0 ? 1 : 0,
    u.kind === "action" && !/\b\w+(s|ed)\b/.test(t.split(/\s+/).slice(1).join(" ")) ? 1 : 0, /["“]/.test(t) ? 1 : 0,
  ];
}

const nameOf = (ctx, c) => {
  const n = ctx.cast.chars[c]?.name || "";
  // "COACH TOBIAS REEVE" -> "Coach Tobias Reeve"
  return n.toLowerCase().replace(/(^|[\s'-])([a-z])/g, (m, a, b) => a + b.toUpperCase());
};
const joinNames = (xs) => (xs.length <= 1 ? xs[0] || "" : xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1]);

function trim(t, max = 18) {
  t = t.replace(/\s*\([^)]*\)\s*/g, " ").replace(/\s+/g, " ").trim();
  const w = t.split(" ");
  if (w.length <= max) return t;
  // cut at a clause boundary after a few words
  for (let k = 6; k < Math.min(w.length, max + 4); k++) {
    if (/[,;:—–]$/.test(w[k - 1]) || /^(as|while|before|after|until|because|and then|then)$/i.test(w[k])) return w.slice(0, k).join(" ").replace(/[,;:—–]$/, "") + ".";
  }
  return w.slice(0, max).join(" ").replace(/[,;:—–]$/, "") + "…";
}

// One outline sentence for the line: action lines with the subject pronoun replaced by the actor's name(s), dialogue as
// "Name: “line”" (or "Name to Target: …" when the addressee is known).
export function keySentence(ctx, i, result) {
  const u = ctx.units[i], l = result.lines[i] || {};
  if (u.kind === "dialogue") {
    const sp = ctx.speaker[i], to = (l.to || []).filter((c) => c >= 0 && c !== sp);
    const who = sp >= 0 ? nameOf(ctx, sp) : u.name;
    return `${who}${to.length ? " to " + joinNames(to.map((c) => nameOf(ctx, c))) : ""}: “${trim(u.text, 14).replace(/[.…]$/, "")}”`;
  }
  let t = trim(u.text);
  const who = (l.who || []).filter((c) => c >= 0);
  if (who.length) {
    const names = joinNames(who.map((c) => nameOf(ctx, c)));
    t = t.replace(/^(?:(then|now|still|yet|but|and),?\s+)?(he|she|they)\b/i, (m, a) => (a ? a[0].toUpperCase() + a.slice(1) + " " : "") + names);
    // CAPS introductions read better in normal case
    t = t.replace(/\b[A-Z][A-Z'’.-]{2,}(?:\s+[A-Z][A-Z'’.-]{2,})*\b/g, (m) => (/^(INT|EXT|CUT|POV|TV|ID|OK|FBI|CIA|USA|UK|NYPD)$/.test(m) ? m : m.toLowerCase().replace(/(^|\s)([a-z])/g, (x, a, b) => a + b.toUpperCase())));
  }
  return t ? t[0].toUpperCase() + t.slice(1) : "";
}

// Summary of a beat: the top-scored line, plus the top line of the other kind when it scores close (a beat that is a
// gesture and a line of dialogue gets both).
export function summarizeBeat(ctx, units, result, beatIndex, model, predict) {
  const scored = units.map((i) => [predict(model, keyFeatures(ctx, i, units, result, beatIndex)), i]).sort((a, b) => b[0] - a[0]);
  if (!scored.length) return { key: -1, text: "" };
  const [s0, k0] = scored[0];
  const other = scored.find(([, i]) => ctx.units[i].kind !== ctx.units[k0].kind);
  const parts = [keySentence(ctx, k0, result)];
  if (other && other[0] > 0.6 * s0) parts.push(keySentence(ctx, other[1], result));
  const order = other && other[0] > 0.6 * s0 && other[1] < k0 ? parts.reverse() : parts;
  return { key: k0, text: order.join(" ") };
}
