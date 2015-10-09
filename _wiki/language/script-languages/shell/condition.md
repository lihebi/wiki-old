---
title: conditional expression
---

* `-f file`: file exists and is regular file
* `-d file`: file exists and is directory
* `-e file`: file exists
* `-s file`: file exists and size > 0
* `-z string`: string is empty
* `-n string`: string is not empty
* `arg1 -eq arg2`: -eq, -ne, -lt, -le, -gt, -ge

# 条件测试

```sh
test <exp>
[ <exp> ]
[[ <exp> ]]
```

## About [] [[]]
`[` is a synonym for test, and a builtin for efficiency. It is a command.
`[[` is a keyword, perform comparisons in a manner more familiar to programmers.

# 文件测试

* `-e <file>` 存在
* `-a <file>` 更好的存在.(有时候-e会出错)
* `-f <file>` 普通文件?
* `-d <file>` 目录?
* `-L <file>` 符号链接?
* `-s <file>` 非空?(size!=0)
* `-r <file>` 可读?
* `-w <file>` 可写?
* `-x <file>` 可执行?
* `<file1> -nt <file2>` newer than?
* `<file1> -ot <file2>` older than?

## 字符串测试

* `-z <string>` 空?
* `-n <string>` 非空?
* `string1` == `string2` 相等? 也可直接用=
* `string1` != `string2`

## 整数

[]

* `-eq`
* `-ne`
* `-gt`
* `-ge`
* `-lt`
* `-le`

(())

* ==
* !=
* >
* >=
* <
* <=

## 逻辑

[]

* -a
* -o
* !

[[]]

* &&
* ||
* !
