// // class Dog {
// //     constructor(name) {
// //         this.name = name;
// //     }

// //     changeName() {
// //         this.name = 'bob'
// //     }
// // }

// // let fido = new Dog('fido');
// // let apollo = new Dog('apollo');

// // // fido.changeName()

// // // console.log(fido)
// // // console.log(apollo)

// // class Cat {
// //     constructor(name, sound) {
// //         this.name = name;
// //         this.sound = sound;
// //     }

// //     makeSound() {
// //         console.log(this.sound)
// //     }
// // }

// // let cat1 = new Cat('whiskers', 'meow');
// // console.log(cat1)
// // let fakeCat = new Cat('tiger', 'roar');

// // cat1.makeSound()
// // fakeCat.makeSound()

// // const cat1 = {
// //     name: 'whiskers',
// //     sound: 'meow',
// //     makeSound() {
// //         console.log(this.sound)
// //     }
// // }

// // console.log(cat1.name)
// cat1.makeSound()
// console.log(cat1)

// console.log(this)
// console.log(addNums(1, 2))

// function addNums(x, y) {
//     console.log(this)
//     return x + y
// }

// console.log(this)

// globalThis.newName = 'anthony'

// console.log(globalThis)

// "use strict";
// let mistypeVariable;

// // Assuming no global variable mistypeVarible exists
// // this line throws a ReferenceError due to the
// // misspelling of "mistypeVariable" (lack of an "a")
// mistypeVarible = 17;

// console.log(mistypeVariable)
// console.log(globalThis)
