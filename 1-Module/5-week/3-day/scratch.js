// const addAndMultiply = (num1, num2, num3 = 5) => {
//     let sum = num1 + num2;
//     console.log(num3);
//     let product = sum * num3;
//     return product;
// };

// const addAndMultiply = (num1, num2, num3 ) => {
//     let sum = num1 + num2;
//     console.log(num3)
//     let product = sum * num3;
//     return product;
// };

// console.log(addAndMultiply(1, 2, 3)); // 9
// console.log(addAndMultiply(1, 2)); // 15

// const changeByFactorOfTwo = (num, someBool = true) => {
//     if (someBool === true) {
//         return num * 2;
//     } else {
//         return num / 2;
//     }
// };

// console.log(changeByFactorOfTwo(40))
const arr = [1, 2, 3, 4, 5];


const recurseSum = (arr) => {
    if (arr.length === 1) {
        return arr.pop();
    }

    return arr.pop() + recurseSum(arr);
};

console.log(recurseSum(arr));



// fifthTime([1]) 
    // returns 1

// fourthTime([1, 2])
    // returns 2 + 1

// thirdTime([1, 2, 3])
    // returns 3 + (2 + 1)

// secondTime([1, 2, 3, 4])
    // returns 4 + (3 + 2 + 1)

// firstTime([1, 2, 3, 4, 5])
    // returns 5 + (4 + 3 + 2 + 1) = 15


// [1, 2, 3, 4, 5];
const firstTime = ([1, 2, 3, 4, 5]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 5 + secondTime([1, 2, 3, 4]);
};

const secondTime = ([1, 2, 3, 4]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 4 + thirdTime([1, 2, 3]);
};

const thirdTime = ([1, 2, 3]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 3 + fourthTime([1, 2]);
};

const fourthTime = ([1, 2]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 2 + fifthTime([1]);
};

const fifthTime = ([1]) => {
    if ([1].length === 1) {
        return 1;
    }

    // return doesn't get here
};