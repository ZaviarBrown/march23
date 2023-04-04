# Big Boi Review

```js
let obj = {
  name: "Zaviar",
  age: 24,
  game: {
    name: "Elden Ring",
    hours: 135,
    favWeapon: "Bloodhound's Fang",
    bossesKilled: [
      "Godrick the Grafted",
      "Margit, the Fell Omen",
      "Rennala, Queen of the Full Moon",
      "Astel, Natrualborn of the Void",
    ],
  },
};

//How would I print my name from the object?

//How would I add my location, Seattle?

//How would I change my age to 32000?

//How would I add "Starscourge Radahn" to the bossesKilled array?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time, we have dot notation.

```js
let obj = {
  first: "a",
  second: "b",
  third: "c",
};

console.log(obj.first, obj["first"]); //
```

`Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]); //
console.log(obj[some + variable]); //
console.log(obj[time.toLowerCase()]); //
```

`Checking if a key exists`

- obj[key] !== undefined
- key in obj

## Iterating over an Object

## **_`OBJECTS ARE UNORDERED`_**

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together

## Primitive VS Reference

`Primitive`

```js
let age = 10;
let numberOfFingers = age;
age = numberOfFingers + 1;
console.log(age, numberOfFingers);
```

<table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 10  |
| #002 | NOF | 10  |

</td><td>

| RAM  | VAR | VAL |
| ---- | --- | --- |
| #001 | age | 11  |
| #002 | NOF | 10  |

</td></tr> </table>

`Reference`

```js
let biff = {
  type: "dog",
  age: 10,
};

let buster = biff;
buster.age = 0;

console.log(biff, buster);
```

  <table>
<tr><th>Before</th><th>After</th></tr>
<tr><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 10    |
| #004 | buster | #003  |

</td><td>

| RAM  | VAR    | VAL   |
| ---- | ------ | ----- |
| #003 | biff   | --    |
| \|   | type   | 'dog' |
| \|   | age    | 0     |
| #004 | buster | #003  |

</td></tr> </table>

## Destructuring Discussion

- Destructuring is just matching a pattern.

### Object Destructuring

  ```js
    // let obj = { person: "Caleb", animal: "elephant" };
    // let person = obj.person
    // let animal= obj.animal
    
    let { person, animal } = { person: "Caleb", animal: "elephant" };
    console.log(person, animal);

    // What if I wanted a different variable name? - Aliasing!
    let { person: name, animal: species } = { person: "Caleb", animal: "elephant" };
    console.log(name, species)
  ```

### Array Destructuring

  ```js
    // let arr = ["Elden Ring", "Zaviar", "Radahn"];
    // let game = arr[0]
    // let player = arr[1]

    let [game, player] = ['Elden Ring', 'Zaviar', 'Radahn'];
    console.log('game:', game);
    console.log('player:', player);
    // let [game, , boss]
    // console.log('game:', game);
    // console.log('boss:', boss);

    // Swapping
    [player, game] = [game, player];
    console.log('game:', game);
    console.log('player:', player);
  ```

## Rest and Spread

- Rest takes the `rest` of the arguments and puts them into an array and single parameter

  ```js
  let yellEverything = function (...strings) {
      //console.log(Array.isArray(strings));
      for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].toUpperCase();
      }
      return result.join(' ');
  };

  console.log(yellEverything('hello', 'world'));
  console.log(yellEverything('hello'));
  console.log(yellEverything('Quiet', 'this,', "is", 'a', 'library'));
  ```

- Spread takes some data and 'spreads' it out of it's containing brackets.

  ```js
  let arr1 = [1, 2, 3];
  let arr2 = [4, 5, 6];
  let arr3 = [0, arr1, arr2];
  let arr4 = [0, ...arr1, ...arr2];
  console.log(arr3);
  console.log(arr4);
  
  let obj1 = { name: 'Zaviar' };
  let obj2 = { platform: 'PC', game: 'Elden Ring' };
  let obj3 = { obj1, obj2, music: 'Lofi' };
  let obj4 = { ...obj1, ...obj2, music: 'Lofi' };
  console.log(obj3);
  console.log(obj4);
  
  obj1.name = 'Will';
  
  console.log(obj3);
  console.log(obj4);
  ```