---
title: doc
---

The one line docstring should appear imediately after the `def func():` line.

```py
def func():
  """one line Doc for func"""
  u"""unicode one line doc. Use if unicode is inside the docstring"""
  r"""raw one line doc. Use if any backslashes in the code"""
  return '';
```

retrieve by `func.__doc__`

The multi-line docstring should have a summary line, then a blank line, then the following.

```py
def complex(real=0.0, imag=0.0):
  """Form a complex number.

  Keyword arguments:
  real -- the real part (default 0.0)
  imag -- the imaginary part (default 0.0)
  """
  if imag == 0.0 and real == 0.0:
    return complex_zero
```

PEP8
====

The docstring for a module should generally list
the classes, exceptions and functions (and any other objects)
that are exported by the module,
with a one-line summary of each.

The docstring for a function or method should summarize
its behavior and document its arguments,
return value(s), side effects, exceptions raised,
and restrictions on when it can be called.

The docstring for a class should summarize
its behavior and list the public methods and instance variables.

Examples
========

documenting modules

```py
#!/usr/bin/env python3
"""The purpose of this module

Detailed description.

Available functions:
- xxx: xxxx
- xxx: xxxx
"""
```

documenting classes

```py
class MyClass():
  """The summary

  Detailed description.

  Public attributes:
  - xxx: xxxx
  - xxx: xxxx
  """

  # leave a blank line before def func
```

documenting functions

```py
def func():
  """summary line

  Detailed

  Args:
    xxx: xxxx
    xxx: xxxx

  Returns:
    xxx
  """
```

Doc generator
=============

https://readthedocs.org/
http://sphinx-doc.org/
