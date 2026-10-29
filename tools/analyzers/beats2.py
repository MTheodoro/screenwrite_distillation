"""Dramatic-beat labels (label.py beat2-tasks): loading, pass agreement, paragraph baseline.

  python beats2.py agree opusA opusB      # ceiling: boundary F1 / mood / type agreement between two passes
"""
import collections, glob, json, sys
import label as L

MOODS = L.MOODS


def load(tag):
    out = {}
    for f in sorted(glob.glob(str(L.LAB / f"beats2_{tag}/group_*.json"))):
        try:
            data = json.load(open(f))
        except json.JSONDecodeError:
            continue
        for s, beats in data.items():
            if not isinstance(beats, list) or not beats:
                continue
            bs = []
            for b in beats:
                if isinstance(b, dict) and isinstance(b.get("start"), int):
                    bs.append(b)
            bs.sort(key=lambda b: b["start"])
            if bs:
                out[s] = bs
    return out


def content(sid):
    return [u["u"] for u in L.load_units(sid)["units"] if u["kind"] in ("action", "dialogue")]


def unit_beats(sid, beats):
    """unit -> beat dict, for content units."""
    cu = content(sid)
    starts = [b["start"] for b in beats]
    res = {}
    for u in cu:
        k = max([i for i, s in enumerate(starts) if s <= u] or [0])
        res[u] = beats[k]
    return res


def f1(p, g, tol):
    p, g = set(p), set(g)
    tp = sum(1 for x in p if any(abs(x - y) <= tol for y in g))
    fn = sum(1 for y in g if not any(abs(x - y) <= tol for x in p))
    return tp, len(p) - tp, fn


def agree(a, b):
    A, B = load(a), load(b)
    both = sorted(set(A) & set(B))
    c = collections.Counter()
    for s in both:
        cu = content(s)
        first = cu[0] if cu else 1
        pa = [x["start"] for x in A[s] if x["start"] != first]
        pb = [x["start"] for x in B[s] if x["start"] != first]
        for tol in (0, 1, 2):
            tp, fp, fn = f1(pa, pb, tol)
            c[f"tp{tol}"] += tp; c[f"fp{tol}"] += fp; c[f"fn{tol}"] += fn
        c["nA"] += len(A[s]); c["nB"] += len(B[s])
        ua, ub = unit_beats(s, A[s]), unit_beats(s, B[s])
        for u in cu:
            c["units"] += 1
            c["mood"] += ua[u].get("mood") == ub[u].get("mood")
            c["type"] += ua[u].get("type") == ub[u].get("type")
    n = len(both)
    print(f"{n} scenes in both; beats/scene {c['nA'] / n:.1f} vs {c['nB'] / n:.1f}")
    for tol in (0, 1, 2):
        tp, fp, fn = c[f"tp{tol}"], c[f"fp{tol}"], c[f"fn{tol}"]
        print(f"boundary F1 (±{tol}): {2 * tp / max(1, 2 * tp + fp + fn):.3f}")
    print(f"per-unit mood agreement {c['mood'] / c['units']:.1%}, type agreement {c['type'] / c['units']:.1%}")
    moods = collections.Counter(x.get("mood") for v in A.values() for x in v)
    print("mood distribution (A):", moods.most_common())


if __name__ == "__main__":
    {"agree": lambda: agree(sys.argv[2], sys.argv[3])}[sys.argv[1]]()


FAM = {"calm": "calm", "tender": "warm", "hopeful": "warm", "playful": "light", "joyful": "light", "triumphant": "light",
       "awkward": "light", "melancholy": "sad", "grief": "sad", "bittersweet": "sad", "tense": "tense", "suspense": "tense",
       "ominous": "tense", "fear": "tense", "hostile": "conflict", "chaotic": "conflict"}
FAMILIES = ["calm", "warm", "light", "sad", "tense", "conflict"]


def consensus(tags, need=2, tol=1):
    """Majority gold from several passes: boundaries that >= need passes place within ±tol units (median position),
    and per content unit the majority mood family / mood."""
    P = [load(t) for t in tags]
    out = {}
    for s in sorted(set.intersection(*[set(p) for p in P])) if len(P) > 1 else sorted(P[0]):
        avail = [p[s] for p in P if s in p]
        if len(avail) < need:
            continue
        cu = content(s)
        first = cu[0] if cu else 1
        pts = sorted((b["start"], k) for k, bs in enumerate(avail) for b in bs if b["start"] != first)
        starts, used = [], set()
        for x, k in pts:
            if (x, k) in used:
                continue
            group = [(y, j) for y, j in pts if abs(y - x) <= tol and (y, j) not in used]
            voters = {j for _, j in group}
            if len(voters) >= need:
                ys = sorted(y for y, _ in group)
                starts.append(ys[len(ys) // 2])
                used |= set(group)
        ub = [unit_beats(s, bs) for bs in avail]
        fam, mood = {}, {}
        for u in cu:
            fs = collections.Counter(FAM.get(m[u].get("mood")) for m in ub)
            ms = collections.Counter(m[u].get("mood") for m in ub)
            fam[u] = fs.most_common(1)[0][0]
            mood[u] = ms.most_common(1)[0][0]
        out[s] = {"starts": sorted(set([first] + starts)), "fam": fam, "mood": mood, "passes": len(avail)}
    return out
