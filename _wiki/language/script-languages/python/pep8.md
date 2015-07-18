---
title: PEP 8 Style Guide
---

Indention
=========

* continuous line should indent 4 more spaces
* In a file, function and class should be separated by 2 lines
* In a class, functions should be separated by 1 line
* 1 space before and after variable assignment

Naming
======

* function, variable, attributes: `lowercase_underscore`
* protected instance attributes: `_leading_underscore`
* private instance attributes: `__double_leading_underscore`
* class and exception: `CamelCase`
* module-level constants: `ALL_CAPS`
* instance methods in class should use `self` as first parameter. Refer to the object.
* class method should use `cls` as the first parameter, refer to the class

Expression
==========

* `if a is not b` instead of `if not a is b`
* `if not somelist` instead of `if len(somelist) == 0`
* `if somelist` instead of `if len(somelist) > 0`
* always use absolute path for import
* if must use relative path, use explicit `from . import foo` instead of `import foo`
* always put import at the top. Order: standard lib, 3rd party, your own. With alphabet order.

Tool
====
* pylint
