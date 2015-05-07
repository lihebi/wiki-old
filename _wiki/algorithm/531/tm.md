---
title: Turing Machine
---

* `FSA`: finite state automata. A small amount of memory.
* `PDA`: push-down automata. Unlimited memory, usable only in LIFO.
* `RE`: recursively enumerable language. Turing Recognizable.
* `REC`: recursive language. Turing Decidable.

Multi-tape turing machine: The transfer function contains the states and actions of all tapes.

> Prove: Multi tape TM equals to Single tape TM

Add new symbol # to separate the different tapes.
Use upper dot to denote the current position of every tape.

> Prove: doubly infinite TM equals to TM

* =>: Mark the beginning
* <=: Use two tape, first the right half, second the left half.

> Prove: Nondeterministic TM equals to Deterministic TM

Use three tape to simulate the non-deterministic TM.

* original tape. As a record, never modified.
* simulation tape. The worker.
* address tape. Contains the instruction of how to perform on tape2 when encountering with multiple choice.
Will refill with the next string in standard string order.

> RE <=> NTM recognize it

> REC <=> NTM decide it

> RE <=> some enumerator enumerates it

* <=: M="On input w: 1. run E, compare with w"
* =>: E=Ignore input:

```
for i in {1,2,3}
  Run M for i steps on each string s1,s2,...,si in standard string order
  Any accept, output.
```

The string will repeat multiple times.

REC is closed under:

* union
* complementation
* concatenation
* intersection
* star

RE is closed under(no complementation)

* union
* intersection
* concatenation
* star

> REC <=> some enumerator enumerates it in standard string order

* =>: easy
* <=:

1. if L is finite: just compare with all strings in L
2. if L is infinite:

```
On input w:
  use E to generate all strings until bigger than w in standard string order
  if w appears, accept. Otherwise reject
```

#### How to get the middle of a string?
Move two blank from left and right to the middle.
When the two blank meet, it is the middle.

> Describe a NTM for L={0^n1^y | y = x^2 mod n}

* Non-deterministic guess x: 1, 2, 3, ...
* calculate x^2
* calculate y mod n
* calculate x^2 mod n
* compare the previous two results

> infinite RE has infinite subset that is REC

E for RE, run E, output the string in increasing order.

> L={n | at least n consecutive 3s in decimal expansion of PI}

It is decidable.

Two possibilities:

* for every n, there exists
* There's a max N0.

They are complementary to each other.
We don't know which one is right at a time,
but one of them is guaranteed to be true.
Both of them are decidable.

> unary-to-binary

```
   1111
  1X111
 10XX11
 11XXX1
100XXXX
```

1. For every 1 after X, change to X
2. Go backward, change all 1 to 0 until encounter a 0, change it to 1

> binary-to-unary

```
101
100X
011XX
010XXX
001XXXX
000XXXXX
```

For every 1 from right, change 0 after it to 1, then add a X
