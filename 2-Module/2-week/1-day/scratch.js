"use strict";

function hello() {
    console.log(this);
}

hello(); // undefined

// "use strict";

// function addNum(x, y) {
//     console.log(this)
//     return x + y
// }

// addNum(1, 2)

// let variable = 5;

// setTimeout = 10

// varible = 10

// console.log(varible)

// console.log(globalThis)

// setTimeout(() => console.log('hi'), 1000)

// class Dog {
//     constructor(name) {
//         this.name = name;

//     }

//     printName() {
//         console.log(this.name)
//     }

//     changeName(newName) {
//         this.name = newName;
//     }

// }

// const fido = new Dog('fido');
// const apollo = new Dog('apollo')

// fido.printName();
// console.log(fido)
// fido.name = 'kirin'
// fido.changeName('Kirin')
// fido.printName();

// console.log(apollo)

// console.log(fido)
// console.log(apollo)

// fido.printName()
// apollo.printName()

// console.log(Object.has(apollo))

// const fido = {
//     name: 'fido',
//     printName() {
//         console.log(fido.name)
//     }
// }

// console.log(fido)
// fido.printName()

// globalThis.testName = 'Anthony'

// function addNum(x, y) {
//     console.log(this)
//     return x + y
// }

// console.log(addNum(1, 2))

// function addNum(x, y) {
//     console.log(this)
//     return x + y
// }

// console.log(globalThis)
