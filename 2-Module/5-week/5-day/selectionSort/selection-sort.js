function selectionSort(arr) {
    // Copy the original array
    let copyArr = [...arr];

    // Create an array to store the sorted values
    const sorted = [];

    // While the array is not empty...
    while (copyArr.length) {
        // Do not move this console.log
        console.log(sorted.join(","));

        // // Find the index of the minimum value in the unsorted half
        // // Save and remove the value at the min index

        // Find the min num
        const minNum = copyArr.reduce(
            (min, next) => (min > next ? next : min),
            copyArr[0]
        );

        // Remove min num from copyArr
        copyArr = copyArr.filter((num) => num !== minNum);

        // Add the min value to the end of the sorted array
        sorted.push(minNum);
    }

    return sorted;
}

function selectionSortInPlace(arr) {
    // Set a pointer at zero diving the array into sorted and unsorted halves
    let div = 0;

    // Repeat while the unsorted half is not empty:
    while (div < arr.length) {
        // Do not move this console.log
        console.log(arr.join(","));

        // Find the index of the minimum value in the unsorted half
        // Save the min value
        let minNum = arr[div];
        let minIndex = div;

        for (let i = div; i < arr.length; i++) {
            if (arr[i] < minNum) {
                minNum = arr[i];
                minIndex = i;
            }
        }

        // //? Swapping works but doesn't pass our specific specs
        // [arr[div], arr[minIndex]] = [arr[minIndex], arr[div]];
        // div++;

        // Shift every unsorted value to the left of the min value to the right by 1
        let i = minIndex;

        while (i > div) {
            arr[i] = arr[i - 1];
            i--;
        }

        // Put the min value at the divider
        arr[div] = minNum;

        // Increment the divider and repeat
        div++;
    }

    return arr;
}

module.exports = [selectionSort, selectionSortInPlace];
