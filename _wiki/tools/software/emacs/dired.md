---
title: Dired
---

* `C-x d`: ido-dired
* or use `C-x C-f` then give dir name
* `C-x 4 d`: `dired-other-window`
* `C-x 5 d`: `dired-other-frame`

## move

| shortcut    | command                   | description                                      |
|-------------+---------------------------+--------------------------------------------------|
| `q`         |                           | quit                                             |
| `SPC`       | `C-n`                     |                                                  |
| `n`         | `C-n`                     |                                                  |
| `j`         | `dired-goto-file`         |                                                  |
| `M-s f C-s` | `dired-isearch-filenames` |                                                  |
| `C-s`       | `M-s f C-s`               | need to change `dired-isearch-filenames` to true |

## flags

| shortcut         | command     | description                                                                  |
|------------------+-------------+------------------------------------------------------------------------------|
| `d`              |             | flag for deletion                                                            |
| `u`              |             | remove deletion flag                                                         |
| `DEL`            |             | remove deletion flag, move above                                             |
| `x`              | do deletion |                                                                              |
| `% d regexp RET` |             | Flag for deletion all files whose names match the regular expression regexp. |

## open file

| shortcut | command                        | description                                |
|----------+--------------------------------+--------------------------------------------|
| `f`      | `dired-find-file`              |                                            |
| `e`      | `same`                         |                                            |
| `RET`    | `same`                         |                                            |
| `o`      | `dired-find-file-other-window` |                                            |
| `C-o`    | `dired-display-file`           | open in other window, but do not select it |
| `v`      | `dired-view-file`              | view in view mode                          |


## operate on files
* If you give the command a numeric prefix argument n, it operates on the next n files, starting with the current file.
Can be negative
* Otherwise, if some files are marked with `*`, the command operates on all those files.
* Otherwise, the command operates on the current file only.

| shortcut              | command                | description                                                      |
|-----------------------+------------------------+------------------------------------------------------------------|
| `C new`               | `dired-do-copy`        |                                                                  |
| `D`                   | `dired-do-delete`      |                                                                  |
| `R new`               | `dired-do-rename`      |                                                                  |
| `H new`               | `dired-do-hardlink`    |                                                                  |
| `S new RET`           | `dired-do-symlink`     |                                                                  |
| `M modespec RET`      | `dired-do-chmod`       |                                                                  |
| `G newgroup RET`      | `dired-do-chgrp`       |                                                                  |
| `O newowner RET`      | `dired-do-chown`       |                                                                  |
| `T timestamp RET`     | `dired-do-touch`       | updating their modi- fication times to the present time.         |
| `Z`                   | `dired-do-compress`    | if already a compressed file, uncompress                         |
| `L`                   | `dired-do-load`        | Load the specified Emacs Lisp files                              |
| `A regexp RET`        | `dired-do-search`      | Search all the specified files for the regular expression regexp |
| `Q regexp RET to RET` | `query-replace-regexp` |                                                                  |


## Marks
File can be marked or flaged.
Marked with `*`. Flag is `d`. Only `x` used on `d`, most commands works on `*`.

| shortcut | command                    | description                                                         |
|----------+----------------------------+---------------------------------------------------------------------|
| `m`      | `dired-mark`               | mark with *                                                         |
| `*m`     | `<same>`                   |                                                                     |
| `**`     | `dired-mark-executables`   | Mark all executable files with ‘*’ (modiifed?)                      |
| `*@`     | `dired-mark-symlinks`      |                                                                     |
| `* /`    | `dired-mark-directories`   |                                                                     |
| `* s`    | `dired-mark- subdir-files` | Mark all the files in the current subdirectory, aside from . and .. |
| `u`      | `dired-unmark`             | Remove any mark on this line. Can unmark region                     |
| `*u`     | `<same>`                   |                                                                     |
| `DEL`    | `dired-unmark-backward`    |                                                                     |
| `* DEL`  | `<same>`                   |                                                                     |
| `*!`     | `dired-unmark-all-mark`    | remove all marks from all the files in this Dired buffer            |
| `M-}`    | `dired-next-marked-file`   |                                                                     |
| `M-{`    | `dired-prev-marked-file`   |                                                                     |
| `t`      | `dired-toggle-marks`       |                                                                     |
| `*t`     | `<same>`                   |                                                                     |

## shell
Run on the files, the same convention for file operation.

* `!` to `dired-do-shell-command`
* `X` the same
* `&`: `dired-do-async-shell-command`

?? For both ! and &, the working directory for the shell command is the top-level directory of the Dired bu↵er.

* If you use `*` surrounded by whitespace in the command string,
then the command runs just once, with the list of file names substituted for the `*`.
e.g. ! tar cf foo.tar * RET runs tar on the entire list of file names, putting them into one tar file foo.tar.
* to use `*` as a shell wildcard with whitespace around it, write `*""`, so that `*` is not sourounded by whitespaces.
`?` surrounded by whitespace, Emacs runs the shell command once for each file,
* If the command string contains neither `*` nor `?`, Emacs runs the shell command once for each file, adding the file name at the end.

## transform filename
* from: regex
* to: pattern

In to, we have `\&` as the whole match,
`\digit` as the capture.

| shortcut              | command        | description                                             |
|-----------------------+----------------+---------------------------------------------------------|
| `%u`                  | `dired-upcase` | Rename each of the selected files to an upper-case name |
| `%l`                  |                |                                                         |
| `% R from RET to RET` |                | rename                                                  |
| `% C from RET to RET` |                | copy                                                    |
| `% H from RET to RET` |                | hard link                                               |
| `% S from RET to RET` |                | soft link                                               |

## dirs
| shortcut | command              | description                                              |
|----------+----------------------+----------------------------------------------------------|
| `C-M-n`  | `dired-next-subdir`  | Go to next subdirectory header line, regardless of level |
| `C-M-p`  | `dired-prev-subdir`  |                                                          |
| `C-M-u`  | `dired-tree-up`      | Go up to the parent directory’s header line              |
| `C-M-d`  | `dired-tree-down`    | first subdirectory’s header line                         |
| `<`      | `dired-prev-dirline` |                                                          |
| `>`      | `dired-prev-dirline` |                                                          |
| `g`      | `revert-buffer`      | refresh                                                  |

## other
* `=`: `dired-diff`: compares the current file (the file at point) with another file (read using the minibu↵er) using the diff program
* `+`: `dired-create-directory`
