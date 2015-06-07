---
title: docker example
---

# An example of web app

```
docker run -d -P training/webapp python app.py
```

note:

* `-d`: run the container in background
* `-P`: map any required network ports inside the container to our host.

```
docker ps
```

find the PORT 0.0.0.0:49115->5000/tcp

**49115**

```
boot2docker ip # => 192.168.59.103
```

navigate to `192.168.59.103:49115` to see result.

```
docker logs -f sleepy_hypatia
```

check the webapp's log

* `-f` means watch the output

```
docker top sleepy_hypatia
```

examine the processes running in the container.
