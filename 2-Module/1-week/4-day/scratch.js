// Math.random();
// Array.isArray();

// arr.map();
// myStr.toLowerCase();

/* 
  I want to keep track of EVERY task I create
  Create a Static variable that holds all Task instances
  Add each instance to that variable at construction time
*/
// class Task {
//     static taskList = [];

//     constructor(taskDetail) {
//         this.taskDetail = taskDetail;
//         Task.addToTaskList(this);
//         // Task.newMethod();
//     }

//     printTask() {
//         console.log(`I'm taking care of the ${this.taskDetail}`);
//     }

//     static addToTaskList(someTask) {
//         Task.taskList.push(someTask);
//     }
// }

// const laundry = new Task("laundry");

// Task.newMethod = () => "heyoooo";

// console.log(Task.newMethod());

// console.log(laundry);

// console.log(Task.taskList);

// laundry.isComplete = true;
// console.log(Task.taskList);

// console.log(laundry);

// const dishes = new Task("dishes");
// console.log(Task.taskList);

// console.log("\n\n\n");

// const vacuum = {
//     taskDetail: "vacuum",
//     isComplete: false,
// };

// Task.taskList.push(vacuum);
// Task.addToTaskList(vacuum);

// console.log(Task.taskList);

// console.log(dishes);

// dishes.printTask();

// console.log(Task.printTask());
// console.log(Task.taskList);

//? --------------------------------------------------------------------
//? --------------------------------- Not Hoisting ---------------------------------
//? --------------------------------------------------------------------

// const myClosure = () => {
//     const inner = () => {
//         if ("something happens") {
//             return inner;
//         }
//     };

//     return inner;
// };

// const doAThing = myClosure();

//? --------------------------------------------------------------------
//? --------------------------------- Polymorphism ---------------------------------
//? --------------------------------------------------------------------

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
    static fpsGames = [];

    constructor(name) {
        super(name, "First Person Shooter");

        FPS.fpsGames.push(this);
    }
}

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
const chess = new Games("Chess", "Strategy");
const animalCrossing = new Games("Animal Crossing", "Farming Sim");
const warZone = new FPS("Warzone");

const eldenRing = new Souls_Like("Elden Ring", 10);
const hollowKnight = new Souls_Like("Hollow Knight", 7);

eldenRing.play();
hollowKnight.play();

Souls_Like.gitGud();
warZone.play();
