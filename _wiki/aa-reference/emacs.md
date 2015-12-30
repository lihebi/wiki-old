---
title: emacs
---

This is what I all need about emacs.
It is a list of commands useful. It serves as a extremely tight reference.

text transformation

| Command           | Description |
|-------------------+-------------|
| replace-rectangle |             |
| upcase-word       |             |
| downcase-word     |             |
| transpose-words   |             |
| transpose-lines   |             |

marking

| command                | description                                                                            |
|------------------------+----------------------------------------------------------------------------------------|
| exhange-point-and-mark |                                                                                        |
| mark-word              |                                                                                        |
| mark-sexp              |                                                                                        |
| mark-paragraph         |                                                                                        |
| mark-defun             |                                                                                        |
| mark-page              |                                                                                        |
| mark-whole-buffer      |                                                                                        |
| point-to-register      | save ppposition in a register                                                            |
| jump-to-register       |                                                                                        |
| set-mark-command       | C-SPC, set mark, and activate it                                                       |
| C-SPC C-SPC            | set mark, but not activate it.                                                         |
| C-u C-SPC              | pop to previous mark in mark ring. current is stored at the end of mark ring(rotating) |
| pop-global-mark        | will store both position and buffer                                                    |


window manage

| command        | description |
|----------------+-------------|
| balance-window |             |

navigating

| command           | desc                                                                         |
|-------------------+------------------------------------------------------------------------------|
| forward-sexp      |                                                                              |
| backward-sexp     |                                                                              |


register

| command          | desc                          |
|------------------+-------------------------------|
| jump-to-register | the register can store a file |

killing

| command        | desc |
|----------------+------|
| zap-to-char    |      |
| zap-up-to-char |      |

dired

| Command           | Description |
|-------------------+-------------|
| dired-next-subdir |             |
| dired-prev-subdir |             |
| dired-tree-up     |             |
| dired-tree-down   |             |

