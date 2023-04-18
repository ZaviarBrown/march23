// sayHello();
// const myFunc = () => {
//     console.log("hey");
// };
// myFunc();

// function sayHello() {
//     console.log("HEEELLOOOOOOOOOOO");
// }

// console.log("you");
// console.log("you");
// console.log("you");
// console.log("you");
// console.log("you");
//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------
// console.log("Look");
// console.log("at");
// console.log("me");
// console.log("go!");

// const myCB = () => {
//     console.log("Look");
//     console.log("at");
//     console.log("me");
//     console.log("go!");
// };

// const runningMyCB = setInterval(myCB, 2000);
// console.log(setInterval(myCB, 2000));

// setTimeout(() => {
//     clearInterval(runningMyCB);
// }, 5000);

// console.log("Did we see this line?");
// buncha other stuff

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------
// // console.log("This should run first");

// const myCB = () => {
//     console.log("Look");
//     console.log("at");
//     console.log("me");
//     console.log("go!");
// };

// setTimeout(myCB, 0);
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");
// console.log("What about me?");

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myCB = () => {
//     console.log("Look");
//     console.log("at");
//     console.log("me");
//     console.log("go!");
// };

// const myOtherCB = (str) => {
//     console.log(str);
// };

// const myFib = (n) => {
//     if (n <= 2) return 1;

//     return myFib(n - 1) + myFib(n - 2);
// };

// const thisFunc = () => "The fib function is done!";

// // //! Async
// // setTimeout(myCB, 1000); // "Look at me go!"

// //! Async
// setTimeout(myOtherCB, 1000, "Line 94"); // "Line 94"

// // //? 3 slow syncs
// // console.log(myFib(40));

// //! Async
// setTimeout(myOtherCB, 4000, "Line 100"); // 'Line 100'

// // console.log(myFib(40));

// //! Async
// setTimeout(myOtherCB, 500, "Line 105"); // "Line 105"

// // console.log(myFib(40));

// //! Async
// setTimeout(myOtherCB, 0, "Line 113"); //  "Line 113"

// // 113, 105, 94, 100

// // 94, 105, 100, 113
// // 94, 113, 105, 100

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

// setTimeout(() => {
//     console.log("time is up");
// }, 1000);

// console.log("end");

// const foo = (a, b) => {
//     console.log("time is up");
//     console.log(`${a} ${b}`);
// };

// setTimeout(foo, 1000, "potato", "tomato");

// // console.log("end");

// const foo = (a, b) => {
//     console.log("time is up");
//     console.log(`${a} ${b}`);
// };

// const res = setTimeout(foo, 1000, "potato", "tomato");
// clearTimeout(res);

// const foo = () => {
//     console.log("Foo has started running");

//     setTimeout(() => {
//         console.log("Mysterious inner timeout!");
//     }, 2000);

//     console.log("Foo has finished running");
// };

// setTimeout(foo, 3000);

// const intervalCount = (count, delay) => {
//     const intervalObj = setInterval(() => {
//         console.log("time is up");
//         console.log(count);
//         count--;

//         if (count === 0) {
//             clearInterval(intervalObj);
//         }
//     }, delay);
// };

// intervalCount(3, 1000);

// let starterNum = 3;

// const intervalObj = setInterval(() => {
//     console.log("time is up");
//     console.log(starterNum);
//     starterNum--;
//     console.log("after--", starterNum);
//     if (starterNum === 0) {
//         clearInterval(intervalObj);
//     }
// }, 1000);
