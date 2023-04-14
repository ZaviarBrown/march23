/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
const addToTwelve = (arr) => {
    // Base Case
    if (arr.length <= 1) {
        return false;
    }

    // Rec Step
    const lastNum = arr.pop();
    const lastInArr = arr[arr.length - 1];

    if (lastNum + lastInArr === 12) {
        return true;
    }

    return isSorted(arr);
};
***********************************************************************/
//? --------------------------------------------------------------------
//? --------------------------------- Best practice ---------------------------------
//? --------------------------------------------------------------------

const isSorted = (arr) => {
    // Base Case
    if (arr.length <= 1) {
        return true;
    }

    // Rec Step
    const greaterNum = arr.pop();
    const lesserNum = arr[arr.length - 1];

    if (greaterNum > lesserNum) {
        return isSorted(arr);
    } else {
        return false;
    }
};

// //? --------------------------------------------------------------------
// //? --------------------------------- Recursive One Line ---------------------------------
// //? --------------------------------------------------------------------

// const isSorted = (arr) =>
//     arr.length === 1
//         ? true
//         : arr.pop() > arr[arr.length - 1]
//         ? isSorted(arr)
//         : false;

//? --------------------------------------------------------------------
//? --------------------------------- Default Param ---------------------------------
//? --------------------------------------------------------------------

// function isSorted(arr, num1 = 0, bool = true) {
//     if (arr[num1] < arr[num1 + 1]) {
//         num1++;
//         return isSorted(arr, num1);
//     }
//     if (arr[num1] > arr[num1 + 1]) {
//         bool = false;
//     }
//     return bool;
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = isSorted;
} catch (e) {
    module.exports = null;
}
