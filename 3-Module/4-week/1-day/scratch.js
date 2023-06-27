// const callbackHell = () => {
//     setTimeout(() => {
//         console.log("It's been 1 seconds");
//         setTimeout(() => {
//             console.log("It's been 2 seconds");
//             setTimeout(() => {
//                 console.log("It's been 5 seconds");
//             }, 3000);
//         }, 1000);
//     }, 1000);
// };

// callbackHell();

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

// console.log("Hey");

// const wait = (seconds) => {
//     setTimeout(() => {
//         console.log(`It's been ${seconds} seconds`);
//     }, seconds * 1000);
// };

// wait(1);
// wait(1);
// wait(2);
// console.log("Hey");

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num + 5); // give num + 5 to .then((num + 5) =>)
//         }, 100);
//     });
// };

// // add5AfterPause(150).then((sum) =>
// //     console.log("I received this num from the promise:", sum)
// // ); // 5
// add5AfterPause(0) // 5
//     .then((nextNum) => add5AfterPause(nextNum)) // 10
//     .then((nextNum) => add5AfterPause(nextNum)) // 15
//     .then((nextNum) => add5AfterPause(nextNum)) // 20
//     .then((nextNum) => add5AfterPause(nextNum)) // 25
//     .then((nextNum) => add5AfterPause(nextNum)) // 30
//     .then((nextNum) => add5AfterPause(nextNum)) // 35
//     .then((nextNum) => add5AfterPause(nextNum)) // 40
//     .then((sum) => console.log(sum)); // 40

//! Not working code just a visualization
// class MyPromise {
//     constructor(someFunc) {
//         this.someFunc = (resolve, reject) => {

//         }
//     }

//     resolve() {

//     }

//     reject() {

//     }
// }

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             //! Comment out one of these to compare
//             resolve(num + 5);

//             // this prints because resolve does not end function execution
//             console.log("After resolve");

//             // //! Comment out one of these to compare
//             // // this would not pass 100 to our .then()
//             // return 100;
//         }, 1000);
//     });
// };

// add5AfterPause(0) // After resolve
//     .then((nextNum) => add5AfterPause(nextNum)) // After resolve
//     .then((sum) => console.log(sum)); // 10

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const add5AfterPause = (num) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(num + 5); // give num + 5 to .then((num + 5) =>)
//         }, 500);
//     });
// };

// add5AfterPause(0)
//   // returns 5
//   .then((nextNum) => add5AfterPause(nextNum))
//   // nextNum = 5, returns 10
//   .then((sum) => console.log(sum))
//   // sum = 10, console.log() doesn't return anything (undefined)
//   .then((anotherNum) => add5AfterPause(anotherNum))
//   // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
//   .then((thisWontWork) => console.log(thisWontWork)); // NaN

// add5AfterPause(0)
//     .then((nextNum) => add5AfterPause(nextNum))
//     .then((sum) => {
//         console.log(sum); // 10
//         throw new Error("waaa");
//         return sum;
//     })
//     .then(
//         (anotherNum) => add5AfterPause(anotherNum),
//         // () => {
//         //     throw new Error("Waaaaaaa");
//         // }
//     )
//     .then((thisWontWork) =>
//         console.log("this is still a promise", thisWontWork),
//         // () => console.log("whatever")
//     )
//     .catch(() => console.log("If there was an error I will run")); // 15

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

//     const myValue = await fetch("https://google.com/").then(() =>
//         console.log("I print second now because I'm being awaited!!!")
//     );

//     console.log("I'm now the last line to run");

//     console.log(myValue);
// };

// asynchronousConsoleLogging();

// arr.map(async function() {
//     await fetch()

//     await console.log("I want this to wait")
// })

await fetch().then(); // this runs first

console.log("hey"); // this runs second

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

fetch().then(); // this runs second

console.log("hey"); // this runs first

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

fetch()
    .then()
    .then(() => {
        console.log("hey");
    }); // this runs first
