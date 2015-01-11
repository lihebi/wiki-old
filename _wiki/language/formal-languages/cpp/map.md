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

multimap
--------

No `[]` operator!

```cpp
std::multimap<char,int> mymm;

mymm.insert(std::pair<char,int>('a',10));
mymm.insert(std::pair<char,int>('b',20));
mymm.insert(std::pair<char,int>('b',30));
mymm.insert(std::pair<char,int>('b',40));
mymm.insert(std::make_pair<char,int>('c',50));
mymm.insert(std::pair<char,int>('c',60));
mymm.insert(std::pair<char,int>('d',60));

std::cout << "mymm contains:\n";
for (char ch='a'; ch<='d'; ch++)
{
  std::pair <std::multimap<char,int>::iterator, std::multimap<char,int>::iterator> ret;
  ret = mymm.equal_range(ch);
  std::cout << ch << " =>";
  for (std::multimap<char,int>::iterator it=ret.first; it!=ret.second; ++it) {
    std::cout << ' ' << it->second;
  }
}
```
