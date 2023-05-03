# M2W2D2 - 2's day!!!

## Context is determined by WHERE a function is called

### The problem

```js
class Cat {
  speak(sound = "meow") {
    // console.log(this);
    console.log(sound);
  }

  speakSpecific(sound) {
    // console.log(this);
    this.speak(sound);
  }

  constructor(name) {
    this.name = name;
  }
}

let cat = new Cat("cat");
let otherCat = new Cat("otherCat");

cat.speak(); // 'meow'
cat.speakSpecific("ayyeee lmao"); // 'ayyeee lmao'

otherCat.speak(); // 'meow'
otherCat.speakSpecific("ayyeee lmao"); // 'ayyeee lmao'

const mySpeak = cat.speak;
const mySpecific = cat.speakSpecific;

console.log(mySpeak); // [Function: speak]
console.log(mySpecific); // [Function: speakSpecific]

mySpeak("still works"); // 'still works'
mySpecific("wait what happened"); // TypeError
```

### The solution?

### `Bind`, `Call` / `Apply`, & sometimes `Arrow Functions`

---

## Bind

Receives an object to use as the context

Then `returns a new function` with that bound context

- Can't be unbound/rebound!

```js
let cat = new Cat();

const mySpecific = cat.speakSpecific;
const boundSpecific = mySpecific.bind(cat);

console.log(boundSpecific); // [Function: bound speakSpecific]
boundSpecific("ggez"); // ggez

const boundForever = mySpecific.bind(cat, "I'll never die");
boundForever("hey");
boundForever("ggez");
```

## Call & Apply

Receives an object to use as the context

Then `invokes the function` with that bound context

- `C`all
  - Receives `c`omma separated arguments
- `A`pply
  - Receives an `a`rray as an argument

```js
let cat = new Cat();

const mySpecific = cat.speakSpecific;
mySpecific.call(cat); // meow
mySpecific.apply(cat); // meow

mySpecific.call(cat, "grrrrr"); // grrrrr
mySpecific.apply(cat, ["hisssss"]); // hisssss
```

## Arrows be crazy

Your assessment doesn't care about the intricacies of arrow function context

**_So Neither Should You_**

Only thing to note

```js
class Cat {
  speak(sound = "meow") {
    console.log(sound);
  }

  speakSpecific(sound) {
    this.speak(sound);
  }

  speakLater(delay) {
    setTimeout(function () {
      this.speak();
    }, delay);
  }
}
let cat = new Cat();

cat.speakLater(1000); // TypeError
```

So let arrow functions save the day!

```js
class Cat {
  speak(sound = "meow") {
    console.log(sound);
  }

  speakSpecific(sound) {
    this.speak(sound);
  }

  speakLater(delay) {
    setTimeout(() => {
      this.speak();
    }, delay);
  }
}
let cat = new Cat();

cat.speakLater(1000); // meow
```
