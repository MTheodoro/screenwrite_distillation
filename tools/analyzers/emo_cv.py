"""Does the emotion word table learn Opus's emotions better with the gold lines in training?

5-fold CV over the gold (syn) emotion lines: table trained on Haiku train lines + the other folds of gold (weighted),
tested on the held-out fold. Table-only numbers (the shipped model adds trees on top).
  python emo_cv.py [--w 5] [--vocab 3000]
"""
import argparse
import numpy as np
from emo_table import train_rows, gold_rows, fit

ap = argparse.ArgumentParser(); ap.add_argument("--w", type=float, default=5); ap.add_argument("--vocab", type=int, default=3000); ap.add_argument("--C", type=float, default=1.0)
a = ap.parse_args()
X, y = train_rows()
Gx, Gy = gold_rows()["syn"]
Gx = np.array(Gx, dtype=object)
folds = np.random.RandomState(0).permutation(len(Gy)) % 5
for w in sorted({0, a.w}):
    ok = 0
    for f in range(5):
        tr, te = folds != f, folds == f
        if w:
            vec, clf = fit(list(X) + list(Gx[tr]), np.concatenate([y, Gy[tr]]), a.vocab, a.C) if False else (None, None)
            from sklearn.feature_extraction.text import CountVectorizer
            from sklearn.linear_model import LogisticRegression
            from emo_table import TOKEN
            vec = CountVectorizer(token_pattern=TOKEN, ngram_range=(1, 2), max_features=a.vocab, binary=True, min_df=3)
            Xv = vec.fit_transform(list(X) + list(Gx[tr]))
            clf = LogisticRegression(C=a.C, max_iter=2000).fit(Xv, np.concatenate([y, Gy[tr]]), sample_weight=np.concatenate([np.ones(len(y)), np.full(int(tr.sum()), w)]))
        else:
            vec, clf = fit(X, y, a.vocab, a.C)
        ok += int((clf.predict(vec.transform(list(Gx[te]))) == Gy[te]).sum())
    print(f"gold weight {w}: table-only CV accuracy {ok / len(Gy):.1%}  (n={len(Gy)})")
