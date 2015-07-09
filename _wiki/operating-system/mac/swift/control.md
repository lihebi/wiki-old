---
title: control
---



# 控制流

## if & else

条件表达式的括号是可选的。但是大括号是必须的。

```
if a > 50 {
  // xxx
} else {
  // xxx
}
```
条件表达式必须是条件，这意味着`if a`是错的。

### 可选值

可以使用`if`和`let`一起，来应对一些值缺失的情况。这些值就是可选值。
可选值要么包括一个值，要么包括`nil`。
在值的类型后面加上`?`来标记一个可选值。

```
var optionalName:String? = "John"
var greeting = "Hello"
if let name = optionalName {
  greeting = "Hello \(name)"
}
```

## switch

没有`default`语句会报错。
不需要`break`。
switch支持所有类型的数据而不限于`int`。
switch支持很大范围的比较操作，而不限于比较是否相等。

```
let a = "Hello"
switch a {
  case "Hello":
    xxx
    xxx
  case "World","Man":
    xxx
    xxx
  case let x where x.hasSuffix("eoll"):
    xxx
  default:
    xxx
}
```

## for in

```
let dict = [
  "prime":[2,3,4,6,8,12],
  "fibo":[1,1,2,3,5,8],
]
for (kind, numbers) in dict {
  for number in numbers {
    // xxx
  }
}
```

## while

```
var n=2
while n<100 {
  n = n*2
}
```

```
var n=2
do {
  n = n*2
} while n<100
```

## index in loop

* `0..<3`: 0,1,2
* `0...3`: 0,1,2,3

```
for i in 0..<3 {
  // i
}
```
和下面等价

```
for var i=0;i<3;i++ {
  // i
}
```
