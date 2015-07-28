---
title: array
---
Sequences
=========
* `1:30`: c(1, 2, …, 29, 30)
* and the colon operater has higher priority: `2*1:15` => c(2, 4, …, 28, 30)
* `30:1`: backward
* `seq(2,10)` => `2:10`
* `seq(from=1, to=30)` == `seq(to=30, from=1)`

```sh
> seq(-5, 5, by=.2) -> s3
> s4 <- seq(length=51, from=-5, by=.2)
# x = [1,2,3]
> s5 <- rep(x, times=5) # put five copies of x end-to-end in s5
# [1,2,3,1,2,3,...]
> s6 <- rep(x, each=5) # repeats each element of x five times before moving on to the next.
# [1,1,1,1,1,2,2,2,2,2,...]
```


Vector Indexing/Subseting/Slicing
=================================

```sh
> y <- x[!is.na(x)]
# x's none-NA elements.
> (x+1)[(!is.na(x)) & x>0] -> z
> x[6] # 6th element
> x[1:10] # first 10 elements
> c("x","y")[rep(c(1,2,2,1), times=4)]
# a character vector of length 16 consisting of "x", "y", "y", "x" repeated four times.
> y <- x[-(1:5)]
# all but the first five elements of x.
```

naming

```sh
> fruit <- c(5, 10, 1, 20)
> names(fruit) <- c("orange", "banana", "apple", "peach")
> lunch <- fruit[c("apple","orange")]
```

change the subset:

```sh
> x[is.na(x)] <- 0
# replaces any missing values in x by zeros
> y[y < 0] <- -y[y < 0]
# is same as:
> y <- abs(y)
```


Array
=====

```sh
> dim(z) <- c(3,5,100)
# 3 by 5 by 100 array
> z[2,,] # is 5,100 array
> z[,,] # is the entire array
```

indexing matrix
---------------

```sh
> x <- array(1:20, dim=c(4,5))   # Generate a 4 by 5 array.
> x
     [,1] [,2] [,3] [,4] [,5]
[1,]    1    5    9   13   17
[2,]    2    6   10   14   18
[3,]    3    7   11   15   19
[4,]    4    8   12   16   20
> i <- array(c(1:3,3:1), dim=c(3,2))
> i                             # i is a 3 by 2 index array.
     [,1] [,2]
[1,]    1    3
[2,]    2    2
[3,]    3    1
> x[i]                          # Extract those elements
[1] 9 6 3
> x[i] <- 0                     # Replace those elements by zeros.
> x
     [,1] [,2] [,3] [,4] [,5]
[1,]    1    5    0   13   17
[2,]    2    0   10   14   18
[3,]    0    7   11   15   19
[4,]    4    8   12   16   20
```

outer product
-------------

```sh
> ab <- a %o% b
# the same as
> ab <- outer(a, b, "*")
```

we can change the function used in `outer`

```sh
> f <- function(x, y) cos(y)/(1 + x^2)
> z <- outer(x, y, f)
```

matrix multiplication
---------------------

```sh
> A * B # matrix of element by element products
> A %*% B # matrix product
> x %*% A %*% x # quadratic form ... 二次多项式 ax^2 + bxy + cy^2
```

solve linear equation
---------------------
```sh
> b <- A %*% x
# if b and A are given, but not x, x will contain the result
> solve(A,b) # will also solve the system.
# I'm not sure this should be execute after the previous statement.
