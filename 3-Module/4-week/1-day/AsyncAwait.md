# `async` / `await`

`.then().then().then().wtfIsThisSyntax()`

- For something designed with the purpose of making code easier to read, this can be pretty difficult to read!

Wouldn't it be nice if we could write async code in a more natural way?

It is nice!! And it looks like this:

```js
const coolFunction = async () => {
  console.log("I'm always first");

  const answer = await someAsyncFunction(); // Here our function waits for a result!

  console.log("And normally this runs before the async function");
};
```

## Where does the `async` go?

We must put `async` _directly before_ the **function**

Where does the function begin in each function below?

```js
// A.
const myFunc = () => {};
[1] const [2] myFunc [3]  = [4] () [5] => [6] {};

// -----------------------------------------------------

// B.
const myFunc = function () {};
[1] const [2] myFunc [3]  = [4] function [5] () [6] {};

// -----------------------------------------------------

// C.
function myFunc() {}
[1] function [2] myFunc [3] () [4] {}
```

<details>
<summary>Answer:</summary>

A. 4

B. 4

C. 1

```js
const myFunc = async () => {};

const myFunc = async function () {};

async function myFunc() {}
```

</details>

## Where does the `await` go?

We must put `await` _directly before_ the **asynchronous action**

```js
// in an async function

await fetch("...");

const myValue = await fetch("...");
```

---

## Different syntax, same functionality

Asynchronous code tends to be scary, and learning new syntax makes it even scarier.

One thing is very important to keep in mind:

`.then()` & `async await` do **_EXACTLY THE SAME THING_**

### **_I REPEAT, THEY DO THE EXACT SAME THING_**

Think of it like a for loop vs a forEach!

### The main differences are:

- `async await` needs to be in a function
- `await` waits for the line to run, then moves on to the next line
- `.then()` can be chained directly off of a promise
- `.then()` runs immediately after the promise is resolved, doesn't matter where/when it was called
