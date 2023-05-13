// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

// let base;

// if (str[1] === "b") {
//     base = 2;
// } else {
//     base = 16;
// }

const convertToBase10 = (str) => {
    const base = str[1] === "b" ? 2 : 16;
    // const base = str.startsWith("0b") ? 2 : 16;

    return parseInt(str.slice(2), base);
};

/******************************************************************************/

console.log(convertToBase10("0b1100"), convertToBase10("0b1100") === 12); // 12
console.log(convertToBase10("0b0101"), convertToBase10("0b0101") === 5); // 5
console.log(convertToBase10("0b1000"), convertToBase10("0b1000") === 8); // 8
console.log(convertToBase10("0b0111"), convertToBase10("0b0111") === 7); // 7

console.log("––––––");

console.log(
    convertToBase10("0b10100101"),
    convertToBase10("0b10100101") === 165
); // 165
console.log(
    convertToBase10("0b11111111"),
    convertToBase10("0b11111111") === 255
); // 255
console.log(
    convertToBase10("0b01010101"),
    convertToBase10("0b01010101") === 85
); // 85
console.log(
    convertToBase10("0b00110011"),
    convertToBase10("0b00110011") === 51
); // 51

console.log("––––––");

console.log(convertToBase10("0xf"), convertToBase10("0xf") === 15); // 15
console.log(convertToBase10("0xfa"), convertToBase10("0xfa") === 250); // 250
console.log(convertToBase10("0x1234"), convertToBase10("0x1234") === 4660); // 4660
console.log(convertToBase10("0xc9a1"), convertToBase10("0xc9a1") === 51617); // 51617
console.log(convertToBase10("0xbf12"), convertToBase10("0xbf12") === 48914); // 48914
