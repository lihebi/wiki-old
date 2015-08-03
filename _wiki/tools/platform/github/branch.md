---
title: branch
---

### Create and Delete

* `git branch` # 列出所有分支
* `git branch xxx` # 新建
* `git checkout [branch]` # 切换
* `git push origin [branch]`
* `git checkout -b [branch]` # 新建并切换
* `git branch -d [branch]` # 删除本地分支
* `git branch -D <branch>` # 强制删除没有被merge的分支
* `git push origin --delete [branch]` # 删除remote的分支


不能delete current branch.
在项目的`settings`中可以改变`default branch`
然后再

```
git push origin —delete master
```

### merge

* `git merge [branch]`: merge [branch] into current branch.

### 本地分支和远程分支

创建时关联

```
git checkout -b dev origin/dev
```

后期关联

```
git branch --set-upstream dev origin/dev
```


### 图形查看分支情况

```
git log --graph
```

### Create a new blank branch

```
git checkout --orphan newbranch
git rm -rf .
```
