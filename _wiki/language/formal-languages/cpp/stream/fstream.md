---
title: file stream
---

```c++
#include <fstream>
ofstream myfile;
myfile.open("a.txt");
if (myfile.is_open()) {
  myfile << "...";
  myfile.close();
}
// after close, it can used to open another file
myfile.open("b.txt");
myfile.close();
```

## When to flush

* `file.close()`
* buffer is full
* `flush`, `endl` used as manipulators
* `file.sync()`

## mode

open flag:

| flag        | desription                                                                        |
|:------------|:----------------------------------------------------------------------------------|
| ios::in     | input                                                                             |
| ios::out    | output                                                                            |
| ios::binary | binary mode                                                                       |
| ios::ate    | initial position to the end of file                                               |
| ios::app    | all **output** operations are performed at the end of the file, append            |
| ios::trunc  | if the file is opened for output and already exists, previous content is replaced |

Default:

| class    | default mode       | New flag action |
|:---------|:-------------------|:----------------|
| ofstream | ios::out           | add             |
| ifstream | ios::in            | add             |
| fstream  | ios::in 1 ios::out | overwrite       |

binary mode cannot use >>, <<, getline, but use

```c++
write(memory_block, size);
read(memory_block, size);
```

## seek

* tellg(): get _get position_
* tellp(): get _put position_
* seekg(position): count from the beginning
* seekp(position)
* seekg(offset, direction);
* seekp(offset, direction);

| direction | description |
|:----------|:------------|
| ios::beg  | beginning   |
| ios::cur  | current     |
| ios::end  | end         |
