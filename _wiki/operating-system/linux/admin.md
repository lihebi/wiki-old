---
title: admin
---

User
====

### `adduser` versus `useradd`

`useradd` is low-level command. `adduser` is friendly, often used in Debian.
In many system, `adduser` is the same as `useradd`.
They refer to the same man page.

### useradd(important)

```sh
useradd -D # list default setting
useradd hebi # add the user
useradd hebi -m -groups sudo # -m: create home
useradd -aG sudo hebi # add another group "sudo" for hebi
useradd -d /home/kevin -s /bin/bash -m kevin # specify home directory and default shell
useradd -G wheel,mygroup hebi # add multiple groups to the new user

id hebi # show info for user
```

### usermod

```sh
usermod -s /bin/bash hebi
usermod -a -G wheel hebi # add group for an existing user
```

Groups
======

```sh
groupadd mygroup # add a new group
groups # check for my groups
groups root # check for other user's groups
```

Regular Groups:

* `wheel`: Administration group, commonly used to give access to the sudo and su utilities
