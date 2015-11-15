---
title: variable
---

# global
* `setq symbol form...`: Set up global binding.
When used with `let`, set local binding while the global binding is unchanged.

symbol is not evaluated, form is. symbol is said to be automatically quoted.
The ‘q’ in setq stands for "quoted".

# local binding
* `let (bindings...) forms...`
bindings can be: 1) a symbol, which is nil; 2) `(symbol value-form)`.
Its return value is the value of the last form in forms

```lisp
(let ((y 1)
  (z y))
    (list y z)) ; => (1 2)
```

* `let* (bindings. . . ) forms. . .`: binds each variable right after computing its local value, before computing the local value for the next variable.
bindings can refer to the preceding symbols.

```lisp
(let* ((y 1) (z y)) (list y z)) ; => (1 1)
```

# explicitly define global var
* `defvar symbol [value [doc-string]]`
* `defconst symbol value [doc-string]`

# buffer-local-binding
* `make-local-variable variable`: creates a buffer-local binding in the current buffer for variable
* `setq-local variable value`
* `make-variable-buffer-local variable`: marks variable (a symbol) automatically buffer-local,
so that any sub- sequent attempt to set it will make it local to the current buffer at the time
* `defvar-local variable value &optional docstring`
* `local-variable-p variable &optional buffer`
