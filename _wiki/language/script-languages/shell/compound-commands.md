---
title: compound commands
---


Any redirections apply to all commands within that compound, unless explicitly overwritten.

# loop
wherever a ';' appears, it may be replaced with one or more newlines.

```sh
until test-commands; do consequent-commands; done
while test-commands; do consequent-commands; done
# if in words is not presented, it is as if `in $@` is there
for name [ [in [words ...] ] ; ] do commands; done
# if any expr is omit, it is like 1
for (( expr1 ; expr2 ; expr3 )) ; do commands; done
break
continue
```

# if
```sh
if test-commands; then
  consequent-commands;
[elif more-test-commands; then
  consequent-commands;
[else alternative-consequents;]
fi
```

# case

```sh
case word in
  pattern1 | pattern2) command-list ;;
  pattern) command-list ;& # continue with the next clause
  pattern) command-list ;;& # continue to test patterns in next clause
  pattern) command-list ;;
  *) default-cmd;;
esac
```

# select
```sh
select name [in words ...]; do commands; done
```

* if `in words` is omitted, it is `in "$@"`.
* PS3 will be the prompt for the selection
* selection should be a number
* anything else will cause the name to be set to null
* the line read is saved in variable `REPLY`

# (())
```sh
(( exp ))
```

arithmetic expression is evaluated

# [[]]
```sh
[[ exp ]]
```

evaluation of conditional expression
