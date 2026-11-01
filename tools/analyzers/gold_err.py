"""All who errors on a gold prefix, grouped by rule path. usage: gold_all_err.py s0|s05 [path,...]"""
import sys, json, subprocess, collections
sys.path.insert(0, __import__("os").path.dirname(__import__("os").path.abspath(__file__)))
import dataset as DS, label as L
from bench import set_match, SPEC_ACTOR
prefix = sys.argv[1]
only = set(sys.argv[2].split(",")) if len(sys.argv) > 2 else None
G = {k: v for k, v in DS.gold_scene_labels().items() if k.startswith(prefix)}
reqs = "".join(json.dumps({"scene_id": s, "source": g["d"]["source"], "index": DS.scene_index(s, g["d"]["source"]), "beats": []}) + "\n" for s, g in G.items())
P = {d["scene_id"]: d for d in map(json.loads, subprocess.run(["node", "predict.mjs"], input=reqs, capture_output=True, text=True, check=True).stdout.splitlines())}
errs = []; paths = collections.Counter(); tot = collections.Counter(); n = 0
for s, g in G.items():
    d = g["d"]; names = {c["id"]: c["name"] for c in d["cast"]}
    for u, v in g["units"].items():
        if "who" not in v: continue
        n += 1
        l = P[s]["rule"]["lines"].get(str(u), {}); r = l.get("who", [])
        ok = set_match(r, v["who"], SPEC_ACTOR, True)[0]
        tot[l.get("why")] += 1
        if not ok:
            paths[l.get("why")] += 1
            prev = d["units"][u - 1] if u > 0 else {}
            pp = d["units"][u - 2] if u > 1 else {}
            fmt = lambda x: ((x.get("name", "") + ": ") if x.get("kind") == "dialogue" else "") + x.get("text", "")[:60]
            errs.append((l.get("why"), s, u, d["units"][u]["text"][:110], fmt(pp), fmt(prev),
                         [names.get(i[0] if isinstance(i, list) else i, i) for i in r], [[names.get(i, i) for i in sorted(x)] if isinstance(x, frozenset) else x for x in v["who"]]))
print(len(errs), "errors of", n, f"({1 - len(errs) / n:.3%});", [(k, v, tot[k]) for k, v in paths.most_common(14)])
errs.sort(key=lambda e: (e[0] or "", e[1], e[2]))
for e in errs:
    if only and e[0] not in only: continue
    print(f"[{e[0]}] {e[1]}#{e[2]} | {e[3]}\n     pp: {e[4]}\n     pv: {e[5]}\n     R {e[6]}  G {e[7]}")
