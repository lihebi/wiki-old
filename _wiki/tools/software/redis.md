---
title: redis
---

# Redis

# Install

```
brew install redis
```

# Usage

start server:

```
redis-server
```

start client:

```
redis-cli
```

# Commands

set and get

```
set server:name "fido"
get server:name # => "fido"
```

del and incr

```
set connections 10
incr connections # => 11
incr connections # => 12
del connections
get connections # => (nil)
incr connections # => 1
get connections # => 1
```

expire and ttl

```
ttl resource:lock "Demo"
expire resource:lock 120
```

ttl check the current time left

```
# before set expire
ttl resource:lock # => -1, means it will never expire
# after
ttl resource:lock # => 113
# the time expires
ttl resource:lock # => -2, means the key doesn't exist anymore
```

every time you set a key, its ttl will be reset.

## List

rpush, lpush, llen, lrange, lpop, rpop

```
# push
rpush friends 'Alice'
rpush friends 'Bob'
# push to the start of list
lpush friends 'Cindy'
```

get a range from list

```
lrange friends 0 -1 # get all
lrange friends 0 1 # get first and second
```

```
llen friends # => 3
lpop friends # pop and return
rpop friends
```

## Set

sadd, srem, sismember, smembers, sunion

```
sadd myset 'a'
sadd myset 'b'
sadd myset 'c'
srem myset 'c' # => 1
srem myset 'd' # => 0

sismember myset 'a' # => 1
sismember myset 'c' # => 0

smembers # => 'a' 'b'

sadd set2 'd'
sadd set2 'a'
sunion myset set2 # => 'a' 'b' 'd'
```

## Sorted Set

```
zadd hackers 12 'alice'
zadd hackers 31 'bob'
zadd hackers 11 'cindy'

zrange hackers 2 4
```

They will be sorted by 12, 31, 11

## Hash

```
hset user:1000 name "John"
hset user:1000 email "john@gmail.com"
hset user:1000 password "sfin"

hgetall user:1000
hget user:1000 name
```

set in one line

```
hmset user:1000 name "John" password 'djsf' email 'john@gmail.com'
```

incr

```
hset user:1000 visits 10
hincrby user:1000 visits 1
hincrby user:1000 visits 10
hdel user:1000 visits
hincrby user:1000 visits 1 # => 1
```
