---
title: function
---



# 函数

```
func greet(name:String, day:String) -> String {
  return "Hello \(name), today is \(day)"
}
greet("Bob", "Tuesday")
```
使用一个tuple来return多个值

```
func returnTuple() -> (Int, Int, Int) {
  return (3,4,5)
}
```
参数不定长

```
func variableArg(numbers:Int...) -> Int {
  for number in numbers {
    // number
  }
}
```
函数可以嵌套

```
func outer() {
  var y=10
  func add() {
    y += 5
  }
  add()
}
```
## 函数使用和返回函数
函数是`first-class`类型，这意味着函数可以返回函数：

```
func makeFunc() -> (Int -> Int) {
  func inner(num:Int) -> Int {
    return num+1
  }
  return inner
}
```
函数的参数也可以是函数

```
func funcWithFuncArg(list:int[], argFunc:Int -> Bool) -> Bool {
  for item in list {
    if argFunc(item) {
      return true
    }
  }
  return false
}
```
## 函数闭包
函数是一个闭包。
闭包有一个简单的写法：不写名字，将代码写在`{}`之间。
使用`in`来隔离开`参数和返回值`以及`函数体`

```
numbers.map({
  (number:Int) -> Int in
    let result = 3*number
    return result
})
```
甚至可以写得更精简。
如果一个闭包得类型已经知道了，例如`callback function for a delegate`。
这时，可以省去参数类型，返回值类型，或者都省去。
一个单一语句得闭包隐式地返回这个唯一语句的值。

```
numbers.map({number in 3*number})
```

可以使用index来找到函数的参数

```
sort([1,5,3,8]) {$0>$1}
```
