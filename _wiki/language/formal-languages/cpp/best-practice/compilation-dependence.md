---
title: compilation dependence
---

The change of a single class can lead to a large amount of file to recompile,
because:

* Inheritance
* Use another class inside a class

## Forward-declaration doesn't work.

```c++
int main() {
  int x;
  Person p(params);
}
```

Forward-declaration cannot make it because this is a define,
compiler need to know the size.

## Why Java don't have such problem?
Java treat the above code as

```c++
int main() {
  int x;
  Person * p;
}
```

## Solution 1: pimpl(Pointer to implementation)
In C++, we can of course play the
"hide the object implementation behind a pointer" game ourself.

The key: _replacement of dependencies on definitions with dependencies on declarations._

* avoid using objects when object references and pointers will do
* depend on class declarations instead of class definitions whenever you can

Note: you never need a class definition to declare a function using that class,
not even if the function passes or returns the class type by value:

```c++
class Date;
Date today();
void clearAppointment(Date d);
```

Because if anybody calls those functions, Date's definition must have been seen prior to the call.
So it is not that nobody calls them, it's that not everybody calls them.

* provide separate header flies for declarations and definitions

Classes that employ the pimpl idiom are often called Handle Classes.

### Example:
```c++
#include <string>
#include <memory>
class PersonImpl; // forward decl
class Date;
class Address;
class Person {
public:
  Person(const std::string& name, const Date& birthday, const Address& addr);
  std::string name() const;
  std::string birthDate() const;
  std::string address() const;
private:
  std::shared_ptr<PersonImpl> pImpl;
};
```

```c++
#include "Person.h"
// we need include PersonImpl.h in order to call the member function
// PersonImpl has exactly the same API
#include "PersonImpl.h"
Person::Person(const std::string& name, const Date& birthday, const Address& addr)
: pImpl(new PersonImpl(name, birthday, addr)) {}

std::string Person::name() const {
  return pImpl->name();
}
```

## Solution 2: Interface Class
The implementation of non-virtual functions should be the same for all classes in a hierarchy,
so it makes sense to implement such functions as part of the Interface class.

```c++
class Person {
public:
  virtual ~Person();
  virtual std::string name() const = 0;
  virtual std::string birthDate() const = 0;
  virtual std::string address() const = 0;

  static std::shard_ptr<Person>
  create(const std::string& name, const Date& birthday, const Address& addr);
};
std::shared_ptr<Person>
create(const std::string& name, const Date& birthday, const Addrss& addr) {
  return std::shared_ptr<Person>(new RealPerson(name, birthday, addr));
}
```

```c++
class RealPerson : public Person {
public:
  RealPerson(const std::string& name, const Date& birthday, const Address& addr)
  : theName(name), theBirthDate(birthday), theAddress(addr) {}
  virtual ~RealPerson() {}

  std::string name() const; // implement
  std::string birthDate() const;
  std::string address() const;
private:
  std::string theName;
  Date theBirthDate;
  Address theAddress;
};
```

Clients of interface class need not recompile unless the Interface class's interface is modified.
