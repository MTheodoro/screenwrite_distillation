"""Phase 3: tiny transformer cross-encoder for ambiguous who-attribution.

Scores (context with [TARGET] line, candidate name) pairs; used only when Phase 1's top-two margin is small.
  python train_phase3.py --base <dir with bert-tiny> [--epochs 3]
Exports public/models/who-xenc/ (config, tokenizer, onnx/model_quantized.onnx) for Transformers.js.
"""
import argparse
import json
import random
import shutil
from collections import defaultdict
from pathlib import Path

import numpy as np
import torch
from transformers import AutoTokenizer, BertForSequenceClassification

import label as L

DATA = L.DATA / "phase3"
OUT = L.ROOT / "public" / "models" / "who-xenc"
MAXLEN = 128


def load(name):
    return [json.loads(l) for l in (DATA / f"{name}.jsonl").open()]


def batches(rows, tok, bs, shuffle):
    idx = list(range(len(rows)))
    if shuffle:
        random.shuffle(idx)
    for b in range(0, len(idx), bs):
        chunk = [rows[i] for i in idx[b:b + bs]]
        enc = tok([r["text"] for r in chunk], [r["cand"] for r in chunk], truncation="only_first", max_length=MAXLEN,
                  padding=True, return_tensors="pt", return_token_type_ids=True)
        yield enc, torch.tensor([float(r["y"]) for r in chunk]), chunk


@torch.no_grad()
def score(model, tok, rows):
    model.eval()
    out = []
    for enc, _, chunk in batches(rows, tok, 256, False):
        out += model(**enc).logits[:, 0].tolist()
    return out


def line_accuracy(rows, scores):
    """Top-1 over each ambiguous line's candidates; correct if the chosen candidate is in the label set.
    Lines whose label is not among the top-k candidates count as errors (they are unreachable)."""
    by = defaultdict(list)
    for r, s in zip(rows, scores):
        by[(r["scene_id"], r["u"])].append((s, r["y"], r["c"]))
    hits = sum(max(v)[1] for v in by.values())
    first = sum(v[0][1] for v in by.values())  # Phase 1 winner is always the first candidate written
    oracle = sum(any(y for _, y, _ in v) for v in by.values())
    return hits / len(by), first / len(by), oracle / len(by), len(by)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", required=True)
    ap.add_argument("--epochs", type=int, default=3)
    ap.add_argument("--lr", type=float, default=1e-4)
    ap.add_argument("--bs", type=int, default=64)
    ap.add_argument("--export-only", action="store_true", help="export the saved checkpoint without training")
    ap.add_argument("--ckpt", default=str(DATA / "xenc.pt"))
    ap.add_argument("--no-onnx", action="store_true", help="skip the ONNX export (plain-JS runtime uses export_xenc_js.py)")
    a = ap.parse_args()
    torch.manual_seed(0); random.seed(0)
    torch.set_num_threads(4)
    tok = AutoTokenizer.from_pretrained(a.base)
    tok.pad_token, tok.cls_token, tok.sep_token, tok.unk_token, tok.mask_token = "[PAD]", "[CLS]", "[SEP]", "[UNK]", "[MASK]"
    tok.add_special_tokens({"additional_special_tokens": ["[TARGET]"]})
    model = BertForSequenceClassification.from_pretrained(a.base, num_labels=1)
    model.resize_token_embeddings(len(tok))
    train, val, gold = load("train"), load("val"), load("gold")
    ckpt = Path(a.ckpt)
    if a.export_only:
        model.load_state_dict(torch.load(ckpt))
        export(model, tok, gold)
        return
    opt = torch.optim.AdamW(model.parameters(), lr=a.lr, weight_decay=0.01)
    steps = a.epochs * (len(train) + a.bs - 1) // a.bs
    sched = torch.optim.lr_scheduler.OneCycleLR(opt, max_lr=a.lr, total_steps=steps, pct_start=0.1)
    lossf = torch.nn.BCEWithLogitsLoss()
    for ep in range(a.epochs):
        model.train()
        tot = 0
        for k, (enc, y, _) in enumerate(batches(train, tok, a.bs, True)):
            loss = lossf(model(**enc).logits[:, 0], y)
            loss.backward()
            torch.nn.utils.clip_grad_norm_(model.parameters(), 1.0)
            opt.step(); sched.step(); opt.zero_grad()
            tot += loss.item()
        torch.save(model.state_dict(), Path(a.ckpt).with_suffix(f".ep{ep}.pt"))  # survive container restarts
        acc, base, orc, n = line_accuracy(val, score(model, tok, val))
        print(f"epoch {ep}: loss {tot / (k + 1):.3f} | val lines {n}: xenc {acc:.3f} vs phase1 {base:.3f} (oracle {orc:.3f})")
    acc, base, orc, n = line_accuracy(gold, score(model, tok, gold))
    print(f"GOLD ambiguous lines {n}: xenc {acc:.3f} vs phase1 {base:.3f} (oracle top-k {orc:.3f})")
    torch.save(model.state_dict(), ckpt)
    if a.no_onnx:
        print("exported (checkpoint only)", ckpt)
        return
    export(model, tok, gold)


def export(model, tok, gold):
    from onnxruntime.quantization import QuantType, quantize_dynamic
    if OUT.exists():
        shutil.rmtree(OUT)
    (OUT / "onnx").mkdir(parents=True)
    model.eval()
    model.config.save_pretrained(OUT)
    tok.save_pretrained(OUT)
    enc = tok([gold[0]["text"]], [gold[0]["cand"]], return_tensors="pt", return_token_type_ids=True)
    fp32 = OUT / "onnx" / "model.onnx"
    torch.onnx.export(model, (enc["input_ids"], enc["attention_mask"], enc["token_type_ids"]), str(fp32),
                      input_names=["input_ids", "attention_mask", "token_type_ids"], output_names=["logits"],
                      dynamic_axes={k: {0: "batch", 1: "seq"} for k in ["input_ids", "attention_mask", "token_type_ids"]},
                      opset_version=17, dynamo=False)
    quantize_dynamic(str(fp32), str(OUT / "onnx" / "model_quantized.onnx"), weight_type=QuantType.QInt8)
    fp32.unlink()
    for f in OUT.glob("*.txt"):
        if f.name != "vocab.txt":
            f.unlink()
    size = sum(f.stat().st_size for f in OUT.rglob("*") if f.is_file())
    print(f"exported {OUT} ({size / 1e6:.2f} MB)")


if __name__ == "__main__":
    main()
