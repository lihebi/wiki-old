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

Standard Form and Slack Form
----------------------------

### Standard form

```latex
max \quad \sum_1^n c_jx_j
subject to
\qquad \sum_1^n a_{ij}x_j \le b_i \quad for i=1~m
\qquad x_j \ge 0 \quad for j=1~n
```

三要素：

* max
* constraints都是<=(无>=和=)
* 所有变量>=0

矩阵形式

```latex
max \quad c^Tx
subject to
\qquad Ax\le b
\qquad x \ge 0
```

如果一个linear program没有可行解，那么它是infeasible的。
如果有可行解，但是没有有限最佳值(finite optimal objective value),那么它是unbounded的。

#### 转成standard form

1. **IMPORTANT** 对变量`$x_j$`不>=0白，拆成`$x_j' - x_j'', x_j',x_j'' \ge 0$`
2. minimize和>=b的constraint,直接乘-1
3. 对等式constraint，f=b，改成`$f\ge b, f\le b$`

### Slack form
nonnegative constraints是唯一的不等式constraints。
所以对于`$\sum a_{ij}x_j$`，把它变成

```latex
s=b_i-\sum a_{ij}x_j
s\ge 0
```

s叫做slack variable

真正做转换时，变量名不用s，而用`$x_{n+i}$`

```latex
x_{n+1} = b_i - \sum a_{ij}x_j
x_{n+i} \ge 0
```

左边的变量叫basic variable，右边的叫nonbasic variable.
nonbasic variable都=0，叫basic solution.

上面还不叫slack form，flack form还会

1. 不写max和subject to，而是写`$z=2x_1$`，默认max
2. 不写nonnegative constraint，默认。

矩阵表示

```latex
z=v+c^Tx
x_b=b-Ax_N
```

B表示basic variable的index, e.g. {1,2,3}. N表示nonbasic. v is constant.

可用tuple (N,B,A,b,c,v)表示。
注意A的前面有个负号。

把一些问题用linear programs表示
----------------------------

问题2,3,4都有假设

1. `$c(u,v)=0 if (u,v) \notin E$`
2. no antiparallel edges

### 1. shortest path
一个图Ｇ，source s，到t。用`$d_v$`表示s到v的最短路径的值。我们要找`$d_t$`

解：对于每个边`$(u,v) \in E$`，有`$d_v \le d_u+w(u,v)$`
初值`$d_s=0$`。有

```latex
max \quad d_t
subject to
\qquad d_v \le d_u + w(u,v)
\qquad d_s = 0
```

共有|v|个variable，有|E|+1个constraints。

为什么要max dt?因为假设有三条路到v。满足constraints后，我们肯定要选其中一个吧。
那么满足条件的最大的`$d_v$`实际上就是最小权值的那个边。另外，如果是min，那么直接`$d_v=0$`就行了。

### 2. maximum flow
```latex
max \quad \sum_{v \in V} f_{sv} - \sum_{v \in V}f_{vs}
subject to
\qquad f_{uv} \le c(u,v)
\qquad \sum_{v\in V} f_{vu} = \sum_{v \in V}f_{uv} \quad for each u\in V-{s,t}
\qquad f_{uv} \ge 0
```

共有`$|V|^2$`个variables, 从上到下有`$|V|^2+(|V|-2) + |V|^2$`个constraints.

### 3. Minimum cost flow

定义cost为，如果(u,v)上流了一个`$f_{uv}$`，那么引入cost为`$a(u,v)f_{uv}$`。
欠要求从s到t的flow数量恰好是d。我们要min cost `$\sum_{(u,v) \in E} a(u,v) f_{uv}$`

```latex
min \quad \sum_{(u,v) \in E} a(u,v)f_{uv}
subject to
\qquad f_{uv} \le c(u,v)
\qquad \sum_{v \in V} f_{vu} - \sum_{v \in V} f_{uv} =0 for each V-{s,t}
\qquad \sum_{v \in V} f_{sv} - \sum_{v \in V} f_{vs} = d
f_{uv} \ge 0
```

### 4. multicommodity flow
有k种货，每一个有一个s和t。`$f_{iuv}$`是货i从u到v的flow。
`$f_{uv}=\sum_i f_{iuv}$`是叠加flow(aggregate flow)。
每种货物都有一个运量`$d_i$`.
问是否存在这么一个flow

```latex
min 0
subject to
\qquad \sum_{i=1}{k} \le c(u,v)
\qquad \sum f_{iuv} - \sum f_{ivu} = 0 for each i=1~k, u\in V-{s,t}
\qquad \sum_{v \in V} f_{i,s_i,v} - \sum f_{i,v,s_i} = d_i
f_{iuv} \ge 0
```

SIMPLEX (用于slack form)
-----------------------

一个solution is feasible: 所有`$x_i \ge 0$`
basic solution: 右侧nonbasic变量全为0.

开始的几个iteration里，basic solution可能不feasible.

基本思想是，在目标函数时里，找z=cx的c>0的项。这样增加x可以增加z。因为x是0。
然后，在constraints里增加x值，这时basic variable会减小，因为它们表示松驰度，x增大松驰度自然会降。
把x增加到一个basic variable=0为止。x叫做entering variable `$x_e$`。
那个变为0的basic variable叫leaving variable `$x_l$`

用和序来找`$x_e$`就是，对`$a_{ie} > 0$`时，`$\frac{b_i}{a_{ie}}$`最小。
如果`$a_{ie}=0$`，那么`$x_e$`增加对`$x_i$`毫无影响。如果`$a_{ie}<0$`，那`$x_e$`增加`$x_i$`反而增加。
如果每个`$a_{ie}$`都<=0，那么`$x_e$`可以无限增加，该问题自然unbound了。

找到`$x_e$`和`$x_l$`后，要进行PIVOT操作互换它们。
很简单，用`$x_l$`的表达式求出`$x_e$`，然后代入所有其他constraints以及z.

### PIVOT and SIMPLEX procedure
一些小定理：

lemma 29.2: 如果INITIALIZE-SIMPLEX返回的slack form的basic solution可行，那么，
如果SIMPLEX最终返回了一个solution，那么这个solution可行；
如果SIMPLEX返回unbound，那原问题确实是unbound的。

证明可行：对每一次适代，我们有

```latex
\hat{b_e} = \frac{b_l}{a_{ie}}
\hat{b_i} = b_i - a_{ie} \frac{b_e}{a_{ie}}
```

而我们选l时，有`$\frac{b_l}{a_{le}} \le \frac{b_i}{a_{ie}}$`，且`$a_{le} >0$`，
只需证明`$\hat{b_e} \ge 0, \hat{b_i} \ge 0$`

显然`$b_l \ge 0,a_{le}>0$` => `$\hat{b_e} = \frac{b_l}{a_{le}} \ge 0$`
还有`$\hat{b_i} = b_i - a_{ie}\frac{b_e}{a_{le}} \ge b_i - a_{ie}\frac{b_i}{a_{ie}}=0$`

证明unbound见之前的分析。

-----

不terminate的唯一情况是出现cycling: 在SIMPLEX的各个iteration中，存在两个完全相同的slack form.

定理：若对任意`$x_j$`有`$Ax=r+BX$`，有
A=B, r=0

证明： 令x=0 => r=0.令x_i=1=> a_i=b_i

引理：对于一个linear program (A,b,c) as standard form, 其slack form被Ｂ唯一确定。

SIMPLEX如果在`$C_{n+m}^m$`内还不返回，那么它就cycling了。

证明：|B|=m,|N|=n，那么，共有`$C_{n+m}^m$`种slack form.若还不返回，那么就要重复了。

cycling是会出现的，以下两种方法可以避免：在选择`$x_e,x_l$`时：

* perturb the input slightly so that
it is impossible to have two solutions with the same object value
* Bland's rule: choose the variable with the smallest index

Duality
-------

primal:

```latex
max \quad c^Tx
s.t.
\qquad Ax \le b
\qquad x \ge 0
```

dual

```latex
min \quad b^Ty
s.t.
\qquad A^Ty \ge c
\qquad y \ge 0
```

weak lp duality:
对任意`$\overline{x}$`为primal的可行解，`$\overline{y}$`为dual的可行解。有`$c^T\overline{x} \le b^T\overline{y}$`

证明：

```latex
c^T\overline{x} = \sum c_j\overline{x_j}
\le \sum_j (\sum_i a_{ij}\overline{y_i}) \overline{x_j}
= \sum_i (\sum_j a_{ij}\overline{x_j}) \overline{y_i}
\le \sum_i b_i\overline{y_i}
```

引理：若`$c^T\overline{x}=b^T\overline{y}$`,则`$\overline{x},\overline{y}$`分别是两个问题的最优解。

**定理: LP duality**: SIMPLEX return a `$\overline{x}$`。用N,B表示final slack form的N and B.
`$c'$`表示final的系数，\overline{y}的定义：

```latex
\overline{y_i} = -c_{n+i}' if n+i \in N
\qquad 0 otherwise
```

其实等价于`$\overline{y_i}=-c_{n+i}'$`，因为若`$n+i \in B$`，则`$c_{n+i}'=0$`。
也就是`$\overline}{y}=-c_B'$`。这里B是原始的Ｂ。y共m个。

那么有：`$\overline{x},\overline{y}$`分别是primal和dual的optimal solution,而且有`$c^T\overline{x} = b^T\overline{y}$`

证明：只需证明`$c^T\overline{x} = b^T\overline{y}$`

由于`$\overline{x}$`是SIMPLEX返回的，最后的slack form是
`$z=v'+c'^Tx$`
