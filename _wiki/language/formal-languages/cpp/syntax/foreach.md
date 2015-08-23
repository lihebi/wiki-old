---
title: for_each
---

for
---


```cpp
vector<int> v;
for (auto i : v) {
  // do with i
}
```

here `auto` means `vector<int>::value_type`.

is equal-valent to:

```cpp
vector<int> v;
for (std::vector<int>::const_iterator it=v.begin();it!=v.end();it++) {
  auto i=*it; //*
  // do with i
}
```

std::for_each
-------------

```cpp
void myfunction (int i) {  // function:
  std::cout << ' ' << i;
}

struct myclass {           // function object type:
  void operator() (int i) {std::cout << ' ' << i;}
} myobject;

std::vector<int> myvector;

for_each (myvector.begin(), myvector.end(), myfunction);
for_each (myvector.begin(), myvector.end(), myobject);
for_each (v.begin(),v.end(),[](int i) { cout<<i; });
```
