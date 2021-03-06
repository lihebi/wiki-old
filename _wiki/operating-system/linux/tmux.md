---
title: tmux
---

# Tmux

# Start & Stop

* `tmux`: start tmux
* `tmux ls`: list all tmux sessions.

When the last window is closed, tmux exit.

# Terms

When you use `tmux`, you start a new *session*.
When you use `c-b c` to create a new *window*.
You use `c-b "/%` to split the current window into 2 *panes*

# Shortcuts

All shortcuts are prefixed by `<C-b>`

* `c`: create a new window
* `n`: switch to next window
* `p`: switch to previous window
* `l`: switch to previously selected window. Last window
* `w`: choose the current window interactively. 显示所有window，然后选择一个进入。
* `&`: kill the current window
* `d`: detach the current window

You will be dropped out of tmux.
Now use `tmux ls` to see all the tmux sessions(client).
The first number is index.
To reconnect, use `tmux -a t <number>`

* `"`: split current pane into *top and bottom*
* `%`: split current pane into *left and right*
* `o`: select next pane in current window
* `!`: close all panes in current window except current pane.
* `x`: close current pane
* `t`: time

A workflow of tmux to keep process running while you logoff ssh
===============================================================

1. `tmux` to start tmux session
2. start the process inside tmux session
3. detach tmux session by `Ctrl-B` than `D`
4. logoff
5. login again, attach the session by `tmux attack`

To have multiple tmux sessions:

1. name each session by `Ctrl-B` than `$`
2. get a list of current running sessions: `tmux list-sessions`

Configuration
=============
The configuration file is `~/.tmux.conf`.

To reload it within tmux, use `<prefix>` + `:source-file ~/.tmux.conf`.
To reload it out of tmux, use `tmux source-file ~/.tmux.conf`.
If all tmux sessions are exited, just start tmux will load the new configuration.
