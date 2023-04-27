# Build-A-<font size="1">~~Bear~~</font>Object Workshop

## Classes are **_templates or blueprints_** for creating objects

### Why write this?

```js
const pikachu = {
  name: "Pikachu",
  level: 5,
  type: "electric",
};

const squirtle = {
  name: "Squirtle",
  level: 5,
  type: "water",
};

const cyndaquil = {
  name: "Cyndaquil",
  level: 5,
  type: "fire",
};

const turtwig = {
  name: "Turtwig",
  level: 5,
  type: "grass",
};
```

### When we could write this!

```js
const pikachu = new Pokemon("Pikachu", 5, "electric");
const squirtle = new Pokemon("Squirtle", 5, "water");
const cyndaquil = new Pokemon("Cyndaquil", 5, "fire");
const turtwig = new Pokemon("Turtwig", 5, "grass");
```

## Data types are classes? 🌍 Always has been 👨‍🚀 🔫

- A instance of a class is an object with all the properties and methods defined
  on the class
- The data types we've been using have actually been class instances!
  - `myArray.forEach()` is possible because it is
    an instance method defined on the class `Array`
  - [Array Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
  - Notice how you can create an array using the `new` keyword

## Classes vs POJOs

### POJO - Plain Ole' JavaScript Object

- Anytime we write `{}`

### Class Instance - Special object

- Has special properties
- Created through a constructor
- But!!! Still basically just a normal object

## Why does OOP use Classes?

- A clean way to `Encapsulate` your code
  - Provides an `API` (Application Programming Interface)
  - Hides the internal complexity
  - Lets us focus on using the class' features
    - Don't have to be a mechanical engineer to drive a car
- Allow us to model real world entities in an organized way
  - Grouping like-data makes thinking about it easier

## Syntax Reference

- `class`

  - Keyword to create a class

    - No `=` required!

  - ```js
    class MyClass {}
    ```

- `new`

  - Keyword to create a class instance

  - ```js
    new MyClass();
    ```

- `constructor`

  - The function that runs when we say `new MyClass()`

  - ```js
    class MyClass {
      constructor() {
        // does some stuff
      }
    }
    ```

- `this`

  - Special keyword that references the instance

    - Think of it as "the object itself"

  - ```js
    class MyClass {
      constructor() {
        // does some stuff
        this.name = "Zaviar";
      }
    }
    const myPerson = new MyClass();

    console.log(myPerson); // {name: "Zaviar"}
    console.log(myPerson.name); // "Zaviar"
    ```

- `instanceof`

  - Check if an object came from a class

    - Works similarly to `===` and `Array.isArray()`

  - ```js
    class MyClass {}
    const myInstance = new MyClass();
    console.log(myInstance instanceof MyClass); // true
    ```

- Instance method

  - A function that can be ran on an instance

  - Doesn't require any keywords to create

    - Just plop the function right in there!

  - ```js
    class Parent {
      constructor() {
        // does some stuff
      }

      myCoolMethod() {
        // does some stuff too!
      }
    }
    ```

- `extends`

  - Keyword to inherit from a parent class

  - ```js
    class Child extends Parent {}
    ```

- `super`

  - Keyword to use inherited constructor

  - Must be called in the constructor of child class

  - ```js
    class Parent {
      constructor() {
        // does some stuff
      }
    }
    class Child extends Parent {
      constructor() {
        super();
      }
    }
    ```

## Let's build a Pokemon!

```js
class Pokemon {}
```
