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

sudoku [hard]
-------------

https://oj.leetcode.com/problems/sudoku-solver/

Write a program to solve a Sudoku puzzle by filling the empty cells.

Empty cells are indicated by the character '.'.

You may assume that there will be only one unique solution.

```cpp
class Solution {
public:
  void solveSudoku(vector<vector<char> > &board) {

  }
};
```

### My answer

1. go through all 9x9 spaces
2. for every '.' element, use 0-9 for it, and check valid.
3. if valid, call this procedure recursively. On returning true, return true.
4. 0-9 can't fit, recover it to '.'

```cpp
bool solveSudoku(vector<vector<char> > &board) {
  for(int i=0;i<9;i++) {
    for (int j=0;j<9;j++) {
      if (board[i][j]=='.') {
        for(int k=0;k<9;k++) {
          board[i][j] = '1'+k;
          if (isValid(board,i,j) && solveSudoku(board)) {
            return true;
          } else {
            board[i][j]='.';
          }
        }
        return false;
      }
    }
  }
  return true;
}
```

What costs so much time? In isValid function!

### A fast program

use this to maintain whether row i have number j:

```
bool row_mask[9][9];
bool col_mask[9][9];
bool area_mask[9][9];
```

```cpp
for(int i=0; i<9; i++){
  area = (row/3) * 3 + (col/3);
  // already have i
  if (row_mask[row][i] || col_mask[col][i] || area_mask[area][i] ){
    continue;
  }
  // use i as the value
  board[row][col] = i + '1';
  // now row 'row', column 'col', area 'area' have the number i
  row_mask[row][i] = col_mask[col][i] = area_mask[area][i] = true;
  // recurse
  if (recursiveSudoKu(board, row, col+1) == true){
    return true;
  }
  //backtrace
  board[row][col] = '.';
  row_mask[row][i] = col_mask[col][i] = area_mask[area][i] = false;

}
```

In this case, we can check whether it is valid by:

```
row_mask[row][i] || col_mask[col][i] || area_mask[area][i]
```

Thus is very fast.
