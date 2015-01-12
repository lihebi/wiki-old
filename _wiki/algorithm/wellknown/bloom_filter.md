---
title: Bloom Filter
---

It is used to judge whether an item is in a set or not.

If bloom() return false, it is false. But if bloom() return true, it may not be true.

The basic idea is, hash(item), map it in a vector of m size.
The vector is 0 initially.
v[hash(item)] is set to 1.
To reduce fault rate, use k hash functions.

To verify, only if all k hash functions has 1 in the vector will it return true.
Otherwise return false.
