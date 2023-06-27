// const wait = (seconds) => {
//     return new Promise(() => {
//         setTimeout(() => {
//             console.log(`It's been ${seconds} seconds`);
//         }, seconds * 1000);
//     });
// };

// wait(2);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const wait = (seconds) => {
//     setTimeout(() => {
//         console.log(`It's been ${seconds} seconds`);
//     }, seconds * 1000);
// };

// wait(2);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------
// const wait = (seconds) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, seconds * 1000);
//     });
// };

// wait(1)
//     .then(() => console.log("It's been 1 second"))
//     .then(() => wait(1))
//     .then(() => console.log("It's been 2 seconds"))
//     .then(() => wait(3))
//     .then(() => console.log("It's been 5 seconds"));
// // .then(() => console.log("Heyoooo"))

// console.log("Heyoooo");

// // // anyText();

// const wait = (seconds) => {
//     setTimeout(() => {
//         console.log(`It's been ${seconds} seconds`);
//     }, seconds * 1000);
// };

// wait(1);
// wait(1);
// wait(3);
// console.log("Heyoooo");

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num + 5);
//         }, 1000);
//     });
// };

// // add5AfterPause(0).then((sum) => console.log(sum)); // 5
// add5AfterPause(0) // 5
//     .then((nextNum) => add5AfterPause(nextNum)) // 10
//     .then((banana) => add5AfterPause(banana)) // 15
//     .then((nextNum) => add5AfterPause(nextNum)) // 20
//     .then((nextNum) => add5AfterPause(nextNum)) // 25
//     .then((nextNum) => add5AfterPause(nextNum)) // 30
//     .then((nextNum) => add5AfterPause(nextNum)) // 35
//     .then((sum) => console.log(sum)); // 35
// arr.map((thisCanBeAnythikng, i))

//! Careful with returns
// add5AfterPause(0)
//     // returns 5
//     .then((nextNum) => add5AfterPause(nextNum))
//     // nextNum = 5, returns 10
//     .then((sum) => console.log(sum))
//     // sum = 10, console.log() doesn't return anything (undefined)
//     .then((anotherNum) => add5AfterPause(anotherNum))
//     // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
//     .then((thisWontWork) => console.log(thisWontWork)); // NaN

//! Make sure to return the value you want
// add5AfterPause(0)
//     .then((nextNum) => add5AfterPause(nextNum))
//     .then((sum) => {
//         console.log(sum); // 10
//         return sum;
//     })
//     .then((anotherNum) => add5AfterPause(anotherNum))
//     .then((thisWontWork) => console.log(thisWontWork)); // 15

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             //! Comment out one of these to compare
//             // resolve(num + 5);
//             // resolve();
//             // this prints because resolve does not end function execution
//             console.log("After resolve", num);

//             // //! Comment out one of these to compare
//             // // this would not pass 100 to our .then()
//             // return 100
//         }, 1000);
//     });
// };

// console.log(add5AfterPause(0))
// .then(() => console.log("Please"));

// add5AfterPause(0);
// .then((nextNum) => {
//     console.log("What happened");
//     add5AfterPause(nextNum).then(() => console.log("hmmmm"));
//     return "Hey look I returned";
// }) // After resolve
// .then((sum) => console.log("I am the sum!", sum))
// .catch(() => console.log("I'm so sad I got rejected")); // 10

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

import fetch from "node-fetch";

// const synchronousConsoleLogging = () => {
//     console.log("I'm always first");
//     fetch("https://google.com/").then(() =>
//         console.log("I print last because I'm async!")
//     );
//     console.log("I'm always second in a normal function");
// };

// synchronousConsoleLogging();

// const asynchronousConsoleLogging = async () => {
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     await console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");
//     console.log("I'm always first");

//     // setTimeout(() => console.log("hey first"), 0);

//     await fetch("https://google.com/").then(() =>
//         console.log("I print second now because I'm being awaited!!!")
//     );

//     // setTimeout(() => console.log("hey second"), 0);

//     console.log("I'm now the last line to run");
// };

// asynchronousConsoleLogging();

// console.log("hey look I'm synchronous");
