// // Does this given word contain the letter e?
// let hasE = function (word) {
//     if (word.toLowerCase().includes("e")) {
//         return true;
//     }

//     return false;
// };

// // Remove words with e
// let loopAndSplice = function (array) {
//     for (let i = 0; i < array.length; i++) {
//         let currWord = array[i];

//         if (hasE(currWord)) {
//             array.splice(i, 1);
//             i--;
//         }
//     }

//     return array;
// };

// // Removes all words from the sentence with the letter "e"
// let removeEWords = function (sentence) {
//     let wordArr = sentence.split(" ");

//     let newArr = loopAndSplice(wordArr);

//     return newArr;
// };

// // console.log(hasE("Zaviar")); // false
// // console.log(hasE("Tenten")); // true
// // console.log(hasE("Momo")); // false
// // console.log(hasE("Tiger")); // true
// // console.log(hasE("EGG")); // true

// console.log(removeEWords("What time hey is it everyone?")); // 'What is it'
// console.log(removeEWords("ENTER the building")); // 'building'

// let yell = function (str) {
//     console.log("This is yell running");

//     return str.toUpperCase();
// };

// // console.log(yell("Zaviar"));

// let whisper = function (string) {
//     console.log("This is whisper running");

//     return string.toLowerCase();
// };

// let addDots = function (strArray) {
//     console.log("This is addDots running");

//     return strArray.join(" ... ");
// };

// // Returns a string "echo-ized" with addDots
// let echo = function (banana) {
//     console.log("This is echo running");
//     return addDots([yell(banana), banana, whisper(banana)]);
// };

// let echoWithNoHelp = function (string) {
//     return (
//         string.toUpperCase() + " ... " + string + " ... " + string.toLowerCase()
//     );
// };

// console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
// console.log(echo("hey")); // => prints "HEY ... hey ... hey"
// console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"

// let echoWithoutAddDots = function (banana) {
//     return yell(banana) + " ... " + banana + " ... " + whisper(banana);
// };

// let printTheThing = function (aThing) {
//     console.log(aThing);
// };

// printTheThing(5 + 5)

/**
 * Choose Primes
Write a function choosePrimes(nums) that takes in an array of numbers as args.
 The function should return a new array containing the primes from the original
  array. A prime number is a number that is only divisible by 1 and itself.
   Hint: consider creating a helper function to check if a number is prime!
 */

/** Plan for choose primes
 * Create new array
 * Loop through passed in array, look at each num
 * check if num is prime
    if it is, push to newArr
    else ignore
 */
// 0, 1, 2 are scary edge cases

// let isThisNumPrime = function (num) {
//     if (num < 2) {
//         return false;
//     }

//     // if (num === 2) {
//     //     return true;
//     // }

//     for (let i = 2; i < num; i++) {
//         // if the number is divisible by i, it's not prime, so false
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true;
// };

// let choosePrimes = function (nums) {
//     let newArray = [];

//     for (let i = 0; i < nums.length; i++) {
//         let currNum = nums[i];
//         if (isThisNumPrime(currNum)) {
//             newArray.push(currNum);
//         }
//     }
//     return newArray;
// };

// let choosePrimes = function (nums) {
//     let newArr = [];

//     for (let i = 0; i < nums.length; i++) {
//         let currNum = nums[i];

//         if (isThisNumPrime(currNum)) {
//             newArr.push(currNum);
//         }
//     }

//     return newArr;
// };

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]



// // Write a function longestWord(sentence) that takes in a sentence string as an argument. The function should return the longest word in the sentence. If there is more than one "longest word", return the first of these instances.

// // GOAL return a string

// function longestWord(sentence){
//     let wordArr = sentence.split(" ")
//     let longestWord = ''
//     // console.log(wordArr)

//     for (let i = 0; i < wordArr.length; i++){
//         let currentWord = wordArr[i]
//         if (currentWord.length > longestWord.length){
//             longestWord = currentWord
//         }
//     }
//     return longestWord
// }



// // console.log(longestWord('where did everyone go')); // 'everyone'
// console.log(longestWord('prefer simplicity over complexity')); // 'simplicity'
// // console.log(longestWord('')); // ''