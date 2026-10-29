"""Line-kind rules vs labels: python kinds_eval.py [--tag opus|haiku] [--dump N]"""
import argparse, collections, glob, json, random, subprocess
import dataset as DS
import label as L

ap = argparse.ArgumentParser(); ap.add_argument("--tag", default="opus"); ap.add_argument("--dump", type=int, default=0)
a = ap.parse_args()
reqs = []
for f in sorted(glob.glob(str(L.LAB / f"kinds_{a.tag}/group_*.json"))):
    for s, v in json.load(open(f)).items():
        d = L.load_units(s)
        kinds = {u["u"]: u["kind"] for u in d["units"]}
        for u, k in v.items():
            if kinds.get(int(u)) == "action" and isinstance(k, str) and k != "character":
                reqs.append({"sid": s, "source": d["source"], "index": DS.scene_index(s, d["source"]), "u": int(u), "kind": k})
out = subprocess.run(["node", "kinds_eval.mjs"], input="".join(json.dumps(r) + "\n" for r in reqs), capture_output=True, text=True, check=True).stdout
rows = [json.loads(l) for l in out.splitlines()]
ok = sum(r["kind"] == r["pred"] for r in rows)
print(f"line kind ({a.tag}): {ok}/{len(rows)} = {ok / len(rows):.1%}")
conf = collections.Counter((r["kind"], r["pred"]) for r in rows)
ks = ["setting", "event", "extra", "camera", "abstract"]
print("gold\\pred " + " ".join(f"{k[:7]:>8s}" for k in ks))
for g in ks:
    print(f"{g:9s} " + " ".join(f"{conf[(g, p)]:8d}" for p in ks))
if a.dump:
    random.seed(1)
    bad = [r for r in rows if r["kind"] != r["pred"]]
    for r in random.sample(bad, min(a.dump, len(bad))):
        print(f"  {r['kind']:8s} <- {r['pred']:8s} | {r['text'][:100]}")
