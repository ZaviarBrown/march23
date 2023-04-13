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

//? Default param, good thing to try yourself!
const reverse = (str, reversedStr = "") => {
    debugger;
    // Base Case
    if (str.length === 0) {
        return reversedStr;
    }

    // Recursive Step
    reversedStr += str[str.length - 1]; // str.slice(-1)
    const newStr = str.slice(0, str.length - 1);

    // Recursive Case
    return reverse(newStr, reversedStr);
};

// //! Array version
// function reverse(str) {
//     // Your code here
//     let newStr = str.split("");
//     newStr.pop();
//     newStr = newStr.join("");

//     //Base Case:
//     if (newStr.length === 0) {
//         return str[0];
//     }

//     //Recursive Step & Recursive Case:
//     return str[str.length - 1] + reverse(newStr);
// }

// //! Reverse reverse version!
// function reverse(str) {
//     // if the string has length 0 or 1, it is already reversed
//     if (str.length <= 1) {
//         return str;
//     }
//     // call the function again with the substring starting at the index of 1 and combine the first characters
//     else {
//         return reverse(str.substring(1)) + str[0];
//     }
// }

// //! Reassigning str
// function reverse(str) {
//     //bc= str==="" // Your code here
//     if (str === "") {
//         return str;
//     }
//     //rc= str.length>0
//     let letter = str.slice(str.length - 1);
//     // console.log(letter)
//     //rs= str=str.slice0,str.length-1
//     str = str.slice(0, str.length - 1);
//     return letter + reverse(str);
// }

// //! Default param 2
// function reverse(str, reversed = "") {
//     //Base Case
//     if (str.length === 0) {
//         return reversed;
//     }

//     //Recursive Step
//     reversed += str.charAt(str.length - 1);
//     return reverse(str.substr(0, str.length - 1), reversed);
//     //Recursive Case
// }


// //TODO Super extra spice, please don't waste your time
// const reverse = (str) => (str === "" ? str : reverse(str.slice(1)) + str[0]);

/**
 * Ternary
 *
 * num < 5 ? 5 : 500
 *
 * is this true ? return 5 : return 500
 *
 * if (true)
 *    return 5
 * if (false)
 *    return 500
 */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = reverse;
} catch (e) {
    module.exports = null;
}
