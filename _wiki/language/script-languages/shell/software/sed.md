---
title: sed
---
# Concepts
* input
* output
* pattern space
* hold space:
This is a spare pattern space, used to remember the data in pattern buffer

# workflow
* copy a line from input(exclude the tailing newline) into pattern buffer
* apply command(s) to it
* output

# cmd arguments
* -n: by default each line of input is echoed to the standard output after all of the commands have been applied to it. The -n option suppresses this behavior
* -e: sed -e 'xxx' -e 'xxx' -e 'xxx'
* -f: script file

# to use in a script
```sh
#!/bin/sed -f
#!/bin/sed -nf
```

# range
sed will only apply command for the lines in the specified range
If the command is preceded with `!`, that means the command works on lines not in the range.

```sh
sed '1,100 s/A/a/' # by line number
sed '101,$ s/A/a/' # $ is last line
sed '/start/,/stop/ s/#.*//' # by pattern
```


# commands

## edit
* a(add): add a line after the pattern space
* i(insert): insert a line before the pattern space
* c(change): change the current line with the new line
* d(delete)

```sh
# -i: make change to the original file
# /d: delete the line if match
sed -i '/@slice/d' $ClassName.java
sed -i 'g/@slice/d' xx.java # remove all
sed '/^$/d' # remove all empty lines
sed '11,$ d' # only output first 10 lines
sed '1,/^$/ d' # delete everything up to the first blank line.
```

* s(substitute): s/pattern/string/

```sh
s/pattern/&/ # '&' stands for the total match
# in extend mode(-E), can use \1 \2
s/(a)b/\1/
s//string/ # use the last run-time used pattern
s/xxx/xxx/g # substitute globally: all
# there will not be recursion. sed will not examine the generated string
s/loop/loop loop/g # will NOT run forever
s/xxx/xxx/2 # only substitute the second match
s/xxx/xxx/g2 # substitute 2,3,4,...
s/xxx/xxx/p # will print out even if -n is used
s/xxx/xxx/I p # ignore case; command can be used together
s/a/A/2pw /tmp/file # combine more
```


## output
* =: print out the line number to stdout


```sh
# add line numbers first,
# then use grep,
# then just print the number
cat -n file | grep 'PATTERN' | awk '{print $1}'
# the equilvalence
sed -n '/PATTERN/ =' file
```

* l(look): print the pattern space in an unambiguous form.
Non-printing characters are printed in a C-style escaped format.
* p(print)
* n(next): will print out the current pattern space
(unless the "-n" flag is used),
empty the current pattern space,
and read in the next line of input.
* r(read): Copy the contents of file to the standard output
immediately before the next attempt to read a line of input.
* w(write): append pattern to file


## flow control
* q(quit)
* b(branch): branch to the label. If no label, go to the end of script
* t(test): The command `t label` will branch to the label if the last substitute command modified the pattern space.

* : label


## commands with hold space
* x(exchange): exchange pattern space and hold space
* h(hold): copy pattern space into hold space
* g(get):

## multiple lines
* p & P
* n & N
* d & D

## Block
* {...}(block): each command in its own line.
The first curly brace can be in the same line as the first command,
but the last curly brace must be in a new line.
