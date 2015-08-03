---
title: tag
---

* `git tag`: 查看tag
* `git tag -l 'v1.4.2.*'`: list only what we want
* `git show <tagname>`: 查看一次tag的详细信息
* `git tag v1.0`: tag current branch's last commit
* `git tag v1.0 <commit ID>`: tag specific commit(need only the first several bits)
* `git tag -a v1.0 -m 'this is a tag'`: annotated tags. `-a` for tag name, `-m` for tag commit
* `git tag -d v1.0`: delete tag
* `git push origin v1.0`: push tag to remote
* `git push origin --tags`: push all tags to remote

若标签已经推送到远程,则删除:

```
git tag -d v1.0
git push origin :refs/tags/v1.0
```
