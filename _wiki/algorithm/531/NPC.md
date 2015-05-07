---
title: NPC
---

TIME(t(n)): the collection of languages that are decidable by an O(t(n)) time TM. ==> P

NTIME(t(n)): the collection of languages that are decidable by an O(t(n)) time NTM. ==> NP

> Assume t(n)>n. Every t(n) time single tape NTM equals to a `$2^{O(t(n))}$` time single tape Deterministic TM

> Assume t(n)>n. Every t(n) time multi-tape TM equals to a `$O(t^2(n))$` time single tape TM.


a language is in NP <=> decided by some polynomial time NTM

> Prove clique is in NP

#### Proof 1:
```
V=on input <<G,k>,c>:
  1. Test whether c is a subgraph of k nodes in G
  2. Test whether G contains all edgesconnecting nodes in c
  3. if both pass accept, otherwise reject.
```

#### Proof 2:
```
N=on input <G,k>:
  1. non-deterministically select a subset c of k nodes in G
  2. Test whether c contains all edges connecting nodes in c
  3. if yes, accept. Otherwise reject.
```

language B is in NPC if:

1. B is NP
2. every A in NP is polynomial time reducible to B
