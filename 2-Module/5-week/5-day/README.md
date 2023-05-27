# Sorting Algorithms

## I literally see `array.sort()` right there!!! Why can't I use it?

You can! In fact I'd never recommend writing your own to solve a problem that needs sorting.

However, learning how to write these algorithms

- Sharpens critical thinking skills
- **_Preps you for interviews_**

## Important Techniques

When sorting, **swapping** and **shifting** are your bread and butter

## **Swapping**

To swap two values in an array:

- Use a variable to temporarily store the first value to be swapped
- Set the value at that index to the second value to be swapped
- Set the second index value to your temporary variable

```js
const arr = [0, 1, 2, 3, 4, 5, 6];

// Swap two values with a temporary variable
let tmp = arr[1];
arr[1] = arr[2];
arr[2] = tmp;

console.log(arr); // [0, 2, 1, 3, 4, 5, 6]

// Also works if the above version is tough to think about
let first = arr[0];
let second = arr[3];
arr[0] = second;
arr[3] = first;

console.log(arr); // [3, 2, 1, 0, 4, 5, 6]
```

### That's fine, but we can leverage `array destructuring` to do this far more easily

```js
const arr = [0, 1, 2, 3, 4, 5, 6];
// Swap two values with destructured array assignment
[arr[4], arr[6]] = [arr[6], arr[4]];

console.log(arr); // [0, 1, 2, 3, 6, 5, 4]
```

## **Shifting**

To shift values over in an array:

- Start of the back of the array
- Set the value at `i` to the value at `i - 1`
- Complete the loop

```js
const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5];

// If you want to shift the array to the right by 1...

// Shifting from front to back will overwrite all values
for (let i = 1; i < arr1.length; i++) {
  arr1[i] = arr1[i - 1];
}

console.log(arr1); // [ 0, 0, 0, 0, 0, 0 ]

// Instead, start from the back and shift backwards
for (let i = arr2.length - 1; i > 0; i--) {
  arr2[i] = arr2[i - 1];
}

console.log(arr2); // [ 0, 0, 1, 2, 3, 4 ]
```

---

---

---

## Highly Recommended Visualizer

### [Sorting visualizer](https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/)

This link takes you to Bubble Sort, but all other sorts can be found here as well!

---

---

---

## Bubble Sort - `O(n^2)`

Bubble Sort is almost NEVER used because it is terribly inefficient

- `O(n^2)`

Bubble Sort gets its name from the largest values "bubbling" up to the top (end) of the array

### Implementation:

1. Start at the beginning of the list.
2. Compare the first two elements. If the first element is greater than the
   second element, swap them.
3. Move to the next pair of elements (i.e., the second and third elements),
   and repeat step 2.
4. Continue in this manner until the end of the list is reached.
5. If any swaps were made in steps 2-4, repeat the process from the beginning of
   the list again. Otherwise, the list is sorted.

---

## Insertion Sort - `O(n^2)`

Takes one value and inserts it in the correct location in a sorted array

Insertion Sort can be done `in place` and `out of place`

### `Out of place`:

1. Create a `sorted` array.
2. Remove an element from the original array.
3. Iterate backwards through `sorted` and compare elements.
4. If the new element is smaller than the `sorted` element, shift the elements.
5. Once the new element is larger than the `sorted` element, insert it.
6. Repeat steps 2-5 for all remaining elements in the list.

### `In place`:

1. Start by considering the first element of the list as the sorted portion.
2. Move to the next element of the list and compare it with the previous element in the sorted portion.
3. If the current element is smaller than the previous element, shift the previous element.
4. Once the current element is larger than the previous element, insert it.
5. Repeat steps 2-4 for all remaining elements in the list.

---

## Selection Sort - `O(n^2)`

Finds the smallest element in an array and puts it to the top of a sorted array

Selection Sort can be done `in place` and `out of place`

### `Out of place`:

1. Create a `sorted` array.
2. Find the smallest element in the original array and remove it.
3. Push the element into the `sorted array`.
4. Repeat steps 2 & 3 for all remaining elements in the list.

### `In place`:

1. Start with the first element of the array, which is the first element of the sorted part of the array, and the remaining part of the array is the unsorted part.
2. Find the minimum element in the unsorted part of the array.
3. Swap the minimum element with the first element of the unsorted part of the array, so that the minimum element is now the last element of the sorted part of the array.
4. Repeat steps 2-3 for the remaining unsorted part of the array until the entire array is sorted.

---

## Quick Sort - `O(n log n)`

Also uses a divide and conquer strategy, as well as a `pivot` to divide our array into two arrays.

1. Choose a pivot element from the array. This element will be used to partition the array into two sub-arrays.
2. Partition the array into two sub-arrays: one sub-array containing all elements less than or equal to the pivot, and another sub-array containing all elements greater than the pivot.
3. Recursively sort the sub-array containing elements less than or equal to the pivot.
4. Recursively sort the sub-array containing elements greater than the pivot.
5. Concatenate the sorted sub-arrays back together to form the sorted array.

```js
/**
 * 5, 3, 8, 6, 7, 2
 *
 * Choose 5 to be our pivot (often pick the first element)
 *
 * Separate into two sub-arrays:
 * 3, 2     5     8, 6, 7
 *
 * Recursively sort!
 *
 * Choose a new pivot for 3, 2
 *
 * 2,       3
 *
 * Choose a new pivot for 8, 6, 7
 *
 * 6, 7     8
 *
 * Recursively sort!
 *
 * Choose a new pivot for 6, 7
 *
 * 6,       7
 *
 *
 * Finally, add all the arrays back together
 *
 * 2,  3,  5,  6,  7,  8
 */
```

---

## Merge Sort - `O(n log n)`

Uses the divide-and-conquer approach to
sort an array.

Hinges on a key idea: an array with only a single value is sorted by default.

1. Divide the unsorted array into two halves.
2. Recursively sort the first half of the array.
3. Recursively sort the second half of the array.
4. Merge the two sorted halves back together to form the sorted array.

```js
/**
 * 5, 3, 8, 6, 7, 2
 *
 * Divide the array into two halves:
 * 5, 3, 8     6, 7, 2
 *
 * Recursively sort first half of the array:
 * Divide the array into two halves:
 * 5, 3      8
 *
 * Recursively sort first half of the array:
 * Divide the array into two halves:
 * 5      3
 *
 * Only have one element each, so merge them together
 * 3, 5
 *
 * Next half only has one element, so merge
 * 3, 5, 8
 *
 *
 * Move back to the top of our recursive calls
 * Recursively sort second half of the array:
 * Divide the array into two halves:
 *  6, 7      2
 *
 * Recursively sort first half of the array:
 * Divide the array into two halves:
 * 6      7
 *
 * Only have one element each, so merge them together
 * 6, 7
 *
 * Next half only has one element, so merge
 * 2, 6, 7
 *
 * Finally, merge the two sorted halves back together
 *
 * 2, 3, 5, 6, 7, 8
 */
```
