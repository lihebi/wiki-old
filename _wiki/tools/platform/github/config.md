---
title: configuration
---

Configure
--------------------------------------

* `git config --list`: check your setting
* `git config user.name`: check user.name setting

User Identity

```
git config --global user.email 'xxx@xxx'
git config --global user.name 'xxx'
```

Credential

```
git config --global credential.helper cache # cache 15 min by default
git config --global credential.helper 'cache --timeout=3600' # set in sec
```

a better log

```
git config --global alias.lg \
"log --color --graph
--pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'
--abbrev-commit"
```

```sh
git lg -p # show the diff together
```
