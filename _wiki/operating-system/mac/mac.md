---
title: mac
---

# 终端

```
alias google-chrome='open -a Google\ Chrome'
```

让spotlight重新建立索引：

```
sudo mdutil -e / # 建立整个硬盘
sudo mdutil -e /Volumn/MyVolumn ＃ 针对单个volumn，应该可以对任意一个文件夹
```

# 软件

## finder

connect to smb server in CS@ISU:

finder, go, connect to server `smb://smb.cs.iastate.edu`

## font-book
有很多字体可以预览，通过它还可以装字体。

## DigitalColor Meter
屏幕取色。如果CSS要使用rgba，则选择sRGB的值。

## iterm

快捷键

`cmd+enter` full screen

`cmd+/` cursor

`option+cmd+b`: 回放

`shift+cmd+d`横向分割

`md+d` 纵向

## homebrew

在github上大概前十的。装软件不用sudo。

```
brew install xxx
brew uninstall xxx
brew search xxx
brew --prefix
```

homebrew install in `/usr/local/Celler/…`
it create symbol links in `/usr/local/bin/…`

## KeyRemap4MacBook && PCKeyboardHack
System Preference ==> Keyboard ==> modifier ==> Caps Lock无操作。
再用PCKeyboardHack改掉

## Alfred

Workflow -> script filter -> bash

```
cat<<EOF
<items>

<item>
<title>Chrome书签</title>
<icon>icon.png</icon>
</item>

<item>
xxx
</item>

</items>
EOF
```

## Tunnel Blick

软件有`Installer`和`Uninstaller`。

使用`3.4 beta`而不是`3.3.2`。

在10.10中，连上就会断开。解决方法：

* 域名服务器设置为`3.1`
* 或，高级，去掉勾选“连接或断开后，清空DNS缓存”

# ringtone for iphone
* Find the song you want and note the start/stop time you want the ring tone.
* Right click - get info, click the Options tab and set the start/stop times as above.
* Right click - Create AAC version. This creates a new file.
* Drag this new file from the iTunes window to the desktop.
* Delete the file from iTunes and also select Delete from hard drive.
* On the desktop, rename the file whateveryouwant.m4r (first part you can change to whatever you want & change the extension to .m4r).
* Drag the file back to the iTunes library at top left.
Make sure iTunes prefs > General has Tones ticked.

## use ffmpeg
```sh
# ffmpeg will recognize format by suffix
ffmpeg -i input.anything output.m4a
# m4a and m4r are of the same type, but just one for audio and one for ringtone.
mv output.m4a output.m4r
# -ss start position -t duration
# iphone allows up to 40 seconds
ffmpeg -ss 5 -t 40 -i xxx.mp3 output.m4a
```
