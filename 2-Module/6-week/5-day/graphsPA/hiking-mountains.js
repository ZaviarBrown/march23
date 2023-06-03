function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i]);
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length - 1].length; i++) {
        if (matrix[matrix.length - 1][i] == 0) {
            starts.push([matrix.length - 1, i]);
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0]);
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length - 1]);
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {
    const neighbors = [];
    const [row, col] = node;
    const currNum = matrix[row][col];

    // Check top
    if (matrix[row - 1] && Math.abs(matrix[row - 1][col] - currNum) <= 1) {
        neighbors.push([row - 1, col]);
    }

    // Check top-right
    if (matrix[row - 1] && Math.abs(matrix[row - 1][col + 1] - currNum) <= 1) {
        neighbors.push([row - 1, col + 1]);
    }

    // Check top-left
    if (matrix[row - 1] && Math.abs(matrix[row - 1][col - 1] - currNum) <= 1) {
        neighbors.push([row - 1, col - 1]);
    }

    // Check bottom
    if (matrix[row + 1] && Math.abs(matrix[row + 1][col] - currNum) <= 1) {
        neighbors.push([row + 1, col]);
    }

    // Check bottom-right
    if (matrix[row + 1] && Math.abs(matrix[row + 1][col + 1] - currNum) <= 1) {
        neighbors.push([row + 1, col + 1]);
    }

    // Check bottom-left
    if (matrix[row + 1] && Math.abs(matrix[row + 1][col - 1] - currNum) <= 1) {
        neighbors.push([row + 1, col - 1]);
    }

    // Check left
    if (matrix[row][col - 1] && Math.abs(matrix[row][col - 1] - currNum) <= 1) {
        neighbors.push([row, col - 1]);
    }

    // Check right
    if (matrix[row][col + 1] && Math.abs(matrix[row][col + 1] - currNum) <= 1) {
        neighbors.push([row, col + 1]);
    }

    return neighbors;
}

//? Stack version
function pathTraversal(node, matrix, visited, peak) {
    const stack = [node];
    visited.add(node.toString());

    while (stack.length) {
        // const currNode = stack.pop();
        // const [row, col] = currNode
        const [row, col] = stack.pop();

        if (matrix[row][col] === peak) return true;

        const neighbors = findNeighbors([row, col], matrix);
        // const neighbors = findNeighbors(currNode, matrix);

        neighbors.forEach((newNode) => {
            if (!visited.has(newNode.toString())) {
                stack.push(newNode);
                visited.add(newNode.toString());
            }
        });
    }

    return false;
}

function identifyPath(mountain) {
    // Find the peak
    const peak = findPeak(mountain);

    // Find the start
    const starts = findStarts(mountain);

    // Traverse from the starts and try to get to the top
    const visited = new Set();

    for (const startingNode of starts) {
        const isValid = pathTraversal(startingNode, mountain, visited, peak);

        if (isValid) return startingNode;
    }
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'

/*************DO NOT MODIFY UNDER THIS LINE ***************/

//? --------------------------------------------------------------------
//? --------------------------------- Find Neighbors ---------------------------------
//? --------------------------------------------------------------------

// const row = node[0]
// const col = node[1];

// if (
//     graph[row - 1] &&
//     (graph[row - 1][col] - currNum === -1 ||
//         graph[row - 1][col] - currNum === 0 ||
//         graph[row - 1][col] - currNum === 1)
// ) {
//     neighbors.push([row - 1, col]);
// }

// const cardiNodes = [
//     [-1, 0], //n
//     [-1, 1], //ne
//     [0, 1], //e
//     [1, 1], //se
//     [1, 0], //s
//     [1, -1], //sw
//     [0, -1], //w
//     [-1, -1], //nw
// ];

// //? Helper function in neighbors
// function findNeighbors(node, matrix) {
//     const answer = [];
//     const nodeZero = node[0];
//     const nodeOne = node[1];
//     //   const starts = findStarts(matrix)
//     //   console.log(`starts are ${starts}`)

//     const check = (nodeZero, nodeOne, matrix) => {
//         if (nodeZero < 0 || nodeOne < 0) return;
//         if (nodeZero > matrix.length - 1 || nodeOne > matrix[0].length - 1)
//             return;
//         const compareTo = matrix[node[0]][node[1]];
//         const compareWith = matrix[nodeZero][nodeOne];

//         if (
//             compareTo === compareWith - 1 ||
//             compareTo === compareWith ||
//             compareTo === compareWith + 1
//         ) {
//             return [nodeZero, nodeOne];
//         }
//     };

//     // Check top
//     let top = check(nodeZero - 1, nodeOne, matrix);

//     if (top) answer.push(top);
//     // Check top right
//     let topRight = check(nodeZero - 1, nodeOne + 1, matrix);
//     if (topRight) answer.push(topRight);
//     // Check right
//     let right = check(nodeZero, nodeOne + 1, matrix);
//     if (right) answer.push(right);
//     // Check bottom right
//     let bottomRight = check(nodeZero + 1, nodeOne + 1, matrix);
//     if (bottomRight) answer.push(bottomRight);
//     // Check bottom
//     let bottom = check(nodeZero + 1, nodeOne, matrix);
//     if (bottom) answer.push(bottom);
//     // Check bottom left
//     let bottomleft = check(nodeZero + 1, nodeOne - 1, matrix);
//     if (bottomleft) answer.push(bottomleft);
//     // Check left
//     let left = check(nodeZero, nodeOne - 1, matrix);
//     if (left) answer.push(left);
//     // Check top left
//     let topLeft = check(nodeZero - 1, nodeOne - 1, matrix);
//     if (topLeft) answer.push(topLeft);
//     // Return neighbors

//     return answer;
// }

//? --------------------------------------------------------------------
//? --------------------------------- Path Traversal ---------------------------------
//? --------------------------------------------------------------------

// //? Queue works too!
// function pathTraversal(node, matrix, visited, peak) {
//     const queue = [node];
//     visited.add(node.toString());

//     while (queue.length) {
//         const [row, col] = queue.shift();

//         if (matrix[row][col] === peak) return true;

//         const neighbors = findNeighbors([row, col], matrix);

//         neighbors.forEach((newNode) => {
//             if (!visited.has(newNode.toString())) {
//                 queue.push(newNode);
//                 visited.add(newNode.toString());
//             }
//         });
//     }

//     return false;
// }
module.exports = [identifyPath, findNeighbors, pathTraversal];
