---
title: not
---


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
