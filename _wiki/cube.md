---
title: cube
---

# blindfolded cube solving

| name | action                  | effect                     | comment               |
|------+-------------------------+----------------------------+-----------------------|
| T    | RUR'U'R'FR2U'R'U'RUR'F' | swap(UR,UL), swap(URF,URB) | both with U preserved |
| Ja   | RUR'F'RUR'U'R'FR2U'R'U' | swap(UR,UF), swap(URF,URB) | both with U preserved |
| Jb   | F2L'U'rU2l'UR'U'l2      | swap(UR,UB), swap(URF,URB) | both with U preserved |
| Y    | RU'R'U'RUR'F'RUR'U'R'FR | swap(UL,UB), swap(ULB,DFR) | 1 with U preserved    |
| R    | RU2R'U2RB'R'U'RUlUR2Fx  | swap(UR,UB), swap(URF,ULF) | both with U preserved |
|      |                         |                            |                       |

UR BL RF LU


## Notation
ULFRBD: clockwise
U': counter-clockwise
ulfrbd: double layer turns: u turns the up two layer

M: middle turn towards me
E: equator turns right
S: standing turns right

XYZ: whole cube rotation

reference
=========
file:~/smartscholar/badmephisto-speedcubing-method.pdf

Fridrich(CFOP)
==============

Make the top orientation
------------------------

ref: http://rubiks.com/blog/fridrich-cfop-stage-3

```
---
***
---
```

FRUR'U'F'

```
-*-
**-
---
```

FURU'R'F'

```
---
-*-
---
```

FRUR'U'F'U2FURU'R'F'

Then you will reach the following five cases:

```
#
-*-#
***
**-
  #
```

RUR'URU2R'

```
#-**
 ***
 -*-#
 #
```

RU2R'U'RU'R'

```
#
-**
***
-**
#
```

LFR'F'L'FRF'

```
#-**
 ***
#-**
```

U'R2DR'U2RD'R'U2R'

```
   #
 **-
 ***
#-**
```

L'U'L'URU'LUR'L

```
   #
#-*-
 ***
#-*-
   #
```

RU2R2U'R2U'R2U2R

```
#-*-#
 ***
#-*-#
```

RUR'URU'R'URU2R'

Final
-----

First, orient the corners

```
A*B
***
C*D
```

swap(C,D): R'FR'B2RF'R'B2R2

swap(A,D): FRU'R'U'RUR'F'RUR'U'R'FRF'

```
*B*
A*C
*D*
```

A->C->D: M2U'MU2M'U'M2

A->D->C: M2UMU2M'UM2

swap(A,B) + swap(C,D): M2UM2UM'U2M2U2M'

swap(A,C) + swap(B,D): M2UM2U2M2UM2
