---
title: thread
---

```py
from threading import Thread

class myThread(Thread):
  def __init__(self, arg):
    Thread.__init__(self)
    self.arg = arg
  def run(self):
    # do something

t = myThread(arg)
t.start()
```
