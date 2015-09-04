---
title: member function
---

# iterator
* begin()
* end()

# capacity
* size(): length of string
* length(): length of string
* empty()
* clear()

# access
* operator[]
* at()
* back(): A reference to the last character in the string

# mofifier

* operator+=

```c++
// string (1)
string& operator+= (const string& str);
// c-string
string& operator+= (const char* s);
// character
string& operator+= (char c);
```

* append

```c++
// string
string& append (const string& str);
// substring
string& append (const string& str, size_t subpos, size_t sublen);
// c-string
string& append (const char* s);
// buffer
string& append (const char* s, size_t n);
// fill
string& append (size_t n, char c);
// range
template <class InputIterator>
string& append (InputIterator first, InputIterator last);
```

* push_back(char): `void push_back (char c);`

* insert(): before the character indicated by pos (or p)

```c++
// string
string& insert (size_t pos, const string& str);
// substring
string& insert (size_t pos, const string& str, size_t subpos, size_t sublen);
// c-string
string& insert (size_t pos, const char* s);
// buffer
string& insert (size_t pos, const char* s, size_t n);
// fill
string& insert (size_t pos, size_t n, char c);
void insert (iterator p, size_t n, char c);
// single character
iterator insert (iterator p, char c);
// range
template <class InputIterator>
void insert (iterator p, InputIterator first, InputIterator last);
```

* erase(): erase part of the string

```c++
// sequence
string& erase (size_t pos = 0, size_t len = npos);
// character: Erases the character pointed by p
iterator erase (iterator p);
// range: [first,last)
iterator erase (iterator first, iterator last);
```

* replace()

```c++
// string
string& replace (size_t pos,  size_t len,  const string& str);
string& replace (iterator i1, iterator i2, const string& str);
// substring
string& replace (
  size_t pos,  size_t len,  const string& str,
  size_t subpos, size_t sublen
);
// c-string
string& replace (size_t pos,  size_t len,  const char* s);
string& replace (iterator i1, iterator i2, const char* s);
// buffer
string& replace (size_t pos,  size_t len,  const char* s, size_t n);
string& replace (iterator i1, iterator i2, const char* s, size_t n);
// fill
string& replace (size_t pos,  size_t len,  size_t n, char c);
string& replace (iterator i1, iterator i2, size_t n, char c);
// range
template <class InputIterator>
string& replace (iterator i1, iterator i2,
  InputIterator first, InputIterator last
);
```

# operation
* c_str(): A program **shall not alter** any of the characters in this sequence.
* copy(): Copies a substring of the current value of the string object
into the array pointed by s.
**does not append null-terminator**

```c++
size_t copy (char* s, size_t len, size_t pos = 0) const;
```

* find(): the first occurrence of the sequence specified after pos

```c++
// string
size_t find (const string& str, size_t pos = 0) const;
// c-string
size_t find (const char* s, size_t pos = 0) const;
// buffer
size_t find (const char* s, size_t pos, size_t n) const;
// character
size_t find (char c, size_t pos = 0) const;
```

* substr(): Returns a newly constructed string object
with its value initialized to a copy of a substring of this object

```c++
string substr (size_t pos = 0, size_t len = npos) const;
```

* compare()

```c++
// string
int compare (const string& str) const;
// substrings
int compare (size_t pos, size_t len, const string& str) const;
int compare (size_t pos, size_t len, const string& str,
  size_t subpos, size_t sublen
) const;
// c-string
int compare (const char* s) const;
int compare (size_t pos, size_t len, const char* s) const;
// buffer
int compare (size_t pos, size_t len, const char* s, size_t n) const;
```

return: 0, -, +

* npos: max value of size_t

```c++
static const size_t npos = -1;
```
