---
title: .gitignore
---

```
# a comment
*.a
!lib.a
/TODO # root TODO file, not sub/TODO file
build/ # all files in build dir
doc/*.txt # all txt file in doc dir. not doc/sub/a.txt
doc/**/*.txt # all txt file in doc dir recursively.
```
