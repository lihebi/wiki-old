---
title: Abstract Factory
---

* Implemented by Factory Method.
* Focus on a family of products.

# class diagram
<script type="text/nomnoml" class="uml">
[<abstract>AbstractFactory | CreateA(); CreateB()]
[ConcreteFactory1 | CreateA() | CreateB()]
[ConcreteFactory2 | CreateA() | CreateB()]
[AbstractA]
[AbstractB]
[A1]
[A2]
[B1]
[B2]

[ConcreteFactory1]-:>[AbstractFactory]
[ConcreteFactory2]-:>[AbstractFactory]
[A1]-:>[AbstractA]
[A2]-:>[AbstractA]
[B1]-:>[AbstractB]
[B2]-:>[AbstractB]
[ConcreteFactory1]-->[A1]
[ConcreteFactory1]-->[B1]
[ConcreteFactory2]-->[A2]
[ConcreteFactory2]-->[B2]
</script>

Note:

* ConcreteFactory is often singleton

# implementation

```c++
class AbstractFactory {
  virtual CreateA() {}
  virtual CreateB() {}
};
class ConcreteFactory1 {
  virtual CreateA() {new A1;}
  virtual CreateB() {new B2;}
};
class ConcreteFactory2 {
  virtual CreateA() {new A2;}
  virtual CreateB() {new B1;}
};
// client code
ConcreteFactory1 factory;
AbstractA *a = factory.CreateA();
AbstractB *b = factory.CreateB();
```
