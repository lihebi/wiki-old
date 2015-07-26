---
title: variable
---


No need to declare a variable.

```coffee
number = 4
```



scope is handle like this:
--------------------------

```coffee
outer = 1
changeNumbers = ->
  inner = -1
  outer = 10
inner = changeNumbers()
```

=>

```js
var changeNumbers, inner, outer;

outer = 1;

changeNumbers = function() {
  var inner;
  inner = -1;
  return outer = 10;
};

inner = changeNumbers();
```


Object
======

```coffee
math =
  root:   Math.sqrt
  square: square
  cube:   (x) -> x * square x
```
