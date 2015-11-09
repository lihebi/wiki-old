---
title: magit
---

* `C-x g`: `magit-status`: show status buffer

The following operations are all in this buffer.

# section movement
| shortcut | command                  | description                                              |
|----------+--------------------------+----------------------------------------------------------|
| `p`      | `magit-section-backward` | move to the beginning of section                         |
| `n`      | `magit-section-fowward`  |                                                          |
| `^`      | `magit-section-up`       |                                                          |
| `TAB`    | `magit-section-toggle`   | visibility                                               |
| `C-TAB`  |                          | cycle the visibility of current section and its children |

# running git
| shortcut | command                    | description                                                |
|----------+----------------------------+------------------------------------------------------------|
| `$`      | magit-process              | display process buffer for current repo                    |
| `k`      | magit-process-kill         | kill the process presented by the section at point         |
| !        | magit-run-popup            | <prefix>. Following assume "git"                           |
| !!       | magit-git-command-topdir   | read a git subcommand and execute in top-level dir in repo |
| !p       | magit-git-command          | "default-directory" TODO                                   |
| !s       | magit-shell-command-topdir | shell cmd                                                  |
| !S       | magit-shell-command        |                                                            |

# main command table
| shortcut | command                   | description                               |
|----------+---------------------------+-------------------------------------------|
| g        | magit-refresh             | refresh current buffer explicitly         |
| G        | magit-refresh-all         | refresh all buffers in current repo       |
|----------+---------------------------+-------------------------------------------|
| ll       | magit-log-current         | show log for current branch               |
| lo       | magit-log                 |                                           |
|----------+---------------------------+-------------------------------------------|
| dd       | magit-diff-dwim           | changes for the thing at point            |
| dr       | magit-diff                | changes between two commits               |
| ds       | magit-diff-staged         |                                           |
| du       | magit-diff-unstaged       |                                           |
| dc       | magit-show-commit         | show the commit at point                  |
|          | magit-diff-unpulled       |                                           |
| D        | magit-diff-refresh-popup  |                                           |
| Dg       | magit-diff-refresh        |                                           |
|----------+---------------------------+-------------------------------------------|
|          | magit-init                |                                           |
|          | magit-clone               |                                           |
|----------+---------------------------+-------------------------------------------|
| s        | magit-stage               | can select region files stage             |
| S        | magit-stage-modified      |                                           |
| u        | magit-unstage             |                                           |
| U        | magit-unstage-all         |                                           |
| a        | magit-apply               | apply the change at point to working tree |
| k        | magit-discard             |                                           |
| v        | magit-reverse             |                                           |
|----------+---------------------------+-------------------------------------------|
| c        | magit-commit-popup        |                                           |
| cc       | magit-commit              |                                           |
| ca       | magit-commit-amend        |                                           |
| ce       | magit-commit-extend       |                                           |
| C-c C-c  | with-editor-finish        |                                           |
| C-c C-k  | with-editor-cancel        |                                           |
|----------+---------------------------+-------------------------------------------|
| b        | magit-branch-popup        |                                           |
| bb       | magit-checkout            | checkout a revision                       |
| bc       | magit-branch              | create a new branch                       |
| bB       | magit-branch-and-checkout | create a new branch, and check it out     |
| bd       | magit-branch-delete       |                                           |
| bu       | magit-branch-set-upstream |                                           |
| br       | magit-branch-rename       |                                           |
|----------+---------------------------+-------------------------------------------|
| mm       | magit-merge               |                                           |
| ma       | magit-merge-abort         |                                           |
|----------+---------------------------+-------------------------------------------|
| x        | magit-reset               | C-u x: hard reset                         |
|----------+---------------------------+-------------------------------------------|
| M        | magit-remote-popup        |                                           |
| M a      | magit-remote-add          |                                           |
| M k      | magit-remote-remove       |                                           |
| f        | magit-fetch-popup         |                                           |
| ff       | magit-fetch-current       |                                           |
| fo       | magit-fetch               |                                           |
| fa       | magit-fetch-all           |                                           |
| fm       | magit-submodule-fetch     |                                           |
| F        | magit-pull-popup          |                                           |
| FF       | magit-pull-current        |                                           |
| Fo       | magit-pull                |                                           |
| P        | magit-push-popup          |                                           |
| PP       | magit-push-current        |                                           |
| Po       | magit-push                |                                           |
| Pe       | magit-push-elsewhere      |                                           |
|----------+---------------------------+-------------------------------------------|
| t        | magit-tag-popup           |                                           |
| tt       | magit-tag                 |                                           |
| tk       | magit-tag-delete          |                                           |
|          |                           |                                           |
