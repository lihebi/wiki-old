---
title: return status
---

* simple command: provided by POSIX 1003.1 `waitpid` function(less than 128)
* if command terminated by signal `n`, it is `128+n`
* all builtin returns 2 indicating incorrect usage
