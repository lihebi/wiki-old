---
title: find
---

Copy file based on find, and take care of quotes and spaces:

```sh
find CloudMusic -type f -name "*mp3" -exec cp "{}" all_music \;
```
