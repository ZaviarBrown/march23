/***********************************************************************
Write a recursive function called `fibonacci` that takes an integer, `n`,
and returns the `n`th number in the Fibonacci sequence.

Not familiar with the Fibonacci sequence? Beginning with 0 and 1, we add the two
previous numbers in the sequence together to form the next one:

Fib # 1,   1,   2,   3,   5,   8,   13,   21,   34,   55
Seq # 1,   2,   3,   4,   5,   6,    7,    8,    9,   10


We count Fibonacci numbers beginning with the first 1. Take a look at the
examples below if you're unsure where to start!

fibonacci(1) === 1
fibonacci(2) === 1

                      1       +      1        =  2
fibonacci(3)  => fibonacci(2) + fibonacci(1) === 2

                      2       +      1        =  3
fibonacci(4)  => fibonacci(3) + fibonacci(2) === 3

                      3       +      2        =  5
fibonacci(5)  => fibonacci(4) + fibonacci(3) === 5

                      5       +      3        =  8
fibonacci(6)  => fibonacci(5) + fibonacci(4) === 8

                      8       +      5        =  13
fibonacci(7)  => fibonacci(6) + fibonacci(5) === 13

                     13       +      8        =  21
fibonacci(8)  => fibonacci(7) + fibonacci(6) === 21

                     21       +     13        =  34
fibonacci(9)  => fibonacci(8) + fibonacci(7) === 34

                     34       +     21        =  55
fibonacci(10) => fibonacci(9) + fibonacci(8) === 55

Examples:

fibonacci(1); // 1
fibonacci(2); // 1
fibonacci(3); // 2
fibonacci(4); // 3
fibonacci(10); // 55
***********************************************************************/

//? Default param
const fibonacci = (n, fibSeq = [1, 1]) => {
    debugger;
    if (n === 1 || n === 2) {
        return 1;
    }

    // Base Case
    if (fibSeq.length === n) {
        return fibSeq.pop();
        // return fibSeq[fibSeq.length - 1];
    }

    // Rec Step
    const lastNum = fibSeq[fibSeq.length - 1];
    const secondToLastNum = fibSeq[fibSeq.length - 2];

    const newFibNum = lastNum + secondToLastNum;

    fibSeq.push(newFibNum);

    // Rec Case
    // console.log(fibSeq);
    return fibonacci(n, fibSeq);
};


// //! Classic approach
// const fibonacci = (n) => {
//     debugger;
//     if (n <= 2) return 1;

//     return fibonacci(n - 1) + fibonacci(n - 2);
// };
// console.log(fibonacci(40)); // 55

// const fibonacci = (n) => {
//     // base case - we want to work towards the number being
//     // less than or equal to 2
//     if (n <= 2) {
//         return 1;
//     }

//     // recursive case / recursive step
//     // with variables
//     // each time it goes through, you'll add two numbers.

//     // let num1 = fibonacci(n - 1);
//     // let num2 = fibonacci(n - 2);
//     // return num1 + num2;

//     // without other variables
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

// let fibonacci = (n) => {
//     // base case
//     if (n <= 1) {
//         return n;
//     }

//     // receursive step
//     if (n === 2) {
//         return 1;
//     }

//     // recursive case
//     return fibonacci(n - 1) + fibonacci(n - 2);
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
