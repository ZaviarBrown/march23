# Traversals In Depth

## `Pre-Order` Traversal: `root, left, right`

### **Print as we visit a node for the first time**

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Binary_tree_depth-first-traversal.svg" width="500">

### Following the `red` arrow

- Start with a `currentNode` that is the root of the tree
- `console.log()` the `currentNode.value` ---> `(5)`
- Reassign `currentNode` to `currentNode.left` === `2`
- `console.log()` the `currentNode.value` ---> `(2)`
- Repeat until there is no longer a `.left`
- Once complete the logs will be:

  ```js
  5, 2, 1, 0, ...?
  ```

- There's no longer a `.left`, so look for the first node with a `.right`
- We'll arrive at `(2)` and see it has a `.right` of `(4)`
- Reassign `currentNode` to `currentNode.right` === `4`
- `console.log()` the `currentNode.value` ---> `(4)`
- Reassign `currentNode` to `currentNode.left` === `3`
- `console.log()` the `currentNode.value` ---> `(3)`
- Once complete the logs will be:

  ```js
  5, 2, 1, 0, 4, 3, ...?
  ```

- There's no longer a `.left`,so look for the first node with a `.right`
- We'll arrive at `(5)` and see it has a `.right` of `(8)`
- Reassign `currentNode` to `currentNode.right` === `8`
- `console.log()` the `currentNode.value` ---> `(8)`
- Reassign `currentNode` to `currentNode.left` === `6`
- `console.log()` the `currentNode.value` ---> `(6)`
- There's no longer a `.left` but there is a `.right`
- Reassign `currentNode` to `currentNode.right` === `7`
- `console.log()` the `currentNode.value` ---> `(7)`
- There's no longer a `.left`,so look for the first node with a `.right`
- We'll arrive at `(8)` and see it has a `.right` of `(9)`
- Reassign `currentNode` to `currentNode.right` === `9`
- `console.log()` the `currentNode.value` ---> `(9)`
- Now finally complete, the logs will be:

  ```js
  5, 2, 1, 0, 4, 3, 8, 6, 7, 9, x...;
  ```

---

## `In-Order traversal: left, root, right`

### **Print as we visit the leftmost node possible**

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Binary_tree_depth-first-traversal.svg" width="500">

### Following the `green` arrow

- Start with a `currentNode` that is the root of the tree
- Go as left as possible
- Reassign `currentNode` to `currentNode.left` === `2`
- Reassign `currentNode` to `currentNode.left` === `1`
- Reassign `currentNode` to `currentNode.left` === `0`
- We can't go any further left
- `console.log()` the `currentNode.value` ---> `(0)`
- Check if there's a `.right`, there's not so go back up
- We've already gone left
- `console.log()` the `currentNode.value` ---> `(1)`
- Check if there's a `.right`, there's not so go back up
- We've already gone left
- `console.log()` the `currentNode.value` ---> `(2)`
- Check if there's a `.right`, there is so go right
- Reassign `currentNode` to `currentNode.right` === `4`
- Go as left as possible
- Reassign `currentNode` to `currentNode.left` === `3`
- We can't go any further left
- `console.log()` the `currentNode.value` ---> `(3)`
- Check if there's a `.right`, there's not so go back up
- We've already gone left
- `console.log()` the `currentNode.value` ---> `(4)`
- Once complete the logs will be:

  ```js
  0, 1, 2, 3, 4, ...?
  ```

- There's no longer a `.left`, so go back up
- We'll arrive at `(5)`
- `console.log()` the `currentNode.value` ---> `(5)`
- Check if there's a `.right`, there is so go right
- Reassign `currentNode` to `currentNode.right` === `8`
- Go as left as possible
- Reassign `currentNode` to `currentNode.left` === `6`
- We can't go any further left
- `console.log()` the `currentNode.value` ---> `(6)`
- Check if there's a `.right`, there is so go right
- Reassign `currentNode` to `currentNode.right` === `7`
- We can't go any further left
- `console.log()` the `currentNode.value` ---> `(7)`
- Check if there's a `.right`, there's not so go back up
- We've already seen `6` so go back up
- We've already gone left
- `console.log()` the `currentNode.value` ---> `(8)`
- Check if there's a `.right`, there is so go right
- Reassign `currentNode` to `currentNode.right` === `9`
- We can't go any further left
- `console.log()` the `currentNode.value` ---> `(9)`
- Once complete the logs will be:

  ```js
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, x;
  ```

---

## `Post-Order` Traversal: `left, right, root`

### **Print as we visit a node with no new children**

<img src="https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/Binary_tree_depth-first-traversal.svg" width="500">

### Following the `blue` arrow

- Start with a `currentNode` that is the root of the tree
- Go as left as possible, then as right as possible
- Reassign `currentNode` to `currentNode.left` === `2`
- Reassign `currentNode` to `currentNode.left` === `1`
- Reassign `currentNode` to `currentNode.left` === `0`
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(0)`
- Go up and since we've gone left, check if we can go right
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(1)`
- Go up and since we've gone left, check if we can go right
- Reassign `currentNode` to `currentNode.right` === `4`
- Go as left as possible, then as right as possible
- Reassign `currentNode` to `currentNode.left` === `3`
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(3)`
- Go up and since we've gone left, check if we can go right
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(4)`
- Go up and we can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(2)`
- Once complete the logs will be:

  ```js
  0, 1, 3, 4, 2, ...?
  ```

- Go up and we'll arrive at `(5)`
- We can't go any further left so go right
- Reassign `currentNode` to `currentNode.right` === `8`
- Go as left as possible, then as right as possible
- Reassign `currentNode` to `currentNode.left` === `6`
- We can't go any further left so go right
- Reassign `currentNode` to `currentNode.right` === `7`
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(7)`
- Go up and we can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(6)`
- Go up and since we've gone left, check if we can go right
- Reassign `currentNode` to `currentNode.right` === `9`
- We can't go any further left so go right
- Reassign `currentNode` to `currentNode.right` === `x`
- We can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(x)`
- Go up and we can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(9)`
- Go up and we can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(8)`
- Go up and we can't go any further left or right
- `console.log()` the `currentNode.value` ---> `(5)`
- Once complete the logs will be:

  ```js
  0, 1, 3, 4, 2, 7, 6, x, 9, 8, 5;
  ```
