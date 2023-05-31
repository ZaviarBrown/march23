/** Degrees of Separation
 * Another common question is the degrees of separation between two nodes.
 * In other words, what is the shortest number of steps you can take to get from
 * one to another.
 */

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: [],
};

function degreesOfSeparation(start, end) {
    const queue = [[start]];
    const visited = new Set(queue);

    while (queue.length) {
        const path = queue.shift();
        const curr = path[path.length - 1];

        if (curr === end) return path.length - 1;

        const neighbors = adjList[curr];

        neighbors.forEach((node) => {
            if (!visited.has(node)) {
                const newPath = [...path, node];
                queue.push(newPath);
                visited.add(node);
            }
        });
    }

    return false;
}

console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
