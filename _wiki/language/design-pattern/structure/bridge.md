---
title: Bridge
---

# class diagram
<script type="text/uml" class="uml">
[<abstract>Abstraction | (Window) | Operation()]
[RefinedAbstraction1 | (IconWindow)]
[RefinedAbstraction2 | (OtherWindow)]
[<abstract>Implementor | OoperationImp()]
[ConcreteImplementorA | (XWindowImp) | OperationImp()]
[ConcreteImplementorB | (PWWindowImp) | OperationImp()]

[RefinedAbstraction1]-:>[Abstraction]
[RefinedAbstraction2]-:>[Abstraction]
[ConcreteImplementorA]-:>[Implementor]
[ConcreteImplementorB]-:>[Implementor]
[Abstraction]o->[Implementor]

[Abstraction]--[<note>imp->OperationImp()]
</script>

# implementation
```c++
class Window {
protected:
  WindowImp* GetWindowImp(); // for its subclasses
private:
  WindowImp * m_imp;
};
// implement using abstract factory
Window::GetWindowImp() {
  if (m_imp==0) {
    m_imp = WindowSystemFactory::Instance()->MakeWindowImp();
  }
  return m_imp;
}
class WindowImp {
  virtual void DeviceBitmap() = 0;
};
class XWindowImp : WindowImp {}
IconWindow::Draw() {
  WindowImp * imp = GetWindowImp();
  if (imp != 0) {
    imp->DeviceBitmap();
  }
}
```
