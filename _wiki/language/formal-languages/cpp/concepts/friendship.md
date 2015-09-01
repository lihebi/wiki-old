---
title: friendship
---

# Friend function
private and protected member cannot be accessed outside the class, except friends.

```c++
class A {
public:
  friend A func(A a); // declare friend
private:
  int m;
};
A func(A& a) {
  A res;
  res.m = a.m; // access both param and return value
  return res;
}
```

# Friend Class
a class whose member functions can access private and protected member of another class.

```c++
class Rectangle {
  int width, height;
public:
  int area () {}
  void convert (Square a) {
    width = a.side; // access side in Square
    height = a.side;
  }
};

class Square {
  friend class Rectangle; // friend declaration
private:
  int side;
public:
  Square (int a) : side(a) {}
};
```
