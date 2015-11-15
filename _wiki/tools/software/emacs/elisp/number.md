---
title: number
---

# types
* general read syntax for char: `?a` => 97.
* a `sequence` is a Lisp object that represents an ordered set of elements.
- Lists are the most commonly-used sequences, can hold element of any type
- Arrays are fixed-length sequences

TODO what's the use of Arrary?

# predicate functions

Type can be predicted by a list of prediction functions.
For example, `(symbolp x)` will be `t` if `x` is a `Symbol`.

There're equal predicators, e.g. `eq object1 object2`.


# functions

number comparison

* `(eq1 1 2)`
* `(max 1 2 3.4)`
* `(min )`
* `(abs )`
* `(truncate 1.2)` round towards 0
* `floor number &optional divisor`
* `ceiling number &optional divisor`
* `round number &optional divisor`

arithmetic

* `1+ number-or-marker`: return the number of marker plus 1.
But the value of the variable doesn't change.
To change, use `setq`

```lisp
(setq foo 4) ; => 4
(1+ foo) ; => 5
foo ; => 4
(setq foo (1+ foo)) ; => 5 ; increase foo
```

* `1-`
* `+ &rest numbers-or-markers`
* `-`

```lisp
(- 10 1 2 3 4) ; => 0 because 10-1-2-3-4
(- 10) ; => -10 nevigation
(-) ; => 0
```

* `*`: `(*) ; => 1`
* `/`
* `%`
* `mod`

bitwise: apply only to integer

* `lsh integer1 count`: `(lsh 3 -1)`: shift right!
* `ash integer1 count`: arithmetic shift. If integer and count are both negative,
add 1 to the left so that it is still negative.
* `logand`
* `logior`: 同或 inclusive-or
* `logxor`: exclusive-or
* `lognot`

mathematical

* `sin`
* `cos`
* `tan`
* `asin`
* `acos`
* `atan`
* `exp arg`: `e^arg`
* `log`
* `expt x y`: `x^y`
* `sqrt`
* `float-e`: 2.71828
* `float-pi`: 3.141592653589793238462643383279502

random

`random &optional limit`

Everytime emacs automatically set seed to ensure the results are different across different runs.
If limit is positive number, than it is the limit(less than).
If it is `t`, it means choose another seed.
If it is a string, choose a new seed based on the string.
So want repeat result? use `(random "")`.
