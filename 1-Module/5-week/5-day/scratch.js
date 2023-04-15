// (function () {
//     console.log("I run immediately");
// })();

// let checkThisOut = ((name) => {
//     return `Hello, ${name}!`;
// })("Zaviar");

// console.log(checkThisOut);

// let str = "Praise The Sun!".slice(0, 2);
// let num = 32;
// let bool = false;

// console.log(str)
// console.log(typeof str); // string (but secretly not)
// console.log(typeof num); // number (but secretly not)
// console.log(typeof bool); // boolean (but secretly not)

// // What we write
// let str = "Solaire";

// // Behind the scenes JS
// let str = {
//   0: "S",
//   1: "o",
//   2: "l",
//   3: "a",
//   4: "i",
//   5: "r",
//   6: "e",
//   length: 7,
//   slice: (start, end) => {
//     // slice things
//   },
//   // etc.
// };

// console.log(str.length)
// console.log(true)
// console.log(true.toString())

// // What we write
// let arr = ["a", 2, false];
// const myFunc = () => "hi";

// console.log(typeof arr);
// console.log(typeof myFunc);

// // Behind the scenes JS
// let arr = {
//   0: "a",
//   1: 2,
//   2: false,
//   length: 3,
// };

// // Remember, ONLY objects have methods!
// const myFunc = (val1, val2) => {
//   return val1 + val2;
// };
// console.log(myFunc(5, 10))
// console.log(myFunc.call); // [Function: call]
// console.log(myFunc.call(null, 5, 10)); // 15
// console.log(myFunc.toString());
// // (val1, val2) => {
// //     return val1 + val2;
// // }

// // function declaration

// hello(); // hello

// function hello() {
//   console.log("hello!");
// }

// // function expression

// hello(); // Reference Error

// let arrowHello = () => {
//      console.log("hello!");
// };

// let hello = function () {
//     console.log("hello!");
// };

// // function expression with var

// console.log(hello); // undefined
// hello(); // Type Error
// var hello = () => {
//     console.log("hello!");
// };

// function declaration with var

// var foo = "I'm a variable";

// function foo() {
//   return "I'm a function";
// }

// console.log(foo()); // I am a variable

// function declaration with let/const

// let foo = "I'm a variable";

// function foo() {
//   return "I'm a function";
// }

// console.log(foo); // Syntax Error
