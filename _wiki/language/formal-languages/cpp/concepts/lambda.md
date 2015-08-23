---
title: lambda
---

Constructs a closure: an unnamed function object capable of capturing variables in scope.

reference:

* http://en.cppreference.com/w/cpp/language/lambda

4 syntax
--------

* Full declaration:

```
[ capture-list ] ( params ) mutable(optional) exception attribute -> ret { body }
```

* Declaration of a const lambda: the objects captured by copy cannot be modified.

```
[ capture-list ] ( params ) -> ret { body }
```

for example

```cpp
[]()->int { return 2; }
```

* Omitted trailing-return-type

```
[ capture-list ] ( params ) { body }
```

if the `body` contains nothing but a single return statement, the return type is that expression's type. Otherwise return type is `void`.

* Omitted parameter list

take no parameters.

```
[ capture-list ] { body }
```

Explanations
------------

* `mutable`: allows body to modify the parameters captured by copy, and to call their non-const member functions
* `exception`: provides the exception specification or the noexcept clause for operator() of the closure type
* `attribute`: provides the attribute specification for operator() of the closure type
* `capture-list`: a comma-separated list of zero or more captures
  * `[a,&b]`: where a is captured by value and b is captured by reference.
  * `[this]`: captures the this pointer by value
  * `[&]`: captures all automatic variables odr-used in the body of the lambda by reference
  * `[=]`: captures all automatic variables odr-used in the body of the lambda by value
  * `[]`: captures nothing
