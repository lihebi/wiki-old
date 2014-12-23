---
title: gdb
---

Usage
-----

```
gdb myprog
```

```
l # list 10 lines of program
<enter> # repeat last command. In this case list 11-20 lines.
break 12 # add breakpoint on line 12
break myfunc # add breakpoint on the entry of myfunc
info break # show all break point info
r # run. will pause on breakpoint
n # when paused, run next line
c # when paused, continue
p i # print variable i

bt # check function stack
finish # finish current function
q # quit
```


Set up on Mac
-------------

```
brew tap homebrew/dupes
brew install gdb
```

it can not monitor other process, so give it permission.

Start Keychain Access application (/Applications/Utilities/Keychain Access.app)

Open menu /Keychain Access/Certificate Assistant/Create a Certificate...

Choose a name (gdb-cert in the example), set Identity Type to Self Signed Root, set Certificate Type to Code Signing and select the Let me override defaults. Click several times on Continue until you get to the Specify a Location For The Certificate screen, then set Keychain to System.

If you can't store the certificate in the System keychain, create it in the login keychain, then exported it. You can then imported it into the System keychain.

Finally, using the contextual menu for the certificate, select Get Info, open the Trust item, and set Code Signing to Always Trust.

You must quit Keychain Access application in order to use the certificate and restart taskgated service by killing the current running taskgated process (so before using gdb).

```
ps -e | grep taskgated
sudo kill -9 56822
codesign -s gdb-cert $(which gdb)
```
