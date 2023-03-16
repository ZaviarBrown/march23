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

/**
 * !Hipsterfy
 * Write a function hipsterfy(sentence) that takes in a sentence string and
 * returns the sentence where every word is missing its last vowel.
 */

// let removeLastVowel = function (word) {
//     let vowels = "aeiouAEIOU";
//     let finalStr = "";

//     for (let i = word.length - 1; i >= 0; i--) {
//         // i = 1 // i = 0
//         let currChar = word[i];

//         if (vowels.includes(currChar)) {
//             let startOfStr = word.slice(0, i);
//             let endOfStr = word.slice(i + 1);
//             finalStr += startOfStr + endOfStr;

//             return finalStr;
//         }
//     }
// };

// let hipsterfy = function (sentence) {
//     let sentArr = sentence.split(" ");

//     for (let i = 0; i <= sentArr.length - 1; i++) {
//         let currWord = sentArr[i];
//         let removedVersion = removeLastVowel(currWord);

//         sentArr[i] = removedVersion;
//     }

//     return sentArr.join(" ");
// };

// console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
// console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'
// console.log(hipsterfy("panthers are great animals")); // 'panthrs ar gret animls'

/**
 * Write a function uncompress(str) that takes in a "compressed" string as an arg. 
 * A compressed string consists of a character immediately followed by the 
 * number of times it appears in the "uncompressed" form. The function should 
 * return the uncompressed version of the string. See the examples. 

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4
 */

// even number index === string

// odd number index === number
// let uncompress = function (str) {
//     let finalStr = "";

//     for (let i = 0; i < str.length; i += 2) {
//         //i will be an even number, meaning a string
//         let currString = str[i];
//         // i + 1 will be an odd number, meaning a number
//         let currNumber = Number(str[i + 1]);

//         for (let j = 0; j < currNumber; j++) {
//             finalStr += currString;
//         }

//     }

//     return finalStr;
// };

// console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

/**
 * !Fizz Buzz Recall
Write a function fizzBuzz(max) that accepts a number as an arg. The function 
should return an array containing all positive numbers less than max that are 
divisible by either 3 or 5, but not both.
 */

let fizzBuzz = function (max) {
    let finalArr = [];

    for (let i = 1; i < max; i++) {
        //! 1st
        // if (i % 3 === 0) {
        //     if (i % 5 !== 0) {
        //         finalArr.push(i);
        //     }
        // } else if (i % 5 === 0) {
        //     if (i % 3 === 0) {
        //         finalArr.push(i);
        //     }
        // }
        //! 2nd
        // if (!(i % 3 === 0 && i % 5 === 0)) {
        //     if (i % 3 === 0) {
        //         finalArr.push(i);
        //     } else if (i % 5 === 0) {
        //         finalArr.push(i);
        //     }
        // }
        //! 3rd
        if (i % 15 !== 0 && (i % 3 === 0 || i % 5 == 0)) {
            finalArr.push(i);
        }
    }

    return finalArr;
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]


