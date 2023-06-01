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

//? visited = { 1, 2 }

// [1] => 2, 5

// [1, 2] => 1, 3, 5

// [1, 2, 1]

function aShortestPath(start, end) {
    const queue = [[start]];
    const visited = new Set();
    visited.add(start);

    while (queue.length) {
        // console.log("\n\n\n\n\n Next Loop Beings!");
        // console.log("queue =>", queue);
        const path = queue.shift();
        // const currNode = path[path.length - 1];
        const currNode = path.at(-1);

        if (currNode === end) return path;

        const neighbors = adjList[currNode];

        // console.log("--------Adding next options!!!!----------");
        // console.log("current queue =>", queue);
        neighbors.forEach((node) => {
            if (!visited.has(node)) {
                // console.log("Lets add this num next =>", node);
                visited.add(node);
                queue.push([...path, node]);

                // console.log(queue);
                // const copyPath = path.slice();
                // copyPath.push(node);
                // queue.push(copyPath);
            }
        });
    }

    return false;
}

console.log("First Test:");
console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log("Second Test:");
console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log("Third Test:");
console.log(aShortestPath(6, 1)); // -> false
