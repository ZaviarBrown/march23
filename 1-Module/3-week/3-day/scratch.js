// Objects!
01234
// "hello!"[0] -> "h"
//   0   1   2   3   4
// ["h","e","l","l","o"][0] -> "h"

// {"key" : "value"}

// function push(arr, ele){
//     arr[arr.length] = ele;
//     return arr.length;
// }

// let obj = {};
// console.log(obj)
// obj["name"] = "bill";
// console.log(obj)
// obj.isTeacher = true;
// console.log(obj)
// let newProp = "lastName"
// obj[newProp] = "adams"
// obj.newProp = "new value"
// console.log(obj)
// delete obj.newProp
// console.log(obj)

// for (let i = 0; i < arr.length; i++){
//     arr[i] = someValue;
// }

// // console["log"]([]["concat"]([1,2,3]))
// let wax = {furColor: "torty"};
// wax.hasTail = false;
// wax.isCuddly = true;
// wax.isChonky = false;
// wax["toys"] = ["feathers", "mouseys", "string", "steals other toys from baby"]
// console.log(wax)

// let keyToDelete = "toys";

// delete wax[keyToDelete];

// console.log(wax)

// ITERATING THROUGH OBJECTS


let wax = {
    furColor: "torty",
    hasTail: false,
    isCuddly: true,
    isChonky: false,
    toys: "lots of em",
};

// for...in
//  let key in obj
// let values = [];
// for(let key in wax){
//     let value =  wax[key];
//     values.push(value)
// }
// console.log(values)
// let arr = [1,2,3,4];
// console.table(arr)
// for (let index in arr){
//     console.log(typeof index)
//     console.log("the value", arr[index], "lives at index", index);
// }

// let keys = Object.keys(wax)
// console.log(keys)
// for (let i = 0; i < keys.length; i++){
//     let key = keys[i];
//     console.log(key);
//     let value = wax[key];
//     console.log(value);
// }

// let values = Object.values(wax);
// console.log(values)

// let entries = Object.entries(wax);
// console.log(entries)

let arr = ["string", 1, [], {}, undefined, null]

// for...in -> keys || access
console.table(arr)
// for (let papaya in arr[0]){
//     console.log(papaya)
//     console.log("      ", arr[0][papaya])
// }
// for...of -> elements
for (let banana of arr[0]){
    console.log(banana)
}