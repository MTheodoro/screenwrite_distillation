"""Turn labels + JS features into training/eval matrices.

Labels come from label.py (train: Haiku single pass, gold: 3-pass agreement). Features always come from
the JS code via features.mjs, so the shipped worker sees exactly what the models were trained on.
"""
import json
import subprocess
from pathlib import Path

import numpy as np

import label as L

ROOT = L.ROOT
DATA = L.DATA
FEAT_CACHE = DATA / "features"
NONE, ALL, SELF, NOBODY = -1, -2, -3, -4
SPECIAL = {"ALL": ALL, "SELF": SELF, "NONE": NOBODY}
EMOS = L.EMOTIONS


def feature_names(emb=False):
    r = subprocess.run(["node", str(ROOT / "tools/analyzers/features.mjs"), "--names"] + (["--emb"] if emb else []),
                       capture_output=True, text=True, check=True)
    return json.loads(r.stdout)


def features(requests, tag, emb=False):
    """requests: list of {scene_id, source, beats:{name:[...]}}. Cached per tag."""
    FEAT_CACHE.mkdir(parents=True, exist_ok=True)
    path = FEAT_CACHE / f"{tag}.jsonl"
    have = {}
    if path.exists():
        for l in path.open():
            d = json.loads(l)
            have[d["scene_id"]] = d
    todo = [r for r in requests if r["scene_id"] not in have]
    if todo:
        inp = "".join(json.dumps(r) + "\n" for r in todo)
        res = subprocess.run(["node", str(ROOT / "tools/analyzers/features.mjs")] + (["--emb"] if emb else []),
                             input=inp, capture_output=True, text=True, check=True)
        with path.open("a") as f:
            for l in res.stdout.splitlines():
                d = json.loads(l)
                have[d["scene_id"]] = d
                f.write(l + "\n")
    return have


def ids_of(groups):
    """frozenset of (frozenset ids | special str) -> (set of char ids grouped, specials)."""
    gs = [g for g in groups if isinstance(g, frozenset)]
    sp = {x for x in groups if isinstance(x, str)}
    return gs, sp


def train_scene_labels():
    """scene_id -> normalised Haiku labels (who/to/emo). Beats come from the Opus beats-only pass where it exists
    (Haiku under-segments badly); scenes without Opus beats are not used for the boundary or tension models."""
    opus = L.beat_labels("opus")
    out = {}
    for f in sorted((L.LAB / "train").glob("*.json")):
        d = L.load_units(f.stem)
        if not L.valid(f, d, True)[0]:
            continue
        lab = json.loads(f.read_text())
        norm, _ = L.norm_label(lab, d)
        ob = opus.get(f.stem)
        out[f.stem] = {"units": norm, "beats": ob or lab["beats"], "opus": ob is not None, "d": d}
    return out


def gold_scene_labels():
    out = {}
    p = DATA / "gold.jsonl"
    if not p.exists():
        return out
    for l in p.open():
        g = json.loads(l)
        d = L.load_units(g["scene_id"])
        units = {}
        for k, v in g["units"].items():
            e = {}
            if "who" in v:
                e["who"] = frozenset(frozenset(x) if not (len(x) == 1 and isinstance(x[0], str)) else x[0] for x in v["who"])
            if "to" in v:
                e["to"] = frozenset(frozenset(x) if not (len(x) == 1 and isinstance(x[0], str)) else x[0] for x in v["to"])
            if "emo" in v:
                e["emo"] = tuple(v["emo"])
            if "t" in v:
                e["t"] = v["t"]
            units[int(k)] = e
        out[g["scene_id"]] = {"units": units, "beats": g["beats"], "opus": True, "d": d}
    return out


def requests_for(labels):
    reqs = []
    for sid, lab in labels.items():
        reqs.append({"scene_id": sid, "source": lab["d"]["source"], "index": scene_index(sid, lab["d"]["source"]), "beats": {"label": lab["beats"]}})
    return reqs


def scene_index(sid, source=None):
    """Scene number inside its source file: ids are the file stem, or stem_k for multi-scene files."""
    if source is not None and Path(source).stem == sid:
        return 0
    return int(sid.rsplit("_", 1)[1]) if "_" in sid and sid.rsplit("_", 1)[1].isdigit() else 0


def actor_target(cand, who):
    gs, sp = ids_of(who)
    if cand == NONE:
        return int(not gs)
    return int(any(cand in g for g in gs))


def addr_target(cand, to):
    gs, sp = ids_of(to)
    if cand < 0:
        return int({ALL: "ALL", SELF: "SELF", NOBODY: "NONE"}[cand] in sp)
    return int(any(cand in g for g in gs))


def build(labels, feats, use_beats="label"):
    """Return dict of task -> dict(X, y, group/unit ids, scene ids)."""
    B = {"X": [], "y": [], "sid": [], "u": []}
    A = {"X": [], "y": [], "sid": [], "u": [], "c": []}
    D = {"X": [], "y": [], "sid": [], "u": [], "c": []}
    E = {"X": [], "y": [], "yi": [], "sid": [], "u": []}
    T = {"X": [], "sid": [], "k": []}
    for sid, lab in labels.items():
        f = feats[sid]
        units = lab["units"]
        beats = set(lab["beats"])
        first = f["boundary"][0][0] if f["boundary"] else None
        for i, x in f["boundary"]:
            if i == first or not lab.get("opus"):
                continue
            B["X"].append(x); B["y"].append(int(i in beats)); B["sid"].append(sid); B["u"].append(i)
        for i, c, x in f["actor"]:
            v = units.get(i)
            if not v or "who" not in v:
                continue
            A["X"].append(x); A["y"].append(actor_target(c, v["who"])); A["sid"].append(sid); A["u"].append(i); A["c"].append(c)
        for i, c, x in f["addr"]:
            v = units.get(i)
            if not v or "to" not in v:
                continue
            D["X"].append(x); D["y"].append(addr_target(c, v["to"])); D["sid"].append(sid); D["u"].append(i); D["c"].append(c)
        for i, x in f["emo"]:
            v = units.get(i)
            if not v or "emo" not in v:  # gold omits emo where the 3 passes disagreed
                continue
            emo = v.get("emo") or ("neutral", 0.0)  # an action line that shows no emotion is neutral
            E["X"].append(x); E["y"].append(EMOS.index(emo[0])); E["yi"].append(float(emo[1])); E["sid"].append(sid); E["u"].append(i)
        if lab.get("opus"):
            bs = sorted(lab["beats"])
            for i, x in f["unitTension"]:
                k = sum(1 for b in bs if b <= i) - 1
                if k >= 0:
                    T["X"].append(x); T["sid"].append(sid); T["k"].append(k)
    for M in (B, A, D, E, T):
        M["X"] = np.array(M["X"], dtype=np.float32)
        for k in M:
            if k != "X":
                M[k] = np.array(M[k])
    return {"boundary": B, "actor": A, "addr": D, "emo": E, "tension": T}
