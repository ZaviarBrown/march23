/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]

//? Oldie but a goodie
for (let i = 0; i < arr.length; i++) {
        const el = arr[i];

        if (Array.isArray(el)) {
            // Recursive Step & Case
            const recReturn = flatten(el);
            finalArr.push(...recReturn);
        } else {
            finalArr.push(el);
        }
    }

//? For Each version
    arr.forEach((el) => {
        if (Array.isArray(el)) {
            // Recursive Step & Case
            const recReturn = flatten(el);
            finalArr.push(...recReturn);
        } else {
            finalArr.push(el);
        }
    });
***********************************************************************/

/**
 * I need to find something that is NOT an array
 * Array.isArray(thisIsAnArrayOrNot)
 */

const flatten = (arr) => {
    // Base Case
    if (!arr.length) {
        return [];
    }

    const finalArr = [];

    arr.forEach((el) => {
        if (Array.isArray(el)) {
            // Recursive Step & Case
            const recReturn = flatten(el);
            finalArr.push(...recReturn);
        } else {
            finalArr.push(el);
        }
    });

    return finalArr;
};

// //! Terrible awful one line don't do this it's bad
// const flatten = (arr) =>
//     arr.length
//         ? Array.isArray(arr[0])
//             ? flatten(arr[0]).concat(...flatten(arr.slice(1)))
//             : [arr[0], ...flatten(arr.slice(1))]
//         : [];

// //! The Ugliest Solution? Probably. Does it work? Yes :)
// function flatten(arr) {
//     let flat = []; //store result
//     if (arr.length === 0) {
//         //base case
//         return arr;
//     }
//     //recursive step/case????
//     arr.forEach((item) => {
//         if (Array.isArray(item)) {
//             flat.push(...flatten(item));
//         } else {
//             flat.push(item);
//         }
//     });

//     return flat;
// }

// //!!!!!!!!! No wayyyy! Someone did this and I thought it was mine 😂
// //! Nice job
// function flatten(arr) {
//     let newArr = [];
//     if (arr.length === 0) return [];
//     arr.forEach((ele) =>
//         Array.isArray(ele)
//             ? (newArr = [...newArr, ...flatten(ele)])
//             : newArr.push(ele)
//     );
//     return newArr;
// }

// function flatten(arr) {
//     if (arr.length === 0) {
//         return [];
//     } else {
//         if (Array.isArray(arr[0])) {
//             return [...flatten(arr[0]), ...flatten(arr.slice(1))];
//             // return flatten(arr[0]).concat(flatten(arr.slice(1)));
//         } else {
//             return [arr[0], ...flatten(arr.slice(1))];
//         }
//     }
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
