"""Synthetic scene generation: spec sampling, agent task files, ingestion.

LLM calls are not made from Python. This session runs generation through
Claude subagents (Sonnet); this script decides *what* to generate and
validates what came back.

  python generate.py specs  --n 1000 --seed 1 [--start 0]
  python generate.py tasks  --batch-size 10        # writes gen/tasks/task_XXX.md
  python generate.py ingest                        # validates gen/scenes/*.fountain
"""
import argparse
import json
import random
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
GEN = ROOT / "data" / "analyzers" / "gen"

GENRES = ["drama", "thriller", "horror", "comedy", "romance", "sci-fi", "western",
          "crime", "family", "war", "mystery", "fantasy", "sports", "period piece",
          "heist", "coming-of-age", "legal drama", "medical drama", "workplace satire",
          "survival"]
LENGTHS = {"short": "0.5-1 page (~10-25 lines)", "medium": "1-3 pages (~25-70 lines)",
           "long": "3-5 pages (~70-130 lines)"}
ARCS = ["rising", "falling", "spike then release", "flat low", "flat high",
        "rollercoaster", "slow burn to explosion", "false calm then reveal"]
HARD = {
    "pronoun_heavy": "Most action lines refer to characters by pronoun (he/she/they), not by name.",
    "same_gender_cast": "At least two characters share the same pronoun, so pronouns are genuinely ambiguous.",
    "multi_speaker": "3+ characters speak in overlapping exchanges; speakers do not simply alternate.",
    "mid_scene_intro": "A new character enters partway through and is introduced in CAPS in an action line.",
    "alias": "One character's cue name changes mid-scene (e.g. STRANGER becomes MARCUS once named, or DET. RUIZ appears as RUIZ).",
    "group_address": "Some lines are addressed to the whole group, some to one person, some muttered to self.",
    "offscreen_voice": "Includes a voice over phone/radio/intercom or (O.S.)/(V.O.) dialogue.",
    "joint_action": "Several action lines have more than one actor (they fight, both freeze, the group scatters).",
    "subtext": "Emotions are mostly shown through behaviour and subtext, rarely named.",
    "dual_dialogue": "Contains one dual-dialogue moment (second cue marked with ^).",
    "dense_action": "Long action paragraphs mixing several characters' actions in one paragraph.",
    "dialogue_run": "A long uninterrupted dialogue exchange with no action lines.",
    "description_heavy": "Includes descriptions of characters and setting, not only actions.",
    "vocative": "Characters address each other by name or nickname in dialogue.",
}
STYLES = ["terse, modern spec-script style", "classic studio style", "literary, descriptive action",
          "punchy, fragmentary action lines", "plain and workmanlike"]


# "Real" variant (scene ids s05000+): contemporary scripts as different writers actually write them.
PERSONAS = [
    "first-time writer: over-explains, some camera directions ('we see', 'CLOSE ON'), a few clumsy lines",
    "working TV drama writer: lean, fast, lots of white space, act-out energy",
    "indie / mumblecore: naturalistic overlapping talk, minimal action, lowercase-casual tone",
    "action blockbuster: punchy fragments, SOUNDS IN CAPS, kinetic one-line paragraphs",
    "multi-cam sitcom: jokes, entrances to applause-ready beats, short action lines",
    "prestige limited series: novelistic action, interiority, long paragraphs",
    "YA / teen drama: texting, phones, social media, slang",
    "British TV writer: British spelling and idiom, understatement",
    "non-native English writer: correct but slightly unidiomatic phrasing, simple sentences",
    "horror spec: sparse, dread, sound-driven, the unseen",
    "rom-com: banter, physical comedy, warmth",
    "procedural (cop / legal / medical): jargon, procedure, ensemble",
    "student short film: small cast, one location, simple and earnest",
    "thriller with heavy camera language: INSERTs, POVs, INTERCUTs, SUPERs",
    "documentary-style / found footage: 'ON CAMERA', handheld notes, interviews",
    "animation / family: playful, vivid, sometimes talking animals or objects",
    "stage-trained writer: long speeches, few directions, (beat) parentheticals",
    "music video / montage-heavy: SERIES OF SHOTS, MONTAGE, time cuts",
    "crime drama with voice-over narration (V.O.) commenting on the action",
    "workplace comedy: Zoom/video calls, Slack messages ON SCREEN, open-plan office",
]
QUIRKS = {
    "no_caps_intro": "Characters are introduced in normal case, NOT in CAPS (e.g. 'Dana, 30s, enters').",
    "short_names": "Use ordinary short contemporary names and nicknames (Sam, Jen, Mo, Big Dave, Mrs. K), no double-barrelled surnames.",
    "same_initials": "Two characters have similar names (e.g. Kim and Kip, or two Davids distinguished by surname).",
    "on_screen_text": "Includes texts / messages / captions shown ON SCREEN (e.g. 'ON PHONE: where r u').",
    "camera_dirs": "Uses a few camera/edit directions in action lines (CLOSE ON, ANGLE ON, WE SEE, INSERT, BACK TO SCENE).",
    "sound_caps": "Sounds in CAPS inside action (a door SLAMS, the phone BUZZES).",
    "run_on": "Some long run-on action paragraphs mixing several characters and setting.",
    "fragments": "Many verbless fragment lines ('Silence.', 'Rain.', 'Nothing.', 'Her phone. Dead.').",
    "unnamed_extras": "Unnamed background people act (a waiter, two teenagers, a dog) besides the cast.",
    "nameless_lead": "One character is known only by a description for a while (THE WOMAN, HOODIE GUY) and is named later.",
    "typos": "A few realistic typos and missing commas, as in an unpolished draft.",
    "group_character": "A group acts as one character (THE BAND, THE TWINS, PROTESTERS) with a cue name.",
    "pronoun_they": "One character uses they/them pronouns.",
    "phone_call": "A phone or video call with the other side heard (V.O.) or (O.S.) or intercut.",
    "dialogue_actions": "Characters' actions are given only as parentheticals inside dialogue, not as action lines.",
    "setting_heavy": "Several lines of pure setting / atmosphere / weather between the actions.",
    "abstract_lines": "One or two narrative / reflective lines that are not visible action ('This is the last time they will speak.').",
}
SETTINGS_NOW = ["a rideshare car at 2am", "an open-plan startup office", "a hospital night shift", "a group chat turned real meetup",
                "a suburban kitchen during a power cut", "a laundromat", "a nail salon", "a climate protest", "a gaming tournament",
                "a food truck", "a wedding afterparty", "a parole office", "a self-storage unit", "a delivery warehouse",
                "a high school bathroom", "a church basement AA meeting", "a recording studio", "a border checkpoint",
                "a crowded subway car", "a vet clinic", "a rooftop bar", "a moving van", "a hotel corridor", "a fertility clinic",
                "a TikTok shoot in a park", "a funeral reception", "a fishing boat", "a teen's bedroom", "a night bus", "a gym"]


def sample_real_spec(i, rng):
    n = cast_size(rng)
    hard = rng.sample(sorted(HARD), k=rng.choice([1, 2]))
    if n <= 2:
        hard = [h for h in hard if h not in ("multi_speaker", "group_address", "dual_dialogue")] or ["pronoun_heavy"]
    return {
        "scene_id": f"s{i:05d}", "variant": "real",
        "genre": rng.choice(GENRES), "length": rng.choices(list(LENGTHS), weights=[3, 5, 2])[0],
        "characters": n, "tension_arc": rng.choice(ARCS), "hard_cases": hard,
        "persona": rng.choice(PERSONAS), "quirks": rng.sample(sorted(QUIRKS), k=rng.choice([2, 3, 3, 4])),
        "setting": rng.choice(SETTINGS_NOW), "setting_seed": rng.randint(0, 10**6),
    }


def cast_size(rng):
    return rng.choices([1, 2, 3, 4, 5, 6], weights=[4, 22, 26, 22, 14, 12])[0]


def sample_spec(i, rng):
    n = cast_size(rng)
    hard = rng.sample(sorted(HARD), k=rng.choice([1, 2, 2, 3]))
    if n == 1:
        hard = [h for h in hard if h not in ("same_gender_cast", "multi_speaker", "joint_action",
                                              "group_address", "dual_dialogue", "vocative")] or ["offscreen_voice"]
        if "offscreen_voice" not in hard:
            hard.append("offscreen_voice")
    if n == 2:
        hard = [h for h in hard if h != "multi_speaker"] or ["same_gender_cast"]
    return {
        "scene_id": f"s{i:05d}",
        "genre": rng.choice(GENRES),
        "length": rng.choices(list(LENGTHS), weights=[3, 5, 2])[0],
        "characters": n,
        "tension_arc": rng.choice(ARCS),
        "hard_cases": hard,
        "style": rng.choice(STYLES),
        "setting_seed": rng.randint(0, 10**6),
    }


def cmd_specs(a):
    GEN.mkdir(parents=True, exist_ok=True)
    rng = random.Random(a.seed * 1_000_003 + a.start)
    path = GEN / "specs.jsonl"
    existing = {json.loads(l)["scene_id"] for l in path.open()} if path.exists() else set()
    with path.open("a") as f:
        for i in range(a.start, a.start + a.n):
            s = sample_real_spec(i, rng) if a.real else sample_spec(i, rng)
            if s["scene_id"] not in existing:
                f.write(json.dumps(s) + "\n")
    print(f"specs: {path}")


TASK_HEADER = """You are writing synthetic screenplay scenes in Fountain format for training text analyzers.
Write each scene below as ORIGINAL work (never reproduce or imitate a specific existing film or script).

Rules for every scene:
- Start with a scene heading (INT./EXT.). Proper Fountain: blank line before character cues, cues in CAPS,
  parentheticals on their own line, transitions only if natural.
- Introduce each character in CAPS the first time they appear in action, with a brief description.
- The cast size is exact: that many distinct characters must act or speak (off-screen voices count).
- Follow the length, genre, style and tension arc. Apply EVERY listed hard case visibly.
- Vary names (ethnicity, era, nicknames). Do not reuse names across scenes in this batch.
- No title page, no notes, no commentary. Only the scene text.

Write each scene to its own file with the Write tool at the given path, then reply with just "done N" (N = files written).
"""


REAL_HEADER = """You are writing contemporary screenplay scenes in Fountain-compatible plain text, as different real writers
would write them today, for testing text analyzers. Write each scene as ORIGINAL work (never reproduce or imitate a
specific existing film or script).

Rules for every scene:
- Start with a scene heading (INT./EXT.). Character cues in CAPS on their own line before dialogue.
- Write in the given writer's voice and apply EVERY listed quirk and hard case visibly. Formatting habits follow the
  writer and quirks (they may differ from textbook format), but cues must stay recognisable.
- The cast size is exact: that many distinct named or cued characters act or speak.
- Set it today, in the given setting. Vary names realistically. Do not reuse names across scenes in this batch.
- No title page, notes or commentary. Only the scene text.

Write each scene to its own file with the Write tool at the given path, then reply with just "done N" (N = files written).
"""


def cmd_tasks(a):
    specs = [json.loads(l) for l in (GEN / "specs.jsonl").open()]
    if a.real:
        specs = [s for s in specs if s.get("variant") == "real"]
    done = {p.stem for p in (GEN / "scenes").glob("*.fountain")}
    todo = [s for s in specs if s["scene_id"] not in done][: a.limit or None]
    tdir = GEN / "tasks"
    tdir.mkdir(exist_ok=True)
    for old in tdir.glob("task_*.md"):
        old.unlink()
    for b in range(0, len(todo), a.batch_size):
        chunk = todo[b:b + a.batch_size]
        lines = [REAL_HEADER if a.real else TASK_HEADER, ""]
        for s in chunk:
            if s.get("variant") == "real":
                lines.append(f"## {s['scene_id']} -> {GEN / 'scenes' / (s['scene_id'] + '.fountain')}")
                lines.append(f"- writer: {s['persona']}")
                lines.append(f"- genre: {s['genre']}; setting: {s['setting']}")
                lines.append(f"- length: {LENGTHS[s['length']]}; characters: {s['characters']}; tension arc: {s['tension_arc']}")
                for q in s["quirks"]:
                    lines.append(f"- quirk: {QUIRKS[q]}")
                for h in s["hard_cases"]:
                    lines.append(f"- hard case: {HARD[h]}")
                lines.append("")
                continue
            lines.append(f"## {s['scene_id']} -> {GEN / 'scenes' / (s['scene_id'] + '.fountain')}")
            lines.append(f"- genre: {s['genre']}; style: {s['style']}")
            lines.append(f"- length: {LENGTHS[s['length']]}; characters: {s['characters']}")
            lines.append(f"- tension arc: {s['tension_arc']}")
            lines.append(f"- setting seed (pick an unusual, specific setting from it): {s['setting_seed']}")
            for h in s["hard_cases"]:
                lines.append(f"- hard case: {HARD[h]}")
            lines.append("")
        (tdir / f"task_{b // a.batch_size:03d}.md").write_text("\n".join(lines))
    print(f"{len(todo)} scenes in {(len(todo) + a.batch_size - 1) // a.batch_size} tasks")


def cmd_ingest(a):
    ok, bad = 0, []
    for p in sorted((GEN / "scenes").glob("*.fountain")):
        t = p.read_text()
        if not re.search(r"^(INT|EXT|I/E|INT\./EXT)", t.lstrip(), re.M) or len(t.split()) < 40:
            bad.append(p.name)
        else:
            ok += 1
    print(f"ok={ok} bad={len(bad)} {bad[:10]}")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("specs"); s.add_argument("--n", type=int, default=20); s.add_argument("--seed", type=int, default=1); s.add_argument("--start", type=int, default=0)
    s.add_argument("--real", action="store_true")
    t = sub.add_parser("tasks"); t.add_argument("--batch-size", type=int, default=10); t.add_argument("--limit", type=int, default=0)
    t.add_argument("--real", action="store_true")
    sub.add_parser("ingest")
    a = ap.parse_args()
    {"specs": cmd_specs, "tasks": cmd_tasks, "ingest": cmd_ingest}[a.cmd](a)
