# First, some math 🤢

## `Logarithms`

A `log` is the inverse of an exponent

- `log` `n`(`x`): how many times `x` must be divided by `n` to get to 1

```js
(2 ^ 3) => 2 * 2 * 2 => 8;
log2(8) => 8 / 2 / 2 / 2 => 3
```

```js
// Find the log base-2 of 32

32 / 2 = 16;
16 / 2 = 8;
8 / 2 = 4;
4 / 2 = 2;
2 / 2 = 1;

log2(32) === 5
// it took 5 steps to get to 1 so the log base-2 of 32 is 5

// Find the log base-10 of 1000

1000 / 10 = 100;
100 / 10 = 10;
10 / 10 = 1;

log10(1000) === 3
// it took 3 steps to get to 1 so the log base-10 of 1000 is 3
```

## `Binary Logarithms`

A Binary logarithm is a base-2 logarithm

- You may see logs of any base, but base-2 will be the most common

```js
// Binary Exponent Table
(2 ^ 0) === 1;
(2 ^ 1) === 2;
(2 ^ 2) === 4;
(2 ^ 3) === 8;
(2 ^ 4) === 16;
(2 ^ 5) === 32;
(2 ^ 6) === 64;
(2 ^ 7) === 128;
(2 ^ 8) === 256;
(2 ^ 9) === 512;
(2 ^ 10) === 1024;

// Binary Log Table
log2(1) === 0;
log2(2) === 1;
log2(4) === 2;
log2(8) === 3;
log2(16) === 4;
log2(32) === 5;
log2(64) === 6;
log2(128) === 7;
log2(256) === 8;
log2(512) === 9;
log2(1024) === 10;
```

Built in log functions in JS

```js
Math.log10(100) === 2; // Base 10
Math.log2(1024) === 10; // Base 2

// We won't use these but they exist!
Math.log(); // Base e - Natural Log
Math.log1p(); // Base e - Natural Log
```

---

## Logarithmic Time Complexity - `O(log n)`

The `O(log n)` curve grows so slowly that it is virtually constant

<img src="https://i.ibb.co/XxHTsn0/growthcurves.png" width="500">

### `Binary Search`

So far, searching for a value in an array has been an `O(n)` time complexity

The most classic optimization for search is `Logarithmic Binary Search`

For this search, 2 conditions must be met:

- Data is sorted
- Data can be accessed by index in constant time

### Say we we want to find `32` in an array of `0` - `100`

- Start at the middle index (50)
- Since `32` is less than `50` we can ignore the numbers to the right
  - **_Only possible because the array is sorted!!!_**
- Find the middle index of the left side (25)
- Since `32` is greater than `25` we can ignore the numbers to the left
- Repeat until we find `32`

```js
const arr = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  ...
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39
  ...
  50, 51, 52, 53, 54, 55, 56, 57, 58, 59
  ...
  90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100
]; // Pretend all the numbers are there

const target = 32;

// Define the rage of possible indices
let low = 0; // lowest possible index
let high = arr.length - 1; // highest possible index

// Mid point of any number => (num1 + num2) / 2
let mid = Math.floor((low + high) / 2);

// Check the value of the array at the mid index
// If the number is the target, ggez we're done!
// If the number is less than target, reassign low to be mid index + 1
// If the number is greater than target, reassign high to be mid index - 1

if (arr[mid] === target) {
  // We found the target!
  return arr[mid];
} else if (arr[mid] < target) {
  // The target is in the upper (right) half of the array
  low = mid + 1;
} else {
  // The target is in the lower (left) half of the array
  high = mid - 1;
}

// Repeat until we find the target or until the low and high indices cross each other
```

## Identifying `O(log n)` Time Complexity

This is vastly superior to `O(n)`! Searching through 1 billion elements would take 30 comparisons instead of 1 billion

For search to be `O(log n)` we must divide the amount of data left to search through by half

### "Isn't that just the same as `n / 2`?"

- **Important distinction**: we must divide by 2 on **_`every loop`_**

Space complexity is `O(1)`

- Only stores `low`, `mid`, and `high`
