# TIME TO BUILD SOMETHING LETS GOOOOOOOOOOOOO

## Quick note on importing

This is the first time (I think?) that we're importing something!

There are two different ways we can do this, and we'll learn more about importing in the near future.

**_For now keep in mind:_**

- Some modules are only available through an install, like `mocha`!
  - This is why we run `npm install` to use them in our project
  - `node_modules` is where those modules are stored
- Other modules are available by default in Node, like `readline`
  - No need to install, we can just use them immediately!

## Getting started

Import `readline`

```js
const readline = require("readline");
```

Use it to create an interface

```js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
```

Use the interface's `.question()` method to ask a question and receive a response

- First arg: string question to be printed in the console
- Second arg: callback function to be run
  - Callback function's first arg: user's response in a string

Then call the interface's `.close()` method to end the async call

```js
rl.question("This is a question? ", (answer) => {
  console.log("The user's answer => " + answer);
  rl.close();
});
```

## Callback Hell

Just like we've done in the past with synchronous code, we can chain async code as well!

```js
setTimeout(() => {
  console.log("I run after 2 total seconds");

  setTimeout(() => {
    console.log("I run after 4 total seconds");
  }, 2000);
}, 2000);
```

This can get a little crazy looking and quickly is impossible to read

Instead, separate creating a function from where you call it

```js
const quickFunc = () => {
  console.log("I run after 2 total seconds");

  setTimeout(slowerFunc, 2000);
};

const slowerFunc = () => {
  console.log("I run after 4 total seconds");
};

setTimeout(quickFunc, 2000);
```

Here's how that might look when working with readline

```js
// import the readline module into our file
const readline = require("readline");

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = {};

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponseOne will
// be executed when the user has submitted their response.

rl.question("What's your favorite game? ", handleResponseOne);

// first callback
function handleResponseOne(firstAnswer) {
  console.log("Oh " + firstAnswer + "? I hear that's a really good game!");
  // save firstAnswer to answer object
  answers["favGame"] = firstAnswer;
  rl.question("How many hours have you put into it? ", handleResponseTwo);
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(`${secondAnswer} hours?! Jesus man get a life...`);
  answers["hours"] = secondAnswer;
  rl.question("Have you at least beaten the game yet? ", handleResponseThree);
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  if (thirdAnswer.toLowerCase() === "no") {
    console.log("Sounds like you need to gitgud.");
  } else if (thirdAnswer.toLowerCase() === "yes") {
    console.log("Well at least you've got that going for you.");
  }
  answers["completed"] = thirdAnswer.toLowerCase() === "yes";
  // close the interface
  rl.close();
  console.log(answers);
}
```

## It's time to be a real developer!

This is the first time we're truly "throwing you to the wolves", but it's certainly not the last!

When you're stuck, follow this procedure:

- Read your error
- Try to use `console.log()` or the `debugger` to find the values of different variables
  - Never assume you know what the value of something is, always double check!
- Double check you're following the instructions properly
- Refer to your HW reading
- Check the [Readline Docs](https://nodejs.org/api/readline.html#readline_readline) to make sure you're using the methods correctly
- If you still can't figure it out, ask for help!
