---
title: constant
---

Prefer `const`s, `enum`s, and `inline`s to `#dfine`s.

## Rationale

1. prefer the compiler to preprocessor,
the define may never be seen by compiler,
thus less meaningful debug information,
less optimization.
2. `#define`s don't respect scope.

## How to use

### const

```c++
const char* const name = "Hebi Li";
const std::string name("Hebi Li");
class A {
private:
  static const int num = 5;
};
```

#### data and pointer const

```c++
char name[] = "Hebi Li";
char *p = name; // non-const
const char *p = name; // const data
char* const p = name; // const pointer
// data     pointer
const char* const p = name; // double const
```

#### const return value of operator

```c++
const A A::operator*(const A& lhs, const A& rhs);
if (a*b = c) ... // ERROR assign c to a*b
```

```c++
char& B::operator[](std::size_t position);
B b[];
b[0] = 'x'; // need & in return value, or this assignment can't work because assign to a char
```


### enums
Some compilers don't support to init value at definition,
because they insist they need to get the when compiling the class.
In this case, use _enum hack_:

```c++
class A {
private:
  enum {Num = 5}; // the enum hack: make Num a symbolic name for 5
};
```

### inlines
replace

```c++
#define CALL_WITH_MAX(a,b) f((a) > (b) ? (a) : (b))
```

with

```c++
template<typename T> inline void callWithMax(const T& a, const T& b) {
  f(a>b?a:b);
}
```

Because you need worry about the parenthesize for define:

```c++
int a=5,b=0;
CALL_WITH_MAX(++a, b); // a increased twice
CALL_WITH_MAX(++a, b+10); // a increased once
```
