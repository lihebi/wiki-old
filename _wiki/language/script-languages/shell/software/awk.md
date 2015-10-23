---
title: awk
---

```sh
awk '{print $2,$1}'
```

pattern {action}

A missing { action } means print the line; a missing pattern always matches.
Pattern-action statements are separated by newlines or semicolons.

# patterns
Patterns are arbitrary Boolean combinations (with ! || &&) of regular expressions and relational  expressions.

A pattern may consist of two patterns separated by a comma;
in this case, the action is performed for
all lines from an occurrence of the first pattern though an occurrence of the second.

special patterns: `BEGIN`, `END`. Cannot combine with other patterns.

# actions
An action is a sequence of statements.
Statements  are  terminated  by  semicolons,  newlines or right braces.
Statement can be:

```
if( expression ) statement [ else statement ]
while( expression ) statement
for( expression ; expression ; expression ) statement
for( var in array ) statement
do statement while( expression )
break
continue
{ [ statement ... ] }
expression              # commonly var = expression
print [ expression-list ] [ > expression ]
printf format [ , expression-list ] [ > expression ]
return [ expression ]
next                    # skip remaining patterns on this input line
nextfile                # skip rest of this file, open next, start at top
delete array[ expression ]# delete an array element
delete array            # delete all elements of array
exit [ expression ]     # exit immediately; status is expression
```

## functions
* print(arg...): print its args, separated by current separator
* printf
* close
* fflush
* math: exp, log, sqrt, sin, cos, and atan2
* length
* rand
* srand
* int
* substr
* index
* match
* split
* sub
* gsub
* sprintf
* system
* tolower
* toupper

# variables
* FS: regular expression used to separate fields
