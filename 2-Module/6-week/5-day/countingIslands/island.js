// //? Standard approach
// function getNeighbors(row, col, matrix) {
//     const neighbors = [];
//     const currNum = matrix[row][col];

//     // Check top
//     if (matrix[row - 1] && matrix[row - 1][col]) {
//         neighbors.push([row - 1, col]);
//     }

//     // Check top-right
//     if (matrix[row - 1] && matrix[row - 1][col + 1]) {
//         neighbors.push([row - 1, col + 1]);
//     }

//     // Check top-left
//     if (matrix[row - 1] && matrix[row - 1][col - 1]) {
//         neighbors.push([row - 1, col - 1]);
//     }

//     // Check bottom
//     if (matrix[row + 1] && matrix[row + 1][col]) {
//         neighbors.push([row + 1, col]);
//     }

//     // Check bottom-right
//     if (matrix[row + 1] && matrix[row + 1][col + 1]) {
//         neighbors.push([row + 1, col + 1]);
//     }

//     // Check bottom-left
//     if (matrix[row + 1] && matrix[row + 1][col - 1]) {
//         neighbors.push([row + 1, col - 1]);
//     }

//     // Check left
//     if (matrix[row][col - 1] && matrix[row][col - 1]) {
//         neighbors.push([row, col - 1]);
//     }

//     // Check right
//     if (matrix[row][col + 1] && matrix[row][col + 1]) {
//         neighbors.push([row, col + 1]);
//     }

//     return neighbors;
// }

// row - 1 w/ col - 1 & col + 1
// row + 1 w/ col - 1 & col + 1
// col - 1 w/ row - 1 & row + 1
// col + 1 w/ row - 1 & row + 1

//? More programmatic / DRYer
function getNeighbors(row, col, matrix) {
    const neighbors = [];

    const rowPositions = [row - 1, row, row + 1];
    const colPositions = [col - 1, col, col + 1];

    for (const currRow of rowPositions) {
        for (const currCol of colPositions) {
            // if (row !== currRow || col !== currCol) {
            //! As long as currRow & currCol are NOT the original row & col
            if (!(row === currRow && col === currCol)) {
                if (matrix[currRow] && matrix[currRow][currCol]) {
                    neighbors.push([currRow, currCol]);
                }
            }
        }
    }

    return neighbors;
}

function countIslands(matrix) {
    // Create a visited set to store visited nodes
    const visited = new Set();

    // Initialize count to 0
    let count = 0;

    // Iterate through all indices in matrix
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            const currNum = matrix[row][col];
            // If an index contains a 1 and has not been visited,
            if (currNum && !visited.has([row, col].toString())) {
                // increment island count and start traversing neighbors
                // DO THE THING (increment island count by 1)
                count++;

                // Initialize a stack with current index //! (or a queue!)
                const queue = [[row, col]];

                // Add stringified version of current index to the visited set
                visited.add([row, col].toString());

                // While stack contains elements
                while (queue.length) {
                    // Pop element from stack
                    const currentNode = queue.shift();

                    // Get valid neighbors of current element
                    // const neighbors = getNeighbors(...currentNode, matrix);
                    const neighbors = getNeighbors(
                        currentNode[0],
                        currentNode[1],
                        matrix
                    );

                    // Iterate over neighbors
                    neighbors.forEach((newNode) => {
                        // If neighbor has not been visited
                        if (!visited.has(newNode.toString())) {
                            // Add neighbor to stack
                            queue.push(newNode);

                            // Mark neighbor as visited
                            visited.add(newNode.toString());
                        }
                    });
                }
            }
        }
    }

    return count;
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];
