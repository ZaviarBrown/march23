# 🧙‍♂️ Become Masters of Space and Time 🧙‍♂️

## Big-O Notation

> "A mathematical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity" - [Wikipedia: Big O notation](https://en.wikipedia.org/wiki/Big_O_notation)

- Simply put, how we describe code performance!

  - Time Complexity: How long will it take?
  - Space Complexity: How much memory will it use?

- Not concerned with exact values, simply describes the _shape of the growth curve_

- We use _complexity analysis_ to determine the _number of operations_ that are performed relative to the _input size_ and describe the shape of the resulting growth curve

  - Simply put, how does what we receive affect how the function runs?

  <img src="https://i.ibb.co/XxHTsn0/growthcurves.png" width="500">

- The growth curve can be described in many different ways, but the 3 we are going to focus on for now are:

  - Constant: O(1)
  - Linear: O(n)
  - Quadratic: O(n^2)

- Other curves include:

  - Exponential: O(2^n)
  - Logarithmic: O(log n)
  - Loglinear: O(n log n)
  - Factorial: O(n!)
  - and many more.

## Worst Case & Ignoring coefficients

- **Big-O** notation is only concerned with _very large values_, referred to as the `worst case`
  - Small inputs return within a few milliseconds, even if code is inefficient
- The difference between growth types is far more significant than doing a single type multiple times
  - Is `n` or `2n` worse?
    - Technically `2n`, but in the grand scheme they are identical
  - At the largest inputs, `100n` < `n^2`
    - If `n` is 1000
      - `100n` = 100,000
      - `n^2` = 1,000,000
- So always drop coefficients when calculating Big-O
  - `n`, `2n`, `100n` === `n`
  - `n^2`, `2n^2`, `100n^2` === `n^2`

---

## `Time Complexity` - How long will this function take to execute?

### **_`Constant`_** Time **_`0(1)`_**

As input size grows, number of operations **_stays the same_**

```js
function addFirstAndLast(nums) {
  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];

  return firstNum + lastNum;
}
```

Doesn't matter if the passed in nums array has 2 numbers or 7 million, it will always take the same amount of time to complete

---

### **_`Linear`_** Time **_`0(n)`_**

As input size grows, number of operations **_grow at the same rate_**

```js
function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
```

The larger n is, the more time this function takes to complete

- Operation: `total += i`
- Times performed: `n`

Generally if you have a for-loop that iterates through `n` elements, that block of code is **Linear O(n)**

---

### Quick test: `Constant O(1)` or `Linear O(n)`

```js
function printLetters() {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
  }
}
```

<details>
<summary>Answer: </summary>
<span style="font-weight:bold">Constant O(1)</span>

The letters variable is defined in the function (not an input) so it wont change and stays constant

</details>

---

### **_`Quadratic`_** Time **_`0(n^2)`_**

As input size grows, number of operations **_grow at the rate of n^2_**

- Technically `polynomial`
  - Quadratic is n^2
  - Cubic is n^3
  - etc.

```js
function addManyNums(n) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    total += addNums(i);
  }

  return total;
}
```

The larger n is, the more times `addNums` is called

`addManyNums`

- Operation: `total += addNums(i)`
- Times performed: `n`

`addNums`

- Operation: `total += i`
- Times performed: `n`

`n` \* `n` === `n^2`

Generally if you have nested for-loops that iterate through `n` elements each, that block of code is **Quadratic O(n^2)**

```js
function printPairSums(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }
}
```

---

### What's the time complexity of these nested loops?

```js
function printLettersNTimes(n) {
  const letters = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < n; j++) {
      console.log(letters[i]);
    }
  }
}
```

**`printLettersNTimes`**

<details>
<summary></summary>
<span style="font-weight:bold">Linear O(n)</span>

Only the inner loop is iterating through `n` elements

Technically `26n`, simplifies to `n`

</details>

```js
function printNumbersTwice(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  for (let j = 0; j < n; j++) {
    console.log(j);
  }
}
```

**`printNumbersTwice`**

<details>
<summary></summary>
<span style="font-weight:bold">Linear O(n)</span>

These loops aren't nested!

`n` + `n` = `2n` === `n`

</details>

```js
function printPairSumsThenPrintNums(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`${i} + ${j} = ${i + j}`);
    }
  }

  for (let k = 0; k < n; k++) {
    console.log(k);
  }
}
```

**`printPairSumsThenPrintNums`**

<details>
<summary></summary>
<span style="font-weight:bold">Quadratic O(n^2)</span>

Nested loop is quadratic, final loop is linear

`n^2` + `n` === `n^2`

</details>

---

## `Space Complexity` - How much memory will this function use?

### **_`Constant`_** Space **_`0(1)`_**

As input size grows, amount of saved data **_stays the same_**

```js
function addFirstAndLast(nums) {
  const firstNum = nums[0];
  const lastNum = nums[nums.length - 1];

  return firstNum + lastNum;
}
```

Doesn't matter if the passed in nums array has 2 numbers or 7 million, it will always only save 2 variables

```js
function addNums(n) {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}
```

Even though `total` is updated `n` times, it's only a single variable in a single spot in memory

---

### **_`Linear`_** Space **_`0(n)`_**

As input size grows, amount of saved data **_grows at the same rate_**

```js
function getNumList(n) {
  let nums = [];

  for (let i = 0; i < n; i++) {
    nums.push(i);
  }

  return nums;
}
```

Although `nums` is a single variable, it will hold an increasing number of values

- Number of values is directly correlated with the input of `n`
- Each value in the array takes up its own place in memory

---

### **_`Quadratic`_** Space **_`0(n^2)`_**

As input size grows, amount of saved data **_grows at the rate of n^2_**

```js
function getNumPairsList(n) {
  let pairs = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      pairs.push([i, j]);
    }
  }

  return pairs;
}
```

Lets keep track of variables

- `i`: `n` different values
- `j`: `n` different values
- `pairs`: array holding every combination of `i` & `j`

`n` \* `n` = `n^2`

---

## Hack the fabric of space

Since we can pass an arr to a function as a reference and have the ability to modify that array, we can do that instead of creating a new one to optimize space!

Take the following example:

```js
function increaseByOne(nums) {
  const increased = [];

  for (let i = 0; i < nums.length; i++) {
    increased.push(nums[i] + 1);
  }

  return increased;
}
```

- Takes in an array `nums`
  - Holds `n` elements
- **_Creates_** and returns a new array `increased`
  - Holds `n` elements

Space complexity: O(n)

- `nums` still exists in memory unchanged
- A new array of `n` values has been created

Now let's look at this example

```js
function increaseByOneInPlace(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i]++;
  }

  return nums;
}
```

- Takes in an array `nums`
  - Holds `n` elements

Space complexity: O(1)

- `nums` has been directly changed
  - No new data has been created

If space is an issue, this may be the way to go when you are dealing with large data sets, However if you want to keep a clean copy of the original array, you will need to sacrifice space complexity and go with the first option.

---

## Should I care about `Time` or `Space` more?

If possible, lowest space **_and_** time is best!

If not:

- Lower time is generally more preferred
  - Time === Money
  - Memory is cheap an abundant!

---

## Timing Benchmarks Reading 10 mins + Practice Pt. 1: 20 mins

- If your `should run in O(n) time` test fails, call in a TA

## Practice Pt. 1 Discussion

- Two volunteers to drive me through your code.

## Practice Pt. 2: 20 mins

- Don't worry about DRY for now!

## Practice Pt. 2 Discussion

- Two more volunteers drive me through your code.

## Practice Pt. 3: 40 mins

- You will ACTUALLY copy/paste your code from pt.2, then add timings
- [Class Google Sheet]
- You'll each present your findings and, based on your graph, tell what time complexity we see here
  - If you need help Google sheet instructions are in the Timing Benchmarks Reading/Google

---

## If time is left

- Look through functions of previous weeks, can you
  - Define the time complexity?
  - Define the space complexity?
  - Optimize for better Big-O?
    - If not, ask for help!

[class google sheet]: https://docs.google.com/spreadsheets/d/1GrmB1C4lBUpswa0SYtuzS05m3nE71D4UrmYrfk_JP0o/edit?usp=sharing
