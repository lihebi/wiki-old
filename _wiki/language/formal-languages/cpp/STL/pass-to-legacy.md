---
title: pass to legacy API
---

## vector
```c++
vector<int> v;
void func(const int* pi, size_t num);
// wrong, the size of v may be 0
func(&v[0], v.size());
if (!v.empty()) {
  func(&v[0], v.size());
}
```

do not use `v.begin()` instead of `&v[0]`, because:

* v.begin() is a iterator, not always a pointer
* `&*v.begin()` is same as `&v[0]`, but ...

Note, the legacy API should not add/remove items,
because no way for the container to know the size.

## String
Only vectors are guarnteed to have the same underlying memory layout as arrays.
String not.

* data for strings is not guaranteed to be stored in contiguous memory.
* is not guaranteed to be null terminated

so put the data into a `vector<char>` first, and use vector trick.
