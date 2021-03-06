---
title: Java
---

# Java入门

## 一切都是对象

`String s;`
这里建立的不是对象，而是引用。这时向s发送消息会产生运行时错误。正确的做法是，创建一个引用的同时进行初始化：
`String s=‘asdf’;`
这是Java的一个特性：可以使用带引号的文本初始化字符串。有更一般的初始化方法，即`new`
`String s = new String(‘asdf’);`

# 基本类型

Java中的基本类型大小是固定的。全部都有正负，不存在`unsigned`。

｜ 基本类型 | 大小 | 包装器类型 |
| :---: | :---: | :---: |
| char | 16bit | Character |
| byte | 8bit | Byte |
| int | 32bit | Integer |
| short | 16bit | Short |
| long | 64bit | Long |
| float | 32bit | Float |
| double | 64bit | Double |

Static Import
-------------

Static import is a feature
that allows fields and methods defined in a class as public static
to be used in Java code
without specifying the class in which the field is defined.

Nested class
============

Class can be defined inside another.
Non-static nested class is called `Inner class`.

Difference between static nested class and non-static nested class:

1. 要用的话，static的不需要提outer class，但是用non-static必须使用outer的namespace
2. non-static可以访问outer class的static和非static的member，但是static的只能访问static的member。
3. non-static的类不能独立创建，必须要有outer class的instance
