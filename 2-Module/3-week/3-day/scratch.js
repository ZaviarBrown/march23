//? --------------------------------------------------------------------
//? --------------------------------- Binary ---------------------------------
//? --------------------------------------------------------------------

const binary = "0b11001010";

const binaryToDecimal = (binaryStr) => {
    // Remove "0b" prefix
    const rawBinary = binaryStr.slice(2);

    // Convert to array and reverse
    const reversedArray = rawBinary.split("").reverse();

    return reversedArray.reduce((sum, bit, i) => {
        // 2 ^ [current position] * bit
        const base10 = Math.pow(2, i) * Number(bit);

        // Add to sum
        return sum + base10;
    }, 0);
};

// console.log(binaryToDecimal(binary));
// console.log(binaryToDecimal("0b1"));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

const hex1 = "0xF23C";

const hexToDec = {
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
};

const hexToDecimal = (hexStr) => {
    // Remove "0x" prefix
    const rawHex = hexStr.slice(2);

    // Convert to array and reverse
    const reversedArray = rawHex.split("").reverse();

    return reversedArray.reduce((sum, hex, i) => {
        // Change from hex character to decimal value
        if (hexToDec[hex]) hex = hexToDec[hex];

        // 16 ^ [current position] * hex
        const base10 = Math.pow(16, i) * Number(hex);

        // Add to sum
        return sum + base10;
    }, 0);
};

// console.log(hexToDecimal(hex1));
// console.log(hexToDecimal("0x10"));

//? --------------------------------------------------------------------
//? --------------------------------- ASCII ---------------------------------
//? --------------------------------------------------------------------

console.log(String.fromCharCode(65));
console.log(String.fromCharCode("0x41"));

const str = "ABC";
console.log(str.charCodeAt(0));
console.log(str.charCodeAt(1));
console.log(str.charCodeAt(2));