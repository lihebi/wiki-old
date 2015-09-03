---
title: BNF Bakus-Naur Form
---

* `terminal symbols`: Terminal symbols are literal symbols which may appear in the outputs of the production rules of a formal grammar and which **cannot be changed using the rules of the grammar** (this is the reason for the name "terminal").

```
x -> xa
x -> a
```

a is a terminal because no rule to change a

* `non-terminal`: Nonterminal symbols are those symbols which can be replaced.
* `Context-free grammars` are those grammars in which the left-hand side of each production rule consists of only a single nonterminal symbol

# BNF

A BNF specification is a set of derivation rules, written as

```
<symbol> ::= __expression__
```
* <symbol>[6] is a nonterminal, and the __expression__ consists of one or more sequences of symbols
* more sequences are separated by the vertical bar, '|', indicating a choice
* Symbols that never appear on a left side are terminals.
* symbols that appear on a left side are non-terminals and are always enclosed between the pair <>.
* The '::=' means that the symbol on the left must be replaced with the expression on the right.

example:

```
<expr> ::= <term>|<expr><addop><term>
<integer> ::= <digit>|<integer><digit>
```
