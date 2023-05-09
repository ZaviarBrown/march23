const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
    const finalArr = [];

    for (let i = 1; i <= 10; i++) {
        const newVal = i * increment;

        finalArr.push(addNums(newVal));
    }

    return finalArr;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
    const finalArr = [];
    const start = increment;
    const end = increment * 10;

    for (let i = start; i <= end; i += increment) {
        finalArr.push(addManyNums(i));
    }

    return finalArr;
}

module.exports = [addNums10, addManyNums10];
