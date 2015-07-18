---
title: Collection
---

Tuple
=====

tuple comparison is: first compare index 0, than index 1, then 2...

The following code will sort the list, but the even numbers before all odd numbers.

```py
def comp(x):
  if x%2 == 0:
    return (0,x)
  else:
    return (1,x)
values.sort(key=comp)
```

List
====

slicing
-------

This will return a new list.
The change to new list does not affect original one.

```python
s[4]
s[4:]
s[::2] # stride. odd
b = s[:-1]
b[3] = 8 # will not change s
```

But if assgin to the slice, it will change the original list:

```py
a = [2,3,5]
a[1:2] = [4,5,6,7] # will change a
```

```py
a = [2,3,5]
b = a # will not copy, just a reference
```

range
-----

```python
l = range(4, 10)
```

iterate through a list and get the index at the same time:

```py
for i in range(len(l)):
  l[i]
```

another way is to use enumerate.
enumerate wrap any iterator with a lazy generator.

```py
for i,li in enumerate(l):
  # i start with 0
for i,li in enumerate(l,1):
  # i start with 1
```

iterator through many lists with the same length(or not).
`zip` wrap 2 or more iterators with a lazy generator.
Note that zip in python2 is not lazy.

```py
for li1,li2,li3 in zip(l1,l2,l3):
  pass
```

Dict
====

Ordered Directory
-----------------

Dictionary is arbitrary sorted.
To get a sorted dict, use collections.OrderedDict.
It remembers the order in which the elements have been inserted.

```python
import collections
od = collections.OrderedDict(sorted(d.items()))
```

Sort a dict by value
--------------------

```py
sorted(dict1, key=dict1.get) # => list
sorted(dict1, key=dict1.get, reverse=True)
```

Set
====

```python
s = set()
s.add(x)
if x in s:
  ...
```
