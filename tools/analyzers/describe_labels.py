"""Labels for beat summaries and scene / place / character descriptions (closed vocabularies only).

One Haiku pass per scene on the Opus beats. Every field is chosen from a fixed list, so tiny classifiers can learn
it and the app assembles descriptions from templates (no free text generation).

  python describe_labels.py tasks --batch-size 90      # data/analyzers/labels/tasks/desc/task_*.md
  python describe_labels.py check
"""
import argparse
import json
import random

import label as L

BEAT_TYPES = ["arrives", "leaves", "confronts", "accuses", "threatens", "attacks", "defends", "flees", "hides",
              "searches", "discovers", "reveals", "confesses", "lies", "deflects", "persuades", "pleads", "comforts",
              "bonds", "jokes", "mocks", "decides", "observes", "works"]
PLACES = ["home", "workplace", "street", "vehicle", "nature", "bar_restaurant", "shop", "institution",
          "industrial", "venue", "transit", "other"]
ATMOS = ["calm", "tense", "eerie", "chaotic", "intimate", "festive", "bleak", "claustrophobic", "cozy", "sterile",
         "gritty", "dreamy"]
ROLES = ["drives", "opposes", "ally", "authority", "vulnerable", "observer", "comic", "mediator"]
TRAITS = ["nervous", "confident", "angry", "warm", "cold", "playful", "sarcastic", "secretive", "curious", "desperate",
          "calm", "authoritative", "vulnerable", "defiant", "manipulative", "kind", "weary", "impulsive", "cautious",
          "arrogant", "sad", "hopeful", "frightened", "determined"]
OUT = L.LAB / "desc"

GUIDE = f"""You label screenplay scenes for a writing tool. Every answer must come from the fixed lists below.

For each scene, write one JSON object:
{{"scene_id": "...",
 "place": one of {PLACES},
 "atmos": 1-2 of {ATMOS},
 "beats": [{{"b": <beat number>, "type": one of {BEAT_TYPES}, "actor": "<character name or NONE>", "target": "<character name or NONE>"}}, ...],
 "chars": {{"<character name>": {{"role": one of {ROLES}, "traits": 1-3 of {TRAITS}}}, ...}}}}

Rules:
- One entry per numbered beat, in order. type = the main dramatic action of that beat; actor = who performs it;
  target = who it is aimed at (NONE if nobody). Use the character names exactly as listed for the scene.
- place = the kind of location (use the scene heading). atmos = how the scene feels.
- chars: every listed character who acts or speaks. role = their function in THIS scene; traits = how they come
  across in THIS scene, from the text only.
Write all scenes of this task as JSON Lines (one object per line) to %OUT% with the Write tool. No other text in the
file. Reply only with "done N".
"""


def render(d, beats):
    names = ", ".join(c["name"] for c in d["cast"])
    lines = [f"### SCENE {d['scene_id']} | {d.get('heading') or ''}", f"Characters: {names}"]
    bs = sorted(beats)
    content = [u for u in d["units"] if u["kind"] in ("action", "dialogue")]
    for k, b in enumerate(bs):
        end = bs[k + 1] if k + 1 < len(bs) else 10 ** 9
        txt = " ".join((f"{u['name']}: " if u["kind"] == "dialogue" else "") + u["text"] for u in content if b <= u["u"] < end)
        lines.append(f"[beat {k}] {txt}")
    return "\n".join(lines)


def cmd_tasks(a):
    opus = L.beat_labels("opus")
    ids = sorted(s for s in opus if (L.UNITS / f"{s}.json").exists())
    done = set()
    for f in OUT.glob("*.jsonl"):
        for l in f.open():
            try:
                done.add(json.loads(l)["scene_id"])
            except Exception:
                pass
    ids = [s for s in ids if s not in done]
    tdir = L.LAB / "tasks" / "desc"
    tdir.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)
    for f in tdir.glob("*.md"):
        f.unlink()
    for k in range(0, len(ids), a.batch_size):
        chunk = ids[k:k + a.batch_size]
        out = OUT / f"part_{len(list(OUT.glob('part_*.jsonl'))) + k // a.batch_size:03d}.jsonl"
        body = [GUIDE.replace("%OUT%", str(out)), "## Scenes", ""]
        for s in chunk:
            body += [render(L.load_units(s), opus[s]), ""]
        (tdir / f"task_{k // a.batch_size:03d}.md").write_text("\n".join(body))
    print(f"{len(ids)} scenes -> {(len(ids) + a.batch_size - 1) // a.batch_size} tasks")


def load_all():
    rows = {}
    for f in sorted(OUT.glob("*.jsonl")):
        for l in f.open():
            try:
                d = json.loads(l)
                rows[d["scene_id"]] = d
            except Exception:
                pass
    return rows


def cmd_check(a):
    rows = load_all()
    ok = sum(1 for d in rows.values() if d.get("place") in PLACES and isinstance(d.get("beats"), list))
    print(f"{len(rows)} labeled scenes, {ok} well-formed")


if __name__ == "__main__" and __import__("sys").argv[1:2] != ["fine-tasks"]:
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    t = sub.add_parser("tasks"); t.add_argument("--batch-size", type=int, default=90)
    sub.add_parser("check")
    a = ap.parse_args()
    {"tasks": cmd_tasks, "check": cmd_check}[a.cmd](a)


# ---------- second pass: fine labels within the chosen coarse group ----------
FINE_OUT = L.LAB / "desc_fine"


def load_taxonomy():
    import subprocess
    js = "import('" + str(L.ROOT / "src/analyzers/taxonomy.js") + "').then(m=>console.log(JSON.stringify({b:m.BEAT_FINE,p:m.PLACE_FINE,a:m.ATMOS_FINE,r:m.ROLE_FINE,t:m.TRAIT_FINE})))"
    return json.loads(subprocess.run(["node", "-e", js], capture_output=True, text=True, check=True).stdout)


FINE_GUIDE = """You refine labels for screenplay scenes. Each item already has a coarse label; pick the ONE best fine label
from the options listed for it (copy the option text exactly).

For each scene write one JSON object:
{"scene_id": "...", "place": "<fine>", "atmos": ["<fine for each coarse atmos, same order>"],
 "beats": ["<fine for beat 0>", "<fine for beat 1>", ...],
 "chars": {"<NAME>": {"role": "<fine>", "traits": ["<fine for each coarse trait, same order>"]}}}

Write all scenes as JSON Lines in THREE files with the Write tool: scenes 1-30 to %OUT%_a.jsonl, 31-60 to %OUT%_b.jsonl,
the rest to %OUT%_c.jsonl. No other text in the files. Reply only with "done N".
"""


def cmd_fine_tasks(a):
    tax = load_taxonomy()
    coarse = load_all()
    opus = L.beat_labels("opus")
    FINE_OUT.mkdir(parents=True, exist_ok=True)
    tdir = L.LAB / "tasks" / "desc_fine"
    tdir.mkdir(parents=True, exist_ok=True)
    for f in tdir.glob("*.md"):
        f.unlink()
    ids = sorted(s for s in coarse if s in opus and (L.UNITS / f"{s}.json").exists())
    opt = lambda group, key: " | ".join(tax[group].get(key, []))
    for k in range(0, len(ids), a.batch_size):
        chunk = ids[k:k + a.batch_size]
        out = FINE_OUT / f"part_{k // a.batch_size:03d}"
        body = [FINE_GUIDE.replace("%OUT%", str(out)), "## Scenes", ""]
        for s in chunk:
            c = coarse[s]
            body.append(render(L.load_units(s), opus[s]))
            body.append(f"PLACE ({c.get('place')}): {opt('p', c.get('place'))}")
            for x in c.get("atmos", []):
                body.append(f"ATMOS ({x}): {opt('a', x)}")
            for b in c.get("beats", []):
                body.append(f"BEAT {b.get('b')} ({b.get('type')}): {opt('b', b.get('type'))}")
            for name, cl in (c.get("chars") or {}).items():
                if isinstance(cl, dict):
                    body.append(f"CHAR {name} ROLE ({cl.get('role')}): {opt('r', cl.get('role'))}")
                    for t in cl.get("traits", []):
                        body.append(f"CHAR {name} TRAIT ({t}): {opt('t', t)}")
            body.append("")
        (tdir / f"task_{k // a.batch_size:03d}.md").write_text("\n".join(body))
    print(f"{len(ids)} scenes -> {(len(ids) + a.batch_size - 1) // a.batch_size} fine tasks")


def load_fine():
    rows = {}
    for f in sorted(FINE_OUT.glob("*.jsonl")):
        for l in f.open():
            try:
                d = json.loads(l)
                rows[d["scene_id"]] = d
            except Exception:
                pass
    return rows


if __name__ == "__main__" and len(__import__("sys").argv) > 1 and __import__("sys").argv[1] == "fine-tasks":
    ap = argparse.ArgumentParser(); ap.add_argument("cmd"); ap.add_argument("--batch-size", type=int, default=90)
    cmd_fine_tasks(ap.parse_args())
