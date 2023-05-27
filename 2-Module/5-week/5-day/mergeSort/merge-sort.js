// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

    // Divide the array in half
    const mid = ~~(arr.length / 2);

    // Recursively sort the left half
    const left = mergeSort(arr.slice(0, mid)); // O(log n) space
    // Recursively sort the right half
    const right = mergeSort(arr.slice(mid)); // O(log n) space
    // Merge the halves together and return
    return merge(left, right);

    // // Recursively sort the left half
    // // Recursively sort the right half
    // // Merge the halves together and return
    // return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
    // Create an empty return array
    const sorted = []; // O(n)

    // Point to the first value of each array
    let ai = 0;
    let bi = 0;
    // While there are still values in each array...
    //   while (ai < arrA.length || bi < arrB.length )
    while (sorted.length < arrA.length + arrB.length) {
        // Compare the first values of each array
        if (arrA[ai] < arrB[bi]) {
            sorted.push(arrA[ai]); // Add the smaller value to the return array

            ai++; // Move the pointer to the next value in that array
        } else if (arrB[bi] <= arrA[ai]) {
            sorted.push(arrB[bi]); // Add the smaller value to the return array
            bi++; // Move the pointer to the next value in that array
        } else {
            if (bi === arrB.length) {
                sorted.push(arrA[ai]); // Add the smaller value to the return array

                ai++; // Move the pointer to the next value in that array
            } else if (ai === arrA.length) {
                sorted.push(arrB[bi]); // Add the smaller value to the return array

                bi++; // Move the pointer to the next value in that array
            }
            // if (bi === arrB.length) {
            //     return [...sorted, ...arrA.slice(ai)];
            // } else if (ai === arrA.length) {
            //     return [...sorted, ...arrB.slice(bi)];
            // }
        }
    }

    // Return the return array
    return sorted;
}

module.exports = [merge, mergeSort];
