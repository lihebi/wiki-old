---
title: copy
---


# Copy constructor & copy assignment

```c++
class A {
public:
  A();
  A(const A& rhs); // copy constructor
  A& operator=(const A& rhs); // copy assignment operator
};

A a1; // default constructor
A a2(a1); // copy constructor
a1 = a2; // copy assignment operator
A a3 = a2; // copy constructor
```

if new object is being defined, a constructor has to be called.
That's why `a3` is not calling a copy assignment operator.

copy constructor matters because it defines how an object is **passed by value**.
In particular, pass-by-value means "call the copy constructor".

# copy assignment
## Should return `*this`:

```c++
class A {
public:
  A& operator=(const A& rhs) {
    // ...
    return * this; // return the reference to the lhs argument
  }
};
```

## handle self assignment

This is often:

```c++
a[i] = a[j]; // in the case i=j
*px = *py;
```

The example:

```c++
class A {};
class B {
private:
  A * pa;
};
B& B::operator=(const B& rhs) {
  delete pa;
  pa = new A(* rhs.pa);
  return * this;
}
```

* self-assignment unsafe:
`rhs.pa` is already deleted if `rhs == this`
* exception unsafe:
if exception happens during new, pa will contains a pointer to a deleted A.

### The way to get rid of self-assignment unsafe
```c++
B& B::operator=(const B& rhs) {
  if (this == &rhs) return * this;
  delete pa;
  pa = new A(* rhs.pa);
  return * this;
}
```

### The way to get rid of both
"copy and swap"

```c++
class B {
  void swap(B& rhs);
};
B& B::operator=(const B& rhs) {
  B tmp(rhs);
  swap(tmp);
  return * this;
}
```

Or just use pase-by-value:

```c++
B& B::operator=(B rhs) {
  swap(rhs);
  return * this;
}
```
