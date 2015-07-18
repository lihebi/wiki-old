---
title: package
---

packages are defined by putting an empty file `__init__.py` into the directory.

```
main.py
mypackage/__init__.py
mypackage/a.py
mypackage/b.py
mypackage/subdir/__init__.py
mypackage/subdir/c.py
```

The import statements should be:

```py
from mypackage import a
from mypackage.b import func as my_func
from mypackage.subdir import c
```

Stable API
==========

In the module file, define the list attribute `__all__` will expose only the API in the list.

```py
__all__ = ['func1']

def func1():
  pass
def func2():
  pass
```

this can be put into `__init__`, and it serves when import just the module.
