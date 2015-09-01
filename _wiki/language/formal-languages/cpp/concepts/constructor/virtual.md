---
title: virtual
---

## Bottom Line
* polymorphic base classes should declare virtual destructors.
If a class has virtual functions, it should have virtual destructor
* Classes should not have virtual destructor if it is not designed to be
  - base class, or
  - used polymorphically

## Description

`Factory Function`:
a function that returns a base class pointer
to a newly-created derived class object.

```c++
class TimeKeeper {
public:
  TimeKeeper();
  virtual ~TimeKeeper(); // must have the virtual, or disaster
};
class AtomicClock : public TimeKeeper {};
class WaterClock : public TimeKeeper {};
class WristWatch : public TimeKeeper {};

TimeKeeper *getTimeKeeper(); // can return any one

TimeKeeper *ptk = getTimeKeeper();
// ...
delete ptk;
```

If no virtual, the `delete ptk` will call the destructor of TimeKeeper,
so the AtomicClock part of the struct will be never destroyed.

But do not declare every destructor virtual:
If a class does not contain virtual functions,
it is not meant to be used as a base class.
DO NOT use virtual destructor for it. Because:

* virtual requires the objects carry information that can be used at runtime to determine which virtual function to invoke. It will increase the size.
* it is not the same as the counterpart in C, not portable.

Never call virtual functions during construction or destruction.
Because during base construction,
virtual functions never go down into the derived class.

## Virtual vs. Non-Virtual

Without `virtual` you get **early binding**. Which implementation of the method is used gets decided at **compile time based on the type of the pointer that you call through**.

With `virtual` you get **late binding**. Which implementation of the method is used gets decided at **run time based on the type of the pointed-to object** - what it was originally constructed as. This is not necessarily what you'd think based on the type of the pointer that points to that object.

```cpp
class Base
{
public:
  void Method1 ()  {  std::cout << "Base::Method1" << std::endl;  }
  virtual void Method2 ()  {  std::cout << "Base::Method2" << std::endl;  }
};

class Derived : public Base
{
public:
  void Method1 ()  {  std::cout << "Derived::Method1" << std::endl;  }
  void Method2 ()  {  std::cout << "Derived::Method2" << std::endl;  }
};

Base* obj = new Derived ();
//  Note - constructed as Derived, but pointer stored as Base*

obj->Method1 ();  //  Prints "Base::Method1"
obj->Method2 ();  //  Prints "Derived::Method2"
```

## Virtual vs. Pure Virtual

* virtual function `can` be overriden
* the pure virtual `must` be implemented in non-abstract class
