"""Rule development loop for 'who': measures rules (and the model) on a DEV set and dumps errors by pattern.

DEV = Haiku train labels (synthetic, ~98% agreement with Opus gold) + play training excerpts (pt_*).
Gold sets stay untouched for the final test (bench.py).
  python rules_dev.py [--n 600] [--dump 60]
"""
import argparse
import json
import random
import subprocess

import dataset as DS
from bench import set_match, SPEC_ACTOR

ap = argparse.ArgumentParser()
ap.add_argument("--n", type=int, default=600)
ap.add_argument("--dump", type=int, default=60)
ap.add_argument("--seed", type=int, default=3)
a = ap.parse_args()
gold = DS.gold_scene_labels()
lab = {k: v for k, v in DS.train_scene_labels().items() if k not in gold}
syn = sorted(k for k in lab if k.startswith("s") and not k.startswith("s05"))
con = sorted(k for k in lab if k.startswith("s05"))
pt = sorted(k for k in lab if k.startswith("pt_"))
rng = random.Random(a.seed)
rng.shuffle(syn)
ids = syn[: a.n] + con + pt
reqs = "".join(json.dumps({"scene_id": s, "source": lab[s]["d"]["source"], "index": DS.scene_index(s, lab[s]["d"]["source"]), "beats": []}) + "\n" for s in ids)
P = {d["scene_id"]: d for d in map(json.loads, subprocess.run(["node", "predict.mjs", "../../public/models/analyzers.json"], input=reqs, capture_output=True, text=True, check=True).stdout.splitlines())}
stats = {"syn": [0, 0, 0], "con": [0, 0, 0], "pt": [0, 0, 0]}
errs = []
for s in ids:
    d = lab[s]["d"]
    grp = "pt" if s.startswith("pt_") else "con" if s.startswith("s05") else "syn"
    names = {c["id"]: c["name"] for c in d["cast"]}
    for u, v in lab[s]["units"].items():
        if "who" not in v:
            continue
        r = P[s]["rule"]["lines"].get(str(u), {}).get("who", [])
        m = P[s]["model"]["lines"].get(str(u), {}).get("who", [])
        okr = set_match(r, v["who"], SPEC_ACTOR, True)[0]
        okm = set_match(m, v["who"], SPEC_ACTOR, True)[0]
        st = stats[grp]; st[0] += 1; st[1] += okr; st[2] += okm
        if not okr:
            gold_names = [[names.get(i, i) for i in sorted(g)] if isinstance(g, frozenset) else g for g in v["who"]]
            prev = d["units"][u - 1] if u > 0 else {}
            errs.append({"s": s, "u": u, "grp": grp, "text": d["units"][u]["text"][:110],
                         "prev": ((prev.get("name", "") + ": ") if prev.get("kind") == "dialogue" else "") + prev.get("text", "")[:70],
                         "rule": [names.get(i[0] if isinstance(i, list) else i, i) for i in r], "gold": gold_names, "model_ok": okm})
for g, (n, r, m) in stats.items():
    print(f"{g}: n={n}  rules {r / max(1, n):.1%}  model+rules {m / max(1, n):.1%}")
json.dump(errs, open("/tmp/claude-0/-home-user-screenwrite-distillation/af2941e1-2134-51a1-a024-8405a6a16593/scratchpad/dev/errs.json", "w"))
rng.shuffle(errs)
for e in errs[: a.dump]:
    print(f"[{e['grp']}] {e['text']!r}\n      prev={e['prev']!r}\n      rule={e['rule']} gold={e['gold']} model_ok={e['model_ok']}")
