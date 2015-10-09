---
title: expansion
---

* `xxx` <=> `$(xxx)`

# brace expansion

```sh
echo a{d,b,c}e
# => ade abe ace
mkdir /usr/local/{old,new,dist}
```

# tilde expansion

```sh
~/foo # $HOME/foo
~hebi/foo # home of user hebi
```

# variable expansion
return value:

* `${var:-word}`: if var is unset or null, the value is expansion of word
* `${var:=word}`: if var is unset or null, the expansion of word is assigned to var
* `${var:?word}`: if var is unset or null, the expansion of word is written to stderr, shell exits.
Otherwise the value of var is returned.
* `${var:+word}`: if var is unset or null, nothing returned. Otherwise expansion of word is returned.


# 变量替换

**返回结果，但不改变原变量的值。**

```sh
# 若var未被声明，则以DEFAULT为其值
${var-DEFAULT}
${var=DEFAULT}
# 若
# 1. var 未被声明 或
# 2. 其值为空
# 则以DEFAULT为其值
${var:-DEFAULT}
${var:=DEFAULT}
```

string:

* `${str:offset}`: substr(offet)
* `${str:offset:length}`: substr(offset, count)
* `${#var}`: return length in character of the expansion of var
* `${str#word}`: pattern is the expansion of word.
If the pattern matches the beginning of str,
return the str with the **shortest** match of pattern in str deleted.
* `${str##word}`: the same as above, the **longest** match is deleted
* `${str%word}`: The tailing of str
* `${str%%word}`: longest
* `${str/pattern/string}`: longest match os pattern is replaced with string
if pattern begins with
  - `/`: all matched is replaced
  - `#`: match must happen in the begin
  - `%`: match must happen in the tail
* `${str^pattern}`: the match is converted from lower case to uppercase
* `${str^^pattern}`: all match
* `${str,pattern}`: upper to lower
* `${str,,pattern}`: all match

# filename expansion
* `*`: match any string, including null string
* `?`: match any single character
* `[...]`:
  - `[a-dx-z]`
  - `[!a-d]`
  - `[^a-d]`
  - `[[:digit:][:alnum:]]`

# 字符串

substring使用的是bash中的正则。

* `${#string}` $string的长度
* `${string:5}` $string 从5位置开始的子串
* `${string:5:3}` 5位置开始，提取3个。
* `${string#substring}` 从*开头*删除substring的*最短*匹配
* `${string##substring}` 从*开头*删除substring的*最长*匹配
* `${string%substring}` 从*结尾*删除substring的*最短*匹配
* `${string%%substring}` 从*结尾*删除substring的*最长*匹配

* `${string/substring/replace}` 第一个匹配的substring替换为replace
* `${string/#substring/replace}` 开头是substring,则换为replace
* `${string/%substring/replace}` 结尾时substring,则换为replace

substring若不加引号,则为正常字符串,加引号则可用$转义.

# 数值计算

```sh
(( a=2+3 ))
a = $(( 2+3 ))

a = ((12))
echo $((a++)) # => 12
echo $((++a)) # => 14

echo ((5>3)) # => 1
```
