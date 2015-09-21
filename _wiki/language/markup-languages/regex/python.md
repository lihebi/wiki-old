---
title: python-regex
---


```py
import re

pattern = re.compile('\d+.*$')
type(pattern) # _sre.SRE_Pattern
s = 'this is a test string'
pattern.match(s)    //return True or False
pattern.findall(s)

m = re.match("[pattern]", "string")
#match 需要全匹配。 若不匹配，返回None
type(m) # _sre.SRE_Match
type(m.re) # _sre.SRE_Match
m.group() # 匹配的字符串

m = re.search("[pattern]", "string")
# search只要有就行
# if can't find anything, m will simply be None.
type(m) # _sre.SRE_Match
m.group()

re.search("pattern", "string", re.IGNORECASE)

m = re.findall("[pattern]", "string")
type(m) # list, a list of string that match
```
