---
title: lambda
---

Map & Filter
============

```py
l = [1,2,3,4,5]
                                  squares = map(lambda x: x**2, l)
even_squares = map(lambda x: x**2, filter(lambda x: x%2==0, l))
```

using list comprehension to get the same result
(我觉得这才是黑科技，lambda多clear):

```py
squares = [x**2 for x in l]
even_squares = [x**2 for x in l if x%2 == 0]
```

multiple level list comprehension

```py
flat = [x for row in mattrix for x in row]
squared = [[x**2 for x in row] for row in mattrix]
```

List comprehension will read the whole thing into memory,
which may cause memory problem.
Use generator expression instead:

```py
it = (line for line in open('xxx'))
# it is generator
next(it) # => the line
```
