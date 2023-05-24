# "What if we made linked lists EVEN MORE complicated?" - Some A\*\*h\*le

## `Graphs` vs `Trees`

A `graph` is a collection of `nodes` and `edges` between those nodes

- We've been working with graphs all along!

A `tree` is a `graph` with a `root node`, no cycles, and no nodes with multiple parents

- We've been working with trees all along!
- The `root node` of a tree is the base/top of the tree
  - `this.head` in a linked list

In the image below:

- Each circle is a `node`
- Each blue circle is a `root node`
- Each arrow is an `edge`

<img src="https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/trees/images/graphs.png" width="700">

- Examples 1 and 2 are both `graphs`, `trees`, and `linked lists`
- Example 3 is a `graph` and a `tree`, but not a `linked list` because it has nodes with more than 1 child node
- Example 4 is a `graph`, but it's not a `linked list` or a `tree` because it has nodes with more than one parent
- Example 5 is a `graph`, but it's not a `linked list` or a `tree` because it has a cycle

---

## `Binary Trees`

A `Binary Tree` is a `tree` where the nodes have **_at most_** 2 children

- Examples 1, 2, and 3 are all `Binary Trees`
- An empty `graph` of 0 nodes and 0 edges is technically a `binary tree`
- A `graph` of 1 node and 0 edges is a `binary tree`
- A `linked list` is a `binary tree`

### Using `Binary Trees` in code

Like Linked Lists, we'll need a `treeNode` class

```js
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");

a.left = b;
a.right = c;

//     a
//    / \
//   b   c
```

To construct a `tree` simply create the nodes and set `.left` and `.right` to point to other nodes

- Just like Linked Lists setting a `.next`

## `Binary Search Trees`

> Basically just a way to organize data so that you can eliminate false results without having to take them each into account

If a `Binary Tree` is not ordered, we must traverse the entire tree to search for a value

- Like searching through an array, this would be `O(n)` time complexity

Instead we'd like to perform a `Binary Search`

- As we learned before, this means the tree data must be sorted

### A sorted binary tree is a `Binary Search Tree`

To be a `Binary Search Tree`:

- Every node on the **left must be less** than the value of its `parent`
- Every node on the **right must be greater** than the value of its `parent`
- If the value is the same, the duplicate is usually placed on the right side of the `parent`

### We can search through a `BST` iteratively or recursively

- If the `root` node is `null`, return false
- If the `root` node's value equals the `target`, return true.
- If the `target` is less than the `root` value, search the left `subtree`
- If the `target` is greater than the `root` value, search the right `subtree`

Since this follows our `binary search` approach, this search has a worst-case time complexity of `O(log n)` where `n` is equal to the height of the tree.

### Why bother using a `BST` when we could just use an array?

- Adding to a sorted `array` - Linear `O(n)` time
- Adding to a `BST` - Logarithmic `O(log n)` time

## Inserting and Deleting

Insertion follows a similar pattern to search:

- Check if new value is less than or greater than the `root` node's value
- If less, move to the left node
- If greater, move to the right node
- Once we find `null`, add the new node

Deleting is a bit weirder to envision:

- If the node is a `leaf`, set the `.left` or `.right` of the parent to `null`
- If the node has one child, replace the node with that child
- If the node has two children, either:
  - Find the smallest value in the right subtree of that node
    - Replace the node's value with that value
  - Find the largest value in the left subtree
    - Replace the node's value with that value

```js
     d
   /   \
  b     f
 / \   / \
a   c e   g
```

If we were to delete `d` we could either:

- Find the smallest value in the right subtree
  - Go right from `d`, then keep going left
  - We'll eventually find `e` to replace our root
- Find the largest value in the left subtree
  - Go left from `d`, then keep going right
  - We'll eventually find `c` to replace our root

## Balancing trees

If you start with the lowest number and always add a greater number your tree could end up looking something like this:

```js
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
           \
            7
```

This is a valid tree, but it's unbalanced and inefficient

- This tree would have a search time of `O(n)` because it has to traverse the entire tree to find the value

A balanced version would look something like this:

```js
     4
   /   \
  2     6
 / \   / \
1   3 5   7
```

Balancing a tree is a heavy topic and can be researched on your own since we won't be covering that in this course
