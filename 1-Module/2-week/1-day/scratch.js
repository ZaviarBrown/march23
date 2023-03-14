// /**
//  *
//  * Write a function twoDimensionalSum(arr) that takes in a 2D array of numbers
//  * and returns the total sum of all numbers.
//  */
// // arr holds arrays
// // inner arrays hold numbers

//     // // loop through arr to look at each inner array
//     // [1, 2, 3] //.length = 3
//     // // i is allowed to be: 0, 1, 2

//     // [1, 2, 3] //.length - 1 = 2
//     // // i is allowed to be: 0, 1, 2

// let twoDimensionalSum = function (arr) {
//     let sum = 0;

//     for (let i = 0; i <= arr.length - 1; i++) {
//         // isolate each individual array
//         let currentArray = arr[i]; // [1, 3]

//         for (let j = 0; j < currentArray.length; j++) {
//             // isolate each individual number
//             let currentNumber = currentArray[j];

//             // add that number to sum
//             sum += currentNumber;
//         }
//     }

//     return sum;
// };

// // let name = 'Zaviar'
// // console.log(name[i]);
// // console.log(name[1]);
// // console.log(name[2]);

// let arr1 = [[1, 3], [-4, 7, 10], [2]];
// console.log(twoDimensionalSum(arr1)); // 19

// let arr2 = [[], [3, 1, 2]];
// console.log(twoDimensionalSum(arr2)); // 6

// // let imaginaryArray = [1, 3]

// // for (let z = 0; z < imaginaryArray.length; z++) {
// //     let currentNumber = imaginaryArray[z]
// //     console.log(currentNumber)
// // }
// 1. For words that start with a vowel, add 'yay' to the end of the word.
// 2. For words that start with a non-vowel, move all letters that come
// **before the first vowel** to the **end of the word** then add 'ay'

/**
 * Pig Latin is a fun take on the English language where you move any consonant 
 * cluster from the start of the word to the end of the word; when words 
 * begin on a vowel, you simply add "-yay". Vowels are "aeiou". 

Write a function pigLatinWord that takes in a word string and translates the 
word into Pig Latin. For this problem use the String's slice() method. The 
slice() method extracts a section of a string and returns it as a string. 

Hint: Remember the String.includes method!
 */

// So the two rules for our version of Pig Latin are:

// let vowelArray = ["a", "e", "i", "o", "u"];
// function pigLatinWord(word) {
//     let vowels = "aeiou";
//     let firstChar = word[0];
//     let firstCharVowel = vowels.includes(firstChar);

//     // ["aeiou", 'a'] includes "a"qq
//     if (firstCharVowel) {
//         return word + "yay";
//     }

//     for (let i = 0; i < word.length; i++) {
//         let currentLetter = word[i];
//         let currCharIsVowel = vowels.includes(currentLetter);

//         if (currCharIsVowel) {
//             let startOfNewWord = word.slice(i); // anana || ash
//             let endOfNewWord = word.slice(0, i); // b || tr

//             let pigWord = startOfNewWord + endOfNewWord + "ay";

//             return pigWord;
//         }
//     }
// }

// // console.log(pigLatinWord("apple")); //=> "appleyay"
// // console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray"
// console.log(pigLatinWord('chtrsfjjklmowrsddda')) // => owrsdddachtrsfjjklmay

function removeLastVowel(word) {
    let vowels = "aeiou";
    let wordVowelIndecies = [];
    for (let i = 0; i < word.length; i++) {
        let letterIndex = word[i];
        if (vowels.includes(letterIndex)) {
            wordVowelIndecies.push(i);
        }
    }
    if (wordVowelIndecies.length === 0) {
        return word;
    }
    let lastVowelIndex = wordVowelIndecies[wordVowelIndecies.length - 1];
    let newStr = word.slice(0, lastVowelIndex) + word.slice(lastVowelIndex + 1);

    return newStr;
}
console.log(removeLastVowel("bootcamp")); // 'bootcmp'
console.log(removeLastVowel("better")); // 'bettr'
console.log(removeLastVowel("graph")); // 'grph'
console.log(removeLastVowel("thy")); // 'thy'
