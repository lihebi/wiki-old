---
title: vector
---

## init

**ONLY WITH C++11**
with flag `-std=c++11`

```cpp
vector<int> v {1,2,3};
```

```cpp
int row,col;
vector< vector<int> > heights(row, vector<int>(col));
```

```cpp
char init[] = "1111";
vector<char> v(init, end(init)-1); // remove '\0'
```

## functions

* `size()`

## Note

Do not use `vector<bool>`.
It actually not store bool,
but proxy object, as the design to save space.
