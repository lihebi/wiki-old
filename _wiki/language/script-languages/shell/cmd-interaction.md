---
title: command interactions
---

# pipeline

each command execute in its own subshell.

```sh
<cmd1> | <cmd2> # pipe
<cmd1> |& <cmd2> # it is short hand for:
<cmd1> 2>&1 | <cmd2>
```

The exit status of a pipeline is

* the exist status of the last command
* if `pipefail` option is enabled, the last command to exit with a non-zero status
* if `!` precedes the pipeline, it is logical negation

# redirection
```sh
ls > dirlist 2>&1
ls 2>&1 dirlist # wrong
&>word # the same as
>word 2>&1
&>>word # the same as
>>word 2>&1
<<< word # use string directly as input
```

# list

```sh
<cmd1> && <cmd2>
<cmd1> || <cmd2>
<cmd1> & # background, return 0 immediately. input is redirected to /dev/null
<cmd1> ; <cmd2> # return status is the last one
```

# grouping
* `( list )`: a subshell is created, each command in list will execute in that shell
* `{ list; }`: semicolon or newline is needed. No subshell is created, commands will run in current shell.
