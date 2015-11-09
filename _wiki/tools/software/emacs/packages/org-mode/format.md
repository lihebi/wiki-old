---
title: format
---

# hyperlinks
* `[[link][desription]]`
* `[[link]]`

Link type:

* `[[#id]]`
* `[[text search]]`

* `http://xxx`
* `file:/home/xxx`: file, absolute path
* `file:tmp/a.pdf`: relative path
* `file:/hebi@server.com:tmp/a.pdf`: remote
* `/hebi@server.com:tmp/a.pdf`: remote
* `file:a.txt::40`: line number
* `file+sys:/path/to/file`: open via OS, like double click
* `docview:tmp/a.pdf`: open in docview(TODO not working)

Follow link: `C-c C-o`

* `*bold*`
* `/italic/`
* `_underline_`
* `+strike+`

# latex
可以直接写latex, 包括公式。`C-c C-x \`直接转成特殊字符。
