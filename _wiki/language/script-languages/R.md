---
title: R
---

Install package
===============

Use Rstudio, install, select from local archive.
Download from CRAN website(binary), locate to that package in Rstudio to install.

Trouble shooting
----------------

Error message on mac os x:

```
package 'multicore' is not installed for 'arch=x86_64'
```

Now you need to install from source.
Download source code, then use

```
R --arch x86_64 CMD INSTALL multicore_0.1-3.tar.gz
R --arch=i386 CMD INSTALL --libs-only multicore_0.1-3.tgz
```

As Matthew said at http://www.matthewckeller.com/html/64_bit_r_on_mac.html

> The first command installs the package multicore for 64-bit architecture.
> It will erase any existing ‘multicore’ library that exists at the default location where libraries are installed
> (Library/Frameworks/R.framework/Resources/library).
> The second command installs the package for 32-bit use in case you want that.
> Make sure on the second command to include the --libs-only option or else you’ll erase your 64-bit package
> and replace it with a 32-bit one.
