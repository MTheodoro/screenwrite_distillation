"""Benchmark rules vs distilled model against the Opus gold set.

  python bench.py [--bundle public/models/analyzers.json] [--out data/analyzers/bench.md]

Metrics (gold = 3-pass unanimous labels; beats = majority boundaries):
- beats: boundary F1 (exact, and within +-1 unit)
- who / addressee: exact set accuracy (aliases of one person count as one), and top-1 accuracy
- emotion: accuracy and macro-F1 over 8 classes
- tension: pairwise accuracy on gold pairs (all 3 passes agree), scored on the gold beats
- latency: ms per scene in Node (rules, model); 120-page script estimate
"""
import argparse
import json
import subprocess
from collections import Counter
from pathlib import Path

import numpy as np

import dataset as DS
import label as L

SPEC_ACTOR = {"OTHER": -1}
SPEC_ADDR = {"ALL": -2, "SELF": -3, "NONE": -4}


def slots(gold, spec):
    out = []
    for g in gold:
        if isinstance(g, frozenset):
            out.append(set(g))
        else:
            out.append({spec.get(g, -99)})
    return out


def set_match(pred, gold, spec, actor):
    gs = slots(gold, spec)
    if actor:
        gs = [s for s in gs if s != {-1}] or []  # OTHER/none -> expect NONE
        pred = [p for p in pred if p != -1]
        if not gs:
            return not pred, not pred
    used = set()
    for p in pred:
        k = next((k for k, s in enumerate(gs) if p in s and k not in used), None)
        if k is None:
            return False, any(pred[0] in s for s in gs) if pred else False
        used.add(k)
    exact = len(used) == len(gs)
    top1 = bool(pred) and any(pred[0] in s for s in gs)
    return exact, top1


def f1_bounds(pred, gold, tol=0):
    pred, gold = set(pred), set(gold)
    tp = sum(1 for p in pred if any(abs(p - g) <= tol for g in gold))
    fn = sum(1 for g in gold if not any(abs(p - g) <= tol for p in pred))
    return tp, len(pred) - tp, fn


def macro_f1(y, p, k=8):
    fs = []
    for c in range(k):
        tp = sum(1 for a, b in zip(y, p) if a == c and b == c)
        fp = sum(1 for a, b in zip(y, p) if a != c and b == c)
        fn = sum(1 for a, b in zip(y, p) if a == c and b != c)
        if tp + fn == 0:
            continue
        fs.append(2 * tp / max(1, 2 * tp + fp + fn))
    return float(np.mean(fs)) if fs else 0.0


def run(bundle):
    gold = DS.gold_scene_labels()
    reqs = [{"scene_id": s, "source": g["d"]["source"], "index": DS.scene_index(s), "beats": g["beats"]} for s, g in gold.items()]
    cmd = ["node", str(L.ROOT / "tools/analyzers/predict.mjs")] + ([str(bundle)] if bundle else [])
    res = subprocess.run(cmd, input="".join(json.dumps(r) + "\n" for r in reqs), capture_output=True, text=True, check=True)
    preds = {d["scene_id"]: d for d in map(json.loads, res.stdout.splitlines())}
    pairs = [json.loads(l) for l in (L.DATA / "gold_pairs.jsonl").open()] if (L.DATA / "gold_pairs.jsonl").exists() else []
    systems = ["rule"] + (["model"] if bundle else [])
    M = {s: Counter() for s in systems}
    emo_y, emo_p = [], {s: [] for s in systems}
    lat = {s: [] for s in systems}
    for sid, g in gold.items():
        P = preds[sid]
        lat["rule"].append(P["tRule"])
        if bundle:
            lat["model"].append(P["tModel"])
        content_first = min((int(k) for k in P["rule"]["lines"]), default=0)
        gb = [b for b in g["beats"] if b != content_first]
        for s in systems:
            pr = P[s]
            pb = [b for b in pr["beats"] if b != content_first]
            for tol, key in ((0, "b0"), (1, "b1")):
                tp, fp, fn = f1_bounds(pb, gb, tol)
                M[s][key + "tp"] += tp; M[s][key + "fp"] += fp; M[s][key + "fn"] += fn
        for u, gv in g["units"].items():
            for s in systems:
                pl = P[s]["lines"].get(str(u))
                if pl is None:
                    continue
                if "who" in gv:
                    e, t = set_match(pl.get("who", []), gv["who"], SPEC_ACTOR, True)
                    M[s]["who_n"] += 1; M[s]["who_exact"] += e; M[s]["who_top1"] += t
                    if len([x for x in gv["who"] if isinstance(x, frozenset)]) > 1:
                        M[s]["multi_n"] += 1; M[s]["multi_exact"] += e
                if "to" in gv:
                    e, t = set_match(pl.get("to", []), gv["to"], SPEC_ADDR, False)
                    M[s]["to_n"] += 1; M[s]["to_exact"] += e; M[s]["to_top1"] += t
            if "emo" in gv:
                emo_y.append(L.EMOTIONS.index(gv["emo"][0]))
                for s in systems:
                    pl = P[s]["lines"].get(str(u))
                    emo_p[s].append(L.EMOTIONS.index(pl["emo"][0]) if pl else 0)
    # tension pairwise accuracy on gold beats
    tens = {s: {sid: P.get(f"{s}TensionGold") for sid, P in preds.items()} for s in systems}
    for a, i, b, j, y in pairs:
        for s in systems:
            ta, tb = tens[s].get(a), tens[s].get(b)
            if not ta or not tb or i >= len(ta) or j >= len(tb):
                continue
            k = "tw" if a == b else "tx"
            M[s][k + "_n"] += 1
            M[s][k + "_ok"] += int((ta[i] > tb[j]) == bool(y)) if ta[i] != tb[j] else 0.5
    rows = []
    def f1(c, k): return 2 * c[k + "tp"] / max(1, 2 * c[k + "tp"] + c[k + "fp"] + c[k + "fn"])
    def pct(c, a, n): return f"{c[a] / max(1, c[n]):.1%}"
    table = [("Beat boundary F1 (exact)", lambda s: f"{f1(M[s], 'b0'):.3f}"),
             ("Beat boundary F1 (±1 unit)", lambda s: f"{f1(M[s], 'b1'):.3f}"),
             ("Who: exact set", lambda s: pct(M[s], "who_exact", "who_n")),
             ("Who: top-1", lambda s: pct(M[s], "who_top1", "who_n")),
             ("Who: joint actions (exact)", lambda s: pct(M[s], "multi_exact", "multi_n")),
             ("Addressee: exact set", lambda s: pct(M[s], "to_exact", "to_n")),
             ("Addressee: top-1", lambda s: pct(M[s], "to_top1", "to_n")),
             ("Emotion: accuracy", lambda s: f"{np.mean(np.array(emo_p[s]) == np.array(emo_y)):.1%}"),
             ("Emotion: macro-F1", lambda s: f"{macro_f1(emo_y, emo_p[s]):.3f}"),
             ("Tension pairs, within scene", lambda s: pct(M[s], "tw_ok", "tw_n")),
             ("Tension pairs, across scenes", lambda s: pct(M[s], "tx_ok", "tx_n")),
             ("Latency ms/scene (mean)", lambda s: f"{np.mean(lat[s]):.2f}"),
             ("Latency ms/scene (p95)", lambda s: f"{np.percentile(lat[s], 95):.2f}")]
    hdr = "| Metric | " + " | ".join(systems) + " |\n|---|" + "---|" * len(systems)
    lines = [hdr] + [f"| {name} | " + " | ".join(fn(s) for s in systems) + " |" for name, fn in table]
    n = M["rule"]
    counts = (f"Gold: {len(gold)} scenes, who n={n['who_n']} (joint {n['multi_n']}), addressee n={n['to_n']}, "
              f"emotion n={len(emo_y)}, tension pairs within={n['tw_n']} across={n['tx_n']}")
    return "\n".join(lines) + "\n\n" + counts


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--bundle", default=None)
    ap.add_argument("--out", default=str(L.DATA / "bench.md"))
    a = ap.parse_args()
    md = run(Path(a.bundle) if a.bundle else None)
    Path(a.out).write_text(md + "\n")
    print(md)
