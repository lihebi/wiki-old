---
title: explicit constructor
---


# explicit
The explicit prevents the class from being used to perform implicit type conversions,
though they may still be used for explicit type conversions.

```c++
class A {
public:
  explicit A(int x=0, bool b=true);
  explicit A(char c); // non-default can also have explicit
};
void func(A a);

A a1;
func(a1); // ok
A a2(20); // ok
func(20); // error, cannot convert int to A implicitly
func(A(20)); // use B constructor to explicit convert
```

I declare it explicit unless I have a good reason
for allowing a constructor to be used for implicit type conversions.
