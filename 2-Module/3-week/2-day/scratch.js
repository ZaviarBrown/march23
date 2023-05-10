const linearTimeFunc = (n) => {
    const finalArr = [];

    for (let i = 1; i <= n; i++) {
        finalArr.push(i);
    }

    return finalArr;
};

console.time("input of 5");
linearTimeFunc(5);
console.timeEnd("input of 5");

console.time("input of 5000");
linearTimeFunc(5000);
console.timeEnd("input of 5000");

// console.time("input of 50000000");
let start = Date.now();
linearTimeFunc(50000000);
let end = Date.now();
console.log(start);
console.log(end);
console.log(`input of 5000: ${end - start}ms`);
// console.timeEnd("input of 50000000");
