// Descriptions: beat summaries, place / atmosphere, character role + traits. Closed vocabularies only:
// small classifiers pick labels, templates assemble short text. Nothing is generated freely and nothing is
// written into the screenplay.
import { tensionFeatures } from "./rules.js";
import { lexCount, count, NEGATION, IMPERATIVE } from "./lexicon.js";

export const BEAT_TYPES = ["arrives", "leaves", "confronts", "accuses", "threatens", "attacks", "defends", "flees", "hides",
  "searches", "discovers", "reveals", "confesses", "lies", "deflects", "persuades", "pleads", "comforts", "bonds", "jokes",
  "mocks", "decides", "observes", "works"];
export const PLACES = ["home", "workplace", "street", "vehicle", "nature", "bar_restaurant", "shop", "institution",
  "industrial", "venue", "transit", "other"];
export const ATMOS = ["calm", "tense", "eerie", "chaotic", "intimate", "festive", "bleak", "claustrophobic", "cozy",
  "sterile", "gritty", "dreamy"];
export const ROLES = ["drives", "opposes", "ally", "authority", "vulnerable", "observer", "comic", "mediator"];
export const TRAITS = ["nervous", "confident", "angry", "warm", "cold", "playful", "sarcastic", "secretive", "curious",
  "desperate", "calm", "authoritative", "vulnerable", "defiant", "manipulative", "kind", "weary", "impulsive", "cautious",
  "arrogant", "sad", "hopeful", "frightened", "determined"];

// Word-start stems that signal each beat type.
const BEAT_LEX = {
  arrives: "enter arriv walks in comes in steps in bursts in appear return",
  leaves: "leav exit walks out storms out gone goodbye bye heads out door slams",
  confronts: "why did you what did you you knew face stand up demand how could",
  accuses: "you did you lied your fault blame accus admit it it was you",
  threatens: "or else i'll kill i will hurt don't make me last warning gun knife if you",
  attacks: "punch hit strike shove grab slam stab shoot lunge tackle swing",
  defends: "i didn't not my fault i had to protect shield block wasn't me",
  flees: "run flee bolt escape scramble sprint get out race away",
  hides: "hide duck crouch behind shadows conceal pocket slips it",
  searches: "search look for rummag dig through scan check where is find",
  discovers: "find found notice spot see realiz discover open reveal",
  reveals: "truth actually the reason i'm your secret it was never told",
  confesses: "i'm sorry i did it confess admit forgive i was the one",
  lies: "fine nothing i was just never seen don't know what you",
  deflects: "anyway whatever doesn't matter changes the subject shrug later not now",
  persuades: "listen trust me think about you need we could imagine please just",
  pleads: "please beg don't i'm begging help me let me need you",
  comforts: "it's okay it's alright hug hold i'm here shh don't cry gentle",
  bonds: "remember us together laugh share friend thank love you",
  jokes: "joke laugh grin kidding funny ha wink tease",
  mocks: "oh really sure genius pathetic smirk sneer cute little",
  decides: "decide i'll do it we go now tonight enough deal fine let's",
  observes: "watch stare look at gaze observe listen peer",
  works: "type cook clean fix sort stack pour drive work file write",
};
const BEAT_RE = Object.fromEntries(Object.entries(BEAT_LEX).map(([k, v]) => [k,
  new RegExp(`(?:^|[^a-z'])(?:${v.split(" ").map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi")]));

const PLACE_LEX = {
  home: "kitchen bedroom living room apartment house home flat bathroom attic basement porch garage nursery",
  workplace: "office newsroom studio lab precinct cubicle conference boardroom workshop",
  street: "street alley sidewalk road corner square avenue rooftop bridge parking",
  vehicle: "car truck van bus cab taxi cockpit boat ship train car interior helicopter",
  nature: "forest woods field beach lake river mountain desert cliff garden park meadow shore",
  bar_restaurant: "bar diner restaurant cafe pub tavern kitchen counter booth saloon",
  shop: "shop store market pharmacy bakery bookstore pawn grocery boutique",
  institution: "hospital school court courtroom church police station prison jail library museum clinic",
  industrial: "warehouse factory dock plant mill mine depot hangar",
  venue: "theater theatre stadium arena club ballroom stage gym casino hall",
  transit: "airport station platform terminal subway port lobby",
  other: "",
};
const ATMOS_LEX = {
  calm: "quiet still soft gentle slow peace", tense: "silence stare freeze tight sweat clock",
  eerie: "fog shadow flicker cold whisper empty dark", chaotic: "crash shout chaos crowd run scream",
  intimate: "close whisper touch hand bed candle", festive: "music party dance laugh lights cheers",
  bleak: "grey gray rain broken empty ash", claustrophobic: "cramped narrow tiny locked trapped closet",
  cozy: "warm fire tea blanket soft lamp", sterile: "white fluorescent clean steel clinical",
  gritty: "dirty grime rust smoke stain trash", dreamy: "glow haze float dream mist shimmer",
};
const lexRe = (s) => new RegExp(`(?:^|[^a-z])(?:${s.split(" ").filter(Boolean).join("|")})`, "gi");
const PLACE_RE = Object.fromEntries(Object.entries(PLACE_LEX).map(([k, v]) => [k, v ? lexRe(v) : null]));
const ATMOS_RE = Object.fromEntries(Object.entries(ATMOS_LEX).map(([k, v]) => [k, lexRe(v)]));
const hits = (re, t) => (re ? (t.match(re) || []).length : 0);
const words = (t) => (t.match(/[A-Za-z']+/g) || []).length;

const unitText = (u) => (u.kind === "dialogue" ? u.text + " " + (u.paren || []).join(" ") : u.text);

// ---------- beat type ----------
export function beatTypeFeatures(ctx, beatUnits, result) {
  const text = beatUnits.map((i) => unitText(ctx.units[i])).join(" ");
  const W = Math.max(1, words(text));
  const lex = BEAT_TYPES.map((k) => hits(BEAT_RE[k], text) / W * 100);
  const n = beatUnits.length || 1;
  const dlg = beatUnits.filter((i) => ctx.units[i].kind === "dialogue").length / n;
  const speakers = new Set(beatUnits.map((i) => ctx.speaker[i]).filter((s) => s >= 0)).size;
  const actors = new Set(beatUnits.flatMap((i) => result?.lines?.[i]?.who || [])).size;
  const q = count(/\?/g, text) / n, ex = count(/!/g, text) / n, neg = count(NEGATION, text) / n;
  const imp = beatUnits.filter((i) => IMPERATIVE.test(ctx.units[i].text)).length / n;
  const emo = ["joy", "sadness", "anger", "fear", "surprise", "disgust", "affection"].map((e) => lexCount(text, e) / W * 100);
  const first = beatUnits[0], intro = ctx.cast.chars.some((c) => c.first >= first && c.first <= beatUnits[beatUnits.length - 1]);
  return [...lex, dlg, speakers, actors, q, ex, neg, imp, ...emo, intro ? 1 : 0, Math.log1p(n), ...tensionFeatures(ctx, beatUnits)];
}

// ---------- scene: place + atmosphere ----------
export function sceneFeatures(ctx, scene, result) {
  const h = (scene.heading || "").toLowerCase();
  const body = ctx.content.filter((i) => ctx.units[i].kind === "action").map((i) => ctx.units[i].text).join(" ").toLowerCase();
  const W = Math.max(1, words(body));
  const place = PLACES.map((k) => hits(PLACE_RE[k], h) * 3 + hits(PLACE_RE[k], body) / W * 100);
  const atmos = ATMOS.map((k) => hits(ATMOS_RE[k], body) / W * 100);
  const ie = /^(int\.?\/ext|i\/e)/.test(h) ? 2 : /^ext/.test(h) ? 1 : 0;
  const night = /night|dusk|evening|dark/.test(h) ? 1 : /dawn|morning|day|noon/.test(h) ? 0 : 0.5;
  const t = result?.tension || [];
  const mean = t.length ? t.reduce((a, b) => a + b, 0) / t.length : 0, peak = t.length ? Math.max(...t) : 0;
  const emo = {};
  for (const l of Object.values(result?.lines || {})) if (l.emo && l.emo[0] !== "neutral") emo[l.emo[0]] = (emo[l.emo[0]] || 0) + l.emo[1];
  const nl = Math.max(1, ctx.content.length);
  const emoF = ["joy", "sadness", "anger", "fear", "surprise", "disgust", "affection"].map((e) => (emo[e] || 0) / nl);
  return [...place, ...atmos, ie, night, mean, peak, ctx.cast.chars.length, Math.log1p(nl), ...emoF];
}

// ---------- characters: role + traits ----------
export function charFeatures(ctx, c, result) {
  const mine = ctx.content.filter((i) => ctx.speaker[i] === c);
  const acts = ctx.content.filter((i) => (result?.lines?.[i]?.who || []).includes(c));
  const nl = Math.max(1, ctx.content.length);
  const said = mine.map((i) => unitText(ctx.units[i])).join(" ");
  const done = acts.map((i) => ctx.units[i].text).join(" ");
  const W = Math.max(1, words(said)), Wd = Math.max(1, words(done));
  const em = {};
  for (const i of [...mine, ...acts]) { const e = result?.lines?.[i]?.emo; if (e) em[e[0]] = (em[e[0]] || 0) + e[1]; }
  const tot = Math.max(1, mine.length + acts.length);
  const emoF = ["neutral", "joy", "sadness", "anger", "fear", "surprise", "disgust", "affection"].map((e) => (em[e] || 0) / tot);
  const lexS = ["joy", "sadness", "anger", "fear", "affection", "threat", "conflict", "calm", "urgency"].map((k) => lexCount(said, k) / W * 100);
  const lexD = ["anger", "fear", "affection", "threat"].map((k) => lexCount(done, k) / Wd * 100);
  const named = ctx.content.filter((i) => ctx.cast.mentions[i].some((m) => m.c === c)).length;
  const ch = ctx.cast.chars[c];
  return [mine.length / nl, acts.length / nl, named / nl, ch.first / nl, ch.spoke,
    count(/\?/g, said) / Math.max(1, mine.length), count(/!/g, said) / Math.max(1, mine.length),
    count(NEGATION, said) / W * 100, mine.filter((i) => IMPERATIVE.test(ctx.units[i].text)).length / Math.max(1, mine.length),
    words(said) / Math.max(1, mine.length), count(/\b(I|me|my)\b/g, said) / W * 100, count(/\byou\b/gi, said) / W * 100,
    ...emoF, ...lexS, ...lexD, ctx.cast.chars.length, ch.gender === "f" ? 1 : ch.gender === "m" ? -1 : 0];
}

// ---------- templates ----------
const VERB = {
  arrives: "arrives", leaves: "leaves", confronts: "confronts {t}", accuses: "accuses {t}", threatens: "threatens {t}",
  attacks: "attacks {t}", defends: "defends against {t}", flees: "flees", hides: "hides", searches: "searches",
  discovers: "discovers something", reveals: "reveals something to {t}", confesses: "confesses to {t}", lies: "lies to {t}",
  deflects: "deflects {t}", persuades: "tries to persuade {t}", pleads: "pleads with {t}", comforts: "comforts {t}",
  bonds: "bonds with {t}", jokes: "jokes with {t}", mocks: "mocks {t}", decides: "makes a decision",
  observes: "watches {t}", works: "is busy",
};
const ROLE_TEXT = { drives: "drives the scene", opposes: "pushes back", ally: "ally", authority: "in authority",
  vulnerable: "vulnerable", observer: "on the sidelines", comic: "comic relief", mediator: "mediates" };
const PLACE_TEXT = { home: "home", workplace: "workplace", street: "street", vehicle: "vehicle", nature: "outdoors",
  bar_restaurant: "bar / restaurant", shop: "shop", institution: "institution", industrial: "industrial",
  venue: "venue", transit: "transit", other: "" };
const nice = (n) => n.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase());

export function beatSummary(type, actorName, targetName, tensionDelta, mood) {
  let v = VERB[type] || type;
  v = targetName ? v.replace("{t}", nice(targetName)) : v.replace(/ (to|with|against)? ?\{t\}/, "").replace(" {t}", "");
  const who = actorName ? nice(actorName) : "";
  const arrow = tensionDelta > 0.08 ? "tension ↑" : tensionDelta < -0.08 ? "tension ↓" : "";
  return [who ? `${who} ${v}` : v[0].toUpperCase() + v.slice(1), arrow, mood && mood[0] !== "neutral" ? mood[0] : ""].filter(Boolean).join(" · ");
}

export function placeText(heading, place, atmos) {
  const h = (heading || "").toUpperCase();
  const io = /^(INT\.?\/EXT|I\/E)/.test(h) ? "Interior/exterior" : /^EXT/.test(h) ? "Exterior" : "Interior";
  const time = (h.split(/\s+-\s+/).pop() || "").trim();
  const t = /NIGHT|DUSK|EVENING/.test(time) ? "night" : /DAY|MORNING|NOON|DAWN|AFTERNOON/.test(time) ? "day" : "";
  return [`${io}${t ? ", " + t : ""}`, PLACE_TEXT[place], atmos.join(", ")].filter(Boolean).join(" · ");
}

export function characterText(name, role, traits) {
  return `${nice(name)}: ${[ROLE_TEXT[role], traits.join(", ")].filter(Boolean).join(" · ")}`;
}
