/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([[[[[[[1]]]]]]]); // [1]
flatten([1, 2]); // [1, 2]
flatten([1, [2]]); // [1, 2]
flatten([1, 2, 3, [4]]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// If I have an array, use flatten to flatten it
// Look for anything that's NOT an array

// //? --------------------------------------------------------------------
// //? --------------------------------- Standard approach ---------------------------------
// //? --------------------------------------------------------------------

// function flatten(arr) {
//     debugger;
//     let finalArr = [];

//     if (!arr.length) return finalArr;

//     arr.forEach((el) => {
//         debugger;
//         if (Array.isArray(el)) {
//             const recursiveReturn = flatten(el);
//             finalArr.push(...recursiveReturn);
//         } else {
//             finalArr.push(el);
//         }
//     });

//     return finalArr;
// }

//? --------------------------------------------------------------------
//? --------------------------------- Standard approach with concat ---------------------------------
//? --------------------------------------------------------------------

// function flatten(arr) {
//     //base case
//     let answer = [];
//     if (arr.length === 0) return arr;
//     //recursive case
//     for (const el of arr) {
//         if (Array.isArray(el)) {
//             answer = answer.concat(flatten(el));
//         } else {
//             answer.push(el);
//         }
//     }
//     return answer;
// }

// //? --------------------------------------------------------------------
// //? --------------------------------- This is possible for suresies ---------------------------------
// //? --------------------------------------------------------------------

// function flatten(arr, i = 0, answer = []) {
//     debugger;
//     //bc = i === arr.length
//     if (i === arr.length) return answer;
//     debugger;
//     //rc = i < arr.length (2)
//     if (i < arr.length) {
//         debugger;
//         //rs = i++
//         if (Array.isArray(arr[i])) {
//             let curr = flatten(arr[i], 0, answer);
//             answer.push(...curr);
//         } else {
//             answer.push(arr[i]);
//         }

//         debugger;
//         i++;
//     }
//     //for loop
//     debugger;
//     return flatten(arr, i, answer);
// }
// console.log(flatten([[1], 2, [3]])); // [1, 2, 3]

// //? --------------------------------------------------------------------
// //? --------------------------------- This is possible for suresies ---------------------------------
// //? --------------------------------------------------------------------

// function flatten(arr, fullArr = []) {
//     if (arr === undefined || arr.length === 0) {
//         return fullArr;
//     }

//     if (typeof arr[0] === "number") {
//         fullArr.push(arr[0]);
//         arr.shift();
//         return fullArr;
//     } else {
//         arr.shift();
//         return flatten(arr[0], fullArr);
//     }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
