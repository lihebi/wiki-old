---
title: nfs
---

# server

```
systemctl status nfs-server
systemctl start nfs-server
```

/etc/exports

```sh
/path/to/shared/folder IP-or-Host(rw,sync) # apply to this IP
/path/to/shared/folder IP-or-Host (rw,sync) # apply to everything else!, IP is default(ro)
/path/to/shared/folder *(rw) # can use wild card
```

reload if this file changed:

```
systemctl reload nfs-server
```

in firewall setting, enable `nfs`

# client
```
mount server:/path/to/folder /path/to/local/folder
```

must use the same user(UID and GID) as the one on the server to have permission.
