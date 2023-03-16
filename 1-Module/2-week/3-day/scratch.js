// let hasE = function (word) {
//     if (word.toLowerCase().includes("e")) {
//         return true;
//     }
//     return false;
// };

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

// let removeEWords = function (sentence) {
//     let wordArr = sentence.split(" ");

//     let finalArray = loopAndSplice(wordArr);

//     return finalArray;
// };

// console.log(removeEWords("What time is it everyone?")); // 'What is it'
// console.log(removeEWords("ENTER the building")); // 'building'

// let originalRemoveE = function (sentence) {
//     let wordArr = sentence.split(" ");

//     for (let i = 0; i < wordArr.length; i++) {
//         let currWord = wordArr[i];

//         if (currWord.toLowerCase().includes("e")) {
//             wordArr.splice(i, 1);
//             i--;
//         }
//     }

//     return wordArr;
// };

// let countNumberOfEWords = function(sentence) {
//     // loop through a string and count e words
//     if (hasE( currWord))

// }

// let yell = function (word) {
//     console.log("yell started running!");
//     return word.toUpperCase();
// };

// let whisper = function (word) {
//     console.log("whisper started running!");
//     return word.toLowerCase();
// };

// let connectWithDots = function (array) {
//     console.log("connectWithDots started running!", array);
//     return array.join(" ... ");
// };

// let echo = function (string) {
//     console.log("echo started running!");
//     return connectWithDots([yell(string), string, whisper(string)]);
// };

// console.log(echo("Mom!")); // => prints "MOM! ... Mom! ... mom!"
// console.log(echo("hey")); // => prints "HEY ... hey ... hey"
// console.log(echo("JUMp")); // => prints "JUMP ... JUMp ... jump"

/**
 * !Popper
Write a function popper(array, num) that takes in an array and a number as args.
The function should remove the last num elements from the array, mutating the 
original array. The function should return a new array containing the elements
that were removed. 

Define this function using function expression syntax.
 */

// let popper = function (array, num) {
//     let finalArray = [];

//     // on every loop
//     for (let i = 0; i < num; i++) {
//         // remove the last value
//         let removedVal = array.pop();
//         // push that value to finalArray

//         finalArray.push(removedVal);
//     }

//     return finalArray;
// };

// let arr1 = ["a", "b", "c", "d", "e"];
// console.log(popper(arr1, 2)); // [ 'e', 'd' ]
// console.log(arr1); // [ 'a', 'b', 'c' ]

// let arr2 = ["kale", "spinach", "collard greens", "cabbage"];
// console.log(popper(arr2, 1)); // [ 'cabbage' ]
// console.log(arr2); // [ 'kale', 'spinach', 'collard greens' ]

/**
 * !Choose Primes
Write a function choosePrimes(nums) that takes in an array of numbers as args. 
The function should return a new array containing the primes from the original 
array. A prime number is a number that is only divisible by 1 and itself.

Hint: consider creating a helper function to check if a number is prime!
 */

// let isThisNumberPrime = function (num) {
//     if (num < 2) {
//         return false;
//     }

//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }

//     return true
// };

// let choosePrimes = function (nums) {
//     // create container
//     let finalArray = [];

//     // loop through the array
//     for (let i = 0; i < nums.length; i++) {
//         // check if each num is prime
//         let currNum = nums[i];

//         if (isThisNumberPrime(currNum)) {
//             // if yes, push into container
//             finalArray.push(currNum);
//         }
//     }

//     return finalArray;
// };

// console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
// console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]
// console.log(choosePrimes([-3, 0, 1, 2, 3])); // [ 2, 3 ]

/**
 * !Abbreviate Words
Write a function abbreviateWords(sentence) that takes in a sentence string. 
The function should return a new sentence where words that are longer than 4 
characters have their vowels removed. Hint: Consider creating a helper function
 to remove all vowels in a string.
 */

// let abbreviate = function (word) {
//     let vowels = "aeiouAEIOU";
//     let finalStr = "";

//     for (let i = 0; i < word.length; i++) {
//         let currChar = word[i];

//         if (!vowels.includes(currChar)) {
//             finalStr += currChar;
//         }
//     }

//     return finalStr;
// };

// let abbreviateWords = function (sentence) {
//     let wordArr = sentence.split(" ");

//     for (let i = 0; i < wordArr.length; i++) {
//         let currWord = wordArr[i];

//         if (currWord.length > 4) {
//             //! Set variable
//             let changedWord = abbreviate(currWord)
//             wordArr[i] = changedWord
//             //! Do it in one go
//             // wordArr[i] = abbreviate(currWord);
//         }
//     }

//     return wordArr.join(" ");
// };

// console.log(abbreviate("wonderful")); // 'wndrfl'
// console.log(abbreviate("mystery")); // 'mystry'
// console.log(abbreviate("Accordian")); // 'ccrdn'

// console.log(abbreviateWords("what a wonderful place to live")); // what a wndrfl plc to live
// console.log(abbreviateWords('she sends an excellent message ')); // she snds an xcllnt mssg

/**
 * !Contains Word
Write a function containsWord(sentence, targetWord) that accepts two strings as 
args. The function should return a boolean indicating whether the targetWord is 
found inside of the sentence. Solve this without using String's indexOf() or 
includes() methods.
 */

// let containsWord = function (sentence, targetWord) {
//     let wordArr = sentence.split(" ");

//     for (let i = 0; i < wordArr.length; i++) {
//         let currentWord = wordArr[i];

//         if (currentWord.toLowerCase() === targetWord.toLowerCase()) {
//             return true;
//         }
//     }

//     return false;
// };

// console.log(containsWord("sounds like a plan", "like")); // true
// console.log(containsWord("They are great", "they")); // true
// console.log(containsWord("caterpillars are great animals", "cat")); // false
// console.log(containsWord("Cast the net", "internet")); // false

// let abbreviate = function (word) {
//     let vowels = "aeiouAEIOU";
//     let charArr = word.split("");

//     for (let i = 0; i < charArr.length; i++) {
//         let currChar = charArr[i];

//         if (vowels.includes(currChar)) {
//             charArr.splice(i, 1);
//             i--;
//         }
//     }

//     return charArr.join('')
// };
// // console.log(abbreviate("wonderful")); // 'wndrfl'
// // console.log(abbreviate("mystery")); // 'mystry'
// console.log(abbreviate("Accordian")); // 'ccrdn'

/**
 * !Uncompress
Write a function uncompress(str) that takes in a "compressed" string as an arg. 
A compressed string consists of a character immediately followed by the number 
of times it appears in the "uncompressed" form. The function should return the 
uncompressed version of the string. See the examples. 

Hint: you can use the built-in Number function should convert a numeric string 
into the number type. For example. Number("4") // => 4
 */
let uncompress = function (str) {
    let finalStr = "";

    for (let i = 0; i < str.length; i += 2) {
        // every even index is a letter
        let letter = str[i];
        // every odd index is a number
        let number = str[i + 1];

        for (let j = 0; j < number; j++) {
            finalStr += letter;
        }
    }

    return finalStr;
};

console.log(uncompress("x3y4z2")); // 'xxxyyyyzz'
console.log(uncompress("a5b2c4z1")); // 'aaaaabbccccz'
console.log(uncompress("b1o2t1")); // 'boot'
