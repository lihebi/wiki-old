---
title: Assembly
---

Reference: http://www.cs.virginia.edu/~evans/cs216/guides/x86.html

registers
---------

* `EAX`: used to be called the accumulator since it was used by a number of arithmetic operations
* `ECX` was known as the counter since it was used to hold a loop index
* `IP`: instruction pointer. 32-bit value indicating the location in memory where the current instruction starts.  it increments to point to the next instruction in memory begins after execution an instruction. The IP register cannot be manipulated directly, but is updated implicitly by provided control flow instructions.
* `ESP`: stack pointer (ESP)
* `EBP`: the base pointer (EBP). The base pointer is used by convention as a point of reference for finding parameters and local variables on the stack.


For the EAX, EBX, ECX, and EDX registers, subsections may be used. For example, the least significant 2 bytes of EAX can be treated as a 16-bit register called AX. The least significant byte of AX can be used as a single 8-bit register called AL, while the most significant byte of AX can be used as a single 8-bit register called AH.

Memory and Address
------------------

### static data region

static data is global variables.

```asm
.DATA
var	DB 64  	; Declare a byte, referred to as location var, containing the value 64.
var2	DB ?	; Declare an uninitialized byte, referred to as location var2.
DB 10	; Declare a byte with no label, containing the value 10. Its location is var2 + 1.
X	DW ?	; Declare a 2-byte uninitialized value, referred to as location X.
Y	DD 30000    	; Declare a 4-byte value, referred to as location Y, initialized to 30000.
```

```asm
Z	DD 1, 2, 3	; Declare three 4-byte values, initialized to 1, 2, and 3. The value of location Z + 8 will be 3.
bytes  	DB 10 DUP(?)	; Declare 10 uninitialized bytes starting at location bytes.
arr	DD 100 DUP(0)    	; Declare 100 4-byte words starting at location arr, all initialized to 0
str	DB 'hello',0	; Declare 6 bytes starting at the address str, initialized to the ASCII character values for hello and the null (0) byte.
```

### move operation and address calculate

the following are valid

```asm
mov eax, [ebx]	; Move the 4 bytes in memory at the address contained in EBX into EAX
mov [var], ebx	; Move the contents of EBX into the 4 bytes at memory address var. (Note, var is a 32-bit constant).
mov eax, [esi-4]	; Move 4 bytes at memory address ESI + (-4) into EAX
mov [esi+eax], cl	; Move the contents of CL into the byte at address ESI+EAX
mov edx, [esi+4*ebx]    	; Move the 4 bytes of data at address ESI+4*EBX into EDX
```

the following are INVALID

```asm
mov eax, [ebx-ecx]	; Can only add register values
mov [eax+esi+edi], ebx    	; At most 2 registers in address computation
```

### Size Guessing

In general, the intended size of the of the data item at a given memory address can be inferred from the assembly code instruction in which it is referenced.

When we were loading a 32-bit register, the assembler could infer that the region of memory we were referring to was 4 bytes wide. When we were storing the value of a one byte register to memory, the assembler could infer that we wanted the address to refer to a single byte in memory.

However, `mov [ebx], 2`, we don't know to move `2` into 1,2,or all 4 bytes of `ebx`.

```asm
mov BYTE PTR [ebx], 2	; Move 2 into the single byte at the address stored in EBX.
mov WORD PTR [ebx], 2	; Move the 16-bit integer representation of 2 into the 2 bytes starting at the address in EBX.
mov DWORD PTR [ebx], 2    	; Move the 32-bit integer representation of 2 into the 4 bytes starting at the address in EBX.
```

Instructions
------------

Notations:


* `<reg32>`    	Any 32-bit register (EAX, EBX, ECX, EDX, ESI, EDI, ESP, or EBP)
* `<reg16>`	Any 16-bit register (AX, BX, CX, or DX)
* `<reg8>`	Any 8-bit register (AH, BH, CH, DH, AL, BL, CL, or DL)
* `<reg>`	Any register
* `<mem>`	A memory address (e.g., [eax], [var + 4], or dword ptr [eax+ebx])
* `<con32>`	Any 32-bit constant
* `<con16>`	Any 16-bit constant
* `<con8>`	Any 8-bit constant
* `<con>`	Any 8-, 16-, or 32-bit constant

### Data Movement

#### Move

Opcodes: 88, 89, 8A, 8B, 8C, 8E, ...

While register-to-register moves are possible, direct memory-to-memory moves are not.

the source memory contents must first be loaded into a register, then can be stored to the destination memory address.

syntax:

```asm
mov <reg>,<reg>
mov <reg>,<mem>
mov <mem>,<reg>
mov <reg>,<const>
mov <mem>,<const>
```

example:

```asm
mov eax, ebx ;copy the value in ebx into eax
mov byte ptr [var], 5 ;store the value 5 into the byte at location var
```

#### Push

Opcodes: FF, 89, 8A, 8B, 8C, 8E, ...

The push instruction places its operand onto the top of the hardware supported stack in memory. Specifically, push first decrements ESP by 4, then places its operand into the contents of the 32-bit location at address [ESP].

ESP (the stack pointer) is decremented by push since the x86 stack grows down - i.e. the stack grows from high addresses to lower addresses.

Syntax:

```asm
push <reg32>
push <mem>
push <con32>
```

examples:

```asm
push eax ;push eax on the stack
push [var] ;push the 4 bytes at address var onto the stack
```

#### Pop

It first moves the 4 bytes located at memory location [SP] into the specified register or memory location, and then increments SP by 4.

syntax:

```asm
pop <reg32>
pop <mem>
```

examples:

```asm
pop edi ;pop the top element of the stack into EDI.
pop [ebx] ;pop the top element of the stack into memory at the four bytes starting at location EBX.
```

### lea — Load effective address

The lea instruction places the address specified by its second operand into the register specified by its first operand.

contents of the memory location are not loaded, only the effective address is computed and placed into the register. This is useful for obtaining a pointer into a memory region.

load $1's address into $0

syntax:

```asm
lea <reg32>,<mem>
```

examples:

```asm
lea edi, [ebx+4*esi] ;the quantity EBX+4*ESI is placed in EDI.
lea eax, [var] ;the value in var is placed in EAX.
```

### Arithmetic and Logic

#### Add

adds together its two operands, storing the result in its first operand

both operands may be registers, at most one operand may be a memory location

syntax:

```asm
add <reg>,<reg>
add <reg>,<mem>
add <mem>,<reg>
add <reg>,<con>
add <mem>,<con>
```

examples:

```asm
add eax, 10 ;EAX ← EAX + 10
add BYTE PTR [var], 10 ;add 10 to the single byte stored at memory address var
```

#### Sub

syntax:

```asm
sub <reg>,<reg>
sub <reg>,<mem>
sub <mem>,<reg>
sub <reg>,<con>
sub <mem>,<con>
```

examples:

```asm
sub al, ah ;AL ← AL - AH
sub eax, 216 ;subtract 216 from the value stored in EAX
```

#### inc, dec — Increment, Decrement

syntax:

```asm
inc <reg>
inc <mem>
dec <reg>
dec <mem>
```

examples:

```asm
dec eax ;subtract one from the contents of EAX.
inc DWORD PTR [var] ;add one to the 32-bit integer stored at location var
```

#### imul — Integer Multiplication

The two-operand form multiplies its two operands together and stores the result in the first operand. The result (i.e. first) operand must be a register.

The three operand form multiplies its second and third operands together and stores the result in its first operand. Again, the result operand must be a register. Furthermore, the third operand is restricted to being a constant value.

syntax:

```asm
imul <reg32>,<reg32>
imul <reg32>,<mem>
imul <reg32>,<reg32>,<con>
imul <reg32>,<mem>,<con>
```

examples:

```asm
imul eax, [var] ;multiply the contents of EAX by the 32-bit contents of the memory location var. Store the result in EAX.
imul esi, edi, 25 ;ESI → EDI * 25
```

#### idiv — Integer Division

The idiv instruction divides the contents of the 64 bit integer EDX:EAX (constructed by viewing EDX as the most significant four bytes and EAX as the least significant four bytes) by the specified operand value. The quotient result of the division is stored into EAX, while the remainder is placed in EDX.

syntax:

```asm
idiv <reg32>
idiv <mem>
```

examples:

```asm
idiv ebx ;divide the contents of EDX:EAX by the contents of EBX. Place the quotient in EAX and the remainder in EDX.
idiv DWORD PTR [var] ;divide the contents of EDX:EAS by the 32-bit value stored at memory location var. Place the quotient in EAX and the remainder in EDX.
```

#### and, or, xor — Bitwise logical and, or and exclusive or

syntax:

```asm
and <reg>,<reg>
and <reg>,<mem>
and <mem>,<reg>
and <reg>,<con>
and <mem>,<con>
or <reg>,<reg>
or <reg>,<mem>
or <mem>,<reg>
or <reg>,<con>
or <mem>,<con>
xor <reg>,<reg>
xor <reg>,<mem>
xor <mem>,<reg>
xor <reg>,<con>
xor <mem>,<con>
```

examples:

```asm
and eax, 0fH ;clear all but the last 4 bits of EAX.
xor edx, edx ;set the contents of EDX to zero.
```

#### not — Bitwise Logical Not

Logically negates the operand contents (that is, flips all bit values in the operand).

syntax:

```asm
not <reg>
not <mem>
```

examples:

```asm
not BYTE PTR [var] ;negate all bits in the byte at the memory location var
```

#### neg — Negate

Performs the two's complement negation of the operand contents.

* `one's complement`: not. bitwise negate all bits.
* `two's complement`: 0-x. That is one's complement+1.

syntax:

```asm
neg <reg>
neg <mem>
```

examples:

```asm
neg eax — EAX → - EAX
```

#### shl, shr — Shift Left, Shift Right

shift the bits in their first operand's contents left and right, padding the resulting empty bit positions with zeros. The shifted operand can be shifted up to 31 places.

The number of bits to shift is specified by the second operand, which can be either an 8-bit constant or the register CL. In either case, shifts counts of greater then 31 are performed modulo 32.

syntax:

```asm
shl <reg>,<con8>
shl <mem>,<con8>
shl <reg>,<cl>
shl <mem>,<cl>

shr <reg>,<con8>
shr <mem>,<con8>
shr <reg>,<cl>
shr <mem>,<cl>
```

examples:

```asm
shl eax, 1 ;Multiply the value of EAX by 2 (if the most significant bit is 0)
shr ebx, cl ;Store in EBX the floor of result of dividing the value of EBX by 2n wheren is the value in CL.
```

### Control Flow Instructions

notation:

`<label>`: `begin` is a label in the following code. This label is just a convenient way of expressing the location instead of its 32-bit value.

```asm
       mov esi, [ebp+8]
begin: xor ecx, ecx
       mov eax, [esi]
```

#### Jump

syntax:

```asm
jmp <label>
; example
jmp begin
```

#### jcondition — Conditional Jump

syntax:

```asm
je <label> (jump when equal)
jne <label> (jump when not equal)
jz <label> (jump when last result was zero)
jg <label> (jump when greater than)
jge <label> (jump when greater than or equal to)
jl <label> (jump when less than)
jle <label> (jump when less than or equal to)
```

example:

```asm
cmp eax, ebx
jle done

```

#### cmp

This instruction is equivalent to the sub instruction, except the result of the subtraction is discarded instead of replacing the first operand.

syntax:

```asm
cmp <reg>,<reg>
cmp <reg>,<mem>
cmp <mem>,<reg>
cmp <reg>,<con>
```

example:

```asm
cmp DWORD PTR [var], 10
jeq loop
```

#### call, ret — Subroutine call and return

The call instruction first pushes the current code location onto the hardware supported stack in memory (see the push instruction for details), and then performs an unconditional jump to the code location indicated by the label operand. Unlike the simple jump instructions, the call instruction saves the location to return to when the subroutine completes.

The ret instruction implements a subroutine return mechanism. This instruction first pops a code location off the hardware supported in-memory stack (see the pop instruction for details). It then performs an unconditional jump to the retrieved code location.

syntax:

```asm
call <label>
ret
```

Calling Convention
------------------

![image](https://farm9.staticflickr.com/8682/16032754979_35aa6cd626_n.jpg)

Stack during Subroutine Call

### Caller Rules

Before call:

1. save the contents of certain registers that are designated caller-saved: EAX, ECX, EDX. (OPTIONAL)
They may be modified by subroutine.
2. push 3 parameters in inverted order(first parameter last).
3. use the call instruction. This instruction places the return address on top of the parameters on the stack, and branches to the subroutine code.



After routine returns,
The result produced by `_myFunc` is now available for use in the register EAX. The values of the caller-saved registers (ECX and EDX), may have been changed.

Now do:

1. Remove the parameters from stack. This restores the stack to its state before the call was performed. `add esp, 12`
2. Restore the contents of caller-saved registers (EAX, ECX, EDX) (OPTIONAL)

example:

```asm
push [var] ; Push last parameter first
push 216   ; Push the second parameter
push eax   ; Push first parameter last

call _myFunc ; Call the function (assume C naming)

add esp, 12
```

### Callee Rules

Prologue:

1.

```asm
push ebp
mov  ebp, esp
```

2. allocate local variables by making space on the stack.
For example, if 3 local integers (4 bytes each), `sub esp, 12`.
3. save the values of the callee-saved registers(EBX, EDI, and ESI) that will be used by the function. If EBX is not used, no need to save it.

Epilogue:

1. Leave the return value in EAX.
2. Restore the old values of any callee-saved registers (EDI and ESI) that were modified.
3. Deallocate local variables. `mov esp, ebp`
4. restore EBP: `pop ebp`
5. `ret`

example:

```asm
.486
.MODEL FLAT
.CODE
PUBLIC _myFunc
_myFunc PROC
; Subroutine Prologue
push ebp     ; Save the old base pointer value.
mov ebp, esp ; Set the new base pointer value.
sub esp, 4   ; Make room for one 4-byte local variable.
push edi     ; Save the values of registers that the function
push esi     ; will modify. This function uses EDI and ESI.
; (no need to save EBX, EBP, or ESP)

; Subroutine Body
mov eax, [ebp+8]   ; Move value of parameter 1 into EAX
mov esi, [ebp+12]  ; Move value of parameter 2 into ESI
mov edi, [ebp+16]  ; Move value of parameter 3 into EDI

mov [ebp-4], edi   ; Move EDI into the local variable
add [ebp-4], esi   ; Add ESI into the local variable
add eax, [ebp-4]   ; Add the contents of the local variable
; into EAX (final result)

; Subroutine Epilogue
pop esi      ; Recover register values
pop  edi
mov esp, ebp ; Deallocate local variables
pop ebp ; Restore the caller's base pointer value
ret
_myFunc ENDP
END
```

`ebp` will never change during subroutine body.
So `[ebp+8]`, `[ebp+12]`, `[ebp+16]` represent parameter 1,2,3.
`[ebp-4]`, `[ebp-8]`, ... represent local variable 1,2,...
