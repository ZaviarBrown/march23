// let val1 = "Zaviar";
// let val2 = 507;
// let val3 = true;
// let val4 = [];
// let val5 = {};
// let val6 = function () {}

// console.log(val1, "is a", typeof val1);
// console.log(val2, "is a", typeof val2);
// console.log(val3, "is a", typeof val3);
// console.log(val4, "is a", typeof val4);

// console.log(Array.isArray(val1));
// console.log(Array.isArray(val2));
// console.log(Array.isArray(val3));
// console.log(Array.isArray(val4));
// console.log(Array.isArray(val5));

// console.log(val5, "is a", typeof val5);

// console.log("" === "");
// console.log(5 === 5);

// let myArr = []
// console.log(myArr.length === 0)
// console.log([] === []);
// console.log(myArr === myArr);

// console.log(null);

// let myCoolFunction = function (num1, num2) {
//     if (num2 === null ) {
//         console.log("This was truthy");
//     } else {
//         console.log("FALSSYYYYYY");
//     }
// };

// myCoolFunction(5);

/**
 * !Rotate
Write a function rotate(array, num) that takes in an array and a number as args.
 When the num is positive, the elements of the array should be rotated to the right. 
 When the num is negative, the elements of the array should be rotated to the left. 
 The function should mutate the original array. 

Define this function using function expression syntax.
 */

// if num > 0 = go right, else go left
//! Right
// array method to remove from back and add to front
// array.pop() array.unshift()
//! Left
// array method to remove from front and add to back
// array.shift() array.push()

// let rotate = function (array, num) {

//     for (let i = 0; i < Math.abs(num); i++) {
//         if (num > 0) {
//             //! Right
//             array.unshift(array.pop());
//         } else {
//             //! Left
//             array.push(array.shift());
//         }
//     }

//     return array;
// };

// let rotate = function (array, num) {
//     if (num > 0) {
//         //! Right
//         for (let i = 0; i < num; i++) {
//             let rotation = array.pop();

//             array.unshift(rotation);
//         }
//     } else {
//         //! Left
//         num *= -1;
//         for (let i = 0; i < num; i++) {
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

/**
 * !Alternating Words
Write a function alternatingWords that accepts an array of words as an argument.
 The function should mutate the input array such that the words alternate between
  fully uppercase or lowercase. The first word should be uppercase.
 */

// let alternatingWords = function (array) {
//     for (let i = 0; i < array.length; i += 2) {
//         array[i] = array[i].toUpperCase();

//         // if (array[i + 1] !== undefined) {
//         // array[i + 1] = array[i + 1].toLowerCase();
//         console.log(i, array[i + 1]);
//         // }
//     }

//     return array;
// };

// let alternatingWords = function (array) {
//     // for (let i = 0; i < array.length; i++) {
//     //     let currWord = array[i];

//     //     if (i % 2 === 0) {
//     //         // even index === .toUpperCase()
//     //         array[i] = currWord.toUpperCase();
//     //     } else {
//     //         // odd index === .toLowerCase()
//     //         array[i] = currWord.toLowerCase();
//     //     }
//     // }

//     for (let i = 0; i < array.length; i++) {

//         if (i % 2 === 0) {
//             // even index === .toUpperCase()
//             array[i] = array[i].toUpperCase();
//         } else {
//             // odd index === .toLowerCase()
//             array[i] = array[i].toLowerCase();
//         }
//     }

//     return array;
// };

// let words1 = ["Belka", "STRELKA", "laika", "DEZIK"];
// alternatingWords(words1);
// console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik' ]

// let words2 = ["Yellowstone", "Yosemite", "Zion", "Acadia", "Shenandoah"];
// alternatingWords(words2);
// console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia', 'SHENANDOAH' ]

// let myArr = [1, 2, 3];

// let num1 = myArr[0];
// let num2 = myArr[1];
// let num3 = myArr[2];
// myArr[0] = "Zaviar";

// console.log(num1);
// console.log(num2);
// console.log(num3);

// num1 += 50;

// num2 = num2 * 5;

// num3 = "heyo";

// console.log(num1);
// console.log(num2);
// console.log(num3);

// console.log(myArr)

// let myArr = [1, 2, 3];
// let num1 = myArr[0];
// myArr[0] = "Zaviar";
// console.log(num1);

//! Repeating Translate
// Write a function `repeatingTranslate` that accepts a sentence as an argument.
// The function should translate the sentence according to the following rules:
//
// - words that are shorter than 3 characters are unchanged
// - words that are 3 characters or longer are translated according to the
//   following rules:
//   - if the word ends with a vowel, simply repeat the word twice (example:
//     'like'->'likelike')
//   - if the word ends with a non-vowel, repeat all letters that come after the
//     word's last vowel, including the last vowel itself (example:
//     'trash'->'trashash')
//
// Note that if words are capitalized in the original sentence, they should remain
// capitalized in the translated sentence. Vowels are the letters a, e, i, o, u.
//
// Can you reduce the problem into helper functions?

// let findLastVowelIndex = function (word) {
//     let vowels = "aeiouAEIOU";

//     // loop through word
//     for (let i = word.length - 1; i >= 0; i--) {
//         let currLetter = word[i];
//         if (vowels.includes(currLetter)) {
//             // return i when word[i] is a vowel
//             return i;
//         }
//     }

//     return null;
// };

// let repeatingTranslate = function (sent) {
//     let wordArr = sent.split(" ");
//     let finalArr = [];

//     for (let i = 0; i < wordArr.length; i++) {
//         let currWord = wordArr[i];
//         // if word .length < 3, just push to final
//         if (currWord.length < 3) {
//             finalArr.push(currWord);
//         } else {
//             let lastVowelIndex = findLastVowelIndex(currWord);
//             //if word ends with vowel, push word + word
//             if (lastVowelIndex === currWord.length - 1) {
//                 finalArr.push(currWord + currWord);
//             } else if (lastVowelIndex === null) {
//                 finalArr.push(currWord);
//             } else {
//                 // else copy from last vowel to the end and add to word
//                 let endOfWord = currWord.slice(lastVowelIndex);
//                 finalArr.push(currWord + endOfWord);
//             }
//         }
//     }

//     return finalArr.join(" ");
// };

// console.log(repeatingTranslate("we like to go running fast")); // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash")); // "he cannotot findind thethe trashash"
// console.log(repeatingTranslate("pasta is my favorite dish")); // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France")); // "herer familyily flewew to FranceFrance"

/**
 * !Max in Columns
Write a function maxColumn(matrix) that takes in a 2-dimensional array (matrix) 
and returns an array containing the maximum value in each column. The array 
length should be equal to the number of columns, such that returnArrayi is equal 
to the max value in the ith column.
 */

// let maxColumn = function (matrix) {
//     let finalArr = [];

//     for (let col = 0; col < matrix.length; col++) {
//         console.log("--------New Loop----------");
//         let currArr = matrix[col];
//         let maxVal = -Infinity;
//         for (let row = 0; row < currArr.length; row++) {
//             let currNum = matrix[row][col];

//             if (maxVal < currNum) {
//                 maxVal = currNum;
//             }
//         }

//         finalArr.push(maxVal);
//     }

//     return finalArr;
// };

// // //! normally
// // arr[i][j]

// // //! columnly
// // arr[j][i]

// matrix = [
//     [5, 9, 21, 55, 2],
//     [9, 19, 6, 20, 15],
//     [12, 14, 15, 4, 98],
// ];

// // matrix = [
// //     [5, 9, 21],
// //     [9, 19, 6],
// //     [12, 14, 15],
// // ];

// console.log(maxColumn(matrix)); // [12, 19, 21]
