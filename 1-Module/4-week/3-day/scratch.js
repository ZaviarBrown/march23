// let func = function (firstArg) {
//     return function (secondArg) {
//         console.log(firstArg(secondArg));
//     };
// };

// let triple = function (num) {
//     return num * 3;
// };

// func(triple)(9)

// let myReturnedFunction = func(triple)
// console.log(myReturnedFunction(9))

// if () {

// }

// while () {

// }

// for () {

// }

// {

// }

// let myFunc =  (num, str, someVal) => {

// }

// let globalScope = "I am globally scoped";

// console.log(globalScope, "<====== above function");

// let myFunction = function (functionScope) {
//     let globalScope = "I'm now inside the function";

//     console.log(globalScope, "<====== in function");

//     if (true) {
//         let globalScope = "I'm inside the IF STATEMENT!!?!?!?!";
//         console.log(globalScope, "<====== in if");
//     }

//     if (true) {
//         // let globalScope = "#2";
//         console.log(globalScope, "<====== in if");
//     }

//     console.log(globalScope, "<====== after if");
// };

// myFunction("I am function scoped");

// console.log(globalScope, "<====== after function");

// let test = () => {
//     let anotherTest = () => {
//         // I can see test's scope
//     };
// }

// let car = "vroom";

// function makeSounds(dogSound) {
//     let cow = "moo";

//     if (true) {
//         let turkey = "gobble";

//         for (let i = 0; i < 2; i++) {
//             console.log(car, dogSound, cow, turkey, i);
//         }

//     }
//     console.log(i);
// }
// makeSounds("woof");

// function sayHungry() {

//     if (hungry) {
//         console.log("I'm hungry!");
//     } else {
//         console.log("I'm coding");
//     }
// }

// sayHungry();

// let scopeOfFor = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(i);
//     }

//     console.log(i);
// };

// scopeOfFor([1]);

// const firstName = "Zaviar";

// console.log(firstName);

// const firstNameOther = "Kirin";

// console.log(firstNameOther);

// const vowels = "aeiouAEIOU";

// console.log(vowels + "!");
// console.log(vowels);

// const arr = [1, 2, 3];

// console.log(arr);

// arr.pop();

// console.log(arr);

// arr = [50];

// console.log(arr);

// if (true) {
//     console.log(str);
//     let str = "apple";
// }

// if (true) {
//     console.log(str);
// }

// const num;

// console.log(num);

// num = 5

// console.log(num)

// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// const doNotUseVar = () => {
//     var test = "hello";
//     if (true) {
//        var test = "hi";
//     }
//     console.log(test);
// };

// doNotUseVar();

// function sayPuppy() {
//   const puppy = "Wolfie";
//   return puppy;
// }

// sayPuppy(); // "Wolfie"

// console.log(puppy); // ????

// function letsJam() {
//     // letsJam's scope
//     let rand = 3;

//     if (true) {
//         const rand = 2;
//         console.log(rand);
//     }

//     if (true) {
//         let rand = 1;
//         console.log(rand);
//     }

//     if (true) {
//         const rand = "let's jam!";
//         console.log(rand);
//     }

//     return rand;
// }

// console.log(letsJam(), "the final output"); // ???

// let myHelper = () => {
//     let str = "heyoo";
//     return str;
// };

// let myFunc = (cb) => {
//     let str = cb();
//     return str + "!";
// };

// console.log(myFunc(myHelper));

// let myClosure = () => {
//     let str = "yoooo";

//     let myInnerFunc = () => {
//         return str;
//     };

//     return myInnerFunc;
// };

// // console.log(myClosure()());

// let theReturnedFunction = myClosure()
// console.log(theReturnedFunction())

// const factory = function (voiceChip) {
//     let names = [];
//     return function robot(name) {
//         names.push(name);
//         return voiceChip + " " + names.join(" and ");
//     };
// };

// const hiBot = factory("Hello");

// const byeBot = factory("Goodbye");
// console.log("---------HiBot---------")
// console.log(hiBot("Zaviar"));

// console.log(hiBot("Kirin"));

// console.log(hiBot("Elden Lord"))
// console.log("---------ByeBot---------")
// console.log(byeBot("Kirin"));

// console.log(byeBot("Zaviar"));

const factory = function (voiceChip) {
    console.log("Booting up factory...");
    console.log("Creating a new empty array...");

    let names = [];
    console.log("Returning a new robot that says " + voiceChip + "...");

    return function robot(name) {
        console.log("Booting up " + voiceChip + " robot...");
        console.log("Adding " + name + " to names...");

        names.push(name);
        console.log("Returning the correct phrase...");
        
        return voiceChip + " " + names.join(" and ");
    };
};

const hiBot = factory("Hello");
console.log("---Done---");
const byeBot = factory("Goodbye");
console.log("---Done---");

console.log("This is the return of hiBot: ", hiBot); // function
console.log("---Done---");
console.log("This is the return of byeBot: ", byeBot); // function
console.log("---Done---");

console.log(hiBot("Zaviar"));
console.log("---Done---");
console.log(hiBot("Kirin"));
console.log("---Done---");

console.log(byeBot("Kirin"));
console.log("---Done---");
console.log(byeBot("Zaviar"));
console.log("---Done---");