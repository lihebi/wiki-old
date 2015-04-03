---
title: Error Detection Scheme
---

Simple checksum
===============

* `Parity bit`: if the count of `1` is odd, add 1. Otherwise add 0.
* `Parity word`: xor every word, the result is appended as the extra word. Upon verifying, xor all words including the extra word. The result should be a word of 0.
* `Modular sum`: add all words together, discarding any overflow bits, and calculate 2's complement of it. Append it as the checksum. To verify, add all words together including the checksum. The result should be 0.

Position dependent checksum
===========================

The above ones are not position dependent. They are not suit for some errors, such as add many 0s, change orders. Also, the total length is small, e.g. 255. That means 0.4% will be collision.

Cyclic redundancy check(CRC)
----------------------------

Commonly `CRC-8`,`CRC-16`,`CRC-32`,`CRC-64`.

Now consider `CRC-3` with polynomial `$x^3+x+1$`:

```
110100111 000
1011
011000111 000
 1011
 01110111 000
  1011
  ....
  0000000 100
```

100 is the remainder(also the value of the CRC function).

### Verify

Add 100 as the extra 3 bit, and do the math divide. The remainder should be 0.

Fletcher checksum
-----------------
Together with the simple checksum, an extra checksum is calculated based on the sum of the simple checksum.

Drawback: cannot distinguish between all 1 and all 0.

```c
uint16_t Fletcher16( uint8_t * data, int count )
{
   uint16_t sum1 = 0;
   uint16_t sum2 = 0;
   int index;

   for( index = 0; index < count; ++index )
   {
      sum1 = (sum1 + data[index]) % 255;
      sum2 = (sum2 + sum1) % 255;
   }

   return (sum2 << 8) | sum1;
}
```

How to actually use this function to generate the correct checksum:

```c
uint16_t csum;
uint8_t c0,c1,f0,f1;

csum = Fletcher16( data, length);
f0 = csum & 0xff;
f1 = (csum >> 8) & 0xff;
c0 = 0xff - (( f0 + f1) % 0xff);
c1 = 0xff - (( f0 + c0 ) % 0xff);
```

c0 and c1 are the checksum, c0 before c1.

For example, the data is `0x01 0x02`, the output should be `0x01 0x02 0xfb 0x04`.

### Efficient Implementation

```c
uint32_t fletcher32( uint16_t const * data, size_t words )
{
        uint32_t sum1 = 0xffff, sum2 = 0xffff;

        while (words) {
                unsigned tlen = words > 359 ? 359 : words;
                words -= tlen;
                do {
                        sum2 += sum1 += * data++;
                } while (--tlen);
                sum1 = (sum1 & 0xffff) + (sum1 >> 16);
                sum2 = (sum2 & 0xffff) + (sum2 >> 16);
        }
        // Second reduction step to reduce sums to 16 bits
        sum1 = (sum1 & 0xffff) + (sum1 >> 16);
        sum2 = (sum2 & 0xffff) + (sum2 >> 16);
        return sum2 << 16 | sum1;
}
```

```c
uint16_t fletcher16( uint8_t const * data, size_t bytes )
{
        uint16_t sum1 = 0xff, sum2 = 0xff;

        while (bytes) {
                size_t tlen = bytes > 20 ? 20 : bytes;
                bytes -= tlen;
                do {
                        sum2 += sum1 += * data++;
                } while (--tlen);
                sum1 = (sum1 & 0xff) + (sum1 >> 8);
                sum2 = (sum2 & 0xff) + (sum2 >> 8);
        }
        // Second reduction step to reduce sums to 8 bits
        sum1 = (sum1 & 0xff) + (sum1 >> 8);
        sum2 = (sum2 & 0xff) + (sum2 >> 8);
        return sum2 << 8 | sum1;
}
```

Adler-32
--------

Concatenate two 16-bit checksum together: A||B.
A is the sum of words.
B is the sum of As.

```
A = 1 + D1 + D2 + ... + Dn (mod 65521)
B = (1 + D1) + (1 + D1 + D2) + ... + (1 + D1 + D2 + ... + Dn) (mod 65521)
  = n×D1 + (n−1)×D2 + (n−2)×D3 + ... + Dn + n (mod 65521)
Adler-32(D) = B × 65536 + A
```

### Implementation

```c
const int MOD_ADLER = 65521;

uint32_t adler32(unsigned char * data, size_t len)
{
  uint32_t a = 1, b = 0;
  size_t index;

  // Process each byte of the data in order
  for (index = 0; index < len; ++index)
  {
    a = (a + data[index]) % MOD_ADLER;
    b = (b + a) % MOD_ADLER;
  }

  return (b << 16) | a;
}
```


footnote
========

* `2's complement` of an N-bit number: substract the number from 2^N.
* `1's complement`: flip all 0 and 1.
