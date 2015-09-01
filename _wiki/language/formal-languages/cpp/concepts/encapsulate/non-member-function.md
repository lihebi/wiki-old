---
title: non-member function
---

```c++
void clearBrowser(WebBrowser& wb) {
  wb.clearCache();
  wb.clearHistory();
  wb.removeCookies();
}
class WebBrowser {
public:
  void clearCache();
  void clearHistory();
  void removeCookies();
  void clearEverything();
};
```

Prefer use the non-member function,
because then less function can have access to private data,
thus better encapsulate.

## A common pattern

Putting all convenience functions in multiple header files,
but one namespace.

`webbrowser.h`

```c++
namespace WebBrowserStuff {
  class WebBrowser {...};
  void clearBrowser(WebBrowser& wb);
  // ...
}
```

`webbrowserbookmarks.h`

```c++
namespace WebBrowserStuff {
  // bookmark related functions
}
```
