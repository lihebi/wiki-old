---
title: Math
---

证明`$ln(\frac{x+1}{x}) > \frac{1}{1+x}$`
----------------------------------------

证明：

```latex
ln(\frac{x+1}{x}) = ln(x+1) - ln(x) = ln(x)|_x^{x+1} = \int_x^{x+1} \frac{1}{x} dx
```

画图可以看出。
![image](https://farm9.staticflickr.com/8657/15427987273_5b4abb8c30_q.jpg)

求`$\frac{d}{dx} (1+\frac{1}{x}) ^x$`
-------------------------------------

解：

```latex
f(x)=(1+\frac{1}{x})^x
ln(f(x)) = x ln(1+\frac{1}{x})
\frac{f'(x)}{f(x)}=ln(1+\frac{1}{x})+\frac{x}{1+\frac{1}{x}}(-\frac{1}{x^2})
```

`$f(k)$`是单调的，给`$\sum_m^n f(k)$`个bound
-----------------------------------------

1. 如果单增，则`$\int_{m-1}^n f(x) dx \le \sum_m^n f(k) \le \int_m^{n+1} f(x) dx$`
2. 如果单减，则`$\int_m^{n+1}f(x)dx \le \sum_m^n f(k) \le \int_{m-1}^n f(x)dx$`

![image](https://farm8.staticflickr.com/7498/15427981453_032c4621bc_q.jpg)
