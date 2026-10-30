"""Does the kind table learn Opus's setting / event / extra boundary better from Opus labels?

5-fold cross-validation over the gold kind labels: train on Haiku labels + the other 4 folds of gold (weighted), test on
the held-out fold. Honest estimate for a table shipped from Haiku + all gold.
  python kind_cv.py [--w 3] [--vocab 2000]
"""
import argparse
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.linear_model import LogisticRegression
from kind_table import rows, KINDS, TOKEN

ap = argparse.ArgumentParser(); ap.add_argument("--w", type=float, default=3); ap.add_argument("--vocab", type=int, default=2000); ap.add_argument("--C", type=float, default=0.5)
a = ap.parse_args()
X, y, _ = rows("haiku")
Xg, yg, rule = rows("opus")
Xg, yg = np.array(Xg, dtype=object), np.array(yg)
rng = np.random.RandomState(0)
folds = rng.permutation(len(yg)) % 5
for w in ([0, a.w] if a.w else [0]):
    ok = 0
    cm = np.zeros((5, 5), int)
    for f in range(5):
        tr, te = folds != f, folds == f
        Xtr = list(X) + ([] if w == 0 else list(Xg[tr])); ytr = np.concatenate([y, yg[tr]]) if w else y
        sw = np.concatenate([np.ones(len(y)), np.full(int(tr.sum()), w)]) if w else None
        vec = CountVectorizer(token_pattern=TOKEN, ngram_range=(1, 2), max_features=a.vocab, binary=True, min_df=2, lowercase=False)
        clf = LogisticRegression(C=a.C, max_iter=3000).fit(vec.fit_transform(Xtr), ytr, sample_weight=sw)
        pred = clf.predict(vec.transform(list(Xg[te])))
        ok += int((pred == yg[te]).sum())
        for t, p in zip(yg[te], pred): cm[t, p] += 1
    print(f"gold weight {w}: table-only CV accuracy {ok / len(yg):.1%}  (camera/abstract rules not applied here)")
    print(cm)
