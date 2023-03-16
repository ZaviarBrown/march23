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
