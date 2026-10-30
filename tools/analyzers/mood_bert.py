"""Beat mood with a tiny BERT (bert-tiny / bert-mini), fine-tuned on beat2 labels, scored per unit on Opus gold.

  python mood_bert.py --base <dir> [--epochs 4] [--maxlen 128] [--out data/analyzers/mood_bert.pt]
"""
import argparse, collections, json, random, time
import numpy as np
import torch
from transformers import BertForSequenceClassification, PreTrainedTokenizerFast
import beats2 as B
import label as L

torch.set_num_threads(4)


def beat_texts(s, starts):
    units = L.load_units(s)["units"]
    out = []
    for k, lo in enumerate(starts):
        hi = starts[k + 1] if k + 1 < len(starts) else 10**9
        us = [u for u in units if u["kind"] in ("action", "dialogue") and lo <= u["u"] < hi]
        txt = " ".join((u["name"].title() + ": " if u["kind"] == "dialogue" and u.get("name") else "") + u["text"] for u in us)
        out.append((txt, [u["u"] for u in us]))
    return out


def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--base", required=True); ap.add_argument("--epochs", type=int, default=4)
    ap.add_argument("--maxlen", type=int, default=128); ap.add_argument("--bs", type=int, default=32); ap.add_argument("--lr", type=float, default=1e-4)
    ap.add_argument("--out", default=str(L.DATA / "mood_bert.pt"))
    a = ap.parse_args()
    tok = PreTrainedTokenizerFast(tokenizer_file=f"{a.base}/tokenizer.json", pad_token="[PAD]", unk_token="[UNK]", cls_token="[CLS]", sep_token="[SEP]")
    gold = B.consensus(["opusA", "opusB", "opusC"], need=2)
    train = {}
    for t in ("csonnet", "sonnet", "opusT"):
        train.update(B.load(t))
    rows = []
    for s, bs in train.items():
        if s in gold:
            continue
        try:
            bt = beat_texts(s, [b["start"] for b in bs])
        except FileNotFoundError:
            continue
        for (txt, _), b in zip(bt, bs):
            if b.get("mood") in B.FAM and txt:
                rows.append((txt, B.FAMILIES.index(B.FAM[b["mood"]])))
    random.Random(0).shuffle(rows)
    print(f"train beats {len(rows)}", flush=True)
    model = BertForSequenceClassification.from_pretrained(a.base, num_labels=6)
    opt = torch.optim.AdamW(model.parameters(), lr=a.lr, weight_decay=0.01)
    steps = a.epochs * ((len(rows) + a.bs - 1) // a.bs)
    sched = torch.optim.lr_scheduler.OneCycleLR(opt, max_lr=a.lr, total_steps=steps, pct_start=0.1)
    G = [(s, beat_texts(s, g["starts"]), g) for s, g in gold.items()]

    def evaluate():
        model.eval(); c = collections.Counter()
        with torch.no_grad():
            for s, bt, g in G:
                texts = [t for t, _ in bt]
                enc = tok(texts, truncation=True, max_length=a.maxlen, padding=True, return_tensors="pt", return_token_type_ids=True)
                pred = model(**enc).logits.argmax(-1).tolist()
                for (_, us), p in zip(bt, pred):
                    for u in us:
                        c["n"] += 1; c["ok"] += B.FAMILIES[p] == g["fam"].get(u)
        model.train()
        return c["ok"] / max(1, c["n"])

    model.train()
    for ep in range(a.epochs):
        t0 = time.time(); tot = 0
        for k in range(0, len(rows), a.bs):
            batch = rows[k:k + a.bs]
            enc = tok([t for t, _ in batch], truncation=True, max_length=a.maxlen, padding=True, return_tensors="pt", return_token_type_ids=True)
            out = model(**enc, labels=torch.tensor([y for _, y in batch]))
            out.loss.backward(); opt.step(); sched.step(); opt.zero_grad()
            tot += out.loss.item()
        acc = evaluate()
        print(f"epoch {ep}: loss {tot / (len(rows) / a.bs):.3f}  gold family {acc:.1%}  ({time.time() - t0:.0f}s)", flush=True)
        torch.save(model.state_dict(), a.out)


if __name__ == "__main__":
    main()
