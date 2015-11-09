---
title: capture
---

Capture workflow:

1. doing some other work
2. come an idea!
3. open capture & choose template & write down idea
4. `C-c C-c`
5. Done

By `C-c C-c`, the note goes into your default notes.org file.

# config
Need config to set the default notes file.
Note that the template will also set the file, on per template basis.
The `org-capture` keybinding is not set by default.

```lisp
(setq org-default-notes-file (concat org-directory "/notes.org"))
(global-set-key (kbd "C-c n") 'org-capture)
```

# command
| shortcut | command              | description            |
|----------+----------------------+------------------------|
| C-c n    | org-capture          | start capture          |
| C-c C-c  | org-capture-finalize |                        |
| C-c C-w  | org-capture-refile   | this is general refile |
| C-c C-k  | org-capture-kill     | abort                  |

# templates
This is the example:

```lisp
(setq org-capture-templates
      '(("t" "TODO" entry (file+headline (concat org-directory "/scratch.org") "Tasks")
         "* TODO %?\n  %U")
        ("n" "Note" entry (file (concat org-directory "/scratch.org"))
         "* Notes on %U\n%?" :prepend t)
         ))
         ```

Components:

* keys: `t`
* description: `TODO`
* type:
  - entry
  - item
  - checkitem
  - table-line
  - plain
* target: 放什么位置
  - `(file "path/to/file")`
  - `(id "id of existing org entry")`
  - `(file+headline "path/to/file" "node headline")`
  - `(file+datetree "path/to/file")`: create a heading in a date tree for today's date
* template
  - a string with escape codes
* properties
  - `:prepend`
  - `:immediate-finish`
  - `:empty-lines`
* expansion
  - `%t`: timestamp
  - `%T`: timestamp, with date and time
  - `%u`: inactive timestamp
  - `%U`: inactive timestamp, with date and time
  - `%i`: the active region when making the capture
  - `%a`: link in `org-store-link`
  - `%?`: cursor position
  

# archive
It is important to archive the done list to clean up.

| shortcut    | command                     | description               |
|-------------+-----------------------------+---------------------------|
| C-c C-x C-a | org-archive-subtree-default | archive the current entry |
| C-c C-x C-s | org-archive-subtree         | archive the subtree(TODO) |
| C-c $       | org-archive-subtree         |                           |

The default archive location is a file in the same directory as the current file,
with the name derived by appending `_archive` to its name.

To choose the archive file name on a in-buffer basis:

```
#+ARCHIVE: %s_done::
```
