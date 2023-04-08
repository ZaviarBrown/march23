/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/
// //! Silly one line
// const filterUserProfiles = (users, cb) =>
//     users.map((el) => (cb(el) ? el.name : null)).filter((el) => el);

//! My recommendation
function filterUserProfiles(users, filter) {
    // create finalArr
    const finalArr = [];

    // loop through users array
    for (let i = 0; i < users.length; i++) {
        // for each element (which is an obj), pass to cb (filter)
        const currObj = users[i];
        const result = filter(currObj);

        // if filter returns true, keep that users's NAME
        if (result) {
            finalArr.push(currObj.name);
        } // else ignore
    }

    return finalArr;
}

// //! Using all our fancy tools
// const filterUserProfiles = (users, filter) => {
//     let nameArr = [];

//     for (let user of users) {
//         let { name } = user;
//         if (filter(user)) nameArr.push(name);
//     }
//     return nameArr;
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

// //! Fun random challenge but not related to assessment
// const filterUserProfiles = (users, filter) => {
//     // create finalArr
//     const finalArr = [];

//     // loop through users array
//     for (let i = 0; i < users.length; i++) {
//         // for each element (which is an obj), pass to cb (filter)
//         const currObj = users[i];
//         const result = filter(currObj);

//         // if filter returns true, keep that users's NAME
//         if (result) {
//             finalArr.push(currObj.name);
//         } // else ignore
//     }

//     finalArr.map((name) => {
//         users.forEach((obj) => {
//             if (obj.name === name) {
//                 obj.age += 8;
//             }
//         });
//     });

//     console.log(users);

//     return finalArr;
// };

// const facebookUsers = [
//     { name: "John", age: 21, state: "Florida" },
//     { name: "Mary", age: 57, state: "California" },
//     { name: "Judy", age: 47, state: "Texas" },
//     { name: "Mike", age: 32, state: "New York" },
// ];

// filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]

try {
    module.exports = filterUserProfiles;
} catch (e) {
    module.exports = null;
}
