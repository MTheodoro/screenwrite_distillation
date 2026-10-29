"""Train the description models from Haiku labels (describe_labels.py) and add them to the shipped bundle.

  python train_describe.py
Adds bundle["describe"] to public/models/analyzers.json and regenerates src/analyzers/weights.js.
Held-out (15% of scenes) accuracy is printed and stored in meta.
"""
import json
import subprocess

import lightgbm as lgb
import numpy as np

import dataset as DS
import describe_labels as D
import label as L
from train import dump

P_MULTI = dict(n_estimators=30, learning_rate=0.2, num_leaves=7, max_depth=4, min_child_samples=10, verbose=-1)
P_BIN = dict(n_estimators=20, learning_rate=0.25, num_leaves=7, max_depth=4, min_child_samples=10, verbose=-1)


def features(labels):
    opus = L.beat_labels("opus")
    reqs = []
    for s in labels:
        d = L.load_units(s)
        reqs.append({"scene_id": s, "source": d["source"], "index": DS.scene_index(s, d["source"]), "beats": opus[s]})
    res = subprocess.run(["node", str(L.ROOT / "tools/analyzers/describe_features.mjs")],
                         input="".join(json.dumps(r) + "\n" for r in reqs), capture_output=True, text=True, check=True)
    return {d["scene_id"]: d for d in map(json.loads, res.stdout.splitlines())}


def char_id(name, f):
    n = (name or "").upper().strip()
    for cid, names in enumerate(f["names"]):
        if any(n == x.upper() for x in names):
            return cid
    for cid, names in enumerate(f["names"]):
        if any(L.same(n, x) for x in names):
            return cid
    return None


def main():
    labels = {k: v for k, v in D.load_all().items() if (L.UNITS / f"{k}.json").exists()}
    F = features(labels)
    rng = np.random.default_rng(0)
    sids = sorted(F)
    rng.shuffle(sids)
    test = set(sids[: len(sids) * 15 // 100])
    sets = {k: {"X": [], "y": [], "sid": []} for k in ("beat", "place", "role")}
    multi = {k: {"X": [], "Y": [], "sid": []} for k in ("atmos", "traits")}
    for s, lab in labels.items():
        f = F.get(s)
        if not f:
            continue
        for b in lab.get("beats", []):
            k, t = b.get("b"), b.get("type")
            if isinstance(k, int) and 0 <= k < len(f["beat"]) and t in D.BEAT_TYPES:
                sets["beat"]["X"].append(f["beat"][k][1]); sets["beat"]["y"].append(D.BEAT_TYPES.index(t)); sets["beat"]["sid"].append(s)
        if lab.get("place") in D.PLACES:
            sets["place"]["X"].append(f["scene"]); sets["place"]["y"].append(D.PLACES.index(lab["place"])); sets["place"]["sid"].append(s)
        at = [a for a in lab.get("atmos", []) if a in D.ATMOS]
        if at:
            multi["atmos"]["X"].append(f["scene"]); multi["atmos"]["Y"].append([int(a in at) for a in D.ATMOS]); multi["atmos"]["sid"].append(s)
        for name, cl in (lab.get("chars") or {}).items():
            cid = char_id(name, f)
            if cid is None or not isinstance(cl, dict):
                continue
            x = f["chars"][cid][2]
            if cl.get("role") in D.ROLES:
                sets["role"]["X"].append(x); sets["role"]["y"].append(D.ROLES.index(cl["role"])); sets["role"]["sid"].append(s)
            tr = [t for t in cl.get("traits", []) if t in D.TRAITS]
            if tr:
                multi["traits"]["X"].append(x); multi["traits"]["Y"].append([int(t in tr) for t in D.TRAITS]); multi["traits"]["sid"].append(s)

    models, meta = {}, {}
    for name, S in sets.items():
        X, y, sid = np.array(S["X"], np.float32), np.array(S["y"]), np.array(S["sid"])
        m = np.isin(sid, list(test))
        clf = lgb.LGBMClassifier(**P_MULTI).fit(X[~m], y[~m])
        p = clf.predict_proba(X[m])
        top1 = float(np.mean(clf.classes_[p.argmax(1)] == y[m]))
        top2 = float(np.mean([y[m][i] in clf.classes_[np.argsort(-p[i])[:2]] for i in range(len(p))]))
        base = float(np.mean(y[m] == np.bincount(y[~m]).argmax()))
        clf = lgb.LGBMClassifier(**P_MULTI).fit(X, y)
        models[name] = dump(clf, "multiclass")
        meta[name] = {"classes": [int(c) for c in clf.classes_], "test_top1": top1, "test_top2": top2, "majority": base, "n": int(len(y))}
        print(f"{name:6s} n={len(y):5d}  top1 {top1:.1%}  top2 {top2:.1%}  (majority baseline {base:.1%})")
    for name, S in multi.items():
        X, Y, sid = np.array(S["X"], np.float32), np.array(S["Y"]), np.array(S["sid"])
        m = np.isin(sid, list(test))
        probs, ms = np.zeros((m.sum(), Y.shape[1])), []
        for j in range(Y.shape[1]):
            if Y[~m, j].sum() < 5:
                ms.append(None); continue
            clf = lgb.LGBMClassifier(**P_BIN).fit(X[~m], Y[~m, j])
            probs[:, j] = clf.predict_proba(X[m])[:, 1]
            ms.append(dump(lgb.LGBMClassifier(**P_BIN).fit(X, Y[:, j]), "binary"))
        top = probs.argmax(1)
        prec1 = float(np.mean(Y[m][np.arange(len(top)), top]))
        models[name] = ms
        meta[name] = {"test_top1_precision": prec1, "n": int(len(Y))}
        print(f"{name:6s} n={len(Y):5d}  top-1 label correct {prec1:.1%}")
    path = L.ROOT / "public/models/analyzers.json"
    bundle = json.loads(path.read_text())
    bundle["describe"] = {"models": models, "meta": meta}
    path.write_text(json.dumps(bundle, separators=(",", ":")))
    js = L.ROOT / "src/analyzers/weights.js"
    js.write_text("// Generated by tools/analyzers/train.py / train_describe.py. Do not edit.\nexport default "
                  + json.dumps(bundle, separators=(",", ":")) + ";\n")
    print(f"bundle {path.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
