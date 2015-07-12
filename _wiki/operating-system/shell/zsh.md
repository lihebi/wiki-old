---
title: zsh
---

Install
=======

```
cat /etc/shells
chsh -s /bin/zsh
```

oh-my-zsh
=================

```
ls -l **/*.sh
```

Autojump
--------

Install

```
brew install autojump
```

in `.zshrc`

```
plugins = (..., autojump)
```

autojump支持的功能：

```
j xxx # 进入目录。会自动学习你进过的目录，并且只要输个大概就可以了。
```

Disable zsh git for a single repo
---------------------------------

Inside the repo, type

```
git config --add oh-my-zsh.hide-status 1
```
