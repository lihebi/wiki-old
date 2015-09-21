---
title: js-regex
---

```js
// (xxx) 捕获型分组
// (?:xxx) 非捕获型分组
var pattern = /(xxx)(?:xxx)/;
var result = pattern.exec('string here');
// => result = ['match', '分组1', '分组2', ...]
var result = pattern.test('string here');
// => result = true or false
```
