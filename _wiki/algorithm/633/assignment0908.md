---
title: assignment 0908
---


1.**Given an example of a infinite set `$X \in {0,1}^{\infty}$`
that seems to be small
(has probability zero in the independent fair coin tossing game),
prove that it does by defining a martingale d that succeed on every element of X.**

The set X is `$\{01, 0101, 010101, \ldots \}$`.
More formally, `$X = \{01\}^*$`.

The martingale strategy is, for odd tossing, bet 1, for even tossing, bet 0.
Then we can see, this martingale will succeed on all item in X.
It is a martingale because

* `$d(\lambda)=\alpha$`,
* `$d(w)=\frac{d(w1)+d(w0)}{2}$` because no matter win or not, the amount of lose and win is the same.
* `$d(w) \geq 0$`

2.**Do (1), challenging others in the class to find the martingale**

3.**(optional) Try to do this with an uncountable set X**

This X is uncountable.
