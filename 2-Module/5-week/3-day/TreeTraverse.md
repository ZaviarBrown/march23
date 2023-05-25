# Traversing Trees

## `Preorder` vs. `Inorder` vs `Postorder`

The main difference between these three types of traversals is **when you take action** on the current node

- If we're just printing each value, **taking action** would be `console.log()`
- However, you may do something else depending on the problem

### Think of each `.left` & `.right` as its own **_recursive call_**

### `Preorder Traversal`

```js
console.log(currentNode.val);
currentNode.left;
currentNode.right;
```

### `Inorder Traversal`

```js
currentNode.left;
console.log(currentNode.val);
currentNode.right;
```

### `Postorder Traversal`

```js
currentNode.left;
currentNode.right;
console.log(currentNode.val);
```

---

## `Depth-First`

The above methods are **all** `Depth-First` traversals specific to `Binary Trees`

### Travel as deep as possible before moving to a different branch

- Each one starts at the `currentNode`
- Walks down the left `subtrees`
- Moves back up to the `currentNode`
- Moves down to the right `subtree`
- Walks down the left `subtrees` again
- Repeat until finished

## `Breadth-First`

### Visit each node in a level before moving down to the next level

```js
//     4
//    / \
//   2   6
//  / \   \
// 1   3   7
```

For a `Breadth-First` traversal:

- Visit `4`
- Move to the second level to visit `2` and `6`
- Move to the final level to visit `1`, `3`, `7`

### `Breadth-First Search` **_cannot be executed recursively_**

Instead we use a queue

1. Put the starting node in a queue
2. While the queue is not empty, repeat steps 3-4
3. Dequeue a node and print it
4. Put all of the node's children in the back of the queue

---

## `Depth-First` traversal with a stack

```js
//     4
//    / \
//   2   6
//  / \   \
// 1   3   7
```

Although `Depth-First` traversals are often implemented recursively, you can also do it iteratively with the same steps, except using a stack:

1. Put the starting node on a stack
2. While the stack is not empty, repeat steps 3-4
3. Pop a node and print it
4. Put all of the node's children on the top of the stack

Order of adding children doesn't matter, but are usually added from right to left to search from left to right

- Since we push right then left, we pop left then right
