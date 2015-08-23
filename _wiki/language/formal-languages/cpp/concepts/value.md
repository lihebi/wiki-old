---
title: value
---

lvalue
------

An `lvalue` (so-called, historically, because lvalues could appear on the left-hand side of an assignment expression) designates a function or an object.

Example:

* If `E` is an expression of pointer type, then `*E` is an lvalue expression referring to the object or function to which E points.
* As another example, the result of calling a function whose return type is an lvalue reference is an lvalue.

xvalue
------

An `xvalue` (an “eXpiring” value) also refers to an object, usually near the end of its lifetime (so that its resources may be moved, for example). An xvalue is the result of certain kinds of expressions involving rvalue references.

Example:

* The result of calling a function whose return type is an rvalue reference is an xvalue.

glvalue
-------

A `glvalue` (“generalized” lvalue) is an lvalue or an xvalue.

rvalue
------

An `rvalue` (so-called, historically, because rvalues could appear on the right-hand side of an assignment expression) is an xvalue, a temporary object or subobject thereof, or a value that is not associated with an object.

prvalue
-------

A `prvalue` (“pure” rvalue) is an rvalue that is not an xvalue.

Example:

* The result of calling a function whose return type is not a reference is a prvalue.

```
    ______ ______
  /       X      \
 /       / \      \
|   l   | x |  pr  |
 \       \ /      /
  \______ X______/
      gl    r
```
