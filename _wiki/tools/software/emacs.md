---
title: emacs
---

# cmd
* `C-x C-c`: exit
* `C-x l`: kill all other windows
* `C-h t`: help -> tutorial
* `C-/`: undo `C-x u`, `C-_`
* `C-x C-f`: find a file
* `C-x C-s`: save
保存时，可能freeze, to unfreeze, `C-q`

# Move

* `C-v`: page down
* `M-v`: page up
* `Esc v`: page up

* `C-l`: place cursor in center, top, bottom
* `C-u 0 C-l`: 当前行top == `C-l C-l`
* `M-r`: jump amoung top,middle,bottom of the screen

* `C-npfb`
* `M-fb`
* `C-ae`
* `M-ae`: sentence
* `M-<`: to begin of whole doc
* `M->`: to end of doc

* `C-u 8 C-f`: 8 times `C-f`
* `C-u 8 *` # 插入8个*
* `C-u 2 C-v`: scroll 2 lines

* `C-g`: stop

# edit
delete: 删除. kill: 剪切.
只删除一个字符，或空白，是delete。其余情况均是kill.

* `C-d` # delete
* `C-h` # backspace
* `M-d` # delete a word
* `M-Del`
* `C-k` # kill to the end of line
* `C-k C-k` # kill the line breaker, J
* `C-u 2 C-k`: kill 2 lines
* `M-k` # kill to the end of sentence
* `C-<space>`, move to another place, `C-w`: kill everything in between

* `C-y`: yank
* `M-y`:
* 连续C-k几次，然后C-y会粘贴所有.
* C-y粘贴最近的一次kill，使用C-y后再立即使用M-y会将刚才粘贴的东西变成上一次kill的东西，
再按一次会再往前，直到循环，然后继续重复。可以使用`C-u`加负参数。


## buffer

* `C-x C-b`: list buffers
* `C-x b`: switch to that buffer
* `C-x s`: save all buffers. If one buffer is changed and switched to another, it is not saved automatically.
* `<Esc><Esc><Esc>`: general purpose "get out"
* `C-x k`: kill current buffer

## Mode

* `M-x fundamental mode`: switch to fundamental mode
* `M-x text mode`
* `M-x auto fill mode`

## Search

* `C-s`
C-s再按一次会选中下一个，回车结束。
* `C-r`： 反方向

## 窗口

* `C-x 1`: kill all other window
* `C-x 2`: split vertical
* `C-x 3`: 水平分割
* `C-M-v`: scroll the other window
* `C-x o`: move cursor to other window
* `C-x 4 C-f`: find file in bottom other window

* `M-x make-frame`: 产生新的窗口
* `M-x delete-frame`

## Help

* `C-h ?`: really help
* `C-h c <cmd(s)>`: very brief one line description of the command
* `C-h k <C-p>`: more help
* `C-h f`: previous-line describe a function
* `C-h v xxx`: display doc of variables
* `C-h a file`: display M-x command that has ‘file’
* `C-h i`: read info pages
