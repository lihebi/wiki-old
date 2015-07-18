---
title: scope
---

When reference a variable in an expression, the search order is:

1. the current function scope
2. any enclosing scopes(parents)
3. module scope(global scope)
4. built-in scope

But if it is an assignment, it will be treated as a definition.

```py
def out_func():
  var = 1
  def inner_func():
    var = 2 # inside the current scope, this is treated as a definition.
  inner_func()
  # here var == 1
```

To get the data out, use `nonlocal` keyword.

```py
def out_func():
  var = 1
  def inner_func():
    nonlocal var
    var = 2
  inner_func()
  # here var == 2
```

`nonlocal` won't traverse up to module-level scope.
`global` indicates that the variable assignment should go directly into the module scope:

```py
#!/usr/bin/env python3
var = 3
def out_func():
  var = 1
  def inner_func():
    global var
    var = 2
  inner_func()
  # now var==1
  # but global.var == 2
```

python2 doesn't support `nonlocal`. Use this ugly idiom instead:

```py
#!/usr/bin/env python2
def out_func():
  var = [1]
  def inner_func():
    var[0] = 2
  inner_func()
```
