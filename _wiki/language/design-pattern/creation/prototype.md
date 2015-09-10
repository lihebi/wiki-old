---
title: Prototype
---

Client has many subclasses, but only minor difference.
Then we just take out the different part,
build the class hierarchy,
composite this difference into the client.

# class diagram
<script type="text/uml" class="uml">
[Client | Operation()]
[<abstract>Prototype | Clone()]
[ConcretePrototype1 | Clone()]
[ConcretePrototype2 | Clone()]

[ConcretePrototype1]-:>[Prototype]
[ConcretePrototype2]-:>[Prototype]

[Client]prototype->[Prototype]

[Client]--[<note>p=prototype->Clone()]
[ConcretePrototype1]--[<note>return copy of self]
</script>

# implementation

```c++
class PT1 {
  PT1();
  PT1(const PT1&)
  virtual void init();
  virtual PT1* Clone() {return new PT1(* this);}
};
class Client {
  virtual PT1* MakePT1();
  Client(PT1* pt1) {
    prototypePT1 = pt1;
  }
private:
  PT1* prototypePT1;
};
Client::MakePT1() {
  PT1 pt1 = prototypePT1->Clone();
  pt1->init();
  return pt1;
}
// client code
Client(new PT1);
Client(new NewPT1);
```
