/***********************************************************************
Write a function, `postponeWithArgs`, that accepts a callback and a delay in 
milliseconds as arguments. `postponeWithArgs` should return a new function that
accepts any number of arguments. When the returned function is called, it should 
invoke the callback after the given delay, passing any arguments it receives to 
the callback.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below.

Examples

const greet = (person) => console.log('Hello ' + person + '!');
const slowGreet = postponeWithArgs(greet, 1000);
slowGreet('Rose'); // prints 'Hello Rose!' after 1000 ms
slowGreet('Alex'); // prints 'Hello Alex!' after 1000 ms

const printSum = (num1, num2) => console.log(num1 + num2);
const slowPrintSum = postponeWithArgs(printSum, 500);
slowPrintSum(4, 3); // prints '7' after 500 ms
slowPrintSum(2, 8); // prints '10' after 500 ms

***********************************************************************/

function postponeWithArgs(cb, delay) {
    return (...args) => {
        //? Pretty cool!
        setTimeout(cb, delay, ...args);

        // //? Cool and not sad nor bad!
        // setTimeout(() => {
        //     cb(...args);
        // }, delay);

        // //! Just sad
        // setTimeout(
        //     (args) => {
        //         cb(...args);
        //     },
        //     delay,
        //     args
        // );

        // //! Sad and bad
        // setTimeout(
        //     (...args) => {
        //         cb(...args);
        //     },
        //     delay,
        //     ...args
        // );
    };
}

// function postponeWithArgs(cb, delay) {
//     return function () {
//         const args = arguments;
//         setTimeout(() => {
//             cb(...args);
//         }, delay);
//     };
// }

// //! One line version

// const postponeWithArgs =
//     (cb, delay) =>
//     (...args) =>
//         setTimeout(cb, delay, ...args);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = postponeWithArgs;
} catch {
    module.exports = null;
}