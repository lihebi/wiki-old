---
title: decltype
---

```cpp
struct A {
  double x;
};
const A* a = new A{0};

decltype( a->x ) x3;       // type of x3 is double (declared type)
decltype((a->x)) x4 = x3;  // type of x4 is const double& (lvalue expression)

auto f = [](int a, int b) -> int {
  return a*b;
};

decltype(f) f2 = f; // the type of a lambda function is unique and unnamed
```
