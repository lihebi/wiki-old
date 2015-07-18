---
title: decorator
---

@calssmethod
============

```py
class MyClass:
  @classmethod
  def func(cls, arg1):
    pass

MyClass.func()
MyClass().func()
```

This method can be called on the class name, or instance.
If called on instance, the instance is ignored except for its class.

If a class method is called for a derived class,
the derived class object is passed as the implied first argument.

It can be used to implement alternative constructors. 但是我没看懂.

@staticmethod
=============

```py
class MyClass:
  @staticmethod
  def func(arg1,arg2):
    pass

MyClass.func()
MyClass().func()
```

This method can be called on the class name, or instance.
If called on instance, the instance is ignored except for its class.

It is roughly the same as static method in C++ and Java.
