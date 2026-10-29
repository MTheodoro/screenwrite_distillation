"""Public-domain plays (Project Gutenberg) -> Fountain excerpts for a real-text gold check.

Speaker lines ("NORA." on its own line, or "OLGA. text" inline) become cues; bracketed stage directions
([...] or _[...]_) become action paragraphs, splitting a speech where they occur inside it.
  python pd_convert.py <gutenberg.txt> <tag> --start "ACT I" [--n 7] [--units 45]
Writes data/analyzers/pd/scenes/pd_<tag>_<k>.fountain
"""
import argparse
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "data" / "analyzers" / "pd" / "scenes"
TRAIN_OUT = ROOT / "data" / "analyzers" / "pdtrain" / "scenes"
SPEAKER = re.compile(r"^([A-Z][A-Z .’'\-]{1,30})\.\s*(.*)$")
DIRECTION = re.compile(r"_?\[([^\]]*)\]_?\.?", re.S)


def blocks(text):
    return [b.strip() for b in re.split(r"\n\s*\n", text) if b.strip()]


def to_units(text):
    """List of ("action", text) / ("speech", name, text)."""
    out = []
    for b in blocks(text):
        b = re.sub(r"\s+", " ", b.replace("_", " ")).strip()
        if re.match(r"^(ACT|SCENE|FIRST ACT|SECOND ACT|THIRD ACT|CURTAIN|END OF)", b):
            continue
        m = SPEAKER.match(b)
        if m and m.group(1).strip() not in ("I", "A"):
            name, rest = m.group(1).strip(), m.group(2)
            pos = 0
            for d in DIRECTION.finditer(rest):
                speech = rest[pos:d.start()].strip()
                if speech:
                    out.append(("speech", name, speech))
                out.append(("action", d.group(1).strip().rstrip(".") + "."))
                pos = d.end()
            tail = rest[pos:].strip()
            if tail:
                out.append(("speech", name, tail))
        else:
            d = DIRECTION.fullmatch(b)
            out.append(("action", (d.group(1) if d else b).strip()))
    return out


def fountain(units, heading):
    lines = [heading, ""]
    last = None
    for u in units:
        if u[0] == "action":
            lines += [u[1], ""]
            last = None
        else:
            cue = u[1] + (" (CONT'D)" if last == u[1] else "")
            lines += [cue, u[2], ""]
            last = u[1]
    return "\n".join(lines)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("src"); ap.add_argument("tag")
    ap.add_argument("--start", default="ACT I"); ap.add_argument("--n", type=int, default=7)
    ap.add_argument("--units", type=int, default=45)
    ap.add_argument("--train", action="store_true", help="write to pdtrain/ (training plays, never gold)")
    a = ap.parse_args()
    raw = Path(a.src).read_text()
    raw = raw[raw.index("*** START"):raw.index("*** END")] if "*** START" in raw else raw
    m = re.search(r"^\s*" + re.escape(a.start), raw, re.M)
    body = raw[m.start():]
    units = [u for u in to_units(body) if u[0] == "speech" or len(u[1]) > 3]
    out = TRAIN_OUT if a.train else OUT
    out.mkdir(parents=True, exist_ok=True)
    stride = max(a.units, (len(units) - a.units) // max(1, a.n - 1))
    for k in range(a.n):
        chunk = units[k * stride: k * stride + a.units]
        if len(chunk) < 20:
            break
        (out / f"{'pt' if a.train else 'pd'}_{a.tag}_{k}.fountain").write_text(fountain(chunk, f"INT. {a.tag.upper()} - CONTINUOUS"))
    print(f"{a.tag}: {len(units)} units -> {k + 1} excerpts")


if __name__ == "__main__":
    main()
