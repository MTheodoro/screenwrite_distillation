// Fountain parser for the analyzers. Pure functions, no DOM: safe in a Web Worker and in Node.
// Produces scenes made of "units": a sentence of action, a whole dialogue block, a heading or a transition.

const HEADING_RE = /^(?:\.(?!\.)|(?:INT|EXT|EST|INT\.?\/EXT|I\/E)[.\s])/i;
const TRANSITION_RE = /^(?:>(?!.*<\s*$)|[A-Z0-9 '’.\-]+TO:$|FADE (?:IN|OUT)[.:]?$|CUT TO BLACK[.:]?$)/;
const CUE_RE = /^@?[^a-z]*[A-Z][^a-z]*$/;
const EXT_RE = /\(([^)]*)\)/g;
const ABBREV = /\b(?:Mr|Mrs|Ms|Dr|St|Det|Lt|Sgt|Capt|Col|Gen|Jr|Sr|Prof|Rev|Mt|vs|etc|No|Sr|Ave|Officer|Insp)\.$/i;

export function stripMarkup(text) {
  return text
    .replace(/\r\n?/g, "\n")
    .replace(/\/\*[\s\S]*?\*\//g, "")
    .replace(/\[\[[\s\S]*?\]\]/g, "");
}

export function splitSentences(para) {
  const s = para.replace(/\s+/g, " ").trim();
  if (!s) return [];
  const out = [];
  let start = 0;
  const re = /([.!?…]+["'’”)]*)\s+(?=["'“(]?[A-Z0-9])/g;
  let m;
  while ((m = re.exec(s))) {
    const end = m.index + m[1].length;
    const piece = s.slice(start, end);
    if (ABBREV.test(piece) || /\b[A-Z]\.$/.test(piece)) continue;
    out.push(piece.trim());
    start = re.lastIndex;
  }
  if (start < s.length) out.push(s.slice(start).trim());
  return out.filter(Boolean);
}

export function parseCue(line) {
  let raw = line.trim();
  let dual = false;
  if (raw.endsWith("^")) { dual = true; raw = raw.slice(0, -1).trim(); }
  if (raw.startsWith("@")) raw = raw.slice(1);
  const ext = [];
  raw.replace(EXT_RE, (_, e) => { ext.push(e.trim().toUpperCase()); return ""; });
  const name = raw.replace(EXT_RE, "").replace(/\s+/g, " ").trim().toUpperCase();
  return { name, ext, dual };
}

function isCue(line, next, prevBlank) {
  const t = line.trim();
  if (!prevBlank || !next || !next.trim()) return false;
  if (t.startsWith("@")) return true;
  if (t.startsWith("!") || HEADING_RE.test(t) || TRANSITION_RE.test(t)) return false;
  if (!CUE_RE.test(t)) return false;
  const name = t.replace(EXT_RE, "").replace(/\^$/, "").trim();
  return /[A-Z]/.test(name) && name.length <= 40;
}

// Returns { scenes: [{ index, heading, units, start }] }. Text before the first heading becomes scene 0
// only if it contains units.
export function parse(text) {
  const lines = stripMarkup(text).split("\n");
  // Skip a title page (key: value block at top).
  let i = 0;
  if (/^[A-Za-z ]+:/.test(lines[0] || "") && !HEADING_RE.test(lines[0])) {
    while (i < lines.length && lines[i].trim() !== "") i++;
  }
  const scenes = [];
  let scene = { index: 0, heading: null, units: [], start: i };
  const push = (u) => { u.i = scene.units.length; scene.units.push(u); };
  let para = 0;
  let actionBuf = [];
  let actionLine = 0;
  const flushAction = () => {
    if (!actionBuf.length) return;
    const sents = splitSentences(actionBuf.join(" "));
    sents.forEach((t, k) => push({ kind: "action", text: t, para, sent: k, line: actionLine }));
    para++;
    actionBuf = [];
  };
  let prevBlank = true;
  for (; i < lines.length; i++) {
    const line = lines[i];
    const t = line.trim();
    if (!t) { flushAction(); prevBlank = true; continue; }
    if (/^(#|=(?!==)|===)/.test(t)) { flushAction(); prevBlank = true; continue; }
    if (prevBlank && HEADING_RE.test(t) && !t.startsWith("..")) {
      flushAction();
      if (scene.units.length || scene.heading) scenes.push(scene);
      scene = { index: scenes.length, heading: t.replace(/^\./, ""), units: [], start: i };
      push({ kind: "heading", text: scene.heading, line: i });
      para = 0;
      prevBlank = false;
      continue;
    }
    if (prevBlank && TRANSITION_RE.test(t) && (!lines[i + 1] || !lines[i + 1].trim())) {
      flushAction();
      push({ kind: "transition", text: t.replace(/^>/, "").trim(), line: i });
      prevBlank = false;
      continue;
    }
    if (isCue(line, lines[i + 1], prevBlank)) {
      flushAction();
      const cue = parseCue(t);
      const u = { kind: "dialogue", cue: t, name: cue.name, ext: cue.ext, dual: cue.dual, paren: [], text: "", line: i };
      const body = [];
      while (i + 1 < lines.length && lines[i + 1].trim()) {
        i++;
        const d = lines[i].trim();
        if (/^\(.*\)$/.test(d)) u.paren.push(d.slice(1, -1).trim());
        else body.push(d);
      }
      u.text = body.join(" ");
      push(u);
      prevBlank = false;
      continue;
    }
    if (!actionBuf.length) actionLine = i;
    actionBuf.push(t.replace(/^!/, "").replace(/^>(.*)<$/, "$1"));
    prevBlank = false;
  }
  flushAction();
  if (scene.units.length) scenes.push(scene);
  scenes.forEach((s, k) => { s.index = k; });
  return { scenes };
}
