---
title: Rabin-Karp Algorithm
---

It is a string searching algorithm.

The Naive Solution for string search:

```c
int func(char s[], int n, char pattern[], int m) {
  char *ps,*pp; //*
  ps=s;
  pp=pattern;
  for (i=0;i<n-m+1;) {
    if (*pp=='\0') return i; //*
    if (*ps == *pp) { //*
      ps++;pp++;
    } else {
      i++;
      ps=s+i;
      pp=pattern;
    }
  }
}
```

The running time is `$O(mn)$`.

The Rabin-Karp algorithm use hash for pattern match.
First calculate `hash(pattern)`.
Then for every s[i,i+m-1], calculate the hash.
Then compare them.

The key of the algorithm is the hash function.
If the hash function need time m to compute, then it is still `$O(mn)$`.
If the collision happens often, then even if hash matches, we still need to verify.

Key point is to select a hast function, such that `hash(i,i+m-1)` can be computed
by `hash(i-1,i+m-2)`.

If add all characters' ASCII together, collision is often.

The used hash function is:
select a large prime as base, 101 for example.
Hash value is:

```
hash("abc") = ASCII('a')*101^2 + ASCII('b')*101^1 + ASCII('c')*101^0
```

Rabin-Karp is not so good for single string match because the worst case is `$O(mn)$`,
but it is the algorithm of choice for multiple pattern search.

K patterns, in a large string s, find any one of the K patterns.
