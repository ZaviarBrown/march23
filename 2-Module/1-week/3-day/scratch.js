// const myArr = new Array(5, 4, 2, "yop", false);
// const myNum = Number("5");
// const otherArr = [5, true, "hey"];

// console.log(myNum);

// const myObj = {
//     aProp: 25,
//     aFunc: () => {
//         return "Hello World";
//     },
// };

// const myVal = "aProp";
// const myOtherVal = "aFunc";

// console.log(myObj.aProp);
// console.log(myObj["aProp"]);
// console.log(myObj[myVal]);
// console.log(myObj.aFunc());
// console.log(myObj["aFunc"]());
// console.log(myObj[myOtherVal]());

// const myArr = [1, 2, 3];

// const l = "length";

// console.log(myArr.length);
// console.log(myArr["length"]);
// console.log(myArr[l])

// const myObj = {};

// const name = "Zaviar";

// myObj.name = name;
// myObj.firstName = name;

// console.log(myObj);

// class Pokemon {
//     constructor(name, type, level, trainer = "wild") {
//         // if (level === undefined) {
//         //     level = 100;
//         // }

//         // const myFunc = () => {};

//         // this.someOtherValue = myFunc();

//         this.species = name;
//         this.type = type;
//         this.level = level;
//         this.trainer = trainer;
//     }

//     levelUp(level = 1) {
//         this.level += level;
//         console.log("Du-du-du-da!");
//         console.log(
//             `${this.species} has leveled up by ${level} and is now ${this.level}!`
//         );
//     }

//     showName() {
//         console.log(`Hi I am a ${this.species}`);
//     }

//     run() {
//         console.log(`${this.species} has fled from battle!`);
//     }
// }

// const wildPikachu = new Pokemon("Pikachu", "electric");

// console.log(wildPikachu);

// wildPikachu.run();

// wildPikachu.levelUp(25);
// wildPikachu.levelUp();
// wildPikachu.showName();

// const anotherPokemon = new Pokemon("Squirtle");
// console.log(anotherPokemon);

// class GameAssets {
//     constructor(movement) {

//     }
// }

class Pokemon {
    constructor(name, type, level, trainer = "wild") {
        this.name = name;
        this.type = type;
        this.level = level;
        this.trainer = trainer;
    }

    levelUp(level = 1) {
        this.level += level;
        console.log("Du-du-du-da!");
        console.log(
            `${this.name} has leveled up by ${level} and is now ${this.level}!`
        );
    }

    showName() {
        console.log(`Hi I am a ${this.name}`);
    }

    run() {
        console.log(`${this.name} has fled from battle!`);
    }
}

const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`];

class Pikachu extends Pokemon {
    constructor(name, level, moveList, trainer) {
        super(name, "electric", level, trainer);

        this.moveSet = moveList;
        this.atk = Math.floor(Math.random() * 10) + level;
        this.def = Math.floor(Math.random() * 5) + level;
        this.speed = Math.floor(Math.random() * 12) + level;
    }

    useThunderBolt() {
        console.log(`${this.name} has used thunderbolt!!`);
        console.log(
            `${Math.floor(
                Math.random() * this.atk * 1.2
            )} damage has been dealt`
        );
    }

    showMoveSet() {
        console.log(`${this.moveSets}`);
    }
}

// const wildPikachu = new Pikachu("Pikachu", 20, moves);
// const zPikachu = new Pikachu("Zeus", 9999, moves, "Zaviar");

// console.log(wildPikachu);
// wildPikachu.levelUp();
// zPikachu.levelUp();
// zPikachu.levelUp();
// zPikachu.levelUp();

// wildPikachu.useThunderBolt();
// zPikachu.useThunderBolt();

// console.log(wildPikachu);
// console.log(zPikachu);

// const anotherPokemon = new Pokemon("Squirtle", "water", 5);
// console.log(anotherPokemon);
