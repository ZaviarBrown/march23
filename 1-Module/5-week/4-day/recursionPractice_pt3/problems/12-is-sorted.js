/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// //? --------------------------------------------------------------------
// //? --------------------------------- Array mutation for rec step ---------------------------------
// //? --------------------------------------------------------------------

// const isSorted = (arr) => {
//     //Base case
//     if (arr.length <= 1) {
//         return true;
//     }

//     let lastNum = arr.pop();
//     let newLast = arr[arr.length - 1];
//     if (lastNum >= newLast) {
//         return isSorted(arr);
//     }

//     return false;
// };

// //? --------------------------------------------------------------------
// //? --------------------------------- Front to back ---------------------------------
// //? --------------------------------------------------------------------

// function isSorted(arr) {
//     //base case
//     if (arr.length === 1) {
//         return true;
//     }
//     //recursive step?
//     if (arr[0] > arr[1]) {
//         return false;
//     }
//     //recursive case?
//     return isSorted(arr.slice(1));
// }

// //? --------------------------------------------------------------------
// //? --------------------------------- Allows duplicates ---------------------------------
// //? --------------------------------------------------------------------

// function isSorted(arr) {
//     //base case
//     if (arr.length === 1) {
//         return true;
//     } else {
//         if (arr[0] <= arr[1]) {
//             //recursive step/case
//             return isSorted(arr.slice(1));
//         } else {
//             return false;
//         }
//     }
// }

// //? --------------------------------------------------------------------
// //? --------------------------------- Slicing for rec step, front to back ---------------------------------
// //? --------------------------------------------------------------------

// function isSorted(arr) {
//     //base-case
//     if (arr.length <= 1) {
//         return true;
//     }
//     //recursive-case
//     if (arr[0] < arr[1]) {
//         return isSorted(arr.slice(1));
//     } else {
//         //recursive-step
//         return false;
//     }
// }

// //? --------------------------------------------------------------------
// //? --------------------------------- Array mutation for rec step ---------------------------------
// //? --------------------------------------------------------------------

// function isSorted(arr) {
//     debugger;
//     if (arr.length === 1) {
//         return true;
//     }
//     let popped = arr.pop();
//     let lastNum = arr[arr.length - 1];

//     if (popped > lastNum) {
//         return isSorted(arr);
//     } else {
//         return false;
//     }
// }

// //? --------------------------------------------------------------------
// //? --------------------------------- One liner Cam ---------------------------------
// //? --------------------------------------------------------------------

// const isSorted = (arr) =>
//     arr.length <= 1 ? true : arr[0] < arr[1] ? isSorted(arr.slice(1)) : false;

// //? --------------------------------------------------------------------
// //? --------------------------------- One liner Z ---------------------------------
// //? --------------------------------------------------------------------

// const isSorted = (arr) =>
//     arr.length === 1
//         ? true
//         : arr.pop() > arr[arr.length - 1]
//         ? isSorted(arr)
//         : false;

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = isSorted;
} catch (e) {
    module.exports = null;
}
