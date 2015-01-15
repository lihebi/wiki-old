---
title: Tree
---

middle order traversal's two different implement:

```c
bfs(node) {
  bfs(node->left);
  visit(node);
  bfs(node->right);
}
```

```c
while(stack.size()>0 || node != NULL) {
  if (node) {
    stack.push(node);
    node = node->left;
  } else {
    node = stack.pop();
    visit(node);
    node = node->right;
  }
}
```
