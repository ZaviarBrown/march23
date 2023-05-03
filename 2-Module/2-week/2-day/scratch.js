// class Cat {
//     speak(sound = "meow") {
//         console.log(this);
//         console.log(sound);
//     }

//     speakSpecific(sound) {
//         // console.log(this);
//         this.speak(sound);
//     }

//     constructor(name) {
//         this.name = name;
//     }
// }

// let cat = new Cat("cat");
// let otherCat = new Cat("otherCat");

// cat.speak(); // 'meow'
// cat.speakSpecific("ayyeee lmao"); // 'ayyeee lmao'

// otherCat.speak(); // 'meow'
// otherCat.speakSpecific("ayyeee lmao"); // 'ayyeee lmao'

// const mySpeak = cat.speak;
// const mySpecific = cat.speakSpecific;

// console.log(mySpeak); // [Function: speak]
// console.log(mySpecific); // [Function: speakSpecific]

// mySpeak("still works"); // 'still works'
// mySpecific("wait what happened"); // TypeError

// let cat = new Cat("cat");

// const mySpecific = cat.speakSpecific;
// // const boundSpecific = mySpecific.bind(cat);

// // console.log(boundSpecific); // [Function: bound speakSpecific]
// // boundSpecific("ggez"); // ggez

// const boundForever = mySpecific.bind(cat, "I'll never die");
// boundForever("hey");
// boundForever("ggez");

// const printAString = function (someString) {
//     console.log(someString);
// };

// const printZaviar = printAString.bind("lets not pass it a context", "Zaviar");
// printZaviar();

// printAString("Kirin");
// printAString();

// printAString("Zaviar");

// const printTwoNumbers = function (firstNum, secondNum) {
//     console.log(this);
//     console.log(firstNum, secondNum);
// };

// const alwaysStartWith1 = printTwoNumbers.bind(
//     "literally any placeholder",
//     "other args",
//     "and other more different args"
// );

// alwaysStartWith1(32);
// alwaysStartWith1(100);
// alwaysStartWith1(50);
// alwaysStartWith1("whatever");

// printTwoNumbers(10, 32);

// const myArr = [1, 2, 3];

// const [,, three] = myArr;

// console.log(three);

// let cat = new Cat("cat");

// const mySpecific = cat.speakSpecific;
// mySpecific.call(cat); // meow
// mySpecific.apply(cat); // meow

// mySpecific.call(cat, "grrrrr"); // grrrrr
// mySpecific.apply(cat, ["hisssss"]); // hisssss

// const mySentenceJoin = function (arr) {
//     console.log(arr);
//     // console.log(arr.join(" "));
// };

// const andThisIsCrazy = ["hey", "i", "just", "met", "you"];
// const andObjectCrazy = {
//     hey: "hey",
//     i: "i",
//     just: "just",
//     met: "met",
//     you: "you",
// };

// mySentenceJoin(["hey", "i", "just", "met", "you"]);
// mySentenceJoin("hey", "i", "just", "met", "you");

// const newCallVersion = mySentenceJoin.call(null, andThisIsCrazy);
// const newApplyVersion = mySentenceJoin.apply(null, andObjectCrazy);

// class Cat {
//     speak(sound = "meow") {
//         console.log(sound);
//     }

//     speakSpecific(sound) {
//         this.speak(sound);
//     }

//     speakLater(delay) {
//         setTimeout(function () {
//             console.log(this);
//             this.speak();
//         }, delay);
//     }
// }
// let cat = new Cat();

// cat.speakLater(1000); // TypeError

// class Cat {
//     speak(sound = "meow") {
//         console.log(sound);
//     }

//     speakSpecific(sound) {
//         this.speak(sound);
//     }

//     speakLater(delay) {
//         setTimeout(() => {
//             console.log(this);
//             this.speak();
//         }, delay);
//     }

//     constructor(name) {
//         this.name = name;
//     }
// }
// let cat = new Cat("cat");

// cat.speakLater(1000); // meow

// const myCoolFunc = function () {
//     // this.name = "Zaviar";
//     console.log(this);
// };

// // new myCoolFunc();
// myCoolFunc();

// function hello() {
//     return `Hello ${this.firstName} and ${this.lastName}`;
// }

// const derek = {
//     firstName: "Derek",
// };

// const zaviar = {
//     firstName: "Zaviar",
// };

// const helloDerek = hello.bind(derek);
// const otherDerek = hello.bind({ firstName: "Other Derek" });

// const evenMoreOtherDerek = helloDerek
//     .bind(zaviar)
//     .bind(zaviar)
//     .bind(zaviar)
//     .bind({ lastName: "Brown" });
// console.log(helloDerek());
// console.log(otherDerek());
// console.log(evenMoreOtherDerek());
// console.log(evenMoreOtherDerek);

// const thisWorks = hello.bind({ lastName: "Brown", ...zaviar });

// console.log(thisWorks());

// function hello() {
//     return `Hello ${this.firstName}`;
// }

// const derek = {
//     firstName: "Derek",
// };

// console.log(hello.bind(derek)());

// function greeting(...messages) {
//     const that = this;

//     // console.log(
//     //     "\n\n____THIS IS THIS____\n\n",
//     //     this,
//     //     "\n\n____THIS IS THIS____\n\n"
//     // );
//     return messages.map(function (message) {
//         console.log(
//             "\n\n____THIS IS THIS____\n\n",
//             this,
//             "\n\n____THIS IS THIS____\n\n"
//         );
//         return `${that.firstName} says ${message}`;
//     });
// }

// function greeting(...messages) {
//     return messages.map((message) => {
//         return `${this.firstName} says ${message}`;
//     });
// }

// const derek = {
//     firstName: "Derek",
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// const firstObj = {
//     firstName: "Zaviar",
// };

// const secondObj = firstObj;

// secondObj.firstName = "Kirin";

// secondObj.heyo = "byo";
// firstObj.blue = "berry";

// // console.log(firstObj.firstName);
// // console.log(secondObj.firstName);

// console.log(firstObj);
// console.log(secondObj);
