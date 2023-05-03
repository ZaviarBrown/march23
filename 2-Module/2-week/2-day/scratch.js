// class Cat {
//     speak(sound = "meow") {
//         console.log(this);
//         console.log(sound);
//     }

//     speakSpecific(sound) {
//         console.log(this);
//         this.speak(sound);
//     }

//     constructor(name) {
//         this.name = name;
//     }
// }
// let cat = new Cat("cat");
// let otherCat = new Cat("otherCat");

// cat.speak(); // 'meow'
// otherCat.speak(); // 'meow'
// // cat.speakSpecific("ayyeee lmao"); // 'ayyeee lmao'

// const mySpeak = cat.speak;
// const mySpecific = cat.speakSpecific;

// // console.log(mySpeak); // [Function: speak]
// // console.log(mySpecific); // [Function: speakSpecific]

// mySpeak("still works"); // 'still works'
// mySpecific("wait what happened"); // TypeError

// class Cat {
//     speak(sound = "meow") {
//         console.log(this);
//         console.log(sound);
//     }

//     speakSpecific(sound) {
//         console.log(this);
//         this.speak(sound);
//     }

//     constructor(name) {
//         this.name = name;
//     }
// }

// let cat = new Cat("Bind Kitty");
// let otherCat = new Cat("Other Cat");

// const mySpecific = cat.speakSpecific;

// const boundForever = mySpecific.bind(cat, "I'll never die");
// boundForever("hey");
// boundForever("ggez");

// const printStr = function (str) {
//     console.log(str);
// };

// const printZ = printStr.bind(null, "Zaviar");
// const printSomeOtherThing = printStr.bind(null);

// console.log(printZ);
// console.log(printSomeOtherThing);

// const someFunc = function (num1, num2) {
//     console.log(num1, num2);
// };

// const startWithOne = someFunc.bind(null, 1);

// startWithOne(50);
// startWithOne(100);
// startWithOne(32);
// startWithOne(33);
// startWithOne(245);

// class Cat {
//     speak(sound = "meow") {
//         // console.log(this);
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

// let cat = new Cat("Bind Kitty");

// const mySpecific = cat.speakSpecific;
// // mySpecific.call(cat); // meow
// // mySpecific.apply(cat); // meow

// mySpecific.bind(cat, 'grrhiss')()
// mySpecific.call(cat, "grrrrr"); // grrrrr
// mySpecific.apply(cat, ["hisssss"]); // hisssss

// class Cat {
//   speak(sound = "meow") {
//     console.log(sound);
//   }

//   speakSpecific(sound) {
//     this.speak(sound);
//   }

//   speakLater(delay) {
//     setTimeout(function () {
//       this.speak();
//     }, delay);
//   }
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
//             this.speak();
//         }, delay);
//     }
// }
// let cat = new Cat();

// cat.speakLater(1000); // meow

// console.log(this);
// console.log(globalThis);

// (() => console.log(this))()

// (function () {
//     console.log(this);
// })();

// function hello() {
//     console.log(this);
//     return `Hello ${this.firstName}`;
// }

// const derek = {
//     firstName: "Derek",
// };

// const zaviar = {
//     firstName: "Zaviar",
// };

// // console.log(hello());

// const myNewHello = hello.bind(derek);
// const mySecondHello = myNewHello.bind(zaviar);
// console.log(mySecondHello());
// // const mySecondHello = hello.bind(zaviar);
// function greeting(...messages) {
//     const that = this;
//     console.log(this);
//     console.log(this === that);
//     return messages.map(function (message) {
//         console.log("\n\n");
//         console.log(this, "THIS IS THE GLOBAL");
//         console.log(this === that);
//         return `${that.firstName} says ${message}`;
//     });
// }

// const derek = {
//     firstName: "Derek",
// };

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye class!"));

// const zavObj = {
//     name: "Zaviar",
// };

// // zavObj.name = "Kirin";

// // console.log(zavObj.name);

// const newObj = zavObj;

// newObj.name = "Kirin";

// console.log(zavObj.name);
// console.log(newObj.name);
