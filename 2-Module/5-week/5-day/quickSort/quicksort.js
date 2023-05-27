function quicksort(arr) {
    // Check if the input is length 1 or less
    if (arr.length <= 1) {
        // If so, it's already sorted: return
        return arr;
    }

    // Pick the first value as the pivot
    const pivot = arr[0];

    // Orient the pivot so that...
    const left = [];
    const right = [];
    for (let i = 1; i < arr.length; i++) {
        const currNum = arr[i];

        // every number smaller than the pivot is to the left
        if (currNum < pivot) {
            left.push(currNum);
        } else {
            // every number larger (or equal) than the pivot is to the right
            right.push(currNum);
        }
    }

    // // Recursively sort the left
    // const recursiveLeft = quicksort(left);

    // // Recursively sort the right
    // const recursiveRight = quicksort(right);

    // // Return the left, pivot and right in sorted order
    // return [...recursiveLeft, pivot, ...recursiveRight];

    // Return the left, pivot and right in sorted order
    return [...quicksort(left), pivot, ...quicksort(right)];
}

//! Partial In-Place solution
// function quicksort(arr) {
//     // Check if the input is length 1 or less
//     // If so, it's already sorted: return
//     if (arr.length === 1) {
//         return arr;
//     }

//     // Pick the first value as the pivot
//     let pivot = arr[0];

//     // Orient the pivot so that...
//     // every number smaller than the pivot is to the left
//     //if next number smaller, swap the position [3, 2] => [2, 3]
//     //shift all ele before cur_index t right by 1, reassign arr[0] to the current smaller number
//     // every number larger (or equal) than the pivot is to the right
//     //if next number larger, increase the pointer [2, 3] => [2, 3]
//     let div = 0;
//     let pointer = 1; //current value, same as next value
//     while (pointer < arr.length - 1) {
//         if (arr[pointer] < pivot) {
//             let cur_val = arr[pointer];
//             for (let i = pointer; i > div; i--) {
//                 arr[i] = arr[i - 1];
//             }
//             arr[div] = cur_val;
//             div++;
//         }
//         pointer++;
//     }

//     // Recursively sort the left
//     let left = arr.slice(0, div);

//     // Recursively sort the right
//     let right = quicksort(arr.slice(div + 1));

//     // Return the left, pivot and right in sorted order
//     return [...left, pivot, ...right];
// }

module.exports = [quicksort];
