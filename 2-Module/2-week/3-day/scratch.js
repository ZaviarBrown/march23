// const myErrorMaker = () => {

//     try {
//         const myError = new Error("My very own error!");
//         throw myError;
//     } catch (error) {
//         console.log("Hey look at me I did error!");
//         // return "hey what's up";
//         console.log("hey catch");
//     }

//     console.log("hey return");
//     return "i'm down here now!";
// };

// const theReturnValue = myErrorMaker();

// console.log(theReturnValue);

// console.log("Can I be a real code?");

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const myErrorMaker = () => {
//     try {
//         const myError = new Error("My very own error!");
//         const myTypeError = new TypeError("This ain't the type yo");
//         const myRefError = new ReferenceError(
//             "You didn't refer to me as SIR Zaviar"
//         );

//         throw myError;
//         // throw myRefError;
//         // throw myTypeError;
//     } catch (e) {
//         if (e instanceof TypeError) {
//             console.log("You ain't my type");
//         }

//         if (e instanceof ReferenceError) {
//             console.log(e.message);
//         }

//         if (e instanceof Error) {
//             console.log("This is still an Error");
//         }

//         throw e;
//     }

//     // that continues running
// };

// myErrorMaker();

// console.log("Can I be a real code?");

// // class EldenRing {}

// // const myEldenRing = new EldenRing();

// // console.log(myEldenRing.constructor.name);

// class Dragon {}

// class FriendlyDragon extends Dragon {}

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
// console.log(arrayContainsVowel(["faftw", "plnm"])); // true
// console.log(arrayContainsVowel("Dear god help me")); // TypeError: arr.some is not a function

//? --------------------------------------------------------------------
//? --------------------------------- Prevent an error from halting execution ---------------------------------
//? --------------------------------------------------------------------

// const arrayContainsVowel = (arr) => {
//     const vowels = "aeiouAEIOU";

//     try {
//         return arr.some((str) => {
//             return str.split("").some((char) => vowels.includes(char));
//         });
//     } catch (error) {
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
//? ------------ Prevent incorrect function use & make errors clearer ---------------------
//? --------------------------------------------------------------------

// const arrayContainsVowel = (arr) => {
//     const vowels = "aeiouAEIOU";

//     return arr.some((str) => {
//         return str.split("").some((char) => vowels.includes(char));
//     });
// };

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

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------


