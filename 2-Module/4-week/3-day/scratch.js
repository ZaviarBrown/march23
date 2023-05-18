// const sha256 = require("js-sha256");

// const badHash = (anything) => `${anything}EldenRing`;

// console.log(badHash(50));
// console.log(badHash("blue"));
// console.log(badHash(true));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// console.log(sha256("50"));
// console.log(sha256("blue"));
// console.log(sha256("true"));

// const str1 = sha256("50"); // turning string into Hexadecimal number
// const str2 = sha256("28394"); // turning string into Hexadecimal number
// const str3 = sha256("true"); // turning string into Hexadecimal number

// console.log(str1);
// console.log(str2);

// const numberVersion1 = parseInt(str1, 16); // turning Hexadecimal into Decimal
// const numberVersion2 = parseInt(str2, 16); // turning Hexadecimal into Decimal
// const numberVersion3 = parseInt(str3, 16); // turning Hexadecimal into Decimal

// const arr = [null, null, null];

// const index1 = numberVersion1 % arr.length; // turning big Decimal into array index
// const index2 = numberVersion2 % arr.length; // turning big Decimal into array index
// const index3 = numberVersion3 % arr.length; // turning big Decimal into array index

// // console.log("50", "\n", str1, "\n", numberVersion1, "\n", index1);
// console.log(index1);
// console.log(index2);
// console.log(index3);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// [{ val: 5, next: null }]; // add {val: 10, next: null}
// [{ val: 5, next: { val: 10, next: null } }];
// [{ val: 10, next: { val: 5, next: { val: null } } }];

// 2 => 3 => 4

// 4 => 5 => 10

// 10,000 => 10,001 => 20,000

// arr[index1] = "50";
// arr[index2] = "blue";
// arr[index3] = "true";

// console.log(arr);

// const example = { 50: "hello" };
// const example = {};

// example["50"] = "hello";

// console.log(example);

// const myArr = new Array(4).fill(null);

// myArr[0] = example;

// console.log(myArr);

// console.log(2348723987592834982734 % 212344)

// const arr = ["a", "blue", 50];

// const obj = {
//     0: "a",
//     1: "blue",
//     2: 50,
//     length: 3,
//     slice: () => {
//         // ...slices
//     },
// };

const obj = {
    name: "Z",
};

console.log(obj);

obj.name = "K";

console.log(obj);
