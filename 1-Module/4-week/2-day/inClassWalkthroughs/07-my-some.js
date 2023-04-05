/*******************************************************************************
Write a function `mySome` that accepts an array and a callback as an argument.
The function should call the callback for each element of the array, passing in
the element and its index. The function should return a boolean
indicating whether or not at least one element of the array returns true when passed
into the callback.

Examples:

let result1 = mySome([5, 1, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result1);   // true

let result2 = mySome([5, 3, 7, 9], function(ele, i) {
    return ele === i;
});
console.log(result2);   // false

let result3 = mySome(['soup', 'noodles', 'bike', 'ship'], function(ele) {
    return ele.length === 4;
});
console.log(result3);   // true
*******************************************************************************/

let mySome = (array, cb) => {
    let haveWeSeenTrueYet = false;

    array.forEach((currVal, i) => {
        if (cb(currVal, i)) {
            haveWeSeenTrueYet = true;
        }
    });

    return haveWeSeenTrueYet;
};

//! This is fine
// function mySome(array, cb) {
//     // loop through the array and look at each element

//     for (let i = 0; i < array.length; i++) {
//         // pass each element & each index into the cb
//         let currVal = array[i];
//         let result = cb(currVal, i);
//         // if I ever see true, return true
//         if (result) {
//             return true;
//         }
//     }
//     // if I loop through everything and never see true, only then return false

//     return false;
// }

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = mySome;
} catch (e) {
    return null;
}
