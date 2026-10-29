"""Export the bert-tiny cross-encoder for the plain-JS runtime (src/analyzers/tinybert.js): no ONNX, no WASM.

Vocabulary is pruned to the word pieces seen in the training/eval texts (plus all single characters and
special tokens); everything else maps to [UNK]. Matrices are int8 with one scale per output row; biases and
LayerNorm stay float32.

  python export_xenc_js.py --ckpt data/analyzers/phase3/xenc_tiny.pt --base <bert-tiny dir> [--min-count 2]
Writes public/models/who-tiny.bin. Format (little endian):
  u32 header_len | header JSON {config, vocab[], tensors: [{name, shape, dtype, offset, scale_offset}]} | data
"""
import argparse
import json
import struct
from collections import Counter
from pathlib import Path

import numpy as np
import torch
from transformers import AutoTokenizer, BertConfig, BertForSequenceClassification

import label as L

OUT = L.ROOT / "public" / "models" / "who-tiny.bin"
SPECIAL = ["[PAD]", "[UNK]", "[CLS]", "[SEP]", "[MASK]", "[TARGET]"]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--ckpt", required=True)
    ap.add_argument("--base", required=True)
    ap.add_argument("--min-count", type=int, default=2)
    a = ap.parse_args()
    tok = AutoTokenizer.from_pretrained(a.base)
    tok.add_special_tokens({"additional_special_tokens": ["[TARGET]"]})
    cfg = BertConfig.from_pretrained(a.base, num_labels=1)
    model = BertForSequenceClassification(cfg)
    model.resize_token_embeddings(len(tok))
    model.load_state_dict(torch.load(a.ckpt))
    model.eval()

    # Vocabulary actually used by screenplay-like text.
    counts = Counter()
    for name in ("train", "val", "gold"):
        for line in (L.DATA / "phase3" / f"{name}.jsonl").open():
            r = json.loads(line)
            counts.update(tok.tokenize(r["text"]) + tok.tokenize(r["cand"]))
    full = tok.get_vocab()
    keep = [t for t in SPECIAL] + sorted({t for t, c in counts.items() if c >= a.min_count and t not in SPECIAL})
    keep += sorted(t for t in full if len(t.replace("##", "")) == 1 and t not in keep)  # single chars: no hard UNKs
    old_ids = [full[t] for t in keep]
    print(f"vocab {len(full)} -> {len(keep)}")

    sd = {k: v.detach().numpy().astype(np.float32) for k, v in model.state_dict().items()}
    sd["bert.embeddings.word_embeddings.weight"] = sd["bert.embeddings.word_embeddings.weight"][old_ids]
    tensors, blobs, off = [], [], 0
    for name, w in sd.items():
        if name.endswith("position_ids") or name.endswith("token_type_ids"):
            continue
        entry = {"name": name, "shape": list(w.shape)}
        if w.ndim == 2 and w.shape[0] * w.shape[1] >= 4096:  # int8 per-row
            scale = np.abs(w).max(1) / 127.0 + 1e-12
            q = np.clip(np.round(w / scale[:, None]), -127, 127).astype(np.int8)
            entry.update(dtype="int8", offset=off)
            blobs.append(q.tobytes()); off += q.nbytes
            off += (-off) % 4; blobs.append(b"\0" * ((-sum(len(b) for b in blobs)) % 4))
            entry["scale_offset"] = off
            blobs.append(scale.astype("<f4").tobytes()); off += 4 * len(scale)
        else:
            entry.update(dtype="float32", offset=off)
            blobs.append(w.astype("<f4").tobytes()); off += 4 * w.size
        tensors.append(entry)
    conf = {k: getattr(cfg, k) for k in ("hidden_size", "num_hidden_layers", "num_attention_heads",
                                         "intermediate_size", "max_position_embeddings", "layer_norm_eps")}
    header = json.dumps({"config": conf, "vocab": keep, "tensors": tensors}).encode()
    header += b" " * ((-(4 + len(header))) % 4)
    data = b"".join(blobs)
    OUT.write_bytes(struct.pack("<I", len(header)) + header + data)
    print(f"wrote {OUT} ({OUT.stat().st_size / 1e6:.2f} MB)")

    # Reference logits for the JS parity test (fp32 model, original vocab).
    rows = [json.loads(l) for l in (L.DATA / "phase3" / "gold.jsonl").open()][:300]
    with torch.no_grad():
        enc = tok([r["text"] for r in rows], [r["cand"] for r in rows], truncation="only_first", max_length=128,
                  padding=True, return_tensors="pt", return_token_type_ids=True)
        logits = model(**enc).logits[:, 0].tolist()
    ref = L.DATA / "phase3" / "parity.jsonl"
    ref.write_text("".join(json.dumps({"text": r["text"], "cand": r["cand"], "logit": z}) + "\n" for r, z in zip(rows, logits)))
    print(f"parity reference: {ref}")


if __name__ == "__main__":
    main()
