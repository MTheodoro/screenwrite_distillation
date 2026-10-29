// Character registry, mentions, pronouns and presence for one scene.

const TITLES = new Set(["MR", "MRS", "MS", "MISS", "DR", "DET", "DETECTIVE", "OFFICER", "SGT", "SERGEANT", "CAPT",
  "CAPTAIN", "LT", "LIEUTENANT", "AGENT", "PROF", "PROFESSOR", "REV", "FATHER", "SISTER", "AUNT", "UNCLE", "SIR",
  "LADY", "LORD", "YOUNG", "OLD", "LITTLE", "BIG", "MAJOR", "COL", "GENERAL", "GEN", "DOC", "NURSE", "JUDGE", "COACH"]);
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
export function capsNames(text, cueNames) {
  if (text === text.toUpperCase()) return []; // shouted / SFX-only sentence
  const out = [];
  for (const m of text.matchAll(CAPS_SEQ)) {
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
    if (/\b(reads?|marked|labell?ed|stamped|printed|super|caption)\s*:?\s*["“']?$/i.test(text.slice(Math.max(0, m.index - 16), m.index))) continue;
    const isCue = cueNames.some((c) => sameChar(c, n));
    const art = /\b(a|an|the|two|three)\s+$/i.test(before);
    if (isCue || /^\s*[(,—–-]/.test(after) || /^['’]S/.test(after) || art) out.push(art ? n + "\u0000" : n);
  }
  return out;
}

// Words that can stand before a name that still leads the sentence ("Cousin LEANDRO carries", "Old TOMASZ").
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
      c = { id: chars.length, name, names: [name], first: ui, intro: how === "intro" ? ui : -1, spoke: 0, g: { m: 0, f: 0, p: 0 } };
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
    const named = chars.find((c) => c && c !== d && !DESCR.test(c.names[0]) && c.first > d.first && c.intro < 0 &&
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
  // Introduced before being named: "A teenage girl ... This is UATAKI." -> the description sentence belongs to UATAKI
  // and "the girl" becomes an alias.
  const acts = units.filter((u) => u.kind === "action");
  acts.forEach((u, k) => {
    const pm = u.text.match(PERSON_NOUN);
    if (!pm || capsNames(u.text, cueNames).length) return;
    for (const v of acts.slice(k + 1, k + 3)) {
      const named = chars.find((c) => c.first === v.i || c.intro === v.i);
      if (named && !named.group) { named.fwd = u.i; named.alias = pm[1].toLowerCase(); if (named.first > u.i) named.first = u.i; break; }
    }
  });
  // Prefer the longest/full name as display name.
  // Display name: the app's tag, else the longest real name (a later-revealed name beats the description).
  const rank = (n) => (DESCR.test(n) ? 0 : 10) + keyTokens(n).length;
  for (const c of chars) c.name = c.tagName || c.names.reduce((a, b) => (rank(b) > rank(a) ? b : a));
  // Mention regexes: each key token as a word, case-insensitive (Maya / MAYA / Maya's).
  // A word in two characters' names ("COUSIN BEA" / "COUSIN TEDDY", siblings' surname) identifies neither.
  // Articles never identify anyone; a descriptive name ("THE NEW GIRL", "HOODIE GUY") only matches as a whole phrase.
  const nameToks = (n) => {
    const t = keyTokens(n).filter((x) => !/^(THE|A|AN)$/.test(x));
    return DESCR.test(n) && t.length > 1 ? [t.join(" ")] : t;
  };
  const tokSets = chars.map((c) => [...new Set(c.names.flatMap(nameToks))].filter((t) => t.length > 1));
  const owners = new Map();
  for (const ts of tokSets) for (const t of ts) owners.set(t, (owners.get(t) || 0) + 1);
  const res = chars.map((c, k) => {
    const own = tokSets[k].filter((t) => owners.get(t) === 1);
    const toks = own.length ? own : tokSets[k];
    return toks.length ? new RegExp(`\\b(?:${toks.map((t) => escapeRe(t).replace(/ /g, "\\s+")).join("|")})(?:['’]s)?\\b`, "gi") : null;
  });
  // Common-noun characters ("a WOMAN") are later referred to as "the woman"; forward-introduced ones by their noun.
  // Characters named by a common noun ("NURSE", "THE BAND", "BOUNCER") are also "the nurse" in action lines.
  for (const c of chars) {
    const t = keyTokens(c.name).filter((x) => !/^(THE|A|AN)$/.test(x));
    if (!c.common && !c.alias && !c.tagName && t.length === 1 && !NAME_GENDER[t[0]] && /^[A-Z]{3,}$/.test(t[0])) c.common = true;
  }
  const HEAD = /\b(MAN|WOMAN|GIRL|BOY|KID|LADY|STRANGER|FIGURE|GUY|TEEN|TEENAGER|DRIVER|NURSE|OFFICER|GUARD|WAITER|WAITRESS|TRAVELER|TRAVELLER|DOCTOR|PRIEST|SOLDIER)\b/;
  for (const c of chars) {
    if (c.common || c.alias) continue;
    const h = c.names.map((n) => (n.match(HEAD) || [])[1]).find(Boolean);
    if (h && chars.filter((o) => o.names.some((n) => (n.match(HEAD) || [])[1] === h)).length === 1) c.alias = h.toLowerCase();
  }
  const commonRes = chars.map((c) => (c.common ? new RegExp(`\\bthe ${escapeRe(keyTokens(c.name).filter((x) => !/^(THE|A|AN)$/.test(x))[0].toLowerCase())}\\b`, "gi")
    : c.alias ? new RegExp(`\\bthe ${escapeRe(c.alias)}\\b`, "gi") : null));
  const mentions = units.map(() => []);
  const pronouns = units.map(() => []);
  for (const u of units) {
    if (u.kind === "heading" || u.kind === "transition") continue;
    const text = u.text + (u.paren && u.paren.length ? " " + u.paren.join(" ") : "");
    chars.forEach((c, k) => {
      if (!res[k]) return;
      for (const m of text.matchAll(res[k])) {
        // Case-sensitive guard: lowercase common words that collide with names ("will", "grace") don't count.
        if (m[0][0] !== m[0][0].toUpperCase()) continue;
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: /['’]s$/i.test(m[0]),
          lead: m.index <= 1 || LEAD_TITLE.test(text.slice(0, m.index)) });
        if (c.first > u.i) c.first = u.i;
      }
      if (commonRes[k]) for (const m of text.matchAll(commonRes[k])) {
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: false, lead: m.index <= 1 });
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
      const after = u.text.slice(p.at + p.w.length).trimStart(), before = u.text.slice(0, p.at);
      const refBack = /^(himself|herself)$/.test(p.w) || p.w === "his" && /^[a-z]/.test(after) ||
        p.w === "her" && /^[a-z]/.test(after) && !/^(a|an|the|to|and|or|but|that|this|back|away|up|down|out|off|in|on|at|for|with|from|into|again|now|then|so|as|if|is|was)\b/.test(after) ||
        /^(he|she)$/.test(p.w) && /(,|;|\band|\bthen|\bbut|\bas|\bwhile|\bbefore|\bafter|\buntil|\bwhen)\s*$/i.test(before);
      if (refBack) chars[ids[0]].g[p.g]++;
    }
  }
  // Pronoun opening the sentence right after one that names exactly one character ("This is UATAKI. She is ...").
  for (let k = 1; k < acts.length; k++) {
    const ids = [...new Set(mentions[acts[k - 1].i].map((m) => m.c))];
    const p0 = pronouns[acts[k].i][0];
    if (acts[k].i !== acts[k - 1].i + 1) continue; // only directly consecutive action, no dialogue in between
    if (ids.length === 1 && p0 && p0.at <= 12 && p0.g !== "p" && !mentions[acts[k].i].length) chars[ids[0]].g[p0.g]++;
  }
  // Descriptor nouns in the introduction sentence ("a jesuitic priest", "a teenage girl").
  for (const c of chars) {
    for (const ui of [c.intro, c.fwd]) {
      if (ui === undefined || ui < 0) continue;
      const t = units[ui].text.replace(/\b(his|her|him|he|she)\b/gi, "");
      c.g.f += 2 * (t.match(FEMALE) || []).length;
      c.g.m += 2 * (t.match(MALE) || []).length;
    }
  }
  // Titles in the name itself (MRS. HALL, SIR TOBY, FATHER BROWN).
  for (const c of chars) for (const n of c.names) {
    const t = n.toUpperCase().replace(/[.,]/g, "").split(/\s+/)[0];
    const g = NAME_GENDER[t];
    if (g && t !== keyTokens(n)[0]) c.g[g] += 3;
  }
  // Decide: this scene's evidence + evidence from the rest of the script (scene.priorGender, filled by the service),
  // and only if there is none at all, the first-name list.
  const prior = scene.priorGender || {};
  for (const c of chars) {
    c.evidence = { m: c.g.m, f: c.g.f };
    const p = prior[charKey(c.name)] || { m: 0, f: 0 };
    const m = c.g.m + p.m, f = c.g.f + p.f;
    let g = m > f ? "m" : f > m ? "f" : "?";
    if (g === "?" && !c.group) g = NAME_GENDER[keyTokens(c.name)[0]] || "?";
    c.gender = c.group ? "p" : g;
  }
  return { chars, mentions, pronouns };
}

const EXIT_RE = /\b(leaves|exits|walks out|storms out|is gone|hangs up|disappears|slams the door behind|departs|runs off|heads out)\b/i;

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
