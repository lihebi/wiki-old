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
    print root+'/'+f
    print os.path.abspath(root+'/'+f)
```

执行shell命令
============

os.system
---------

```py
os.system("some command with args")
os.system("some_command < input_file | another_command > output_file")
```

can only run simply shell commands and not actually external programs.

os.popen
--------

```py
stream = os.popen("some_command with args")
stream.read()
```
the same as `os.system` except that it gives you a file-like object that you can use to access standard input/output for that process.

Have another 3 similar invariant.

subprocess.Popen
----------------
```py
subprocess.Popen("echo Hello World", shell=True, stdout=subprocess.PIPE).stdout.read()
```

subprocess.call
---------------

The same as `subprocess.Popen`, except that it simply waits until the command completes and gives you the return code.

```py
return_code = subprocess.call("echo Hello World", shell=True, stdout=subprocess.DEVNULL)
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
