---
title: initialization
---

# Default Constructor

One that can be called without any arguments.
Such constructors have no parameters or have a default value for every parameter.

Compilers will automatically call default constructors
for data members of user-defined types
when those data members are not on initialization list.

# initialization
Data members that are const or references must be initialized; they cant be assigned.

Do not call constructors within each other.
If init is too many, move them into a private function,
and call the function in all constructors.

Base classes are initialized before derived classes;
within a class, data members are initialized in the order in which they declared,
not the position in initialization list.
