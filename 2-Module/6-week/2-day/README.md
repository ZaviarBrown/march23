# The Final Boss Of Mod 2 - Graphs

## Remember, we've been working with graphs this whole time

- Linked Lists are graphs
- Trees are graphs
- Anything with a node and a pointer is a graph

### Up to this point, why have we looked at Linked Lists and Trees?

### Linked Lists

- If our data needed to be ordered like an array, LLs made sense!
  - We specifically wanted a `.next` & `.prev`
  - We specifically wanted a `.head` & `.tail`

### Binary Search Trees

- If our data needed to be sorted quickly and easily, BSTs made sense!
  - We specifically wanted a `.left` & `.right`
  - We specifically wanted a `root` node as our starting point

## But what if we don't need these specific features?

LLs & BSTs are specialized graphs

- Specific solutions to specific problems

Graphs can be used to solve all sorts of problems

- "Standard" graphs can do all the things we've done previously
  - Now we just don't have the same "restrictions" as before
- Bagel Slicer vs Bread Knife

### This means not much has changed, many of the same concepts apply!

- Still uses while loops to traverse
- Still uses Breadth & Depth First Search/Traversals

## Graph Vocabulary

- Vertex: A node in the graph
  - Vertex and node are interchangeable
- Directed edge: A one-way connection from one vertex to another
- Undirected edge/Bidirectional edge: A two-way connection between two vertices that can be traversed in either direction
- Edge weight: The cost of traversing an edge
  - Imagine if the lines/edges in the graph had lengths
- Cyclic: A graph with at least 1 cycle
- Acyclic: A graph with no cycles

---

## New Look, Same Great Taste!

LLs & Trees have specific ways to represent data based on their restrictions

- Their restrictions are a template to build off of
  - Create a class with a `root`
  - Create a node with a `.next`

With graphs, we don't have these restrictions, so we can represent data more freely

- Most commonly seen as `Adjacency Lists` and `Matrices`

## `Adjacency Lists`

Just another way to represent data

- Use a hash map (POJO) to store each node as each key
- Use an array to store each neighboring node as the value

```js
const myAdjList = {
  1: [2],
  2: [1, 3],
  3: [2],
};
```

### That might look scary, so let's look at something we already know

Remember our original `simple` array from when we learned Linked Lists?

```js
const simple = [50, "pears", 889, "watermelon"];
```

After some modifications, `simple` became this hybrid object

```js
const detailed = [
  { value: 50, next: "pears" },
  { value: "pears", next: 889 },
  { value: 889, next: "watermelon" },
  { value: "watermelon", next: undefined },
];
```

Using that same process, we could turn `simple` into an `Adjacency List`!

```js
const myAdjLL = {
  50: { next: "pears" },
  pears: { next: 889 },
  889: { next: "watermelon" },
  watermelon: { next: undefined },
};
```

Or more simply:

```js
const myAdjLL = {
  50: ["pears"],
  pears: [889],
  889: ["watermelon"],
  watermelon: [undefined],
};
```

And of course, we can do the same with a BST

```js
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

const myAdjBST = {
  4: [2, 6],
  2: [1, 3],
  6: [5, 7],
  1: [],
  3: [],
  5: [],
  7: [],
};
```

- **_In this example, why do `1`, `3`, `5`, and `7` all have empty array values?_**

## Traversing a Linked List Adjacency List

Just like before, we can traverse our LL with a `while` loop

- Instead of a `.next`, we simply use our `adjacency list`!

```js
const myAdjLL = {
  50: ["pears"],
  pears: [889],
  889: ["watermelon"],
  watermelon: [undefined],
};

let curr = 50;

while (curr !== undefined) {
  console.log(curr);
  let next = myAdjLL[curr];
  curr = next[0]; // [0] to key into the first index of the array
}
```

---

## `Directed` vs `Undirected`

When it comes to Singly Linked Lists, there's only one direction that we can traverse

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}
class LinkedListNode {
  constructor(value, nextNode) {
    this.value = value;
    this.next = nextNode;
  }
}
const node4 = new LinkedListNode("watermelon", null);
const node3 = new LinkedListNode(889, node4);
const node2 = new LinkedListNode("pears", node3);
const node1 = new LinkedListNode(50, node2);

const detailedList = new LinkedList();
detailedList.head = node1;

let curr = detailedList.head;
```

We can use a Doubly Linked List by adding a `.prev` pointer to allow us to traverse in either direction

```js
class LinkedListNode {
  constructor(value, nextNode, previousNode) {
    this.value = value;
    this.next = nextNode;
    this.prev = previousNode;
  }
}
```

### This is the equivalent of turning a `directed` graph into an `bidirectional` graph

This is how our DLL would look represented as an `adjacency list`

```js
const myAdjDLL = {
  50: [undefined, "pears"],
  pears: [50, 889],
  889: ["pears", "watermelon"],
  watermelon: [889, undefined],
};
```

And as before, we can do the same with our BST

```js
//      4
//    /   \
//   2     6
//  / \   / \
// 1   3 5   7

const myAdjBST = {
  4: [2, 6],
  2: [1, 3, 4],
  6: [5, 7, 4],
  1: [2],
  3: [2],
  5: [6],
  7: [6],
};
```

## The importance of `Visited`

### Now let's say we were Depth First Traversing our BST to find `7`

Instead of a `.left` and `.right`, we simply use our `adjacency list`

```js
const myAdjBST = {
  4: [2, 6],
  2: [1, 3, 4],
  6: [5, 7, 4],
  1: [2],
  3: [2],
  5: [6],
  7: [6],
};

let rootNode = 4;
let target = 7;

const stack = [rootNode];

while (stack.length) {
  let currNode = stack.pop();

  if (target === currNode) return console.log("Found it!!!");

  let nextNodes = myAdjBST[currNode];

  nextNodes.forEach((node) => stack.push(node));
}
```

Running this code results in:

```zsh
Fatal JavaScript invalid size error 144998948
```

What went wrong??? Let's walk through each loop and find out

```js
/**
 * ------------------ First Loop ------------------
 * stack = [4]
 *
 * currNode = stack.pop() => 4
 *
 * is 4 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [2, 6]
 *
 * push into stack => stack = [2, 6]
 *
 * ------------------ Second Loop ------------------
 * stack = [2, 6]
 *
 * currNode = stack.pop() => 6
 *
 * is 6 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [5, 7, 4]
 *
 * push into stack => stack = [2, 5, 7, 4]
 *
 * ------------------ Third Loop ------------------
 * stack = [2, 5, 7, 4]
 *
 * currNode = stack.pop() => 4
 *
 * is 4 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [2, 6]
 *
 * push into stack => stack = [2, 5, 7, 2, 6]
 *
 * ------------------ Fourth Loop ------------------
 * stack = [2, 5, 7, 2, 6]
 *
 * currNode = stack.pop() => 6
 *
 * is 6 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [5, 7, 4]
 *
 * push into stack => stack = [2, 5, 7, 2, 5, 7, 4]
 */
```

## We've found our infinite loop! But how do we fix it?

### Instead of adding **_every_** adjacent node, we only want to add **_new_** adjacent nodes

A `Set()` can help us easily perform this check

```js
const myAdjBST = {
  4: [2, 6],
  2: [1, 3, 4],
  6: [5, 7, 4],
  1: [2],
  3: [2],
  5: [6],
  7: [6],
};

let rootNode = 4;
let target = 7;

const stack = [rootNode];
const visited = new Set(stack); // start with the stack since we're visiting it to begin with

while (stack.length) {
  let currNode = stack.pop();

  if (target === currNode) return console.log("Found it!!!");

  let nextNodes = myAdjBST[currNode];

  nextNodes.forEach((node) => {
    if (!visited.has(node)) {
      stack.push(node);
      visited.add(node);
    }
  });
}
```

### Now let's walk through our improved loops

```js
/**
 * ------------------ First Loop ------------------
 * stack = [4]
 * visited = [4]
 *
 * currNode = stack.pop() => 4
 *
 * is 4 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [2, 6]
 *
 * is 2 inside visited [4] ?
 * Nope! Add it => [4, 2]
 * push into stack => stack = [2]
 *
 * is 6 inside visited [4, 2] ?
 * Nope! Add it => [4, 2, 6]
 * push into stack => stack = [2, 6]
 *
 * ------------------ Second Loop ------------------
 * stack = [2, 6]
 * visited = [4, 2, 6]
 *
 * currNode = stack.pop() => 6
 *
 * is 6 === 7 ?
 * Nope! Keep going
 *
 * nextNodes = [5, 7, 4]
 *
 * is 5 inside visited [4, 2, 6] ?
 * Nope! Add it => [4, 2, 6, 5]
 * push into stack => stack = [2, 5]
 *
 * is 7 inside visited [4, 2, 6, 5] ?
 * Nope! Add it => [4, 2, 6, 5, 7]
 * push into stack => stack = [2, 5, 7]
 *
 * is 4 inside visited [4, 2, 6, 5, 7] ?
 * Yes! Skip it
 * stack = [2, 5, 7]
 *
 * ------------------ Third Loop ------------------
 * stack = [2, 5, 7]
 *
 * currNode = stack.pop() => 7
 *
 * is 7 === 7 ?
 * Yes! Found it!!!
 */
```

---

## Graphs and their `Adjacency Lists`

Let's try to make some `adjacency lists` from graph images

## `Directed`

![graphs](https://s3-us-west-1.amazonaws.com/appacademy-open-assets/data_structures_algorithms/graphs/images/graphs.png)

```js
const graph1 = {
  T: ["V"],
  U: ["V"],
  V: [],
};

const graph2 = {
  X: ["Y"],
  Y: ["Z"],
  Z: ["X"],
};

const graph3 = {
  A: ["B", "C", "E"],
  B: [],
  C: ["B", "D"],
  D: [],
  E: ["A"],
  F: ["E"],
};
```

## `Undirected`

![undirected](https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/computer-science/images/basic_graph.svg)

```js
const undirected = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4],
};
```
