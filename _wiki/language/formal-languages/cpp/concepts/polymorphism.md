---
title: Polymorphism
---

```c++
class Polygon {
protected:
  int width, height;
public:
  void set_values (int a, int b)
  { width=a; height=b; }
};
class Rectangle: public Polygon {
public:
  int area()
  { return width*height; }
};
class Triangle: public Polygon {
public:
  int area()
  { return width*height/2; }
};
```
