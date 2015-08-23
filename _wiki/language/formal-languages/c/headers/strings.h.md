---
title: strings.h
---

strcasecmp

```c
// 忽略大小写。比较所有字节。
// 返回：s1>s2: >0
//      s1=s2: =0
//      s1<s2: <0
int strcasecmp(const char *s1, const char *s2);
```

strncasecmp

```c
// 比较前n个字节
int strncasecmp(const char *s1, const char *s2, size_t n);
```

strlen

```c
// ssize_t: signed int(POSIX)
// size_t: unsigned int
size_t strlen(const char *str);
```
