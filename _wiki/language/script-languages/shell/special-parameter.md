---
title: special parameters
---

* `$*`: "$1c$2c$3c...", c is the first character of $IFS
* `$@`: "$1" "$2" "$3" ...
* `$#`: the number of positional parameters
* `$?`: exit status
* `$-`: current option flags
* `$$`: process ID of the shell
* `$!`: process ID of the job most recently placed into the background
* `$0`:
* `$n`

## 特殊变量

```sh
$0 # 脚本名称
$<n> # 第n个参数
$# # 参数数量
$* # 所有参数，作为一个字符串
$@ # 所有参数，作为字符串数组
```

```sh
# example
./a.sh hello world
"$0" => ./a.sh
"$1" => hello
"$2" => world
"$#" => 2
"$*" => "./a.sh hello world"
"$@" => [ "./a.sh" "hello" "world" ]
```

```sh
$$ # 当前进程的PID
$? # 上一个命令的返回值
$! # 运行在后台的最后一个进程的PID。done了也算。
$_ # 上个命令的最后一个字段
```
