/***********************************************************************
Write a function `keyAdderUniqueVal(object, key, value)` that accepts an
object, a string to be set as a key in that object, and a value. When invoked
the function should assign the key and value arguments as a key value pair in
the object argument ONLY IF the value is not already a value for a different
key in the object. Return the mutated object.

See below for examples

let cat = { name: 'Willie', color: 'orange' };
keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }
***********************************************************************/

//! object.key; // THIS DOES NOT WORK

function keyAdderUniqueVal(object, key, value) {
    // I need to collect all the values in my object
    const valuesArray = Object.values(object);

    // check if passed in value already exists in my object's values
    const doesItExist = valuesArray.includes(value);

    // if it doesn't, add that passed in key & value as a key value pair
    // doesItExist === false
    if (!doesItExist) {
        // { name: 'Willie', color: 'orange' };
        object[key] = value;
        // { name: 'Willie', color: 'orange', toy: 'yarn' };
    } // if it does, skip, do nothing, don't add it

    return object;
}

// let cat = { name: "Willie", color: "orange" };
// keyAdderUniqueVal(cat, "toy", "yarn"); // => {name: "Willie", color: "orange", toy: "yarn"}
// keyAdderUniqueVal(cat, "fruit", "orange"); // => {name: "Willie", color: "orange", toy: "yarn"}
// console.log(cat); // { name: "Willie", color: "orange", toy: "yarn" }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyAdderUniqueVal;
