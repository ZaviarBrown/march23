# Holy Heck Could We See Some Code Examples Please?

## `setTimeout()` and `setInterval()`

These functions take two mandatory arguments:

- A callback function
  - The callback will be called asynchronously
  - The code in the callback will still execute synchronously
- A number representing time in milliseconds
- They can optionally take any number of extra arguments to pass to the callback

`setTimeout()` will run the callback **_after_** `num` milliseconds have passed

`setInterval()` will run the callback **_every_** `num` milliseconds

```js
const myCB = () => {
  console.log("Look");
  console.log("at");
  console.log("me");
  console.log("go!");
};

setTimeout(myCB, 2000);
setInterval(myCB, 2000);
```

## Ready to be tested? 😳

```js
// --------------- Problem 1 ---------------------------
console.log("one");
console.log("two");
console.log("three");

// --------------- Problem 2 ---------------------------
const foo = () => {
  console.log("two");
};

console.log("one");
foo();
console.log("three");

// --------------- Problem 3 ---------------------------
console.log("one");

setTimeout(() => {
  console.log("two");
}, 1500);

console.log("three");
```

## SetTimeout

```js
// --------------- Problem 1 ---------------------------
setTimeout(() => {
  console.log("time is up");
}, 1000);

console.log("end");

// --------------- Problem 2 ---------------------------
const foo = (a, b) => {
  console.log("time is up");
  console.log(`${a} ${b}`);
};

setTimeout(foo, 1000, "potato", "tomato");

console.log("end");

// --------------- Problem 3 ---------------------------
const foo = (a, b) => {
  console.log("time is up");
  console.log(`${a} ${b}`);
};

const res = setTimeout(foo, 1000, "potato", "tomato");
clearTimeout(res);
```

## SetInterval

```js
// --------------- Problem 1 ---------------------------
const foo = (a, b) => {
  console.log("time is up");
  console.log(`${a} ${b}`);
};

setInterval(foo, 1000, "potato", "tomato");

// --------------- Problem 2 ---------------------------
const foo = (a, b) => {
  console.log("time is up");
  console.log(`${a} ${b}`);
};

const interval = setInterval(foo, 1000, "potato", "tomato");
clearInterval(interval);

// --------------- Problem 3 ---------------------------
const intervalCount = (count, delay) => {
  const intervalObj = setInterval(() => {
    console.log("time is up");
    count--;

    if (count === 0) {
      clearInterval(intervalObj);
    }
  }, delay);
};

intervalCount(3, 500);
```
