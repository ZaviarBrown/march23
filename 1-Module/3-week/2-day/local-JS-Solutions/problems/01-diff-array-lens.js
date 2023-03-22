/***********************************************************************
Write a function `diffArrayLen(arr1, arr2)` that takes two arrays. The
function should return true if the arrays have different lengths. The
function should return false otherwise.

Examples:

let a1 = ['a', 'b', 'c'];
let a2 = ['w', 'x', 'y'];
let a3 = [1, 3, 7, 4];

diffArrayLen(a1, a2); // => false
diffArrayLen(a1, a3); // => true
***********************************************************************/

// //! This works great
// function diffArrayLen(arr1, arr2) {
//     if (arr1.length === arr2.length) {
//         return false;
//     } else {
//         return true;
//     }
// }

// //! This skips if else
// function diffArrayLen(arr1, arr2) {
//     return arr1.length !== arr2.length;
// }

//? Using an arrow function, we can 1-line!
let diffArrayLen = (arr1, arr2) => arr1.length !== arr2.length;

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = diffArrayLen;
