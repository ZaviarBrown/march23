const getBiggerNum = (num1, num2) => {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};

function multiplyBiggerNumByTwo(num1, num2) {
    return getBiggerNum(num1, num2) * 2;
}

function divideBiggerNumByThree(num1, num2) {
    return getBiggerNum(num1, num2) / 3;
}

function eatMostTacos(sum1, sum2) {
    return `I ate ${getBiggerNum(sum1, sum2)} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
    const bigger = getBiggerNum(weight1, weight2);
    let smaller;
    if (bigger === weight1) {
        smaller = weight2;
    } else {
        smaller = weight1;
    }
    return `I adopted a dog that weighs ${smaller} pounds.`;
}

//! Before, 43 lines

//? After, 30 lines

// const getBiggerNum = (num1, num2, wantBigger = true) => {
//     if (num1 > num2) {
//         if (wantBigger) return num1;
//         else return num2;
//     } else {
//         if (wantBigger) return num2;
//         else return num1;
//     }
// };
// function adoptSmallerDog(weight1, weight2) {
//     const smaller = getBiggerNum(weight1, weight2, false);
//     return `I adopted a dog that weighs ${smaller} pounds.`;
// }

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
    multiplyBiggerNumByTwo,
    divideBiggerNumByThree,
    eatMostTacos,
    adoptSmallerDog,
};
