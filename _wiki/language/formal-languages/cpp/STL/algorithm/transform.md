---
title: transform
---



## transform

```c++
template< class InputIt, class OutputIt, class UnaryOperation >
OutputIt transform(
  InputIt first1,
  InputIt last1,
  OutputIt d_first,
  UnaryOperation unary_op
);
template< class InputIt1, class InputIt2, class OutputIt, class BinaryOperation >
OutputIt transform(
  InputIt1 first1,
  InputIt1 last1,
  InputIt2 first2,
  OutputIt d_first,
  BinaryOperation binary_op
);
```

`std::transform` applies the given function to a range and stores the result in another range, beginning at d_first.
