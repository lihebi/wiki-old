---
title: control structures
---

# sequential

```lisp
(progn a b c ...) ; evaluate a,b,c,... sequentially, return the last value
(prog1 a b c ...) ; return the first value
(prog2 a b c ...) ; return the second value
```

# conditions

* `if condition then-form else-forms...`
* `when condition then-forms...`
* `unless condition forms...`
* `cond clause...`, `(condition body-forms...)`.
break not needed. If only condition in clause, then return condition. Otherwise return value of last body-form.

pcase: compare a particular value against various possible cases
`(pcase exp branch1 branch2 branch3 ...)`.
branch is `(upattern body-forms...)`

This is more like C case, and no need to write predicate for every case.

example

```lisp
(pcase (get-return-code x)
  (‘success (message "done"))
  ('fail (message "fail"))
)
```

## condition math
* not
* and
* or

# loop
## while
`while condition forms...`
The value of while is always nil.

## dolist
`<macro> dolist (var list [result]) body...`

execute body to each element of list.
The var is the local binding of the current element.
result is the return variable.

```lisp
(defun reverse (list)
  (let (value)
    (dolist (elt list value)
      (setq value (cons elt value)))))
```

## dotimes
`dotimes (var count [result]) body...`

var is index. from 0 to count-1.

```lisp
(dotimes (i 100)
  body
```
