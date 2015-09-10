---
title: Proxy
---

* virtual proxy: defer expensive creation of objects on demand.
* smart reference: count and check the ref number. Smart pointer.

Control access to an object.

# class diagram
<script type="text/uml" class="uml">
[<abstract>Subject | Request()]
[RealSubject | Request()]
[Proxy | Request()]

[RealSubject]-:>[Subject]
[Proxy]-:>[Subject]
[Proxy]realSubject ->[RealSubject]

[Proxy]--[<note>...
realSubject->Request()
...]
</script>
