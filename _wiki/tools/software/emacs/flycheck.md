---
title: flycheck
---

# config
```lisp
(add-hook 'after-init-hook #'global-flycheck-mode)
```

# commands
Of course, you need the linter program to enable linter.

When you are in the program mode(e.g. C Mode),
use `C-c ! v`: `flycheck-verify-setup` to verify if flycheck is set up correctly
as well as linter programs is installed.

| shortcut      | command                              | description                                                     |
|---------------+--------------------------------------+-----------------------------------------------------------------|
| C-c ! c       | flycheck-buffer                      |                                                                 |
| C-c ! n       | flycheck-next-error                  |                                                                 |
| C-c ! p       | flycheck-previous-error              |                                                                 |
| C-c ! l       | flycheck-list-errors                 |                                                                 |
| C-c ! v       | flycheck-verify-setup                |                                                                 |
|               | flycheck-first-error                 |                                                                 |
|---------------+--------------------------------------+-----------------------------------------------------------------|
| C-c ! ?       | flycheck-describe-checker            |                                                                 |
| C-c ! s       | flycheck-select-checker              |                                                                 |
| C-c ! x       | flycheck-disable-checker             |                                                                 |
| C-u C-c ! x   | C-u M-x flycheck-disable-checker     | re-enable checker                                               |
|---------------+--------------------------------------+-----------------------------------------------------------------|
| C-c ! C-w     | flycheck-copy-errors-as-kill         | copy error message at point into kill ring                      |
| C-u C-c ! C-w | C-u M-x flycheck-copy-errors-as-kill | Copy all Flycheck error messages at point, including their IDs. |
| M-0 C-c ! C-w | M-0 M-x flycheck-copy-errors-as-kill | Copy the IDs of the errors at point.                            |


The events that trigger checking buffer: `flycheck-check-syntax-automatically`

* `save`
* `idle-change`: after `flycheck-idle-change-delay`
* `new-line`: Check the buffer immediately after a new line was inserted.
* `mode-enabled`: immediately after Flycheck Mode was enabled.

To modify this behavior:

```lisp
(setq flycheck-check-syntax-automatically '(mode-enabled save))
```

