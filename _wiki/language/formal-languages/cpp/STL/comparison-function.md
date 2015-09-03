---
title: comparison function
---

**Always have comparison functions return false for equal values.**

```c++
set<int, less_equal<int> > s;
s.insert(10);
s.insert(10);
```

check equivalence:

```c++
!(10A<=10B) && !(10B<=10A);
!true && !true
false
```

a easy-to-made error:

```c++
bool operator()(const string* ps1, const string* ps2) onst {
  return !(* ps1<* ps2); // always pay attention to negative
}
```
