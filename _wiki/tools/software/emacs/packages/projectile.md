---
title: projectile
---

By default, projectile will recognize

* `git`
* `mercurial`
* `darcs`
* `bazaar`
* `lein`
* `maven`
* `sbt`
* `scons`
* `rebar`
* `bundler`

repos as project. If you want some dir as project, add `.projectile` file in it.

# Install
By melpa.

# Config
```lisp
(projectile-global-mode) ; enable
;; (add-hook 'ruby-mode-hook 'projectile-mode) ; enable only in selected modes.
```

# keys & commands

`C-c p C-h`: open projectile keybinding help ... This does not have a command name

| shortcut       | cmd                                        | description                                       |
|----------------+--------------------------------------------+---------------------------------------------------|
| C-c p f        | projectile-find-file                       |                                                   |
| C-c p g        | projectile-find-file-dwim                  | open file at point?                               |
| C-c p F        | projectile-find-file-in-known-projects     |                                                   |
| C-c p d        | projectile-find-dir                        |                                                   |
| C-c p 4 f      | projectile-find-file-other-window          |                                                   |
| C-c p 4 g      |                                            |                                                   |
| C-c p 4 d      |                                            |                                                   |
| C-c p s g      | projectile-grep                            |                                                   |
| C-c p b        | projecitle-switch-to-buffer                | current project buffers opened                    |
| C-c p 4 b      |                                            |                                                   |
| C-c p R        | projectile-regenerate-tags                 |                                                   |
| C-c p j        | projectile-find-tag                        |                                                   |
| C-c p k        | projectile-kill-buffers                    | kill all project buffers                          |
| C-c p D        | projecitle-dired                           | open project root in Dired                        |
| C-c p e        | projectile-recentf                         | recent visited project files                      |
| C-c p !        | projectile-run-shell-command-in-root       |                                                   |
| C-c p &        | projectile-run-async-shell-command-in-root |                                                   |
| C-c p c        | projectile-compile-project                 | run standard compilation for this type of project |
| C-c p P        | projectile-test-project                    | run standard test command                         |
| C-c p p        | projectile-switch-project                  |                                                   |
| C-c p S        | projectile-save-project-buffers            |                                                   |
| C-c p <escape> | projectile-project-buffers-other-buffer    | switch to most recent selected projectile buffer  |

# integration
## with helm
* install helm-projectile
* `C-c p h`: `helm-projectile`

config

```lisp
;; (setq helm-projectile-fuzzy-match nil)
(require 'helm-projectile)
(helm-projectile-on)
```

## with perspective
install `perspective`, `persp-projectile`

```lisp
(persp-mode)
(require 'persp-projectile)
(define-key projectile-mode-map (kbd "s-s") 'projectile-persp-switch-project)
````
