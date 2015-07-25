---
title: arbitrary arguments
---

The `*args` will be a tuple.

```py
def foo(*args):
  for a in args:
    print a

foo(1) # 1
foo(1,2,3) # 1 2 3
```

`**args` give you all **keyword arguments**
except for those corresponding to a formal parameter as a dictionary.

```py
def bar(**kwargs):
  for a in kwargs:
    print a, kwargs[a]

bar(name="one", age=27)
# age 27
# name one
```

They can combine:

```py
def foo(kind, *args, **kwargs):
  pass
```

use `*l` to unpack argument lists
-----------------------------------

```py
def foo(bar, lee):
  print bar, lee

l = [1,2]
foo(*l)
```

On python3, it is allowed for `*l` to be on left side:

```py
#!/usr/bin/env python3
first, *rest = [1,2,3,4]
first, *l, last = [1,2,3,4]
```
