---
title: table
---

# creation

! is |

| shortcut  | command                                   | description              |
|-----------+-------------------------------------------+--------------------------|
| `C-c !`   | `org-table-create-or-convert-from-region` | can parse csv,tab,spc    |
| `C-c C-c` | `org-table-align`                         |                          |
| `M-a`     | `org-table-beginning-of-field`            |                          |
| `M-e`     | `org-table-end-of-field`                  |                          |

# modify
| shortcut  | command                     | description                                                             |
|-----------+-----------------------------+-------------------------------------------------------------------------|
| M-left    | org-table-move-column-left  | move current column left                                                |
| M-right   | org-table-move-column-right |                                                                         |
| M-S-left  | org-table-delete-column     |                                                                         |
| M-S-right | org-table-insert-column     |                                                                         |
| M-up      | org-table-move-row-up       |                                                                         |
| M-down    | org-table-move-row-down     |                                                                         |
| M-S-up    | org-table-kill-row          |                                                                         |
| M-S-down  | org-table-insert-row        |                                                                         |
| C-c -     | org-table-insert-hline      | insert a hline below current row                                        |
| C-c RET   | org-table-hline-and-move    | insert a hline below current row, and move point to the row under hline |
| C-c ^     | org-table-sort-lines        |                                                                         |

# calculate
| shortcut | command       | description                                                      |
|----------+---------------+------------------------------------------------------------------|
| C-c +    | org-table-sum | sum the current column, or active region. Echo, and able to yank |

## Formula
* `C-c ?` in a field to know the cordinates of that field
* `C-c }` toggle display of grid

* `@row$column`
* `@+2`: relative to current row
* `@I`: first hline
* `@II`: second hline
* `@-I`: first hline above current line

examples:

* `@2$3`: row 2 column 3
* `$5`: column 5
* `$1..$3`: first 3 fields in current row
* add `#+TBLFM: $2=$1*2` right after a table. Use `C-c C-c` to evaluate. The data will be populated into the table.


# misc
##column fields alignment
Put `<10>` in any field, it will restrict the column to at most 10 characters.
It will fold. To edit the folded fields, `C-c <reverse-quote>`: `org-table-edit-field`

On startup, we need to align it to make it look nice. On a file basis:

```
#+STARTUP: align
#+STARTUP: noalign
```

## orgtbl minor mode
```lisp
(add-hook 'message-mode-hook 'turn-on-orgtbl)
```
