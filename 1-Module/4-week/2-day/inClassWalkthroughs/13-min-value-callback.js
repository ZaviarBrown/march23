/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

let findSmallestVal = (arr) => {
    // find smallest value and return
    let smallestVal = arr[0];
    // could also start at i = 0
    for (let i = 1; i < arr.length; i++) {
        let curr = arr[i];
        if (smallestVal > curr) {
            smallestVal = curr;
        }
    }

    return smallestVal;
};

function minValueCallback(array, cb) {
    let getSmallestVal = findSmallestVal(array);
    if (cb) {
        return cb(getSmallestVal);
    } else {
        return getSmallestVal;
    }
}

// function minValueCallback(array, cb) {
//     if (cb) {
//         let getSmallestVal = findSmallestVal(array);
//         return cb(getSmallestVal);
//     } else {
//         return findSmallestVal(array);
//     }
// }

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = minValueCallback;
} catch (e) {
    return null;
}
