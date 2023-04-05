/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

/** Count vowels in a string
    // create a counter variable = 0
    // loop through string
    // if currentCharacter is a vowel, counter ++
    // (if vowels.includes(currString))
 */

let myHelper = function (n) {
    return n % 2 === 0;
};

function count(array, cb) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        //  cb(curr) => true // true === true => true
        // if (cb(curr) === true) {
        if (cb(curr)) {
            counter++;
        }
    }

    return counter;
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = count;
} catch (e) {
    return null;
}
