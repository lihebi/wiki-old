---
title: map
---


iterator
--------

```cpp
map<int,int> m;
m[2]=3;
m[3]=4;
for(map<int,int>::iterator it=m.begin;it!=m.end();it++) {
  it->first;
  it->second;
}
```

init
----

`map<int,int> m`中`m[3]`被初始化为0

functions
---------

* `size()`
