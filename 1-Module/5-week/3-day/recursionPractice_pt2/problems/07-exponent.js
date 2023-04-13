/***********************************************************************
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

Exponents are used to represent a number being multiplied by itself a
given number of times:

4^3 = 4 x 4 x 4 = 64

Negative exponents represent the same action, but in the denominator instead
of the numerator:

4^-3 = (1/4) * (1/4) * (1/4) = 1/64.

Examples:

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
***********************************************************************/
//? My rec.
const exponent = (num, power) => {
    // Base Case
    if (power === 0) {
        return 1;
    }

    if (power > 0) {
        // Positive Nums
        // Recursive Step & Case
        return num * exponent(num, power - 1);
    } else {
        // Negative Nums
        // Recursive Step & Case
        return (1 / num) * exponent(num, power + 1);
    }
};

// //? Notice when progress starts being made (num * exponent())
// const exponent = (num, power) => {
//     // Base Case
//     if (power === 0) {
//         return 1;
//     }

//     if (power < 0) {
//         const positiveVersion = exponent(num, Math.abs(power));
//         return 1 / positiveVersion;
//     } else {
//         return num * exponent(num, power - 1);
//     }
// };

// console.log(exponent(3, 2)); // 9
// console.log(exponent(5, 5)); // 3125
// console.log(exponent(2, 2)); // 4
// console.log(exponent(2, -2)); // 1/4 (or 0.25)

// //! User 1 / final value at the end
// function exponent(num, power, product = 1) {
//     //base case
//     if (power === 1) {
//         return (product *= num);
//     } else if (power === -1) {
//         product = 1 / (product * num);
//         return product;
//     }

//     //negative step

//     if (power < 0) {
//         product = product * num;
//         power += 1;
//     } else {
//         // recursive step
//         product *= num;
//         power -= 1;
//     }
//     // recursive step

//     return exponent(num, power, product);
// }

// //! Flip sign at the beginning
// function exponent(num, power, product = 1) {
//     //base case
//     if (power === 1) {
//         return (product *= num);
//     }
//     //negative step

//     if (power < 0) {
//         product = product * num;
//         power *= -1;
//         power -= 1;
//         return 1 / exponent(num, power, product);
//     } else {
//         // recursive step
//         product *= num;
//         power -= 1;
//         return exponent(num, power, product);
//     }
//     // recursive step
// }

// //! Solid standard approach
// function exponent(num, power) {
//     if (power === 0) {
//         return 1;
//     }
//     //if positive
//     if (power > 0) {
//         return num * exponent(num, power - 1);
//     }
//     //if negative
//     if (power < 0) {
//         return (1 / num) * exponent(num, power + 1);
//     }
// }

// //! Flip once and forget it!
// function exponent(num, power) {
//     //BC = power = 0
//     // if (power === 1 || power === -1) {
//     if (Math.abs(power) === 1) {
//         return num;
//     }

//     //RC = power = !0
//     //RS = if power > 0 power--
//     if (power < 0) {
//         num = 1 / num;
//         power *= -1;
//     }
//     power--;

//     return num * exponent(num, power);
//     // if power < 0 power++  // Your code here
// }

// console.log(exponent(2, -3)); // 1/4 (or 0.25)

// //! Flip the negative
// function exponent(num, power) {
//     if (power === 0) {
//         return 1;
//     }
//     // first recursive case if the power is posive
//     if (power > 0) {
//         //call the exponent function with num and reduce the power untill we reach 0 stoping the loop
//         return num * exponent(num, power - 1);
//     }
//     //second recursive case if power is negative
//     if (power < 0) {
//         //write same as the last recursive function eexcept devide at the start to swap denominator and numerator
//         return 1 / (num * exponent(num, -power - 1));
//     }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
