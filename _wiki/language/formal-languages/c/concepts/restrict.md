---
title: restrict
---

The restrict keyword is a declaration of intent given by the programmer to the compiler.

It says that for the lifetime of the pointer,
only it or a value directly derived from it (such as pointer + 1)
will be used to access the object to which it points.

This limits the effects of pointer aliasing, aiding optimizations.

If the declaration of intent is not followed
and the object is accessed by an independent pointer,
this will result in undefined behavior.
