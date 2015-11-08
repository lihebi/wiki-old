---
title: buffer
---

# file
* `C-x C-f`: ido-find-file
* `C-x 4 C-f`: ido-find-file-other-window
* `C-x 5 C-f`: ido-find-file-other-frame
* `C-x C-r`: ido-find-file-read-only

* `delete-file`: prompt a file
* `move-file-to-trash`
* `copy-file`
* `copy-directory`
* `rename-file`
* `add-name-to-file`: hard link
* `make-symbolic-link`: symbolic link
* `set-file-modes`: permission: 777, u+x


* diff: two file name

# buffer

* `C-x C-b`: list-buffers, ibuffer
* `C-x b`: ido-switch-buffer
* `C-x k`: ido-kill-buffer
* `C-x C-q`: read-only-mode. toggle read only of the buffer
* `view-buffer <RET> buffer <RET>`: 好像也是in view mode

## in buffer-menu or ibuffer
flag and execute:

* `d`: flag the buffer to delete
* `C-d`: d, but move point above
* `s`: flag for saving
* `x`: perform flags
* `u`: remove all flags in current line
* `DEL`: move to previous line and remove all flags of that line

execute immediately. Can accept a numeric argument for a repeat count

* `~`: `ibuffer-do-toggle-modified`
* `%`: toggle read only state

* `q`: ibuffer-quit
* `RET`: ibuffer-visit-buffer
* `o`: ibuffer-visit-buffer-other-window
* `C-o`: visit in other window, but do not activate it.

## save related

* `C-x s`: save-some-buffers
Save all buffers.
If one buffer is changed and switched to another,
it is not saved automatically.
* `M-~`: not-modified. `C-u M-~`: mark current buffer as modified.
* `C-x C-w`: ido-write-file. 另存为
* set-visited-file-name: change the filename underwitch the current buffer will be saved.
以后保存就放在这里，但是旧的文件并没有动.
* revert-buffer: go back to the saved version of the file.
* recover-file <RET> file <RET>: recover from autosaving

# window

* `C-x 0`: delete-window
* `C-x 1`: delete-other-windows
* `C-x 2`: split-window-below
* `C-x 3`: split-window-right
* `C-x 4 0`: kill-buffer-and-window
* `C-M-v`: scroll-other-window
* `C-x o`: other-window
* `C-x 4 C-f`: ido-find-file-other-window

* `C-x ^`: enlarge-window
* `C-x }`: enlarge-window-horizontally
* `C-x {`: shrink-window-horizontally
* `C-x -`: shrink-window-if-larger-than-buffer
Shrink if buffer doesn't need so many lines
* `C-x +`: balance-windows

* compare-windows: diff from the points in each window

# frame

* `M-x make-frame`: 产生新的窗口. like cmd-n
* `M-x delete-frame`

