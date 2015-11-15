---
title: evaluation
---

`form`: a lisp expression that is intended to be evaluated.

There are three kinds of forms: `symbol`, `list`, and "all others".

## self evaluated

numbers, vectors, chars, strings are self-evaluated: they evaluate to themself.

```lisp
’123 ;=> with out evaluate: 123
123 ;=> eval to itself, still 123
(eval '123) ;=> explicit evaluate, still 123
(eval (eval '123)) ;=> eval twice, still 123
```

When a symbol is evaluated, it is treated as a variable.
If the variable is not defined, signal error.

a non-empty list has to be either a function call, macro call, special form, according to their first element.

## function call

The first element of a list can be a function symbol indirection.

```lisp
(symbol-function ’car) ; => #<subr car>
(fset ’first ’car) ; => car
(fset ’erste ’first) ; => first
(erste ’(1 2 3))
```

symbol-function: This returns the object in the function cell of symbol.

```lisp
(defun bar (n) (+ n 2))
(symbol-function 'bar) ; => (lambda (n) (+ n 2))
(fset 'baz 'bar) ;=> bar
(symbol-function 'baz) ;=> bar
```

or it can be a anonymous funciton:

```lisp
((lambda (arg) (erste arg) ’(1 2 3)))
````

However, it is *deprecated!*. Instead, use:

```lisp
(funcall (lambda (arg) (erste arg)) '(1 2 3))
;; or
(let ((arg ’(1 2 3))) (erste arg))
```

The steps to evaluate function: evaluate the arguments from left to right, then evalute the function body.

## macro

The arguments to the macro is not evuated.
The first thing is to compute the *expantion* of the macro.

## special form

Most special forms define control structures or perform variable bindings

Its arguments are not all evaluated. The steps to evaluate is specific in the form.

`special-form-p`

## autoload
The autoload feature allows you to call a function or macro whose function definition has not yet been loaded into Emacs.
Calling that symbol as a function automatically loads the specified file

# quote
The special form `quote` returns its single argument, as written, without evaluating it.
Can also write as `'`

```lisp
(quote (+ 1 2)) ;=> (+ 1 2)
(quote foo) ;=> foo
’foo ;=> foo
’’foo ;=> (quote foo
````

## backquote
selectively evaluate elements of that list

```lisp
‘(a list of ,(+ 2 3) elements) ;=> (a list of 5 elements)
‘(1 2 (3 ,(+ 4 5))) ; => (1 2 (3 9)) ; can also use in deeper level
```

`,@`: The elements of the spliced list become elements at the same level as the other elements of the resulting list.

```lisp
(setq some-list ’(2 3))
‘(1 ,@some-list 4 ,@some-list) ; => (1 2 3 4 2 3)
```
