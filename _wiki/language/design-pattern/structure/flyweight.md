---
title: Flyweight
---

For text editor,
every character should use an object to represent.
In this case,
the longer the article, the more objects.

Idea: split intrinsic and extrinsic features. Indeed there're only 26 alphabets.

location, fonts, etc are the context information, pass as an extrinsic parameter.

logically the appearance of every alphabet has an object,
but actually there's only one shared object.

# class diagram
<script type="text/uml" class="uml">
[FlyweightFactory | GetFlyWeight(key)]
[Client]
[<abstract>Flyweight | Operation(ExtrinsicState)]
[ConcreteFlyweight | Operation(extrinsicState) | intrinsicState]
[UnsharedConcreteFlyweight | Operation(extrinsicState) | allState]

[ConcreteFlyweight]-:>[Flyweight]
[UnsharedConcreteFlyweight]-:>[Flyweight]

[FlyweightFactory]flyweight o->[Flyweight]
[Client]->[FlyweightFactory]
[Client]->[ConcreteFlyweight]
[Client]->[UnsharedConcreteFlyweight]

[FlyweightFactory]--[<note>if key exists{
  return existing flyweight
} else {
  new Flyweight
  add it to pool of flyweights
  return new Flyweight
}
]
</script>
