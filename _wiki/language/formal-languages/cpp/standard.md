---
title: coding standards
---

ref: https://isocpp.org/wiki/faq/coding-standards

## <xxx> and <xxx.h>

C++ standard library is guaranteed to have 18 standard headers from C.
Two type of names: `<cxxx>` and `<xxx.h>`

* `<cxxx>`: provide in the `std` namespace only
* `<xxx.h>`: make them available in both `std` and global. **Deprecated**

## using

* using-directive: `using namespace std;`. Do not use.
* using-declaration: `using std::cout;`. Can be used just as a statement, e.g. in a function.

## where to declare variables
Declare near the first use.

If you don't have enough information to initialize an object until the middle of the code,
create it there.
Don't initialize it to empty and reassign it later,
because performance.

## some lint-like guidelines
* A class `Fred`’s assignment operator should return `*this` as a `Fred&` (allows chaining of assignments)
* A class with any virtual functions ought to have a virtual destructor
* A class with any of the following generally needs all 5
  - destructor
  - copy assignment operator
  - copy constructor
  - move assignment operator
  - move constructor
* A class `Fred`’s copy constructor and assignment operator should have const in the parameter: respectively `Fred::Fred(const Fred&)` and `Fred& Fred::operator= (const Fred&)`
* When initializing an object’s member objects in the constructor, always use initialization lists rather than assignment. 3x performance.
* Assignment operators should make sure that self assignment does nothing, otherwise you may have a disaster

## some crazy unix abbr

`abbr evthng n sght, usng vry shrt idntfr nms`
