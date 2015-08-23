---
title: Operator Precedence
---

| Precedence | Operator             | Description                                       | Associativity |
|:-----------|:---------------------|:--------------------------------------------------|:--------------|
| 0          | **::**               | scope resolution                                  | L to R        |
| 1          | ++ --                | Suffix increment and decrement                    |               |
|            | ()                   | Function call                                     |               |
|            | []                   | Array subscripting                                |               |
|            | .                    | Structure and union member access                 |               |
|            | ->                   | Structure and union member access through pointer |               |
|            | (type){list}         | Compound literal(C99)                             |               |
| 2          | ++ --                | Prefix increment and decrement                    | R to L        |
|            | + -                  | Unary plus and minus                              |               |
|            | ! ~                  | Logical NOT and bitwise NOT                       |               |
|            | (type)               | Type cast                                         |               |
|            | *                    | dereference                                       |               |
|            | &                    | Address-of                                        |               |
|            | sizeof               |                                                   |               |
|            | _Alignof             | Alignment requirement(C11)                        |               |
|            | **new, new[]**       | Dynamic memory allocation                         |               |
|            | **delete, delete[]** | Dynamic memory deallocation                       |               |
| 3          | * / %                |                                                   | L to R        |
| 4          | + -                  | Addition and subtraction                          |               |
| 5          | << >>                | Bitwise left shift and right shift                |               |
| 6          | < <=                 | Compare                                           |               |
|            | > >=                 |                                                   |               |
| 7          | == !=                |                                                   |               |
| 8          | &                    | Bitwise AND                                       |               |
| 9          | ^                    | Bitwise XOR (exclusive or)                        |               |
| 10         | l                    | Bitwise OR (inclusive or)                         |               |
| 11         | &&                   | Logical AND                                       |               |
| 12         | ll                   | Logical OR                                        |               |
| 13         | ?:                   | Ternary conditional                               | R to L        |
| 14         | **throw**            |                                                   |               |
|            | =                    |                                                   |               |
|            | += -=                |                                                   |               |
|            | *= /= %=             |                                                   |               |
|            | <<= >>=              | Assignment by bitwise left shift and right shift  |               |
|            | &= ^= l=             | Assignment by bitwise AND, XOR, and OR            |               |
| 15         | ,                    | Comma                                             | L to R        |

* For `?:`,
the middle of the conditional operator (between ? and :)
is parsed as if parenthesized: its precedence relative to `?:` is ignored
* For C++,
The operand of sizeof can't be a C-style type cast:
the expression `sizeof (int) * p` is unambiguously interpreted as `(sizeof(int)) * p`,
but not `sizeof((int)*p)`.
* In c++ table, the `?:` is also in 14 cell.
