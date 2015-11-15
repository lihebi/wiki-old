---
title: function
---

# lambda
```lisp
(lambda (arg-variables...)
  [documentation-string]
  [interactive-declaration]
  body-forms...)
```

# defun
```lisp
defun name args [doc] [declare] [interactive] body. . .
```

* `funcall function &rest arguments`

```lisp
(setq f ’list)
(funcall f ’x ’y ’z)
```

* `apply function &rest arguments`: last arguments must be a list

```lisp
(setq f ’list)
(apply f ’x ’y ’z) ; error
(apply ’+ 1 2 ’(3 4)) ; ok 10
```

# macros
`defmacro name args [doc] [declare] body. . .`
