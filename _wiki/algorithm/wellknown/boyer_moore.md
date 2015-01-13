---
title: Boyer Moore
---

It is a string match algorithm.

The rule lookup is in a hash table,
which can be formed during proprocessing of pattern.

Bad Character Rule
------------------

```
-	-	-	-	X	-	-	K	-	-	-
A	N	P	A	n	M	A	N	A	M	-
-	N	n	A	A	M	A	N	-	-	-
-	-	-	N	n	A	A	M	A	N	-
```

from right end to left.
when a mismatch happens at `n`,
find to left a `n`, then shift it to the position.

Good Suffix Rule
----------------

```
-	-	-	-	X	-	-	K	-	-	-	-	-
M	A	N	P	A	n	a	m	A	N	A	P	-
A	n	a	m	P	n	a	m	-	-	-	-	-
-	-	-	-	A	n	a	m	P	N	A	M	-
```

when a mismatch happens,
`nam` is the longest good suffix.
Find `nam` to the left,
and shift it to the position.

Galil Rule
----------

As opposed to shifting, the Galil rule deals with speeding up the actual comparisons done at each alignment by skipping sections that are known to match. Suppose that at an alignment k1, P is compared with T down to character c of T. Then if P is shifted to k2 such that its left end is between c and k1, in the next comparison phase a prefix of P must match the substring T[(k2 - n)..k1]. Thus if the comparisons get down to position k1 of T, an occurrence of P can be recorded without explicitly comparing past k1. In addition to increasing the efficiency of Boyer-Moore, the Galil rule is required for proving linear-time execution in the worst case.
