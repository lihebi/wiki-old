---
title: 版本回退
---

### change last commit
* `git commit --amend`: editor open with the pervious commit. It will overwrite the previous one.

Can be used for add more file for last commit:

```
git add forgotten_file
git commit --amend
```

### discard changes in working directory (DANGEROUS!!)

使用`HEAD`(版本库)中最新的内容替换此文件。已添加到缓存区和新文件不受影响。

Use when changed a file, but didn't add it. Now you want to discard the change.

```
git checkout -- [filename]
```

### Unstage a file

When you add a file, but want to cancel the add. The file will not be changed.

```
git reset HEAD <filename>
```

### 丢弃本地所有的改动与提交

到服务器上获取最新版本，并将本地主分支指向它。

```
git fetch origin
git reset --hard origin/master
```

### 整个本地版本库重置

```
# 获取commit id
git log
git log --pretty=oneline --abbrev-commit
# 执行reset
git reset --hard <tag/branch/commit id> # commit ID 不必写全,写前几个字母就行了.
```

`git push`后，`reset —hard`再`push`会出错。提示要`git pull`

也可以使用相对版本.`HEAD`是当前版本.`HEAD^`是上一个版本.`HEAD^^`是上上个版本.`HEAD~100`上上100个版本.

```
git reset --hard HEAD^
```

后悔了,还是把reset之前的状态找回来把.

```
git reflog # 列出每一次命令的commit 和 id
git reset --head <commit ID>
```

### Ignore changes on some files or directory
I have some files that have been tracked, but I don't want to commit its change.

```
git update-index --assume-unchanged <file>
```

It can not be used on directories. Then you can do:

```
git update-index --assume-unchanged $(git ls-files | tr '\n' ' ')
```

or

```
git ls-files | tr '\n' ' ' | xargs git update-index --assume-unchanged
```

But If file name contains blank:

```
git ls-files -z | xargs -0 git update-index --assume-unchanged
```

list the files that is ignored:

```
git ls-files -v|grep '^h'
```

go back

```
git update-index --no-assume-unchanged <file>
```

add shortcuts

```
git config --global alias.ignore update-index --assume-unchanged
git config --global alias.notice update-index --no-assume-unchanged
```
