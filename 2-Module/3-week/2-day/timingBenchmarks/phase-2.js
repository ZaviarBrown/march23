const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
    const results = [];

    for (let i = 1; i <= 10; i++) {
        results.push(addNums(increment * i));
    }

    return results;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    const results = [];
    const start = increment;
    const end = increment * 10;

    for (let i = start; i <= end; i += increment) {
        results.push(addManyNums(i));
    }

    return results;
}

module.exports = [addNums10, addManyNums10];
