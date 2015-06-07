---
title: docker file
---

# Dockerfile

sample dockerfile:

```docker
# this is a comment
FROM ubuntu:14.04
MAINTAINER Hebi Li <hebi@example.com>
RUN apt-get update && apt-get install -y ruby ruby-dev
RUN gem install sinatra
```

build the image

```
docker build -t="lihebi/sinatra:v2" .
```

* `v2` is optional tag
* `.` means the dockerfile is in current folder

then push to dockerhub

```
docker push lihebi/sinatra
```
