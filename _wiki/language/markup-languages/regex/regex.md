---
title: regex
---

# Some Articles

https://swtch.com/~rsc/regexp/

## 符号表

| 符号         | 含义                          |
|:-------------|:------------------------------|
| .            | 除了换行符以外的任何字符      |
| \b           | 单词的开始或结束              |
| \d           | 一位数字                      |
| \s           | 任意空白字符(' ', \t, \ n 等) |
| \w           | 字母,数字,下划线,汉字 等      |
| x{8}         | x 要重复8次                   |
| x{5,8}       | x 的重复次数>=5,<=12          |
| x{5,}        | 重复5+                        |
| *            | 重复0 或1 次                  |
| +            | 重复1+次                      |
| ?            | 重复0或1次                    |
| ^            | 字符串开始                    |
| $            | 字符串结束                    |
| [aeiou?,0-9] | 匹配这个里面的任何一个        |
| [^aeiou]     | 除了aeiou 以外的任何字符      |
| \B,\D,\S,\W  | 与小写字母相反                |
| [a-zA-Z0-9]  |                               |

## Lookahead

* Positive look ahead: `(?=ABC)`. e.g. `hello(?=ABC)`
* Negative look ahead: `(?!ABC)`: e.g. `hello(?!ABC)`
* Positive look behind: `(?<=ABC)`: e.g. `(?<=ABC)hello`
* Negative look behind: `(?<!ABC)`: e.g. `(?<!ABC)hello`

## Capturing Group

* `(ABC)`
* `(ABC)abc\1` Backreference. `\1` matches the result of the first capturing group
* `(?:ABC)` non-capturing group
* `$1` insert the first captured group

## Identifier

`p = /xxx/[gim]`

| 标识 | 含义                          |
|:-----|:------------------------------|
| g    | 全局的（匹配多次）            |
| i    | 大小写不敏感                  |
| m    | 多行，`^` `$`可以匹配行结束符 |
