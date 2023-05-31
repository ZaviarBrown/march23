// ADT: properties are specified independently of any implementation
// ? It's an idea, doesn't actually exist in the code

// A data structure is the implementation of an ADT
// ? My LinkedList() class is a data structure

//! All ADT can be structures
//! Depending on who you ask, some structures are not ADT's, but I think that's dumb

// const myAdjLL = {
//     50: ["pears"],
//     pears: [889],
//     889: ["watermelon"],
//     watermelon: [undefined],
// };

// let curr = 50;

// while (curr !== undefined) {
//     console.log(curr);
//     let next = myAdjLL[curr];
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
//     let neighbors = myAdjDLL[curr];
//     // console.log("This is the previous value", neighbors[prev]);
//     curr = neighbors[next];
// }

// console.log("-------Now we're going backwards----------");

// let final = "watermelon";

// while (final !== undefined) {
//     console.log(final);
//     let neighbors = myAdjDLL[final]; // [50, 889]
//     final = neighbors[prev];
// }
// console.log("-------Not in order----------");

// for (const key in myAdjDLL) {
//     console.log(key);
// }

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

// while (stack.length) {
//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     let nextNodes = myAdjBST[currNode];

//     nextNodes.forEach((node) => stack.push(node));
// }

// while (stack.length) {
//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     if (currNode.left) {
//         stack.push(currNode.left);
//     }
//     if (currNode.right) {
//         stack.push(currNode.right);
//     }
// }

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
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
//     console.log("------------New Loop------------");

//     console.log(stack);
//     console.log(visited);
//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     let nextNodes = myAdjBST[currNode];

//     console.log("All neighbors of", currNode, ":", nextNodes);

//     nextNodes.forEach((node) => {
//         if (!visited.has(node)) {
//             stack.push(node);
//             visited.add(node);
//         }
//     });

//     console.log("--After adding--");
//     console.log(stack);
//     console.log(visited);
// }

//? --------------------------------------------------------------------
//? --------------------------------- Without Set ---------------------------------
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
//     console.log("------------New Loop------------");
//     console.log(stack);
//     let currNode = stack.pop();

//     if (target === currNode) return console.log("Found it!!!");

//     let nextNodes = myAdjBST[currNode];
//     console.log("All neighbors of", currNode, ":", nextNodes);

//     nextNodes.forEach((node) => stack.push(node));

//     counter--;
//     console.log("--After adding--");
//     console.log(stack);
// }

//? --------------------------------------------------------------------
//? --------------------------------- Build Your Own AdjList ---------------------------------
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

//? --------------------------------------------------------------------
//? --------------------------------- How Sets Work ---------------------------------
//? --------------------------------------------------------------------

// const visited = new Set([7]);
const queue = [7];
const visited = new Set([queue]);

console.log(visited);
