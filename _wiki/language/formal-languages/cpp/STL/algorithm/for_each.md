---
title: for_each
---


## for

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

## std::for_each

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

### mem_fun
```c++
list<Widget*> lpw;
for_each(
  lpw.begin(),
  lpw.end(),
  // because the test is the member function of Widget
  // and we want to call it on all for_each item.
  // If no mem_fun, it can not compile
  mem_fun(&Widget::test)
);
```

TODO:

* ptr_fun
* mem_fun_ref
