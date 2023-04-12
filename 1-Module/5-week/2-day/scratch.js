// let gameName = "Elden Ring";
// let firstName = "Foul";
// let lastName = "Tarnished";
// let element = "flame";
// let putOutFire = () => "extinguish";

// // let strLit = `this is just any other string ${5 + 5}`

// // let greeting = `${firstName + " " + lastName}, in search of the ${gameName}.`;
// let greeting = `${firstName} ${lastName}, in search of the ${gameName}.`;
// let threat = `Someone must ${putOutFire()} thy ${element}!`;

// let numStr = `${8 * 27635}`;

// console.log(greeting);
// console.log(threat);
// console.log(numStr);
// console.log(8 * 27635);

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

// debugger;
// console.log(foo());

/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/

// const loop_sum = (n) => {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// };

const rec_sum = (n) => {
    debugger;
    // Base Case
    if (n === 0) {
        return 0;
    }

    let total = n;

    // Recursive Step
    n--;

    // Recursive Case
    let recursiveReturn = rec_sum(n);

    total += recursiveReturn;

    return total;
};

// //! More difficult version
// const rec_sum = (n) => {
//     // Base Case
//     if (n === 1) {
//         return 1;
//     }

//     return n + rec_sum(n - 1);
// };

console.log(rec_sum(1)); // => 1
// console.log(rec_sum(2)); // => 3
// console.log(rec_sum(3)); // => 6
