---
title: makefile
---

易错点：

* `g++` or `gcc`
* `%.c` instead of `%c`
* `.cpp` or `.c`
* `OBJS = $(SRCS:.cpp=.o)` 注意cpp

变量:

* `$<` name of the prerequisite of the rule
* `$@` name of the target of the rule
* `$^` names of all the prerequisites, with spaces between them

两种变量定义方式:

* `A=xxx`: `A=$(A) -o` will recursive, infinite loop
* `A:=xxx`: `A=$(A) -o` will interpret the current A into $(A). Never recursive.


```
CC=g++
CFLAGS = -g -Wall
INCLUDES = -I/home/newhall/include  -I../include
LFLAGS = -L/home/newhall/lib  -L../lib
LIBS = -lmylib -lm
SRCS = majority_element.cpp
# SRCS = $(wildcard *.c)
OBJS = $(SRCS:.c=.o)
MAIN = myprog

.PHONY: all clean


all: $(MAIN)
  @echo Compiled $(MAIN)

$(MAIN): $(OBJS)
  $(CC) $(CFLAGS) $(INCLUDES) -o $(MAIN) $(OBJS) $(LFLAGS) $(LIBS)

test: test.cpp
  $(CC) $(CFLAGS) $(INCLUDES) -o test test.cpp

%.o : %.cpp
  $(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

clean:
  $(RM) *.o *~ $(MAIN) test
```
