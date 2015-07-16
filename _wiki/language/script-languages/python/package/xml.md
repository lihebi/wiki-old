---
title: XML
---

Example
=======

```py
import xml.etree.ElementTree as ET
root = ET.fromstring(s)
# XPath
nodes = root.findall('{http://www.sdml.info/srcML/src}function')
for node in nodes:
  # do with node
```

Element API
===========

* node.find(XPath)
* node.findall(XPath)
* node.get(Attribute)
* node.text
