# Scope is a beautiful and terrible thing

## Scope

- Scope determines what variables are available for use within any given line
  of a JavaScript program.

- Advantages of Using Scope Correctly

  - `Security` - Restricting variables to only predefined sections of a program.
  - `Avoiding Namespace Collisions` - Allows you to reuse variables
    names in different scopes without causing errors.

- Three types of scope & what they "see"

  - `Global` - Variables defined in the global scope.

    - When running JS locally (Node), global scope represents the
      global object
    - When running JS in the browser, global
      scope represents the window object
    - If you initialize a variable without a declaration it defaults to the
      global scope.

  - `Function` - Global, Parameters, Variables defined in the function
  - `Block`- Global, Local, Variables defined in the block

---

```js
let globalScope = "I am globally scoped";

let myFunction = function (functionScope) {
  let alsoFunctionScope = "I am also function scoped";

  if (!functionScope) {
    let blockScope = "I am block scoped";
  }
};

myFunction("I am function scoped");
```

---

```js
let car = "vroom";
function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i);
    }
  }
}
makeSounds("woof");
```

---

- Scope Chaining

  - JS will search through scopes, working upwards until it finds a match.
    - Inner scopes have access to outer scopes
    - Outer scopes **_do not_** have access to inner scopes

```js
let hungry = false;

function sayHungry() {
  let hungry = true;
  if (hungry) {
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

sayHungry();
```

---

```js
let scopeOfFor = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
  }

  console.log(i);
};

scopeOfFor([1]);
```

---

## `let` | `const` | `var`

- `let` is block scoped and CAN be reassigned.
- `const` is also block scoped, but CANNOT be reassigned.
  - reassign !== mutable
- `var` is function scoped, and CAN be reassigned.

## Why bother using `const`?

If you plan to overwrite a variable, definitely use `let`!

Otherwise, it's safer to prevent a variable from ever being overwritten.

Great use cases for `const`:

- Functions
- Arrays
- Objects
- Data that should not change

## Hoisting and the Temporal Dead Zone

- `Hoisting`: "Moving" variables to the top of their scope
  - Does not "move" the value, only the existence of the variable

```js
if (true) {
  console.log(str); // undefined
  var str = "not apple";
}
```

- `Temporal Dead Zone`: The state where variables are un-reachable
  - They are in scope, but they aren't declared yet

```js
var str = "not apple";

if (true) {
  console.log(str); // ReferenceError => Due to TDZ
  let str = "apple";
}
```

|       | declaration | assignment  |  initialization  |  scope   |        hoisting        |
| :---: | :---------: | :---------: | :--------------: | :------: | :--------------------: |
|  var  |   var x;    | x = 'Toby'; |  var x = 'Tom';  | function | declared; not assigned |
|  let  |   let x;    | x = 'Toby'; |  let x = 'Tom';  |  block   |   Temporal Dead Zone   |
| const |             |             | const x = 'Tom'; |  block   |   Temporal Dead Zone   |

---

```js
const doNotUseVar = () => {
  var test = "hello";
  if (true) {
    var test = "hi";
  }
  console.log(test);
};

doNotUseVar();
```

---

## Closure | MDN: [Closures]

- An inner function that uses or changes variables that were initialized\
  in an outer function.

`Overview`

- We can use/manipulate a Higher Order Functions' variables/parameters with a closure
- We can create multiple "instances" of a function's variables with closures

- Prompt

  - I want to start a new business that sells robots to people.

    - Level One

      - I need to build a factory that will produce robots to people that say, "Hello" when they run them.

    - Level Two

      - Customers would like it if they could decide what the robots said.

    - Level Three

      - Customers would like it if their robots said their names

    - Level Four
      - Customers would like it if the robots kept track of ALL the names they've spoken to.

```js
const factory = function (voiceChip) {
  let names = [];
  return function robot(name) {
    names.push(name);
    return voiceChip + " " + names.join(" and ");
  };
};

const hiBot = factory("Hello");

const byeBot = factory("Goodbye");

console.log(hiBot("Zaviar"));

console.log(hiBot("Kirin"));

console.log(byeBot("Kirin"));

console.log(byeBot("Zaviar"));
```

```js
const factory = function (voiceChip) {
  console.log("Booting up factory...");
  console.log("Creating a new empty array...");
  let names = [];
  console.log("Returning a new robot that says " + voiceChip + "...");
  return function robot(name) {
    console.log("Booting up " + voiceChip + " robot...");
    console.log("Adding " + name + " to names...");
    names.push(name);
    console.log("Returning the correct phrase...");
    return voiceChip + " " + names.join(" and ");
  };
};

const hiBot = factory("Hello");
console.log("---Done---");
const byeBot = factory("Goodbye");
console.log("---Done---");

console.log("This is the return of hiBot: ", hiBot); // function
console.log("---Done---");
console.log("This is the return of byeBot: ", byeBot); // function
console.log("---Done---");

console.log(hiBot("Zaviar"));
console.log("---Done---");
console.log(hiBot("Kirin"));
console.log("---Done---");

console.log(byeBot("Kirin"));
console.log("---Done---");
console.log(byeBot("Zaviar"));
console.log("---Done---");
```

[closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
