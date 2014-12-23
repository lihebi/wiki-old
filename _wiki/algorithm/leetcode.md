---
title: Leetcode
---

Majority Element [EASY]
-----------------------

https://oj.leetcode.com/problems/majority-element/

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

### My answer (n)
use map. record repeat times for all items. Then pick one that repeat more than n/2.

### Solutions

#### Sorting (nlogn)
sort, then find longest contiguous identical element.
#### moore voting algorithm
maintain `x` and `count`. For each item,

```c
if (count==0)
  x = current_item;
  count=1;
else
  if (x==current_item)
    count++;
  else
    count--;
```

#### Bit
We need 32 iteration for 32 bits in a int.
For every bit, if the count of 0 is more than the count of 1,
then this bit in majority element is 0, otherwise 1.
They can not equal because a majority element always exists.
