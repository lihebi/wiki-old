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
stepi # step in a routine.
c # when paused, continue
p i # print variable i
p $r3 # print register r3
p/d $r3 # print register r3 as integer format
display $r3 # will display r3 for each of following operation.

disas func # disassembly func routine.
disas # disassembly current routine.
bt # check function stack
finish # finish current function
q # quit
```

Commands
-------

### Breakpoint

* `b F`: Set a break-point at function F.
* `b *A`: Set a break-point at absolute address A
* `b N`: Set a break-point at line number N.
* `b N:F`: Set a break-point at line number N at file F.
* `info b`: Lists break-points.
* `cond B cond`: Set a condition to a break-point B.
* `cond B`: the condition of a break-point B.
* `delete B`: a break-point B.

### Step

* `stepi or si`: Execute one machine instruction (follows a call).
* `step or s`: Execute one C-program statement (steps into functions).
* `stepi N`: N machine instructions.
* `nexti or ni`: as si but execute calls as one instructions.
* `next or n`: as ni but execute functions as one statement.
* `bt`: Show names of the stack frames.
* `up`: Go up one stack frame.
* `down`: down one stack frame.

### Examining

* `info reg`: contents of registers.
* `p V`: print variable V
* `x /CT A`: Examining memory where:

`C`: number of units to display.

`T`:

```
x hex integer.
d dec integer.
u unsigned dec integer.
o octal integer.
c character.
s null terminated string.
i as machine instruction.
```

`A`: an absolute address or $reg pointed by some register.


Set up on Mac
-------------

```
brew tap homebrew/dupes
brew install gdb
```

it can not monitor other process, so give it permission.

1. Start Keychain Access application (/Applications/Utilities/Keychain Access.app)
2. Open menu /Keychain Access/Certificate Assistant/Create a Certificate...
3. Choose a name (gdb-cert in the example), set Identity Type to Self Signed Root, set Certificate Type to Code Signing and select the Let me override defaults. Click several times on Continue until you get to the Specify a Location For The Certificate screen, then set Keychain to System.
4. If you can't store the certificate in the System keychain, create it in the login keychain, then exported it. You can then imported it into the System keychain.
5. Finally, using the contextual menu for the certificate, select Get Info, open the Trust item, and set Code Signing to Always Trust.
6. You must quit Keychain Access application in order to use the certificate and restart taskgated service by killing the current running taskgated process (so before using gdb).

```
ps -e | grep taskgated
sudo kill -9 56822
codesign -s gdb-cert $(which gdb)
```
