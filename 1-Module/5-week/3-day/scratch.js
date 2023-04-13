const addAndMultiply = (num1, num2, num3 = 5) => {
    console.log(num1, num2, num3);
    let sum = num1 + num2;
    let product = sum * num3;
    return product;
};

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
