---
title: string
---

字符串相加
==========

```python
'xxf'+'xxf'
```

和int型相加要转换
```python
i = 1
'this is '+str(i)
```

Popular Function
================

* `str.split(sep=None, maxsplit=-1)`: return a list of str.
sep is by default whitespace. at most maxsplit splits are made.
* `str.strip()`
* `str.replace(old,new[,count])`: by default, replace all.
If count provided, replace the first count.
* `str.startswidth()`
* `str.endswidth()`

Encoding
========

If encounters with bytes, the str will contain `b'xxx'`.
This cannot be loaded into json.
`bstr.decode('utf8')` will return the expected string.

`b'23'` can be converted to `int` directly by `int(bstr)`
