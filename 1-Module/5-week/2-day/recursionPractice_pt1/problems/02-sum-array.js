/***********************************************************************
Write a recursive function called `sumArray` that takes an array of integers
and returns the value of all the integers added together. Your array may
include a mix of positive and negative integers!

Examples:

sumArray([1, 2, 3]); //  6
sumArray([1, 2]); //  6
sumArray([1]); //  6



sumArray([0, 1, -3]); //  -2
sumArray([1, 2, 3, 4, 5]); // 15
sumArray([]); // 0
***********************************************************************/

const sumArray = (arr) => {
    if (arr.length === 0) {
        return 0;
    }

    // //! return arr.pop() + sumArray(arr); //! Harder to visualize

    let currNum = arr.pop();

    let recursiveReturn = sumArray(arr);

    return currNum + recursiveReturn;
};

//! Another way
// const sumArray = (arr) => {
//     if (arr.length === 0) return 0;
//     else {
//         return arr[0] + sumArray(arr.slice(1));
//     }
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = sumArray;
} catch (e) {
    module.exports = null;
}
