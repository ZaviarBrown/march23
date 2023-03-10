// function addThreeNumbers(num1, num2, num3) {
//     console.log(num1, "num1");
//     console.log(num2, "num2");
//     console.log(num3, "num3");

//     return num1 + num2 + num3;
// }

// console.log(addThreeNumbers(1, 2)); // => ???

// let c = "turtle";

// if (c === "dog") {
//     console.log("I'm a dog!");
// } else if (c === "turtle") {
//     console.log("I'm a turtle!");
// } else if (c === "potato") {
//     console.log("I'm a potato");
// } else {
//     console.log("I don't know what I am");
// }

// let i = 0;
// // let i = 1;

// while (i < 5) {
//     console.log("before starting, i is", i);
//     console.log("----------Loop Begins-------------");
//     i = 1;
//     console.log("Loop #", i);
//     console.log("hello world");
//     // i *= 5;
//     i++;
//     // i += 1;
//     // i = i + 1;
//     console.log("New value of i:", i);
//     console.log("------------Loop ends-----------");
// }

// let i = 0;

// while (i < 10) {
//     console.log("I did it!");
//     i++;
// }
// //! Weird but works!
// let i = 0;

// for (; i < 5; ) {
//     console.log("Hello world");
//     i++;
// }

// //! The normal way
// for (let i = 0; i < 5; i++) {
//     console.log("Hello world");
// }

//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************

// Print Fives
// Write a function printFives(max) that prints out the multiples of 5 that
// are less than max.
// Try to solve this in two ways, one using
// an if statement, and one without.

// console.log(0 % 5);
// console.log(5 % 5);
// console.log(10 % 5);
// console.log(15 % 5);
// 5 % 5 = 0 //! 0 is falsy

// for (let i = 0; i < max; i++) {
//     // //? Version 1
//     // if (i % 5 === 0) {
//     //     console.log(i);
//     // }

//     // //? Version 2
//     // if (i % 5) {
//     // } else {
//     //     console.log(i);
//     // }

//     // //? Version 3
//     // if (!(i % 5)) {
//     //     console.log(i);
//     // }
// }

// function printFives(max) {
//     for (let i = 0; i < max; i += 5) {
//         console.log(i);
//     }
// }

// function printFives(max) {
//     let i = 0;
//     let sum = i * 5;

//     console.log("i at the beginning", i);
//     console.log("sum at the beginning", sum);

//     while (sum < max) {
//         console.log("------------ Start of while loop -------------");
//         console.log(sum, "This is our current sum");
//         i++;
//         console.log(i, "This is i after ++");

//         sum = i * 5;
//         console.log(sum, "This is sum after i * 5");

//         console.log("------------ End of while loop -------------");
//     }
// }

// function printFives(max) {
//   let i = 0;
//   while (i < max) {
//     if (i < max) {
//       console.log(i);
//     }
//     i+=5;
//   }
// }

// printFives(); // prints out:
// 0
// 5
// 10
// 15
// console.log("---------- Next Call ----------");
// printFives(50); // prints out:
// 0
// 5
// 10
// 15
// 20
// 25
// 30
// 35
// 40
// 45

//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************
//? ************************************************

// function logBetween(lowNum, highNum) {
//     if (lowNum > highNum) {
//         return "";
//     }
//     for (let i = lowNum; i <= highNum; i++) {
//         console.log(i);
//     }
// }

// Log Between
// Define a function logBetween(lowNum, highNum) that will print every number from lowNum to highNum, inclusive. Inclusive means that the range includes lowNum and highNum.

// Hint: this function only needs to print using console.log it does not need to return.

// function logBetween(lowNum) {
//     console.log(lowNum);

// }

// logBetween(5);
// logBetween(50);
// logBetween(10);
// logBetween(5);

// // Examples:
// console.log("---------- Starting new Call --------------");
// logBetween(-1, 2); // prints out:
// -1;
// 0;
// 1;
// 2;
// console.log("---------- Starting new Call --------------");
// logBetween(14, 6); // => prints nothing
// console.log("---------- Starting new Call --------------");
// logBetween(4, 6); // prints out:
// 4;
// 5; 6;

// let forks = "forks";
// let knives = "knives";
// let spoons = "spoons";
// let anythingIWant = "spatulas";

// let kitchenUtensils = ["forks", "knives", "spoons", 5, anythingIWant, "Zaviar"];
// // let arr = [1, "hello", false, NaN, [1, 2, 3]];

// // console.log(forks);
// // console.log(knives);
// // console.log(spoons);

// // console.log(kitchenUtensils);

// let num = 1000000000000000000000000000000;
// let emptyArr = [];
// // let arrWithFive = [10];
// let arrWithNum = [num, 70, "iejfef"];
// let kitchenUtensils = ["forks", "knives", "spoons", 5, "Zaviar"];

// // // console.log("")
// // console.log(emptyArr.length);
// console.log(arrWithNum.length);
// // console.log(kitchenUtensils.length);
// // console.log("Zaviar"[0])
// // console.log(kitchenUtensils[0])

// let array = ["dog", "cat", "turtle"];

// console.log(array.indexOf("dog")); // 0
// console.log(array.indexOf("turtle")); // 2
// console.log(array.indexOf("elephant")); // -1

// console.log(array[2]);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// console.log(array1);
// console.log(array2);

// let arr3 = array1.concat(array2);
// // let arr3 = array2.concat(array1);

// console.log(arr3);

// function myFunc(num) {
//     console.log(num);
// }

// myFunc(20);
// myFunc(20);
// myFunc(20);
// myFunc(20);

// function myFunc(num) {
//     console.log(num);
//     console.log(num);
//     console.log(num);
//     console.log(num);
//     console.log(num);
// }

// myFunc(20);

function myFunc(num) {
    for (let i = 0; i <= 9; i++) {
        num--;

        console.log(num);

    }

    // console.log(num)

    // console.log("still in the function, but after the loop");
}

myFunc(20);

// // run myFunc 5 times

// let counter = 1;

// while (counter <= 1) {
//     // thousands of lines
//     myFunc(20);
//     // thousands of lines
//     counter++;
//     console.log("Now counter is:", counter);
// }

// // console.log("After the loop");
// // // myFunc(20);
