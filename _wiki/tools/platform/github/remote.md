---
title: remote
---

### add & remove

```
git remote add origin https://github.com/lihebi/xxx.git
git remote rename pb paul # will change remote branch names automatically
git remote rm paul
```

### check

* `git remote`: list all remotes as shortnames
* `git remote -v`: show the URL that git has stored for the shortname
* `git remote show origin`: show detail for origin remote

### fetch

fetch all info that pb has but I don't.

```
git fetch pb
```

now pb's master branch is accessible locally as `pb/master`. Merge it into your branch.

fetch only download. Never merge for you.

`git pull` will do merge.

### push

```
git push
git push origin master
git push -u origin master
```

关于`-u`的解释

使用git push -u origin master以后就可以直接使用不带别的参数的git pull从之前push到的分支来pull。

加上了-u参数，Git不但会把本地的master分支内容推送的远程新的master分支，
还会把本地的master分支和远程的master分支关联起来，在以后的推送或者拉取时就可以简化命令。

所以说,第一次push的时候还是加上`-u`,以后才能用`git push origin master`用的放心.
