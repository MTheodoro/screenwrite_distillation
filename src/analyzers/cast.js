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

export function keyTokens(name) {
  return name.toUpperCase().replace(/[.,]/g, "").split(/\s+/).filter((t) => t && !TITLES.has(t));
}

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }

function sameChar(a, b) {
  const ka = keyTokens(a), kb = keyTokens(b);
  if (!ka.length || !kb.length) return a === b;
  const [s, l] = ka.length <= kb.length ? [ka, kb] : [kb, ka];
  return s.every((t) => l.includes(t));
}

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
    const isCue = cueNames.some((c) => sameChar(c, n));
    const art = /\b(a|an|the|two|three)\s+$/i.test(before);
    if (isCue || /^\s*[(,—–-]/.test(after) || /^['’]S/.test(after) || art) out.push(art ? n + "\u0000" : n);
  }
  return out;
}

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
  for (const u of units) {
    if (u.kind === "dialogue") add(u.name, u.i, "cue");
    else if (u.kind === "action") for (let n of capsNames(u.text, cueNames)) {
      const common = n.endsWith("\u0000");
      n = n.replace("\u0000", "");
      const c = add(n, u.i, "intro");
      if (common && keyTokens(n).length === 1) c.common = true;
    }
  }
  // Prefer the longest/full name as display name.
  for (const c of chars) c.name = c.names.reduce((a, b) => (keyTokens(b).length > keyTokens(a).length ? b : a));
  // Mention regexes: each key token as a word, case-insensitive (Maya / MAYA / Maya's).
  const res = chars.map((c) => {
    const toks = [...new Set(c.names.flatMap(keyTokens))].filter((t) => t.length > 1);
    return toks.length ? new RegExp(`\\b(?:${toks.map(escapeRe).join("|")})(?:['’]s)?\\b`, "gi") : null;
  });
  // Common-noun characters ("a WOMAN") are later referred to as "the woman".
  const commonRes = chars.map((c) => (c.common ? new RegExp(`\\bthe ${escapeRe(keyTokens(c.name)[0].toLowerCase())}\\b`, "gi") : null));
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
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: /['’]s$/i.test(m[0]) });
        if (c.first > u.i) c.first = u.i;
      }
      if (commonRes[k]) for (const m of text.matchAll(commonRes[k])) {
        mentions[u.i].push({ c: c.id, pos: m.index / Math.max(1, text.length), at: m.index, poss: false });
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
    for (const p of pronouns[u.i]) if (p.at > mentions[u.i][0].at && p.g !== "p") chars[ids[0]].g[p.g]++;
  }
  for (const c of chars) {
    const { m, f } = c.g;
    c.gender = m > f ? "m" : f > m ? "f" : "?";
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
