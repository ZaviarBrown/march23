/**
 * [
 * [1, 2],
 * [3, 4],
 * [5, 6]
 * ]
 *
 * [
 * [1, 2],
 * [3, 4],
 * ]
 *
 * [
 * [1, 2],
 * [3],
 * [5, 6]
 * ]
 *
 * [[1]]
 */

// const matrix = [
//     /*column   0, 1, 2, 3, 4*/
//     /*row 0*/ [1, 1, 1, 0, 0],
//     /*    1*/ [0, 1, 1, 0, 1],
//     /*    2*/ [0, 1, 1, 0, 1],
// ];

// [1, 2, 3];

// //? Top
// if (row !== 0 && row < graph.length && graph[row - 1][col] === 1) {
//     neighbors.push([row - 1, col]);
// }

// //? Bottom
// if (row + 1 > 0 && row + 1 < graph.length && graph[row + 1][col] === 1) {
//     neighbors.push([row + 1, col]);
// }

// //? Left
// if (col !== 0 && col < graph[0].length && graph[row][col - 1] === 1) {
//     neighbors.push([row, col - 1]);
// }

// //? Right
// if (col >= 0 && col + 1 < graph[0].length && graph[row][col + 1] === 1) {
//     neighbors.push([row, col + 1]);
// }

//! Good check to make but doesn't pass our specs :(
// if (!graph[row] || !graph[row][col]) return "Not a valid starting point";

function getNeighbors(row, col, graph) {
    const neighbors = [];
    // currNode = [1, 1]

    // Check top
    if (graph[row - 1] && graph[row - 1][col]) neighbors.push([row - 1, col]);

    // Check bottom
    if (graph[row + 1] && graph[row + 1][col]) neighbors.push([row + 1, col]);

    // Check left
    if (graph[row][col - 1]) neighbors.push([row, col - 1]);

    // Check right
    if (graph[row][col + 1]) neighbors.push([row, col + 1]);

    return neighbors;
}

function islandSize(row, col, graph) {
    // Create a visited set to store visited nodes
    const visited = new Set();

    // Create a stack, put the starting node in the stack
    const stack = [[row, col]];

    // Put the stringified starting node in visited
    visited.add(`${[row, col]}`);
    visited.add([row, col].toString());
    visited.add(String([row, col]));

    // Initialize size to 0
    let size = 0;

    // While the stack is not empty,
    while (stack.length) {
        // Pop the first node
        const firstNode = stack.pop();

        // const [currRow, currCol] = stack.pop();

        // DO THE THING (increment size by 1)
        size++;

        // Get all neighbors of current node
        const neighbors = getNeighbors(...firstNode, graph);

        neighbors.forEach((newNode) => {
            // Check for UNVISITED neighbors
            if (!visited.has(newNode.toString())) {
                // Push them to the top of the stack
                stack.push(newNode);

                // And mark them as visited
                visited.add(newNode.toString());
            }
        });

        console.log(visited);
    }
    return size;
}

//! No destructure
// const firstNode = stack.pop();
// // ---------------------------      row         col
// const neighbors = getNeighbors(firstNode[0], firstNode[1], graph);

//! Destructure on separate line
// const firstNode = stack.pop();
// const [currRow, currCol] = firstNode;
// const neighbors = getNeighbors(currRow, currCol, graph);

//! Destructure immediately
// const [currRow, currCol] = stack.pop();
// const neighbors = getNeighbors(currRow, currCol, graph);

// HINT: This is what your helper function `getNeighbors` is for
// HINT: Remember, you're storing your visited nodes as strings!

module.exports = [getNeighbors, islandSize];

//! With JSON so whatever don't look i guess
// function islandSize(row, col, graph) {
//     // Create a visited set to store visited nodes
//     const visited = new Set();

//     // Create a stack, put the starting node in the stack
//     const stack = [[row, col]];

//     // Put the stringified starting node in visited
//     visited.add(JSON.stringify([row, col]));

//     // Initialize size to 0
//     let size = 0;

//     // While the stack is not empty,
//     while (stack.length) {
//         // Pop the first node
//         const firstNode = stack.pop();

//         // const [currRow, currCol] = stack.pop();

//         // DO THE THING (increment size by 1)
//         size++;

//         // Get all neighbors of current node
//         const neighbors = getNeighbors(...firstNode, graph);

//         neighbors.forEach((newNode) => {
//             // Check for UNVISITED neighbors
//             if (!visited.has(JSON.stringify(newNode))) {
//                 // Push them to the top of the stack
//                 stack.push(newNode);

//                 // And mark them as visited
//                 visited.add(JSON.stringify(newNode));
//             }
//         });
//     }
//     return size;
// }
