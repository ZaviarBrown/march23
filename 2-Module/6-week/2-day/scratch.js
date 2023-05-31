// const myAdjLL = {
//     50: ["pears"],
//     pears: [889],
//     889: ["watermelon"],
//     watermelon: [undefined],
// };

// let curr = 50;

// while (curr !== undefined) {
//     console.log(curr);
//     let next = myAdjLL[curr]; // ['pears']
//     curr = next[0]; // [0] to key into the first index of the array
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//     }
// }
// class LinkedListNode {
//     constructor(value, nextNode) {
//         this.value = value;
//         this.next = nextNode;
//     }
// }
// const node4 = new LinkedListNode("watermelon", null);
// const node3 = new LinkedListNode(889, node4);
// const node2 = new LinkedListNode("pears", node3);
// const node1 = new LinkedListNode(50, node2);

// const detailedList = new LinkedList();
// detailedList.head = node1;

// let curr = detailedList.head;

// while (curr) {
//     console.log(curr.value);
//     curr = curr.next;
// }

// const simple = [50, "pears", 889, "watermelon"];

// const myAdjDLL = {
//     50: [undefined, "pears"],
//     pears: [50, 889],
//     889: ["pears", "watermelon"],
//     watermelon: [889, undefined],
// };

// let curr = 50;

// const prev = 0;
// const next = 1;

// while (curr !== undefined) {
//     console.log(curr);
//     let neighbors = myAdjDLL[curr]; // ['pears']
//     console.log("The previous value was", neighbors[prev]);
//     curr = neighbors[next]; // [0] to key into the first index of the array
// }

//? --------------------------------------------------------------------
//? --------------------------------- Without Visited ---------------------------------
//? --------------------------------------------------------------------

// const myAdjBST = {
//     4: [2, 6],
//     2: [1, 3, 4],
//     6: [5, 7, 4],
//     1: [2],
//     3: [2],
//     5: [6],
//     7: [6],
// };

// let rootNode = 4;
// let target = 7;

// const stack = [rootNode];

// let counter = 100;

// while (stack.length && counter) {
//     console.log("-----------------New Loop-----------------");
//     console.log(stack);

//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     let nextNodes = myAdjBST[currNode];

//     nextNodes.forEach((node) => stack.push(node));
//     console.log("-------After adding-------");
//     console.log(stack);

//     counter--;
// }

//? --------------------------------------------------------------------
//? --------------------------------- With Visited!!! ---------------------------------
//? --------------------------------------------------------------------

// const myAdjBST = {
//     4: [2, 6],
//     2: [1, 3, 4],
//     6: [5, 7, 4],
//     1: [2],
//     3: [2],
//     5: [6],
//     7: [6],
// };

// let rootNode = 4;
// let target = 7;

// const stack = [rootNode];
// // const visited = new Set(stack);
// const visited = new Set();
// visited.add(rootNode);
// // start with the stack since we're visiting it to begin with

// while (stack.length) {
//     console.log("-----------------New Loop-----------------");
//     console.log(stack);
//     console.log(visited);
//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     let nextNodes = myAdjBST[currNode];

//     nextNodes.forEach((node) => {
//         if (!visited.has(node)) {
//             stack.push(node);
//             visited.add(node);
//         }
//     });
//     console.log("-------After adding-------");
//     console.log(stack);
//     console.log(visited);
// }

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const aSet = new Set();

// aSet.add("hello");
// aSet.add("hello");
// aSet.add("hello");

// console.log(aSet);

// const aSet = new Set(["hello"]);

// aSet.add("hello");
// aSet.add("hello");
// aSet.add("hello");

// console.log(aSet);

//? --------------------------------------------------------------------
//? --------------------------------- Quiz Time!!! ---------------------------------
//? --------------------------------------------------------------------

// const graph1 = {
//     T: ["V"],
//     U: ["V"],
//     V: [],
// };

// const graph2 = {
//     X: ["Y"],
//     Y: ["Z"],
//     Z: ["X"],
// };

// const graph3 = {
//     A: ["B", "C", "E"],
//     B: [],
//     C: ["B", "D"],
//     D: [],
//     E: ["A"],
//     F: ["E"],
// };

// const undirected = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5, 6],
//     5: [1, 2, 4],
//     6: [4],
// };
