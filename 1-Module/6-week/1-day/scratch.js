// const foo = () => {
//     console.log(bar());

//     return "whatever";
// };

// const bar = () => {
//     return "other whatever";
// };

// console.log(foo());
// // bar();

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myCB = () => {
//     console.log("Look");
//     console.log("at");
//     console.log("me");
//     console.log("go!");
// };

// console.log("Hey I'm up top!");

// setTimeout(myCB, 2000);
// const returnOfInterval = setInterval(myCB, 100);

// setTimeout(() => {
//     clearInterval(returnOfInterval);
// }, 5000);

// setTimeout(clearInterval, 500, returnOfInterval);

// console.log("Woah I'm down below!");

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myCB = () => {
//     debugger;
//     console.log("Look");
//     console.log("at");
//     console.log("me");
//     console.log("go!");
// };

// const recFib = (n) => {
//     if (n <= 2) return 1;

//     return recFib(n - 1) + recFib(n - 2);
// };

// setTimeout(() => {
//     myCB();
// }, 0);

// console.log(recFib(40));
// console.log(recFib(40));
// console.log(recFib(40));
// console.log(recFib(40));
// debugger;
// console.log(recFib(40));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// console.log("one");
// console.log("two");
// console.log("three");

// const foo = () => {
//     console.log("two");
// };

// console.log("one");
// foo();
// console.log("three");

// console.log("one");

// setTimeout(() => {
//     console.log("two");
// }, 1500);

// console.log("three");

// const foo = (a, b) => {
//     console.log("time is up");
//     console.log(`${a} ${b}`);
// };

// setTimeout(foo, 1000, "potato", "tomato");

// console.log("end");

// const foo = (a, b) => {
//     console.log("time is up");
//     console.log(`${a} ${b}`);
// };

// const interval = setInterval(foo, 1000, "potato", "tomato");
// clearInterval(interval);

// const intervalCount = (count, delay) => {
//     const intervalObj = setInterval(() => {
//         console.log("time is up");
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// };

// intervalCount(3, 500);

const intervalObj = setInterval(
    (count) => {
        console.log("time is up");
        console.log(count);
        count--;
        console.log("after--", count);

        if (count === 0) {
            clearInterval(intervalObj);
        }
    },
    1000,
    5
);
