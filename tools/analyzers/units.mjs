// node units.mjs <file.fountain>... > units.jsonl
// One JSON line per scene: units, cast, per-unit presence. This is the shared view labelers and features use.
import { readFileSync } from "node:fs";
import { basename } from "node:path";
import { parse } from "../../src/analyzers/fountain.js";
import { buildCast, presence, speakerId } from "../../src/analyzers/cast.js";

for (const f of process.argv.slice(2)) {
  const stem = basename(f).replace(/\.[^.]+$/, "");
  const { scenes } = parse(readFileSync(f, "utf8"));
  scenes.forEach((s, k) => {
    const cast = buildCast(s);
    const pres = presence(cast, s);
    const out = {
      scene_id: scenes.length === 1 ? stem : `${stem}_${k}`,
      source: f,
      heading: s.heading,
      cast: cast.chars.map((c) => ({ id: c.id, name: c.name, names: c.names, gender: c.gender, first: c.first, spoke: c.spoke })),
      units: s.units.map((u) => ({
        u: u.i, kind: u.kind, text: u.text, para: u.para, sent: u.sent,
        ...(u.kind === "dialogue" ? { name: u.name, speaker: speakerId(cast, u), ext: u.ext, paren: u.paren, dual: u.dual } : {}),
        present: pres[u.i],
      })),
    };
    process.stdout.write(JSON.stringify(out) + "\n");
  });
}
