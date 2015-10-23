---
title: coreutils
---

# tr: translate characters

tr <string1> <string2>

the characters in string1 are translated into the characters in string2
where the first character in string1 is translated into the first character in string2 and so on.  If string1 is longer than string2,
the last character found in string2 is duplicated until string1 is exhausted.

characters in the string can be:

any characters will represent itself if not:

* `\\octal`: A backslash followed by 1, 2 or 3 octal digits
* `\n`, `\t`
* `a-z`: inclusive, ascending
* `[:class:]`: space, upper, lower, alnum
  - if `[:upper:]` and `[:lower:]` appears in the same relative position, they will correlate.

# uniq: report or filter out repeated lines in a file
Repeated lines in the input will not be detected if they are not adjacent,
so it may be necessary to sort the files first.

* `uniq -c`: Precede each output line with the count of the number of times the line occurred in the input, followed by a single space.
* `-u`: Only output lines that are not repeated in the input.
* `-i`: Case insensitive comparison of lines.

# sort
* `-n`: compare according to string numerical value
* `-r`: reverse
