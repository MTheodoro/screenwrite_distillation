"""Beat mood (stacked): beat word table + scene word table (6 families) + position -> LightGBM family; a 16-mood beat
table picks the fine mood inside the predicted family. Tested per unit on Opus majority gold with gold beats.

  python mood_train.py --tags opusT,sonnet,csonnet      # label sets to train on (first ones weigh more)
Writes src/analyzers/moodtables.js and models.mood (+ meta.mood) in the bundle.
"""
import argparse, base64, collections, json
import numpy as np, lightgbm as lgb
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import GroupKFold
import subprocess
import beats2 as B, label as L, mood_table as M, dataset as DS
from train import dump


def table(vec, clf, classes):
    W = clf.coef_
    if W.shape[0] == 1:  # binary edge case
        W = np.vstack([-W, W])
    q = np.round(W / np.abs(W).max() * 127).astype(np.int8)
    return {"classes": [classes[k] for k in clf.classes_], "scale": float(np.abs(W).max() / 127),
            "bias": [round(b, 4) for b in clf.intercept_.tolist()], "vocab": vec.get_feature_names_out().tolist(),
            "w": base64.b64encode(q.T.astype(np.int8).tobytes()).decode()}


def beats_of(s, starts):
    units = L.load_units(s)["units"]
    out = []
    for k, lo in enumerate(starts):
        hi = starts[k + 1] if k + 1 < len(starts) else 10**9
        out.append((M.beat_text(units, lo, hi), k / max(1, len(starts) - 1),
                    [u["u"] for u in units if u["kind"] in ("action", "dialogue") and lo <= u["u"] < hi]))
    return out, M.beat_text(units, 0, 10**9)


def aggregates(scenes):
    """scene_id -> per-beat line-model aggregates (mood_features.mjs), for {sid: [starts]}."""
    reqs = []
    for s, st in scenes.items():
        d = L.load_units(s)
        reqs.append({"scene_id": s, "source": d["source"], "index": DS.scene_index(s, d["source"]), "starts": st})
    out = subprocess.run(["node", "mood_features.mjs"], input="".join(json.dumps(r) + "\n" for r in reqs),
                         capture_output=True, text=True, check=True).stdout
    return {d["scene_id"]: d["agg"] for d in map(json.loads, out.splitlines())}


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--tags", default="opusT,sonnet,csonnet")
    ap.add_argument("--vocab", type=int, default=3000)
    a = ap.parse_args()
    gold = B.consensus(["opusA", "opusB", "opusC"], need=2)
    train = {}
    for t in reversed(a.tags.split(",")):  # earlier tags override later ones
        train.update(B.load(t))
    train = {k: v for k, v in train.items() if k not in gold}
    R = []
    for s, bs in train.items():
        try:
            bb, sc = beats_of(s, [b["start"] for b in bs])
        except FileNotFoundError:
            continue
        for k, ((t, pos, _), b) in enumerate(zip(bb, bs)):
            if b.get("mood") in M.MOODS:
                R.append((s, t, sc, pos, M.MOODS.index(b["mood"]), k))
    AG = aggregates({s: [b["start"] for b in bs] for s, bs in train.items() if (L.UNITS / f"{s}.json").exists()})
    keep = []
    for s, bs in train.items():
        pass
    sid = np.array([r[0] for r in R]); ym = np.array([r[4] for r in R])
    yf = np.array([B.FAMILIES.index(B.FAM[M.MOODS[m]]) for m in ym])
    print(f"train beats {len(R)} from {len(train)} scenes")
    mk = lambda ng: CountVectorizer(token_pattern=M.TOKEN, ngram_range=ng, max_features=a.vocab, binary=True, min_df=2, lowercase=False)
    vB, vS, vF = mk((1, 2)), mk((1, 1)), mk((1, 2))
    XB, XS, XF = vB.fit_transform([r[1] for r in R]), vS.fit_transform([r[2] for r in R]), vF.fit_transform([r[1] for r in R])
    oB, oS = np.zeros((len(R), 6)), np.zeros((len(R), 6))
    for tr, te in GroupKFold(5).split(XB, yf, sid):
        oB[te] = LogisticRegression(C=0.3, max_iter=3000).fit(XB[tr], yf[tr]).predict_proba(XB[te])
        oS[te] = LogisticRegression(C=0.3, max_iter=3000).fit(XS[tr], yf[tr]).predict_proba(XS[te])
    agg = np.array([AG[r[0]][r[5]] if r[0] in AG and r[5] < len(AG[r[0]]) else [0] * 20 for r in R])
    gbm = lgb.LGBMClassifier(n_estimators=40, learning_rate=0.15, num_leaves=7, min_child_samples=30, verbose=-1).fit(np.hstack([oB, oS, [[r[3]] for r in R], agg]), yf)
    lB = LogisticRegression(C=0.3, max_iter=3000).fit(XB, yf)
    lS = LogisticRegression(C=0.3, max_iter=3000).fit(XS, yf)
    lF = LogisticRegression(C=0.5, max_iter=3000).fit(XF, ym)
    c = collections.Counter()
    fam_of = np.array([B.FAMILIES.index(B.FAM[m]) for m in M.MOODS])
    AGg = aggregates({s: g["starts"] for s, g in gold.items()})
    for s, g in gold.items():
        bb, sc = beats_of(s, g["starts"])
        ps = lS.predict_proba(vS.transform([sc]))[0]
        for k, (t, p, us) in enumerate(bb):
            pb = lB.predict_proba(vB.transform([t]))[0]
            fam = int(gbm.predict(np.hstack([pb, ps, [p], AGg[s][k]])[None])[0])
            pf = np.zeros(len(M.MOODS)); pf[lF.classes_] = lF.predict_proba(vF.transform([t]))[0]
            pf[fam_of != fam] = -1
            mood = M.MOODS[int(pf.argmax())]
            for u in us:
                c["n"] += 1; c["fam"] += B.FAMILIES[fam] == g["fam"].get(u); c["mood"] += mood == g["mood"].get(u)
    print(f"gold per-unit: family {c['fam'] / c['n']:.1%}  fine mood {c['mood'] / c['n']:.1%}")
    T = {"beat": table(vB, lB, B.FAMILIES), "scene": table(vS, lS, B.FAMILIES), "fine": table(vF, lF, M.MOODS)}
    path = L.ROOT / "public/models/analyzers.json"
    bundle = json.loads(path.read_text())
    bundle["models"]["mood"] = dump(gbm, "multiclass")
    bundle.setdefault("tables", {})["mood"] = T
    bundle["meta"]["mood"] = {"agg": True, "classes": [int(k) for k in gbm.classes_], "families": B.FAMILIES, "moods": M.MOODS, "family_of": {m: B.FAM[m] for m in M.MOODS},
                              "gold_family": c["fam"] / c["n"], "gold_fine": c["mood"] / c["n"]}
    path.write_text(json.dumps(bundle, separators=(",", ":")))
    (L.ROOT / "src/analyzers/weights.js").write_text("// Generated by tools/analyzers/train*.py. Do not edit.\nexport default " + json.dumps(bundle, separators=(",", ":")) + ";\n")


if __name__ == "__main__":
    main()
