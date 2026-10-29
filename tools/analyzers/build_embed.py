"""Static word embeddings for the worker (Phase 2).

Hugging Face is unreachable from this environment, so instead of a Model2Vec checkpoint we distil the same
kind of model from spaCy's en_core_web_md static vectors (MIT): PCA 300 -> DIMS, int8 per-dimension
quantisation, SIF frequency weights from wordfreq, lookup-and-average at inference.

  python build_embed.py [--dims 64] [--words 50000]
Writes public/models/embed.bin. Format (little endian):
  u32 header_len | header JSON {dims, rows, words, scales} | int8 table[rows*dims] | u16 row[words]
  | u8 weight[words] | utf8 words joined by "\\n"
"""
import argparse
import json
import re
import struct
from pathlib import Path

import numpy as np

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "public" / "models" / "embed.bin"
TOKEN = re.compile(r"[a-z]+(?:'[a-z]+)?")


def tokenize(text):
    return TOKEN.findall(text.lower())


def build(dims, n_words):
    import spacy
    import wordfreq
    nlp = spacy.load("en_core_web_md")
    vec = nlp.vocab.vectors
    strings = nlp.vocab.strings
    words, rows = [], []
    seen = set()
    corpus = Counter_corpus()
    candidates = wordfreq.top_n_list("en", n_words) + [w for w, c in corpus.most_common() if c >= 3]
    for w in candidates:
        if w in seen or not TOKEN.fullmatch(w):
            continue
        key = strings[w] if w in strings else None
        if key is None or key not in vec.key2row:
            continue
        seen.add(w)
        words.append(w)
        rows.append(vec.key2row[key])
    used = sorted(set(rows))
    remap = {r: k for k, r in enumerate(used)}
    table = vec.data[used].astype(np.float64)
    # PCA on the used rows
    mean = table.mean(0)
    u, s, vt = np.linalg.svd(table - mean, full_matrices=False)
    proj = (table - mean) @ vt[:dims].T
    scales = np.abs(proj).max(0) / 127.0
    q = np.clip(np.round(proj / scales), -127, 127).astype(np.int8)
    a = 1e-3
    weights = []
    for w in words:
        p = 10 ** (wordfreq.zipf_frequency(w, "en") - 9)
        weights.append(int(round(255 * a / (a + p))))
    weights = np.maximum(np.array(weights, dtype=np.uint8), 1)
    header = json.dumps({"dims": dims, "rows": len(used), "words": len(words),
                         "scales": [float(x) for x in scales.astype(np.float32)]}).encode()
    pad = (-(4 + len(header))) % 4
    header += b" " * pad
    with OUT.open("wb") as f:
        f.write(struct.pack("<I", len(header)))
        f.write(header)
        f.write(q.tobytes())
        f.write(np.array([remap[r] for r in rows], dtype="<u2").tobytes())
        f.write(weights.tobytes())
        f.write("\n".join(words).encode())
    print(f"wrote {OUT}: {len(words)} words, {len(used)} rows x {dims} dims, {OUT.stat().st_size / 1e6:.2f} MB, "
          f"explained variance {float((s[:dims] ** 2).sum() / (s ** 2).sum()):.2f}")


def Counter_corpus():
    from collections import Counter
    c = Counter()
    for p in (ROOT / "data" / "analyzers" / "gen" / "scenes").glob("*.fountain"):
        c.update(tokenize(p.read_text()))
    return c


class Embedder:
    """Python reference implementation; must match src/analyzers/embed.js."""

    def __init__(self, path=OUT):
        b = path.read_bytes()
        (hl,) = struct.unpack_from("<I", b, 0)
        h = json.loads(b[4:4 + hl])
        o = 4 + hl
        self.dims, n_rows, n_words = h["dims"], h["rows"], h["words"]
        self.scales = np.array(h["scales"], dtype=np.float32).astype(np.float64)
        self.table = np.frombuffer(b, np.int8, n_rows * self.dims, o).reshape(n_rows, self.dims)
        o += n_rows * self.dims
        rows = np.frombuffer(b, "<u2", n_words, o); o += 2 * n_words
        w = np.frombuffer(b, np.uint8, n_words, o); o += n_words
        words = b[o:].decode().split("\n")
        self.index = {word: (int(r), int(x)) for word, r, x in zip(words, rows, w)}

    def __call__(self, text):
        acc = np.zeros(self.dims)
        tot = 0
        for t in tokenize(text):
            hit = self.index.get(t) or (self.index.get(t[:-2]) if t.endswith("'s") else None)
            if not hit:
                continue
            r, w = hit
            acc += w * self.table[r].astype(np.float64)
            tot += w
        if tot:
            acc = acc * self.scales / tot
        return acc.astype(np.float32)


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--dims", type=int, default=64)
    ap.add_argument("--words", type=int, default=50000)
    a = ap.parse_args()
    build(a.dims, a.words)
