---
title: protocol
---

Protocol
========

```swift
protocol ExampleProtocol {
  var simpleDescription: String { get }
  mutating func adjust()
}
```

Protocol can be adopted by classes, enums, structs.

```swift
class SimpleClass: ExampleProtocol {
  var simpleDescription: String = "A very simple class."
  var anotherProperty: Int = 69105
  func adjust() {
    simpleDescription += "  Now 100% adjusted."
  }
}
var a = SimpleClass()
a.adjust()
let aDescription = a.simpleDescription

struct SimpleStructure: ExampleProtocol {
  var simpleDescription: String = "A simple structure"
  mutating func adjust() {
    simpleDescription += " (adjusted)"
  }
}
var b = SimpleStructure()
b.adjust()
let bDescription = b.simpleDescription
```

`mutating` means this method modify the structure.
Class doesn't need this keyword, because methods on a class can always modify the class.

Extension
=========

```swift
extension Int: ExampleProtocol {
  var simpleDescription: String {
    return "The number \(self)"
  }
  mutating func adjust() {
    self += 42
  }
}
println(7.simpleDescription)
```
