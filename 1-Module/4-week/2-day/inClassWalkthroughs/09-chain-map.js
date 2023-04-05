let add5 = function (n) {
    return n + 5;
};

let half = function (n) {
    return n / 2;
};

let square = function (n) {
    return n * n;
};
/*******************************************************************************
Write a function `chainMap` that accepts a value and any number of callbacks as
arguments. The function should return the final result of passing the value through
all of the given callbacks. In other words, if three callbacks are given then:

- the value is given to the first callback
- the result of the first callback is given to the second callback
- the result of the second callback is given to the third callback
- the result of the third callback is the final result

Examples:

let add5 = function(n) {
    return n + 5;
};

let half = function(n) {
    return n / 2;
};

let square = function(n) {
    return n * n;
};

console.log(chainMap(25, add5));                // 30
console.log(chainMap(25, add5, half));          // 15
console.log(chainMap(25, add5, half, square));  // 225
console.log(chainMap(4, square, half));         // 8
console.log(chainMap(4, half, square));         // 4
*******************************************************************************/

let chainMap = (val, ...callbacks) => {
    callbacks.forEach((currCb) => {
        val = currCb(val);
    });

    return val;
};

// function chainMap(val, ...callbacks) {
//     for (let i = 0; i < callbacks.length; i++) {
//         let currCb = callbacks[i];
//         val = currCb(val);
//     }

//     return val;
// }

console.log(chainMap(25, add5)); // 30
console.log(chainMap(25, add5, half)); // 15
console.log(chainMap(25, add5, half, square)); // 225
console.log(chainMap(4, square, half)); // 8
console.log(chainMap(4, half, square)); // 4

// function chainMap(val, ...callbacks) {
//     // loop through all cbs in callbacks array
//     //! console.log(callbacks)
//     for (let i = 0; i < callbacks.length; i++) {
//         //! console.log("-------NEW LOOP BEGINS----------")
//         // for each cb
//         let currCb = callbacks[i];
//         //! console.log(currCb)
//         // pass val to cb
//         // overwrite val to be cb(val)'s return value
//         val = currCb(val);
//     }

//     return val;
// }

/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
    module.exports = chainMap;
} catch (e) {
    return null;
}
