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
//? --------------------------------------------------------------------
//? --------------------------------- Default Param ---------------------------------
//? My rec if other version doesn't jive------------------------------------------------------------------

const fibonacci = (n, fibSeq = [1, 1]) => {
    debugger
    // Base Case
    if (n <= 2) {
        return 1;
    }

    if (fibSeq.length === n) {
        return fibSeq.pop();
        // return fibSeq[fibSeq.length - 1]
    }

    // Recursive Step
    const lastNum = fibSeq[fibSeq.length - 1];
    const secondToLastNum = fibSeq[fibSeq.length - 2];
    const newFibNum = lastNum + secondToLastNum;

    fibSeq.push(newFibNum);

    // Recursive Case
    return fibonacci(n, fibSeq);
};

//? --------------------------------------------------------------------
//? --------------------------------- My one line solution that Michael&Mark plagerized from my brain ---------------------------------
//? --------------------------------------------------------------------

// const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

//? --------------------------------------------------------------------
//? --------------------------------- Standard approach ---------------------------------
//? --------------------------------------------------------------------

// function fibonacci(n) {
//     debugger;
//     //bc = n < 0
//     if (n <= 2) return 1;
//     //rc = n > -1
//     //rs = n -1
//     debugger;
//     const one = fibonacci(n - 1);
//     const two = fibonacci(n - 2);

//     return one + two;
// }

// console.log(fibonacci(10)); // 55

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = fibonacci;
