const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
    const finalArr = [];

    for (let i = 1; i <= 10; i++) {
        const newVal = i * increment;

        // let startTime = Date.now();
        console.time("addNums");

        finalArr.push(addNums(newVal));

        console.timeEnd("addNums");
        // let endTime = Date.now();

        // console.log(endTime - startTime);
    }

    return finalArr;
}

function addManyNums10Timing(increment) {
    const finalArr = [];
    const start = increment;
    const end = increment * 10;

    for (let i = start; i <= end; i += increment) {
        console.time("addManyNums");

        finalArr.push(addManyNums(i));

        console.timeEnd("addManyNums");
    }

    return finalArr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 5000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
