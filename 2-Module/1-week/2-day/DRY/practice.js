const getBiggestNum = (num1, num2, biggerNum = true) => {
    if (num1 > num2) {
        if (biggerNum) return num1;
        else return num2;
    } else {
        if (biggerNum) return num2;
        else return num1;
    }
};

function multiplyBiggerNumByTwo(num1, num2) {
    return getBiggestNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
    return getBiggestNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
    return `I ate ${getBiggestNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    const smallerDog = getBiggestNum(weight1, weight2, false);
    return `I adopted a dog that weighs ${smallerDog} pounds.`;
}

//! Line 43 before DRY

//? Line 29 after DRY

//? Line 26 after special DRY

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    multiplyBiggerNumByTwo,
    divideBiggerNumByThree,
    eatMostTacos,
    adoptSmallerDog,
};
