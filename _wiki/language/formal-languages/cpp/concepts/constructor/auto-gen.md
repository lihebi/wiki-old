---
title: auto-gen
---

# auto-gen by compiler
If you don't write, the compiler will generate:

* a copy constructor
* a copy assignment operator
* a destructor
* a default constructor(if you defined no constructors at all)

```c++
class A {
public:
  A() {...} // default
  A(const A& rhs) {...} // copy
  ~A() {...} // destructor
  A& operator=(const A& rhs) {...} // copy assignment operator
};
```

But they are generated only if they are needed.

For the `operator=`, compiler will generate it iff:

* resulting code is legal
* reasonable to make sense

e.g.

```c++
class A {
private:
  std::string &name;
  const int num;
};
```

compiler will reject to generate `operator=` because when doing assignment,
should the reference be modified?
_C++ doesn't allow make a reference refer to another object._
Should the referred string be modified? It will affect other objects!
It is not legal to modify a const member either.

If you want to support copy assignment in the class containing reference or const,
you must define it yourself.

## explicitly disallow the auto-gen

### link time solution
Declare the copy constructor and the copy assignment operator private.
So that compiler will not generate, outside can not see them.

However, member and friend functions can still call them.

### compile time solution
```c++
class Uncopyable {
protected:
  Uncopyable() {}
  ~Uncopyable() {}
private:
  Uncopyable(const Uncopyable&);
  Uncopyable& operator=(const Uncopyable&);
};
class A : private Uncopyable {}
```

This works because the compiler will try to
generate copy constructor and copy assignment when anybody tries to copy it.
