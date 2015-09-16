---
title: extern
---

* extern means extend the visibility of a variable or function.
* Declaration can be many times, but definition can only appear once.
* Definition will allocate memory, but declaration will never allocate memory.

# Function

For function declare and define, `extern` is added by compiler by default.
So use or not use `extern` for functions are equivalent.

# Variable

define a variable

```c
int a;
```

declare a variable

```c
extern int a;
```

This can be used so that in this file,
a refer to the variable actually defined and allocated in another file.
The definition of the variable in the other file does not have extern,
but it is still available by this file ...

An exception: extern a variable with initialization

```c
extern int a = 8;
```

This will be treated as definition.

# extern "C"
> extern "C" makes a function-name in C++ have 'C' linkage
> (compiler does not mangle the name)
> so that client C code can link to (i.e use) your function
> using a 'C' compatible header file
> that contains just the declaration of your function.

1. Since C++ has overloading of function names and C does not
2. C++ compiler cannot just use the function name as a unique id to link to, so it mangles the name by adding information about the arguments
3. A C compiler does not need to mangle the name since you can not overload function names in C

**When you state that a function has extern "C" linkage in C++,
the C++ compiler does not add argument/parameter type information
to the name used for linkage.**

## syntax
* can specify "C" linkage to each individual declaration/definition explicitly
* use a block to group a sequence of declarations/definitions to have a certain linkage:

```c
extern "C" void foo(int);
extern "C"
{
   void g(char);
   int i;
}
```
