---
title: algorithm
---

```cpp
#include <algorithm>
```

std::reverse
------------

```cpp
reverse(v.begin(), v.end());
```

std::find
---------

Returns an iterator to the first element in the range [first,last) that compares equal to val. If no such element is found, the function returns last.

```cpp
template<class InputIterator, class T>
InputIterator find (InputIterator first, InputIterator last, const T& val)
{
  while (first!=last) {
    if (*first==val) return first; //*
    ++first;
  }
  return last;
}
```

std::find_if
------------

Returns an iterator to the first element in the range [first,last) for which pred returns true. If no such element is found, the function returns last.

```cpp
template<class InputIterator, class UnaryPredicate>
InputIterator find_if (InputIterator first, InputIterator last, UnaryPredicate pred)
{
  while (first!=last) {
    if (pred(*first)) return first;
    ++first;
  }
  return last;
}
```

for example

```cpp
template <typename T>
class is_greater_than
{
public:
  is_greater_than (const T & n)
  : value(n)
{}

  bool operator() (const T & element) const
{
  return element > value;
}

private:
  T value;
};
```

use here:

```cpp
if (
  find_if (values.begin(), values.end(), is_greater_than<int> (5))
  != values.end()
  )
  ```
