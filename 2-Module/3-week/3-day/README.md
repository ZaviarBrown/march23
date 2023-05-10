# There's 10 types of people in this world, those who can read binary and those who literally couldn't care less about your stupid math puns

When we write code, it's first translated into simplified machine instructions (binary) then loaded into memory, then it's executed by the processor.

<img src="https://i.ibb.co/sPqcd8D/control-Flow-Input-CPURAMOutput.png" ref='flow' width="500" />

---

## Logic and Truth Tables

Quick Refresher:

- ! = not
- && = both conditions are true
- || = one or both conditions are true
- De Morgan's Law: !(A && B) === !A || !B

Truth table - possible boolean inputs and outputs

|     a |   b   | a (AND) b |
| ----: | :---: | :-------: |
|  true | true  |   true    |
|  true | false |   false   |
| false | true  |   false   |
| false | false |   false   |

True and False can be expressed using binary: 0 = false, 1 = true

|   a |  b  | a (OR) b |
| --: | :-: | :------: |
|   0 |  0  |    0     |
|   0 |  1  |    1     |
|   1 |  0  |    1     |
|   1 |  1  |    1     |

XOR (`^`) operator - Exclusive Or / "Colloquial Or"

- Either A or B, but not both.

|   a |  b  | a (XOR) b |
| --: | :-: | :-------: |
|   0 |  0  |     0     |
|   0 |  1  |     1     |
|   1 |  0  |     1     |
|   1 |  1  |     0     |

---

## Different Number bases

`Base` - number of digits in the counting system

Every counting system follows the same rules

- Start from the lowest digit (0) and count up
- Once you get to the maximum digit
  - Set the current digit back to 0
  - Increase the digit to the left by 1
- Start incrementing again from the rightmost number

### **Base 10 - Decimal / "Normal"**

How we all learned to count!

Base 10 = 10 digits in the system: 0-9

```js
00;
01;
02;
03;
04;
05;
06;
07;
08;
09;
10;
11;
12;
```

### **Base 2 - Binary**

Base 2 = 2 digits in the system: 0 & 1

- Each digit is called a `bit`
- A group of 8 bits is called a `byte`

```js
  B   D
0000 (0)
0001 (1)
0010 (2)
0011 (3)
0100 (4)
0101 (5)
0110 (6)
0111 (7)
1000 (8)
```

`0b` is used as a prefix to distinguish binary

- 1000 = One thousand
- 0b1000 = Eight

---

### Converting from Binary to Decimal (Base 2 to Base 10)

Formula: Multiply each digit by the `base` raised to the nth power, where n
is its position _starting from the right_. Then, add all of the results together.

To convert `0b11001010` to decimal:

```js
2^0 * 0 = 0
2^1 * 1 = 2
2^2 * 0 = 0
2^3 * 1 = 8
2^4 * 0 = 0
2^5 * 0 = 0
2^6 * 1 = 64
2^7 * 1 = 128
```

Add all of those sums together to get 2 + 8 + 64 + 128 = 202

---

## Write a javascript function that converts Binary to Decimal

```js
const binary = "0b11001010";

const binaryToDecimal = (binaryStr) => {
  // Remove "0b" prefix
  const rawBinary = binaryStr.slice(2);

  // Reverse the order
  const reversedBinary = rawBinary.split("").reverse();

  return reversedBinary.reduce((sum, bit, i) => {
    // 2 ^ [current position] * bit
    const base10 = Math.pow(2, i) * Number(bit);

    // Add to our sum
    return sum + base10;
  }, 0);
};

console.log(binaryToDecimal(binary));
```

---

### **Base 16 - Hexadecimal**

`hex` = 6, `dec` = 10, hence `hex`a`dec`imal (6 + 10 = 16)

Base 16 = 16 digits in the system:

- 0-9
- A-F
  - Represents 10-15

Often used as shorthand for binary

- One hex digit represents 4 bits.

```js
 D     B       H
 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF
```

`0x` is used as a prefix to distinguish hexadecimal

- 1000 = One thousand
- 0x1000 = Four thousand ninety six

---

### Converting from Hexadecimal to Decimal (Base 16 to Base 10)

Same formula as before!

- Note that now our `base` is 16

To convert `0xF23C` to decimal:

```js
16^0 * C =    1 * 12 = 12
16^1 * 3 =   16 *  3 = 48
16^2 * 2 =  256 *  2 = 512
16^3 * F = 4096 * 15 = 61440
```

Add the sums together to get 12 + 48 + 512 + 61440 = 62012

---

## Write a function that converts hex to decimal

```js
const hex1 = "0xF23C";

const hexToDecimal = (hexStr) => {};

console.log(hexToDecimal(hex1));
```

---

## ASCII

- `String.fromCharCode()`

```javascript
console.log(String.fromCharCode(65));
```

- `String.prototype.charCodeAt()`

```javascript
const str = "ABC";
console.log(str.charCodeAt(0));
```

<img src='https://i.ibb.co/PGySkMS/ASCIITable.png' ref ='letters in binary' width='600'>

---

## Project time (until EOD)

[JavaScript Arrays Big-O Project](https://open.appacademy.io/learn/js-py---pt-mar-2023-online/week-9---big-o/javascript-arrays-big-o-project)

- If you finish the project, work on
  - Saturday's [Array Long Practice](https://open.appacademy.io/learn/js-py---pt-mar-2023-online/week-9---big-o/arrays-long-practice)
  - HW for tomorrow
