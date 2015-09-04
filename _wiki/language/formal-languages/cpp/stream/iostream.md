---
title: iostream
---

```c++
#include <iostream>
int price;
cin>>price;
```

If the input is not integer, the program will **continue** without setting price's value.
Then if a is used afterwards, undefined behavior.

To add a validation process, we need to use stringstream:

```c++
#include <sstream>
string mystr;
getline(cin, mystr);
stringstream ss = stringstream(mystr);
// validate ss
int price;
ss >> price;
```

**Always use getline instead of cin directly**

```c++
while(getline(cin, line)) {;}
while(getline(fs, line)) {;}
```
