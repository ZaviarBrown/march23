// class UrBadKidGitGud extends Error {
//     constructor(gameName = "field", ...params) {
//         // Pass remaining arguments to parent constructor
//         super(...params);

//         // Maintains proper stack trace for where error was thrown (available on V8)
//         if (Error.captureStackTrace) {
//             Error.captureStackTrace(this, UrBadKidGitGud);
//             // Error.captureStackTrace(this);
//         }

//         this.name = "UrBadKidGitGud";
//         this.message = `You're actually trash at ${gameName}. Literally just uninstall`;
//     }
// }

// // throw new UrBadKidGitGud("Fortnite");

// try {
//     throw new UrBadKidGitGud("Fortnite");
// } catch (e) {
//     console.error(e.name); //UrBadKidGitGud
//     console.error(e.message); // you're bad
//     console.error("hey", e.stack); //stacktrace
// }

// function CoolClassInFunctionSyntax(name) {
//     this.name = name;

//     this.mySuperCoolAndCustomInstanceMethod = function () {
//         console.log(this.name);
//     };
// }

// CoolClassInFunctionSyntax.myStaticMethod = function () {
//     console.log("This is a static yooo");
// };

// const testInsta = new CoolClassInFunctionSyntax("Hey");

// testInsta.mySuperCoolAndCustomInstanceMethod();
// CoolClassInFunctionSyntax.myStaticMethod();

const myObjectExample = {
    game: undefined,
};

// console.log(myObjectExample.hello());
myObjectExample.game = "Elden Ring";
