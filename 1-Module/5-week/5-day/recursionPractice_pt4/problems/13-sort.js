/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []

//! Methods to solve #2
    //? Math.min(...nums)
    //? Helper function findSmallestNum(arr)
    //? IIFE that finds the smallest number

    // //? For loop
    // let currentSmallestNum = arr[0]
    // for () {
    //     if (currentSmallestNum > arr[i]) {
    //         currentSmallestNum = arr[i]
    //     }
    // }
    // // currSmallestNum === 1
    const findSmallestNum = (arr) => {
        // returns the smallest number in that array
    }

//! Methods to solve #4
    //? nums.indexOf(smallestNum) && nums.splice(index of smallest num)
    //? nums.indexOf(smallestNum) && nums.slice(around smallestNum)
    //? New array, loops through nums, and push only NON smallestNum to newArray
    const newNums = [];

    nums.forEach((el) => {
        // 3. Add the smallest element to the end of `sorted`
        if (el === smallestNum) sorted.push(el);
        // 4. Remove the smallest element from `nums`
        else newNums.push(el);
    });
***********************************************************************/

const sort = (nums, sorted = []) => {
    // 1. Check the base case: If `nums` is empty, then return `sorted`
    if (!nums.length) return sorted;

    // 2. Otherwise, find the smallest element in `nums`
    const smallestNum = nums.reduce((prev, next) => {
        if (prev < next) return prev;
        else return next;
    });

    const newNums = nums.filter((el) => {
        if (el === smallestNum) {
            // 3. Add the smallest element to the end of `sorted`
            sorted.push(el);
            return false;
            // 4. Remove the smallest element from `nums`
        } else return true;
    });

    // 5. Recursively call `sort()` with updated `sorted` and `nums`
    return sort(newNums, sorted);
};
console.log(sort([4, 1, 6, 3, 1, 7])); // [1, 1, 3, 4, 6, 7]

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = sort;
