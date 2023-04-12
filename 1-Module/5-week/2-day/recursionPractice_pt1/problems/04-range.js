/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

//! My recommendation for you
const range = (start, end) => {
    if (start >= end) {
        return [];
    }

    let builtArray = [];

    builtArray.push(start); // Add the current start to our array

    let recursiveReturn = range(start + 1, end); // recurse with start + 1
    // (work towards base case)

    builtArray.push(...recursiveReturn);
    // push the values from recursing

    return builtArray;
};

// //! More advanced
// const range = (start, end) => {
//     if (start >= end) {
//         return [];
//     }

//     return [start, ...range(start + 1, end)];
// };

// //! Million ways to do everything
// const range = (start, end) => {
//     // if (start >= end) return [];
//     if (start > end) return [];
//     else if (start === end) return [];
//     else {
//         let result = range(start + 1, end);
//         result.unshift(start);
//         return result;
//     }
// };

// //! Million ways to do everything
// function range(start, end) {
//     if (end <= start) {
//         return [];
//     }
//     return [start].concat(range(start + 1, end));
// }

// let arr1 = [1, 2];

// let arr2 = [3, 4];

// let arr3 = [...arr1, ...arr2, ...[]] // [1, 2, 3, 4]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = range;
} catch (e) {
    module.exports = null;
}
