---
title: Decorator
---

Add responsibilities to individual objects, not to an entire class, dynamically.

Add one or more responsibilities to an object.

# class diagram
<script text="text/uml" class="uml">
[<abstract>Component | Operation()]
[ConcreteComponent | Operation()]
[<abstract>Decorator | Operation()]
[ConcreteDecoratorA | Operation() | AddedState]
[ConcreteDecoratorB | Operation(); AddedBehavior()]

[ConcreteComponent]-:>[Component]
[Decorator]-:>[Component]
[ConcreteDecoratorA]-:>[Decorator]
[ConcreteDecoratorB]-:>[Decorator]
[Decorator]component o->[Component]

[Decorator]--[<note>component->Operation()]
[ConcreteDecoratorB]--[<note>Decorator::Operation()
AddedBehavior()]
</script>
