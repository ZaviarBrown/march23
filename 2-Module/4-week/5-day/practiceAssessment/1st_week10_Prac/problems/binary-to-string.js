function binaryToString(binaryBlob) {
    const bitArr = [];

    for (let i = 0; i < binaryBlob.length; i += 8) {
        const binStr = binaryBlob.slice(i, i + 8);

        bitArr.push(binStr);
    }

    const convert = bitArr.map((byte) => String.fromCharCode("0b" + byte));

    return convert.join("");
}

// const binaryToString = (binaryBlob, arr = []) =>
//     !binaryBlob.length
//         ? arr.join("")
//         : binaryToString(binaryBlob.slice(8), [
//               ...arr,
//               String.fromCharCode(parseInt(binaryBlob.slice(0, 8), 2)),
//           ]);

/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'

module.exports = binaryToString;
