---
title: Linear Programming
---

一个例子

```latex
maximize \quad x_1+x_2
subject to
\qquad 4x_1-x_2 \le 8
\qquad 2x_1+x_2 \le 10
\qquad 5x_1-2x_2 \ge -2
\qquad x_1,x_2 \ge 0
```

其中，`$x_1+x_2$`叫objective function, 其值叫objective value.
`$x_1,x_2\ge 0$`叫non-negative constraints.
无论有多少个变量，每个constraint都代表一个half space.
constraint有>=,<=,=。计算constraint数量时，`$x_1,x_2\ge 0$`也算2个。

* `a simplex`: the feasible region formed by the intersection of these half spaces.
* `simplex algorithm`: 从simplex的一个顶点出发，沿着一条边到达其相邻的顶点。要求objective value要增加。
如果一个点周围所有点都比它小时，结束。
* integer linear programming: 所有变量取整数。
找到这个问题的可行解是NP-hard的。但是不是integer的问题就有Polynomial solution.
