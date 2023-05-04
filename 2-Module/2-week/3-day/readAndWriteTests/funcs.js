function isFive(num) {
    return num === 5;
}

function isOdd(number) {
    if (typeof number !== "number") throw new Error();
    return Math.abs(number) % 2 === 1;
}

function myRange(min, max, step = 1) {
    const finalArr = [];

    for (let i = min; i <= max; i += step) {
        finalArr.push(i);
    }

    return finalArr;
}

module.exports = { isFive, isOdd, myRange };
