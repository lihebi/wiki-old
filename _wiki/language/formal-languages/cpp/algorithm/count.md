---
title: count
---


## count & count_if
```c++
template< class InputIt, class T >
typename iterator_traits<InputIt>::difference_type
count(
  InputIt first,
  InputIt last,
  const T &value
);
template< class InputIt, class UnaryPredicate >
typename iterator_traits<InputIt>::difference_type
count_if(
  InputIt first,
  InputIt last,
  UnaryPredicate p
);
```
