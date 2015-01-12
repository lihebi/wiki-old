---
title: Linear congruential generator
---

A linear congruential generator (LCG) is an algorithm that yields a sequence of pseudo-randomized numbers.

pseudorandom number generator algorithms(PRNG).

`$X_{n+1} = (aX_n+c) mod m$`

X array is the pseudorandom.

* `$X_0$`: seed
* `m`: modulus
* `a`: multiplier
* `c`: increment

If c = 0, the generator is often called a multiplicative congruential generator (MCG), or Lehmer RNG. If c ≠ 0, the method is called a mixed congruential generator.
