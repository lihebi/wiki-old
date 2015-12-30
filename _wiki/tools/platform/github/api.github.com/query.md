---
title: github API
---

# useful fields
repo:
```
{
    "id": xxx
    "owner": {
        "login": xxx
        "type": "User"
    },
    "name": "repo-name"
    "full_name": "user/repo"
    "fork": true
    "clone_url": "https:github.com/xxx/xxx.git" # sometimes no clone_url!!
    "forks_count": 9
    "stargazers_count": 90
    "size": 108 (in kb)
    "has_wiki": true
    "pushed_at": "2011-01-26T19:06:43Z"
    "created_at"
    "updated_at"
}
```

user:
* login

# queries

repositories

* `GET /users/:username/repos` list user repositories `[{repo}{repo}]`
* `GET /orgs/:org/repos` list organization repositories `[{repo}{repo}]`
* `GET /repositories` list all public repositories. Do not have count. Page ony support `since`. So, useless.
* `GET /repos/:owner/:repo/languages` list languages, `{"C": 2342, "Python": 342}` number of bytes of code written in that language
* `GET /repos/:owner/:repo/collaborators` list collaborators
* `GET /repos/:owner/:repo/commits` list commits
* `GET /repos/:owner/:repo/forks` list forks

users

* `GET /users/:username`
* `GET /users` get all users
* `GET /users/:username/followers`: list followers
* `GET /users/:username/following`: list followees
