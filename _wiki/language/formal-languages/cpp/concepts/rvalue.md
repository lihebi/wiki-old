---
title: rvalue
---

lvalue
------

An lvalue is an expression that identifies a non-temporary object or a non-member function.

* The name of a variable or function in scope
* Function call or overloaded operator expression if the function's or overloaded operator's return type is an lvalue reference
* string literal
* ...

rvalue
------

prvalue
=======

A prvalue ("pure" rvalue) is an expression that identifies a temporary object (or a subobject thereof)
or is a value not associated with any object.

* literal(except string literal): 42, true
* ...

xvalue
======

An xvalue is an expression that identifies an "eXpiring" object, that is, the object that may be moved from.

* A function call or overloaded operator expression
if the function's or the overloaded operator's return type is an rvalue reference to object type,
such as std::move(val)
* ...

rvalue
======

An rvalue is an expression that is either a prvalue or an xvalue.

std::move
---------

std::move obtains an rvalue reference to its argument and converts it to an xvalue.
