---
title: Builder
---

# class diagram

<script type="text/uml" class="uml">
[Director | Construct()]
[<abstract>Builder | BuildPart()]
[ConcreteBuilder | BuildPart(); GetResult()]

[ConcreteBuilder]-->[Product]
[Director]o->[Builder]
[Builder]<:-[ConcreteBuilder]
[Director]--[<note>for all objects in structure {builder->BuildPart();}]
</script>

# sequence diagram
```
Client                    Director               ConcreteBuilder

new ConcreteBuilder
-------------------------------------------------------->
new Director(concreteBuilder)
---------------------------->
Construct()
---------------------------->
                                BuildPartA()
                                ------------------------>
                                BuildPartB()
                                ------------------------>
                                BuildPartC()
                                ------------------------>
GetResult()
-------------------------------------------------------->
```

Step-By-Step

# implementation
```c++
Director::Create() {
  builder.BuildPartA();
  builder.BuildPartB();
  builder.BuildPartC();
};
// client knows which concreteBuilder to use,
// so it knows which the product is
ConcreteBuilder builder;
director = Director(builder);
director.Create();
builder.GetResult();
```
