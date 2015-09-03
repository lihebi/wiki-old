---
title: sort
---

Do not use `qsort` for some unknown reason..

faster to slower:

1. partition
2. stable_partition
3. nth_element
4. partial_sort
5. sort
6. stable_sort

stable means the order of equal element is guaranteed to maintain.

## partition
The returned iterator is middle.
From first to middle, the predicate is true.
From middle to last, the predicate is false.

API:

```c++
template< class BidirIt, class UnaryPredicate >
BidirIt partition(
  BidirIt first,
  BidirIt last,
  UnaryPredicate p
);
template< class ForwardIt, class UnaryPredicate >
ForwardIt partition(
  ForwardIt first,
  ForwardIt last,
  UnaryPredicate p
);
```


## nth_element
The first n elements in the container are best, but not sorted.

API:

```c++
template< class RandomIt >
void nth_element(
  RandomIt first,
  RandomIt nth,
  RandomIt last
);
template< class RandomIt, class Compare >
void nth_element(
  RandomIt first,
  RandomIt nth,
  RandomIt last,
  Compare comp
);
```

## partial_sort
The first n elements in the container are the best, and in order.

API:

```c++
template< class RandomIt >
void partial_sort(
  RandomIt first,
  RandomIt middle,
  RandomIt last
);
template< class RandomIt, class Compare >
void partial_sort(
  RandomIt first,
  RandomIt middle,
  RandomIt last,
  Compare comp
);
```

example:

```c++
partial_sort(
  v.begin(),
  v.begin()+20,
  v.end(),
  compare
);
```
