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

Concepts
--------

In python 3, two types representing character sequence:

* `str`: Unicode
* `bytes`: raw 8-bit binary

* `str` -> `bytes`: encode
* `bytes` -> `str`: decode

helper function
---------------

```py
def to_str(bytes_or_str):
  if isinstance(bytes_or_str, bytes):
    value = bytes_or_str.decode('utf8')
  else:
    value = bytes_or_str
  return value
```

```py
def to_bytes(bytes_or_str):
  if isinstance(bytes_or_str, str):
    value = bytes_or_str.encode('utf8')
  else:
    value = bytes_or_str
  return value
```

open
----

When use `open` in python3, if use `w` option, result will be `str`.
In this case, write `bytes` to it will result in `TypeError`.
Python3 default uses 'utf8' to decode.

Use `wb` to get a `bytes` stream.

```py
with open('/tmp/bin','wb') as f:
  f.write(os.urandom(10))
```
