---
title: condition
---

If
===

```coffee
number = -42 if true
date = if friday then sue else jill
```

existence
=========

```coffee
alert "I knew it!" if elvis?
speed ?= 15
zip = lottery.drawWinner?().address?.zipcode
```

becomes:

```js
if (typeof elvis !== "undefined" && elvis !== null) {
  alert("I knew it!");
}

if (speed == null) {
  speed = 15;
}

zip = typeof lottery.drawWinner === "function" ? (ref = lottery.drawWinner().address) != null ? ref.zipcode : void 0 : void 0;
```
