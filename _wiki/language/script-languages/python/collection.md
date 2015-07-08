---
title: Collection
---


Ordered Directory
=================

Dictionary is arbitrary sorted.
To get a sorted dict, use collections.OrderedDict.
It remembers the order in which the elements have been inserted.

```python
import collections
od = collections.OrderedDict(sorted(d.items()))
```

Set
====

```python
s = set()
s.add(x)
if x in s:
  ...
```