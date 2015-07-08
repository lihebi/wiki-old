---
title: OS
---

遍历文件夹
=========

```python
import os
for root, dirs, files in os.walk(‘.’):
  for f in files:
    print f
```

执行shell命令
============

```python
os.system('mv a.c b.c')
```

文件是否存在
==========

```python
os.path.exists('/aaa/bbb/ccc') # => bool
```


## os.rename
```python
os.rename(‘a.jpg’, ‘out/b.jpg’)
```
