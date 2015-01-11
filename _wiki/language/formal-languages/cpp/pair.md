---
title: pair
---

std::make_pair

```cpp
template <class T1,class T2>
pair<T1,T2> make_pair (T1 x, T2 y)
{
  return ( pair<T1,T2>(x,y) );
}
```

for example:

```cpp
std::make_pair("hello", "world");
```

equals to:

```cpp
std::pair<string, string>("hello", "world");
```
