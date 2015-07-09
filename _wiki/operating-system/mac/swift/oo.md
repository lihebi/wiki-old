---
title: Object-Oriented
---

定义class:
=========

```swift
class NamedShape {
  var numberOfSides: Int = 0
  var name: String

  init(name: String) {
    self.name = name
  }
  // or
  init(name aliasName: String) {
    self.name = aliasName
  }

  func simpleDescription() -> String {
    return "A shape with \(numberOfSides) sides."
  }
}
```

每一个field都要有初始值。可以在定义时给定，也可以在init函数中。
可以没有init函数。
析构函数是deinit。

使用class:
==========

```swift
var shape = Shape("xxx")
// or:
var shape = Shape(name: "xxx")
shape.numberOfSides = 7
var shapeDescription = shape.simpleDescription()
```

继承
====

* Child: Father
* super.xxx()
* override必须explicitly写出来，否则报错

```swift
// 父类写后面
class Square: NamedShape {
  var sideLength: Double
  init(sideLength: Double, name: String) {
    super.init(name: name) // 调用父类的函数
  }
  override func simpleDescription() -> String {
    return "A square with sides of length \(sideLength)."
  }
}
```

Getter & Setter
===============
field in class can have getter and setter function.

```swift
class CCC {
  var sideLength: Double = 0.0
  var perimeter: Double {
    get {
      return 3.0 * sideLength
    }
    set {
      sideLength = newValue / 3.0
    }
  }
  var another: TheType {
    willSet {
      // stmt
    }
    didSet {
      // stmt
    }
  }
}
```

* `newValue` is the implicit name of the new value

Enum
====

```swift
enum Rank: Int {
  case Ace = 1
  case Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten
  case Jack, Queen, King
  func simpleDescription() -> String {
    switch self {
      case .Ace: // use "dot" expression for the value in enum
      return "ace"
      case .Jack:
      return "jack"
      case .Queen:
      return "queen"
      case .King:
      return "king"
      default:
      return String(self.rawValue)
    }
  }
}
```

Struct
======

```swift
struct Card {
  var rank: Rank
  var suit: Suit
  func simpleDescription() -> String {
    return "The \(rank.simpleDescription()) of \(suit.simpleDescription())"
  }
}
```

The same as classes, struct can have methods and initializers.
The difference is, struct pass by copy, class pass by reference.
