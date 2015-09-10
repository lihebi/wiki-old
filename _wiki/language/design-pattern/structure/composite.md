---
title: Composite
---

Treat primitive and composite type uniformly recursively.

# class diagram
<script type="text/uml" class="uml">
[Client]
[Component | Operation(); Add(Component); Remove(Component); GetChild(int)]
[Leaf | Operation()]
[Composite | Operation(); Add; Remove; GetChild]

[Leaf]-:>[Component]
[Composite]-:>[Component]
[Composite]children o->[Component]

[Composite]--[<note>for all g in children {g.Operation();}]
</script>
