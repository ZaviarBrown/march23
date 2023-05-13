// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = (element) => {
    if (typeof element === "string") {
        element = parseInt(element, 16);
    }

    return `0b${element.toString(2)}`;
};

// const convertToBase2 = (element) => {
//     if (typeof element === "number") {
//         return `0b${element.toString(2)}`;
//     } else if (element[1] === "x") {
//         let parsedNum = parseInt(element, 16);
//         return `0b${parsedNum.toString(2)}`;
//     }
//     return element;
// };

/******************************************************************************/

console.log(convertToBase2(4), convertToBase2(4) === "0b100"); // 0b100
console.log(convertToBase2(65), convertToBase2(65) === "0b1000001"); // 0b1000001
console.log(convertToBase2(256), convertToBase2(256) === "0b100000000"); // 0b100000000
console.log(convertToBase2(123), convertToBase2(123) === "0b1111011"); // 0b1111011
console.log(convertToBase2(1000), convertToBase2(1000) === "0b1111101000"); // 0b1111101000

console.log("––––––");

console.log(convertToBase2("0xf"), convertToBase2("0xf") === "0b1111"); // 0b1111
console.log(convertToBase2("0xfa"), convertToBase2("0xfa") === "0b11111010"); // 0b11111010
console.log(
    convertToBase2("0x1234"),
    convertToBase2("0x1234") === "0b1001000110100"
); // 0b1001000110100
console.log(
    convertToBase2("0xc9a1"),
    convertToBase2("0xc9a1") === "0b1100100110100001"
); // 0b1100100110100001
console.log(
    convertToBase2("0xbf12"),
    convertToBase2("0xbf12") === "0b1011111100010010"
); // 0b1011111100010010
