// Math.random();
// Array.isArray();

// myArr.map();
// myStr.toLowerCase();

/* 
  I want to keep track of EVERY task I create
  Create a Static variable that holds all Task instances
  Add each instance to that variable at construction time
*/
// class Task {
//     static list = [];

//     constructor(taskDetail) {
//         this.taskDetail = taskDetail;
//         Task.newVal();
//         Task.addToTaskList(this);
//     }

//     printTask() {
//         console.log(this.taskDetail);
//     }

//     static addToTaskList(someTask) {
//         Task.list.push(someTask);
//     }
// }

// const laundry = new Task("laundry");

// const dishes = new Task("dishes");

// const vacuum = {
//     taskDetail: "vacuum",
// };

// console.log(Task.list);

// Task.addToTaskList(vacuum);

// console.log(Task.list);

// Task.newVal = () => "Hey";

// console.log(Task.newVal());

//? --------------------------------------------------------------------
//? --------------------------------- Are We Hoisting? ---------------------------------
//? --------------------------------------------------------------------

// const myClosureFunc = () => {
//     const num = 5

//     const inner = () => {
//         if ("some thing happens") {
//             return inner;
//         } else {
//             return num
//         }
//     };

//     return inner;
// };

// console.log(myClosureFunc());

//? --------------------------------------------------------------------
//? ---------------------------------  ---------------------------------
//? --------------------------------------------------------------------

// Task.list.push(vacuum);

// console.log(Task.list);

// console.log(Task.list);

// const laundry = new Task("laundry");
// console.log(Task.list);

// laundry.isComplete = true;

// const dishes = new Task("dishes");

// dishes.isComplete = false;

// console.log(Task.list);

// laundry.printTask();
// dishes.printTask();
// console.log(laundry.list);
// console.log(dishes.list);

class Games {
    static library = [];

    constructor(name, genre) {
        this.name = name;
        this.genre = genre;

        Games.library.push(this);
    }

    play() {
        console.log(`Let's play ${this.name}!`);
    }

    type() {
        console.log(`${this.name} is a ${this.genre}`);
    }
}

class FPS extends Games {
    static fpsLib = [];
    static totalWins = 55;

    constructor(name) {
        super(name, "First Person Shooter");
        this.wins = 10;

        FPS.fpsLib.push(this.name);
        FPS.totalWins += this.wins;
    }
}

const chess = new Games("Chess", "Strategy");
const animalCrossing = new Games("Animal Crossing", "Farming Sim");
const warZone = new FPS("Warzone");

// chess.play();
// animalCrossing.type();

// warZone.play();

// console.log(FPS.fpsLib);
// console.log(FPS.totalWins);
// console.log(Games.library);

class Souls_Like extends Games {
    constructor(name, difficulty) {
        super(name, "Action RPG");
        this.difficulty = difficulty;
    }

    play() {
        if (this.difficulty > 8) {
            console.log("Prepare to die...");
        }
    }

    static gitGud() {
        console.log("gitgud you filthy casual");
    }
}

const eldenRing = new Souls_Like("Elden Ring", 10);
const hollowKnight = new Souls_Like("Hollow Knight", 7);

eldenRing.play();
hollowKnight.play();

Souls_Like.gitGud();
eldenRing.gitGud();

// console.log(FPS.fpsLib);
// console.log(Games.library);
