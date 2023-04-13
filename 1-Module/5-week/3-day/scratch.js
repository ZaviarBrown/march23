// const addAndMultiply = (num1, num2, num3 = 5) => {
//     console.log(num1, num2, num3);
//     let sum = num1 + num2;
//     let product = sum * num3;
//     return product;
// };

// console.log(addAndMultiply(1, 2, 3)); // 9
// console.log(addAndMultiply(1, 2)); // 15

// const mostlyMultiplySometimesDivide = (num) => {

// }

// const multiBy2 = (num, multi = true) => {
//     if (multi === true) {
//         return num * 2;
//     } else {
//         return num / 2;
//     }
// };

// console.log(multiBy2(50));
// console.log(multiBy2(10));
// console.log(multiBy2(57));
// console.log(multiBy2(290, false));

const arr = [1, 2, 3, 4, 5];

const recurseSum = (arr) => {
    if (arr.length === 1) {
        return arr.pop();
    }
    return arr.pop() + recurseSum(arr);
};

console.log(recurseSum(arr));

// Call Stack 5: arr = [1]
// return 1

// Call Stack 4: arr = [1, 2]
// return 2 + Enter Call Stack Again

// Call Stack 3: arr = [1, 2, 3]
// return 3 + Enter Call Stack Again

// Call Stack 2: arr = [1, 2, 3, 4]
// return 4 + Enter Call Stack Again

// Call Stack 1: arr = [1, 2, 3, 4, 5]
// return 5 + Enter Call Stack Again


const firstTime = ([1, 2, 3, 4, 5]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 5 + secondTime([1, 2, 3, 4]); // return 5 + (4 + 3 + 2 + 1)
};

const secondTime = ([1, 2, 3, 4]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 4 + thirdTime([1, 2, 3]); // return 4 + (3 + 2 + 1)
};

const thirdTime = ([1, 2, 3]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 3 + fourthTime([1, 2]); // return 3 + (2 + 1)
};

const fourthTime = ([1, 2]) => {
    // if (arr.length === 1) {
    //     return arr.pop();
    // }

    return 2 + fifthTime([1]); // return 2 + 1
};

const fifthTime = ([1]) => {
    if ([1].length === 1) {
        return 1
    }

    // return doesn't do anything
};

// const arr = ["js", "is", "great"];
// arr.length--;
// arr.push("dumb");
// console.log(arr);