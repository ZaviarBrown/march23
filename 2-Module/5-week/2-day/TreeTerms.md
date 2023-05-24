# Tree Terminology

```js
       A
      / \
     B   C
    / \   \
   D   E   F
```

- `Tree`: Graph with no cycles
- `Binary Tree`: Tree where nodes have at most 2 children
- `Node`: Contains one value and pointers to other nodes
  - `(A)`, `(B)`, `(C)`, `(D)`, `(E)`, `(F)`
- `Edge`: Another name for a pointer
  - (A) `->` (B)
- `Root`: The **ultimate** parent
  - Single node of a tree that can access every other node through edges
  - Does not have a parent
  - `(A)`
- `Internal Node`: A node that has children
  - `(A)`, `(B)`, `(C)`
- `Leaf`: A node that does not have any children
  - `(D)`, `(E)`, `(F)`
- `Path`: A series of nodes that can be traveled through edges
  - `(A)` -> `(B)` -> `(E)`
- `Subtree`: A tree whose root is the child of another node in the tree
- `Branch Node`: A node with at least one child node
- `Level`: The number of edges between a given node and the root node
- `Width`: The number of nodes in a given level
- `Height`: The number of edges between the root node and the bottom-most node
