"""Phase 3 data: ambiguous who-attribution cases for a tiny cross-encoder.

For every action line, the Phase 1 model scores candidates. A line is "ambiguous" when the margin between
its top two candidates is below --margin. For those lines we emit (context, candidate, label) pairs for the
top-K Phase 1 candidates. Train pairs come from Haiku labels, eval pairs from the Opus gold set.

  python phase3_data.py [--margin 0.5] [--topk 3]
Writes data/analyzers/phase3/{train,val,gold}.jsonl
"""
import argparse
import json
import random
import subprocess

import dataset as DS
import label as L

OUT = L.DATA / "phase3"
NONE_NAME = "nobody (setting)"


def context(d, u, n=2):
    """Previous n content units + the target, as plain text with a marker on the target."""
    prev = [x for x in d["units"][:u] if x["kind"] in ("action", "dialogue")][-n:]
    fmt = lambda x: (f"{x['name']}: " if x["kind"] == "dialogue" else "") + x["text"]
    return " ".join(fmt(x) for x in prev) + " [TARGET] " + d["units"][u]["text"]


def cand_name(d, c):
    if c < 0:
        return NONE_NAME
    ch = d["cast"][c]
    return ch["name"].title() + (f" ({ {'m': 'he', 'f': 'she'}[ch['gender']]})" if ch["gender"] in ("m", "f") else "")


def predictions(labels, bundle):
    reqs = [{"scene_id": s, "source": g["d"]["source"], "index": DS.scene_index(s), "beats": []} for s, g in labels.items()]
    res = subprocess.run(["node", str(L.ROOT / "tools/analyzers/predict.mjs"), str(bundle)],
                         input="".join(json.dumps(r) + "\n" for r in reqs), capture_output=True, text=True, check=True)
    return {p["scene_id"]: p for p in map(json.loads, res.stdout.splitlines())}


def pairs_for(labels, preds, feats, margin, topk):
    rows = []
    for s, lab in labels.items():
        d = lab["d"]
        f = feats[s]
        scores = {}
        for i, c, x in f["actor"]:
            scores.setdefault(i, []).append(c)
        for u, v in lab["units"].items():
            if "who" not in v or u not in scores:
                continue
            p = preds[s]["model"]["lines"].get(str(u))
            if not p or p.get("margin", 1) >= margin:
                continue
            cands = scores[u]
            # Phase 1 top-k order: winner, runner-up, then the rest
            first = [p["who"][0] if p["who"] else -1]
            if p.get("runnerUp") is not None:
                first.append(p["runnerUp"])
            order = first + [c for c in cands if c not in first]
            for c in order[:topk]:
                rows.append({"scene_id": s, "u": u, "c": c, "text": context(d, u), "cand": cand_name(d, c),
                             "y": DS.actor_target(c, v["who"])})
    return rows


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--margin", type=float, default=0.5)
    ap.add_argument("--topk", type=int, default=3)
    a = ap.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    bundle = L.ROOT / "public/models/analyzers.json"
    gold = DS.gold_scene_labels()
    train = {k: v for k, v in DS.train_scene_labels().items() if k not in gold}
    for name, labels, tag in (("gold", gold, "gold"), ("train", train, "train")):
        preds = predictions(labels, bundle)
        feats = DS.features(DS.requests_for(labels), tag)
        rows = pairs_for(labels, preds, feats, a.margin, a.topk)
        if name == "train":
            sids = sorted({r["scene_id"] for r in rows})
            random.Random(0).shuffle(sids)
            val = set(sids[: len(sids) // 10])
            (OUT / "val.jsonl").write_text("".join(json.dumps(r) + "\n" for r in rows if r["scene_id"] in val))
            rows = [r for r in rows if r["scene_id"] not in val]
        (OUT / f"{name}.jsonl").write_text("".join(json.dumps(r) + "\n" for r in rows))
        n_lines = len({(r["scene_id"], r["u"]) for r in rows})
        print(f"{name}: {len(rows)} pairs, {n_lines} ambiguous lines, positive rate {sum(r['y'] for r in rows) / max(1, len(rows)):.2f}")


if __name__ == "__main__":
    main()
