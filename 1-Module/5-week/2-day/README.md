# Out of the frying pan, into the frying pan - `Recursion Week`

## String Interpolation

```js
let gameName = "Elden Ring";
let firstName = "Foul";
let lastName = "Tarnished";
let element = "flame";
let putOutFire = () => "extinguish";

let greeting = `${firstName + " " + lastName}, in search of the ${gameName}.`;
let threat = `Someone must ${putOutFire()} thy ${element}!`;

console.log(greeting);
console.log(threat);
```

---

## Debugger Setup - CMD/CTRL + Shift + P

```json
"launch": {
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch",
      "console": "integratedTerminal",
      "program": "${file}"
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Mocha Tests",
      "program": "${workspaceFolder}/node_modules/mocha/bin/_mocha",
      "args": [
        "-u",
        "bdd",
        "--timeout",
        "999999",
        "--colors",
        "${workspaceFolder}/test"
      ],
      "internalConsoleOptions": "openOnSessionStart",
      "skipFiles": [
        "<node_internals>/**"
      ]
    }
  ]
}
```

## Bracket Pair Colorizer

```json
"editor.bracketPairColorization.enabled": true,
"editor.guides.bracketPairs":"active"
```

---

## [`Time to customize your VSCode like a pro 😎`](./VSCode_Extensions.md)

- Open your extensions and search for each of the headers in this file

---

## Call Stack

`Discussion`

- Is JS single-threaded or multi-threaded? What does this mean?
  1. Single Threaded - Can only do one thing at a time
- What is a 'stack'?
  1. First in - Last out (FILO)

```js
function foo() {
  return 2 + bar();
}

function bar() {
  return 6 + baz();
}

function baz() {
  return 3;
}

console.log(foo());
```

## Recursion

- What is a recursive function?
  1. A function that calls itself, until it doesn't
- What are the 'parts' of a recursive function?
  1. Base Case (When should we stop)
  2. Recursive Case (When should we recurse)
  3. Recursive Step (How do I move toward the BC or move out of the RC)

```js
/* 
Write a function called rec_sum that intakes a number, and adds up all
numbers from 1 to the number and returns the sum. Must be recursive.
We're expecting all nums to be >= 1
*/

const rec_sum = () => {
  // Your code here
};

console.log(rec_sum(1)); // => 1
console.log(rec_sum(2)); // => 3
console.log(rec_sum(3)); // => 6
```
