---
title: aaa
---

# Just A Buffer

Static
======

* `static member function`: can use `ClassName::function()` directly
* `static member variable`: only one object for all instance of the class
* `static variable`: A static variable inside a function keeps its value between invocations.
A static global variable or a function is "seen" only in the file it's declared in
* `static functions`: Static functions are not visible outside of the C file they are defined in.

std::find
=========

Returns an iterator to the first element in the range [first,last) that compares equal to val. If no such element is found, the function returns last.

```cpp
template<class InputIterator, class T>
  InputIterator find (InputIterator first, InputIterator last, const T& val)
{
  while (first!=last) {
    if (*first==val) return first;
    ++first;
  }
  return last;
}
```

std::find_if
============

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

trim a string
===============

```cpp
#include <algorithm> 
#include <functional> 
#include <cctype>
#include <locale>

// trim from start
static inline std::string &ltrim(std::string &s) {
        s.erase(s.begin(), std::find_if(s.begin(), s.end(), std::not1(std::ptr_fun<int, int>(std::isspace))));
        return s;
}

// trim from end
static inline std::string &rtrim(std::string &s) {
        s.erase(std::find_if(s.rbegin(), s.rend(), std::not1(std::ptr_fun<int, int>(std::isspace))).base(), s.end());
        return s;
}

// trim from both ends
static inline std::string &trim(std::string &s) {
        return ltrim(rtrim(s));
}
```

split a string
==============

```cpp
string s("Somewhere down the road");
    istringstream iss(s);

    do
    {
        string sub;
        iss >> sub;
        cout << "Substring: " << sub << endl;
    } while (iss);
```

```cpp
std::vector<std::string> &split(const std::string &s, char delim, std::vector<std::string> &elems) {
    std::stringstream ss(s);
    std::string item;
    while (std::getline(ss, item, delim)) {
        elems.push_back(item);
    }
    return elems;
}


std::vector<std::string> split(const std::string &s, char delim) {
    std::vector<std::string> elems;
    split(s, delim, elems);
    return elems;
}
```

middle order traverse's two different implement:

```c
bfs(node) {
  bfs(node->left);
  visit(node);
  bfs(node->right);
}
```

```
while(stack.size()>0 || node != NULL) {
  if (node) {
    stack.push(node);
    node = node->left;
  } else {
    node = stack.pop();
    visit(node);
    node = node->right;
  }
}
```

`$x_1$`

ctags -R --c++-kinds=+px

std::unique_ptr<Type> ptr; // ensure that the pointer is deleted after going out of scope.

static function:

`c static function`: this funciton can only be seen in the same file.
`c++ class member static method`: this function can be called on the class itself. e.g. `TheClass::func()`, instead of call on an instance. `TheClass::Instance().func()`

std::move

```c++
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
