// function isSorted(nums) {
//     // Loop through each number
//     for (let i = 0; i < nums.length; i++) {
//         // console.log(i)
//         // Check if the previous number is greater than
//         // the current number
//         if (nums[i - 1] > nums[i]) {
//             // If it is return false
//             return false;
//         }
//     }

//     // If every number is greater or equal to the previous number
//     // in the array, it's sorted.
//     return true;
// }
function isSorted(nums) {
    // Loop through each number
    for (let i = 1; i < nums.length; i++) {
        // console.log(i)
        // Check if the previous number is greater than
        // the current number
        // if (nums[i - 1] > nums[i]) {
        if (nums[i + 1] < nums[i]) {
            // If it is return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;
}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([2, 2, 4, 4])); // true
console.log(isSorted([1, 2, 4, 3, 5, 6])); // false
