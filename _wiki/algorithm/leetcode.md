---
title: Leetcode
---

Spiral Matrix II
----------------

https://oj.leetcode.com/problems/spiral-matrix-ii/

Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:

```
[
[ 1, 2, 3 ],
[ 8, 9, 4 ],
[ 7, 6, 5 ]
]
```

### My Solution

```cpp
class Solution {
public:
  vector<vector<int> > generateMatrix(int n) {
    vector<vector<int> > vv(n, vector<int>(n));
    // cout<<"in"<<endl;
    for (int i=0,j=0,count=1;count<=n*n;) {
      // cout<<"for"<<endl;
      vv[i][j] = count;
      count++;
      if (i<=j+1 && n-1-j>i && i<=n/2) j++;
      else if (n-j-1<=i && j>i && j>=n/2) i++;
      else if (i>=j && j>=n-i && i>=n/2) j--;
      else if (j<=n-1-i && i>=j && j<=n/2) i--;
      else return vv;
    }
    return vv;
  }
};
```

### Others

```cpp
vector< vector <int> > matrix(n);
if (n<=0) return matrix;
for(int i=0; i<n; i++){
  vector<int> v(m);
  matrix[i] = v;
}

int row=n, col=m;
int r, c;
int cnt=1;
for (r=0, c=0; r<(row+1)/2 && c<(col+1)/2; r++, c++){
  //top
  for(int i=c; i<col-c; i++){
    matrix[r][i] = cnt++;
  }
  //right
  for(int i=r+1; i<row-r; i++){
    matrix[i][col-c-1] = cnt++;
  }
  //bottom
  for(int i=col-c-2; row-r-1>r && i>=c; i--){
    matrix[row-r-1][i] = cnt++;
  }
  //left
  for(int i=row-r-2; col-c-1>c && i>r; i--){
    matrix[i][c] = cnt++;
  }

}
return matrix;
```

Spiral Matrix
-------------

https://oj.leetcode.com/problems/spiral-matrix/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

For example,
Given the following matrix:

```
[
[ 1, 2, 3 ],
[ 4, 5, 6 ],
[ 7, 8, 9 ]
]
```

You should return `[1,2,3,6,9,8,7,4,5]`.

### My Solution
Very tricky!

```cpp
class Solution {
public:
  vector<int> spiralOrder(vector<vector<int> > &matrix) {
    int i,j;
    int m,n;
    m=matrix.size();
    vector<int> v;
    if (m==0) return v;
    n=matrix[0].size();
    int count=0;
    for (i=0,j=0;true;) {
      // cout<<i<<":"<<j<<endl;
      // cout<<matrix[i][j]<<endl;
      v.push_back(matrix[i][j]);
      count++;
      if (count==m*n) return v;
      if (i<=j+1 && n-1-j>i && i<m-m/2) j++;
      else if (n-j-1<=i && m-i>n-j && j>=n/2) i++;
      else if (m-i<=n-j && j>=m-i && i>=m/2) j--;
      else if (j<=m-1-i && i>=j && j<=n/2) i--;
      else return v;
    }
  }
};
```

### Others Solution

```cpp
vector <int> v;
int row = matrix.size();
if (row<=0) return v;
int col = matrix[0].size();
if (col<=0) return v;
int r, c;
for (r=0, c=0; r<(row+1)/2 && c<(col+1)/2; r++, c++){
  //top
  for(int i=c; i<col-c; i++){
    v.push_back(matrix[r][i]);
  }
  //right
  for(int i=r+1; i<row-r; i++){
    v.push_back(matrix[i][col-c-1]);
  }
  //bottom
  for(int i=col-c-2; row-r-1>r && i>=c; i--){
    v.push_back(matrix[row-r-1][i]);
  }
  //left
  for(int i=row-r-2; col-c-1>c && i>r; i--){
    v.push_back(matrix[i][c]);
  }

}
return v;
```

Copy List with Random Pointer
-----------------------------

https://oj.leetcode.com/problems/copy-list-with-random-pointer/

A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

```cpp
/**
* Definition for singly-linked list with a random pointer.
* struct RandomListNode {
*     int label;
*     RandomListNode *next, *random;
*     RandomListNode(int x) : label(x), next(NULL), random(NULL) {}
* };
*/
class Solution {
public:
  RandomListNode *copyRandomList(RandomListNode *head) { //*

  }
};
```

### My Solution
First, use the `next` pointer to construct the list, together note down every label with the node in a map. Then deal with the random pointer.

### Others Solution
1. insert a new node for each node's next position

```
*       +-------------------------+
*       |                         v
*    +--+----+     +-----+    +-------+     +-----+    +-------+     +-----+
*    | node1 |---> | NEW |----> node2 |---> | NEW |----> node3 |---> | NEW | ---> NULL
*    +-------+     +-----+    +---+---+     +-----+    +--+----+     +-----+
*      ^  ^                       |                       |
*      |  +-----------------------+                       |
*      +--------------------------------------------------+
```

2. `(node1->next) -> random  = (node1->random) -> next`
3. take out all of the "NEW" node


Maximal Rectangle
-----------------

https://oj.leetcode.com/problems/maximal-rectangle/

use largest rectangle function

```cpp
int maximalRectangle(vector<vector<char> > &matrix) {
  if (matrix.size()==0) return 0;
  int row = matrix.size();
  int col = matrix[0].size();
  vector<vector<int> > vv(row, vector<int>(col));
  int result=0;
  for (int i=0;i<row;i++) {
    for (int j=0;j<col;j++) {
      if (matrix[i][j]=='1') {
        vv[i][j] = i==0?1:vv[i-1][j]+1;
      }
    }
    int area = largestRectangleArea(vv[i]);
    result = result<area?area:result;
  }
  return result;
}
```

Largest Rectangle in Histogram
------------------------------

https://oj.leetcode.com/problems/largest-rectangle-in-histogram/

```cpp
int largestRectangleArea(vector<int> &height) {
  stack<int> s;
  int result=0;
  height.push_back(0); // important!!
  for (int i=0;i<height.size();i++) {
    if (s.size()==0 || height[i]>=height[s.top()]) {
      s.push(i);
      continue;
    }
    int top = s.top();
    s.pop();
    int area = s.size()>0?(i-s.top()-1):i;
    area *= height[top];
    result = result>area?result:area;
    i--;
  }
  return result;
}
```

Combination Sum II (subsetsum)
------------------------------

https://oj.leetcode.com/problems/combination-sum-ii/


Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

Each number in C may only be used once in the combination.

### Solution

push_back() and pop_back() should always appear together.
inside them, the result for the current index is 1.
out of them, is 0.
Then I can add the result v to the final result vectors.
v is changing all the time.

```cpp
class Solution {
public:
  vector<vector<int> > combinationSum2(vector<int> &num, int target) {
    sort(num.begin(), num.end());
    recur(num, target, 0);
    return result;
  }
  void recur(vector<int> &num, int t, int idx) {
    if (t<0) return;
    if (t==0) {
      result.push_back(v);
      return;
    }

    for (int i=idx;i<num.size();i++) {
      // can't go from 0 to 1.
      // for example, 2, 2, 2
      // 0 1 1 is not accepted.
      if (i>idx && num[i] == num[i-1]) {
        continue;
      }
      // here, add this number.
      v.push_back(num[i]);
      if (t>=num[i]) recur(num, t-num[i], i+1);
      v.pop_back();
      // here, disregard this number
    }

  }
private:
  vector<int> v;
  vector<vector<int> > result;
};
```

Combination Sum (subsetsum)
---------------------------

https://oj.leetcode.com/problems/combination-sum/

Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

The same repeated number may be chosen from C unlimited number of times.

### Solution
only need to change

```
recur(num, t-num[i], i+1);
```

to

```
recur(num, t-num[i], i);
```



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

permutation II [hard]
---------------------

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
