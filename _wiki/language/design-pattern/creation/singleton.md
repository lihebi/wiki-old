---
title: Singleton
---

# implementation
```c++
class Singleton {
public:
  static Singleton* Instance();
protected:
  Singleton();
private:
  static Singleton* m_instance;
};
// implement
Singleton *Singleton::m_instance = 0;
Singleton *Singleton::Instance() {
  if (m_instance == 0) {
    m_instance = new Singleton;
  }
  return m_instance;
}
```
