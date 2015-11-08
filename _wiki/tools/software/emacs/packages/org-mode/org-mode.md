---
title: org mode
---

# cycling
* `TAB`: `org-cycle`: subtree cycling: folded->children->subtree
* `S-TAB`: `org-global-cycling`, `org-shifttab`: global cycling: overview->contents->show all
* `C-u TAB`: same as `S-TAB`
* `C-u C-u C-u TAB`: `show-all`: show all, including drawers

On startup, org mode default to show only overview, i.e. the first level heading.
It can be changed on per file basis:

```
#+STARTUP: overview
#+STARTUP: content
#+STARTUP: showall
#+STARTUP: showeverything
```

# structure editing

| shortcut  | command                   | description                                              |
|-----------+---------------------------+----------------------------------------------------------|
| `M-RET`   | `org-insert-heading`      | create a new list on the same level                      |
| `M-S-RET` | `org-insert-todo-heading` | insert new list on the same level together with checkbox |

* `M-RET`: `org-meta-return`: create a new list on the same level
* `M-S-RET`: `org-insert-todo-heading`: create a new list on the same level, together with checkbox
* `M-S-up`: `org-shiftmetaup`
* `M-S-down`: `org-shiftmetadown`
* `M-left`: `org-metaleft`: decrease. leave children alone
* `M-right`: `org-metaright`: increase
* `M-S-left`: `org-shiftmetaleft`: decrease together with children
* `M-S-right`: `org-shiftmetaright`

# motion

| shortcut  | command                            | description                  |
|-----------+------------------------------------+------------------------------|
| `C-c C-n` | `outline-next-visible-heading`     | next heading                 |
| `C-c C-p` | `outline-previous-visible-heading` | prev heading                 |
| `C-c C-f` | `org-forward-same-level`           | next heading same level      |
| `C-c C-b` | `org-backward-same-level`          | prev heading same level      |
| `C-c C-u` | `outline-up-heading`               | back to higher level heading |

# sparse tree
Only select part of the tree to present.

* `C-c /`: 后面会询问模式。可以的有:
  - `r`: regex
  - `t`: todo
