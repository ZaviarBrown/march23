/***********************************************************************
Write a function named: countDownTimer(n). This function will represent a count
down of days till the New Year. The countDownTimer function will
take in a number argument (n) the first time it is called and if that
number is greater than 0 the countDownTimer will return a function.

The function returned by countDownTimer can then be invoked n times before it
returns a string of "Happy New Year!". Look closely at how this function is
invoked below:

Example 1:
  console.log(countDownTimer(0)); // prints "Happy New Year!"

Example 2:
  let oneDay = countDownTimer(1); // returns a function
  console.log(oneDay()); // prints "Happy New Year!"

Example 3:
  let twoDays = countDownTimer(2); // returns a function
  console.log(twoDays()); // returns a function
  console.log(twoDays()); // prints "Happy New Year!"

Example 4:
  let threeDays = countDownTimer(3); // returns a function
let versionOne = threeDays()); // returns a function
let versionTwo = versionOne()); // returns a function
let versionThree = versionTwo()); // prints "Happy New Year!"

***********************************************************************/

const countDownTimer = (n) => {
    if (!n) {
        return "Happy New Year!";
    }

    return () => {
        n--;
        if (!n) {
            return "Happy New Year!";
        } else {
            return () => {};
        }
    };
};

// const countDownTimer = (n) => {
//     if (n <= 0) {
//         return "Happy New Year!";
//     }
//     let init = n;
//     const happy = () => {
//         n--;
//         if (init === 0 || n === 0) {
//             return "Happy New Year!";
//         } else {
//             return happy
//         }
//     };
//     return happy;
// };

// function countDownTimer(n) {
//     if (n <= 0) {
//         return "Happy New Year!";
//     }
//     let count = n;
//     return function () {
//         if (count <= 0) {
//             return "Happy New Year!";
//         } else {
//             count--;
//             return countDownTimer(count);
//         }
//     };
// }

// let threeDays = countDownTimer(3); // returns a function
// let versionOne = threeDays(); // returns a function
// console.log(versionOne);

// let versionTwo = versionOne(); // returns a function
// console.log(versionTwo);

// let versionThree = versionTwo(); // prints "Happy New Year!"
// console.log(versionThree);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = countDownTimer;
} catch (e) {
    // catch the ref err
    module.exports = null;
}
