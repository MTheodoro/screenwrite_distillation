// Debug one line: node why_line.mjs <scene.fountain> "<text in the line>" -> cast (with gender evidence), mentions, pronouns, rule verdict and path. GDEBUG=1 prints gender evidence.
import { readFileSync } from "node:fs";
import { parse } from "../../src/analyzers/fountain.js";
import * as R from "../../src/analyzers/rules.js";
const [file, needle] = process.argv.slice(2);
for (const sc of parse(readFileSync(file, "utf8")).scenes) {
  const ctx = R.sceneContext(sc);
  for (const u of sc.units) if (u.kind === "action" && u.text.includes(needle)) {
    const i = u.i;
    console.log(JSON.stringify(u.text), "\n cast:", ctx.cast.chars.map((c) => c.id + "=" + c.name + (c.group ? "(g)" : "") + ":" + c.gender + JSON.stringify(c.g)).join(" "),
      "\n mentions:", JSON.stringify(ctx.cast.mentions[i]), "pron:", JSON.stringify(ctx.cast.pronouns[i]),
      "\n subjectless:", R.subjectless(ctx, i), "strong:", JSON.stringify(R.strongActors(ctx, i)), "rule:", JSON.stringify(R.ruleActors(ctx, i)), "why:", ctx._why.get(i), "fwd/intro:", ctx.cast.chars.map((c) => c.name + ":" + c.intro + "/" + c.fwd + "/" + c.spoke).join(" "),
      "\n pres:", JSON.stringify(ctx.pres[i]));
  }
}
