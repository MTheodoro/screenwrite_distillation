// Runs the owner-reported who cases (test/fixtures/who_cases.json) through the service exactly as the app does
// (script-wide cast, character tags) and prints each check. Exit code 1 if any check fails.
//   node who_fixtures.mjs [--json]
import { readFileSync } from "node:fs";
import { AnalyzerService } from "../../src/analyzers/service.js";

const FX = JSON.parse(readFileSync(new URL("../../test/fixtures/who_cases.json", import.meta.url), "utf8"));

export async function runFixtures(fx = FX, opts = {}) {
  const service = new AnalyzerService({ schedule: (fn) => queueMicrotask(fn), ...opts });
  const results = await new Promise((resolve) => {
    const got = new Map();
    let total = null;
    const done = () => total !== null && got.size === total && resolve(got);
    service.update(fx.script, (index, hash, result) => { if (!result.partial) { got.set(index, result); done(); } }, fx.characters)
      .then((hashes) => { total = hashes.length; done(); });
  });
  const { parse } = await import("../../src/analyzers/fountain.js");
  const scenes = parse(fx.script).scenes;
  const rows = [];
  for (const ck of fx.checks) {
    const cands = scenes.filter((s) => (ck.scene === undefined || s.index === ck.scene) && s.units.some((u) => u.kind === "action" && u.text.includes(ck.unit)));
    const sc = cands[0];
    const row = { ...ck, got: null, ok: false };
    if (!sc) { row.err = "unit not found"; rows.push(row); continue; }
    const u = sc.units.find((x) => x.kind === "action" && x.text.includes(ck.unit));
    const r = results.get(sc.index);
    const line = r.lines[u.i] || {};
    const at = u.text.indexOf(ck.clause);
    if (at < 0) { row.err = "clause not in unit"; rows.push(row); continue; }
    const mid = at + Math.floor(ck.clause.length / 2);
    const clauses = line.clauses || [{ from: 0, to: u.text.length, who: line.who || [], why: line.why, conf: line.conf }];
    const cl = clauses.find((c) => mid >= c.from && mid < c.to) || clauses[clauses.length - 1];
    const names = (cl.who || []).map((id) => r.cast[id]?.name || String(id));
    const want = ck.who.map((w) => w.toUpperCase());
    const match = (n, w) => n.toUpperCase() === w || n.toUpperCase().includes(w) || w.includes(n.toUpperCase());
    row.got = names; row.why = cl.why; row.conf = cl.conf; row.span = u.text.slice(cl.from, cl.to);
    row.ok = names.length === want.length && want.every((w) => names.some((n) => match(n, w))) && (!ck.together || (cl.together ?? names.length > 1));
    row.sureOk = !ck.sure || (cl.conf ?? 0) >= 0.7;
    rows.push(row);
  }
  return rows;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const rows = await runFixtures();
  if (process.argv.includes("--json")) console.log(JSON.stringify(rows));
  else {
    for (const r of rows) {
      const mark = r.ok ? (r.sureOk ? "ok  " : "ok? ") : "FAIL";
      console.log(`${mark} #${String(r.case).padEnd(2)} ${JSON.stringify(r.clause).padEnd(46)} want ${JSON.stringify(r.who).padEnd(36)} got ${JSON.stringify(r.got)} ${r.why ?? ""}${r.conf !== undefined ? " " + r.conf : ""}${r.err ? " ERR " + r.err : ""}${!r.ok && r.span ? "  span=" + JSON.stringify(r.span) : ""}`);
    }
    const ok = rows.filter((r) => r.ok).length;
    console.log(`\n${ok}/${rows.length} checks pass (${rows.filter((r) => r.ok && r.sureOk).length} also sure where required)`);
    process.exitCode = ok === rows.length ? 0 : 1;
  }
}
