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

// [1] => [1, 2] && [1, 5]

// [1, 2] => [ 1, 2, 3]

// This works!
function aShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const path = queue.shift();
        const curr = path[path.length - 1];

        if (curr === end) return path;

        const neighbors = adjList[curr];

        neighbors.forEach((num) => {
            if (!visited.has(num)) {
                const copyPath = path.slice();
                copyPath.push(num);
                queue.push(copyPath);
                visited.add(num);
            }
        });
    }

    return false;
}

// This works too!
function aShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        const path = queue.shift();
        const curr = path.at(-1);

        const neighbors = adjList[curr];

        for (const num of neighbors) {
            if (num === end) {
                return [...path, num];
            }
            if (!visited.has(num)) {
                queue.push([...path, num]);
                visited.add(num);
            }
        }
    }

    return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
