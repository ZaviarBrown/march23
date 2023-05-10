// //? --------------------------------------------------------------------
// //? --------------------------------- Binary ---------------------------------
// //? --------------------------------------------------------------------

// const binary = "0b11001010";

// const binaryToDecimal = (binaryStr) => {
//     // Remove "0b" prefix
//     const rawBinary = binaryStr.slice(2);

//     // Reverse the order
//     const reversedBinary = rawBinary.split("").reverse();

//     return reversedBinary.reduce((sum, bit, i) => {
//         // 2 ^ [current position] * bit
//         const base10 = Math.pow(2, i) * Number(bit);

//         // Add to our sum
//         return sum + base10;
//     }, 0);
// };

// console.log(binaryToDecimal(binary));

// //? --------------------------------------------------------------------
// //? --------------------------------- Hexadecimal ---------------------------------
// //? --------------------------------------------------------------------

// const hex1 = "0xF23C";

// const hexToNum = {
//     A: 10,
//     B: 11,
//     C: 12,
//     D: 13,
//     E: 14,
//     F: 15,
// };

// const hexToDecimal = (hexStr) => {
//     // Remove "0x" prefix
//     const rawHex = hexStr.slice(2);

//     // Reverse the order
//     const reversedHex = rawHex.split("").reverse();

//     return reversedHex.reduce((sum, hex, i) => {
//         if (hexToNum[hex]) hex = hexToNum[hex];

//         // 16 ^ [current position] * bit
//         const base10 = Math.pow(16, i) * Number(hex);

//         // Add to our sum
//         return sum + base10;
//     }, 0);
// };

// console.log(hexToDecimal(hex1));
// console.log(hexToDecimal("0x5"));

console.log(String.fromCharCode(65));
console.log(String.fromCharCode("0x7D"));

const str = "ABC";
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));
