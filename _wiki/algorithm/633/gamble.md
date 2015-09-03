---
title: gamble
---

# Randomness

# Formal definition
A finite state gambler(FSG) is an ordered tuple:

`$G=(Q,\sigma,\delta,s,\beta)$`

where

* `$Q$` is a finite set of state
* `$\sigma$` is a finite input alphabet
* `$\delta$`: transition function
* `$s \in Q$`: the start state
* `$\beta$` betting function

Notation:

for a finite set `$\sigma$`, let

`$\bigtriangleup(\sigma) = \{probability measures on \sigma\} = \{p:\sigma \to [0,1] | \sum_{a\in \sigma} p(a) = 1\}$`

`$\bigtriangleup(\sigma) = \{rational prob measures on \sigma\} = \{p:\sigma \rightarrow Qn[0,1] | \sum_{a\in \sigma} p(a) = 1$`
