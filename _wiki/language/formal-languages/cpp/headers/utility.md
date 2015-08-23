---
title: utility
---

```cpp
#include <utility>
```

std::move
---------

transfer ownership of the assets and properties of an object directly without having to copy them when the argument is an rvalue.

moved-from object is left in a valid but unspecified state

```cpp
std::string foo = "foo-string";
std::string bar = "bar-string";
std::vector<std::string> myvector;
myvector.push_back (foo);                    // copies. foo remain.
myvector.push_back (std::move(bar));         // moves. bar contain unspecified value.
```

```cpp
int main()
{
  std::string str = "Hello";
  std::vector<std::string> v;

  // uses the push_back(const T&) overload, which means
  // we'll incur the cost of copying str
  v.push_back(str);
  std::cout << "After copy, str is \"" << str << "\"\n";

  // uses the rvalue reference push_back(T&&) overload,
  // which means no strings will be copied; instead, the contents
  // of str will be moved into the vector.  This is less
  // expensive, but also means str might now be empty.
  v.push_back(std::move(str));
  std::cout << "After move, str is \"" << str << "\"\n";

  std::cout << "The contents of the vector are \"" << v[0]
  << "\", \"" << v[1] << "\"\n";

  // string move assignment operator is often implemented as swap,
  // in this case, the moved-from object is NOT empty
  std::string str2 = "Good-bye";
  std::cout << "Before move from str2, str2 = '" << str2 << "'\n";
  v[0] = std::move(str2);
  std::cout << "After move from str2, str2 = '" << str2 << "'\n";
}
```

Possible output:

```
After copy, str is "Hello"
After move, str is ""
The contents of the vector are "Hello", "Hello"
Before move from str2, str2 = 'Good-bye'
After move from str2, str2 = 'Hello'
```
