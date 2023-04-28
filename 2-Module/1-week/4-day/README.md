# Wait you're saying there's even more to classes?!?!?!

## Static vs Instance

Static happens on the **_`class`_**

```js
Math.random();
Array.isArray();
```

Instance happens on the class **_`instance`_**

```js
arr.map();
str.toLowerCase();
```

## Static Methods and Variables

```js
/* 
  I want to keep track of EVERY task I create
  Create a Static variable that holds all Task instances
  Add each instance to that variable at construction time
*/
class Task {}
```

## Polymorphism

### Overloading

- Function receives different parameters
  - Not strictly possible in JavaScript

### Overriding

- Function executes differently
  - Recreating a Parent method on a Child class

```js
class Games {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }

  play() {
    console.log(`Let's play ${this.name}!`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}`);
  }
}
const chess = new Games("Chess", "Strategy");
const animalCrossing = new Games("Animal Crossing", "Farming Sim");
```

```js
class FPS extends Games {
  constructor(name) {
    super("First Person Shooter", name);
  }
}
const warZone = new FPS("Warzone");
```

```js
class Souls_Like extends Games {
  constructor(name, difficulty) {
    super(name, "Action RPG");
    this.difficulty = difficulty;
  }

  play() {
    if (this.difficulty > 8) {
      console.log("Prepare to die...");
    }
  }

  static gitGud() {
    console.log("gitgud you filthy casual");
  }
}

const eldenRing = new Souls_Like("Elden Ring", 10);
const hollowKnight = new Souls_Like("Elden Ring", 7);
```
