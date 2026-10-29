// Loads the real worker in headless Chromium and records every network request it makes.
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { createServer } from "node:http";
import { readFileSync } from "node:fs";
import { extname, join } from "node:path";
const { chromium } = createRequire(execSync("npm root -g").toString().trim() + "/")("playwright");
const root = new URL("../../", import.meta.url).pathname;
const server = createServer((req, res) => {
  try { const p = join(root, req.url.split("?")[0]); res.writeHead(200, { "content-type": extname(p) === ".js" ? "text/javascript" : "text/html" }); res.end(readFileSync(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const browser = await chromium.launch();
const ctx = await browser.newContext();
const reqs = [];
ctx.on("request", (r) => reqs.push(r.url().replace(/^http:\/\/127\.0\.0\.1:\d+/, "")));
const page = await ctx.newPage();
await page.goto(`http://127.0.0.1:${server.address().port}/test/browser/worker.html`);
const got = await page.waitForFunction(() => window.__got, null, { timeout: 30000 }).then((h) => h.jsonValue());
const finals = got.filter((m) => m.type === "result" && m.result.lines && Object.keys(m.result.lines).length);
const last = finals.at(-1)?.result;
console.log("requests:", reqs.join("  "));
console.log("non-module requests:", reqs.filter((u) => !u.endsWith(".js") && !u.endsWith(".html")).length);
console.log("model status:", got.find((m) => m.type === "model")?.status, "| beats", JSON.stringify(last?.beats), "| tension", JSON.stringify(last?.tension?.map((x) => +x.toFixed(2))), "| mood", JSON.stringify(last?.beatMood), "| who", JSON.stringify(Object.fromEntries(Object.entries(last?.lines || {}).filter(([, v]) => v.who).map(([k, v]) => [k, v.who]))));
await browser.close(); server.close();
