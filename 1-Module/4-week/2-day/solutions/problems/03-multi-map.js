/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
// val * 10, n number of times
*******************************************************************************/

function multiMap(val, n, cb) {
    
    for (let i = 0; i < n; i++) {
        // finalStr = finalStr + "!";
        val = cb(val);
    }

    return val
}

// function multiMap(val, n) {
//     let product = val;
//     for (let i = 0; i < n; i++) {
//         product = product * 10;
//     }

//     return product;
// }

// function multiMap(val, n, cb) {
//     let newVal = val;
//     for (let i = 0; i < n; i++) {
//         // finalStr = finalStr + "!";
//         newVal = cb(newVal);
//     }

//     return newVal;
// }

// let result1 = multiMap(7, 2, function (n) {
//     return n * 10;
// });
// console.log(result1); // 700

// let result2 = multiMap(7, 3, function (n) {
//     return n * 10;
// });
// console.log(result2); // 7000

// let result3 = multiMap("hi", 5, function (s) {
//     return s + "!";
// });
// console.log(result3); // hi!!!!!
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = multiMap;
} catch (e) {
    return null;
}
