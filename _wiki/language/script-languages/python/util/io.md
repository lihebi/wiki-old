---
title: IO
---

print
=====

```python
# python3
print("xxx", end='')
# python2
print "xxx",
```

File I/O
========

```python
f = open('test.txt')
f.read() # => all
# need f.seek() to go back, or the following read will get empty
```

```python
f = open('test.txt')
for line in f:
  print line,
```

```py
with open('a.txt') as f:
  for line in f:
    print(line)
```

Do not keep whole file in memory:

```py
with open('a.txt') as f:
  for idx,line in enumerate(f):
    if idx == 100:
      print(line)
```
