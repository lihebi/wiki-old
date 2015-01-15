---
title: extern
---

function
--------

For function declare and define, `extern` is added by compiler by default.
So use or not use `extern` for functions are equivalent.

Variable
--------

define a variable

```c
int a;
```

declare a variable

```c
extern int a;
```

declare will not allocate memory, and it can be done many times.
