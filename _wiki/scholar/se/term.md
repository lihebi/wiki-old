---
title: terms
---

* `SUT`: System-Under-Test
* `PDG`: Program Dependence Graph
dependences between statements within a procedure.
* `SDG`: System Dependence Graph
combine PDGs to model inter-procedure dependences
* `SSA`: Static single assignment
an intermediate representation in which every variable is assigned exactly once
* `IR`: Intermediate Representation
* `context sensitive`: consider only paths along witch calls and returns are properly matched.
* `mutation testing`: small syntactical changes are made to random locations in the original program to generate a large number of mutants.
The test suite is then run against each mutant.
Use it because known real faults is not practical to get.
* `signature of function`: its parameter and return types.
But the official C++ definition of "signature" excludes the function's return type.

* `functor`: function-like objects
* `predicate`: a function that returns bool
* `predicate class`: a functor class whose `operator()` function is a predicate.
* `pure function`: a function whose return value depends only on its parameters
