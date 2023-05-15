# Time For The Real Deal!

## Linked Lists

Linked Lists are data structures that represent a linear sequence of `nodes`
(or `vertices`) and track three important properties:

- `head`: first node in the list
  - Akin to `arr[0]`
- `tail`: last node in the list
  - Akin to `arr[arr.length - 1]`
- `count`: number of nodes in the list
  - Akin to `arr.length`

---

## Node Instance

Each individual instance of a `node` tracks some other important properties as
well:

- `value`: value represented by the node
- `next`: the next node in the list
- `previous`: the previous node in the list
  - More on this in a second!

---

## Linked Lists and Node Instances Working Together

In order to implement a Linked List, you MUST implement the `Node` class as well as the `LinkedList` class.

- `LinkedList`: the container for our data
  - The `detailed` array from our example

```js
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }
}
```

- `Node`: where the actual data lives
  - Each object from our example

```js
class LinkedListNode {
  constructor(value, nextNode) {
    this.value = value;
    this.next = nextNode; // pointer to the next node
  }
}
```

### **Our previous example as a true Linked List**

```js
const node4 = new LinkedListNode("watermelon", null);
const node3 = new LinkedListNode(889, node4);
const node2 = new LinkedListNode("pears", node3);
const node1 = new LinkedListNode(50, node2);

const detailedList = new LinkedList();
detailedList.head = node1;
detailedList.tail = node4;

let curr = detailedList.head;

while (curr) {
  console.log(curr.value);
  curr = curr.next;
}
```

---

## Linked List's Cooler Older Sibling - Doubly Linked Lists

There's one problem with our current node: there's no way home!

We can fix that easily by adding a `previous` pointer:

```js
class LinkedListNode {
  constructor(value, nextNode, previousNode) {
    this.value = value;
    this.next = nextNode;
    this.previous = previousNode;
  }
}
```

### **Benefits**

- `O(1)` time complexity of some methods vs `O(n)` with Single Linked List
- Able to iterate forward and backwards

### **Drawbacks**

- Memory cost: storing a new `previous` pointer for _each_ node
- More complex to implement
  - Each method has to also account for updating `previous`

---

## Linked Lists Data Storage

Arrays store data in a **_contiguous block of memory_**

Linked List elements are stored **_non-contiguously_**

- `next` and `previous` pointers provide ordered functionality
  - Data doesn't need to be physically next to each other in memory!
- Linked List have **NO INDICES** - `O(n)` lookup time
  - We must iterate over the entire list until we find our target node
