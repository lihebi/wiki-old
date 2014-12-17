---
title: approximation
---

对于NPC问题，既然我们解决不了，我们可以另辟溪径。有3种方法：

* 当input size很小时，我们可以解出来
* 有些special case可以在P内解出来。
* 可以找一个近似解。near optimal solution

那么，什么是近似解？`$C^*$`

an algorithm for a problem has an approximation ratio of `$\rho(n)$` if:
for input size n, 指标C表示该算法的结果，指标`$C^*$`表示最佳值，那么我们有

`$max(\frac{C}{C^*}, \frac{C^*}{C}) \le \rho(n)$`

比如，满足条件的最大size理论是`$C^*$`，而我的算法得`$C=\frac{C^*}{2}$`。那么`$\rho(n)=2$`。

Vertex-cover
------------

找到一个点的集合，能cover住所有边。要使集合最小。

```
C={}, E'=G.E
while E' != {} {
  pick an arbitrary edge (u,v) in E'
  C += {u,v} // add u and v to C
  从E'中去掉所有和u或v有关的边
}
return C
```

O(V+E)

### 证明这是2-ratio approximation solution:

1. 可以在P内完成。
2. 对于选择的每条边(u,v)，设此集合为A。
那么A中不可能有同一个点出现两次（因为我们每次都会去掉任何有关的边。）
而optimal value是一个vertex cover，那么它一定可以cover A.
所以有`$|C^*| \ge |A|$`.
而我们的`$|C|=2|A|$`。所以有`$|C|=2|A| \le 2|C^*|$`

Traveling-salesman problem
--------------------------

现引入一个三角限制：`$c(u,w) \le c(u,v) + c(v,w)$`

TSP with triangle constraint: NPC, but has 2-approximation solution
TSP without triangle constraint: NPC, and no approximation unless P=NP

```
从G中随便找个点r
以r做prim算法，找最小生成树
此树的先序遍历序列
按序列顺序相连
```

`$O(V^2)$`

### 证明2-approximation

`$H^*$`为最佳值。此`$H^*$`对应的hamilton cycle，减去某一条边，必然得一棵最小生成树。
设T为我们找到的树。显然有`$c(T) < c(H^*)$`.

定义一个full walk W为，遍历中走过的所有的边。这样每条边走过两次，去时一次，回来时一次。
有`$c(W) = 2c(T)$`

![image](https://farm8.staticflickr.com/7575/15998247402_0675174c32_q.jpg)

图中，full walk是: `abcbdbaea`
H是: `abcdea`
对于full walk中，去掉任何一个节点，相当于第三边直接相连了，会减少cost。
所以有`$c(H)<c(W)=2c(T)<2c(H^*)$`

set covering
-------------

X是点的集合，F是一组set。从F中选出一些set，可以cover住X中的所有的点。要求选出的最少。

GREEDY-SET-COVER

```
每次从Ｆ中选出这样一个set，其可以使新增可以cover住的点数最多。
```

### 证明`$\rho(n)$`
`$\rho(n)=H(max{|S|, S \in F})$`

其中`$H(d)=H_d=\sum_{i=1}^d \frac{1}{i}$`, 即Harmonic Number.

证明：我们根据我们的贪娄算法，对每一个点`$x\in X$` assign一个cost `$C_x$`.
每次不是新增cover了n个点吗？那么这几个点平分cost=1。
比如新增两个点，就每个是1/2。这样分完后，我们的结果集`$|\phi|=\sum_{x \in X} c_x$`.
而对于optimal `$\phi^*$`，因为它能cover住X，所以有

`$\sum_{S\in \phi^*} \sum_{x \in S} c_x \ge \sum_{x \in X} c_x = |\phi|$`

我们还会证明`$\sum_{x \in S} c_x \le H(|S|)$`.
这样就有`$|\phi| \le \sum_{S\in \phi^*} H(|S|) \le \sum_{S\in \phi^*} H(max{|S|, S \in F}) = |\phi^*| H(...)$`

下面来证明`$\sum_{x \in S} c_x \le H(|S|)$`

对于任意一个Ｓ，用`$u_i$`表示经过选择`$S_1, S_2, \ldots, S_i$`后，S中还剩下没被cover的数目。
有：`$u_0=|S|$`。也必然存在一个k，使得`$u_k=0$`但`$u_{k-1} \neq 0$`.
k之后的就和S无关了。Ｓ中在`$S_i$`时被新cover的有`$u_i-u_{i-1}$`个。有

`$\sum_{x \in S} c_x = \sum_1^k (u_{i-1}-u_i) \frac{1}{|S_i-(S_1 \vee S_2 \ldots \vee S_{i-1})|}$`

`$S_i$`是增加新cover最多的，所以`$|S_i-(S_1 \vee S_2 \ldots \vee S_{i-1})| \ge |S-(S_1 \vee S_2 \ldots \vee S_{i-1})| = u_{i-1}$`

```latex
\sum_{x \in S} c_x \le \sum_{i=1}^k (u_{i-1}-u_i) \frac{1}{u_{i-1}}
= \sum_1^k \sum_{j=u_i+1}^{u_{i-1}} \frac{1}{u_{i-1}}
\le \sum_1^k \sum_{j=u_i+1}^{u_{i-1}} \frac{1}{j} (because u_{i-1}>j)
= \sum_1^k(\sum_{j=1}^{u_{i-1}} \frac{1}{j} - \sum_{j=1}^{u_i} \frac{1}{j})
= \sum_1^k (H(u_{i-1})-H(u_i))
= H(u_0)-H(u_k) = H(u_0)-H(0)=H(u_0)=H(|S|)
```

### 引理
我们注意到，`$\sum_1^n \frac{1}{i} \le ln(n) +1$`，有`$\rho(n) = (ln{|X|}+1)$`

证明：
`$
\sum_1^n \frac{1}{i} = 1 + \sum_2^n \frac{1}{i} \le 1+ \int_1^n \frac{1}{x} dx = 1+ln(n)
$`

Randomization and Linear Programming
-----------------------------------

Randomization for MAX-3-CNF satisfiability(n个变量，m个clause)

对一个3-CNF部题，我们考虑一个assignment，使为1的clause最多。

解：匀假设一个clause

* 不含`$x_i$`和`$\neg x_i$`
* 至少含1个变量

对每个`$x_i$`，其为1的概率为1/2，为0的概率为1/2.
每个clause里所有变量的取值是相互独立的。
所以第i个clause为1的概率`$E(Y_i) = (1-(1/2)^3) = 7/8$`
为1的clause个数 `$E(Y) = m E(Y_i) = 7m/8$`.
最佳值的上限是m。所以ratio=8/7.

Linear Programming for weighted vertex cover
------------------------------------------

问题：每个点都有一个权值，我们要找一个vertex cover，其权值是所有vertex cover中最小的。

解：用w(v)代表v的权值，x(v)=0: 不在C中 =1: 在C中。其中C为vertex cover

```latex
minimize \quad \sum_{v\in V} w(v)x(v)
subject to
\qquad x(u) + x(v) \ge 1
\qquad x(v) \in {0,1}
```

把它化为连续问题

```latex
minimize \quad \sum_{v\in V} w(v)x(v)
subject to
\qquad x(u) + x(v) \ge 1
\qquad 0 \le x(v) \le 1
```

(1)的解都满足(2)，所以(2)的解是(1)的lower bound.
可以在P内得到(2)的解。

然后如果`$(\overline{x}(v) \ge 1/2)$`，则包括在C中。
因为`$x(u)+x(v) \ge 1$`，则必然有1个是`$\ge 1/2$`的。
故满足(1).

### 证明2-ratio

设`$z^*$`为(2)的解，有`$z^* \le w(C^*)$`
有：

`$
z^* = \sum w(v) \overline{x}(v) \ge \sum_{\overline{x}(v) \ge 1/2} w(v) \frac{1}{2}
= \frac{1}{2} \sum_C w(v) = \frac{1}{2} w(c)
$`

A fully polynomial time approximation scheme for subset sum
-----------------------------------------------------------

Problem: <s,t> 从S中找一个子集，使其sum尽量大，但不大于t。

什么是 `$(1+\epsilon)$`-approximation fully polynomial time approximation scheme:
running time is P to both `$\frac{1}{\epsilon}$` and n.

EXACT-SUBSET-SUM(S,t)

```
let L[i] denote x[0]-x[i]的所有sum可能性(<=t的)。
那么有 L[i] = Merge-List(L[i-1], L[i-1]+x[i])
再去掉L[i]中大于t的。


L[0] = {0}
for i=1 to n
  L[i] = MergeList(L[i-1], L[i-1]+x[i])
  L[i].remove(x[i]>=t)
return largest in L[n]
```

运行时间指数级，因为L[i]可能有2^i个值。

### a fully polynomial time approximation scheme

每次生成L时，对其做一个trim: 对任意一个y，如果L中有一个z使
`$\frac{y}{1+ \delta} \le z \le y$`,则将y删去。

TRIM(L,delta)

```
L' = {y}
last = y
for i = 2 to m
  if y[i] > last * (1+delta)
    L' += y[i]
    last = y[i]
```

APPROX-SUBSET-SUM(S,t,epsilon)

```
L[0] = {0}
for i=1 to n
  L[i] = MergeList(L[i-1], L[i-1]+x[i])
  L[i] = TRIM(L[i], epsilon/2n)
  L[i].remove(x[i]>=t)
return largest in L[n]
```

### 证明此算法是a fully polynomial time approximation scheme

Denote:

* `$z^*$`: 我们的值
* `$y^*$`: 真正的值
* `$P_i$`: `$x_0 ~ x_i$`相加的氖可能性
* `$L_i$`: 迭代中产生的

需要证明：

1. 是`$(1+\epsilon)$`-ratio的
2. running time is P to both `$\frac{1}{\epsilon}$` and n

证明：

#### 1

显然`$z^* < y^*$`.现证明`$\frac{y^*}{z^*} \le 1+\epsilon$`.

我们之后证明，对任意`$y \in P_i$`且`$y \le t$`,存在`$z \in L_i$` that
`$\frac{y}{(1+\frac{\epsilon}{2n})^i} \le z \le y$` (1)

既然对任意y有(1)，则对`$y^* \in P_n$` 也有`$\frac{y^*}{(1+\frac{\epsilon}{2n})^i} \le z \le y$`

所以`$y^*/z \le (1+\delta)^n$`

又`$\forall z \le z^*$`
所以 `$y^*/z^* \le y^*/z \le (1+\delta)^n = (1+\frac{\epsilon}{2n})^n$`

已经有`$y^*/z^* \le (1+\frac{\epsilon}{2n})^n$`
现证明`$\frac{d}{dn} (1+\epsilon/2n)^n >0$`,即单增。

```latex
f(n)=(1+\frac{a}{n})^n
ln(f(n)) = n ln(1+\frac{a}{n})
\frac{f'(n)}{f(n)} = ln(1+\frac{a}{n}) - \frac{a}{n+a}
```
只需证明`$ln(1+a/n) - \frac{a}{n+a} >0$`

```latex
ln(1+\frac{a}{n}) = ln(\frac{n+a}{n}) = ln(x) |_n^{n+a} = \int_n^{n+a} \frac{1}{x}dx
```
由图得`$\int_n^{n+a} \frac{1}{x} dx > \frac{a}{n+a}$`

有结论`$lim_{n->\infty} (1+\frac{\epsilon}{2n})^n = e^{\frac{\epsilon}{2}} \quad (3.14)$`
所以

```latex
(1+\frac{\epsilon}{2n})^n \le e^{\frac{\epsilon}{2}}
\le 1+\frac{\epsilon}{2} + (\frac{\epsilon}{2})^2 \quad (3.13)
\le 1+\epsilon
```

#### 证明(1)

用`$\delta$`代替`$\frac{\epsilon}{2n}$`

假设对i-1，此式成立，即对`$y' \in P_{i-1}$`中<=t的，
存在z使`$\frac{y'}{(1+\frac{\epsilon}{2n})^i} \le z' \le y'$`

那么对i，此时的y有两种可能

1. y是某一个y'

那么对这个y'，在i-1中有一个z'满足上式。在Li中，z'可能没了，但一定有一个`$z \in L_i$`使
`$z \le z' \le (1+\delta)$`

那么我们有, `$y' \ge z' \ge z$`
且`$\frac{y'}{(1+\delta)^i} \le z'/(1+\delta) \le z$`

2. y是某一个`$y'+x_i$`

那么这个y'对应的z'，在Li中，trim之前一定有`$z'+x_i$`
(它不会被trim掉，因为`$z'\le y'$`,而`$y'+x_i$`没被trim)
trim之后，也必然有一个`$z \in L_i$`使
`$z \le z'+x_i \le z(1+\delta)$`

那么我们有`$y=y'+x_i \ge z'+x_i \ge z$`
所以

```latex
\frac{y}{(1+\delta)^i} = \frac{y'+x_i}{(1+\delta)^i} \le \frac{z'}{1+\delta} + \frac{x_i}{(1+\delta)^i} \le \frac{z'}{1+\delta} + \frac{x_i}{1+\delta} \le z
```

#### 2
因为trim的原因，那么在Li中两个数之间要大于`$1+\frac{\epsilon}{2n}$`倍。
所以Li中共有`$\lfloor log_{1+\frac{\epsilon}{2n}} t \rfloor+2$`个数（加0和1）。

```latex
log_{1+\frac{\epsilon}{2n}} t +2 = \frac{ln(t)}{ln(1+\frac{\epsilon}{2n})} +2
\le \frac{2n(1+\frac{\epsilon}{2n})ln(t)}{\epsilon} +2
\le \frac{3nln(t)}{\epsilon}+2
```
