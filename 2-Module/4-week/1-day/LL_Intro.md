# Linked List Intro

## Like arrays, linked lists store data

This is an array

```js
const simple = [50, "pears", 889, "watermelon"];
```

This is also an array

```js
const detailed = [
  { value: 50 },
  { value: "pears" },
  { value: 889 },
  { value: "watermelon" },
];
```

## Similarities between our arrays?

- Both length of 4
- Both have access to `50` `pears` `889` `watermelon`

## The only difference is that every value is wrapped with an object

Not a big difference in how we access the value

```js
simple[0]; // 50
detailed[0].value; // 50
```

## The power of objects lets us store more data per index

What about if `detailed` looked like this?

```js
const detailed = [
  { value: 50, next: "pears" },
  { value: "pears", next: 889 },
  { value: 889, next: "watermelon" },
  { value: "watermelon", next: undefined },
];
```

### What might the advantage of this be?

- When I'm looking at one value, I don't have to access the array again to see the second value
- When I'm at the last value, I know right away because `next` is `undefined`

```js
detailed[0]; // { value: 50, next: "pears" }
detailed[0].value; // 50
detailed[0].next; // 'pears'
```

## Let's clean this up - no difference in functionality here!!!

```js
const objZero = { value: 50, next: "pears" };
const objOne = { value: "pears", next: 889 };
const objTwo = { value: 889, next: "watermelon" };
const objThree = { value: "watermelon", next: undefined };

const detailed = [objZero, objOne, objTwo, objThree];
```

## Now, instead of only tracking the next value, lets store the whole object

It looks scarier, but the main concept stays the same!

```js
const objZero = { value: 50, next: { value: "pears" } };
const objOne = { value: "pears", next: { value: 889 } };
const objTwo = { value: 889, next: { value: "watermelon" } };
const objThree = { value: "watermelon", next: undefined };

const detailed = [objZero, objOne, objTwo, objThree];
```

## This is pretty cool, but doesn't update automatically for us `:(`

```js
const detailed = [objZero, objOne, objTwo, objThree];

console.log(objZero); // { value: 50, next: { value: "pears" } }
console.log(objOne); // { value: "pears", next: { value: 889 } }

detailed[1].value = "bananas";

console.log(objZero); // { value: 50, next: { value: "pears" } }
console.log(objOne); // { value: "bananas", next: { value: 889 } }
```

## Since objects are `reference` types, we can fix this easily!

```js
const objZero = { value: 50 };
const objOne = { value: "pears" };
const objTwo = { value: 889 };
const objThree = { value: "watermelon" };

objZero.next = objOne;
objOne.next = objTwo;
objTwo.next = objThree;
objThree.next = undefined;

const detailed = [objZero, objOne, objTwo, objThree];
```

Now when we access these values, we'll see all of our data chained together!

```js
console.log(detailed[0]);
// {
//     value: 50,
//     next: {
//         value: "pears",
//         next: {
//             value: 889,
//             next: {
//                 value: "watermelon",
//                 next: undefined,
//             },
//         },
//     },
// };
```

## Remove the array brackets and you've got a linked list!!!

Since each object is chained together, we don't need a container for that data anymore

However, that also means we don't have a `.length` property

So we'll need to loop differently

### `detailed` array

```js
const detailed = [
  { value: 50 },
  { value: "pears" },
  { value: 889 },
  { value: "watermelon" },
];

for (let i = 0; i < detailed.length; i++) {
  console.log(detailed[i].value);
}

// 50;
// pears;
// 889;
// watermelon;
```

### `detailed` linked list

```js
const objZero = { value: 50 };
const objOne = { value: "pears" };
const objTwo = { value: 889 };
const objThree = { value: "watermelon" };

objZero.next = objOne;
objOne.next = objTwo;
objTwo.next = objThree;
objThree.next = undefined;

let curr = objZero;

while (curr) {
  console.log(curr.value);
  curr = curr.next;
}

// 50;
// pears;
// 889;
// watermelon;
```
