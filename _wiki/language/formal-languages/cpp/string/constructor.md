---
title: Constructor
---

# constructor

```c++
// default
string();
// copy
string (const string& str);
// substring
string (const string& str, size_t pos, size_t len = npos);
// from c-string
string (const char* s);
// from sequence
string (const char* s, size_t n);
// fill
string (size_t n, char c);
// range
template <class InputIterator>
string  (InputIterator first, InputIterator last);
```

# operator=

```c++
// string
string& operator= (const string& str);
// c-string
string& operator= (const char* s);
// character
string& operator= (char c);
```
