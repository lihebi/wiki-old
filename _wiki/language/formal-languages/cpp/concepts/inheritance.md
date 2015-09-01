---
title: Inheritance
---

# public inheritance
"is-a" relation.

Private inheritance means "is-implemented-in-terms-of".
Private inheritance means nothing during software design,
only during software implementation.
Means Derived objects are implemented in terms of Base objects, nothing more.

Composition means either "has-a" or "is-implementated-in-terms-of".

# hide method

```c++
class Base {
private:
  int x;
public:
  virtual void mf1() = 0;
  virtual void mf1(int);

  virtual void mf2();

  void mf3();
  void mf3(double);
};
class Derived : public Base {
public:
  // using Base::mf1; // making all things in Base named mf1 and mf3
  // using Base::mf3; // visible and public in Derived's scope
  virtual void mf2() {  // forwarding function
    Base::mf1();
  }
  virtual void mf1();
  void mf3();
  void mf4();
};
```

the `mf3` in Derived will hide both of the `mf3` in Base.
The rationale behind this behavior is that
it prevents you from accidentally inheriting overloads from distant base classes
when you create a new derived class in a library or application framework.

## make it visible
* `using` declarations
* forwarding functions

# inheritance of interface or implementation
TODO
