# `const moreRecursion = () => moreRecursion()`

## Default Parameters

- Must be the last value in parameters

```js
const addAndMultiply = (num1, num2, num3 = 5) => {
  let sum = num1 + num2;
  let product = sum * num3;
  return product;
};

console.log(addAndMultiply(1, 2, 3)); // 9
console.log(addAndMultiply(1, 2)); // 15
```

---

## Recursion best practices

- `USE THE DEBUGGER!!!`

  - Seeing the call stack is so incredibly useful!
  - Even if it doesn't make sense at first, keep using it
  - Once you've solved a problem, use it again
    - Try to follow along with each recursive call
    - Try to predict the value of variables

- `WRITE OUT YOUR PLAN!!!`

  - Polya's is always a good idea
  - But, if you really don't want to, at least write out:

    ```js
    const anyRecursiveFunction () => {
      // Base Case

      // Recursive Step

      // Recursive Case
    }
    ```

---

## One more recursive example...

```js
const arr = [1, 2, 3, 4, 5];

const recurseSum = (arr) => {
  if (arr.length === 1) {
    return arr.pop();
  }
  return arr.pop() + recurseSum(arr);
};

console.log(recurseSum(arr));
```

---

## Extra Resources

Video lectures

[Alvin's Intro To Recursion](https://www.youtube.com/watch?v=yBWlPte6FhA)

[Alvin's Complex Recursion Explained Simply](https://www.youtube.com/watch?v=wRH2I6IN4BE)

Call stack visualizers! I haven't tried them, but other cohort leads really like them

[Loupe](http://latentflip.com/loupe/?code=!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D)

[JS Visualizer 9000](https://www.jsv9000.app/)
