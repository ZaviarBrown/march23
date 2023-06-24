class Dog {
    constructor({ name, color, age, description }) {
        this.name = name;
        this.color = color;
        this.age = age;
        this.description = description;
    }
}

// constructor(dogObject) {
//     this.name = dogObject.name;
//     this.color = dogObject.color;
//     this.age = dogObject.age;
//     this.description = dogObject.description;
// }

// const doggyDog = {
//     name: "Fido",
//     // ...
// };

// const fido = new Dog(doggyDog);

module.exports = Dog;
