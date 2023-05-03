// const myErrorMaker = () => {
//     try {
//         const myError = new TypeError("My very own error!");
//         throw myError;
//     } catch (thisIsTheErrorThatWasThrown) {
//         console.log(thisIsTheErrorThatWasThrown.name);
//         console.log(thisIsTheErrorThatWasThrown.message);

//     }
//     // finally {
//     //     console.log("\n\n I am inevitable!!!! \n\n");
//     // }
// };

// const myReturn = myErrorMaker();

// console.log("Can I still be a real code?");
// // console.log(myReturn);

// const myErrorMaker = () => {
//     try {
//         const myTypeError = new TypeError("My very own error!");
//         const myRefError = new ReferenceError(
//             "You didn't refer to me as SIR Zaviar"
//         );
//         // const youReallyMessedUpBigTime = [myTypeError, myRefError];

//         // return youReallyMessedUpBigTime;

//         // throw myTypeError;
//         throw myRefError;
//         // throw new Error("Directly throwing!");
//     } catch (e) {
//         if (e instanceof TypeError) {
//             console.log("You ain't my type");
//         }
//         if (e instanceof ReferenceError) {
//             console.log("I was incorrectly referenced");
//         }

//         if (e instanceof Error) {
//             console.log("I'm just a good ole error");
//         }

//         throw e
//     }
//     // finally {
//     //     console.log("\n\n I am inevitable!!!! \n\n");
//     // }
// };

// const myReturn = myErrorMaker();

// console.log("Can I still be a real code?");

// // class Person {}

// // const myPerson = new Person();

// // console.log(myPerson.constructor.name);

// // class Dragon {}

// // class FriendlyDragon extends Dragon{

// // }
// const arrayContainsVowel = (arr) => {
//     const vowels = "aeiouAEIOU";

//     return arr.some((str) => {
//         return str.split("").some((char) => vowels.includes(char));
//     });
// };

// console.log(arrayContainsVowel(["fftw", "plnm"])); // false
// console.log(arrayContainsVowel(["ffatw", "plnm"])); // true
// console.log(arrayContainsVowel("Dear god help me")); // TypeError: arr.some is not a function

// const arrayContainsVowel = (arr) => {
//     const vowels = "aeiouAEIOU";

//     try {
//         return arr.some((str) => {
//             return str.split("").some((char) => vowels.includes(char));
//         });
//     } catch (error) {
//         console.log("I'm in the catch!");

//         if (typeof arr === "string") {
//             arr = arr.split(" ");
//         }
//         return arr.some((str) => {
//             return str.split("").some((char) => vowels.includes(char));
//         });
//     }
// };
// // const arrayContainsVowel = (arr) => {
// //     const vowels = "aeiouAEIOU";
// //     if (typeof arr === "string") {
// //         arr = arr.split(" ");
// //     }

// //     return arr.some((str) => {
// //         return str.split("").some((char) => vowels.includes(char));
// //     });
// // };

// console.log(arrayContainsVowel(["fftw", "plnm"])); // false
// console.log(arrayContainsVowel("Dear god help me")); // true

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const arrayContainsVowel = (arr) => {
//     const vowels = "aeiouAEIOU";

//     return arr.some((str) => {
//         return str.split("").some((char) => vowels.includes(char));
//     });
// };

// console.log(arrayContainsVowel(["fftw", "plnm"])); // false
// console.log(arrayContainsVowel("Dear god help me")); // TypeError: arr.some is not a function

// const arrayContainsVowel = (arr) => {
//   if (!Array.isArray(arr)) {
//     throw new TypeError("Input must be an array");
//   }

//   const vowels = "aeiouAEIOU";

//   return arr.some((str) => {
//     return str.split("").some((char) => vowels.includes(char));
//   });
// };

// console.log(arrayContainsVowel(["fftw", "plnm"])); // false
// console.log(arrayContainsVowel("Dear god help me")); // TypeError: Input must be an array

