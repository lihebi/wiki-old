---
title: urllib
---

```py
from urllib import request
import json

url = 'https://api.github.com'
api = '/search/repositories'
query = 'language:C&stars:>10&per_page='+size
response = request.urlopen(url+api+"?q="+query)

s = response.read().decode('utf8')
j = json.loads(s)
# j will be a mix of list and dict
```
