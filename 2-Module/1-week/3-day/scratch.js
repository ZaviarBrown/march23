// const myArr = new Array("hello"); // []
// const myAnnoyingArr = new Array(); // []
// const otherArr = [5];
// console.log(myArr);
// console.log(otherArr);
// console.log(myAnnoyingArr);

// const myObj = {
//     aProp: 25,
//     aFunc: function () {
//         console.log(this);
//         return "Hello World";
//     },
// };

// myObj.aFunc();

// let myVal = "aProp";
// const objKeys = Object.values(myObj);

// console.log(objKeys);

// console.log(myObj.aProp);
// console.log(myObj[myVal]);
// console.log(myObj.aFunc());

// const myArr = [1, 2, 3, 4, 5];

// const myOtherArr = new Array(1, 2, 3, 4, 5);

// let l = "length";

// console.log(myArr);
// console.log(myOtherArr)

// console.log(myArr.length);
// console.log(myArr[l]);

// console.log(Array + "");

// const obj = {};

// obj.name = "Zaviar";

// console.log(this);

// const myNum = 25;

// const myObj = {};

// myObj.someNumber = myNum;
// myObj.food = "Sushi";

// console.log(myObj);

// const myArr = [[[[[1]]]], [[[2]]], 3];

// class Pokemon {
//     constructor(name, level, type, trainer = "wild") {
//         // this.species = name;
//         this.name = name;
//         this.level = level;
//         this.type = type;
//         this.trainer = trainer;
//     }

//     levelUp(level = 1) {
//         this.level += level;
//         console.log("Du-du-du-da!");
//         console.log(
//             `${this.name} has leveled up by ${level} to ${this.level}!`
//         );
//     }
// }

// const wildPikachu = new Pokemon("Pikachu", 20, "electric");
// const zSquirtle = new Pokemon("Squirtle", 10, "water", "Zaviar");

// console.log(wildPikachu);
// wildPikachu.levelUp();
// wildPikachu.levelUp();
// wildPikachu.levelUp();
// wildPikachu.levelUp();
// console.log("\n\n\n", wildPikachu);

// wildPikachu.levelUp();
// wildPikachu.levelUp();
// wildPikachu.levelUp();
// wildPikachu.levelUp();
// // console.log(wildPikachu);
// console.log("\n\n\n", wildPikachu);

// zSquirtle.levelUp(100);
// console.log(zSquirtle);

// wildPikachu.levelUp();
// console.log("\n\n\n", wildPikachu);

// console.log(wildPikachu);
// console.log(wildPikachu.level);
// wildPikachu.level++;
// console.log(wildPikachu.level);
// console.log(wildPikachu);

class Pokemon {
    constructor(name, level, type, trainer = "wild") {
        // this.species = name;
        this.name = name;
        this.level = level;
        this.type = type;
        this.trainer = trainer;
    }

    levelUp(level = 1) {
        this.level += level;
        console.log("Du-du-du-da!");
        console.log(
            `${this.name} has leveled up by ${level} to ${this.level}!`
        );
    }

    showName() {
        console.log(`Hi my name is ${this.name}`);
    }

    run() {
        console.log(`${this.name} has fled from battle!`);
    }
}

const movesList = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`];

class Pikachu extends Pokemon {
    constructor(name, level, moves, trainer) {
        super(name, level, "electric", trainer);
        this.moveList = moves;
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
        // console.log(this.moveList);
        return this.moveList;
    }
}

const wildPikachu = new Pikachu("Pikachu", 20, movesList);

console.log(wildPikachu);

// const zSquirtle = new Pokemon("Squirtle", 10, "water", "Zaviar");

// console.log(wildPikachu);
// wildPikachu.levelUp();
// wildPikachu.useThunderBolt();

// const zPikachu = new Pikachu("Zeus", 9999, "electric", movesList);

// zPikachu.useThunderBolt();

// console.log(zSquirtle);
// zSquirtle.levelUp();
// zSquirtle.useThunderBolt();
