//? --------------------------------------------------------------------
//? --------------------------------- Testing Helpers ---------------------------------
//? --------------------------------------------------------------------

const generateArrayWithLength = (num) => {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push(i);
    }

    return arr;
};

const testTenTimes = (cb, startingNum, needsAnArray = false) => {
    const endingNum = startingNum * 10;

    if (needsAnArray) {
        for (let i = startingNum; i <= endingNum; i += startingNum) {
            const arr = generateArrayWithLength(i);

            console.time(`# of operations: ${i}`);
            cb(arr);
            console.timeEnd(`# of operations: ${i}`);
        }
    } else {
        for (let i = startingNum; i <= endingNum; i += startingNum) {
            console.time(`# of operations: ${i}`);
            cb(i);
            console.timeEnd(`# of operations: ${i}`);
        }
    }
};

//? --------------------------------------------------------------------
//? --------------------------------- Manual Testing, Not Dry! ---------------------------------
//? --------------------------------------------------------------------

// console.time("n =  10,000");
// console.log(pushTest(10000));
// console.timeEnd("n =  10,000");

// console.time("n =  20,000");
// console.log(pushTest(20000));
// console.timeEnd("n =  20,000");

// console.time("n =  30,000");
// console.log(pushTest(30000));
// console.timeEnd("n =  30,000");

// console.time("n =  40,000");
// console.log(pushTest(40000));
// console.timeEnd("n =  40,000");

// console.time("n =  50,000");
// console.log(pushTest(50000));
// console.timeEnd("n =  50,000");

// console.time("n =  60,000");
// console.log(pushTest(60000));
// console.timeEnd("n =  60,000");

// console.time("n =  70,000");
// console.log(pushTest(70000));
// console.timeEnd("n =  70,000");

// console.time("n =  80,000");
// console.log(pushTest(80000));
// console.timeEnd("n =  80,000");

// console.time("n =  90,000");
// console.log(pushTest(90000));
// console.timeEnd("n =  90,000");

// console.time("n = 100,000");
// console.log(pushTest(100000));
// console.timeEnd("n = 100,000");

//? --------------------------------------------------------------------
//? --------------------------------- Push ---------------------------------
//? --------------------------------------------------------------------

function pushTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i);
    }

    return arr.length; // verifying we're actually doing n operations
}

console.log("\n_____Tests for array.push()_____\n");

// testTenTimes(pushTest, 10000); // Not reliable because small input
// testTenTimes(pushTest, 10000000); // Clear picture

//! .push is O(1)

// //? --------------------------------------------------------------------
// //? --------------------------------- Pop ---------------------------------
// //? --------------------------------------------------------------------

const popTest = (arr) => {
    // we'll make arr shorter by popping, so save original length
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr.pop();
    }

    return arr;
};

console.log("\n_____Tests for array.pop()_____\n");

// testTenTimes(popTest, 100000, true);
// testTenTimes(popTest, 10000000, true);

//! .pop is O(1)

// //? --------------------------------------------------------------------
// //? --------------------------------- Unshift ---------------------------------
// //? --------------------------------------------------------------------

function unshiftTest(n) {
    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.unshift(i);
    }

    return arr;
}

console.log("\n_____Tests for array.unshift()_____\n");

// testTenTimes(unshiftTest, 10000);
// testTenTimes(unshiftTest, 100000); // Too slow for me

//! .unshift is O(n)

// //? --------------------------------------------------------------------
// //? --------------------------------- Shift ---------------------------------
// //? --------------------------------------------------------------------

function shiftTest(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        arr.shift();
    }

    return arr;
}

console.log("\n_____Tests for array.shift()_____\n");

// testTenTimes(shiftTest, 10000, true);

//! .shift is O(n)

//? --------------------------------------------------------------------
//? --------------------------------- Map ---------------------------------
//? --------------------------------------------------------------------

const mapTest = (arr) => arr.map((el) => el + 1);

console.log("\n_____Tests for array.map()_____\n");

// testTenTimes(mapTest, 10000000, true);

//! .map is O(n)

//? --------------------------------------------------------------------
//? --------------------------------- Filter ---------------------------------
//? --------------------------------------------------------------------

const filterTest = (arr) => arr.filter((el, i) => (el ? el : el + 1));

console.log("\n_____Tests for array.filter()_____\n");

testTenTimes(filterTest, 10000000, true);

//? --------------------------------------------------------------------
//? --------------------------------- Reduce ---------------------------------
//? --------------------------------------------------------------------

const reduceTest = (arr) => arr.reduce((prev, next) => prev + next);

console.log("\n_____Tests for array.reduce()_____\n");

// testTenTimes(reduceTest, 100000, true);

//? --------------------------------------------------------------------
//? --------------------------------- Every ---------------------------------
//? --------------------------------------------------------------------

const everyTest = (arr) => arr.every(() => true);

console.log("\n_____Tests for array.every()_____\n");

// testTenTimes(everyTest, 100000, true);
