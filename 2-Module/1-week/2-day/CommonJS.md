# CommonJS Imports & Exports

## First, a little object review

Feeling comfortable with objects will help tremendously with imports and exports

Adding key/value pairs after object is created

```js
const obj = {};

obj.game = "Elden Ring";
//! OR
obj["game"] = "Elden Ring";

console.log(obj); // { game: 'Elden Ring' }
```

Adding key/value pairs during object creation

```js
const game = "Elden Ring";

const obj = { game: "Elden Ring" };
//! OR
const obj = { game: game };

console.log(obj); // { game: 'Elden Ring' }
```

Using shorthand notation to implicitly add key/value pairs during object creation

```js
const game = "Elden Ring";

const obj = { game };

console.log(obj); // { game: 'Elden Ring' }
```

We can set values from an object to variables

```js
const obj = {
  game: "Elden Ring",
  dev: "FromSoftware",
  rating: 10,
};

const game = obj.game;
const dev = obj.dev;
const scoreOutOf10 = obj.rating;

console.log(game); // 'Elden Ring'
console.log(dev); // 'FromSoftware'
console.log(scoreOutOf10); // 10
```

We can also destructure values directly out, optionally renaming them

```js
const obj = {
  game: "Elden Ring",
  dev: "FromSoftware",
  rating: 10,
};

const { game, dev } = obj;
const { rating: scoreOutOf10 } = obj;

console.log(game); // 'Elden Ring'
console.log(dev); // 'FromSoftware'
console.log(scoreOutOf10); // 10
```

The `global` object is special in that we can use its properties without needing to say `global`

```js
const myObj = { name: "Zaviar" };

console.log(myObj.name); // works
console.log(name); // ReferenceError

global.setTimeout(() => {
  console.log("hey from global"); // works
}, 1000);

setTimeout(() => {
  console.log("hey from shorthand"); // works
}, 2000);
```

---

## Don't be afraid of words

- Module === File
  - It's just an object!
- `require()` === Import
  - We'll see the `import` keyword later too!

## Three main ways to export

### `#1` Add key/value pairs to the existing `module.exports` object

- You can also shorthand `module.exports` to just `exports`, just like `global`

```js
const myName = "Zaviar";
const currTemp = 91;

module.exports.firstName = myName;
exports.currTemp = currTemp;
```

### `#2` Set `module.exports` to a new object and fill it up

```js
const myName = "Zaviar";
const currTemp = 91;

module.exports = {
  firstName: myName,
  currTemp,
};
```

## `#3` Export a single value by skipping the object entirely

```js
const myName = "Zaviar";
const currTemp = 91;

module.exports = myName;
// Can't export currTemp this way
```

## Only really one way to import

Import syntax is essentially always the same

```js
const exportedThing = require("/path/to/export/file");
```

The only difference being if we want to shorthand or not

```js
const importedObject = require("./export");

console.log(importedObject); //{ firstName: 'Zaviar', currTemp: 91 }
```

```js
const importedObject = require("./export");
const firstName = importedObject.firstName;
const tempInF = importedObject.currTemp;

console.log(firstName); // 'Zaviar'
console.log(tempInF); // 91
```

```js
const { firstName, currTemp: tempInF } = require("./export");

console.log(firstName); // 'Zaviar'
console.log(tempInF); // 91
```

If we've only exported a single value, not in an object

```js
const firstName = require("./export");

console.log(firstName); // 'Zaviar'
```

---

## Sorry but I lied earlier 😔

_`***Flashback***`_

Don't be afraid of words

- Module === File

_`***End Of Flashback***`_

Through the power of `index.js` Modules can be Folders too!

If you have all your exports in a single file, no need for a folder

If your exports are spread across files, you can:

- Put all the files you want in a single folder
- Export everything you want from each file
- Create an `index.js` in that folder
- Import everything into `index.js`
- Export everything out of `index.js`
- Import from the **_folder_** name in any other file!
