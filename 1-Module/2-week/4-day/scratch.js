//! Secretly, EVERYTHING in JS is an Object...
// let val1 = "Zaviar";
// let val2 = 32;
// let val3 = true;
// let val4 = [];
// let val5 = function () {};
// let val6 = {};

// console.log(typeof val1, "is the type of", val1);
// // console.log(Array.isArray(val1));

// console.log(typeof val2, "is the type of", val2);
// // console.log(Array.isArray(val2));

// console.log(typeof val3, "is the type of", val3);
// // console.log(Array.isArray(val3));

// console.log(typeof val4, "is the type of", val4);
// // console.log(Array.isArray(val4));

// console.log(typeof val5, "is the type of", val5);
// console.log(typeof val6, "is the type of", val6);
// console.log(typeof undefined)

// let val = undefined;
// console.log(typeof val)
// if (typeof 50 === "number") {
//     console.log("This was truthy!");
// } else {
//     console.log("FAAALLLSSSYYYYY");
// }

// let myFunc = function (num1, num2) {
//     console.log(num1, "num1");
//     console.log(num2, "num2");
// };

// myFunc(1, null);

/**
 * !Rotate
Write a function rotate(array, num) that takes in an array and a number as args. 
When the num is positive, the elements of the array should be rotated to the right. 
When the num is negative, the elements of the array should be rotated to the left. 
The function should mutate the original array. 

Define this function using function expression syntax.
 */

// let myNum = 5;

// console.log(myNum + 5);
// console.log(myNum);

// let rotate = function (array, num) {
//     for (let i = 0; i < Math.abs(num); i++) {
//         if (num > 0) {
//             let rotation = array.pop();
//             array.unshift(rotation);
//         } else {
//             let rotation = array.shift();
//             array.push(rotation);
//         }
//     }
//     return array;
// };

// let theVeryBadNoGoodHorribleRotate = function (array, num) {
//     if (num < 0) {
//         //! Left
//         let cut = array.splice(0, num * -1);
//         array.push(cut[0]);
//         return;
//     } else {
//         //! Right
//         let cut = array.splice(array.length - num);

//         for (let i = cut.length - 1; i >= 0; i--) {
//             let eachCutValue = cut[i];
//             array.unshift(eachCutValue);
//         }
//         return;
//     }
// };

// let rotate = function (array, num) {
//     // if num > 0 rotate right
//     if (num > 0) {
//         // loop through array, num number of times
//         for (let i = 0; i < num; i++) {
//             // array.pop(), then array.unshift()
//             let rotation = array.pop();

//             array.unshift(rotation);
//         }
//     } else {
//         // else rotate left
//         // num = num * -1
//         num *= -1;

//         // loop through array, num * -1 number of times
//         for (let i = 0; i < num; i++) {
//             // array.shift(), then array.push()
//             let rotation = array.shift();

//             array.push(rotation);
//         }
//     }

//     return array;
// };

// let arr = ["a", "b", "c", "d", "e"];
// rotate(arr, 2);
// console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

// let animals = ["wombat", "koala", "opossum", "kangaroo"];
// rotate(animals, -1);
// console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]

// //! Repeating Translate
// // Write a function `repeatingTranslate` that accepts a sentence as an argument.
// // The function should translate the sentence according to the following rules:
// //
// // - words that are shorter than 3 characters are unchanged
// // - words that are 3 characters or longer are translated according to the
// //   following rules:
// //   - if the word ends with a vowel, simply repeat the word twice (example:
// //     'like'->'likelike')
// //   - if the word ends with a non-vowel, repeat all letters that come after the
// //     word's last vowel, including the last vowel itself (example:
// //     'trash'->'trashash')
// //
// // Note that if words are capitalized in the original sentence, they should remain
// // capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
// //
// // Can you reduce the problem into helper functions?

// console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

//! Max In Columns

/**
 * Write a function maxColumn(matrix) that takes in a 2-dimensional array
 * (matrix) and returns an array containing the maximum value in each column.
 * The array length should be equal to the number of columns, such that
 * returnArray[i] is equal to the max value in the ith column.
 */

// let maxColumn = function (matrix) {
//     let finalArr = [];

//     for (let i = 0; i < matrix.length; i++) {
//         console.log(
//             "-----------------------------New Outer Loop-----------------------------"
//         );
//         let subArr = matrix[i];
//         console.log(subArr);

//         for (let j = 0; j < subArr.length; j++) {
//             console.log("----------New Inner Loop----------");
//             let eachNum = subArr[j];
//             console.log('Normal way', matrix[i][j]);
//             console.log('Swapped way way', matrix[j][i]);
//         }
//     }
// };

// let maxColumn = function (matrix) {
//     let finalArr = [];

//     for (let col = 0; col < matrix.length; col++) {
//         let highestNum = -Infinity; // could be 0 with out test cases
//         for (let row = 0; row < matrix[0].length; row++) {
//             let currNum = matrix[row][col];

//             if (currNum > highestNum) {
//                 highestNum = currNum;
//             }
//         }

//         finalArr.push(highestNum);
//     }

//     return finalArr;
// };

// //! Normal left to right
// // matrix[i][j]

// //! Strange top to bottom
// // matrix[j][i]

// let matrix = [
//     [5, 9, 21],
//     [9, 19, 6],
//     [12, 14, 15],
// ];

// let matrix2 = [
//     [1, 2, 3], // 0
//     [4, 5, 6], // 1
//     [7, 8, 9], // 2
// ];

// console.log(maxColumn(matrix)); // [12, 19, 21]
// console.log(maxColumn(matrix2)); //

/**
 * !Choosey Endings
Write a function chooseyEndings that accepts an array of words and a suffix 
string as arguments. The function should return a new array containing the words
that end in the given suffix. If the value passed in is not an array, return an
empty array. HINT: There are built in JavaScript functions that will help with
determining if a strings ends a certain way. Go see if you can find it on MDN!
 */

// if (currWord.endsWith(endStr)) {
//     finalArr.push(currWord);
// }

// let chooseyEndings = function (wordArr, endStr) {
//     let finalArr = [];
//     let endLength = endStr.length;

//     for (let i = 0; i < wordArr.length; i++) {
//         let currWord = wordArr[i];
//         // find the last endStr.length number of character in currWord
//         let endingIndex = currWord.length - endLength;
//         // slice those characters
//         let copyOfEnd = currWord.slice(endingIndex);

//         if (copyOfEnd === endStr) {
//             finalArr.push(currWord);
//         }
//     }

//     return finalArr;
// };

// console.log(
//     chooseyEndings(
//         ["family", "hound", "catalyst", "fly", "timidly", "bond"],
//         "ly"
//     )
// );
// // [ 'family', 'fly', 'timidly' ]

// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// // [ ]

// console.log(chooseyEndings(17, 'ily'));
// // [ ]
