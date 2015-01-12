---
title: Rolling Hash
---

Rabin-Karp rolling hash
-----------------------

Cyclic Polynomial (Buzhash)
-----------------

`s(a)` means shift a left.

`$H=s^{k-1}(h(c_1)) \oplus s^{k-2}(h(c_2)) \oplus \ldots \oplus s(h(c_{k-1})) \oplus h(c_k)$`

`h` is a tabulation hashing.

To remove `$c_1$` and add `$c_{k+1}$`:

`$H = s(H) \oplus s^k(h(c_1)) \oplus h(c_{k+1})$`
