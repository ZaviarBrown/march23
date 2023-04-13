/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/
// //! Remove from back
// function addToTwelve(arr) {
//     // Base Case:
//     if (arr[arr.length - 1] + arr[arr.length - 2] === 12) {
//         return true;
//     } else if (arr.length < 2) {
//         return false;
//         // Recursive Step & Case:
//     } else {
//         arr.pop();
//         return addToTwelve(arr);
//     }
// }

//? Z's normal
const addToTwelve = (arr) => {
    if (arr.length <= 1) {
        return false;
    }
    if (arr.pop() + arr[arr.length - 1] === 12) {
        return true;
    }

    return addToTwelve(arr);
};

// //! Bool default param
// const addToTwelve = (arr, bool = false) => {
//     debugger;
//     //base case
//     if (bool || arr.length === 1) {
//         return bool;
//     }
//     debugger;
//     //recursive step
//     const firstVal = arr[0]; // first value
//     const secondVal = arr[1]; // second value
//     bool = secondVal + firstVal === 12;

//     // if (bool) return bool // perfectly working

//     arr.shift(); // remove a value to work towards base case

//     debugger;
//     //recursive case
//     return addToTwelve(arr, bool);
// };

// console.log(addToTwelve([1, 11, 4, 7, 6])); // true

// //! Double default params (single params in disguise)
// const addToTwelve = (arr, bool = false, i = 0) => {
//     //Base Case
//     if (arr.length < 2 || bool === true) {
//         return bool;
//     }
//     //Recursive Step
//     bool = arr[i] + arr[i + 1] === 12;
//     arr.shift();
//     //Recursive Case
//     return addToTwelve(arr, bool, i);
// };

// //! Single default params - index base case
// function addToTwelve(arr, index = 0) {
//     //make something to end loop when we reach the end of the array
//     if (index >= arr.length - 1) {
//         return false;
//     }
//     //check if the current element and the next element adds up to 12
//     if (arr[index] + arr[index + 1] === 12) {
//         return true;
//     }

//     //check the rest of the array
//     return addToTwelve(arr, index + 1);
// }

// //! Remove from back
// function addToTwelve(arr) {
//     // Base Case:
//     if (arr[arr.length - 1] + arr[arr.length - 2] === 12) {
//         return true;
//     } else if (arr.length < 2) {
//         return false;
//         // Recursive Step & Case:
//     } else {
//         arr.pop();
//         return addToTwelve(arr);
//     }
// }

// //! Also remove from back
// function addToTwelve(arr) {
//     // Bc = array.length === 0 return false
//     if (arr.length === 0) return false;
//     // RC = array.length > 2 if 12 return true
//     let oldNum = arr.pop();
//     if (oldNum + arr[arr.length - 1] === 12) return true;
//     // RS = let oldnum if exist? + newnum
//     return addToTwelve(arr);
// }

// //! Remove from front with slice
// function addToTwelve(arr) {
//     //base case when we have one thing left it wants false
//     if (arr.length === 1) return false; // base case: what we work towards - if the array has only one number, return false
//     if (arr[0] + arr[1] === 12) {
//         // if sum of num1 & num2 is 12, return true
//         return true;
//     } else {
//         return addToTwelve(arr.slice(1)); // call function recursively: call its self / rerun function while
//     }
// }



// //? Z's one line
// const addToTwelve = (arr) =>
//     arr.length <= 1
//         ? false
//         : arr.pop() + arr[arr.length - 1] === 12
//         ? true
//         : addToTwelve(arr);

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = addToTwelve;
} catch (e) {
    module.exports = null;
}
