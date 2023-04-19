/***********************************************************************
Write a function, `batchTimeouts`, that accepts an array of callbacks and an
array of delays in milliseconds. The function should set a timeout for each
callback in the array with its corresponding delay. For example, the
callback at index 0 should be set with the delay at index 0,
the callback at index 1 should be set with the delay at index 1, and so on.
The `batchTimeouts` function should return an array containing the Timeout
objects for each timeout that was set. You may assume that both array arguments 
have the same length.

In addition to Mocha, we recommend that you test your code manually using 
node with the examples below to confirm the correct behavior.

Note: The test specs for this problem are valid for iterative solutions. If you
pass the specs for an iterative solution and then attempt a recursive solution,
you will need to test your new solution manually using node.

Example:

const sayHello = () => console.log('hi');
const sayGoodbye = () => console.log('bye');
const shout = () => console.log('WHAT?');
const tasks = [sayHello, sayGoodbye, shout];
const delays = [500, 200, 900];

const timeoutObjs = batchTimeouts(tasks, delays); 
// should print: 
//  'bye' after 200 ms
//  'hi' after 500 ms
//  'WHAT?' after 900 ms

console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]
***********************************************************************/

function batchTimeouts(callbacks, delays) {
    // loop through callbacks
    // setTimeout with cb & delay

    //! Recommended
    return callbacks.map((cb, i) => {
        const time = delays[i];

        return setTimeout(cb, time);
    });

    //! Okay but important to start getting used to array methods
    // const finalArr = [];

    // for (let i = 0; i < callbacks.length; i++) {
    //     const cb = callbacks[i];
    //     const time = delays[i];

    //     const timeOutReturn = setTimeout(cb, time);

    //     finalArr.push(timeOutReturn);
    // }

    // return finalArr;
}

// //! Recursive version
// const batchTimeouts = (callbacks, delays, finalArr = []) => {
//     // Base Case
//     if (callbacks.length === 0) {
//         return finalArr;
//     }

//     // Recursive Step
//     const cb = callbacks.shift();
//     const time = delays.shift();
//     const timeoutReturn = setTimeout(cb, time);

//     finalArr.push(timeoutReturn);

//     // Recursive Case
//     return batchTimeouts(callbacks, delays, finalArr);
// };

// const sayHello = () => console.log("hi");
// const sayGoodbye = () => console.log("bye");
// const shout = () => console.log("WHAT?");
// const tasks = [sayHello, sayGoodbye, shout];
// const delays = [500, 200, 900];

// const timeoutObjs = batchTimeouts(tasks, delays);
// // should print:
// //  'bye' after 200 ms
// //  'hi' after 500 ms
// //  'WHAT?' after 900 ms

// console.log(timeoutObjs); // [ Timeout {...},  Timeout {...}, Timeout {...} ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = batchTimeouts;
} catch {
    module.exports = null;
}
