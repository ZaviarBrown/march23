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


const exponent = (num, power) => {
    // Base Case
    if (power === 0) {
        return 1;
    }

    if (power < 0) {
        // if power is negative
        // Recursive Step
        // Recursive Case

        return (1 / num) * exponent(num, power + 1);
    } else {
        // if power is positive
        // Recursive Step
        // Recursive Case

        return num * exponent(num, power - 1);
    }
};

// const exponent = (num, power) => {
//     // Base Case
//     if (power === 0) {
//         return 1;
//     }

//     if (power < 0) {
//         let newPower = power * -1;
//         newPower--;
//         return 1 / (num * exponent(num, newPower));
//     } else {
//         power--;
//         return num * exponent(num, power);
//     }
// };

// console.log(exponent(3, 2)); // 9
// console.log(exponent(5, 5)); // 3125


//! Turning negative number positive, then doing normal recursion

// function exponent(num, power) {
//     if (power < 0) {
//         return 1 / exponent(num, Math.abs(power));
//     }
//     if (power === 1) {
//         return num;
//     }
//     return num * exponent(num, power - 1);
// }

//! Turning negative number positive, then doing normal recursion

// const exponent = (num, power) => {
//     if (power == 0) {
//         return 1;
//     } else if (power > 0) {
//         return num * exponent(num, power - 1);
//     } else if (power < 0) {
//         return 1 / exponent(num, -power);
//     }
// };

//! Handling different cases for negative vs positive

// function exponent(num, power) {
//     if (power === 0) {
//         return 1;
//     } else if (power > 0) {
//         return num * exponent(num, power - 1);
//     } else {
//         return (1 / num) * exponent(num, power + 1);
//     }
// }

//! Handling different cases for negative vs positive

// const exponent = (num, power) => {
//     if (power == 0) {
//         return 1;
//     } else if (power > 0) {
//         return num * exponent(num, power - 1);
//     } else if (power < 0) {
//         return (1 / num) * exponent(num, power + 1);
//     }
// };

// //! God awful one line never do this its not worth
// const exponent = (num, power) => power > 0 ? num * exponent(num, power - 1) : !power ? 1 : (1 / num) * exponent(num, power + 1);


/**
 * Teranary?
 * 
 * if true ? return 5 : return 50
 * 
 * true ? 5 : 50
 * 
 * if (true)
 *  return 5
 * if (false)
 *  return 50
 */

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = exponent;
} catch (e) {
    module.exports = null;
}
