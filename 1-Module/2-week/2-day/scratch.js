// let cats = ["Momo", "Tenten", "Kiki"];
// let newKitties = cats.splice(1, 2, "Tora", "Zaviar", "Kirin");
// console.log(newKitties, "newKitties");
// console.log(cats, "cats");

// let cats = ["Momo", "Tenten", "Kiki"];
// let newKitties = cats.slice(0);

// console.log(cats, "cats");
// console.log(newKitties, "newKitties");
// cats.push("Zaviar");

// console.log(cats, "cats");
// console.log(newKitties, "newKitties");

// let cats = ["Momo", "Tenten", "Kiki"];
// let newKitties = cats
// console.log(cats, "cats");
// console.log(newKitties, "newKitties");
// cats.push("Zaviar");

// console.log(cats, "cats");
// console.log(newKitties, "newKitties");

// let cats = ["Momo", "Tenten", "Kiki"];
// let newKitties = cats.splice(0, cats.length, "Garfield");
// console.log(newKitties, "newKitties");
// console.log(cats, "cats");

// let sentence = [
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

// let stringArray = str.split(" ");
// console.log(stringArray);
// console.log(stringArray.join(" ANYTHING ") + " ANYTHING ");
// console.log(str);

// let phoneArr = [555, 555, 5555]

// console.log(phoneArr.join('-'))

// let str = "I don't know what I want to eat";
// let newStr = str.split("I").join("we");
// console.log(str.split("I "));
// console.log(newStr); // 'we don't know what we want to eat'

//! Rotate Right
// Write a function rotateRight(array, num) that takes in an array and a
// number as args. The function should return a new array where the elements
// of the array are rotated to the right num times. The function should not
//  mutate the original array and instead return a new array.

// Define this function using function expression syntax.

// HINT: you can use Array's slice() method to create a copy of an array

// // First loop: i = 0
// // Second loop: i = 1
// // Third loop: i = 2

// // First loop: i = 1
// // Second loop: i = 2
// for (let i = 1; i <= num; i++) {

// let rotateRight = function (array, num) {
//     // Create a copy of the array
//     let copyArr = array.slice();

//     // loop through array copy
//     for (let i = 1; i <= num; i++) {
//         // Remove the last value of the array
//         let lastValue = copyArr.pop();
//         // add it to the front
//         copyArr.unshift(lastValue);
//     }

//     return copyArr
// };

// let arr = ["a", "b", "c", "d", "e"];
// // console.log(rotateRight(arr, 1)); ['e', 'a', 'b', 'c', 'd'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// // console.log(rotateRight(arr, 3)); // ['c', 'd', 'e', 'a', 'b' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

// let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
// console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]

// let rotateRight = function (array, num) {
//   let newArray = array.slice();
//   newArray = newArray.splice(num + 1);

//   for (j = 0; j <= num ; j++) {
//     newArray.push(array[j]);  //, array.length, array[j]
//     console.log('newArray' + j + newArray);
//   }

//   return newArray;
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let removeEWords = function (sentence) {
    let wordArr = sentence.split(" ");
    for (let i = 0; i < wordArr.length; i++) {
        let currWord = wordArr[i];
        // if (currWord.toLowerCase().includes("e")) {
        if (currWord.toUpperCase().includes("E")) {
            wordArr.splice(i, 1);
            i--;
        }

    }

    return wordArr;
};

// console.log(removeEWords("What time hey is it everyone?")); // 'What is it'
// console.log(removeEWords("Enter the building")); // 'building'
// console.log(removeEWords("Elk the building")); // 'building'
// console.log("😍😍😍😍")

// console.log("a" < "b");
// console.log("Z" < "b");
// console.log("z" < "b");
