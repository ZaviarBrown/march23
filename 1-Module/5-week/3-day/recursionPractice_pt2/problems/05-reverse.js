/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

//? Standard recommendation
const reverse = (str) => {
    if (str.length === 0) return "";
    else {
        return str[str.length - 1] + reverse(str.slice(0, str.length - 1));
    }
};

// //? Recommendation with default param
// const reverse = (str, res = "") => {
//     if (str.length === 0) return res;

//     res += str[str.length - 1];

//     return reverse(str.slice(0, str.length - 1), res);
// };

// //! Default param as an empty container! - Thought I was crazy, turns out I was
// const reverse = (str, res = "") => {
//     if (!str) return res;

//     if (str.length === 0) return str;

//     res += str[str.length - 1];

//     return reverse(str.slice(0, str.length - 1), res);
// };

// //! A reverse reverse!
// const reverse = (str) => {
//     if (str.length === 0) return "";
//     else {
//         return reverse(str.slice(1)) + str[0];
//     }
// };

//! Negative slicing
// function reverse(str) {
//     // Your code here
//     //base case
//     if (str.length === 0) {
//         return "";
//     } else {
//         //recursive case
//         return str.slice(-1) + reverse(str.slice(0, -1)); // e + reverse(hous)
//     }
//     //recursive step
// }

// const reverse = (str) => {
//     const splitArr = str.split("");

//     if (splitArr.length === 0) {
//         return "";
//     }

//     return splitArr.pop() + reverse(splitArr.join(""));
// };

// //! Recursive Step
// // str[str.length - 1]
// // str.slice(str.length - 1)

// //! Recursive Case
// // reverse(str.slice(0, str.length - 1))

// const reverse = (str) => {
//     const splitArr = str.split("");

//     //! Base Case
//     if (splitArr.length === 0) {
//         return "";
//     }

//     //! Recursive Step
//     const finalChar = splitArr.pop(); // 'e' | ['h', 'o', 'u', 's']

//     //! Recursive Case
//     const mutatedString = splitArr.join("");
//     const recursiveReturn = reverse(mutatedString);
//     // const recursiveReturn = reverse(splitArr); //! Error, not a string MUST BE THE SAME AS BEFORE

//     return finalChar + recursiveReturn;
// };

// console.log(reverse("house")); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverse;
} catch (e) {
    module.exports = null;
}
