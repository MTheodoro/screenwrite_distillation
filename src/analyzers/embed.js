// Static word embeddings: tokenizer + lookup-and-average (see tools/analyzers/build_embed.py for the format).
const TOKEN = /[a-z]+(?:'[a-z]+)?/g;

export function tokenize(text) {
  return text.toLowerCase().match(TOKEN) || [];
}

export function loadEmbedder(buffer) {
  const bytes = new Uint8Array(buffer);
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
  const hl = view.getUint32(0, true);
  const h = JSON.parse(new TextDecoder().decode(bytes.subarray(4, 4 + hl)));
  let o = 4 + hl;
  const { dims, rows: nRows, words: nWords } = h;
  const scales = Float64Array.from(new Float32Array(h.scales));
  const table = new Int8Array(bytes.buffer, bytes.byteOffset + o, nRows * dims);
  o += nRows * dims;
  const rows = new Uint16Array(bytes.slice(o, o + 2 * nWords).buffer); // copy: alignment
  o += 2 * nWords;
  const weights = bytes.subarray(o, o + nWords);
  o += nWords;
  const words = new TextDecoder().decode(bytes.subarray(o)).split("\n");
  const index = new Map();
  words.forEach((w, k) => index.set(w, k));

  function embed(text) {
    const acc = new Float64Array(dims);
    let tot = 0;
    for (const t of tokenize(text)) {
      let k = index.get(t);
      if (k === undefined && t.endsWith("'s")) k = index.get(t.slice(0, -2));
      if (k === undefined) continue;
      const w = weights[k], base = rows[k] * dims;
      for (let d = 0; d < dims; d++) acc[d] += w * table[base + d];
      tot += w;
    }
    const out = new Float32Array(dims);
    if (tot) for (let d = 0; d < dims; d++) out[d] = (acc[d] * scales[d]) / tot;
    return out;
  }
  return { dims, embed, size: bytes.byteLength };
}
