---
title: edit
---

delete: 删除. kill: 剪切.
只删除一个字符，或空白，是delete。其余情况均是kill.

# commands
* `C-d`: delete-char
* `M-d`: kill-word
* `M-Del`: backword-kill-word
* `C-k` # kill-line
* `M-k` # kill-sentence

* `C-y`: yank
* `M-y`: yank-pop

## tricks
* `C-k C-k` # kill the line breaker, J
* `C-u 2 C-k`: kill 2 lines
* 连续`C-k`几次，然后`C-y`会粘贴所有.
* C-y粘贴最近的一次kill，使用`C-y`后再立即使用`M-y`会将刚才粘贴的东西变成上一次kill的东西，
再按一次会再往前，直到循环，然后继续重复。可以使用`C-u`加负参数。

# Search

* `C-s`: isearch-forward-regexp
C-s再按一次会选中下一个，回车结束。
* `C-r`：isearch-backward-regexp
