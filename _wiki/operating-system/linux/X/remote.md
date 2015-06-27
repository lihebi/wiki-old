---
title: Xorg remote
---

If on mac, install XQuartz.

Use ssh with special option for X server access:

```sh
ssh -XC user@server
```

This require the `~/.Xauthorith` file. You can create a new one by:

```sh
key=`perl -e 'srand; printf int(rand(100000000000000000))'`
key=$key$key
xauth add `hostname`/unix:0 . $key
```

Then inside the vm, you can use

```
nautilus&
```

to start the X11 app.
