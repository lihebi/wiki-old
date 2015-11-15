---
title: list
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

# functions
## predicates

* `consp obj`
* `atom obj` == `(not (consp obj))`
* `listp obj`
* `nlistp obj` == `(not (listp obj))`
* `null obj`

## access

* `car cons-cell`: `(car '(a b c)') ;=> a`
* `cdr cons-cell`: `(cdr '(a b c)') ;=> (b c)`
* `car-safe`: It returns the car of object if object is a cons cell, nil otherwise.
This is in contrast to car, which signals an error if object is not a list.
* `cdr-safe`
* `pop`: examine the car of a list(return it), and take it off the list.
* `nth n list`
* `nthcdr n list`

```lisp
(nth 2 ’(1 2 3 4)) ; => 3
(nth 10 ’(1 2 3 4)) ; => nill
(nth n x) == (car (nthcdr n x))
```

* `last list`
* `safe-length list`: no risk of either an error or an infinite loop
* `length`: if you are not worry about the circular of a list, use it.
* `ccar`: == `(car (car cons-cell))`
* `cadr cons-cell` == `(car (cdr cons-cell))` == `(nth 1 cons-cell)`
* `cdar cons-cell` == `(cdr (car cons-cell))`
* `cddr cons-cell` == `(cdr (cdr cons-cell))` == `(nthcdr 2 cons-cell)`

## create list
* `cons object1 object2`
is used to create a cons, with object1 as car, object2 as cdr.
It is often used to add a single element to the front of a list.
This is called consing the element onto the list.

```lisp
(setq list (cons newelt list))
```

* `list &rest objects`: creates a list with objects as its elements. The resulting list is always nil-terminated.
* `make-list length object`: `(make-list 3 ’pigs) ;=> (pigs pigs pigs)`
* `append &rest sequences`: This function returns a list containing all the elements of sequences.
The sequences may be lists, vectors, bool-vectors, or strings, but the last one should usually be a list. 
* `reverse list`: create a new list. The original list is not modified.

## modify list variables
modify a list which is stored in a variable.

* `push element listname`: == (setq listname (cons element listname))
* `add-to-list symbol element &optional append compare-fn`: push only if not already in the list

```lisp
(setq foo (a b))
(add-to-list 'foo 'c) ; => (c a b)
(add-to-list 'foo 'b) ; no effect, b already in
foo ;=> (c a b) ; changed!
```

* `add-to-ordered-list symbol element &optional order`: insert at the position specified by order. If order is nil, at the end.

## modify existing list structures
* `setcar cons object`
* `setcdr cons object`
* `nconc &rest lists`: like append, but alter the origin.

```lisp
(setq x ’(1 2 3))
(nconc x ’(4 5))
x ;=> (1 2 3 4 5)
```

* `nreverse list`: reverse the original list
* `sort list predicate`

```lisp
(setq nums ’(1 3 2 6 5 4 0))
(sort nums ’<) ; => (0 1 2 3 4 5 6)
nums ;=> (1 2 3 4 5 6) ; CAUTION no 0!!!
```

Do not assume the modified nums contains the whole list!!
We often do: `(setq nums (sort nums ’<))`

## set operation
### about eq,eql,equal
```lisp
(eq 1.2 1.2) ; nil
(eql 1.2 1.2) ; t
(equal (2) (2)) ; t
(eq (2) (2)) ; nil
```
### main

* `memq object list`: tests to see whether object is a member of list.
If it is, memq returns a list starting with the first occurrence of object. Otherwise, it returns nil.
The letter ‘q’ in memq says that it uses `eq` to compare.

```lisp
(memq ’b ’(a b c b a)) ; => (b c b a) ; variable(symbol) can be equal
(memq ’(2) ’((1) (2))) ; => nil ; (2) and (2) are not eq.
```

* `delq object list`: removes all elements eq to object from list
* `remq object list`: return a copy of list with all object removed. using `eq`
* `memql object list`: use `eql`: float are compared by value
* `member object list`: whether object is member of list. Using `equal`
* `delete object sequence`: use `equal`
* `remove object sequence`: return copy. non-destructive version of `delete`
* `delete-dups list`: removes all `equal` duplicates from list, stores the result in list and returns it.

## Association Lists(map)

* `assoc key alist`: returns the first association for key in alist, comparing key against the alist elements using `equal`

```lisp
(setq trees ’((pine . cones) (oak . acorns) (maple . seeds)))
(assoc ’oak trees) ; => (oak . acorns)
(cdr (assoc ’oak trees)) ; => acorns ; most useful form
(assoc ’birch trees) ; => nil
```

* `rassoc value alist`: by value ...
* `assq key alist`: using `eq`
* `rassq value alist`: using `eq`
* `assoc-default key alist &optional test default`: calling test with two arguments: the element or its car, and key.
If test is omitted or nil, `equal` is used for comparison.
If the element is a cons, then the value is the element’s cdr. Otherwise, the return value is default.
* `copy-alist alist`: returns a two-level deep copy of alist
* `assq-delete-all key alist`: deletes from alist all the elements whose `car` is `eq` to `key`
* `rassq-delete-all value alist`: by value

## property list
这就是一个解释list的方式。从左到右两两配对。以下函数都使用`eq`

* `plist-get plist property`: returns the value of the property stored in the property list plist
* `plist-put plist property value`

```lisp
(plist-get ’(foo 4) ’foo) ; => 4
(plist-get ’(foo 4 bad) ’foo) ; => 4
(plist-get ’(foo 4 bad) ’bad) ; => nil
(plist-get ’(foo 4 bad) ’bar) ; => nil

(setq my-plist ’(bar t foo 4))
(setq my-plist (plist-put my-plist ’foo 69)) ; => (bar t foo 69)
(setq my-plist (plist-put my-plist ’quux ’(a))) ; => (bar t foo 69 quux (a))
```



