---
title: neotree
---

# install
```
package-install <RET> neotree
```

# Config

work with projectile: when run `projectile-switch-project`,
neotree will change root.
Why change root? I only need you markup the file in the tree!

```lisp
(setq projectile-switch-project-action 'neotree-projectile-action)
```

# cmds
* `neotree-toggle`

# shortcuts

## in NeoTree window

| shortcut | cmd                        | description                              |
|----------+----------------------------+------------------------------------------|
| n        | neotree-next-line          |                                          |
| p        | neotree-prev-line          |                                          |
| SPC, RET | combo                      | open file in buffer open dir             |
| g        | neotree-refresh            |                                          |
| H        | neotree-hidden-file-toggle |                                          |
| C-c C-n  | neotree-create-node        | create file, if end with / create folder |
| C-c C-d  | neotree-delete-node        | delete file or dir                       |
| C-c C-r  | neotree-rename-node        | rename file or dir                       |
| C-c C-c  | neotree-change-root        |                                          |

## global

| cmd            | description                                   |
|----------------+-----------------------------------------------|
| dir            | show neotree, give root at minibuf            |
| neotree-show   | show neotree, current dir as root             |
| neotree        | same                                          |
| neotree-toggle |                                               |
| neotree-find   | show neotree, and locate current buffer in it | 
