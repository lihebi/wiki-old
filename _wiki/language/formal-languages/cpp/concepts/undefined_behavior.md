---
title: undefined behavior
---

```c++
int *p = 0; // null pointer
std::cout << *p; // UNDEFINED dereferencing a null pointer
char name[] = "Carla";
char c = name[10]; // UNDEFINED invalid array index
```

They most come from pointer and address.
