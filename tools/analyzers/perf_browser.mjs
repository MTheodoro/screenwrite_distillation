// Real-browser latency: headless Chromium, analyzers in a Web Worker, CPU throttled via CDP.
// node perf_browser.mjs [throttle=4]
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
const { chromium } = createRequire(execSync("npm root -g").toString().trim() + "/")("playwright");
import { createServer } from "node:http";
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { extname, join } from "node:path";
const root = new URL("../../", import.meta.url).pathname;
const dir = root + "data/analyzers/gen/scenes/";
writeFileSync(root + "test/perf/scenes.json", JSON.stringify(readdirSync(dir).slice(0, 300).map((f) => readFileSync(dir + f, "utf8"))));
const types = { ".js": "text/javascript", ".html": "text/html", ".json": "application/json" };
const server = createServer((req, res) => {
  try { const p = join(root, decodeURIComponent(req.url.split("?")[0])); res.writeHead(200, { "content-type": types[extname(p)] || "application/octet-stream" }); res.end(readFileSync(p)); }
  catch { res.writeHead(404); res.end(); }
}).listen(0);
const rate = Number(process.argv[2] || 4);
const browser = await chromium.launch();
const page = await browser.newPage();
const cdp = await page.context().newCDPSession(page);
await cdp.send("Emulation.setCPUThrottlingRate", { rate });
await page.goto(`http://127.0.0.1:${server.address().port}/test/perf/perf.html${rate > 1 ? "?main" : ""}`);
const r = await page.waitForFunction(() => window.__result, null, { timeout: 600000 }).then((h) => h.jsonValue());
console.log(JSON.stringify({ throttle: rate, ...r }, (k, v) => (typeof v === "number" ? Math.round(v * 100) / 100 : v), 1));
await browser.close(); server.close();
