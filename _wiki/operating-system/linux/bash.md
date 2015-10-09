---
title: bash
---

* `~/.bash_profile`: will load in interactive(login) shell
* `~/.bash_profile`: will load in non-interactive shell

So inside `.bash_profile`:
```sh
if [ -f ~/.bashrc ]; then . ~/.bashrc; fi
```

How to test the shell is interactive?

* method 1

```sh
case "$-" in
  *i*) echo This is interactive ;;
  *) echo not interactive ;;
esac
```

* method 2

```sh
if [ -z "$PS1" ]; then
  echo not interactive
else
  echo interactive
fi
```
