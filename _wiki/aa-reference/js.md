---
title: javascript
---

# function definition

```
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
```

string array map to int array:

```js
var a = "1,2,3,4";

var b = a.split(',').map(function(item) {
    return parseInt(item, 10);
});
```
