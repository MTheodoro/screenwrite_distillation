"""Labeling: task rendering, validation, gold agreement, export.

LLM labeling runs through Claude subagents (Haiku for `train`, 3 independent Opus passes with
varied prompts for `gold`). This script writes their task files and turns their JSON back into
datasets.

  python label.py units                                 # parse every scene once (via Node)
  python label.py tasks  --mode train --ids s00000-s00019 --batch-size 10
  python label.py tasks  --mode gold  --pass A --ids ...  (passes A, B, C)
  python label.py check  --mode train|gold [--pass A]   # validate outputs, list missing/invalid
  python label.py merge-gold                            # 3-pass agreement -> gold.jsonl, ambiguous.jsonl
  python label.py tension-tasks --mode gold|train       # gold: 3 passes on majority beats; train: cross-scene pairs
  python label.py export                                # train_*.jsonl / gold_*.jsonl in the brief's per-line format
"""
import argparse
import itertools
import json
import random
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "data" / "analyzers"
UNITS = DATA / "units"
LAB = DATA / "labels"
SCENE_DIRS = [DATA / "gen" / "scenes", DATA / "pd" / "scenes", ROOT / "data" / "own"]

EMOTIONS = ["neutral", "joy", "sadness", "anger", "fear", "surprise", "disgust", "affection"]
LINE_TYPES = {"A": "action", "D": "description", "S": "setting"}

GUIDE = """## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  }%TENSION_SCHEMA%
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
"""
TENSION_SCHEMA = """,
  "tension": [<one score 0-100 per beat, same order as "beats">]"""
TENSION_GUIDE = """- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.
"""

PASS_INTRO = {
    "train": "You are an annotator labeling screenplay scenes for a dataset.",
    "A": "You are an experienced script supervisor annotating scenes for a continuity database. Work carefully, line by line.",
    "B": ("You are a computational linguist building a coreference and discourse corpus. For each sentence, first decide "
          "silently what every pronoun and noun phrase refers to, then label. Prefer the reading a careful reader would "
          "settle on, and lower your confidence when two readings are plausible."),
    "C": ("You are a dramaturg reading the scene as an audience member would experience it. Follow who is doing what to "
          "whom moment by moment, then label."),
}
OUTPUT_RULE = ("\nWrite each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write "
               "tool. Do not write anything else. Reply only with \"done N\".\n")


def scene_files():
    out = {}
    for d in SCENE_DIRS:
        for p in sorted(d.glob("*.fountain")) if d.exists() else []:
            out[p.stem] = p
    return out


def cmd_units(a):
    UNITS.mkdir(parents=True, exist_ok=True)
    files = [p for sid, p in scene_files().items() if a.force or not (UNITS / f"{sid}.json").exists()]
    for i in range(0, len(files), 200):
        res = subprocess.run(["node", str(ROOT / "tools/analyzers/units.mjs"), *map(str, files[i:i + 200])],
                             capture_output=True, text=True, check=True)
        for line in res.stdout.splitlines():
            d = json.loads(line)
            (UNITS / f"{d['scene_id']}.json").write_text(json.dumps(d))
    print(f"units: {len(list(UNITS.glob('*.json')))} scenes")


def load_units(sid):
    return json.loads((UNITS / f"{sid}.json").read_text())


def parse_ids(spec):
    if not spec:
        return sorted(p.stem for p in UNITS.glob("*.json"))
    if "-" in spec and not Path(spec).exists():
        a, b = spec.split("-")
        pre = re.match(r"[a-z]+", a).group(0)
        w = len(a) - len(pre)
        return [f"{pre}{i:0{w}d}" for i in range(int(a[len(pre):]), int(b[len(pre):]) + 1)
                if (UNITS / f"{pre}{i:0{w}d}.json").exists()]
    if Path(spec).exists():
        return Path(spec).read_text().split()
    return spec.split(",")


def render_scene(d):
    lines = [f"### SCENE {d['scene_id']} | {d.get('heading') or ''}",
             "Detected names (may be incomplete or contain aliases): " + ", ".join(c["name"] for c in d["cast"])]
    for u in d["units"]:
        if u["kind"] == "action":
            lines.append(f"{u['u']} A {'¶ ' if u['sent'] == 0 else ''}{u['text']}")
        elif u["kind"] == "dialogue":
            ext = f" [{', '.join(u['ext'])}]" if u["ext"] else ""
            par = f" ({'; '.join(u['paren'])})" if u["paren"] else ""
            lines.append(f"{u['u']} D {u['name']}{ext}{par}: {u['text']}")
        elif u["kind"] == "transition":
            lines.append(f"{u['u']} T {u['text']}")
    return "\n".join(lines)


def out_dir(mode, pas):
    return LAB / ("train" if mode == "train" else f"gold_{pas}")


def cmd_tasks(a):
    ids = parse_ids(a.ids)
    pas = a.pas if a.mode == "gold" else "train"
    od = out_dir(a.mode, pas)
    od.mkdir(parents=True, exist_ok=True)
    todo = [s for s in ids if a.force or not valid(od / f"{s}.json", load_units(s), a.mode == "train")[0]]
    if a.mode == "gold":  # different scene order per pass
        random.Random(ord(pas)).shuffle(todo)
    tdir = LAB / "tasks" / pas
    tdir.mkdir(parents=True, exist_ok=True)
    for old in tdir.glob("*.md"):
        old.unlink()
    with_t = a.mode == "train"
    guide = GUIDE.replace("%TENSION_SCHEMA%", TENSION_SCHEMA if with_t else "") + (TENSION_GUIDE if with_t else "")
    for b in range(0, len(todo), a.batch_size):
        chunk = todo[b:b + a.batch_size]
        body = [PASS_INTRO[pas], "", guide, OUTPUT_RULE, "## Scenes", ""]
        for s in chunk:
            body += [f"Output path: {od / (s + '.json')}", render_scene(load_units(s)), ""]
        (tdir / f"task_{b // a.batch_size:03d}.md").write_text("\n".join(body))
    print(f"{len(todo)} scenes -> {tdir} ({(len(todo) + a.batch_size - 1) // a.batch_size} tasks)")


def valid(path, d, need_tension):
    if not path.exists():
        return False, "missing"
    try:
        lab = json.loads(path.read_text())
    except json.JSONDecodeError as e:
        return False, f"json: {e}"
    want = {str(u["u"]) for u in d["units"] if u["kind"] in ("action", "dialogue")}
    got = set(lab.get("lines", {}))
    if len(want - got) > max(1, 0.05 * len(want)):  # tolerate a few skipped lines; they stay unlabeled
        return False, f"lines missing {sorted(want - got, key=int)[:5]}"
    beats = lab.get("beats")
    if not isinstance(beats, list) or not beats or beats != sorted(set(beats)):
        return False, "beats"
    if need_tension and len(lab.get("tension", [])) != len(beats):
        return False, "tension length"
    for k, v in lab["lines"].items():
        if k not in want:
            continue
        e = v.get("emo")
        if isinstance(e, list) and (len(e) != 2 or e[0] not in EMOTIONS):
            return False, f"emo {k}"
        if isinstance(e, dict) and any(not isinstance(x, list) or x[0] not in EMOTIONS for x in e.values()):
            return False, f"emo {k}"
    return True, ""


def cmd_check(a):
    pas = a.pas if a.mode == "gold" else "train"
    od = out_dir(a.mode, pas)
    ids = parse_ids(a.ids)
    bad = {}
    for s in ids:
        ok, why = valid(od / f"{s}.json", load_units(s), a.mode == "train")
        if not ok:
            bad[s] = why
    print(f"{len(ids) - len(bad)}/{len(ids)} valid in {od.name}")
    for s, w in list(bad.items())[:20]:
        print(" ", s, w)


# ---------- canonicalisation: map a labeler's names onto parser character ids ----------

TITLES = {"MR", "MRS", "MS", "MISS", "DR", "DET", "DETECTIVE", "OFFICER", "SGT", "SERGEANT", "CAPT", "CAPTAIN", "LT",
          "LIEUTENANT", "AGENT", "PROF", "PROFESSOR", "REV", "FATHER", "SISTER", "AUNT", "UNCLE", "SIR", "LADY", "LORD",
          "YOUNG", "OLD", "LITTLE", "BIG", "MAJOR", "COL", "GENERAL", "GEN", "DOC", "NURSE", "JUDGE", "COACH", "THE"}


def ktoks(n):
    return [t for t in re.sub(r"[.,]", "", n.upper()).split() if t not in TITLES]


def same(a, b):
    ka, kb = ktoks(a), ktoks(b)
    if not ka or not kb:
        return a.upper() == b.upper()
    s, l = (ka, kb) if len(ka) <= len(kb) else (kb, ka)
    return all(t in l for t in s)


def name_groups(lab, d):
    """canonical label name -> frozenset of parser char ids (empty = OTHER)."""
    groups = {}
    variants = {}
    for v, c in (lab.get("cast") or {}).items():
        variants.setdefault(c.upper(), set()).update({v.upper(), c.upper()})
    for c, vs in variants.items():
        ids = {ch["id"] for ch in d["cast"] for v in vs for n in ch["names"] if same(v, n)}
        groups[c] = frozenset(ids)
    return groups


def resolve(names, groups):
    out = set()
    for n in names or []:
        n = n.upper()
        if n in ("ALL", "SELF", "NONE"):
            out.add(n)
            continue
        g = groups.get(n)
        if g is None:
            g = next((v for k, v in groups.items() if same(k, n)), frozenset())
        out.add(g if g else "OTHER")
    return frozenset(out)


def norm_label(lab, d):
    """Pass-independent view: per unit {'t', 'who': frozenset of groups, 'to', 'emo': (class, intensity)}."""
    groups = name_groups(lab, d)
    speakers = {u["u"]: u.get("speaker", -1) for u in d["units"]}
    res = {}
    for k, v in lab["lines"].items():
        n = int(k)
        u = d["units"][n] if n < len(d["units"]) else None
        if not u:
            continue
        if u["kind"] == "action":
            t = v.get("t", "A")
            who = resolve(v.get("who"), groups) if t != "S" else frozenset()
            emo = None
            if isinstance(v.get("emo"), dict) and v["emo"]:
                first = next(iter(v["emo"].values()))
                emo = (first[0], float(first[1]))
            res[n] = {"t": t, "who": who, "emo": emo, "c": v.get("c")}
        else:
            e = v.get("emo")
            res[n] = {"to": resolve(v.get("to"), groups), "emo": (e[0], float(e[1])) if isinstance(e, list) else None,
                      "c": v.get("c"), "speaker": speakers[n]}
    return res, groups


def jsonable_set(s):
    return sorted((sorted(x) if isinstance(x, frozenset) else [x] for x in s), key=str)


def cmd_merge_gold(a):
    ids = parse_ids(a.ids)
    gold, amb, stats = [], [], Counter()
    for s in ids:
        d = load_units(s)
        labs = []
        for p in "ABC":
            path = LAB / f"gold_{p}" / f"{s}.json"
            if valid(path, d, False)[0]:
                labs.append(json.loads(path.read_text()))
        if len(labs) < 3:
            stats["scenes_incomplete"] += 1
            continue
        norms = [norm_label(l, d)[0] for l in labs]
        # beats: majority vote per boundary
        votes = Counter(b for l in labs for b in set(l["beats"]))
        beats = sorted(b for b, c in votes.items() if c >= 2)
        first = next(u["u"] for u in d["units"] if u["kind"] in ("action", "dialogue"))
        if first not in beats:
            beats = [first] + beats
        units = {}
        for u in d["units"]:
            n = u["u"]
            if u["kind"] not in ("action", "dialogue"):
                continue
            vs = [x.get(n) for x in norms]
            if any(v is None for v in vs):
                continue
            entry = {}
            if u["kind"] == "action":
                ts = [v["t"] for v in vs]
                whos = [v["who"] for v in vs]
                if len(set(ts)) == 1:
                    entry["t"] = ts[0]
                if len(set(whos)) == 1:
                    entry["who"] = jsonable_set(whos[0])
                else:
                    amb.append({"scene_id": s, "u": n, "field": "who", "text": u["text"],
                                "votes": [jsonable_set(w) for w in whos]})
                stats["who_agree" if "who" in entry else "who_disagree"] += 1
            else:
                tos = [v["to"] for v in vs]
                if len(set(tos)) == 1:
                    entry["to"] = jsonable_set(tos[0])
                else:
                    amb.append({"scene_id": s, "u": n, "field": "to", "text": u["text"],
                                "votes": [jsonable_set(t) for t in tos]})
                stats["to_agree" if "to" in entry else "to_disagree"] += 1
            emos = [v["emo"][0] if v["emo"] else "neutral" for v in vs]
            if len(set(emos)) == 1:
                ints = [v["emo"][1] if v["emo"] else 0.0 for v in vs]
                entry["emo"] = [emos[0], round(sum(ints) / 3, 3)]
                stats["emo_agree"] += 1
            else:
                amb.append({"scene_id": s, "u": n, "field": "emo", "text": u["text"], "votes": emos})
                stats["emo_disagree"] += 1
            if entry:
                units[n] = entry
        bnd_agree = sum(1 for c in votes.values() if c == 3) / max(1, len(votes))
        stats["beat_bounds_unanimous_frac_sum"] += bnd_agree
        stats["scenes"] += 1
        gold.append({"scene_id": s, "beats": beats, "units": units})
    (DATA / "gold.jsonl").write_text("".join(json.dumps(g) + "\n" for g in gold))
    (DATA / "ambiguous.jsonl").write_text("".join(json.dumps(x) + "\n" for x in amb))
    n = max(1, stats["scenes"])
    print(f"gold scenes {stats['scenes']} (incomplete {stats['scenes_incomplete']})")
    for f in ("who", "to", "emo"):
        t = stats[f + "_agree"] + stats[f + "_disagree"]
        print(f"  {f}: {stats[f + '_agree']}/{t} unanimous ({stats[f + '_agree'] / max(1, t):.1%})")
    print(f"  beat boundaries unanimous: {stats['beat_bounds_unanimous_frac_sum'] / n:.1%}")
    print(f"  ambiguous rows: {len(amb)}")


# ---------- beats-only pass (stronger model, tiny output) ----------

BEAT_TASK = """You segment screenplay scenes into BEATS for a writing tool's timeline.

A beat is the smallest stretch in which ONE dramatic thing happens, after which the situation has changed:
an action, a reaction, a new tactic or turn in an argument, a reveal, an entrance or exit, a decision.
- A beat can be dialogue only, action only, or mixed. It can start in the middle of an action paragraph.
- Do NOT start a beat just because the speaker changes: a question and its answer are usually one beat;
  a back-and-forth on the same point is one beat.
- DO start a beat when the subject or goal of the exchange changes, when someone does something that changes the
  situation, when a new character enters or leaves, or when new information lands.
- Pure scene-setting at the top (setting, introductions before anything happens) is one beat.
- Typical beats are 2-8 units; a single unit can be a beat if it is a turning point.

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to %OUT% with the Write tool: {"<scene_id>": [unit numbers that START a beat, ascending], ...}
Include every scene below. The first content unit always starts a beat. Valid JSON only. Reply only with "done".
"""


def cmd_beat_tasks(a):
    ids = parse_ids(a.ids)
    od = LAB / f"beats_{a.tag}"
    od.mkdir(parents=True, exist_ok=True)
    tdir = LAB / "tasks" / f"beats_{a.tag}"
    tdir.mkdir(parents=True, exist_ok=True)
    for old in tdir.glob("*.md"):
        old.unlink()
    done = set()
    for f in od.glob("group_*.json"):
        try:
            done |= set(json.loads(f.read_text()))
        except json.JSONDecodeError:
            pass
    todo = [s for s in ids if s not in done]
    n = 0
    for b in range(0, len(todo), a.batch_size):
        chunk = todo[b:b + a.batch_size]
        out = od / f"group_{len(list(od.glob('group_*.json'))) + n:04d}.json"
        body = [BEAT_TASK.replace("%OUT%", str(out)), "## Scenes", ""]
        for s in chunk:
            body += [render_scene(load_units(s)), ""]
        (tdir / f"task_{n:03d}.md").write_text("\n".join(body))
        n += 1
    print(f"{len(todo)} scenes -> {n} beat tasks in {tdir}")


def beat_labels(tag):
    out = {}
    for f in sorted((LAB / f"beats_{tag}").glob("group_*.json")):
        try:
            out.update({k: sorted(set(v)) for k, v in json.loads(f.read_text()).items() if isinstance(v, list)})
        except json.JSONDecodeError:
            pass
    return out


# ---------- tension ----------

def beat_texts(d, beats):
    units = [u for u in d["units"] if u["kind"] in ("action", "dialogue", "transition")]
    bs = sorted(beats)
    out = []
    for i, b in enumerate(bs):
        end = bs[i + 1] if i + 1 < len(bs) else 10 ** 9
        txt = []
        for u in units:
            if b <= u["u"] < end:
                txt.append(u["text"] if u["kind"] != "dialogue" else f"{u['name']}: {u['text']}")
        out.append(" / ".join(txt))
    return out


TENSION_TASK = """%INTRO%

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to %OUT% with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".
"""


def cmd_tension_tasks(a):
    rng = random.Random(7)
    if a.mode == "gold":
        gold = {g["scene_id"]: g for g in map(json.loads, (DATA / "gold.jsonl").open())}
        done = set()
        for f in (LAB / "tension_A").glob("group_*.pairs.json"):
            if f.with_name(f.name.replace(".pairs", "")).exists():
                done |= set(json.loads(f.read_text())["scenes"])
        ids = sorted(s for s in gold if s not in done)
        passes = "ABC"
        beats_of = lambda s: gold[s]["beats"]
    else:
        opus = beat_labels("opus")
        done = set()
        for f in (LAB / "tension_T").glob("group_*.pairs.json"):
            if f.with_name(f.name.replace(".pairs", "")).exists():
                done |= set(json.loads(f.read_text())["scenes"])
        ids = [s for s in parse_ids(a.ids) if s in opus and s not in done]
        passes = ["T"]
        beats_of = lambda s: opus[s]
    rng.shuffle(ids)
    groups = [ids[i:i + a.batch_size] for i in range(0, len(ids), a.batch_size)]
    for p in passes:
        tdir = LAB / "tasks" / f"tension_{p}"
        tdir.mkdir(parents=True, exist_ok=True)
        for old in tdir.glob("*.md"):
            old.unlink()
        od = LAB / f"tension_{p}"
        od.mkdir(parents=True, exist_ok=True)
        base = len(list(od.glob("group_*.pairs.json")))  # groups accumulate across runs
        for gi, g in enumerate(groups):
            gi += base
            out = od / f"group_{gi:03d}.json"
            if out.exists() and not a.force:
                continue
            texts = {s: beat_texts(load_units(s), beats_of(s)) for s in g}
            pairs = []
            pool = [(s, i) for s in g for i in range(len(texts[s]))]
            r2 = random.Random(gi)
            for _ in range(a.pairs):
                x, y = r2.sample(pool, 2)
                if x[0] != y[0]:
                    pairs.append((x, y))
            intro = PASS_INTRO["train" if p == "T" else p]
            body = [TENSION_TASK.replace("%INTRO%", intro).replace("%OUT%", str(out)), "## Scenes"]
            order = list(g) if p in "AT" else list(reversed(g))
            for s in order:
                body.append(f"\n### {s}")
                body += [f"{i}. {t}" for i, t in enumerate(texts[s])]
            body.append("\n## Comparisons")
            for k, (x, y) in enumerate(pairs):
                body.append(f"p{k}: a = {x[0]} beat {x[1]} | b = {y[0]} beat {y[1]}")
            (tdir / f"task_{gi - base:03d}.md").write_text("\n".join(body))
            (od / f"group_{gi:03d}.pairs.json").write_text(json.dumps({"scenes": g, "pairs": pairs}))
        print(f"tension tasks pass {p}: {len(list(tdir.glob('*.md')))}")


def tension_pairs(mode):
    """List of (scene_a, beat_a, scene_b, beat_b, y) with y=1 if a more tense. Within-scene pairs come from scores
    (|diff| >= 10), cross-scene pairs from explicit judgments. Gold keeps only pairs where all 3 passes agree."""
    passes = "ABC" if mode == "gold" else "T"
    per_pass = []
    for p in passes:
        od = LAB / f"tension_{p}"
        pairs = {}
        for f in sorted(od.glob("group_*.pairs.json")):
            res = f.with_name(f.name.replace(".pairs", ""))
            if not res.exists():
                continue
            try:
                r = json.loads(res.read_text())
            except json.JSONDecodeError:
                continue
            meta = json.loads(f.read_text())
            if True:  # within-scene pairs from per-beat scores (train: Haiku on Opus beats; gold: Opus)
                for s, sc in (r.get("scores") or {}).items():
                    for i, j in itertools.combinations(range(len(sc)), 2):
                        if abs(sc[i] - sc[j]) >= 10:
                            pairs[(s, i, s, j)] = int(sc[i] > sc[j])
            for k, (x, y) in enumerate(meta["pairs"]):
                v = (r.get("pairs") or {}).get(f"p{k}")
                if v in ("a", "b"):
                    pairs[(x[0], x[1], y[0], y[1])] = int(v == "a")
        per_pass.append(pairs)
    if mode == "train":
        return [(*k, v) for k, v in per_pass[0].items()]
    keys = set(per_pass[0]) & set(per_pass[1]) & set(per_pass[2])
    return [(*k, per_pass[0][k]) for k in keys if per_pass[0][k] == per_pass[1][k] == per_pass[2][k]]


# ---------- export in the brief's per-line format ----------

def cmd_export(a):
    rows = []
    for f in sorted((LAB / "train").glob("*.json")):
        s = f.stem
        d = load_units(s)
        if not valid(f, d, True)[0]:
            continue
        lab = json.loads(f.read_text())
        norm, groups = norm_label(lab, d)
        for u in d["units"]:
            v = norm.get(u["u"])
            if v is None:
                continue
            cands = [c["id"] for c in d["cast"] if c["id"] in u["present"] or c["first"] <= u["u"]]
            if u["kind"] == "action":
                ids = sorted({i for g in v["who"] if isinstance(g, frozenset) for i in g})
                rows.append({"scene_id": s, "line": u["u"], "type": LINE_TYPES.get(v["t"], "action"), "candidates": cands,
                             "character": ids, "other": "OTHER" in v["who"], "confidence": v["c"],
                             "emotion": v["emo"]})
            else:
                to = sorted({i for g in v["to"] if isinstance(g, frozenset) for i in g})
                special = sorted(x for x in v["to"] if isinstance(x, str))
                rows.append({"scene_id": s, "line": u["u"], "type": "dialogue", "candidates": cands,
                             "character": [u["speaker"]], "addressee": to, "addressee_special": special,
                             "confidence": v["c"], "emotion": v["emo"]})
        rows_b = {"scene_id": s, "beats": lab["beats"], "tension": lab["tension"]}
        with (DATA / "train_beats.jsonl").open("a" if a.append else "w") as fb:
            fb.write(json.dumps(rows_b) + "\n")
        a.append = True
    (DATA / "train_lines.jsonl").write_text("".join(json.dumps(r) + "\n" for r in rows))
    tp = tension_pairs("train")
    (DATA / "train_pairs.jsonl").write_text("".join(json.dumps(p) + "\n" for p in tp))
    print(f"train lines {len(rows)}, train pairs {len(tp)}")
    if (DATA / "gold.jsonl").exists() and (LAB / "tension_A").exists():
        gp = tension_pairs("gold")
        (DATA / "gold_pairs.jsonl").write_text("".join(json.dumps(p) + "\n" for p in gp))
        print(f"gold pairs {len(gp)}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    u = sub.add_parser("units"); u.add_argument("--force", action="store_true")
    for name in ("tasks", "check"):
        t = sub.add_parser(name)
        t.add_argument("--mode", choices=["train", "gold"], required=True)
        t.add_argument("--pass", dest="pas", choices=list("ABC"), default="A")
        t.add_argument("--ids", default="")
        t.add_argument("--batch-size", type=int, default=10)
        t.add_argument("--force", action="store_true")
    m = sub.add_parser("merge-gold"); m.add_argument("--ids", default="")
    tt = sub.add_parser("tension-tasks")
    tt.add_argument("--mode", choices=["train", "gold"], required=True)
    tt.add_argument("--ids", default="")
    tt.add_argument("--batch-size", type=int, default=10)
    tt.add_argument("--pairs", type=int, default=30)
    tt.add_argument("--force", action="store_true")
    e = sub.add_parser("export"); e.add_argument("--append", action="store_true")
    bt = sub.add_parser("beat-tasks"); bt.add_argument("--tag", required=True); bt.add_argument("--ids", default="")
    bt.add_argument("--batch-size", type=int, default=50)
    a = ap.parse_args()
    {"units": cmd_units, "tasks": cmd_tasks, "check": cmd_check, "merge-gold": cmd_merge_gold,
     "tension-tasks": cmd_tension_tasks, "export": cmd_export, "beat-tasks": cmd_beat_tasks}[a.cmd](a)
