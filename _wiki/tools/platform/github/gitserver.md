---
title: 搭建git服务器
---

### 搭建

```
sudo apt-get install git
sudo adduser git
```

收集用户的公钥(`id_rsa.pub`),导入`/home/git/.ssh/authorized_keys`,一行一个

初始化git仓库

```
cd /srv
sudo git init --bare sample.git
sudo chown -R git:git sample.git
```

在`/etc/password`中设置git用户不允许登陆shell

### 使用

```
git clone git@server:/srv/sample.git
```
