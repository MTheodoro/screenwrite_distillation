"""API-equivalent spend of labeling/generation subagents, read from their transcripts.

Subagents run inside the Claude Code session, so there is no API bill per call. To keep the
250 USD plan meaningful we price every subagent's real token usage at public API rates.

  python spend.py [--dir TRANSCRIPTS] [--tag run_label=agent_id ...]
Writes data/analyzers/spend.json and prints totals per run.
"""
import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "data" / "analyzers"
# $/MTok: input, output. Cache write = 1.25x input, cache read = 0.1x input.
PRICES = {"opus": (4.0, 20.0), "sonnet": (2.0, 10.0), "haiku": (0.10, 0.50)}
BUDGET = 250.0


def family(model):
    m = (model or "").lower()
    return next((k for k in PRICES if k in m), "opus")


def usage_of(path):
    """Last usage per assistant message id (streamed transcripts repeat the message)."""
    msgs = {}
    for line in path.open():
        try:
            d = json.loads(line)
        except json.JSONDecodeError:
            continue
        m = d.get("message")
        if not isinstance(m, dict) or not isinstance(m.get("usage"), dict):
            continue
        msgs[m.get("id") or len(msgs)] = (m.get("model"), m["usage"])
    tot = {"input": 0, "cache_write": 0, "cache_read": 0, "output": 0, "usd": 0.0, "model": None}
    for model, u in msgs.values():
        pi, po = PRICES[family(model)]
        i, cw, cr, o = (u.get("input_tokens", 0), u.get("cache_creation_input_tokens", 0),
                        u.get("cache_read_input_tokens", 0), u.get("output_tokens", 0))
        tot["input"] += i; tot["cache_write"] += cw; tot["cache_read"] += cr; tot["output"] += o
        tot["usd"] += (i * pi + cw * pi * 1.25 + cr * pi * 0.1 + o * po) / 1e6
        tot["model"] = model
    return tot


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dir", required=True, help="subagent transcripts (*.output or agent-*.jsonl)")
    ap.add_argument("--main", help="main session transcript; the orchestrating session's own usage counts too")
    a = ap.parse_args()
    runs = {}
    ledger = OUT / "ledger.jsonl"
    labels = {}
    if ledger.exists():
        for l in ledger.open():
            d = json.loads(l)
            if d.get("agent"):
                labels[d["agent"]] = d["run"]
    for p in sorted(Path(a.dir).glob("*")):
        aid = p.stem.replace("agent-", "")
        u = usage_of(p)
        if u["model"] is None:
            continue
        # Unlabeled agents are attributed by model: Sonnet generates, Haiku labels train, Opus labels gold.
        runs[labels.get(aid) or f"{ {'sonnet': 'gen', 'haiku': 'train'}.get(family(u['model']), 'gold')}:{aid}"] = u
    if a.main:
        runs["main:session"] = usage_of(Path(a.main))
    total = sum(r["usd"] for r in runs.values())
    by_phase = {}
    for k, r in runs.items():
        ph = k.split(":")[0]
        by_phase[ph] = by_phase.get(ph, 0) + r["usd"]
    (OUT / "spend.json").write_text(json.dumps({"runs": runs, "by_phase": by_phase, "total_usd": total}, indent=1))
    for ph, v in sorted(by_phase.items()):
        print(f"{ph:12s} ${v:8.2f}")
    print(f"{'TOTAL':12s} ${total:8.2f} / ${BUDGET:.0f}")


if __name__ == "__main__":
    main()
