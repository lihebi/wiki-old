---
title: Adapter
---
How classes and objects are composed to form larger structures.

# class diagram
## object adapter
<script type="text/uml" class="uml">
[Client]
[Target | Request()]
[Adapter | Request()]
[Adaptee | SpecificRequest()]

[Client]->[Target]
[Adapter]-:>[Target]
[Adapter]adaptee->[Adaptee]

[Adapter]--[<note>Adapter->SpecificRequest()]

</script>

## class adapter
<script type="text/uml" class="uml">
[Client]
[Target | Request()]
[Adapter | Request()]
[Adaptee | SpecificRequest()]

[Client]->[Target]
[Adapter]-:>[Target]
[Adapter]implementation-:>[Adaptee]

[Adapter]--[<note>SpecificRequest()]

</script>
