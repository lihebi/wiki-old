---
title: type
---

# 常量

`nil`, `true`, `false`

# 变量

```
var variable = 50
let constant = 40
```

Swift是强类型的语言，值和类型必须一致。
但是，不必显示写出类型。
swift会从后面的值猜测类型，所以可以不写类型。如果值无法提供类型的准确猜测，可以指定：

```
let constant:Double = 70.0
```

变量不会隐式转换类型，必须显示强制转换。

```
let str1 = "ss "
let num1 = 34
let num2 = 12
let combine = str1+String(num1)
```
在字符串中加入值的更简便的方式：

```
let combine2 = "hello \(num1) world \(num1+num2)"
```

# 数组

```
var list = ["hello", "world"]
list[1] = "world2"
```

建立空数组

```
let emptyArray = String[]()
// 如果类型可以猜测
let emptyArray = []
```

# 字典

```
var dict = [
  "1":"hello",
  "2":"world",
]
dict["3"] = "hebi"
```

建立空字典

```
let emptyDict = Dictionary<String, Float>()
let emptyDict2 = [String: Float]()
// 如果类型可以猜测
let emptyDict = [:]
```
