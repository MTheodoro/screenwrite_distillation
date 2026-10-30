// Character registry, mentions, pronouns and presence for one scene.

const TITLES = new Set(["MR", "MRS", "MS", "MISS", "DR", "DET", "DETECTIVE", "OFFICER", "SGT", "SERGEANT", "CAPT",
  "CAPTAIN", "LT", "LIEUTENANT", "AGENT", "PROF", "PROFESSOR", "REV", "FATHER", "SISTER", "AUNT", "UNCLE", "SIR",
  "LADY", "LORD", "YOUNG", "OLD", "LITTLE", "BIG", "MAJOR", "COL", "GENERAL", "GEN", "DOC", "NURSE", "JUDGE", "COACH",
  // role titles that precede a name ("DOCTOR MIRIAM BELLAMY", "COMMANDER ODALYS", "TECH SANTIAGO"): not first names
  "DOCTOR", "COMMANDER", "TECH", "TECHNICIAN", "ARBITRATOR", "ATTORNEY", "LAWYER", "CLIENT", "SKIP", "SHERIFF", "DEPUTY", "MARSHAL",
  "CHIEF", "INSPECTOR", "CONSTABLE", "PRIVATE", "CORPORAL", "ADMIRAL", "COLONEL", "REVEREND", "PASTOR", "RABBI", "BISHOP", "DEACON",
  "BROTHER", "MOTHER", "GRANDMA", "GRANDPA", "GRANDMOTHER", "GRANDFATHER", "MADAME", "MADAM", "SENATOR", "GOVERNOR", "PRESIDENT",
  "MAYOR", "PRINCESS", "PRINCE", "QUEEN", "KING", "DUKE", "DUCHESS", "BARON", "COUNTESS", "WARDEN", "FOREMAN", "LANDLORD",
  "TENANT", "ENSIGN", "CADET", "AGENT", "SPECIALIST", "ENGINEER", "PILOT", "CAPTAIN", "SISTER", "FATHER", "UNCLE", "AUNT", "COUSIN"]);
const NOT_NAMES = new Set(["V.O.", "O.S.", "O.C.", "CONT'D", "CONTINUOUS", "LATER", "MOMENTS", "POV", "CLOSE", "ON",
  "ANGLE", "BACK", "TO", "SCENE", "INSERT", "SUPER", "TITLE", "CUT", "FADE", "IN", "OUT", "I", "A", "OK", "OKAY", "TV",
  "FBI", "CIA", "NYPD", "LAPD", "DNA", "GPS", "ID", "CEO", "USA", "US", "UK", "SOS", "SFX", "VFX", "MOS", "THE", "AND",
  "BANG", "BOOM", "CRASH", "SLAM", "THUD", "CRACK", "BEEP", "RING", "SNAP", "CLICK", "WHAM", "THWACK", "SMASH", "NO",
  "STOP", "END", "OF", "FLASHBACK", "PRESENT", "DAY", "NIGHT", "AM", "PM", "TBC", "INTERCUT", "WITH", "SERIES",
  "SHOTS", "MONTAGE", "BEGIN", "WIDE", "EXTREME", "AT", "ATM", "HQ", "ER", "ICU", "OR", "AI", "PA", "EMT", "DA",
  "NASA", "AK", "MRI", "CPR", "WWII", "II", "III", "IV", "RV", "SUV", "CB", "PC", "HVAC", "FM", "AM", "LED", "XL",
  "EXIT", "DANGER", "WARNING", "OPEN", "CLOSED", "POLICE", "HELP", "LIVE", "ON AIR"]);
const M = ["he", "him", "his", "himself"];
const F = ["she", "her", "hers", "herself"];
const P = ["they", "them", "their", "theirs", "themselves"];
const PRON_RE = /\b(he|him|his|himself|she|her|hers|herself|they|them|their|theirs|themselves)\b/gi;
const CAPS_SEQ = /\b([A-Z][A-Z0-9'’\-.]*[A-Z0-9]|[A-Z]{2,})(?:\s+(?:[A-Z][A-Z0-9'’\-.]*[A-Z0-9]|[A-Z]{2,}))*\b/g;

export function pronounClass(w) {
  w = w.toLowerCase();
  if (M.includes(w)) return "m";
  if (F.includes(w)) return "f";
  if (P.includes(w)) return "p";
  return null;
}

const keyCache = new Map();
export function keyTokens(name) {
  let k = keyCache.get(name);
  if (!k) {
    k = name.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((t) => t && !TITLES.has(t));
    if (keyCache.size > 5000) keyCache.clear();
    keyCache.set(name, k);
  }
  return k;
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

export function sameChar(a, b) {
  const ka = keyTokens(a), kb = keyTokens(b);
  if (!ka.length || !kb.length) return a === b;
  const [s, l] = ka.length <= kb.length ? [ka, kb] : [kb, ka];
  return s.every((t) => l.includes(t));
}

import NAME_GENDER from "./names.js";
import { VERBS3 } from "./verbs.js";


// Script-level key for a character (same person across scenes): name tokens without titles.
export function charKey(name) { return keyTokens(name).join(" "); }

// Collective / plural entities: act as one group character ("they", "all of them", "many of the people").
export const GROUP_NOUNS = new Set(("PROCESSION CROWD MOB ARMY GANG CREW FAMILY CHOIR TROOPS SOLDIERS GUARDS PEOPLE VILLAGERS " +
  "TOURISTS GUESTS STUDENTS PASSENGERS AUDIENCE CONGREGATION TRIBE BAND TEAM COUPLE TWINS WORKERS MEN WOMEN CHILDREN KIDS " +
  "POLICE COPS SQUAD PATROL PACK HERD FLOCK PILGRIMS MONKS NUNS SAILORS SETTLERS INDIANS PROTESTERS REPORTERS FANS " +
  "MOURNERS DANCERS RIDERS HUNTERS BANDITS PIRATES SLAVES PRISONERS NURSES DOCTORS OFFICERS AGENTS THUGS MEN-AT-ARMS").split(" "));
const FEMALE = /\b(girl|woman|mother|wife|daughter|sister|queen|nun|lady|actress|waitress|priestess|grandmother|grandma|aunt|bride|widow|maid|princess|she|her)\b/gi;
const MALE = /\b(boy|man|father|husband|son|brother|king|priest|monk|lord|actor|waiter|grandfather|grandpa|uncle|groom|widower|prince|he|his|him)\b/gi;
const PERSON_NOUN = /\b(?:a|an)\s+(?:[\w-]+\s+){0,4}?(girl|woman|boy|man|child|kid|teenager|teen|stranger|figure|priest|soldier|old man|old woman|lady|nun|monk|guard|nurse|doctor|officer|mother|father)\b/i;

// Caps intros in an action sentence: "MAYA OKAFOR (30s), wiry" -> ["MAYA OKAFOR"].
const NICK = /\b([A-Z][A-Z'’.-]*[A-Z])\s+["“]([A-Z][A-Z'’.-]*[A-Z])["”]\s+((?:[A-Z][A-Z'’.-]*[A-Z])(?:\s+[A-Z][A-Z'’.-]*[A-Z])*)/g;
export function capsNames(text, cueNames) {
  if (text === text.toUpperCase()) return []; // shouted / SFX-only sentence
  const out = [];
  const skip = [];
  if (!OFF_NICK) for (const m of text.matchAll(NICK)) { // BIANCA "BEE" CALLOWAY -> one name with the nickname inside
    out.push(`${m[1]} ${m[2]} ${m[3]}`);
    skip.push([m.index, m.index + m[0].length]);
  }
  for (const m of text.matchAll(CAPS_SEQ)) {
    if (skip.some(([a, b]) => m.index >= a && m.index < b)) continue;
    let n = m[0].replace(/['’]S$/, "").trim();
    const toks = n.split(/\s+/).filter((t) => !NOT_NAMES.has(t.replace(/[.,]$/, "")));
    if (!toks.length) continue;
    n = toks.join(" ");
    if (n.replace(/[^A-Z]/g, "").length < 2) continue;
    const after = text.slice(m.index + m[0].length, m.index + m[0].length + 3);
    const before = text.slice(Math.max(0, m.index - 5), m.index);
    if (/^(INSERT|ON|SUPER|TITLE|CHYRON|PHONE SCREEN|SCREEN|PHONE|TEXT|CLOSE|ANGLE|BACK|INTERCUT|MONTAGE|SERIES|POV|WIDE|LATER|CONTINUOUS)\b/.test(n)) continue;
    // CAPS sound cues: "The DOOR BANGS open", "a phone BUZZES"
    if (/\b(BANGS?|SLAMS?|BUZZ(ES)?|RINGS?|BEEPS?|CRASH(ES)?|BOOMS?|THUDS?|CLICKS?|CREAKS?|HISSES|SCREAMS?|SHATTERS?|RATTLES?|WHISTLES?|HONKS?|ROARS?|EXPLODES?|POPS?|SNAPS?|CRACKS?|THUMPS?|CLANGS?|CLATTERS?|BLARES?|WAILS?|SCREECH(ES)?|BURSTS?|DINGS?|CHIMES?|TINKLES?|SQUEALS?|KNOCKS?|BUZZING|RINGING|BEEPING|GASPS?)$/.test(n)) continue;
    // Signs, labels and on-screen text: "a sign reads STAFF ONLY", "stamped CANCELLED", "SUPER: ..."
    if (/\b(reads?|marked|labell?ed|stamped|printed|super|caption|letters|lettering|banner|sign|plaque|tag|label|engraved|scrawled|painted|spray-painted|embroidered)\b[^:]{0,24}:?\s*["“']?$/i.test(text.slice(Math.max(0, m.index - 40), m.index))) continue;
    const isCue = cueNames.some((c) => sameChar(c, n));
    // printed text: "banner: DRY CREEK LANES", a truck painted "BEANS & BRISKET" (an introduction after a colon keeps its paren)
    if (!OFF_PRINT && !isCue && (/["“]\s*$/.test(before) || (/:\s*$/.test(before) && !/^\s*[(,]/.test(after)))) continue;
    if (!isCue && !/\s/.test(n) && /^(INSIDE|OUTSIDE|UPSTAIRS|DOWNSTAIRS|MEANWHILE|SUDDENLY|LATER|EARLIER|NOW|THEN|HERE|THERE|TODAY|TONIGHT|TOMORROW|YESTERDAY|EVERYONE|NOBODY|SOMEBODY|EVERYTHING|NOTHING|SOMETHING|METAPHOR|SILENCE|DARKNESS|NIGHT|MORNING)$/.test(n)) continue;
    if (!isCue && /\b(TICKS?|TOCKS?|HUMS?|WHIRS?|DRIPS?|SPLASH(ES)?|FLASH(ES)?|FLICKERS?|LURCH(ES)?|JOLTS?|SHUDDERS?|THUNDERS?)$/.test(n)) continue;
    if (!isCue && /['’]S\b/.test(n) && n.split(/\s+/).length > 2) continue; // "WORLD'S OKAYEST GRANDMA" (printed text)
    const art = /\b(a|an|the|two|three)\s+$/i.test(before);
    if (!OFF_NOTPERSON && art && !isCue && /^(BOOT|BOOTS|FOOTSTEPS?|KNOCK|SOUND|NOISE|CRASH|BANG|THUD|THUNK|CLICK|CREAK|SIREN|HORN|BELL|PHONE|DOOR|LIGHT|LIGHTS|SHADOW|SPARK|FLASH|SCREAM|SHOT|GUNSHOT|BLAST|EXPLOSION|RUMBLE|ROAR|WHISTLE|BUZZ|BUZZER|ALARM|ENGINE|CAR|TRUCK|VAN|TRAIN|BUS|HELICOPTER|PLANE|DRONE|CAMERA|SCREEN|TV|RADIO|SPEAKER|TAPE|RECORD|CLOCK|WIND|WAVE|GUST|RAIN|THUNDER|LIGHTNING|SILENCE|PAUSE|BEAT|MOMENT|HAND|HANDS|FINGER|FINGERS|ARM|LEG|FOOT|HEAD|FACE|EYE|EYES|TAIL|PAW|WING|SIGN|BANNER|NOTE|LETTER|MESSAGE|TEXT|MAP|BOOK|BOX|BAG|KEY|KEYS|GUN|PISTOL|KNIFE|BLADE|ROPE|CHAIN|BOTTLE|GLASS|CUP|PLATE|FLAG|CURTAIN|TABLE|CHAIR|BED|WALL|FLOOR|WINDOW|GATE|FENCE|BRIDGE|BOAT|SHIP)$/.test(n)) continue;
    const nextWord = text.slice(m.index + m[0].length).match(/^\s+([a-z]+)\b/);
    const verbAfter = !OFF_CAPSVERB && m.index === 0 && nextWord && VERBS3.has(nextWord[1]) && !NOT_NAMES.has(n) && !/\s/.test(n) && n.length >= 3;
    if (isCue || /^\s*[(,—–-]/.test(after) || /^['’]S/.test(after) || art || verbAfter) out.push(art ? n + "\u0000" : n);
  }
  return out;
}

// Words that can stand before a name that still leads the sentence ("Cousin LEANDRO carries", "Old TOMASZ").
const CAM_PREFIX = /^(?:we see|we hear|we watch|we follow|we find|we're on|we are on|close on|closer on|angle on|insert[:\s-]+|reveal:?|cut to:?|back to:?|on)\s+(?:that\s+)?/i;
// "Perched on the shelf above the fryer sits SAM" / "In it sit PAT, ..." / "Behind them comes SASHA" -> the name leads
const INVERTED = /^(?:[A-Z][\w'’-]*(?:\s+[\w'’,-]+){0,9}?)\s+(?:sits?|stands?|leans?|waits?|sleeps?|lies|crouch(?:es)?|kneels?|hovers?|lurks?|comes?|enters?|appears?|steps?|walks?|hangs?|perch(?:es)?|rests?|lounges?|slumps?|squats?|sprawls?|stalks?|strides?|shuffles?|emerges?|stumbles?)\s+(?:a |an |the )?$/;
const DASH = /^[-–—*•]+\s*$/;
const FWD_CUE = !(globalThis.process?.env?.WHO_OFF || "").includes("fwdcue");
const OFF_ROLE = (globalThis.process?.env?.WHO_OFF || "").includes("role");
const OFF_NOTPERSON = (globalThis.process?.env?.WHO_OFF || "").includes("notperson");
const GENDERED_TITLE = { MR: "m", SIR: "m", LORD: "m", FATHER: "m", BROTHER: "m", UNCLE: "m", KING: "m", PRINCE: "m", DUKE: "m", MONSIEUR: "m", SENOR: "m", HERR: "m", GRANDPA: "m", GRANDFATHER: "m", DAD: "m", PAPA: "m",
  MRS: "f", MS: "f", MISS: "f", LADY: "f", MADAM: "f", MADAME: "f", DAME: "f", MOTHER: "f", SISTER: "f", AUNT: "f", AUNTIE: "f", QUEEN: "f", PRINCESS: "f", DUCHESS: "f", MADEMOISELLE: "f", SENORA: "f", FRAU: "f", GRANDMA: "f", GRANDMOTHER: "f", MOM: "f", MUM: "f", MAMA: "f", NUN: "f", WAITRESS: "f", ACTRESS: "f" };
// "catches her wrist" / "grabs his arm": the body part is someone else's
// "sits with her back against a trunk": "back" is a body part here, not an adverb
const BODY_LITE = /^(?:back|hands?|face|eyes?|hair|arms?|legs?|shoulders?|knees?|feet|head|lap|chest|neck|cheeks?|lips|mouth|fingers?|jaw|brow|hips?|waist|skin|nose|throat|teeth|wrists?|palms?|elbows?|ankles?|heels?|thumbs?|forehead|temples?|chin|spine|ribs)\b/;
const CONTACT_V = /\b(?:grabs?|grips?|takes?|touch(?:es)?|holds?|catch(?:es)?|kiss(?:es)?|slaps?|strokes?|squeez(?:es)?|pulls?|shakes?|brushes|pats?|lifts?|cups?|seiz(?:es)?|clutch(?:es)?|wipes?|pins?|releases?|steadies|guides?|drags?|yanks?|tugs?|checks?|feels?|presses|taps?|punches|kicks?|bites?|licks?|strikes?|hits?|covers?|shields?|binds?|ties|bandages?|cleans?|washes|dries|kisses|caresses|cradles?|lowers?|raises?|examines?|inspects?|studies|reads?|watch(?:es)?|follows?|ignores?|eyes|searches|frisks?|dresses|undresses|wraps?)\s+(?:[a-z]+\s+)?$/i;
const RELATION = /^(?:apprentice|assistant|wife|husband|partner|boyfriend|girlfriend|fiancé|fiancée|fiance|brother|sister|son|daughter|mother|father|boss|client|lawyer|attorney|nurse|doctor|driver|bodyguard|secretary|aide|deputy|second|protégé|protege|student|teacher|mentor|coach|agent|manager|publicist|roommate|neighbou?r|friend|colleague|rival|ex|ex-wife|ex-husband|grandmother|grandfather|aunt|uncle|cousin|niece|nephew|guest|date|companion|counterpart|opposite number|older brother|younger brother|older sister|younger sister|little brother|little sister|big brother|big sister|best friend|old friend|new partner|new assistant|new boss|dealer|handler|contact|source|informant|patient|passenger|fare|charge|ward|shadow|understudy|successor|predecessor|co-pilot|copilot|first mate|navigator|gunner|translator|interpreter|guide|escort|chaperone|tutor|pupil|master|servant|maid|valet|butler|cook|gardener|chauffeur|nanny|governess|employer|employee|intern|trainee|recruit|sergeant|lieutenant|captain|commander|superior|subordinate|opponent|challenger|teammate|co-star|costar|producer|director|editor|publisher|accountant|banker|broker|landlord|landlady|tenant|lodger|host|hostess|accomplice|lookout|getaway driver|wheelman|fence|lawyer)\b/i;
const GDEBUG = !!globalThis.process?.env?.GDEBUG;
const OFF_ALIASADJ = (globalThis.process?.env?.WHO_OFF || "").includes("aliasadj");
const OFF_FWDNOUN25 = (globalThis.process?.env?.WHO_OFF || "").includes("fwd25");
const OFF_FWDNOUN = (globalThis.process?.env?.WHO_OFF || "").includes("fwdnoun");
const OFF_CPOSS = (globalThis.process?.env?.WHO_OFF || "").includes("cposs");
const OFF_GALIAS = (globalThis.process?.env?.WHO_OFF || "").includes("galias");
const OFF_MERGEINTRO = !(globalThis.process?.env?.WHO_ON || "").includes("mergeintro"); // measured neutral/negative: opt-in
const OFF_CAPSVERB = !(globalThis.process?.env?.WHO_ON || "").includes("capsverb"); // measured neutral/negative: opt-in
const OFF_NICK = (globalThis.process?.env?.WHO_ON || "").includes("nonick");
const OFF_PRINT = (globalThis.process?.env?.WHO_OFF || "").includes("print");
const OFF_FWDG = (globalThis.process?.env?.WHO_OFF || "").includes("fwdg");
const OFF_GTIER = (globalThis.process?.env?.WHO_OFF || "").includes("gtier"); // gender evidence tiers + consistency pass
const GT = (k) => OFF_GTIER || (globalThis.process?.env?.WHO_OFF || "").includes("gt_" + k) ||
  (k === "contact" && !(globalThis.process?.env?.WHO_ON || "").includes("gt_contact")) || // contact verbs: neutral gold, -0.1 dev, opt-in
  (k === "tier" && !(globalThis.process?.env?.WHO_ON || "").includes("gt_tier")) || // tiered weighting: measured -0.7 on both golds, opt-in
  (k === "cons" && !(globalThis.process?.env?.WHO_ON || "").includes("gt_cons")); // consistency pass: +0.1 gold, -0.2 dev, opt-in
const LEAD_TITLE = /^(?:(?:then|now|and|but|meanwhile|suddenly|finally|cousin|aunt|auntie|uncle|grandma|grandpa|granny|nana|old|young|little|big|baby|father|mother|brother|sister|mr|mrs|ms|miss|dr|doctor|officer|detective|det|captain|capt|sergeant|sgt|private|pvt|corporal|cpl|lieutenant|lt|agent|nurse|judge|lady|lord|sir|madam|professor|prof|chef|coach|pastor|reverend|rev|saint|st|king|queen|prince|princess)\.?,?\s+){1,2}$/i;

// Build cast + per-unit annotations. Mutates nothing; returns { chars, mentions, pronouns, firstSeen }.
export function buildCast(scene) {
  const units = scene.units;
  const cueNames = units.filter((u) => u.kind === "dialogue").map((u) => u.name);
  const chars = [];
  const find = (name) => chars.find((c) => c.names.some((n) => sameChar(n, name)));
  const add = (name, ui, how) => {
    let c = find(name);
    if (!c) {
      c = { id: chars.length, name, names: [name], first: ui, intro: how === "intro" ? ui : -1, spoke: 0, g: { m: 0, f: 0, p: 0 }, gs: { m: 0, f: 0 } };
      chars.push(c);
    } else if (!c.names.includes(name)) c.names.push(name);
    if (how === "intro" && c.intro < 0) c.intro = ui;
    if (how === "cue") c.spoke++;
    return c;
  };
  // Characters known from the rest of the script (filled by the service) count like cue names here, and are picked up
  // when mentioned by name ("ZORGABITCH and BRUNO...", "Zorgabitch smiles.").
  // Entries are names or { name, aliases } (the app's character tags).
  const known = (scene.knownNames || []).map((k) => (typeof k === "string" ? { name: k, aliases: [] } : { aliases: [], ...k }));
  cueNames.push(...known.flatMap((k) => [k.name, ...k.aliases]));
  const knownRes = known.map((k) => {
    const toks = [...new Set([k.name, ...k.aliases].flatMap(keyTokens))].filter((t) => t.length > 1 && !/^(THE|AN?|OF)$/.test(t));
    // Case-sensitive: Name or NAME (a lowercase "grace" / "will" is a word, not the character).
    return toks.length ? new RegExp(`\\b(?:${toks.map((t) => escapeRe(t[0] + t.slice(1).toLowerCase()) + "|" + escapeRe(t)).join("|")})\\b`) : null;
  });
  for (const u of units) {
    if (u.kind === "action") known.forEach((k, j) => {
      if (!knownRes[j] || !knownRes[j].test(u.text)) return;
      const c = add(k.name, u.i, "known");
      c.tagName = k.name;
      for (const a of k.aliases) if (!c.names.includes(a)) c.names.push(a);
    });
  }
  for (const u of units) {
    if (u.kind === "dialogue") add(u.name, u.i, "cue");
    else if (u.kind === "action") for (let n of capsNames(u.text, cueNames)) {
      const common = n.endsWith("\u0000");
      n = n.replace("\u0000", "");
      const c = add(n, u.i, "intro");
      if (common && keyTokens(n).length === 1) c.common = true;
      if (keyTokens(n).some((t) => GROUP_NOUNS.has(t))) c.group = true;
    }
  }
  // Named later: a descriptive character ("HOODIE GUY", "THE WOMAN", "STRANGER") who is last seen right where a newly
  // named character first appears, and never alongside them, is that character ("HOODIE GUY: Priya. It's me." /
  // "Desmond?" / "DESMOND: Two years."). Merged before ids are used anywhere.
  const DESCR = /\b(GUY|MAN|WOMAN|GIRL|BOY|KID|LADY|STRANGER|FIGURE|VOICE|PERSON|DRIVER|HOODED|MASKED|TEEN|TEENAGER|OLD|YOUNG|TALL|SHORT)\b|^(THE|A|AN) /;
  const seen = (c) => {
    const re = new RegExp(`\\b(?:${[...new Set(c.names.flatMap(keyTokens))].filter((t) => t.length > 1).map(escapeRe).join("|")})\\b`);
    const at = units.filter((u) => (u.kind === "dialogue" && c.names.some((n) => sameChar(n, u.name))) || (u.kind === "action" && re.test(u.text))).map((u) => u.i);
    return at.length ? [at[0], at[at.length - 1]] : [c.first, c.first];
  };
  for (let a = 0; a < chars.length; a++) {
    const d = chars[a];
    if (!d || d.tagName || !DESCR.test(d.names[0]) || !d.spoke) continue;
    const [, dLast] = seen(d);
    // the new name must be spoken or shown right at the hand-over ("Desmond?") and the newcomer is not introduced
    // with a description of their own (that would be a different person entering)
    // ... or the description introduces themself in dialogue ("I'm Hannah by the way." / "Call me Rook.")
    const said = units.filter((x) => x.kind === "dialogue" && d.names.some((n) => sameChar(n, x.name)))
      .map((x) => (x.text.match(/\b(?:I'?m|I am|my name'?s|my name is|call me|name's)\s+([A-Z][a-z]+)/i) || [])[1]).find(Boolean);
    const plainIntro = (c) => c.intro >= 0 && !OFF_MERGEINTRO && !new RegExp(`\\b${escapeRe(keyTokens(c.names[0])[0] || c.names[0])}\\b[^.]{0,40}?(?:\\(|,\\s*(?:\\d|early|mid|late|a |an |the |teen))`, "i").test(units[c.intro].text);
    const named = chars.find((c) => c && c !== d && !DESCR.test(c.names[0]) && c.first > d.first && (c.intro < 0 || plainIntro(c)) &&
      seen(c)[0] >= dLast && seen(c)[0] - dLast <= 3) ||
      (said && chars.find((c) => c && c !== d && !DESCR.test(c.names[0]) && keyTokens(c.name).includes(said.toUpperCase())));
    if (!named) continue;
    named.names.push(...d.names);
    named.first = d.first;
    if (d.intro >= 0 && (named.intro < 0 || d.intro < named.intro)) named.intro = d.intro;
    named.spoke += d.spoke;
    chars[a] = null;
  }
  for (let k = chars.length - 1; k >= 0; k--) if (!chars[k]) chars.splice(k, 1);
  chars.forEach((c, k) => { c.id = k; });
  // "SAGE, 20s, they/them, buzz cut" -> a character who goes by they; "Two TEENAGERS in school jackets" -> a group.
  for (const c of chars) {
    const at = c.intro >= 0 ? c.intro : c.first;
    const u = units[at];
    if (!u || u.kind !== "action") continue;
    const re = new RegExp(`\\b${escapeRe(keyTokens(c.name)[0] || c.name)}\\b[^.]{0,60}?\\bthey\\s*/\\s*them\\b`, "i");
    if (units.some((x) => x.kind === "action" && re.test(x.text))) c.they = true;
    if (re.test(u.text)) c.they = true;
    const key = keyTokens(c.name).filter((x) => !/^(THE|A|AN)$/.test(x));
    if (!c.group && key.length === 1 && /S$/.test(key[0]) && !/SS$/.test(key[0]) && !NAME_GENDER[key[0]] &&
        new RegExp(`\\b(?:two|three|four|five|six|several|a few|a group of|a dozen|some|\\d+)\\s+(?:[a-z-]+\\s+){0,2}${escapeRe(key[0])}\\b`, "i").test(u.text)) c.group = true;
  }
  if (!OFF_GALIAS) for (const c of chars) {
    if (!c.group || c.intro < 0) continue;
    const own = new Set(keyTokens(c.name).map((x) => x.toLowerCase()));
    const gm = [...units[c.intro].text.matchAll(/\b(?:two|three|four|five|twin|the|a pair of|a couple of)\s+(?:[a-z-]+\s+)?(boys|girls|men|women|kids|children|brothers|sisters|teenagers|teens|guards|soldiers|cops|officers|nurses|twins|students)\b/gi)]
      .map((m) => m[1].toLowerCase()).find((n) => !own.has(n));
    if (gm && chars.every((o) => o === c || (o.alias !== gm && o.alias2 !== gm))) c.alias2 = gm;
  }
  // Introduced before being named: "A teenage girl ... This is UATAKI." -> the description sentence belongs to UATAKI
  // and "the girl" becomes an alias.
  const acts = units.filter((u) => u.kind === "action");
  acts.forEach((u, k) => {
    const pm = u.text.match(PERSON_NOUN);
    if (!pm || capsNames(u.text, cueNames).length) return;
    if (!OFF_FWDG && /^(?:he|she|they)\b/i.test(u.text)) return; // "He answers and the voice is a man's" describes what he hears
    const ng = /^(?:girl|woman|old woman|lady|nun|mother)$/i.test(pm[1]) ? "f" : /^(?:boy|man|old man|priest|monk|father)$/i.test(pm[1]) ? "m" : null;
    const fits = (c) => OFF_FWDG || !ng || !c.names.some((nm) => { const t = nm.toUpperCase().replace(/[.,]/g, "").split(/\s+/)[0]; const g = GENDERED_TITLE[t] || (NAME_GENDER[t] === "m" || NAME_GENDER[t] === "f" ? NAME_GENDER[t] : null); return g && g !== ng; });
    let done = false;
    for (const v of acts.slice(k + 1, k + 3)) {
      const named = chars.find((c) => c.first === v.i || c.intro === v.i);
      if (named && !named.group && fits(named)) { named.fwd = u.i; named.alias = pm[1].toLowerCase(); if (named.first > u.i) named.first = u.i; done = true; break; }
    }
    // "A figure in a pale dress stands there. / DJ: Hello." -> the first brand-new speaker within a few units
    if (!done && FWD_CUE) {
      for (let j = u.i + 1; j <= Math.min(units.length - 1, u.i + 4); j++) {
        const w = units[j];
        if (w.kind === "action" && capsNames(w.text, cueNames).length) break;
        if (w.kind !== "dialogue") continue;
        const sp = chars.find((c) => c.names.some((n) => sameChar(n, w.name)));
        if (GDEBUG) console.error(`FWD? ${u.text.slice(0, 50)} -> ${w.name}: sp=${!!sp} first=${sp && sp.first}/${j} alias=${sp && sp.alias} intro=${sp && sp.intro} fits=${sp && fits(sp)}`);
        if (sp && !fits(sp)) continue; // "A woman stands in the doorway. / HOLLIS: ..." -> keep looking for the woman
        if (sp && !sp.group && sp.first === j && !sp.alias && sp.intro < 0) { sp.fwd = u.i; sp.alias = pm[1].toLowerCase(); sp.first = u.i; }
        break;
      }
    }
  });
  if (!OFF_FWDNOUN) for (const c of chars) {
    if (c.intro >= 0 || c.fwd !== undefined || c.group || !c.spoke) continue;
    const toks = c.names[0].toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => !/^(THE|A|AN)$/.test(x));
    if (!toks.length || toks.length > 2 || !toks.every((x) => !NAME_GENDER[x]) || !/^(?:MAN|WOMAN|GIRL|BOY|KID|LADY|STRANGER|FIGURE|GUY|TEEN|TEENAGER|DRIVER|NURSE|OFFICER|GUARD|WAITER|WAITRESS|DOCTOR|PRIEST|SOLDIER|CLERK|COP|CALLER|OPERATOR|PATIENT|CUSTOMER|PASSENGER|VISITOR|NEWCOMER|TEENAGE BOY|TEENAGE GIRL|OLD MAN|OLD WOMAN|YOUNG MAN|YOUNG WOMAN|TALL MAN|SHORT MAN|LITTLE GIRL|LITTLE BOY)$/.test(toks.join(" "))) continue;
    const noun = toks.join(" ").toLowerCase();
    const re = new RegExp(`\\b(?:a|an)\\s+(?:[a-z-]+\\s+){0,3}?${escapeRe(noun)}\\b`, "i");
    const firstCue = units.findIndex((u) => u.kind === "dialogue" && c.names.some((n) => sameChar(n, u.name)));
    for (let j = Math.max(0, firstCue - (OFF_FWDNOUN25 ? 12 : 25)); j < firstCue; j++) {
      const u = units[j];
      if (u.kind !== "action" || !re.test(u.text) || capsNames(u.text, cueNames).length || chars.some((o) => o.fwd === j)) continue;
      if (/^(?:he|she|they)\b/i.test(u.text)) continue;
      c.fwd = j; c.alias = c.alias || noun; if (c.first > j) c.first = j;
      break;
    }
  }
  for (const c of chars) if (/^(ALL|EVERYONE|EVERYBODY|BOTH|TOGETHER|CROWD|CHORUS|VOICES)$/.test(c.name.toUpperCase())) { c.group = true; c.pseudo = true; }
  // Prefer the longest/full name as display name.
  // Display name: the app's tag, else the longest real name (a later-revealed name beats the description).
  const rank = (n) => (DESCR.test(n) ? 0 : 10) + keyTokens(n).length;
  for (const c of chars) c.name = c.tagName || c.names.reduce((a, b) => (rank(b) > rank(a) ? b : a));
  // Mention regexes: each key token as a word, case-insensitive (Maya / MAYA / Maya's).
  // A word in two characters' names ("COUSIN BEA" / "COUSIN TEDDY", siblings' surname) identifies neither.
  // Articles never identify anyone; a descriptive name ("THE NEW GIRL", "HOODIE GUY") only matches as a whole phrase.
  const nameToks = (n) => {
    let t = keyTokens(n).filter((x) => !/^(THE|A|AN)$/.test(x));
    if (!t.length) t = n.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => x && !/^(THE|A|AN)$/.test(x)); // "DOC", "THE JUDGE"
    return DESCR.test(n) && t.length > 1 ? [t.join(" ")] : t;
  };
  const tokSets = chars.map((c) => [...new Set(c.names.flatMap(nameToks))].filter((t) => t.length > 1));
  const owners = new Map();
  for (const ts of tokSets) for (const t of ts) owners.set(t, (owners.get(t) || 0) + 1);
  const res = chars.map((c, k) => {
    if (c.pseudo) return null;
    const own = tokSets[k].filter((t) => owners.get(t) === 1);
    const toks = own.length ? own : tokSets[k];
    return toks.length ? new RegExp(`\\b(?:${toks.map((t) => escapeRe(t).replace(/ /g, "\\s+")).join("|")})(?:['’]s)?\\b`, "gi") : null;
  });
  const resNG = res.map((r) => (r ? new RegExp(r.source, "i") : null)); // stateless copies for one-off tests
  // Common-noun characters ("a WOMAN") are later referred to as "the woman"; forward-introduced ones by their noun.
  // Characters named by a common noun ("NURSE", "THE BAND", "BOUNCER") are also "the nurse" in action lines.
  for (const c of chars) {
    let t = keyTokens(c.name).filter((x) => !/^(THE|A|AN)$/.test(x));
    if (!t.length) t = c.name.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => x && !/^(THE|A|AN)$/.test(x));
    if (!c.common && !c.alias && !c.tagName && t.length === 1 && !NAME_GENDER[t[0]] && /^[A-Z]{3,}$/.test(t[0])) c.common = true;
  }
  const HEAD = /\b(MAN|WOMAN|GIRL|BOY|KID|LADY|STRANGER|FIGURE|GUY|TEEN|TEENAGER|DRIVER|NURSE|OFFICER|GUARD|WAITER|WAITRESS|TRAVELER|TRAVELLER|DOCTOR|PRIEST|SOLDIER)\b/;
  for (const c of chars) {
    if (c.common || c.alias) continue;
    const h = c.names.map((n) => (n.match(HEAD) || [])[1]).find(Boolean);
    if (h && chars.filter((o) => o.names.some((n) => (n.match(HEAD) || [])[1] === h)).length === 1) c.alias = h.toLowerCase();
  }
  // Described characters are also referred to by their full description in lowercase ("the woman in black",
  // "the young woman"); the full phrase is unambiguous even when two share a head noun.
  const OFF_ALIAS = (globalThis.process?.env?.WHO_OFF || "").includes("alias");
  const OFF_CAM = (globalThis.process?.env?.WHO_OFF || "").includes("cam");
  for (const c of chars) {
    if (OFF_ALIAS || c.alias || c.common || c.tagName) continue;
    const d = c.names.find((n) => DESCR.test(n) && keyTokens(n).filter((x) => !/^(THE|A|AN)$/.test(x)).length >= 2);
    if (d) c.alias = keyTokens(d).filter((x) => !/^(THE|A|AN)$/.test(x)).join(" ").toLowerCase();
  }
  // roles given at the introduction ("PRIYANKA, 30s, housekeeper, polishes..." / "VIC (40s, tailor)") -> "the housekeeper"
  const ROLE_NOUN = /\b(housekeeper|nurse|doctor|surgeon|medic|paramedic|orderly|intern|resident|cook|chef|waiter|waitress|bartender|barista|barman|server|busboy|dishwasher|clerk|cashier|receptionist|secretary|assistant|manager|owner|landlord|landlady|tenant|neighbou?r|driver|cabbie|trucker|pilot|captain|skipper|sailor|deckhand|fisherman|mechanic|engineer|technician|tech|electrician|plumber|janitor|cleaner|guard|bouncer|doorman|usher|cop|officer|detective|sergeant|inspector|constable|sheriff|deputy|marshal|warden|soldier|sergeant|private|corporal|lieutenant|colonel|general|lawyer|attorney|counsel|prosecutor|judge|bailiff|juror|foreman|forewoman|teacher|professor|principal|coach|trainer|referee|umpire|student|pupil|priest|pastor|reverend|minister|rabbi|imam|monk|nun|deacon|vicar|chaplain|mayor|senator|governor|councilman|councilwoman|aide|agent|spy|courier|messenger|dealer|hustler|thief|burglar|smuggler|hitman|bodyguard|chauffeur|valet|butler|maid|nanny|babysitter|tutor|librarian|archivist|curator|scientist|researcher|analyst|programmer|developer|designer|architect|artist|painter|sculptor|photographer|filmmaker|director|producer|actor|actress|singer|musician|drummer|guitarist|bassist|pianist|violinist|dancer|dj|comedian|writer|novelist|poet|journalist|reporter|editor|anchor|host|interviewer|blogger|influencer|streamer|gamer|farmer|rancher|miner|logger|hunter|trapper|tracker|guide|ranger|lifeguard|firefighter|fireman|dispatcher|operator|translator|interpreter|accountant|banker|broker|trader|realtor|salesman|saleswoman|vendor|merchant|shopkeeper|grocer|butcher|baker|florist|tailor|seamstress|barber|hairdresser|stylist|manicurist|beautician|masseur|masseuse|therapist|counselor|psychiatrist|psychologist|dentist|vet|veterinarian|pharmacist|midwife|undertaker|mortician|gravedigger|priestess|witch|wizard|knight|squire|king|queen|prince|princess|lord|lady|duke|duchess|baron|count|countess|emperor|empress|chieftain|elder|shaman|oracle|scribe|herald|jester|bard|minstrel|pirate|outlaw|bandit|gunslinger|cowboy|cowgirl|widow|widower|bride|groom|fiancée|fiance|boyfriend|girlfriend|husband|wife|mother|father|son|daughter|brother|sister|grandmother|grandfather|aunt|uncle|cousin|niece|nephew|stepmother|stepfather|roommate|flatmate|classmate|colleague|partner|boss|foreman|supervisor|ceo|founder|investor|client|customer|patient|passenger|tourist|visitor|guest|stranger|newcomer|regular|local|veteran|rookie|recruit|cadet|prisoner|inmate|convict|suspect|witness|victim|survivor|hostage|refugee|immigrant|activist|protester|organizer|volunteer|monitor|caretaker|caregiver|patron|benefactor|heir|heiress|socialite|celebrity|star|champion|contender|boxer|fighter|wrestler|player|striker|goalie|pitcher|catcher|quarterback|jockey|rider|racer|climber|surfer|skater|diver|swimmer|runner|cyclist|hiker|camper|scout)\b/i;
  for (const c of chars) {
    if (OFF_ROLE || c.alias || c.common || c.tagName || c.intro < 0) continue;
    const text = units[c.intro].text;
    const toks = keyTokens(c.name).filter((x) => x.length > 1);
    const m = toks.length ? new RegExp(`\\b(?:${toks.map(escapeRe).join("|")})\\b`).exec(text) : null;
    if (!m) continue;
    const tail = text.slice(m.index).replace(/^[^,(]{0,40}/, "").slice(0, 110);
    const chunks = tail.replace(/^\s*\(/, ", ").replace(/\)/g, ",").split(",").map((x) => x.trim()).filter(Boolean).slice(0, 4);
    for (const ch of chunks) {
      const rm = ch.match(/^(?:(?:a|an|the|her|his|their)\s+)?(?:[a-z-]+\s+){0,2}([a-z-]+)\.?$/i);
      if (rm && ROLE_NOUN.test(rm[1]) && !/\d/.test(ch)) {
        const noun = rm[1].toLowerCase();
        if (chars.every((o) => o === c || !(o.alias === noun))) { c.alias = noun; break; }
      }
    }
  }
  // titled names ("JUDGE AUGUSTINE FAIRWEATHER", "COACH REEVE") are also "the judge" / "the coach" when unique
  const ROLE = /^(JUDGE|COACH|WARDEN|MAYOR|NURSE|DOCTOR|DOC|DETECTIVE|OFFICER|SERGEANT|CAPTAIN|LIEUTENANT|PROFESSOR|REVEREND|FATHER|SISTER|BROTHER|DEACON|PASTOR|CHIEF|SHERIFF|MARSHAL|GENERAL|COLONEL|MAJOR|PRIVATE|CORPORAL|INSPECTOR|CONSTABLE|AGENT|SENATOR|GOVERNOR|PRESIDENT|KING|QUEEN|PRINCE|PRINCESS|LORD|LADY|DUKE|DUCHESS|BARON|COUNT|COUNTESS|BISHOP|CARDINAL|RABBI|IMAM|MONK|ABBOT|CLERK|BAILIFF|FOREMAN|FOREWOMAN|ARCHIVIST|SCRIBE|TEACHER|HEADMASTER|PRINCIPAL|DEAN|MANAGER|BOSS|CHEF|BARTENDER|WAITER|WAITRESS|DRIVER|PILOT|SKIPPER|STRANGER|GIRL|BOY|WOMAN|MAN)$/;
  for (const c of chars) {
    if (c.alias || c.common || c.tagName) continue;
    const first = c.names.map((n) => n.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => !/^(THE|A|AN)$/.test(x))[0]).find((x) => x && ROLE.test(x));
    if (first && chars.filter((o) => o.names.some((n) => n.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => !/^(THE|A|AN)$/.test(x))[0] === first)).length === 1) c.alias = first.toLowerCase();
  }
  // title-only names ("JUDGE", "NURSE", "DOC") are common nouns too
  for (const c of chars) {
    const t = c.name.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((x) => x && !/^(THE|A|AN)$/.test(x));
    if (!c.common && !c.alias && !c.tagName && t.length === 1 && TITLES.has(t[0])) c.common = true;
  }
  const commonRes = chars.map((c) => (c.common ? new RegExp(`\\bthe (?:${escapeRe((keyTokens(c.name).filter((x) => !/^(THE|A|AN)$/.test(x))[0] || c.name.toUpperCase().replace(/^(THE|A|AN)\s+/, "").split(/\s+/)[0]).toLowerCase())}${c.alias2 ? "|" + escapeRe(c.alias2) : ""})\\b`, "gi")
    : c.alias || c.alias2 ? new RegExp(`\\b(?:the|this|that)\\s+${OFF_ALIASADJ ? "" : "(?!(?:other|another|second|first|new|next|different|same|two|three|four)\\b)(?:[a-z-]+\\s+){0,2}"}(?:${[c.alias, c.alias2].filter(Boolean).map((a) => escapeRe(a).replace(/ /g, "\\s+")).join("|")})\\b`, "gi") : null));
  const actsAll = units.filter((x) => x.kind === "action" && /^[A-Za-z]/.test(x.text));
  const lowerScript = !(globalThis.process?.env?.WHO_OFF || "").includes("lower") && actsAll.length >= 4 && actsAll.filter((x) => /^[a-z]/.test(x.text)).length > actsAll.length / 2;
  const mentions = units.map(() => []);
  const pronouns = units.map(() => []);
  for (const u of units) {
    if (u.kind === "heading" || u.kind === "transition") continue;
    const text = u.text + (u.paren && u.paren.length ? " " + u.paren.join(" ") : "");
    chars.forEach((c, k) => {
      if (!res[k]) return;
      for (const m of text.matchAll(res[k])) {
        // Case-sensitive guard: lowercase common words that collide with names ("will", "grace") don't count,
        // except in all-lowercase scripts (where names are lowercase too).
        if (!lowerScript && m[0][0] !== m[0][0].toUpperCase()) continue;
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: /['’]s$/i.test(m[0]),
          lead: m.index <= 1 || LEAD_TITLE.test(text.slice(0, m.index)) || DASH.test(text.slice(0, m.index)) || INVERTED.test(text.slice(0, m.index)) ||
            (/^[A-Z][^,:;.]{0,45}[,:]\s*$/.test(text.slice(0, m.index)) && !/\b(he|she|they|i|we)\b/i.test(text.slice(0, m.index)) && !chars.some((o, oi) => oi !== k && resNG[oi] && resNG[oi].test(text.slice(0, m.index)))) ||
            /\b(?:called|named|known as)\s+$/i.test(text.slice(0, m.index)) ||
            (!OFF_CAM && CAM_PREFIX.test(text.slice(0, m.index)) && CAM_PREFIX.exec(text.slice(0, m.index))[0].length === m.index) });
        if (c.first > u.i) c.first = u.i;
      }
      if (commonRes[k]) for (const m of text.matchAll(commonRes[k])) {
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: !OFF_CPOSS && /^['’]s\b/.test(text.slice(m.index + m[0].length)), lead: m.index <= 1, alias: true });
      }
    });
    mentions[u.i].sort((a, b) => a.at - b.at);
    if (u.kind === "action") for (const m of u.text.matchAll(PRON_RE)) pronouns[u.i].push({ g: pronounClass(m[1]), at: m.index, w: m[1].toLowerCase() });
  }
  // Gender guess: pronouns in action sentences where exactly one character is named.
  for (const u of units) {
    if (u.kind !== "action") continue;
    const ids = [...new Set(mentions[u.i].map((m) => m.c))];
    if (ids.length !== 1 || mentions[u.i][0].pos > 0.2) continue;
    // Only pronouns that refer back to the subject: possessive "his / her + noun", reflexives, and he / she starting a
    // new clause. Object pronouns ("hands her a bottle", "looks at him") are someone else.
    for (const p of pronouns[u.i]) {
      if (p.at <= mentions[u.i][0].at || p.g === "p") continue;
      // "Colter's hand stops on her scalp." -> "her" is the other person, not Colter
      if (!GT("poss") && mentions[u.i][0].poss && /^(his|her)$/.test(p.w)) continue;
      if (!GT("rel") && /^(his|her)$/.test(p.w) && /,\s*$/.test(u.text.slice(0, p.at)) && RELATION.test(u.text.slice(p.at + p.w.length).trimStart())) continue;
      if (!GT("contact") && p.w === "his" && CONTACT_V.test(u.text.slice(0, p.at))) continue;
      if (!GT("objpron") && p.w === "his" && /\bhim\b/i.test(u.text)) continue;
      if (!GT("objpron") && p.w === "her" && /\bher(?=[.,;!?]|\s+(?:to|at|by|and|but|away|off|out|in|into|on|over|up|down|again|there|here|hard|gently|close|closer|tight|a|an|the)\b)/i.test(u.text)) continue;
      const after = u.text.slice(p.at + p.w.length).trimStart(), before = u.text.slice(0, p.at);
      const refBack = /^(himself|herself)$/.test(p.w) || p.w === "his" && /^[a-z]/.test(after) ||
        p.w === "her" && /^[a-z]/.test(after) && (BODY_LITE.test(after) || !/^(a|an|the|to|and|or|but|that|this|back|away|up|down|out|off|in|on|at|for|with|from|into|again|now|then|so|as|if|is|was)\b/.test(after)) &&
          !(!GT("contact") && CONTACT_V.test(before)) ||
        /^(he|she)$/.test(p.w) && /(,|;|\band|\bthen|\bbut|\bas|\bwhile|\bbefore|\bafter|\buntil|\bwhen)\s*$/i.test(before) ||
        // "TAVI, 20s, tool belt too big for him, follows" -> an object pronoun inside the introduction's descriptors
        (!GT("him") && chars[ids[0]].intro === u.i && /^(him|her)$/.test(p.w) && /\b(?:for|on|to|around|behind|beside|under|over|at|about|against)\s+$/i.test(before) && /^[,.)]/.test(after) &&
          !(!GT("himverb") && u.text.slice(mentions[u.i][0].at, p.at).split(/\s+/).some((w) => VERBS3.has(w.replace(/\W+$/, "").toLowerCase()))));
      if (refBack) { chars[ids[0]].g[p.g]++; if (GDEBUG) console.error(`G ${chars[ids[0]].name} +${p.g} refBack(${p.w}): ${u.text.slice(0, 90)}`); }
    }
  }
  // Pronoun opening the sentence right after one that names exactly one character ("This is UATAKI. She is ...").
  for (let k = 1; k < acts.length; k++) {
    const ids = [...new Set(mentions[acts[k - 1].i].map((m) => m.c))];
    const p0 = pronouns[acts[k].i][0];
    if (acts[k].i !== acts[k - 1].i + 1) continue; // only directly consecutive action, no dialogue in between
    // Measured: restricting this to introductions / descriptions loses ~0.5 points on both gold sets, so any action
    // line counts ("Colter steps away. / She opens her eyes." is the exception, not the rule).
    const pt = acts[k - 1].text;
    const objBefore = p0 && !GT("seqobj") && (p0.g === "m" ? /\b(?:him|himself)\b/i.test(pt) : /\b(?:herself)\b|\bher(?=[.,;!?]|\s+(?:to|at|by|and|but|away|back|off|out|in|into|on|over|up|down|again|there|here|hard|gently|close|closer|tight|a|an|the)\b)/i.test(pt) || (CONTACT_V.test(pt.slice(0, pt.search(/\bher\b/) < 0 ? 0 : pt.search(/\bher\b/))) && /\bher\s+[a-z]/.test(pt)));
    if (ids.length === 1 && p0 && p0.at <= 12 && p0.g !== "p" && !mentions[acts[k].i].length && /^(he|she|his|her)$/.test(p0.w) && !objBefore) {
      if (!GT("seqintro") && chars[ids[0]].intro === acts[k - 1].i && acts[k].para === acts[k - 1].para && /^(he|she)$/.test(p0.w)) chars[ids[0]].g[p0.g]++; (GT("tier") ? chars[ids[0]].g : chars[ids[0]].gs)[p0.g]++; if (GDEBUG) console.error(`G ${chars[ids[0]].name} +${p0.g} sequence: ${acts[k - 1].text.slice(0, 60)} / ${acts[k].text.slice(0, 50)}`); }
  }
  if ((globalThis.process?.env?.WHO_ON || "").includes("gt_dlgseq2")) {
    const votes = new Map();
    for (let i = 1; i < units.length; i++) {
      const u = units[i], d = units[i - 1];
      if (u.kind !== "action" || d.kind !== "dialogue" || mentions[i].length) continue;
      const p0 = pronouns[i][0];
      const sp = chars.find((c) => c.names.some((n) => sameChar(n, d.name)));
      if (sp && p0 && p0.at <= 1 && /^(he|she)$/.test(p0.w)) { const v = votes.get(sp) || { m: 0, f: 0 }; v[p0.g]++; votes.set(sp, v); }
    }
    for (const [c, v] of votes) if (c.g.m + c.g.f === 0 && (v.m + v.f) >= 2 && (v.m === 0 || v.f === 0)) c.g[v.m ? "m" : "f"] += 2;
  }
  if ((globalThis.process?.env?.WHO_ON || "").includes("gt_dlgseq")) {
    for (let i = 1; i < units.length; i++) {
      const u = units[i], d = units[i - 1];
      if (u.kind !== "action" || d.kind !== "dialogue" || mentions[i].length) continue;
      const p0 = pronouns[i][0];
      const sp = chars.find((c) => c.names.some((n) => sameChar(n, d.name)));
      if (sp && p0 && p0.at <= 1 && /^(he|she)$/.test(p0.w)) sp.g[p0.g]++;
    }
  }
  // Descriptor nouns in the introduction sentence ("a jesuitic priest", "a teenage girl").
  for (const c of chars) {
    for (const ui of [c.intro, c.fwd]) {
      if (ui === undefined || ui < 0) continue;
      let t = units[ui].text;
      if (!GT("win") && ui === c.intro) { // "ODILE ... watches her late husband's brother HARLAN pour" -> "husband", "brother" are Harlan's descriptors only
        const toks = keyTokens(c.name).filter((x) => x.length > 1);
        const m = toks.length ? new RegExp(`\\b(?:${toks.map(escapeRe).join("|")})\\b`).exec(t) : null;
        if (m) {
          const others = [...t.matchAll(CAPS_SEQ)].map((x) => x.index).filter((x) => x !== m.index && !(x > m.index && x < m.index + c.name.length + 2));
          const start = Math.max(0, ...others.filter((x) => x < m.index).map((x) => x), m.index - 45);
          const endC = Math.min(t.length, ...others.filter((x) => x > m.index), m.index + 120);
          t = t.slice(start, endC);
        }
      }
      t = t.replace(/\b(his|her|him|he|she)\b/gi, "").replace(/\b(?:man|woman|boy|girl|lady|gentleman|king|queen|father|mother)['’]s\b/gi, "");
      c.g.f += (t.match(FEMALE) || []).length;
      c.g.m += (t.match(MALE) || []).length;
      if (GDEBUG && ((t.match(FEMALE) || []).length || (t.match(MALE) || []).length)) console.error(`G ${c.name} descriptors ${JSON.stringify([...(t.match(FEMALE) || []), ...(t.match(MALE) || [])])}: ${t.slice(0, 90)}`);
    }
  }
  // Titles used about a character anywhere ("Mr. Lavalle?", "Ma'am" is too vague): strong evidence
  if (!GT("vtitle")) {
    const TV = { MR: "m", MISTER: "m", SIR: "m", LORD: "m", MASTER: "m", MONSIEUR: "m", HERR: "m", SENOR: "m", SEÑOR: "m", MRS: "f", MS: "f", MISS: "f", MADAM: "f", MADAME: "f", LADY: "f", MISTRESS: "f", MADEMOISELLE: "f", FRAU: "f", SENORA: "f", SEÑORA: "f" };
    for (const u of units) {
      if (u.kind !== "dialogue" && u.kind !== "action") continue;
      for (const m of u.text.matchAll(/\b(Mr|Mister|Mrs|Ms|Miss|Sir|Madam|Madame|Lord|Lady|Master|Mistress|Monsieur|Mademoiselle|Herr|Frau|Senor|Señor|Senora|Señora)\.?\s+([A-Z][A-Za-z'’-]+)/g)) {
        const g = TV[m[1].toUpperCase()], tok = m[2].toUpperCase();
        if (!g) continue;
        const cs = chars.filter((c) => !c.group && c.names.some((n) => keyTokens(n).includes(tok)));
        if (cs.length === 1) cs[0].g[g] += 2;
      }
    }
  }
  // Titles in the name itself (MRS. HALL, SIR TOBY, FATHER BROWN).
  for (const c of chars) for (const n of c.names) {
    const t = n.toUpperCase().replace(/[.,]/g, "").split(/\s+/)[0];
    const g = GENDERED_TITLE[t];
    if (g) c.g[g] += 3;
  }
  // Decide: this scene's evidence + evidence from the rest of the script (scene.priorGender, filled by the service),
  // and only if there is none at all, the first-name list.
  const prior = scene.priorGender || {};
  for (const c of chars) {
    c.evidence = { m: c.g.m, f: c.g.f };
    const p = prior[charKey(c.name)] || { m: 0, f: 0 };
    const listed = c.group ? null : NAME_GENDER[keyTokens(c.name)[0]];
    // Tiers: the script's own evidence about this character (pronouns referring back to them, descriptors, titles,
    // other scenes); then the weaker "a pronoun opened the next sentence" guess; the first-name list breaks ties.
    const lv = GT("tier") ? 1 : 0.4;
    const m = c.g.m + p.m + (GT("tier") ? 0 : 0.5 * c.gs.m) + (listed === "m" ? lv : 0), f = c.g.f + p.f + (GT("tier") ? 0 : 0.5 * c.gs.f) + (listed === "f" ? lv : 0);
    let g = m > f ? "m" : f > m ? "f" : "?";
    c.weak = !(c.g.m + p.m !== c.g.f + p.f); // decided by the sequence guess / the name list only
    if (g === "?" && !c.group) {
      const d = c.names.join(" ").match(/\b(WOMAN|GIRL|LADY|MOTHER|MOM|MUM|SISTER|AUNT|GRANDMA|WIFE|DAUGHTER|QUEEN|NUN|WAITRESS|ACTRESS|MAN|GUY|BOY|FATHER|DAD|BROTHER|UNCLE|GRANDPA|HUSBAND|SON|KING|PRIEST|MONK|WAITER)\b/);
      if (d) g = /^(WOMAN|GIRL|LADY|MOTHER|MOM|MUM|SISTER|AUNT|GRANDMA|WIFE|DAUGHTER|QUEEN|NUN|WAITRESS|ACTRESS)$/.test(d[1]) ? "f" : "m";
    }
    c.gender = c.group ? "p" : g;
  }
  // Consistency: "He combs." in a scene with no male character -> the character whose gender rests on the weak guess
  // alone, and who was the subject most recently before that line, is the "he".
  if (!GT("cons")) {
    for (const g of ["m", "f"]) {
      const re = g === "m" ? /^(?:he|his)\b/i : /^(?:she|her)\b/i;
      const line = units.find((u) => u.kind === "action" && re.test(u.text) && !mentions[u.i].length);
      if (!line || chars.some((c) => c.gender === g)) continue;
      const weak = chars.filter((c) => !c.group && c.weak);
      if (!weak.length) continue;
      let pick = null;
      for (let j = line.i - 1; j >= 0 && !pick; j--) {
        const u = units[j];
        const subj = u.kind === "dialogue" ? chars.find((c) => c.names.some((n) => sameChar(n, u.name)))
          : u.kind === "action" && mentions[j].length && mentions[j][0].lead ? chars[mentions[j][0].c] : null;
        if (subj && weak.includes(subj)) pick = subj;
      }
      if (pick) pick.gender = g;
    }
  }
  return { chars, mentions, pronouns };
}

// "hair full of leaves" is not an exit: "leaves" only as a verb
const EXIT_RE = /\b(walks? (?:out|off|away|past (?:them|him|her) into)|goes (?:out|inside|back inside|into the)|steps? (?:out|outside|inside|into the (?:lift|elevator|car|cab|taxi|house|suite|office|hall|corridor|night|rain|street|dark))|heads (?:inside|out|off|back in)|(?:door|doors) (?:closes?|shuts?|sighs? shut|slams?|swings? shut|clicks? shut) behind|(?<!\bof )leaves(?=\s+(?:the|through|without|quickly|quietly|slowly|at once|him|her|them|it|for|by|with|in|on|at|and)\b|[.,;!]|$)|exits|walks out|storms out|is gone|hangs up|disappears|slams the door behind|departs|runs off|heads out)\b/i;

// Presence tracking (single pass): for each unit, ids of characters seen so far and not marked as exited.
// Also records per character the last unit they were named / spoke, used for recency features.
export function presence(cast, scene) {
  const n = cast.chars.length;
  const exited = new Array(n).fill(false), seen = new Array(n).fill(false);
  const out = [];
  for (const u of scene.units) {
    const sp = speakerId(cast, u);
    if (sp >= 0) { seen[sp] = true; exited[sp] = false; }
    const ms = cast.mentions[u.i];
    for (const m of ms) { seen[m.c] = true; exited[m.c] = false; }
    const here = [];
    for (let c = 0; c < n; c++) if (seen[c] && !exited[c]) here.push(c);
    out.push(here);
    if (u.kind === "action" && ms.length && EXIT_RE.test(u.text)) exited[ms[0].c] = true;
  }
  return out;
}

export function speakerId(cast, u) {
  if (u.kind !== "dialogue") return -1;
  const c = cast.chars.find((c) => c.names.some((n) => sameChar(n, u.name)));
  return c ? c.id : -1;
}
