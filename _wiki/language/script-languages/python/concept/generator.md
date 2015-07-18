---
title: generator
---

Generators are functions that use `yield` expressions.

```py
def my_generator():
  for i in range(5):
    yield i
```

With each call to `next` built-in function,
the iterator will advance the generator to its next `yield` expression.

to convert a generator to a list, use

```py
l = list(my_generator())
```

Inside the for loop
===================

```py
for x in l:
  pass
```

will first call `iter()`.
The `iter` built-in function calls `l.__iter__` method, and returns an iterator object.
The iterator object implement `__next__` method.
The for loop repeatedly calls the `next` on the iterator object until exhausted,
then raise `StopIteration`.
