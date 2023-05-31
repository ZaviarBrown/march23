/** Simple Breadth-First Traversal
 * Write a function called printBreadthFirst that will traverse the given graph
 * breadth-first, printing each node when visited exactly once, on a newline.
 */

// const adjList = {
//     1: [2, 5],
//     2: [1, 3, 5],
//     3: [2, 4],
//     4: [3, 5, 6],
//     5: [1, 2, 4],
//     6: [4],
// };

const adjList = {
    1: [2, 5],
    2: [1, 3],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4],
};

// 2, 1, 3, 4, 5, 6

// if (currNode.left) {
//     queue.push(currNode.left);
// }

// if (currNode.right) {
//     queue.push(currNode.right);
// }

//? --------------------------------------------------------------------
//? --------------------------------- First Solution ---------------------------------
//? --------------------------------------------------------------------

function printBreadthFirst(start) {
    const queue = [start];
    //! This
    // const visited = new Set([start])
    //! Or this
    // const visited = new Set(queue);
    //! Or this
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const currNode = queue.shift();

        console.log(currNode);

        const neighbors = adjList[currNode];

        neighbors.forEach((node) => {
            if (!visited.has(node)) {
                queue.push(node);
                visited.add(node);
            }
        });
    }
}

//? --------------------------------------------------------------------
//? --------------------------------- Debug 1 ---------------------------------
//? --------------------------------------------------------------------

// function printBreadthFirst(start) {
//     const queue = [start];
//     const visited = new Set(queue);

//     while (queue.length) {
//         let node = queue.pop();
//         console.log(node);

//         const nextNodes = adjList[node];

//         let i = 0;
//         while (i < nextNodes.length) {
//             if (!visited.has(nextNodes[i])) {
//                 queue.unshift(nextNodes[i]);
//                 visited.add(nextNodes[i]);
//             }
//             i++;
//         }
//     }
// }

//? --------------------------------------------------------------------
//? --------------------------------- Debug 2 ---------------------------------
//? --------------------------------------------------------------------

// const answer = [];
// const queue = [];

// const visited = new Set();

// visited.add(start);
// queue.push(...adjList[start]);
// answer.push(start);

// function printBreadthFirst(start) {
//     const answer = [];
//     const queue = [start];

//     const visited = new Set();

//     while (queue.length) {
//         const currentNode = queue.shift();

//         if (!visited.has(currentNode)) {
//             visited.add(currentNode);
//             queue.push(...adjList[currentNode]);
//             answer.push(currentNode);
//         }
//     }

//     console.log(answer.join(", "));
// }

// console.log("First Test:");
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
// // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:");
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
// // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:");
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
// // One possible solution:  4, 3, 5, 6, 2, 1

console.log("Fourth Test:");
printBreadthFirst(2); // Prints 1 through 6 in Breadth-first order, starting with 2
// One possible solution:  2, 1, 3, 4, 5, 6
