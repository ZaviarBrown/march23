/***********************************************************************
Write a function `duplicateCharMinCount(string, minCount)` that will takes
a string as an argument and returns an array of characters that show up
at least `minCount` number of times. The string will have at least one
character.

Examples:

duplicateCharMinCount("apple", 2) // ["p"]
duplicateCharMinCount("banana", 2) // ["a", "n"]
duplicateCharMinCount("What about a longer string?", 3) // ["a", "t", " "]
***********************************************************************/

// function countCharacters(string) {
// 	// Your code here
// }

/**
 * Create a counter object
 *      counter object will keep track of key/values => character/number of that character
 *
 * loop through the string
 *      With every character
 *              check to see if the character exists in our object
 *                  if it DOESN'T, create a new key value pair => "a": 1
 *                  if it DOES, add to that existing key value pair => "a": 2
 *
 *
 * loop through countObj
 *      For each key/value pair
 *          if value >= minCount, push the key (character) into an array
 *
 */

//! Original version
// function duplicateCharMinCount(string, minCount) {
//     const countObj = {};
//     const finalArray = [];

//     for (let i = 0; i < string.length; i++) {
//         // console.log("-=-=-=-=-=-=-=-=-=-=-=-=NewLoop-=-=-=-=-=-=-=-=-=-=-=-=-");
//         const currChar = string[i];

//         // console.log(currChar, countObj, countObj[currChar]); // before we check

//         if (countObj[currChar]) {
//             countObj[currChar]++;
//         } else {
//             countObj[currChar] = 1;
//         }

//         // console.log(currChar, countObj, countObj[currChar]); // after we check
//     }

//     console.log(countObj)
//     for (let key in countObj) {
//         console.log(key);
//         console.log("value at that key", countObj[key])
//         const currCharCount = countObj[key]

//         if (currCharCount >= minCount) {
//             finalArray.push(key);
//         }
//     }

//     return finalArray;
// }

// //! Version with helper and comments
// const countCharacters = (string) => {
//     const countObj = {};

//     for (let i = 0; i < string.length; i++) {
//         const currChar = string[i];

//         // does this currChar exist as a key in my object?

//         // currChar = 'n'
//         // countObj = { b: 1, a: 1}

//         // does 'n' exist in { b: 1, a: 1, n: undefined}

//         //! Next loop

//         // currChar = 'a'
//         // countObj = { b: 1, a: 1, n: 1}

//         // does 'a' exist in { b: 1, a: 1, n: 1}

//         if (countObj[currChar] !== undefined) {
//             // 'a' DOES exist in { b: 1, a: 1, n: 1}
//             // { b: 1, a: 1 + 1, n: 1}
//             countObj[currChar]++;
//             // { b: 1, a: 2, n: 1}
//         } else {
//             // 'n' does not exist in { b: 1, a: 1}
//             // { b: 1, a: 1} add 'n' : 1
//             countObj[currChar] = 1;

//             // { b: 1, a: 1, n: 1}
//         }

//         if (!countObj[currChar]) {
//             countObj[currChar] = 1;
//         } else {
//             countObj[currChar]++;
//         }
//     }

//     return countObj;
// };

//! Version with helper and filter
const countCharacters = (string) => {
    const countObj = {};

    for (let i = 0; i < string.length; i++) {
        const currChar = string[i];

        if (!countObj[currChar]) {
            countObj[currChar] = 1;
        } else {
            countObj[currChar]++;
        }
    }

    return countObj;
};

const duplicateCharMinCount = (string, minCount) => {
    const countObj = countCharacters(string);

    const allKeys = Object.keys(countObj);

    return allKeys.filter((char) => countObj[char] >= minCount);
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = duplicateCharMinCount;
