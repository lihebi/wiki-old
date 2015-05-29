---
title: Java File I/O
---

`java.nio.file`

Path
----

```java
Path p1 = Paths.get("/tmp/foo");
Path p5 = Paths.get(System.getProperty("user.home"),"logs", "foo.log");
```

### Path info

* path.toString());
* path.getFileName());
* path.getName(0));
* path.getNameCount());
* path.subpath(0,2));
* path.getParent());
* path.getRoot());

### join path

```java
Path p1 = Paths.get("/home/joe/foo");
p1.resolve("bar") // => /home/joe/foo/bar

// Passing an absolute path to the resolve method returns the passed-in path
Paths.get("foo").resolve("/home/joe"); // => /home/joe
```

### Test file

* `Files.exists(path)`
* `Files.notExists(path)`

* `Files.isRegularFile(file)`
* `Files.isReadable(file)`
* `Files.isExecutable(file)`
* `Files.isDirectory(Path, LinkOption)`
* `Files.isSymbolicLink(Path)`

### manipulate file
* `Files.delete(path)`
* `Files.deleteIfExists(Path)`

* `Files.copy(source, target, REPLACE_EXISTING)`
* `Files.move(source, target, REPLACE_EXISTING)`
