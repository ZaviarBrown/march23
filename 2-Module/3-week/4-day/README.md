# Holy Crap That HW Was Insane 😵‍💫

## Memory - What the h\*ck is it?

Memory generally refers to `RAM`

- Holds data for programs **currently in use**
  - Stores bits, 1s and 0s, in the form of electrical charges
- Very fast to read and write
  - HDD/SSDs are much slower
- Volatile storage
  - Needs a constant electric power source to retain information
  - Use HDDs and SSDs for long-term (persistent) storage

### Addresses

Think of memory as a grid of cells

- Each cell is divided into chunks called `words`
- Each word is **indexed** by a `memory address`
  - `Memory pointer` / `Memory reference`

```js
const myString = "ABC";

/*

000        001       002       003         <- if it holds a charge it is interpreted as a reference
01100101   00000000  00000000  00000000    <- 000 holds a ref starting at cell 0b01100101

004        005       006       007
00000000   00000000  00000000  00000000

008        009       010       011
00000000   00000000  00000000  00000000

012        013       014       015
00000000   00000000  00000000  00000000

...        ...       ...       ...

100        101       102       103
00000000   01000001  01000010  01000011   <- Contains the value referenced in '000'
*/
```

_If you're having trouble understanding how this works after the readings, try checking out these videos! They may help your understanding, however we will not go super in depth with this subject. Important to note that it will **not** be on your assessment._

- [Ted-Ed How Computer Memory Works](https://www.youtube.com/watch?v=p3q5zWCw8J4)
- [Memory & Storage: Crash Course CS](https://www.youtube.com/watch?v=TQCr9RV7twk)

## Speed of Memory Access

Accessing items in memory is practically instant

- O(1) time

Accomplished through a binary tree routing system

- Uses bits as direction
  - 0 = go left
  - 1 = go right
- More on this coming soon!

<img src='https://i.ibb.co/2KVppqn/binary-Tree-Example.png' ref='binaryTree' width='400'>

So `3`'s address is 011

- 0 = go left
- 1 = go right
- 1 = go right

---

## Arrays Are King

**_The most time and space efficient way to store data_**

- Sequence of elements in a **_contiguous block of memory_**

  - Packed side-to-side with no wasted memory
  - Allows instant access through `indexing` - **O(1) operation**

### How storing an array works in memory:

```js
const arr = [255, 256, 43_690, 1_431_655_765]; //we will represent these as 32bit ints

//step 1 - the program requests 16 bytes of memory (32bits * 4elements)

/*
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000

*/

//step 2 - convert the data into 32bit binary integers

/*
          255 ---> 00000000 00000000 00000000 11111111
          256 ---> 00000000 00000000 00000001 00000000
       43_690 ---> 00000000 00000000 10101010 10101010
1_431_655_765 ---> 01010101 01010101 01010101 01010101
*/

//step 3 - allocate those values into the prepared memory

/*
104      105      106      107
00000000 00000000 00000000 11111111     <- 255

108      109      110      111
00000000 00000000 00000001 00000000     <- 256

112      113      114      115
00000000 00000000 10101010 10101010     <- 43_690

116      117      118      119
01010101 01010101 01010101 01010101     <- 1_431_655_765
*/
```

Indexing: `valueAddress` = `startAddress` + (`index` \* `sizeof(dataType)`)

```js
arr[2] === 43_690

valueAddress === 104 + (2 * 4)

valueAddress === 112

arr[valueAddress] === 00000000 00000000 10101010 10101010

arr[valueAddress] === 43_690
```

## Dynamic Arrays

In low level languages, arrays have a set size and can only hold a single data type

- This means we have to resize to add more data

```js
const arr = [255, 256, 43_690, 1_431_655_765];

/* 16bytes
104      105      106      107
00000000 00000000 00000000 00000000

108      109      110      111
00000000 00000000 00000000 00000000

112      113      114      115
00000000 00000000 00000000 00000000

116      117      118      119
00000000 00000000 00000000 00000000

*/

arr.push(0);

// Everything needs to move into a bigger section of memory
// Request more space, copy old info, then add new info

/* 20bytes
200      201      202      203
00000000 00000000 00000000 11111111

204      205      206      207
00000000 00000000 00000001 00000000

208      209      212      211
00000000 00000000 10101010 10101010

212      213      214      215
01010101 01010101 01010101 01010101

216      217      218      219
00000000 00000000 00000000 00000000
*/
```

To save time JS and other high-level languages use `Dynamic Arrays`

- JS preallocates extra space, requiring less resizing
  - Will still have to resize! But not right away
  - The larger the array, the less frequently we resize
- We can also manually preallocate even more space

```js
const numObjects = 10;
const myArray = new Array(3 * numObjects);
// allocates 30 spaces in memory for this new empty array that's been created.
```

So when we do this:

```js
const arr = [255, 256, 43_690, 1_431_655_765];

console.log(arr);
```

We see this:

```js
console.log(arr); // [255, 256, 43_690, 1_431_655_765]
```

But behind the scenes is this:

```js
console.log(arr); // [255, 256, 43_690, 1_431_655_765, undefined, undefined, undefined, undefined]
```

---

## Stacks Revisited

Stacks are often implemented with arrays under the hood, so they share time/space complexities

- Time - Adding, removing, reading elements

  - Average case: **O(1) operation**
  - Worst case: **O(n) operation**

- Space
  - Average case: **O(n) operation**
  - Worst case: **O(n) operation**

### **Quick note on Recursion**

All recursive functions have a **minimum space complexity of O(n)**

- Each `stack frame` added to the call stack has its own data
  - Own data === more memory use

Often better to use iteration if memory is a problem

- Remember, memory is cheap and abundant!

---

## Conversion Made Simple

`parseInt`

- Takes Base-whatever string & Base number
- Returns Base-10 number

`Number.prototype.toString`

- Takes Base number
- Returns Base-whatever string

```javascript
// Convert Hexadecimal to Base10 & back
let hexNum = parseInt("0xa1", 16); // 161
let hexStr = Number(hexNum).toString(16); // 'a1'

// Convert Binary to Base10 & back
let binNum = parseInt("10110", 2); // 22
let binStr = Number(binNum).toString(2); // '10110'
```

---

## Today's project plan

- Today's practices in order

- Begin Saturday's `Dynamic Array Long Practice`

- Finish Saturday's `Arrays Long Practice`
