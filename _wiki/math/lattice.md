---
title: lattice
---

lattice
=======

A lattice is a partially ordered set in which every two elements have a unique supremum and a unique infimum.

A lattice is a partially ordered set that is both a meet- and join-semilattice with respect to the same partial order.

semilattice
-----------

a `join-semilattice` (or upper semilattice) is a partially ordered set that has a join for any nonempty finite subset.

a `meet-semilattice` (or lower semilattice) is a partially ordered set which has a meet for any nonempty finite subset.

Infimum and supremum
====================

Infimum of a subset S of a partially ordered set T is:
the greatest element in T that less than or equal to all elements in S.

inf(S) of T = T中不超过S的最大的数。=> meet(S)

sup(S) of T = T中不小于S的最小的数。=> join(S)

```
T
sup(S) join(S)
 --
| S |
 --
inf(S) meet(S)
T
```

Order
=====

### partially ordered set(poset)
for certain pair of elements in the set, one proceeds another.

### total order
for all a,b,c in S, satisfy 3 properties:

* antisymmetry(非对称性): If a ≤ b and b ≤ a then a = b
* transitivity(传递性): If a ≤ b and b ≤ c then a ≤ c
* totality(任意两数必须有关系): a ≤ b or b ≤ a
