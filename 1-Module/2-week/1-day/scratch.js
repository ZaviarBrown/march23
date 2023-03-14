//! Two Dimensional Sum
// Write a function twoDimensionalSum(arr) that takes in a 2D array of
// numbers and returns the total sum of all numbers.

// let twoDimensionalSum = function (arr) {
//     let sum = 0;

//     // loop through outer array to look at each individual array
//     for (let i = 0; i <= arr.length - 1; i++) {
//         // isolate each indiv array
//         let currentArray = arr[i];

//         // loop through indiv array to look at each number
//         for (let j = 0; j <= currentArray.length - 1; j++) {
//             // isolate each number
//             let currentNum = currentArray[j];

//             // add indiv number to my sum
//             sum += currentNum;
//         }
//     }

//     // for (let i = 0; i <= arr.length - 1; i++) {
//     //     for (let j = 0; j <= arr[i].length - 1; j++) {
//     //         sum += arr[i][j];
//     //     }
//     // }

//     // for (let i = 0; i <= arr.length - 1; i++) {
//     //     let currentArray = arr[i];

//     //     for (let j = 0; j <= currentArray.length - 1; j++) {
//     //         let currentNum = currentArray[j];

//     //         sum += currentNum;
//     //     }
//     // }

//     return sum;
// };

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

// let twoDimConcatSum = function (arr) {
//     let mainArray = [];
//     let sum = 0;

//     // Create a 1D array called mainArray
//     for (let i = 0; i < arr.length; i++) {
//         let currArr = arr[i];
//         mainArray = mainArray.concat(currArr);
//     }

//     // Loop through mainArray and solve like a 1D array
//     for (let newIndex = 0; newIndex < mainArray.length; newIndex++) {
//         // sum += mainArray[newIndex];
//         let currNum = mainArray[newIndex];
//         sum += currNum;
//     }

//     return sum;
// };

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimConcatSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimConcatSum(arr2)); // 6

//! Pig Latin Recall
// Pig Latin is a fun take on the English language where you move any consonant
// cluster from the start of the word to the end of the word; when words begin
// on a vowel, you simply add "-yay". Vowels are "aeiou".

// Write a function pigLatinWord that takes in a word string and translates the
// word into Pig Latin. For this problem use the String's slice() method.
// The slice() method extracts a section of a string and returns it as a string.

// Hint: Remember the String.includes method!

// So the two rules for our version of Pig Latin are:

// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

//% console.log(vowels.includes(first)); // does 'aeiou' contain the entire string 'a'
//! console.log(first.includes(vowels)); // does "a" contain the entire string "aeiou"

// function pigLatinWord(word) {
//     let vowels = "aeiou";
//     let first = word[0];

//     // check if word's first character is a vowel
//     if (vowels.includes(first)) {
//         // if it is:
//         // return the word + "yay"
//         return word + "yay";
//     }
//     // first char is NOT a vowel

//     // loop through word to find the first vowel
//     for (let i = 0; i < word.length; i++) {
//         let currentChar = word[i];

//         if (vowels.includes(currentChar)) {
//             // once found, copy everything before the vowel
//             let endOfNewWord = word.slice(0, i);

//             // copy everything from first vowel onward,
//             let startOfNewWord = word.slice(i);

//             // return firstVowel + beforeFirstVowel + 'yay'
//             return startOfNewWord + endOfNewWord + "ay";
//         }
//     }
// }

// console.log(pigLatinWord("apple")); //=> "appleyay"
// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"
// console.log(pigLatinWord("hgffflkjnmbcvriplmzd")); //=> iplmzdhgffflkjnmbcvray

//! Least Common Multiple
// Write a function leastCommonMultiple(num1, num2) that accepts two numbers as
// arguments. The functions should return the smallest number that is divisible
// by both num1 and num2.

// num1 % num2 === 0 means that it's divisible
// iterate through all numbers until I find
// x % num1 === 0 && x % num2 === 0

// let leastCommonMultiple = function (num1, num2) {
//     for (let i = 1; i <= num1 * num2; i++) {
//         //? Good
//         // if (i % num1 === 0) {
//         //     if (i % num2 === 0) {
//         //         return i;
//         //     }
//         // }

//         //? Better
//         // if (i % num1 === 0 && i % num2 === 0) {
//         //     return i;
//         // }

//         //? Best
//         if (!(i % num1) && !(i % num2)) {
//             return i;
//         }
//     }
// };

// console.log(leastCommonMultiple(4, 6)); // 12
// console.log(leastCommonMultiple(3, 5)); // 15
// console.log(leastCommonMultiple(2, 10)); // 10

//! Remove Last Vowel Recall
// Write a function removeLastVowel(word) that takes in a string and returns
// the string with its last vowel removed.

let removeLastVowel = function (word) {
    // let vowels = ["a", "e", "i", "o", "u", undefined];
    let vowels = "aeiou";

    for (let i = word.length; i >= 0; i--) {
        let currChar = word[i];
        if (vowels.includes(currChar)) {
            console.log(currChar, "Inside the if statement");
            let startOfNewWord = word.slice(0, i);
            console.log(startOfNewWord, "start new word with undefined");
            let endOfNewWord = word.slice(i + 1);
            console.log(endOfNewWord, "end new word with undefined");
            return startOfNewWord + endOfNewWord;
        }
    }

    return word;
};

console.log(removeLastVowel("bootcamp")); // 'bootcmp'
// console.log(removeLastVowel("better")); // 'bettr'
// console.log(removeLastVowel("graph")); // 'grph'
// console.log(removeLastVowel("thy")); // 'thy'
// console.log(removeLastVowel('and')) // 'nd'
// console.log(removeLastVowel('pla')) // 'pl'

// let str = 'abc'

// console.log(str[str.length])

// console.log("hey" + undefined)
