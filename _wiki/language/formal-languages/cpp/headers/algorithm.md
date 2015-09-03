---
title: algorithm
---

```cpp
#include <algorithm>
```

## std::reverse

```cpp
reverse(v.begin(), v.end());
```

## std::find

Returns an iterator to the first element in the range [first,last) that compares equal to val. If no such element is found, the function returns last.

```cpp
template<class InputIterator, class T>
InputIterator find (InputIterator first, InputIterator last, const T& val)
{
  while (first!=last) {
    if (*first==val) return first; //*
    ++first;
  }
  return last;
}
```

## std::find_if

Returns an iterator to the first element in the range [first,last) for which pred returns true. If no such element is found, the function returns last.

```cpp
template<class InputIterator, class UnaryPredicate>
InputIterator find_if (InputIterator first, InputIterator last, UnaryPredicate pred)
{
  while (first!=last) {
    if (pred(* first)) return first;
    ++first;
  }
  return last;
}
```

for example

```cpp
template <typename T>
class is_greater_than
{
public:
  is_greater_than (const T & n)
  : value(n)
{}

  bool operator() (const T & element) const
{
  return element > value;
}

private:
  T value;
};
```

use here:

```cpp
find_if (values.begin(), values.end(), is_greater_than<int> (5)) != values.end();
```

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

## not1
```c++
template< class Predicate >
std::unary_negate<Predicate> not1(const Predicate& pred);
template< class Predicate >
constexpr std::unary_negate<Predicate> not1(const Predicate& pred);
```

not1 is a helper function to create a function object that returns the complement of the unary predicate function passed.

example:

```c++
struct LessThan7 : std::unary_function<int, bool>
{
  bool operator()(int i) const { return i < 7; }
};
std::not1(LessThan7());
std::function<int(int)> less_than_9 = [](int x){ return x < 9; };
std::not1(less_than_9);
```

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
