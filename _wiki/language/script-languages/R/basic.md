---
title: basic
---

Vectors
=======

all these assignments are equivalent

```sh
# c() can take an arbitrary number of vector arguments.
# return a vector got by concatenating its arguments end to end
> x <- c(10.4, 5.6, 3.1, 6.4, 21.7)
> x = c(10.4, 5.6, 3.1, 6.4, 21.7)
> x
# display x
> assign("x", c(10.4, 5.6, 3.1, 6.4, 21.7))
> c(10.4, 5.6, 3.1, 6.4, 21.7) -> x
```

operation on vector

```sh
> 1/x # will use 1 divides all 5 values of x, just like matrix in matlab
> y <- c(x, 0, x)
# the oprand does not need to be the same length
# The result is the longest, small ones repeat.
> v <- 2*x + y + 1
```

Numbers
=======
R will use double precision real numbers, or double precision complex numbers.

Always supply complex numbers explicitly:
`sqrt(-17)` will give NaN and a warning,
but `sqrt(-17+0i)` will do it.



Logical
=======

`TRUE`, `FALSE`, `NA`

* `!a`
* `a & b`
* `a | b`

* `is.na(x)`. never use x==NA, that will output a vector of lengh(x) with all NA

String
======
`paste()` function takes an arbitrary number of arguments
and concatenates them one by one into character strings.
Any numbers given among the arguments are coerced
into character strings in the evident way,
that is, in the same way they would be if they were printed.

The recycling rule also takes place here.

```sh
> labs <- paste(c("X","Y"), 1:10, sep="")
# c("X1", "Y2", "X3", "Y4", "X5", "Y6", "X7", "Y8", "X9", "Y10")
```

Objects
=======

Two intrinsic attributes: mode and length.
Have two system functions:
`mode(object)` and `length(object)`.

* mode: the basic type of its fundamental constituents
