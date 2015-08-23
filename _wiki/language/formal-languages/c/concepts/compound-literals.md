---
title: Compound Literals
---

A compound literal looks like a cast containing an initializer.
Its value is an object of the type specified in the cast,
containing the elements specified in the initializer;
it is an lvalue.

## Example

```c
struct foo {int a; char b[2];} structure;
```

The constructing:

```c
structure = ((struct foo) {x + y, 'a', 0});
```

## more examples

```c
char **foo = (char *[]) { "x", "y", "z" };
```

## static
Value in the compound literals must be constant.

```c
static struct foo x = (struct foo) {1, 'a', 'b'};
static int y[] = (int []) {1, 2, 3};
static int z[] = (int [3]) {1};
```
