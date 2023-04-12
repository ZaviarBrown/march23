/***********************************************************************
Write a recursive function called `sumToN` that takes in a number and returns
the sum of all the numbers from 0 to that number. Return null for any input
number below 0.

Examples:

sumToN(5) // returns 15
sumToN(1)  // returns 1
sumToN(9)  // returns 45
sumToN(-8)  // returns null
//  let sum = 0;

//  for (let i = n; i >= 0; i--) {
//      sum += i;
//  }

//  return sum;
***********************************************************************/

//! Rec
const sumToN = (n) => {
    if (n < 0) {
        return null;
    }
    if (n === 0) {
        return 0;
    }

    let finalVal = n + sumToN(n - 1);

    return finalVal;
};

// //! With debuggers
// const sumToN = (n) => {
//     debugger;
//     if (n < 0) {
//         return null;
//     }
//     if (n === 0) {
//         return 0;
//     }

//     let finalVal = n + sumToN(n - 1);
//     debugger;
//     return finalVal;
// };

// //! Harder version
// const sumToN = (n) => {
//     if (n < 0) {
//         return null;
//     }
//     if (n === 1) {
//         return 1;
//     }

//     return n + sumToN(n - 1);
// };

// console.log(sumToN(5)); // returns 15
// console.log(sumToN(1)); // returns 1
console.log(sumToN(9)); // returns 45
// console.log(sumToN(-8)); // returns null

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sumToN;
} catch (e) {
    module.exports = null;
}
