// let obj = {
//     name: "Zaviar",
//     age: 25,
//     game: {
//         name: "Elden Ring",
//         hours: 135,
//         favWeapon: "Bloodhound's Fang",
//         bossesKilled: [
//             "Godrick the Grafted",
//             "Margit, the Fell Omen",
//             "Rennala, Queen of the Full Moon",
//             "Astel, Natrualborn of the Void",
//         ],
//     },
// };
// let theWordName = "name";

// console.log(obj[theWordName]); // obj['name']
// console.log(obj.theWordName); // obj['theWordName']

// let copyArr = [
//     "Godrick the Grafted",
//     "Margit, the Fell Omen",
//     "Rennala, Queen of the Full Moon",
//     "Astel, Natrualborn of the Void",
// ]

// console.log(copyArr[0])
// console.log(obj['name'])
// console.log(obj.name);

// let obj = {
//     first: "a",
//     second: "b",
//     third: "c",
// };

// let first = "hello";

// console.log(obj.first, obj["first"]);

// let person = {
//     first: "Zaviar",
//     last: "Brown",
//     age: "25",
// };

// console.log("How old is this person?");
// console.log(person.age);

// if (!person.age) {
//     person.age = "100";
// }

// console.log("How old is this person?");
// console.log(person.age);

// console.log(person.ZaviarBrown, "normal");
// console.log(person.zaviarBrown, "lower z");
// console.log(person.Zaviarbrown, "lower b");
// console.log(person.zaviarbrown, "lower both");

// console.log(person.first);
// console.log(person.last);
// console.log(person[`${person.first}${person.last}`]);
// key into person @ ' key into person @ first' + ' key into person @ last'
// ------------------------- "Zaviar" -------------    "Brown"------

// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: {
//         name: "Elden Ring",
//         hours: 135,
//         favWeapon: "Bloodhound's Fang",
//         bossesKilled: [
//             "Godrick the Grafted",
//             "Margit, the Fell Omen",
//             "Rennala, Queen of the Full Moon",
//             "Astel, Natrualborn of the Void",
//         ],
//     },
// };

// let myExample = () => {
//     return "hello";
// };

// // let theWordHello = myExample();
// // console.log(theWordHello[0]);

// console.log(myExample()[0]);

// console.log(eldenObject.game);

// let gameObject = eldenObject.game;
// console.log(gameObject.hours, "<= with variable");

// console.log(eldenObject.game.hours, "<= without variable");

// // console.log(eldenObject);

// for (let thisIsJustAKey in eldenObject) {
//     console.log("\n"); // new line character
//     // console.log(thisIsJustAKey);
//     // console.log(eldenObject[thisIsJustAKey]);
//     console.log(eldenObject.thisIsJustAKey);
// }

// let name = "Z";

// console.log(name)

// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let biff = {
//     type: "dog",
//     age: 10,
// };

// let buster = biff;
// console.log(biff, buster);

// buster.age = 0;

// console.log(biff, buster);

// //! Maximally inefficient
// let favGame = { name: "Zaviar", age: 25, game: "Elden Ring" }.game;
// console.log(favGame);

// //? Better, but there's even better out there
// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: "Elden Ring",
// };
// let favGame2 = eldenObject.game;
// console.log(favGame2);

// //% Best!!!
// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: "Elden Ring",
// };
// let { age, name, game: favGame } = eldenObject;
// let favGame = eldenObject.game;

// console.log(game);
// console.log(favGame);
// console.log(age);
// console.log(name);

// let { name, game } = eldenObject;

// console.log(game);

// console.log(favGame);

// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: {
//         name: "Elden Ring",
//         hours: 135,
//         favWeapon: "Bloodhound's Fang",
//         bossesKilled: [
//             "Godrick the Grafted",
//             "Margit, the Fell Omen",
//             "Rennala, Queen of the Full Moon",
//             "Astel, Natrualborn of the Void",
//         ],
//     },
// };

// let { name, game } = eldenObject;
// let { bossesKilled } = game;
// console.log(game.bossesKilled);
// console.log(bossesKilled);
// let { gameName } = eldenObject.game; // let gameName = eldenObject.game.gameName
// let { name: gameName } = eldenObject.game; // let gameName = eldenObject.game.name
// let {
//     game: { name: longerGameName },
// } = eldenObject; // let gameName = eldenObject.game.name

// console.log(name);
// console.log(gameName);
// console.log(longerGameName);

// let num = 5;

// let num = 10;

// //! How you should do it
// let { game } = eldenObject;
// // console.log(game);

// let { bossesKilled } = game;
// console.log(bossesKilled);

// //! How you can challenge yourself
// let {
//     game: { bossesKilled, favWeapon },
// } = eldenObject;

// console.log(bossesKilled);
// console.log(favWeapon);

// let { game: newNameForValue } = eldenObject; // let newNameForValue = eldenObject.game

// let { name } = newNameForValue; // let name = newNameForValue.name

// console.log(name);

// console.log(game);
// console.log(game.name);

// let { age, game } = eldenObject;

// console.log(age);
// console.log(game);

// let myArr = [1, 2, 3];

// // let [first, second, third] = myArr;
// let [second, third, first] = myArr;

// // let first = myArr[0];
// // let second = myArr[1];
// // let third = myArr[2];

// console.log(first, second, third);

// let [game, player, boss] = ["Elden Ring", "Zaviar", "Radahn"];
// console.log("game:", game);
// // console.log("player:", player);
// console.log('boss:', boss);

// let [game, , boss] = ["Elden Ring", "Zaviar", "Radahn"];
// console.log("game:", game);
// console.log("boss:", boss);

// let bigArr = ["hey", ["Elden Ring", "Zaviar", "Radahn"], 50];

// // let [word, arr = [, myName], num] = bigArr;
// let [word, arr, num] = bigArr;
// let [boss] = arr;
// console.log(arr);
// console.log(boss);
// let [, [, myName, ],] = bigArr;

// console.log(word, game, myName, boss, num);

// // Swapping
// [player, game] = [game, player];
// console.log("game:", game);
// console.log("player:", player);

// let yellEverything = function (...strings) {

//     for (let i = 0; i < strings.length; i++) {
//         strings[i] = strings[i].toUpperCase();
//     }
//     return strings.join(" ");
//     // return "This was just the return value";
// };

// console.log(yellEverything("hello", "world"));
// console.log(yellEverything("hello"));
// console.log(yellEverything( "Quiet", "this,", "is", "a", "library"));
// console.log(yellEverything("Quiet", "this,", "is", "a", "library"));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [0, ...arr1, ...arr2];
// let arr5 = [0, ...arr2, ...arr1];
// console.log(arr3);
// console.log(arr4);
// console.log(arr5);

// let obj1 = { name: "Zaviar" };
// let obj2 = { platform: "PC", game: "Elden Ring" };
// let obj3 = { obj1, obj2, music: "Lofi" };
// let obj4 = { ...obj1, ...obj2, music: "Lofi" };
// console.log(obj3);
// console.log(obj4);

// obj1.name = "Will";

// console.log(obj3);
// console.log(obj4);

let arr1 = [1, 2, 3];

// let copyArr = arr1.slice();
// let copyArr = arr1;
let copyArr = [...arr1];

console.log(arr1);
console.log(copyArr);

copyArr.push(4);

console.log("------After push------");

console.log(arr1);
console.log(copyArr);
