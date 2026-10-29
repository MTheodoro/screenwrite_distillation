"""Train the description models from Haiku labels (describe_labels.py) into their own bundle.

  python train_describe.py
Writes public/models/describe.json and src/analyzers/describe_weights.js (loaded lazily by the worker, only when
descriptions are on). Coarse heads: LightGBM over rule features. Fine heads (label within the coarse group): prior +
cue-word weights (naive-Bayes log-odds, top cues per label) + a bonus when the label's own words are in the text.
Held-out (15% of scenes) accuracy is printed and stored in meta.
"""
import gzip
import json
import math
import subprocess
from collections import Counter, defaultdict

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
    fine, fmeta = train_fine(labels, F, test)
    meta["fine"] = fmeta
    bundle = {"models": models, "meta": meta, "fine": fine}
    path = L.ROOT / "public/models/describe.json"
    raw = json.dumps(bundle, separators=(",", ":"))
    path.write_text(raw)
    js = L.ROOT / "src/analyzers/describe_weights.js"
    js.write_text("// Generated by tools/analyzers/train_describe.py. Do not edit.\nexport default " + raw + ";\n")
    print(f"describe bundle {len(raw) / 1024:.0f} KB raw, {len(gzip.compress(raw.encode())) / 1024:.0f} KB gz")


HEAD_KEY = {"beat": "b", "place": "p", "atmos": "a", "role": "r", "traits": "t"}
TOP_CUES, ALPHA, MIN_DF = 8, 0.5, 3


def fine_rows(labels, F):
    """(head, group, fine index, tokens, scene) for every fine label that matches its coarse group's options."""
    tax = D.load_taxonomy()
    fl = D.load_fine()
    rows = []
    for s, f in fl.items():
        lab, feat = labels.get(s), F.get(s)
        if not lab or not feat or "tok" not in feat:
            continue
        def add(head, group, label, toks):
            opts = tax[HEAD_KEY[head]].get(group) or []
            if isinstance(label, str) and label in opts:
                rows.append((head, group, opts.index(label), toks, s))
        if lab.get("place"):
            add("place", lab["place"], f.get("place"), feat["tok"]["scene"])
        for c, x in zip(lab.get("atmos", []), f.get("atmos") or []):
            add("atmos", c, x, feat["tok"]["scene"])
        for cb, x in zip(lab.get("beats", []), f.get("beats") or []):
            k = cb.get("b")
            if isinstance(k, int) and 0 <= k < len(feat["tok"]["beat"]):
                add("beat", cb.get("type"), x, feat["tok"]["beat"][k])
        for name, cl in (lab.get("chars") or {}).items():
            fc = (f.get("chars") or {}).get(name)
            cid = char_id(name, feat)
            if cid is None or not isinstance(cl, dict) or not isinstance(fc, dict):
                continue
            toks = feat["tok"]["chars"][cid]
            add("role", cl.get("role"), fc.get("role"), toks)
            for c, x in zip(cl.get("traits", []), fc.get("traits") or []):
                add("traits", c, x, toks)
    return rows, tax


def fit_group(items, n_opts):
    """items: [(fine index, tokens)] -> {"p": [log prior], "w": {token: [k, w, ...]}}"""
    cnt = Counter(k for k, _ in items)
    N = len(items)
    p = [round(math.log((cnt[k] + 1) / (N + n_opts)), 2) for k in range(n_opts)]
    df = defaultdict(Counter)
    for k, toks in items:
        for t in set(toks):
            df[t][k] += 1
    w = defaultdict(list)
    for k in range(n_opts):
        if not cnt[k]:
            continue
        sc = []
        for t, c in df.items():
            if c[k] < MIN_DF:
                continue
            pin = (c[k] + ALPHA) / (cnt[k] + 2 * ALPHA)
            pout = (sum(c.values()) - c[k] + ALPHA) / (N - cnt[k] + 2 * ALPHA)
            sc.append((math.log(pin / pout), t))
        for v, t in sorted(sc, reverse=True)[:TOP_CUES]:
            if v > 0.3:
                w[t] += [k, round(v, 1)]
    return {"p": p, "w": dict(w)}


def score(g, n_opts, toks, opts, bonus):
    sc = list(g["p"]) if g else [0.0] * n_opts
    if g:
        for t in toks:
            w = g["w"].get(t)
            if w:
                for j in range(0, len(w), 2):
                    sc[w[j]] += w[j + 1]
    for k, o in enumerate(opts):
        st = [x[:5] for x in o.lower().replace("/", " ").replace("-", " ").split() if len(x) > 3]
        if st and all(any(t.startswith(x) for t in toks) for x in st):
            sc[k] += bonus
    return sc


def train_fine(labels, F, test):
    rows, tax = fine_rows(labels, F)
    if not rows:
        print("fine: no fine labels yet (run describe_labels.py fine-tasks + labeling); shipping bonus-only fine scorer")
        return {"bonus": 1.5, "minConf": 0.25}, {"n": 0}
    groups = defaultdict(list)
    for head, group, k, toks, s in rows:
        groups[(head, group)].append((k, toks, s))
    meta, best = {}, None
    for bonus in (0.0, 1.0, 1.5, 2.5):
        hit1 = defaultdict(lambda: [0, 0]); hit3 = defaultdict(int)
        for (head, group), items in groups.items():
            opts = tax[HEAD_KEY[head]][group]
            g = fit_group([(k, t) for k, t, s in items if s not in test], len(opts))
            for k, t, s in items:
                if s not in test:
                    continue
                sc = score(g, len(opts), t, opts, bonus)
                order = sorted(range(len(opts)), key=lambda j: -sc[j])
                hit1[head][0] += order[0] == k; hit1[head][1] += 1; hit3[head] += k in order[:3]
        tot = sum(v[0] for v in hit1.values()) / max(1, sum(v[1] for v in hit1.values()))
        if best is None or tot > best[0]:
            best = (tot, bonus, {h: {"top1": v[0] / max(1, v[1]), "top3": hit3[h] / max(1, v[1]), "n_test": v[1]} for h, v in hit1.items()})
    _, bonus, meta = best
    for h, m in sorted(meta.items()):
        print(f"fine {h:6s} n_test={m['n_test']:5d}  top1 {m['top1']:.1%}  top3 {m['top3']:.1%}  (given the gold coarse group)")
    fine = {"bonus": bonus, "minConf": 0.25}
    for (head, group), items in groups.items():
        fine.setdefault(head, {})[group] = fit_group([(k, t) for k, t, s in items], len(tax[HEAD_KEY[head]][group]))
    meta["bonus"] = bonus
    meta["n"] = len(rows)
    return fine, meta

if __name__ == "__main__":
    main()
