---
title: latex
---

Installation on Mac
-------------------

```
/Library/TeX/texbin/
```

## Components

### enumerate

```latex
\begin{enumerate}
  \item xxx
  \item xxx
  \item xxx
\end{enumerate}
```

### itemize

```latex
\begin{itemize}
  \item like this,
  \item and like this.
\end{itemize}
```

### description

```latex
\begin{description}
  \item[Word] Definition
  \item[Concept] Explanation
  \item[Idea] Text
\end{description}
```

### table

```latex
\begin{table}
\centering
\begin{tabular}{l|r}
Item & Quantity \\\hline
Widgets & 42 \\
Gadgets & 13
\end{tabular}
\caption{\label{tab:widgets}An example table.}
\end{table}
```

### figure

```latex
\begin{figure}
  \centering
  \includegraphics[width=0.3\textwidth]{frog.jpg}
  \caption{\label{fig:frog}This frog was uploaded to writeLaTeX via the project menu.}
\end{figure}
```

`figure*` can make the figure two column

## small things

label:

```
\label{xxx}
\ref{xxx}

\label{xx:yy}
\ref{xx:yy}
```

## 在latex中写中文

`fc-list` 可以查看当前安装的字体。

```
\documentclass{article}
\usepackage{fontspec}
\setromanfont{LiHei Pro} % 俪黑Pro
\setmonofont{Courier New} % 等宽字型
\XeTeXlinebreaklocale "zh"
\XeTeXlinebreakskip = 0pt plus 1pt

\begin{document}

在Mac下的XeTeX里写中文~

\end{document}
```

其中有两行line break的设定是为了解决XeTeX中文的断行问题，
其余的部份就是用fontspec package来设定字型。
romanfont是默认使用的字型，
monofont是默认的等宽字，不指定的话只要用到等宽字就会看到乱码

要用xelatex编译

## in-pdf comment

Comments can be added to the margins of the document using the `\todo{Here's a comment in the margin!}` todo command, as shown in the example on the right. You can also add inline comments:

`\todo[inline, color=green!40]{This is an inline comment.}`


# How to install a sty and cls file globally?
On Mac OS X, Put it in:

```
/Users/hebi/Library/texmf/tex/latex/local/fse/acmcopyright.sty
/Users/hebi/Library/texmf/tex/latex/local/fse/sig-alternate-05-2015.cls
```

Then you can just use `\documentclass{sig-alternate-05-2015}`.

I actually didn't do any update of database, and it works.
To see it works, use `kpsewhich sig-alternate-05-2015.cls`, and it output the path of the cls file.
If you really need to update database, `texhash` will do the trick.
Also note `mktexlsr` may also do this.

On linux, it should be `~/texmf/tex/latex/local/`

The global way should be: `/usr/local/texlive/texmf-local/tex/latex/local/`

See also: http://tex.stackexchange.com/questions/1137/where-do-i-place-my-own-sty-or-cls-files-to-make-them-available-to-all-my-te
