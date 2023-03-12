// function myFuncName() {
//     console.log("Hello from myFuncName!");

//     return "This is the return from myFuncName!";
// }

// myFuncName()

// let myFuncName = function () {
//     console.log("Hey");
// };

// myFuncName();

// let name = "Alvin";
// let age = 1000;
// let getAvg = function (num1, num2, aFunc) {
//     console.log(aFunc);
//     // aFunc()
//     return "This worked!";
// };

// console.log("------------------Don't invoke myFuncName-----------------------");
// console.log(name, age, getAvg(4, 2, myFuncName)); // "Alvin", 1000, 3
// console.log("------------------Invoking myFuncName-----------------------");

// console.log(name, age, getAvg(4, 2, myFuncName())); // "Alvin", 1000, 3

// const arr = [getAvg, name, age];

// console.log(arr[0](6, 4)); // 5

// let arr = ["a", "b", "c"];

// console.log(arr)

// arr[1] = "x";

// console.log(arr); // ["a", "x", "c"];

// arr = [1, 2, 3]

// console.log(arr)

// let arr = ["a", "b", "c"];

// console.log(arr);

// arr = ["a", "b", "c"];

// console.log(arr);
// let str = "abc";

// console.log(str[1]); // b

// str[1] = "x";

// console.log(str); // 'abc';

// let arr = ["a", "b", "c"];
// // arr[0] = "c"
// // arr[2] = 'a'
// arr[0] = 'a'

// console.log(arr)

// // arr = ["c", "b", "a"];

// let str = "abc";
// str += "d"; // str = str + 'd';
// console.log(str); // 'abcd'
// console.log(str + "50"); // 'abcd50'

// console.log(str)

// let animals = ["ant", "bear", "dog"];
// // console.log(animals);
// // animals.push("cat");
// // console.log(animals)

// // appends "cat" to animals && returns length
// let animalLength = animals.push("cat");

// console.log(animals); // ["ant", "bear", "dog", "cat"]
// console.log(animalLength); // 4

// animalLength = animals.push("Momo");

// console.log(animals);
// console.log(animals.length);
// console.log(animalLength);
// let myVal = true;
// let myFunc = function () {
//     console.log("Hey");
// };

// let myStr = "Zaviar";
// let myArr = ["Zaviar", "Kirin", "Momo", 50, myVal, myFunc];

// // console.log(myStr + "!");
// console.log(myArr + "!");
// // console.log("hello" + 2394);
// // console.log(myArr);
// let myWeirdString = myArr + "!";
// console.log(myWeirdString[myWeirdString.length - 1])
// console.log(myWeirdString[myWeirdString.length - 2]);

// let dogs = ["Fido", "Rover"];
// console.log(dogs);

// let nasaRelatedThings = [];
// console.log(nasaRelatedThings);

// let poppedReturn = dogs.pop();
// nasaRelatedThings.push(poppedReturn);

// console.log(dogs, "dogs");
// console.log(poppedReturn, "Returned thing");
// console.log(nasaRelatedThings, "nasa");
// console.log(dogs);
// dogs.pop();
// console.log(dogs);
// dogs.pop();
// console.log(dogs); // ['Fido']
// dogs.push("Tenten");
// console.log(dogs);
// dogs = ["buildings"];
// dogs[0]
// console.log(dogs);

//removes Rover from dogs and returns Rover
// let lastDog = dogs.pop();

// console.log(dogs); // ['Fido']
// console.log(lastDog); // 'Rover'

// let arr = [1, 2, 3];
// arr[0];

// let otherArr = [0];

// console.log([1, 2, 3][0]);
// console.log([1, 2, 3], [0]);

// let arr = [1, 2, 3];

// let val = arr.pop();
// // console.log(val)
// if (val === undefined) {
//     console.log("Hey we did it!", "line 150");
// }

// val = arr.pop();
// // console.log(val)
// if (val === undefined) {
//     console.log("Hey we did it!", "line 156");
// }

// val = arr.pop();
// // console.log(val)
// if (val === undefined) {
//     console.log("Hey we did it!", "line 162");
// }

// val = arr.pop();
// // console.log(val)
// if (val === undefined) {
//     console.log("Hey we did it!", "line 168");
// }

// let cats = ["Whiskers", "Garfield"];

// // adds Jasper to cats && returns length
// let catsLength = cats.unshift("Jasper");

// console.log(cats); // ['Jasper', 'Whiskers', 'Garfield']
// console.log(catsLength); // 3

// let cats = ["Paprika", "Whiskers", "Garfield"];
// //removes 'Paprika' from cats and returns 'Paprika'
// let firstCat = cats.shift();

// console.log(firstCat); // 'Paprika'
// console.log(cats); // ['Whiskers', 'Garfield']

// let arr = [5, 6, 7];

// arr.push(8);

// console.log(arr);

// // arr.push(4)
// arr.unshift(4);

// console.log(arr);

// // let newVal = arr.pop()
// let newVal = arr.shift();
// console.log(arr);

// console.log(newVal);

// for (let peanutButter = 0; peanutButter < 10; peanutButter++) {
//     console.log(
//         "-------------------------------We've started the peanutButter loop-----------------------------------"
//     );
//     console.log("This is peanutButter:", peanutButter);
//     for (let jelly = 0; jelly < 5; jelly++) {
//         console.log(
//             "******************jelly LOOP IS GOING!!!******************"
//         );
//         console.log("This is the current value of jelly:", jelly);
//     }

//     console.log("We've ended jelly, about to finish peanutButter");
// }

// for (let i = 0; i < 10; i++) {
//     console.log(
//         "-------------------------------We've started the i loop-----------------------------------"
//     );
//     console.log("This is i:", i);
// }

// App academy allotted deferrals

// for (let numOfDeferrals = 3; numOfDeferrals > 0; numOfDeferrals--) {
//     console.log("Fail a test");
// }

// let myName = "Zaviar";

// for (let i = 0; i < myName.length; i++) {
//     console.log(myName[0]);

//     if (i === 3) {
//         console.log("TRUE");
//     }
// }

// // console.log("-------")

// for (let i = myName.length - 1; i >= 0; i--) {
//     console.log(myName[i]);
// }

// let normalArr = [
//     1,
//     2,
//     3
// ];

// let arr = [
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
// ];
// console.log(arr.length);
// console.log(arr[0]);
// console.log(arr[0].length);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[3].length);

// let stupidArray = [[[[[[[[[[[[[[[["ha"]]]]]]]]]]]]]]]];
// console.log(stupidArray[0][0][0][0][0][0][0][0][0][0][0][0]);

//! ----------------Practice problems---------------------------
//? // Range
// // Write a function range(min, max) that takes in two numbers. The function
// // should return an array containing all numbers from min to max inclusive.

// // Define this function using function expression syntax.

// let range = function (min, max) {
//     let collectionOfNumbers = [];

//     for (let i = min; i <= max; i++) {
//         collectionOfNumbers.push(i)
//     }
//     //  for (let currentNumber = min; currentNumber <= max; currentNumber++) {
//     //     collectionOfNumbers.push(currentNumber)
//     //  }

//     return collectionOfNumbers;
// };

// //  for (let currentNumber = min; currentNumber <= max; currentNumber++) {}

// console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
// console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
// console.log(range(10, 3)); // []

//? Reverse String
// Write a function reverseString(str) that takes in a string. The function should
// return a new string where the order of the characters is reversed.

// let reverseString = function (str) {
//     // Take the LAST character of a string, create a new variable with string with that character

//     let newString = "";

//     // ------- i starts at 3; i can go down to 0; i - 1 on each loop
//     for (let i = str.length - 1; i >= 0; i--) {
//         // console.log("-----New Loop -----");
//         let currentLetter = str[i];
//         newString += currentLetter;

//         // console.log(
//         //     "new string after adding current letter:",
//         //     newString
//         // );
//     }

//     return newString
// };

// console.log(reverseString("fish")); // 'hsif'
// console.log(reverseString('marathon')); // 'nohtaram'

// let reverseString = function (str) {
//     let newString = "";

//     for (let i = str.length - 1; i >= 0; i--) {
//         let currentLetter = str[i];
//         newString += currentLetter;
//     }

//     return newString;
// };

// console.log(reverseString("fish")); // 'hsif'
// console.log(reverseString("marathon")); // 'nohtaram'

// Write a function factorsOf(num) that takes in a number as an arg. The method
// should return an array containing all positive numbers that are able to
// divide into num with no remainder.

// Define this function using function expression syntax.

// let factorsOf = function (num) {
//     let finalArray = [];

//     for (let i = 1; i <= num; i++) {
//         // console.log("-----------New Loop-----------");
//         // if num % i is 0, add to my container!
//         if (num % i === 0) {
//             finalArray.push(i)
//         }
//     }

//     // finalArray.push(1)
//     // finalArray.push(num)

//     return finalArray;
// };

// let factorsOf = function (num) {
//     let finalarray = [];

//     for (let i = 0; i <= num; i++) {
//         // console.log(i);
//         // console.log(num % 1);
//         // console.log(num % i, "<= 1 % num");
//         if (num % i === 0) {
//             finalarray.push(i)
//         }

//         // finalarray.push(1);
//         // finalarray.push(num);
//     }
//     return finalarray;
// };

// console.log(factorsOf(5)); // [ 1, 5 ]
// console.log(factorsOf(8)); // [ 1, 2, 4, 8 ]
// console.log(factorsOf(9)); // [ 1, 3, 9 ]
// console.log(factorsOf(10)); // [ 1, 2, 5, 10 ]
// console.log(factorsOf(24)); // [ 1, 2, 3, 4, 6, 8, 12, 24 ]
// console.log(factorsOf(2017)); // [ 1, 2017 ]

/**
 * The function `longestName() takes an array of names and returns the longest.
 * If there's a tie, it returns the first name of the longest length. However,
 * this implementation is full of bugs! Use your debugging skills to find and
 * fix those bugs.
//  */
// function longestName(names) {
//     // Set the first name to be the longest
//     let currentLongest = names[1];

//     // Check each other name in the array starting from the second
//     for (let i = 2; i < names.length; i++) {
//         // If the name we're checking is longer than our
//         // current longest, set that name to be the new longest
//         console.log(names[i])
//         if (names[i].length > currentLongest.length) {
//             currentLongest = names[i];
//         }
//     }

//     return currentLongest;
// }

// let testNames = [
//     "James",
//     "Patricia",
//     "Michael",
//     "Elizabeth",
//     "Christopher",
//     "Sarah",
//     "Margaret",
//     "Kenneth",
//     "Stephanie",
//     "Jonathan",
//     "Jeremy",
//     "Samantha",
//     "Alexander",
//     "Catherine",
//     "Benjamin",
// ];

// // console.log(2 <= testNames.Length);

// console.log(longestName(testNames)); // "Christopher"

/**
 * Write a function myIncludes(arr, target) that accepts an array and a
 * target value as args. The function should return a boolean
 * indicating whether the target is found in the array. Solve
 * this without Array.includes or Array.indexOf.
 */

let myIncludes = function (arr, target) {
    for (let i = 0; i < arr.length; i++) {


        let currentLetter = arr[i];

        if (target === currentLetter) {
            return true;
        }
    }

    return false;
};

console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
// console.log(myIncludes(["a", "b", "c", "e"], "a")); // true
// console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
// console.log(myIncludes([43, -7, 11, 13], 11)); // true
// console.log(myIncludes([43, -7, 11, 13], 1)); // false
// console.log(myIncludes(["tenten", "kiki"], 1)); // false

// let myGivenArray = ["a", "b", "c", "e"]

for (let i = 0; i < myGivenArray.length; i++) {
    let currentValue = myGivenArray[i]
    
}

// let firstName = 'Zaviar'

// console.log(firstName[0])