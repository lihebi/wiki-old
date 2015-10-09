---
title: function
---

```sh
name() compound-command [ redirections ]
```

```sh
function name [()] compound-command [ redirections ]
```

* compound commands are often `{ list; }`
* if `function` keyword is present, `()` can be omitted.
* function definition may be deleted by `unset -f`
* arguments to function become the positional parameters
