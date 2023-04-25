# Our first coding principles - `DRY` & `SRP`

Throughout our time in this course, we're going to learn more programming conventions, ideologies, and best practices

These are almost always the better way to do things, **_but not always_**

Keep this in mind whenever you learn a new principle

## `DRY` - Why write lot code when few code do trick?

We should try to minimize repeated code

- If you ever catch yourself writing the same code more than twice, there's probably a better way

Helper functions are the easiest way to "dry up" code

Main reasons to keep your code `DRY`

- Write less code (not always)
- Makes code easier to refactor (not always)
- Makes your code easier to debug (not always)
- Makes your code easier to maintain (not always)

### In the code below, which is the most `DRY`?

```js
// Take each value in arr, capitalize it, then add it to a string
let arr = [
  "Foul",
  "Tarnished",
  "In",
  "Search",
  "Of",
  "The",
  "Elden",
  "Ring",
  "I",
  "Command",
  "Thee",
  "Kneel",
];
```

### Option 1

```js
let finalStr = "";

finalStr += arr[0].toUpperCase();
finalStr += " " + arr[1].toUpperCase();
finalStr += " " + arr[2].toUpperCase();
finalStr += " " + arr[3].toUpperCase();
finalStr += " " + arr[4].toUpperCase();
finalStr += " " + arr[5].toUpperCase();
finalStr += " " + arr[6].toUpperCase();
finalStr += " " + arr[7].toUpperCase();
finalStr += " " + arr[8].toUpperCase();
finalStr += " " + arr[9].toUpperCase();
finalStr += " " + arr[10].toUpperCase();
finalStr += " " + arr[11].toUpperCase();

console.log(finalStr);
```

### **_VS_** Option 2

```js
let finalStr = "";

arr.forEach((el, i) => {
  if (i !== 0) {
    finalStr += " ";
  }

  finalStr += el.toUpperCase();
});

console.log(finalStr);
```

### **_VS_** Option 3

```js
let finalStr = arr.map((el) => el.toUpperCase()).join(" ");

console.log(finalStr);
```

---

## `SRP` - You literally had one job

We should try to minimize cluttered code

- If you ever catch yourself solving multiple complex problems in a single function, there's probably a better way

Helper functions are the easiest way to apply `SRP`

Main reasons to follow `SRP`

- Reuse code more easily (not always)
- Makes code easier to refactor (not always)
- Makes your code easier to debug (not always)
- Makes your code easier to maintain (not always)

---

## Should I follow these principles or not?

- **_`Abso-h*ckin-lutely`_** you `should`!

## So I should always be writing `DRY` and `SRP` code from the moment I start the problem right?

- **_`Abso-h*ckin-lutely`_** you should **_`not`_**!

## Let's think back to Polya's Problem Solving approach

1. Understand the problem
2. Make a plan
3. Carry out the plan
4. `Look back and improve your solution`

If part of your steps 2 & 3 involve creating helper functions, then you're likely going to be applying these principles from the beginning

If not, then step 4 is where you get to apply these principles

As you grow as a developer, you'll see opportunities to use these principles earlier in your problem solving process

### **For now, try to apply it at every chance you get**

---

---

---

---

---

---

---

---

---

---

## [Trade Wars](./CommonJS.md)
