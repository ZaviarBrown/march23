# Hash Maps

## Hash functions

Takes in an input, returns a scrambled, consistent output

### Given the same input, it will **ALWAYS** return the same output

- Hashing functions **always** go through the **exact same steps**, resulting in the same output for a particular input

### Only works in **one direction**: input -> output

- There is no way to decrypt (reverse) a hash output
- _This is why they are so useful for security_

## SHA256 hashing - **`Secure Hash Algorithm`**

**Fast and extremely secure**

Input: any number of bits

Output: 256 bits

- That's 2^256 possibilities!

- You're not going to be able to decrypt the output

### Output will always be 64 characters long

- It is a **hexadecimal** string
  - Represents 4 bits in memory

## Hash Tables a.k.a. Hash Maps

Arguably the most important data structure you will learn!

- Key/value storage with `O(1)` time complexity for:

  - Insertion
  - Deletion
  - Access
  - Search

Under the hood, it's just an `array`!

- Elements are _indexed by a hashed key_
- We use the modulo of that key to get an `array` index

## Manually Implementing Hash Tables

### 1. Initialize an `array` of fixed size

- Each "slot" in the array is referred to as a `bucket`

### 2. Fill each `bucket` in the `array` with `null`

### 3. When inserting, use a `hash function` to convert the **_`keys`_** to a number

- Need a number to use as the array's index

### 4. Use `modulo` to convert the key hash into a valid `array` index

- The `hashed number` `%` the `array's size` will give us a valid index
- This is implemented in its own `hashModulo` function

### 5. Create a container to store the key/value pair

- Like with `LinkedList` nodes, you can create a new `class` for KeyValuePair data

```js
class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
```

### 6. Insert the `KeyValuePair` into the table

- If the `%` value was 1, then you would insert it into the `table.data[1]`

```js
HashTable {
  data: [
    null,
    KeyValuePair { key: 'theKey', value: 'theValue' },
    null,
    null,
    null,
    null,
    null,
    null
  ]
}
```

### 7. Retrieving data from a hash table

Run the hashModulo function on the key to get the index and then grab that `bucket` from the `data` array.

---

## Performance analysis

- Hashing is technically `O(n)` where `n` is the length of the key
- However, as long as the key is reasonably sized, it's considered to be `O(1)`
  - Similar to `arr.push()`'s time complexity
- Modulo - `O(1)`
- Insertion and reading - `O(1)`
  - Same time complexity as an array
- Search for keys - `O(1)`
- Search for values - `O(n)`
- Space complexity - `O(n)`

---

## Hash Collisions

Happens when two keys hash to the same index

Avoiding hash collisions is impossible

### `LinkedList chaining` can store collision data through a next pointer

- If two keys hash to the same index, instead of overwriting or erroring, we'll `addToHead()`

  ```js
  class KeyValuePair {
    constructor(key, value, next) {
      this.key = key;
      this.value = value;
      this.next = next;
    }
  }
  ```

  - Using this method, we must _traverse_ the `linked list`, which is `O(n)` time
  - `n` refers to the **_number of collisions_**, _not the number of items in the list_
    - Meaning this isn't really a big deal
  - Average case: `O(1)` time complexity
  - Worst case: `O(n)` time complexity

> The probability of a collision is equivalent to `1 / numberOfBuckets`

To reduce the chance of this, we can `resize` our array

- Just like we did with our dynamic array class
  - Resizing a hash table: `O(n)`

---

## JavaScript's Dirty Secret 😳

### **_`POJO`_**'s are **_Hash Tables_**

If you ever need a hash table, just use a POJO instead!
