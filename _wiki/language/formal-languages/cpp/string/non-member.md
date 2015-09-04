---
title: non-member function
---


## operator +
```c++
// string
string operator+ (const string& lhs, const string& rhs);
// c-string
string operator+ (const string& lhs, const char*   rhs);
string operator+ (const char*   lhs, const string& rhs);
// character
string operator+ (const string& lhs, char          rhs);
string operator+ (char          lhs, const string& rhs);
```

## rational
```c++
bool operator== (const string& lhs, const string& rhs);
bool operator== (const char*   lhs, const string& rhs);
bool operator== (const string& lhs, const char*   rhs);
bool operator!= (const string& lhs, const string& rhs);
bool operator!= (const char*   lhs, const string& rhs);
bool operator!= (const string& lhs, const char*   rhs);
bool operator<  (const string& lhs, const string& rhs);
bool operator<  (const char*   lhs, const string& rhs);
bool operator<  (const string& lhs, const char*   rhs);
bool operator<= (const string& lhs, const string& rhs);
bool operator<= (const char*   lhs, const string& rhs);
bool operator<= (const string& lhs, const char*   rhs);
bool operator>  (const string& lhs, const string& rhs);
bool operator>  (const char*   lhs, const string& rhs);
bool operator>  (const string& lhs, const char*   rhs);
bool operator>= (const string& lhs, const string& rhs);
bool operator>= (const char*   lhs, const string& rhs);
bool operator>= (const string& lhs, const char*   rhs);
```

## >>
extract string from stream

```c++
istream& operator>> (istream& is, string& str);
ostream& operator<< (ostream& os, const string& str);
```

## getline
get line from stream into string

```c++
istream& getline (istream& is, string& str, char delim); // delim
istream& getline (istream& is, string& str); // new line
```
