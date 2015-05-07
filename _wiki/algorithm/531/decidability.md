---
title: Decidability
---

Regular < Context-Free < REC < RE

* Countable: it is finite or same size as N

* same size as N: pair 1 to N to the language

> R(real number) is uncountable

1. list every pair of (1, r1), (2, r2), ...
2. construct a R: 第一位和r1不一样，第二位和r2不一样，。。。

#### Cardinality argument
* There're uncountably many languages.
* There're only countably many RE
* There're only countably many co-RE

> languages are uncountable

Sequence of binary of uncountable. The same as R.
Then for every language A:

```
all string={x, 0, 1, 00, 01, 10, ...}
A         ={   0,    00,     10, ...}
output    ={0, 1, 0, 1,  0,  1,  ...}
```

So the language is converted to a binary sequence.

> TMs are countable

all strings are countable: we can write down string in standard order.

A TM can encode into a string.

> some language is not RE

Because there're uncountable languages, but countable TMs.

#### An undecidable language: A_TM

Suppose it is decidable. H decides it.

```
D=On input <M>:
  1. Run H on <M, <M> >
  2. Output opposite.
```

Run D on <D> will get contradiction.

> REC <=> RE and co-RE

* =>: easy
* <=: run M1 M2 on w in parallel

> To prove co-RE: prove not REC and is RE.

#### Rice's theorem

> Let P be any non-trival property of language.
Prove that determining a language has in P is undecidable.

0. Assume R decide P
1. P is non-trival, we can assume `$<L_{T0}> \in P$`(`$L_{T0} = \phi$`).
Otherwise we take `$P^c$` into consideration.
2. There exists a `$<L_T> \in P$` while `$<L_{T0}> \not\in P$`.
3. Construct a TM to decide `$A_{TM}$`:

```
On input <M,w>:
  M' = on input x:
    M(x) reject => reject;
    M(x) accept => act like T
    M(x) loop => loop
  run R on <M'>. If accept, accept. Otherwise reject.
```

* if M(w) accept, M' is the same as T, the TM accept.
* if M(w) reject, M' is empty(`$<T0>$`), the TM reject.

Thus the TM can decide whether M accept w, which is `$A_{TM}$`.
And `$A_{TM}$` is undecidable.

#### Problems


> A is RE: {<M1>,<M2>,...}. Every Mi is decider.
Prove that some decider D is not in any of Mi

We need to construct D to differ from every Mi.

```
On input w:
  The index i of w in standard string order.
  run Mi on w, if accept, reject. Otherwise accept.
```

> L separates (A,B) is `$A \subset L$` and `$B \subset L^c$`.
> Let `$A,B \in co-RE$` be two disjoint languages.
> Show that there is a decidable language separate (A,B).

`$A \in co-RE$` => `$A^c = L(M_1)$`

A,B disjoint => no string w both in A and B

Run M_1, M_2 on w in parallel, see which one halts first. Then do something.
One of them must halt.

> Prove that K in RE <=> there exists L in REC s.t. K={x | exists y s.t. <x,y> in L}

* =>: on input <x,y>, convert y into a index t, run M_k on x for t steps.
* <=: E enumerates <x,y> in y's standard order. Run M_l on <x,y_i>
