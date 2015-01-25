---
title: x-keyboard config
---

files
-----

`/usr/share/X11/xkb`

* 'rules': rules to use in `option`
* 'symbols': symbols
  * `pc`: modifier

commands
--------

```
setxkbmap -option "ctrl:nocaps"
```

see also: `man setxkbmap`. One option can lead a list of operation.
Just use comma seperated string.

permanent
---------

create `/usr/share/X11/xorg.conf.d/10-keyboard.conf`:

```
Section "InputClass"
  Identifier "system-keyboard"
  MatchIsKeyboard "on"
  Option "XkbLayout" "us"
  Option "XkbModel" "pc104"
  Option "XkbOptions" "ctrl:nocaps"
EndSection
```

For `pc104` and `us`, see `man xkeyboard-config`.
