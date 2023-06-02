const example = [
    /*column     0  1  2  3  4*/
    /*row   0*/ [1, 1, 1, 0, 0],
    /*      1*/ [0, 1, 1, 0, 1],
    /*      2*/ [0, 1, 1, 0, 1],
];

// if (row < 0 || row >= graph.length || graph[row][col] === 0)
//     return "Invalid starting position";

function getNeighbors(row, col, graph) {
    const neighbors = [];

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

// //! Helper functions are awesome
// function getNeighbors(row, col, matrix) {
//     const answer = [];
//     const check = (row, col, matrix) => {
//         if (row < 0 || col < 0) return;
//         if (row > matrix.length - 1 || col > matrix[0].length - 1) return;
//         const location = matrix[row][col];
//         if (location === 1) return [row, col];
//     };

//     // Check top
//     let top = check(row - 1, col, matrix);
//     if (top) answer.push(top);
// }

// //! Offsets are awesome
// function getNeighbors(row, col, graph) {
//     // size of matrix
//     let rows = graph.length;
//     let cols = graph[0].length;
//     let neighbors = [];

//     //direction that the function will look for neighbors
//     const offsets = [
//         [-1, 0],
//         [1, 0],
//         [0, -1],
//         [0, 1],
//     ];

//     // check if there is a valid neighbor in that direction If so add it to the list
//     for (let offset of offsets) {
//         // set position of neighbor
//         let newRow = row + offset[0];
//         let newCol = col + offset[1];

//         // If the potential position is within the boundaries of the matrix and is a 1
//         if (
//             newRow >= 0 &&
//             newRow < rows &&
//             newCol >= 0 &&
//             newCol < cols &&
//             graph[newRow][newCol] === 1
//         ) {
//             neighbors.push([newRow, newCol]);
//         }
//     }
//     return neighbors;
// }

function islandSize(row, col, graph) {
    // Create a visited set to store visited nodes
    const visited = new Set();

    // Create a stack, put the starting node in the stack
    const stack = [[row, col]];

    // Put the stringified starting node in visited
    visited.add(`${[row, col]}`);
    visited.add([row, col].toString());

    // Initialize size to 0
    let size = 0;

    // While the stack is not empty,
    while (stack.length) {
        // Pop the first node
        const firstNode = stack.pop();

        // DO THE THING (increment size by 1)
        size++;

        // Get all valid neighbors
        const neighbors = getNeighbors(...firstNode, graph);

        // For each UNVISITED neighbor
        neighbors.forEach((newNode) => {
            if (!visited.has(newNode.toString())) {
                // Push to the top of the stack
                stack.push(newNode);

                // and mark them as visited
                visited.add(newNode.toString());
            }
        });
    }

    return size;
}

// //! No destructure
// const firstNode = stack.pop();
// const neighbors = getNeighbors(firstNode[0], firstNode[1], graph);

// //! Destructure on next line
// const firstNode = stack.pop();
// const [newRow, newCol] = firstNode;
// const neighbors = getNeighbors(newRow, newCol, graph);

// //! Destructure immediately
// const [newRow, newCol] = stack.pop();
// const neighbors = getNeighbors(newRow, newCol, graph);

// HINT: This is what your helper function `getNeighbors` is for
// HINT: Remember, you're storing your visited nodes as strings!

//! Recursive is awesome
// function islandSize(row, col, graph) {
//     //  size of matrix
//     let rows = graph.length;
//     let cols = graph[0].length;

//     // If the cell is outside the boundaries of the matrix or is a 0 return 0
//     if (
//         row < 0 ||
//         col < 0 ||
//         row >= rows ||
//         col >= cols ||
//         graph[row][col] === 0
//     ) {
//         return 0;
//     }

//     // Mark the current cell as visited by changing its value to 0
//     graph[row][col] = 0;
//     let size = 1;
//     let neighbors = getNeighbors(row, col, graph);

//     // For each neighbor recursively get the size of the island and add it to the current island size
//     for (let neighbor of neighbors) {
//         size += islandSize(neighbor[0], neighbor[1], graph);
//     }
//     return size;
// }

module.exports = [getNeighbors, islandSize];
