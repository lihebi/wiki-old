---
title: Array
---


```coffee
list = [1, 2, 3, 4, 5]
cubes = (math.cube num for num in list)
```

=>

```js
cubes = (function() {
  var i, len, results;
  results = [];
  for (i = 0, len = list.length; i < len; i++) {
    num = list[i];
    results.push(math.cube(num));
  }
  return results;
})();
```

slicing
=======

```coffee
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
start   = numbers[0..2]
middle  = numbers[3...-2]
end     = numbers[-2..]
copy    = numbers[..]
numbers[1..3]=[1,3,4,5,6] # can be assigned
```

=>

```js
var copy, end, middle, numbers, start;
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
start = numbers.slice(0, 3);
middle = numbers.slice(3, -2);
end = numbers.slice(-2);
copy = numbers.slice(0);
```
