---
title: string
---

predicates

* `stringp obj`: test if it is string
* `string-or-null-p obj`: `t` if string or nil
* `char-or-string-p`: string or char

create

* `make-string count char`

```lisp
(make-string 5 ?x) ; => "xxxxx"
(make-string 0 ?x) ; => ""
```

* `string &rest characters`: `(string ?a ?b ?c) ; => "abc"`
* `substring string start &optional end`
```lisp
(substring "abcdefg" 0 3) ; => "abc"
(substring "abcdefg" -3 -1) ; => "ef"
;; can be used on a vector[]
(substring [a b (c) "d"] 1 3) ; => [b (c)]
```

* `concat`

```lisp
(concat "abc" "def") ; => "abcdef"
(concat "abc" (list 120 121) [122]) ; => "abcxyz"
(concat "abc" nil "def") ; => "abcdef"
(concat) ; => ""
```

* `split-string string &optional separators omit-nulls trim`

```lisp
;; if separator is nil, will remove nil strings from result
(split-string "  two words  ") ; => ("two" "words")
;; to retain the nil strings
(split-string "  two words  " split-string-default-separators)
;; => ("" "two" "words" "")
```

modify string

* `aset string idx char`: set a character
* `store-substring string idx obj`: alter string at idx with obj
* `clear-string string`

compare

* `char-equal c1 c2`
* `string= s1 s2`
* `string-equal s1 s2`: same as above
* `string< s1 s2`, `string-lessp s1 s2`
* `string-suffix-p suffix string &optional ignore-case`: true if suffix is suffix of string
* `ompare-strings s1 start1 end1 s2 start2 end2 &optional ignore-case`

convert

* `number-to-string number`
* `string-to-number string &optional base`
* `char-to-string char`
* `string-to-char str`: first char in string
* `concat`: convert a vector or a list to string
* `vconcat`: convert a string to a vector
* `append`: convert a string into a list
* `byte-to-string`: convert a byte to a string

format string

prototype:

```
format string &rest objects
```

examples:

```lisp
(format "hell %d" var)
```

specifications

* `%s`: `princ`, `prin1`: without quoting
* `%S`: with quoting
* `%o`: base-8
* `%d`: base-10
* `%x`: base-16
* `%X`: uppercase base-16
* `%c`: char
* `%e`: exponential notation
* `%f`: float
* `%g`: float
* `%%`: no obj needed, just excape `%`

numeric arguments

```lisp
"%5d" 123 ;=> "  123"
"%7s", "foo" ;=> "    foo"
"%06d", 123 ;=> "000123" ; padding with 0
"%-6d", 123 ;=> "123   "
```

case

* `downcase string-or-char`
* `upcase`
* `capitalize`
* `upcase-initials`
