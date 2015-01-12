---
title: Tabulation hashing
---

input key is `p` bits, output is `q` bits.
choose a `r` less then `p`, and `$t=\lceil p/r \rceil$`.

view a key as t r-bit numbers. Use a lookup table filled with random values
to compute hash value for each of t numbers. Xor them together.

The choice of r should be made in such a way that this table is not too large,
so that it fits into the computer's cache memory.
