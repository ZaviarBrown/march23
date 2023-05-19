# Sets and Caching

## **`Sets`**

A `set` is a collection of **unique**, _unordered_ values.

- Contains **no duplicates**
- **No order**
- Checks if an element exists in **`O(1)` time**
- Literally so useful I love Sets so much

`Sets` are usually implemented using `hash tables` to achieve `O(1)` lookup time

- Essentially an object with only keys
- `array.includes()` - `O(n)`
- `set.has()` - `O(1)`

## Most Commonly Used Methods & Properties

- new Set(`/* an iterable */`) - creates a set
- Set.add() - adds something to a set
- Set.has() - let's you know if it's in the set
- Set.delete() - deletes something from a set
- Set.clear() - removes everything from the set
- Set.size - gives you the 'length' of a set

## **`Caching`**

If you're going to calculate the same things multiple times, you'd be better off calculating it once and just storing the answer

### `Pure functions`

A function that only depends on its input and has no side effects

- Side effect: a function changing the value of something outside of the function

## `Memoization and Tabulation`

Both are forms of _dynamic programming_

- Solving a sub-problem once and using that result to solve larger problems
- Names aren't important nor are the differences between them
- Just remember they are both forms of caching

```js
// Standard recursive solution

function fib(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(40));

// Using Memoization

const cache = {}; // Memo cache

function fibMemo(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  if (cache[n] === undefined) {
    cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
  }

  return cache[n];
}

console.log(fibMemo(100));
```
