const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    const results = [];

    for (let i = 1; i <= 10; i++) {
        console.log("Input of:", increment * i);

        console.time("addNums");
        results.push(addNums(increment * i));
        console.timeEnd("addNums");
    }

    return results;
}

function addManyNums10Timing(increment) {
    const results = [];
    const start = increment;
    const end = increment * 10;

    for (let i = start; i <= end; i += increment) {
        console.log("Input of:", i);

        console.time("addManyNums");
        results.push(addManyNums(i));
        console.timeEnd("addManyNums");
    }

    return results;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
