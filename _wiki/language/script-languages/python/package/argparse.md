---
title: argparse
---

```py
import argparse
parser = argparse.ArgumentParser()
parser.add_argument('-q', '--query', help='query github api', required=True)
parser.add_argument('-d', '--download', help='download repos', action='store_true')
args = parser.parse_args()

# args.query = 100
# args.download = True
```
