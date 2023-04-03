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
