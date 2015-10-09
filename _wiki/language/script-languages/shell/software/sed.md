---
title: sed
---

```sh
# -i: make change to the original file
# /d: delete the line if match
sed -i '/@slice/d' $ClassName.java
sed -i 'g/@slice/d' xx.java # remove all
```
