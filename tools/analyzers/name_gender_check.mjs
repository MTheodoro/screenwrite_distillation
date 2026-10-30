// How reliable is the first-name list? For every scene in the corpus, compare each character's gender from the script's
// own evidence (pronouns, descriptors, titles; the list itself is excluded) with the list's entry for their first name.
// Prints names where the list disagrees with the evidence, to prune ambiguous (unisex) names.
//   node name_gender_check.mjs > /tmp/names.tsv
import { readFileSync, readdirSync } from "node:fs";
import { parse } from "../../src/analyzers/fountain.js";
import { buildCast, keyTokens } from "../../src/analyzers/cast.js";
import NAME_GENDER from "../../src/analyzers/names.js";

const dirs = ["../../data/analyzers/gen/scenes"];
// gold scenes stay out (they are the test set)
const GOLD = new Set(["gold_all_ids.txt", "gold_ids.txt", "pd_ids.txt"].flatMap((f) => { try { return readFileSync("../../data/analyzers/" + f, "utf8").split(/\s+/); } catch { return []; } }));
const stat = new Map(); // name -> { m, f, listed }
for (const d of dirs) {
  for (const f of readdirSync(d)) {
    if (!f.endsWith(".fountain") || GOLD.has(f.replace(".fountain", ""))) continue;
    let scenes;
    try { scenes = parse(readFileSync(d + "/" + f, "utf8")).scenes; } catch { continue; }
    for (const sc of scenes) {
      const cast = buildCast(sc);
      for (const c of cast.chars) {
        if (c.group) continue;
        const first = keyTokens(c.name)[0];
        if (!first || !NAME_GENDER[first]) continue;
        const m = c.g.m, fe = c.g.f; // scene evidence only (c.g excludes the list)
        if (m === fe) continue;
        const s = stat.get(first) || { m: 0, f: 0, listed: NAME_GENDER[first] };
        s[m > fe ? "m" : "f"]++;
        stat.set(first, s);
      }
    }
  }
}
const rows = [...stat].map(([n, s]) => ({ n, ...s, n_ev: s.m + s.f, agree: (s.listed === "m" ? s.m : s.f) / (s.m + s.f) }));
rows.sort((a, b) => a.agree - b.agree || b.n_ev - a.n_ev);
let bad = 0, total = 0;
for (const r of rows) { total += r.n_ev; bad += r.n_ev - Math.round(r.agree * r.n_ev); }
console.error(`${rows.length} listed names seen with evidence; list disagrees with the script in ${bad}/${total} character-scenes (${(100 * bad / total).toFixed(1)}%)`);
console.log("name\tlisted\tm\tf\tagree");
for (const r of rows) console.log(`${r.n}\t${r.listed}\t${r.m}\t${r.f}\t${r.agree.toFixed(2)}`);
