"""Train the distilled analyzers on Haiku labels and export them for the worker.

  python train.py [--emb]      # --emb adds static-embedding features (Phase 2)

Models (LightGBM, exported as plain tree arrays in public/models/analyzers.json):
- boundary: binary "a beat starts at this unit", threshold tuned for F1 on a held-out split
- actor:    candidate scorer over {NONE, present characters}; top-1, plus extra actors above tau
- addr:     candidate scorer over {ALL, SELF, NOBODY, characters}; same decoding
- emo:      8-class classifier + intensity regressor
- tension:  Bradley-Terry scores fitted from pairwise judgments, then a regressor features -> score
"""
import argparse
import json
from collections import defaultdict

import lightgbm as lgb
import numpy as np
from scipy.optimize import minimize

import dataset as DS
import label as L

PARAMS = dict(n_estimators=150, learning_rate=0.08, num_leaves=15, max_depth=5, min_child_samples=10,
              subsample=0.9, subsample_freq=1, colsample_bytree=0.9, reg_lambda=1.0, verbose=-1)


# Per-model size: models evaluated once per line can afford more trees than per-candidate scorers
# (actor/addressee run for every candidate) or the 8-class emotion model (8 trees per round).
SMALL = dict(n_estimators=70, learning_rate=0.15)
P_SMALL = {**PARAMS, **SMALL}
P_EMO = {**PARAMS, "n_estimators": 40, "learning_rate": 0.2}


def split_scenes(sids, frac=0.15, seed=0):
    u = sorted(set(sids))
    rng = np.random.default_rng(seed)
    rng.shuffle(u)
    return set(u[: max(1, int(len(u) * frac))])


def decode_sets(units, cands, probs, tau):
    """Per unit: top candidate, plus others with prob > tau. Specials (<0) are exclusive."""
    by = defaultdict(list)
    for u, c, p in zip(units, cands, probs):
        by[u].append((p, c))
    out = {}
    for u, lst in by.items():
        lst.sort(reverse=True)
        top = lst[0][1]
        if top < 0:
            out[u] = [top]
        else:
            out[u] = [top] + [c for p, c in lst[1:] if c >= 0 and p > tau]
    return out


def tune_threshold(y, p):
    best = (0, 0.5)
    for t in np.linspace(0.1, 0.9, 33):
        pred = p > t
        tp = (pred & (y == 1)).sum(); fp = (pred & (y == 0)).sum(); fn = (~pred & (y == 1)).sum()
        f1 = 2 * tp / max(1, 2 * tp + fp + fn)
        best = max(best, (f1, t))
    return best[1]


def fit_bt(pairs, items, l2=0.05):
    """Bradley-Terry: P(a > b) = sigmoid(s_a - s_b). pairs: [(ia, ib, y)]."""
    idx = {it: k for k, it in enumerate(items)}
    A = np.array([idx[p[0]] for p in pairs]); Bb = np.array([idx[p[1]] for p in pairs]); Y = np.array([p[2] for p in pairs], float)

    def f(s):
        z = s[A] - s[Bb]
        pz = 1 / (1 + np.exp(-z))
        loss = -(Y * np.log(pz + 1e-9) + (1 - Y) * np.log(1 - pz + 1e-9)).sum() + l2 * (s ** 2).sum()
        g = np.zeros_like(s)
        np.add.at(g, A, pz - Y); np.add.at(g, Bb, -(pz - Y))
        return loss, g + 2 * l2 * s

    r = minimize(f, np.zeros(len(items)), jac=True, method="L-BFGS-B")
    return dict(zip(items, r.x))


def dump(model, kind):
    """LightGBM booster -> compact arrays the JS worker evaluates."""
    d = model.booster_.dump_model()
    trees = []
    for t in d["tree_info"]:
        feat, thr, left, right, leaf = [], [], [], [], []

        def walk(n):
            k = len(feat)
            if "leaf_value" in n:
                feat.append(-1); thr.append(0.0); left.append(-1); right.append(-1); leaf.append(n["leaf_value"])
                return k
            feat.append(n["split_feature"]); thr.append(n["threshold"]); left.append(0); right.append(0); leaf.append(0.0)
            left[k] = walk(n["left_child"]); right[k] = walk(n["right_child"])
            return k

        walk(t["tree_structure"])
        trees.append({"f": feat, "t": [round(x, 6) for x in thr], "l": left, "r": right, "v": [round(x, 6) for x in leaf]})
    return {"kind": kind, "num_class": d.get("num_class", 1), "trees": trees}


def train(use_emb=False, out_path=None):
    labels = DS.train_scene_labels()
    gold = DS.gold_scene_labels()
    labels = {k: v for k, v in labels.items() if k not in gold}  # never train on gold scenes
    feats = DS.features(DS.requests_for(labels), "train")
    data = DS.build(labels, feats)
    if use_emb:
        import embed
        data = embed.add_features(data, labels)
    models, meta = {}, {}

    # boundary
    B = data["boundary"]; val = split_scenes(B["sid"]); m = np.isin(B["sid"], list(val))
    clf = lgb.LGBMClassifier(**PARAMS).fit(B["X"][~m], B["y"][~m])
    thr = tune_threshold(B["y"][m], clf.predict_proba(B["X"][m])[:, 1])
    clf = lgb.LGBMClassifier(**PARAMS).fit(B["X"], B["y"])
    models["boundary"] = dump(clf, "binary"); meta["boundary"] = {"threshold": float(thr)}

    # actor / addressee candidate scorers
    for task in ("actor", "addr"):
        T = data[task]; val = split_scenes(T["sid"]); m = np.isin(T["sid"], list(val))
        clf = lgb.LGBMClassifier(**P_SMALL).fit(T["X"][~m], T["y"][~m])
        p = clf.predict_proba(T["X"][m])[:, 1]
        best = (-1, 0.5)
        keys = list(zip(T["sid"][m], T["u"][m]))
        for tau in (0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.95):
            dec = decode_sets(keys, T["c"][m], p, tau)
            gold_sets = defaultdict(set)
            for k, c, y in zip(keys, T["c"][m], T["y"][m]):
                if y:
                    gold_sets[k].add(c)
            acc = np.mean([set(dec[k]) == (gold_sets[k] or {-1}) for k in dec])
            best = max(best, (acc, tau))
        clf = lgb.LGBMClassifier(**P_SMALL).fit(T["X"], T["y"])
        models[task] = dump(clf, "binary"); meta[task] = {"tau": best[1], "val_set_acc": float(best[0])}

    # emotion
    E = data["emo"]
    # sqrt-inverse-frequency weights: rare emotions matter without collapsing neutral accuracy
    freq = np.bincount(E["y"], minlength=8).astype(float)
    w = (freq.sum() / np.maximum(freq, 1)) ** 0.5
    clf = lgb.LGBMClassifier(**P_EMO).fit(E["X"], E["y"], sample_weight=w[E["y"]])
    models["emo"] = dump(clf, "multiclass")
    meta["emo"] = {"classes": [DS.EMOS[c] for c in clf.classes_]}
    reg = lgb.LGBMRegressor(**P_SMALL).fit(E["X"], E["yi"])
    models["emo_int"] = dump(reg, "regression")

    # tension: BT over beats, then regressor
    T = data["tension"]
    pairs = [json.loads(l) for l in (DS.DATA / "train_pairs.jsonl").open()] if (DS.DATA / "train_pairs.jsonl").exists() else []
    items = sorted(set(zip(T["sid"], T["k"].tolist())))
    item_set = set(items)
    pp = [((a, i), (b, j), y) for a, i, b, j, y in pairs if (a, i) in item_set and (b, j) in item_set]
    if pp:
        s = fit_bt(pp, items)
        ys = np.array([s[(sid, int(k))] for sid, k in zip(T["sid"], T["k"])])
        reg = lgb.LGBMRegressor(**PARAMS).fit(T["X"], ys)
        pred = reg.predict(T["X"])
        models["tension"] = dump(reg, "regression")
        meta["tension"] = {"lo": float(np.percentile(pred, 2)), "hi": float(np.percentile(pred, 98)), "pairs": len(pp)}
    meta["counts"] = {k: int(len(v["X"])) for k, v in data.items()}
    meta["features"] = DS.feature_names()
    meta["emb"] = bool(use_emb)
    out = {"version": 1, "meta": meta, "models": models}
    out_path = out_path or (L.ROOT / "public" / "models" / ("analyzers-emb.json" if use_emb else "analyzers.json"))
    out_path.write_text(json.dumps(out, separators=(",", ":")))
    print(f"wrote {out_path} ({out_path.stat().st_size / 1024:.0f} KB)")
    print(json.dumps({k: v for k, v in meta.items() if k != "features"}, indent=1))


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--emb", action="store_true")
    a = ap.parse_args()
    train(a.emb)
