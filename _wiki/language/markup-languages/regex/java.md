---
title: java-regex
---

```java
Pattern p = Pattern.compile("a*b");
Matcher m = p.matcher("aaaaab");
boolean b = m.matches();
m.group(3); // => String
```
