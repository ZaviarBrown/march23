// Key and a value

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
//     // dummyExample: undefined,
//     // theWordName: 10000,
// };

// let copyArr = [
//     "Godrick the Grafted",
//     "Margit, the Fell Omen",
//     "Rennala, Queen of the Full Moon",
//     "Astel, Natrualborn of the Void",
// ];

// console.log(copyArr[0].split(" ")[0]);
// let firstBoss = copyArr[0];
// let myNameArray = firstBoss.split(" ");
// let firstName = myNameArray[0];
// console.log(firstName);

// console.log(eldenObject['game']['favWeapon']);

// let theWordName = "name";

// // // console.log(eldenObject["name"]); i = i + 1
// // //% put everything after the . in a string, and then in brackets
// // console.log(eldenObject["name"]);
// // console.log(eldenObject.name); // i++ //% .name => 'name' => ['name'] => eldenObject["name"]
// console.log(eldenObject[theWordName]); // variable theWordName => string of "name"
// console.log(eldenObject.theWordName); // 'theWordName' => ['theWordName'] =>
// // console.log(eldenObject.dummyExample);

// // If [ " whatever " ] works, then .whatever works

// let arr = [1, 2, 3, 4];

// console.log(arr.length);
// console.log(arr['length']);

// let obj = {
//   first: "a",
//   second: "b",
//   third: "c",
// };

// console.log(obj.first, obj["first"]); //

// let arr = [[1], [2], [3]];

// console.log(arr[0][0])

// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     // counter: 0,
//     // buildStr: "",
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

// console.log(eldenObject.counter);

// if (!eldenObject.counter) {
//     eldenObject.counter = 100;
// }

// console.log(eldenObject.counter);

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
//     // key: "this would be weird",
//     // 0: "Something bad like this",
// };

// for (let key in eldenObject) {
//     console.log("\n");
//     console.log(key);
//     console.log(eldenObject[key]);
// }

// for (let literallyAnything in eldenObject) {
//     console.log(literallyAnything);
// }

// console.log(Object.keys(eldenObject));
// console.log(Object.values(eldenObject));
// console.log(Object.entries(eldenObject));

// let age = 10;
// let numberOfFingers = age;
// // age = numberOfFingers + 1;
// age++;
// console.log(age, numberOfFingers);

// let biff = {
//     type: "dog",
//     age: 10,
// };

// // let buster = biff;
// let buster = {...biff};
// console.log(biff, buster);

// buster.age = 0;
// buster.blue = "berry";
// biff.car = "Honda";

// console.log(biff, buster);

// let arr = [1, 2, 3];
// // let copyArr = arr.slice();
// let copyArr = [...arr];

// console.log(arr);
// console.log(copyArr);

// copyArr.push(4);

// console.log(arr);
// console.log(copyArr);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [0, arr1, arr2];
// console.log(arr3);

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);

// let arr5 = [0, ...arr2, ...arr1];
// console.log(arr5);

// let obj1 = { name: "Zaviar" };
// let obj2 = { platform: "PC", game: "Elden Ring" };
// let obj3 = { obj1, obj2, music: "Lofi" };
// let obj4 = { ...obj1, ...obj2, music: "Lofi" };
// console.log(obj3);
// console.log(obj4);

// obj1.name = "Will";

// console.log("---\n---");

// console.log(obj3);
// console.log(obj4);
// console.log(obj1);

// console.log("---\n---");
// obj4.name = "Kirin";

// console.log(obj3);
// console.log(obj4);
// console.log(obj1);

// game: {
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

// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: "Elden Ring",
//     Name: "Kirin",
// };

// console.log(eldenObject);

// console.log('a' === "A")

// let obj = { name: "Z" };

// console.log(obj);

// obj.name = "K";

// console.log(obj);

// let { name, age, game } = eldenObject;

// console.log(name, age, game);

// let name = eldenObject["name"]; // could use either syntax here, . or []
// let age = eldenObject.age; // could use either syntax here, . or []
// let game = eldenObject.game; // could use either syntax here, . or []

// let arrOfNums = [1, 2, 3];

// let first = arrOfNums[0];
// let second = arrOfNums[1];
// let third = arrOfNums[2];

// let name = "Game Of The Year";

// let eldenObject = {
//     name: "Zaviar",
//     age: 25,
//     game: "Elden Ring",
// };

// console.log(eldenObject.game);

// let { name: firstName, age, game: soulsLike } = eldenObject;

// console.log(name);
// console.log(firstName);
// console.log(age);
// console.log(soulsLike);

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

// //? My recommendation
// let deadBosses = eldenObject.game.bossesKilled;

// let { age, game } = eldenObject;
// let { hours, favWeapon } = game;

// console.log(name);
// console.log(eldenObject.name);
// console.log(eldenObject.game.name);

// //! 2 steps
// let { name, game } = eldenObject;
// console.log(game);

// let { name: theGamesName } = game;
// console.log(theGamesName);

// //! 2 steps without name in first destructure
// let { game } = eldenObject;
// console.log(game);

// let { name } = game;
// console.log(name);

// //! Deep Destructure
// let {
//     name,
//     game: { name: theGamesName },
// } = eldenObject;

// console.log(name);
// console.log(theGamesName);

// let arr = ["Elden Ring", "Zaviar", "Radahn"];
// let game = arr[0];
// let player = arr[1];
// let boss = arr[2];

// let arr = ["Elden Ring", "Zaviar", "Radahn"];
// let [game, , boss] = arr;
// // let boss = arr[arr.length - 1];
// console.log("game:", game);
// console.log("player:", player);
// console.log("boss:", boss);

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

// //! This be too crazy
// let {
//     name,
//     game,
//     game: {
//         favWeapon,
//         bossesKilled: [firstBoss, , , last],
//     },
// } = eldenObject;

// console.log(name);
// console.log(game);
// console.log(favWeapon);
// console.log(firstBoss);
// console.log(last);
