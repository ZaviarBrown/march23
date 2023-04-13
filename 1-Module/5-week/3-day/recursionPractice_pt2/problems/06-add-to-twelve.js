/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
// remove the last value from the arr
// compare that value with the new last value

//? My rec.
const addToTwelve = (arr) => {
    // Base Case
    if (arr.length <= 1) {
        return false;
    }

    // Recursive Step
    const lastNum = arr.pop(); // [1, 3, 4, 7, 5] => 5 | [1, 3, 4, 7]
    const newLastNum = arr[arr.length - 1];

    if (lastNum + newLastNum === 12) {
        return true;
    }

    // Recursive Case
    return addToTwelve(arr);
};

// console.log(addToTwelve([1, 3, 4, 7, 6])); // false
// console.log(addToTwelve([1, 3, 4, 7, 5])); // true

// //! No mutation solve
// function addToTwelve(arr) {
//     // Base Case
//     if (arr.length <= 1) {
//         return false;
//     }

//     // Base Case
//     if (arr[0] + arr[1] === 12) {
//         return true;
//     } else {
//         // Recursive Case & Step
//         return addToTwelve(arr.slice(1));
//     }
// }

// //! Default param solution without ever using the default param 😂
// function addToTwelve(arr, res = 0) {
//     debugger;
//     // baseCase:
//     if (arr.length === 1) {
//         return false;
//     }
//     // recursive-step
//     let popped = arr.pop();
//     let lastEl = arr[arr.length - 1];
//     if (popped + lastEl === 12) {
//         return true;
//     } else {
//         // recursive step.
//         return addToTwelve(arr, res);
//     }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = addToTwelve;
} catch (e) {
    module.exports = null;
}
