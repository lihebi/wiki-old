---
title: XPath
---

* tag
* `*`: all child elements
* `.`: current node. Used mostly at the beginning of the path to indicate it is a relative path.
* `//`: all subelements
* `..`: parent element
* `[@attr]`: have attribute
* `[@attr='value']`
* `[tag]`: select all elements that have a child named tag
* `[position]`: position can be integer(1 is the first) or `last()` or `last()-1`

predicates(expressions with square brackets) must be preceded by a:

* tag name
* asterisk `*`
* another predicate

position predicate must be preceded by a tag name.

or:

```
//tag1|//tag2/tag22
```
