---
title: Operation
---

Search inline
=============

* `fx`: search `x` in current line
* `Fx`: search `x` in reverse direction
* `tx`: `fx`会把光标停留在`x`上，`tx`会停留在`x`前面一个字符上。
* `Tx`: 停留在`x`后面一个字符上。

Multi line comment
==================

Nerd comment

* `<leader>cc` add comment
* `<leader>c<space>` toggle comment
* `<leader>cu` uncomment

Another method

`ctrl-v` to enter `visual block` mode.
Select lines, then `I`, then insert, then `Esc`.

Movement
========

* `Ctrl-]` 进入函数
* `Ctrl-t` 返回
* `g[` 直接出所有ref的列表
* `Ctrl-]` 后: `:tn` 下一个匹配的tag `:tp` 上一个 `:ts` 列表

* `Ctrl-d` 下移半屏
* `Ctrl-u` 上移半屏
* `Ctrl-f` 下移一屏
* `Ctrl-b` 上移一屏

* `zz` 当前行放到中央
* `zt` 当前行放到顶部
* `zb` 当前行放到底部

* `H` 光标置于当前屏幕顶部
* `L` 光标置于当前屏幕底部

* `%` 跳至匹配的括号
* `gd` 跳至局部变量或函数名

* `<C-e>`: move screen down
* `<C-y>`: move screen up

录制功能
=======

正常模式下,按`qq...q`进行录制.意思是将`...`录制到`q`里.

使用方法:
`@q` `5@q`

单词统计
=======

g Ctrl-g

Indent
======

拼写模式下,按`z=`显示提示

选中模式下,按`=`缩进文本

自动补全
=======

* `Ctrl-p` 上一个
* `Ctrl-n` 下一个

文件操作
=======

* `:f <file>` 当前文件改名为file
* `:w <file>` 当前文件内容写入file
* `r <file>` file的内容写到当前光标
* `r !<cmd>` cmd的运行结果写到当前光标

mark
====

正常模式下,`ma`添加mark`a`

`a 可以跳转到 mark a

`:marks` 显示所有mark

特殊mark: ` 跳转前光标位置
