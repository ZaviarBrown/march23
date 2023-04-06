// if () {

// }

// while () {}

// for() {}

// () => {}

// let myObj = {name: "zaviar"}

// console.log(name)

// {
//     // block scoped
// }

// let globalScope = "I am globally scoped";

// let myFunction = function (functionScope) {
//     let alsoFunctionScope = "I am also function scoped";
//     let globalScope = 'actually function scoped!??!'
//     if (true) {
//         let blockScope = "I am block scoped";
//         let globalScope = "actually block scoped!??!";

//         // console.log(blockScope);
//         // console.log(alsoFunctionScope);
//         console.log(globalScope);
//     }
//     console.log(globalScope)
// };

// console.log(globalScope)

// myFunction("I am function scoped");

// let myName = "Zaviar"

// let myName = 'Kirin'

// let globalScope = "I am globally scoped";

// console.log(globalScope, "above function");

// let myFunction = function (functionScope) {
//     globalScope = "actually function scoped!??!";
//     console.log(globalScope, "inside function");

//     if (true) {
//         globalScope = "actually block scoped!??!";

//         // console.log(blockScope);
//         // console.log(alsoFunctionScope);
//         console.log(globalScope, 1);
//     }
//     console.log(globalScope, 2);
// };

// myFunction();

// console.log(globalScope, 3);

// let car = "vroom";

// function makeSounds(dogSound) {
//     let cow = "moo";

//     if (true) {
//         let turkey = "gobble";

//         for (let i = 0; i < 2; i++) {
//             console.log(car, dogSound, cow, turkey, i);
//         }
//         // console.log(i)
//     }
// }
// makeSounds("woof");

// let hungry = false;

// function sayHungry() {
//     // let hungry = true;
//     if (hungry) {
//         console.log("I'm hungry!");
//     } else {
//         console.log("I'm coding");
//     }
// }

// sayHungry();

// let scopeOfFor = function (arr) {

//     for (let i = 0; i < 10; i++) {
//         console.log(i);
//     }

//     console.log(i);
// };

// scopeOfFor([1]);

// let firstName = "zaviar";
// console.log(firstName);

// const firstTAName = "kirin";

// console.log(firstName);

// const arr = [1, 2, 3];

// arr.pop();
// console.log(arr);

// arr = [1, 2];

// console.log(arr);

// const let = "aeiouAEIOU";
// console.log(vowels + "!");
// console.log(vowels);

// const vowels = "aeiouAEIOU";
// console.log(vowels + "!");
// console.log(vowels);

// const arr = ["hey", 50, true, null];

// for (let i = 0; i < arr.length; i++) {
//     let currentElement = arr[i];

//     console.log(currentElement);
// }

// const arr = ["hey", 50, true, null];

// for (let i = 0; i < arr.length; i++) {
//     const currentElement = arr[0];

//     console.log(currentElement);
// }

// if (true) {
//     console.log(str); // undefined
//     var str = "not apple";
// }

// var str = "not apple";

// if (true) {
//     let str = "apple";
//     console.log(str); // ReferenceError => Due to TDZ
// }

// console.log(3 == '3')
// console.log(3 === Number("3"));

// console.log(blue)

// const doNotUseVar = () => {
//     var test = "hello";
//     if (true) {
//         var test = "hi";
//     }
//     console.log(test);
// };

// const doNotUseVar = () => {
//     let test = "hello";
//     if (true) {
//         let test = "hi";
//     }
//     console.log(test);
// };

// doNotUseVar();

// <!-- -----EXAMPLE 2----- -->

// let counter2 = 5;

// function incrementCounter2(someOtherName) {
//     someOtherName += 1;
//     console.log(someOtherName);
// }

// console.log("*****Example 2: Your Friend's Code*****");

// incrementCounter2(counter2); // ?
// console.log(`First counter value:  ${counter2}`); // ?

// incrementCounter2(counter2); // ?
// console.log(`Second counter value:  ${counter2}`); // ?

// incrementCounter2(counter2); // ?
// console.log(`Third counter value:  ${counter2}`); // ?
// const myFunc = () => {
//     let val = 10;

//     const aNewFunc = () => {
//         // I can see everything in myFunc
//         console.log("Hey this is val", val);
//     };

//     return aNewFunc;
// };

// console.log(myFunc()());
// let theReturnedFunc2 = myFunc();

// theReturnedFunc();
// theReturnedFunc2();

// const factory = function (voiceChip) {
//     let names = [];
//     return function robot(name) {
//         if (name === null) {
//             return names;
//         }

//         names.push(name);
//         return voiceChip + " " + names.join(" and ");
//     };
// };

// const hiBot = factory("Hello");
// console.log(hiBot);
// const byeBot = factory("Goodbye");
// console.log(byeBot);
// console.log("--------HiBot--------");

// console.log(hiBot("Zaviar"));
// console.log(hiBot(null));
// console.log(hiBot("Kirin"));

// console.log(hiBot("Visnja"));

// console.log("--------ByeBot--------");

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

// let arr = ["a", "b", "c"];
// let arr2 = ["abc"];

// console.log(arr.join(" !!! "));
// console.log(arr2.join(" !!! "));
