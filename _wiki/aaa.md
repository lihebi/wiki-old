---
title: aaa
---

# Just A Buffer

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
