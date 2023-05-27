function bubbleSort(arr) {
    let hasSwapped = false;

    while (true) {
        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // If the current value is greater than its neighbor to the right
            if (arr[i] > arr[i + 1]) {
                // Swap those values
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                hasSwapped = true;

                // Do not move this console.log
                console.log(arr.join(","));
            }
        }

        // If you get to the end of the array and no swaps have occurred, return
        if (!hasSwapped) return arr;

        // Otherwise, repeat from the beginning
        hasSwapped = false;
    }
}

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// function bubbleSort(arr) {
//     let sorted = false;
//     let iteration = 0;

//     while (!sorted) {
//         sorted = true;
//         for (let i = 0; i < arr.length - iteration; i++) {
//             if (arr[i] > arr[i + 1]) {
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 console.log(arr.join(","));
//                 sorted = false;
//             }
//         }
//         iteration++;
//     }
// return arr
// }

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// function bubbleSort(arr) {
//     let sorted = false;
//     while (!sorted) {
//         // Iterate through the array
//         sorted = true;

//         for (let i = 0; i < arr.length; i++) {
//             // If the current value is greater than its neighbor to the right
//             if (arr[i] > arr[i + 1]) {
//                 // Swap those values
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//                 sorted = false;
//                 // Do not move this console.log
//                 console.log(arr.join(","));
//             }

//             // If you get to the end of the array and no swaps have occurred, return

//             // Otherwise, repeat from the beginning
//             // console.log("for loop")
//         }
//     }
//     return arr;
// }

module.exports = bubbleSort;
