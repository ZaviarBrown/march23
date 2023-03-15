// let cats = ["Momo", "Tenten", "Kiki"];
// let newKitties = cats.slice(1);
// console.log(cats, "cats after slice");
// console.log(newKitties, "newKitties after slice");

// let cats = ["Momo", "Tenten", "Kiki", "Garfield"];
// let newKittiess = cats.splice(1, 2);
// cats.splice(1, 2);
// console.log(cats, "cats after SPLICE");
// console.log(newKittiess, "newKittiess after SPLICE");

// console.log(cats);
// console.log(newKitties);

// let cats = ["Momo", "Tenten", "Kiki"];

// // let withoutSlice = cats;

// // cats.push("Zaviar");

// // console.log(cats, "original cats");
// // console.log(withoutSlice, "withoutSlice");

// let slicedKitties = cats.slice();

// // cats.push("Zaviar");
// slicedKitties.push("Zaviar");

// console.log(cats, "original cats");
// console.log(slicedKitties, "slicedKitties");

// let str = "Z";

// let otherStr = str;

// otherStr = "hey";

// console.log(otherStr, str)

// let sentenceArray = [
//     "The",
//     "quick",
//     "brown",
//     "fox",
//     "jumps",
//     "over",
//     "the",
//     "lazy",
//     "dog.",
// ];

// let str = "The quick brown fox jumps over the lazy dog.";

// let sentenceArray = str.split(" ");

// console.log(sentenceArray)

// console.log(sentenceArray.join(", "))

// let phoneNum = [555, 555, 5555]

// console.log(sentenceArray.join("_/?<)))"));

/**
 * 
 * ! Rotate Right
Write a function rotateRight(array, num) that takes in an array and a number as 
args. The function should return a new array where the elements of the array 
are rotated to the right num times. The function should not mutate the original 
array and instead return a new array. 

Define this function using function expression syntax. 

HINT: you can use Array's slice() method to create a copy of an array
 */

// let rotateRight = function (array, num) {
//     // Make a copy of the array
//     let copyArray = array.slice();

//     // loop through array copy and
//     for (let i = 0; i < num; i++) {
//         // remove the last element and
//         let removedVal = copyArray.pop();
//         // add that element to the front of the copy
//         copyArray.unshift(removedVal);
//     }

//     // return my copy
//     return copyArray;
// };

// let rotateRight = function (array, num) {
//     // Make a copy of the array
//     let copyArray = array.slice();
//     let startOfRemove = array.length - num;

//     let removedArr = copyArray.splice(startOfRemove);

//     // console.log(copyArray);
//     // console.log(removedArr);

//     // return my copy
//     let finalArray = removedArr.concat(copyArray);
//     return finalArray;
// };

// let arr = ["a", "b", "c", "d", "e"];
// // console.log(rotateRight(arr, 1)); // [ 'e', 'a', 'b', 'c', 'd' ]
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// // console.log(rotateRight(arr, 3)); // [ 'c', 'd', 'e', 'a', 'b' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ["wombat", "koala", "opossum", "kangaroo"];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

// /**
//  * !Average Val
//  * Write a function avgVal(arr) that accepts an array as an arg. The function
//  * should return the average of all values in the array. If the array is empty,
//  *  it should return null.
//  */

// let avgVal = function (arr) {
//     // if (arr.length === 0) {
//     if (!arr.length) {
//         return null;
//     }

//     let sum = 0;

//     for (let i = 0; i < arr.length; i++) {
//         let currNum = arr[i];

//         sum += currNum;
//     }

//     return sum / arr.length;
// };

// console.log(avgVal([5, 10])); // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
// console.log(avgVal([])); // null


// // Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them.

// // GOAL: new string

// function removeEWords(sentence){
//     let sentenceArr = sentence.split(" ")
//     // console.log(sentenceArr, "sentenceArr")
//     let wantedWords = []
//     for ( let i = 0; i < sentenceArr.length; i++){
//         let currWord = sentenceArr[i]
//         if (!currWord.toLowerCase().includes('e')){
//             // console.log("this word has the letter e!", currWord)
//             wantedWords.push(currWord)
//             // console.log("this is our new array", wantedWords)
//         }
//     }
//     let newSentence = wantedWords.join(" ")
//     return newSentence
// }

// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'

/**
 * !Max Value
Write a function maxValue(nums) that takes in an array of numbers as an arg. 
The function should return the largest number of the array. If the array is 
empty, the function should return null.
 */

// let maxValue = function (nums) {
//     if (nums.length === 0) {
//         return null;
//     }

//     let maxNumberIveSeen = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         let currNum = nums[i];

//         if (currNum > maxNumberIveSeen) {
//             maxNumberIveSeen = currNum;
//         }
//     }

//     return maxNumberIveSeen;
// };

// console.log(maxValue([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxValue([-2, -3, -7, 3])); // 3 // -2
// console.log(maxValue([-2, -3, -7, -30])); // -2
// console.log(maxValue([])); // null

/**
 * !Long Words
Write a function longWords(words) that takes in an array of words. The function
 should return an array containing only the words that are longer than
  5 characters.
 */

// let longWords = function (words) {
//     let longLong = [];

//     // loop through array
//     for (let i = 0; i < words.length; i++) {
//         let currWord = words[i];

//         // if currWord length is > 5, keep it!
//         if (currWord.length > 5) {
//             longLong.push(currWord);
//         }
//         // otherwise, don't keep it!
//     }

//     return longLong;
// };

// console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
// console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]

// Write a function initials(name) that accepts a full name as an arg. The
// function should return the initials for that name.

let initials = function (name) {
    let nameArr = name.split(" ");
    let strContainer = "";

    for (let i = 0; i < nameArr.length; i++) {
        let currName = nameArr[i];

        console.log("-------------New Loop-------------")
        console.log("strContainer before +=", strContainer)
        console.log("currName's first character", currName[0])

        strContainer += currName[0]; //.toUpperCase()

        console.log("strContainer after +=", strContainer);

    }

    return strContainer.toUpperCase();
};

// console.log(initials("anna paschall")); // 'AP'
// console.log(initials("Mary La Grange")); // 'MLG'
// console.log(initials("brian crawford scott")); // 'BCS'
console.log(initials("Benicio Monserrate Rafael del Toro Sánchez")); // 'BMRDTS'
