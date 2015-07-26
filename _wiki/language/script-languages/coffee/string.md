---
title: String
---


```coffee
"Filling the #{container} with #{liquid}..."
```

```js
"Filling the " + container + " with " + liquid + "..."
```

multiline is allowed. lines are joined with a space.
If `\` at the end, no space added.

multiline regex: can have comments!

```coffee
OPERATOR = /// ^ (
  ?: [-=]>             # function
   | [-+*/%<>&|^!?=]=  # compound assign / compare
   | >>>=?             # zero-fill right shift
   | ([-+:])\1         # doubles
   | ([&|<>])\2=?      # logic / shift
   | \?\.              # soak access
   | \.{2,3}           # range or splat
) ///
```

=>

```js
OPERATOR = /^(?:[-=]>|[-+*\/%<>&|^!?=]=|>>>=?|([-+:])\1|([&|<>])\2=?|\?\.|\.{2,3})/;
```
