// Plain-JS BERT cross-encoder (bert-tiny: 2 layers x 128 hidden), int8 weights, pruned vocabulary.
// No ONNX / WASM runtime: the whole model is one ~1 MB file (public/models/who-tiny.bin, see export_xenc_js.py).

// ---------- BERT uncased WordPiece tokenizer ----------
function isPunct(ch) {
  const c = ch.codePointAt(0);
  if ((c >= 33 && c <= 47) || (c >= 58 && c <= 64) || (c >= 91 && c <= 96) || (c >= 123 && c <= 126)) return true;
  return /\p{P}/u.test(ch);
}

function basicTokens(text) {
  const t = text.toLowerCase().normalize("NFD").replace(/\p{Mn}/gu, "");
  const out = [];
  for (const w of t.split(/\s+/)) {
    if (!w) continue;
    if (w === "[target]") { out.push("[TARGET]"); continue; }
    let cur = "";
    for (const ch of w) {
      if (isPunct(ch)) { if (cur) out.push(cur); out.push(ch); cur = ""; } else cur += ch;
    }
    if (cur) out.push(cur);
  }
  return out;
}

export function makeTokenizer(vocab) {
  const index = new Map(vocab.map((t, i) => [t, i]));
  const UNK = index.get("[UNK]");
  function wordpiece(word) {
    if (index.has(word)) return [index.get(word)];
    const ids = [];
    let start = 0;
    while (start < word.length) {
      let end = word.length, id;
      while (end > start) {
        const piece = (start > 0 ? "##" : "") + word.slice(start, end);
        if (index.has(piece)) { id = index.get(piece); break; }
        end--;
      }
      if (id === undefined) return [UNK];
      ids.push(id);
      start = end;
    }
    return ids;
  }
  return {
    index,
    encode(text) { return basicTokens(text).flatMap((w) => (w === "[TARGET]" ? [index.get("[TARGET]")] : wordpiece(w))); },
  };
}

// ---------- model ----------
export function loadTinyBert(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const hl = view.getUint32(0, true);
  const h = JSON.parse(new TextDecoder().decode(bytes.subarray(4, 4 + hl)));
  const base = bytes.byteOffset + 4 + hl;
  const W = {};
  for (const t of h.tensors) {
    const n = t.shape.reduce((a, b) => a * b, 1);
    if (t.dtype === "int8") {
      // int8 on the wire; dequantised once to float32 so the inner loops stay plain float math.
      const q = new Int8Array(bytes.buffer, base + t.offset, n), s = new Float32Array(bytes.buffer, base + t.scale_offset, t.shape[0]);
      const f = new Float32Array(n), cols = t.shape[1];
      for (let r = 0; r < t.shape[0]; r++) for (let c = 0; c < cols; c++) f[r * cols + c] = q[r * cols + c] * s[r];
      W[t.name] = f;
    } else {
      W[t.name] = new Float32Array(bytes.buffer.slice(base + t.offset, base + t.offset + 4 * n));
    }
  }
  const cfg = h.config, H = cfg.hidden_size, NH = cfg.num_attention_heads, HD = H / NH, eps = cfg.layer_norm_eps;
  const tok = makeTokenizer(h.vocab);
  const [CLS, SEP] = [tok.index.get("[CLS]"), tok.index.get("[SEP]")];

  // y[T x out] = x[T x in] * W^T + b, with W int8 rows (out x in) and per-row scales.
  function linear(x, T, name) {
    const w = W[name + ".weight"], b = W[name + ".bias"];
    const out = b.length, inn = w.length / out;
    const y = new Float32Array(T * out);
    for (let t = 0; t < T; t++) {
      const xo = t * inn;
      for (let o = 0; o < out; o++) {
        let s0 = 0, s1 = 0, s2 = 0, s3 = 0;
        const wo = o * inn;
        let i = 0;
        for (; i + 3 < inn; i += 4) {
          s0 += x[xo + i] * w[wo + i]; s1 += x[xo + i + 1] * w[wo + i + 1];
          s2 += x[xo + i + 2] * w[wo + i + 2]; s3 += x[xo + i + 3] * w[wo + i + 3];
        }
        for (; i < inn; i++) s0 += x[xo + i] * w[wo + i];
        y[t * out + o] = s0 + s1 + s2 + s3 + b[o];
      }
    }
    return y;
  }
  function layerNorm(x, T, name) {
    const g = W[name + ".weight"], b = W[name + ".bias"];
    for (let t = 0; t < T; t++) {
      let m = 0, v = 0;
      for (let i = 0; i < H; i++) m += x[t * H + i];
      m /= H;
      for (let i = 0; i < H; i++) { const d = x[t * H + i] - m; v += d * d; }
      const r = 1 / Math.sqrt(v / H + eps);
      for (let i = 0; i < H; i++) x[t * H + i] = (x[t * H + i] - m) * r * g[i] + b[i];
    }
    return x;
  }
  const gelu = (x) => 0.5 * x * (1 + erf(x / Math.SQRT2));
  function erf(x) { // Abramowitz-Stegun 7.1.26, |err| < 1.5e-7
    const s = Math.sign(x); x = Math.abs(x);
    const t = 1 / (1 + 0.3275911 * x);
    return s * (1 - ((((1.061405429 * t - 1.453152027) * t + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x));
  }
  function embedRow(name, id, out, o) {
    const w = W[name], base = id * H;
    for (let i = 0; i < H; i++) out[o + i] += w[base + i];
  }

  // Score one (text, candidate) pair: logit, higher = candidate is the actor.
  function score(text, cand, maxLen = 128) {
    let a = tok.encode(text), b = tok.encode(cand);
    if (a.length + b.length + 3 > maxLen) a = a.slice(0, maxLen - 3 - b.length);
    const ids = [CLS, ...a, SEP, ...b, SEP];
    const types = ids.map((_, k) => (k < a.length + 2 ? 0 : 1));
    const T = ids.length;
    let x = new Float32Array(T * H);
    for (let t = 0; t < T; t++) {
      embedRow("bert.embeddings.word_embeddings.weight", ids[t], x, t * H);
      embedRow("bert.embeddings.position_embeddings.weight", t, x, t * H);
      embedRow("bert.embeddings.token_type_embeddings.weight", types[t], x, t * H);
    }
    layerNorm(x, T, "bert.embeddings.LayerNorm");
    for (let l = 0; l < cfg.num_hidden_layers; l++) {
      const p = `bert.encoder.layer.${l}.`;
      const q = linear(x, T, p + "attention.self.query"), k = linear(x, T, p + "attention.self.key"), v = linear(x, T, p + "attention.self.value");
      const ctx = new Float32Array(T * H), sc = new Float32Array(T), norm = 1 / Math.sqrt(HD);
      for (let hh = 0; hh < NH; hh++) {
        const ho = hh * HD;
        for (let i = 0; i < T; i++) {
          let mx = -Infinity;
          for (let j = 0; j < T; j++) {
            let s = 0;
            for (let d = 0; d < HD; d++) s += q[i * H + ho + d] * k[j * H + ho + d];
            sc[j] = s * norm; if (sc[j] > mx) mx = sc[j];
          }
          let sum = 0;
          for (let j = 0; j < T; j++) { sc[j] = Math.exp(sc[j] - mx); sum += sc[j]; }
          for (let j = 0; j < T; j++) { const w = sc[j] / sum; for (let d = 0; d < HD; d++) ctx[i * H + ho + d] += w * v[j * H + ho + d]; }
        }
      }
      const ao = linear(ctx, T, p + "attention.output.dense");
      for (let i = 0; i < ao.length; i++) ao[i] += x[i];
      x = layerNorm(ao, T, p + "attention.output.LayerNorm");
      const inter = linear(x, T, p + "intermediate.dense");
      for (let i = 0; i < inter.length; i++) inter[i] = gelu(inter[i]);
      const out = linear(inter, T, p + "output.dense");
      for (let i = 0; i < out.length; i++) out[i] += x[i];
      x = layerNorm(out, T, p + "output.LayerNorm");
    }
    const pooled = linear(x.subarray(0, H), 1, "bert.pooler.dense").map(Math.tanh);
    return linear(pooled, 1, "classifier")[0];
  }
  return { score, size: bytes.byteLength, vocabSize: h.vocab.length };
}
