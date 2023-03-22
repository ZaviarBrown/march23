/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
    let finalArr = [];
    let splitArr = string.split("-");
    for (let i = splitArr.length - 1; i >= 0; i--) {
        finalArr.push(splitArr[i]);
    }

    return finalArr.join("-");
}

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = reverseString;
