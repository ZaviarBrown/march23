/***********************************************************************
Write a function `pickyMyMap` that accepts an array and a callback as
arguments. The function should call the callback for each element of the
array, passing in the element and return a new array of the results of
each call to the callback function. If the result of the callback function
returns something falsey, then do not add it in the result array.

const nums = [1, 2, 3, 4];
pickyMyMap(nums, (num) => num - 2); // [-1, 1, 2]

const booleans = [true, false, true, false, true];
pickyMyMap(booleans, (boolean) => !boolean); // [true, true]

You may not use Array's `map()`, `filter()`, or `forEach()` methods.
***********************************************************************/

function pickyMyMap(arr, cb) {
    // create finalArr
    const finalArr = [];

    // loop through array
    for (let i = 0; i < arr.length; i++) {
        // for each value, pass to cb
        const currVal = arr[i];
        const result = cb(currVal);

        // if (cb(val) === true) add to finalArr
        if (result) {
            finalArr.push(result);
        } // else, ignore it
    }

    return finalArr;
}

// function pickyMyMap(arr, cb) {
//     let result = [];
//     for (let el of arr) {
//         let res = cb(el);
//         if (res) result.push(res);
//     }
//     return result;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = pickyMyMap;
} catch (e) {
    module.exports = null;
}
