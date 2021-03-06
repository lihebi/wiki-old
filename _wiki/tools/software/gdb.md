---
title: gdb
---

Usage
-----

```sh
gcc -g xx.c # without any optimization (i.e. no -O2 flag).
gdb myprog
```

```
l # list 10 lines of program
<enter> # repeat last command. In this case list 11-20 lines.
break 12 # add breakpoint on line 12
break myfunc # add breakpoint on the entry of myfunc
info break # show all break point info
r # run. will pause on breakpoint
run 4 -s Doc! # 4 -s Doc! will be the argv
n # when paused, run next line
stepi # step in a routine. # Do not step into system library calls
c # when paused, continue
p i # print variable i
p $r3 # print register r3
p/d $r3 # print register r3 as integer format
display $r3 # will display r3 for each of following operation.

print mystruct->data
set mystruct->data = 42

ptype va # the type of the variable
clear xx # clear the specific break point

help # show help

disas func # disassembly func routine.
disas # disassembly current routine.
bt # check function stack
finish # finish current function
q # quit
```

Commands
-------

### load & reload
* `file binary-executable`: reload both binary and its symbol table
* `exec-file`: load binary

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
  - `C`: number of units to display.
  - `A`: an absolute address or $reg pointed by some register.
  - `T`:

```
x hex integer.
d dec integer.
u unsigned dec integer.
o octal integer.
c character.
s null terminated string.
i as machine instruction.
```



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

# pretty printers
The setup of pretty printer on Mac costs me more than 2 hours!

The working solution is here: https://github.com/lihebi/libcxx-pretty-printers
Copy the gdbinit into ~/.gdbinit, change the path according to the comments, and you are good to go.

After this, `info pretty-print` gives me a long list of supported libstd++ types, Nice!
And to my surprise, `show print pretty` is off, and I guess, it is nothing about pretty-printer.
Actually it should be one kind of pretty-printer, in terms that it indeed prettify the format, but still too much information.

I was trying something like, in gdb, use `show auto-load script-directory`.
But when installing gdb by homebrew, it gives me `${prefix}/share/auto-load` as directory.
I copy the `libstdc++xx-gdb.py` into that folder, no luck.
The `show print pretty` is on.

# conditional break

```
b Ctags.cpp:28 if strcmp(name.c_str(), "refcount")==0
```

If some type cannot be easily compared, use:

```cpp
if (myStr == "xyz")
{
// Set breakpoint here
}
```
