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

permutation II
--------------

https://oj.leetcode.com/problems/permutations-ii/

Given a collection of numbers that might contain duplicates, return all possible unique permutations.

For example,
[1,1,2] have the following unique permutations:
[1,1,2], [1,2,1], and [2,1,1].

### My Solution

First sort num.
Then, we have the function `Insert(int idx,int start)`.
It add num[idx] to one of the position from v[start] to v[end].
In side each Insert, insert its following number.
Use either `Insert(idx+1,i+1)` for the same number
or `Insert(idx+1,0)` for different number.

Keep the initial value as -100, which we assume will never appear in num.
Every time we change `this->v[i]`, we need to set it back to -100 again right after it.

Only when the last element fits in a position do we push it to vl.

```cpp
// 136ms
class Solution {
public:
  vector<vector<int> > permuteUnique(vector<int> &num) {
    Insert(0,0);
    this->num = num;
    sort(this->num.begin(),this->num.end());
    for (int i=0;i<num.size();i++) {
      this->v.push_back(-100);
    }
    this->size = num.size();
    Insert(0,0);
    return this->vl;
  }
  void Insert(int idx, int start) {
    for(int i=start;i<this->size;i++) {
      if (this->v[i] == -100) {
        this->v[i] = this->num[idx];
        if (idx==this->size-1) {
          this->vl.push_back(this->v);
          this->v[i] = -100;
          return;
        }
        if (this->num[idx]==this->num[idx+1]) {
          Insert(idx+1,i+1);
        } else {
          Insert(idx+1,0);
        }
        this->v[i] = -100;
      }
    }
  }
private:
  vector<vector<int> > vl;
  vector<int> num;
  vector<int> v;
  int size;
};
```

### Others' Solution

Push num into vv.
Then, pos iterators through num.
In each iteration, the numbers before pos is set.

For every pos, sort all vectors in vv from pos+1 to end.
Then, exchange v[pos] with v[every unique number] once.

```cpp
vector<vector<int> > vv;
vv.push_back(num);
int pos=0;
while(pos<num.size()-1){
  int size = vv.size();
  for(int i=0; i<size; i++){
    //sort the array, so that the same number will be together
    sort(vv[i].begin()+pos, vv[i].end());
    //take each number to the first
    for (int j=pos+1; j<vv[i].size(); j++) {
      vector<int> v = vv[i];
      //skip the same number
      if (j>0 && v[j]==v[j-1]){
        continue;
      }
      int t = v[j];
      v[j] = v[pos];
      v[pos] = t;
      vv.push_back(v);
    }
  }
  pos++;
}
return vv;
```

Maximum Gap
-----------

https://oj.leetcode.com/problems/maximum-gap/

Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Try to solve it in linear time/space.

### Algorithm

1. Find the max and min of the array.
2. Define (max-min)/num.size() buckets.
3. Fall each number into a bucket as follows:

```cpp
int idx = (num[i] - min) / bucket_size ;
if (buckets[idx].empty()){
  buckets[idx].push_back(num[i]);
  buckets[idx].push_back(num[i]);
}else{
  buckets[idx][0] = buckets[idx][0] > num[i] ? num[i] : buckets[idx][0];
  buckets[idx][1] = buckets[idx][1] < num[i] ? num[i] : buckets[idx][1];
}
```

So after that, in each bucket, first is min, and last is max.
The max gap can never lie within a bucket, so just calculate the gap between them.
