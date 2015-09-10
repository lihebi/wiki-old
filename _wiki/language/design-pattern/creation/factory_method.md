---
title: Factory Method
---

Responsible for manufacturing an object.

# class diagram
<script type="text/uml" class="uml">
[<abstract>Product]
[ConcreteProduct]
[<abstract>Creator | FactoryMethod(); AnOperation()]
[ConcreteCreator | FactoryMethod()]

[Creator]<:-[ConcreteCreator]
[ConcreteProduct]-:>[Product]

[ConcreteProduct]<--[ConcreteCreator]

[Creator]--[<note>AnOperation {product=FactoryMethod();}]
[ConcreteCreator]--[<note>return new ConcreteProduct()]

</script>

note:

* the FactoryMethod is always virtual, and often pure virtual.
So do not call in constructor.

# implementation

```c++
MazeGame::MakeRoom()
MazeGame::MakeWall
NewMazeGame::MakeRoom() {
  return NewRoom();
}
NewMazeGame::MakeWall() {
  return NewWall();
}
```
