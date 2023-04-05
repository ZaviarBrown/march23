# Getting Fancy With Functions

## Callbacks

`Vocabulary`

- Higher Order Function

  - A function that intakes and/or returns another function.

- Callback
  - A function passed into another function

## First Class Function | MDN: [First-class Function]

1. Stored in a variable (last week)
2. Passed as an argument to a function (today)
3. Returned from a function (Later this week)

- Stored in a variable

  ```js
  let func1 = () => {
    console.log("I'm stored in a variable");
  };

  console.log(func1());
  ```

- Passed as an argument to a function

  ```js
  let higherOrderFunction = (callback) => {
    callback();
  };

  let intoAFunction = () => {
    console.log("I'm being passed into a function");
  };

  let intoAFunctionPt2 = () => {
    console.log("I'm ALSO being passed into a function");
  };

  higherOrderFunction(intoAFunction);
  higherOrderFunction(intoAFunctionPt2);
  ```

- Returned from a function (Later this week)

## Callbacks Project

### If it says "Do not use the built in \_\_\_" DON'T USE IT

### If it doesn't say that, USE EVERYTHING!!!

[first-class function]: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
