---
title: cons.md
---

# cons cell
* A `cons cell` an object that consists of two slots, called the `car slot` and the `cdr slot`.
* `atoms`: an object which is not a cons cell

```
----------------
| car   | cdr  |
| value | next |
----------------
```
* `(a . b)`: explicitly declare a cons cell whose car is the object a and whose cdr is the object b

Some clarification:

* `(a . b)` is `|a | b|`.
* `(a . (b))` 是 `|a | b | nil |`
* `(a b c)` is `(a . (b . (c)))`.
* `(a . b . c)` is illegal.

# tricks

`cons object1 object2`
is used to create a cons, with object1 as car, object2 as cdr.
It is often used to add a single element to the front of a list.
This is called consing the element onto the list.

```lisp
(setq list (cons newelt list))
```
