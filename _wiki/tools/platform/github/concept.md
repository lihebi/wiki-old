---
title: Concepts
---

* 工作区(working directory): 你当前看到的目录
* 暂存区(staging area): git add 后,将会放到此处,commit会放到版本库.
* 版本库(git directory): `.git`文件夹中的内容

status cycling:

* `git diff`: see what is changed but not staged
* `git diff --cached`: see what is staged that will go into next commit
* `git rm a.txt`: remove it from tracked files **AND** remove the file in current dir
* `git rm --cached a.txt`: remove it from tracked files only. Keep it in current dir
