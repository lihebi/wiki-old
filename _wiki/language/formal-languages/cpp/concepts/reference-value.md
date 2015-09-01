---
title: reference vs. value
---

# pass-by-reference

Apart from copy problem, there's also a slicing problem.
When a derived class object is passed by value as a base class object,
the base class constructor is called.

reference is often implemented as pointer.
So some situation pass by value is more efficient:

* built-in type(e.g. int)
* iterators and function objects in STL, they are designed to pass by value

But do not just pass by value because the struct seems to be small.

* it can be large, by inheritance
* the copy constructor may be costly: a object contain little more than a pointer, but the constructor will copy everything they point to.
* some compiler treat built-in type and structure differently.
Some will refuse to put a struct that only contains a double into register,
but it will surely put a double into register.

# don't return reference when you must return a value
A function can create a new object in only two ways: on stack or heap.

* Stack => local variable
* Heap => new

## stack
```c++
const Rational& operator*(const Rational& lhs, const Rational& rhs) {
  Rational result(lhs.n * rhs.n, lhs.d * rhs.d);
  return result;
}
```

The result is a local variable, so it doesn't exist when the function returns.

## heap

```c++
const Rational& operator*(const Rational& lhs, const Rational& rhs) {
  Rational * result = new Rational(lhs.n * rhs.h, lhs.d * rhs.d);
  return result;
}
Rational w,x,y,z;
w = x * y * z;
```

The result of `x*y` will never be freed.

## the right way
the right way to write a function that must return a new object is to have that function return a new object.

```c++
inline const Rational operator*(const Rational& lhs, const Rational& rhs) {
  return Rational(lhs.n * rhs.n, lhs.d * rhs.d);
}
```

The return value incurs the cost of constructing and destructing,
but it can offer correct behavior.
Besides, the bill that so terrifies you may never arrive.
Compiler optimizations in some cases can eliminate this.
