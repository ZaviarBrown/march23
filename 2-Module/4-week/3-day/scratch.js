const sha256 = require("js-sha256");

// // const passwordChecker = () => "does a hash thing";

// // const whatWeStore = passwordChecker("********")

// // if (whatWeStore === passwordChecker("********")) {
// //     login()
// // }

// const myTerribleHash = (input) => `${input}EldenRing`;

// console.log(myTerribleHash("50"));
// console.log(myTerribleHash("potato"));
// console.log(myTerribleHash("true"));

// console.log(sha256("50"));
// console.log(sha256("potato"));
// console.log(sha256("true"));

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// //! Use a hashing algo
// const str1 = sha256("50");
// const str2 = sha256("potato");
// const str3 = sha256("true");

// //! Turn it into a decimal number
// const decimal1 = parseInt(str1, 16);
// const decimal2 = parseInt(str2, 16);
// const decimal3 = parseInt(str3, 16);

// const arr = [null, null, null];
// // const arr = [5, 3, 70];

// console.log(decimal2);
// console.log(decimal3);

// const location1 = decimal1 % arr.length;
// const location2 = decimal2 % arr.length;
// const location3 = decimal3 % arr.length;

// console.log(location1);
// console.log(location2);
// console.log(location3);

// arr[location1] = "50";
// arr[location2] = "potato";

// console.log(arr);

// console.log(arr[0]);
// console.log(arr[decimal1]);

// console.log(arr[parseInt(sha256("50"), 16) % arr.length]);

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// const newArr = new Array(4).fill(null);

// console.log(newArr);

// const obj = {
//     myNum: "50",
//     favFood: "potato",
//     isAdmin: "true"
// }

// const myKVP = {
//     key: "myNum",
//     value: "50",
// };

//! Both hash/mod to index 0
const val1 = {
    key: "myNum",
    value: "50",
    next: null,
};

//! Both hash/mod to index 0
const val2 = {
    key: "favFood",
    value: "potato",
    next: null,
};

const myData = [val1, null];
console.log(myData);

// Now val2 collides

val2.next = myData[0];

console.log(val2);

myData[0] = val2;

console.log(myData);

// [val2, null];

//? Hash/mod = 1
const val3 = {
    key: "isAdmin",
    value: "true",
    next: null,
};

myData[1] = val3;

console.log("-----\n\n after val3 \n\n----");
console.log(myData);
// [val2, val3];


const newObj = {}

newObj.myNum = '50'
newObj.favFood = 'potato'