// console.log(true); // true
// console.log(false); // false

// console.log(!true); // true
// console.log(!false); // false

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// console.log(owijefowiejfowief);
// console.log(true || false);
// console.log(false || true);

//% Short Circuiting

// console.log(true || owijefowiejfowief);
// console.log(owijefowiejfowief || true);

// // Less than/Greater than
// console.log(5 < 9); // true
// console.log(5 > 9); // false
// console.log("a" < "b"); // true (dictionary order)
// console.log("cat" < "cats"); // true (dictionary order)
// console.log("z" < "a"); // false

// Inclusive comparison (... or equal to)
// console.log(7 <= 10); // true
// console.log(10 >= 10); // true
// console.log(1 >= 10); // false

// Equality === and !==
// console.log(2 === 2); // true
// console.log(2 === 2.1); // false
// console.log(2 === 2.0); // true
// console.log(2 !== 2.1); // true

// // Two equality operators, === and ==
// console.log(5 === "5"); // false
// console.log(5 == "5"); // true (types are coerced)
// console.log([] == 0); // true (can be unpredictable)

// console.log(5 === Number("5"));

// console.log(5 !== 10);
// console.log(5 !== 5);
// console.log(5 !== "5");

// let 3numbers = '1, 3, 5'
// let threeNumbers = "1, 3, 5";
// let numbers3 = "1, 3, 5";

// let num = 10;

// let firstName = "Zaviar";
// let middleAndLastNames = "Yuudai Brown";

// let name; // declaration

// name = "Leroy"; // assignment / reassignment

// let name2 = "Jenkins"; // initialization

// console.log(name, name2); // Leroy Jenkins

// let myVariable;
// console.log(myVariable); // undefined

// myVariable = "Zaviar";
// console.log(myVariable); // "Zaviar"

// myVariable = "Kirin";
// console.log(myVariable); // "Kirin"

// myVariable = "Zaviar";
// console.log(myVariable);

// let myVariable = 100; // SyntaxError: Identifier 'myVariable' has already been declared
// console.log(myVariable);

// let num = 42;
// console.log(num); // => 42
// console.log(num + 8); // => 50
// console.log(num); // => 42

// num = num + 10;
// console.log(num); // => 52

// let number = 0;
// console.log(number) // 0
// number += 10; // equivalent to number = number + 10
// console.log(number); // 10
// number -= 2; // equivalent to number = number - 2
// console.log(number); // 8
// number /= 4; // equivalent to number = number / 4
// console.log(number); // 2
// number *= 7; // equivalent to number = number * 7
// console.log(number); // 14

// let num = 50;
// console.log(num);
// num %= 3;
// console.log(num);

// let year = 3004;
// // year += 1
// year++;
// console.log(year); // 3005
// year--;
// console.log(year); // 3004

// let preFix = 10;
// console.log(preFix); // 10
// console.log(++preFix); // 11
// console.log(preFix); // 11

// let postFix = 10;
// console.log(postFix); // 10
// console.log(postFix++); // 10
// console.log(postFix); // 11

// let num = 50;
// num = num + 1;
// num += 1;
// num++;


// Write a function removeEWords(sentence) that accepts a sentence string as an arg. The function should return a new string, containing only the words that don't have the letter "e" in them.

// GOAL: new string

// function removeEWords(sentence){
//     // split the sentence into an array, so that we can differentiate the words
//     let sentenceArr = sentence.split(" ")
//     // console.log(sentenceArr)

//     // make an empty array to hold the words that we want to return
//     let newArr = []

//     // iterate through the array that holds each word in the given sentence
//     for (let i = 0; i < sentenceArr.length; i++){

//         // variable to represent the current word we are checking for the letter e
//         let currWord = sentenceArr[i]

//         // if the word does NOT contain the letter e, then we want it -- let's ignore the words WITH the letter e
//         if (!currWord.includes('e')){
//             // console.log("This word doesn't have the letter e!", currWord)

//         // push the word we want to the end of the new Array
//             newArr.push(currWord)
//             // console.log(newArr)
//         }
//     }
//     // after we've gone through the array of words, join the array with a space to convert from an array to a sentence string
//     let newSentence = newArr.join(" ")

//     // return the newly joined sentence
//     return newSentence
// }

// console.log(removeEWords('What time is it everyone?')); // 'What is it'
// console.log(removeEWords('Enter the building')); // 'building'