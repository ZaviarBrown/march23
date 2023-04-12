// let gameName = "Elden Ring";
// let firstName = "Foul";
// let lastName = "Tarnished";
// let element = "flame";
// let putOutFire = () => "extinguish";

// // let strLiteral = `anything in here is just a string ${anythingInThisIsJS}`

// // let greeting = `${firstName + " " + lastName}, in search of the ${gameName}.`;
// let greeting = `${firstName} ${lastName}, in search of the ${gameName}.`;
// let threat = `Someone must ${putOutFire()} thy ${element}!`;
// let numString = `${8 * 2315}`
// console.log(greeting);
// console.log(threat);
// console.log(numString);
// console.log(8 * 2315);

// function foo() {
//     debugger;
//     return 2 + bar();
// }

// function bar() {
//     debugger;
//     return 6 + baz();
// }

// function baz() {
//     debugger;
//     return 3;
// }

// console.log(foo());

/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/

// const loop_sum = (num) => {
//     let sum = 0;

//     for (let i = 1; i <= num; i++) {
//         sum += i;
//     }

//     return sum;
// };

// const rec_sum = (num) => {
//     debugger
//     if (num === 0) {
//         return 0;
//     }

//     let sum = num + rec_sum(num - 1)
//     debugger
//     return sum
// };

// // console.log(rec_sum(1)); // => 1
// // console.log(rec_sum(2)); // => 3
// console.log(rec_sum(3)); // => 6
