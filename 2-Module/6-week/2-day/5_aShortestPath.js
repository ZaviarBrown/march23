/** A Shortest Path
 * One of the most common uses of a breadth-first search is to find a shortest
 * path from one node to another.  Copy and paste your breadth-first search here
 * and refactor it to use the technique from the reading.  If it is possible to
 * reach end from start, return a shortest path.  Otherwise, return false.
 */

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: [],
};

function aShortestPath(start, end) {
    // your code here
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
