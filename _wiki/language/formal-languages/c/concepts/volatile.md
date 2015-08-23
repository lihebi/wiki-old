---
title: volatile
---

When your code works without compiler optimization, but fails when you turn optimization on,
perhaps it is because of `volatile`.

If compiler found that around a variable, no one change it, it will do some optimization based on this.
Maybe remove unnecessary code which it thinks will never execute.

The keyword tells the compiler that the value of the variable may change at any time.
It may change unexpectedly,
so DO NOT optimize the code when you compiler think it would not change.

syntax
------

declare a variable(both are equalvalent)

```c
volatile int foo;
int volatile foo;
```

declare pointers to volatile varialbes(common usage)

```c
volatile uint8_t *pReg;
uint8_t volatile *pReg;
```

volatile pointers to non-volatile data(very rare)

```c
int * volatile p;
```

volatile pointer to volatile variable(also rare)

```c
int volatile * volatile p;
```

When to use it
--------------

### Memory-mapped peripheral registers

The register's value may change by hardware.
But in the code, compiler cannot see it,
so it may assume it is constant, and do some optimization.

```c
uint8_t *pReg = (uint8_t) 0x1234;
while (*pReg==0) {}
```

Since no `volatile`, the assembly looks like:

```asm
  mov ptr, #0x1234
  mov a, @ptr
loop:
  bz loop
```

To fix it, use volatile to declare it:

```c
uint8_t volatile *pReg = (uint8_t volatile *)0x1234
```

The assembly will be:

```asm
  mov ptr, #0x1234
loop:
  mov a, @ptr
  bz loop
```

### Global variables modified by an ISR(Interrupt Service Routine)

Compiler will of course not know about interrupt.
So when the global file can be modified by interrupt,
we must tell it.

```c
int volatile etx_rcvd = FALSE;
void main() {
  while(!ext_rcvd) {}
}
interrupt void rx_isr(void) {
  if (ETX == rx_char) {
    etx_rcvd = TRUE;
  }
}
```

If no volatile, compiler will think the while condition always be true,
thus never go out of the loop.

### Global variables accessed by multiple tasks within a multi-threaded application

Compiler doesn't find the variable change near the code it is defined,
so it may assume it is unchanged.
While another task in the same time may change it,
it is just like the interrupt.
