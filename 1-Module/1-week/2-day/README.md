# W1D2

## Boolean Type

- `Not` Operator (!)

  - Reverses a boolean

    |   A   |  !A   |
    | :---: | :---: |
    | true  | false |
    | false | true  |

- The `And` Operator ( && )

  - Only true if **_both_** sides are true

    |   A   |   B   | A && B |
    | :---: | :---: | :----: |
    | true  | true  |  true  |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

- The `Or` Operator ( || )

  - True if **_either_** side is true

    |   A   |   B   | A \|\| B |
    | :---: | :---: | :------: |
    | true  | true  |   true   |
    | true  | false |   true   |
    | false | true  |   true   |
    | false | false |  false   |

## Comparison Operators

- Compares two elements and evaluates to a boolean

  ```js
  // Less than/Greater than
  console.log(5 < 9); // true
  console.log(5 > 9); // false
  console.log("a" < "b"); // true (dictionary order)
  console.log("cat" < "cats"); // true (dictionary order)

  // Inclusive comparison (... or equal to)
  console.log(7 <= 10); // true
  console.log(10 >= 10); // true
  ```

- Equality

  - `=` is an assignment operator
  - `==` coerces data to check equality, hard to predict; **_DO NOT USE_**
  - `===` strict equality
  - `!==` strict NOT equal

  ```js
  // Equality === and !==
  console.log(2 === 2); // true
  console.log(2 === 2.1); // false
  console.log(2 !== 2.1); // true

  // Two equality operators, === and ==
  console.log(5 === "5"); // false
  console.log(5 == "5"); // true (types are coerced)
  console.log([] == 0); // true (can be unpredictable)
  ```

## Variables

### Creation

- To declare a variable, we use the `let` keyword
- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like putting a label on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like putting something inside your box

```js
let myVariableName = "Whatever I want!";
```

### Terminology

- Declaration
  - The act of saying `let`
- Assignment
  - The act of giving the variable a value
- Initialization
  - The combination of both Declaration & Assignment

```js
let name; // declaration

name = "Leroy"; // assignment / reassignment

let name2 = "Jenkins"; // initialization

console.log(name, name2); // Leroy Jenkins
```

### Interactions

- Creating a variable with no value gives it a default of `undefined`
- Assigning a value to a variable that already had a value will overwrite that value
- You can't create multiple variables with the same name

```js
let myVariable;
console.log(myVariable); // undefined

myVariable = "Zaviar";
console.log(myVariable); // "Zaviar"

myVariable = "Kirin";
console.log(myVariable); // "Kirin"

let myVariable = 100; // SyntaxError: Identifier 'myVariable' has already been declared
```

### Manipulation

- To change the value of a variable, you MUST use an `=` sign

  - Any "changes" you make to a variable are not saved unless you assign them

  ```js
  let num = 42;
  console.log(num + 8); // => 50
  console.log(num); // => 42

  num = num + 10;
  console.log(num); // => 52
  ```

- Shorthands exist to make our lives easier!

  ```js
  let number = 0;
  number += 10; // equivalent to number = number + 10
  number -= 2; // equivalent to number = number - 2
  number /= 4; // equivalent to number = number / 4
  number *= 7; // equivalent to number = number * 7
  console.log(number); // 14
  ```

- It's very common to add/subtract 1 from a number, so there are also shorthands for that!

  ```js
  let year = 3004;
  year++;
  console.log(year); // 3005
  year--;
  console.log(year); // 3004
  ```

- Be careful with prefix vs postfix

```js
let preFix = 10;
console.log(preFix); // 10
console.log(++preFix); // 11
console.log(preFix); // 11

let postFix = 10;
console.log(postFix); // 10
console.log(postFix++); // 10
console.log(postFix); // 11
```
