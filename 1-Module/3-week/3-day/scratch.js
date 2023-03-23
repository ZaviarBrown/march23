// // Object?

// // string -> 

// // "hello"[0]-> 'h'
// // ["h","e","l","l","o"][0] -> "h" 

// let myObj = {
//     "h" :"h",
//     "e" : "e",
//     "l" : "l",
//     "l" : "overwritten",
//     "o" : "o",
//     "length": "banana"
// }

// // console.log([] instanceof Object)

// // let wayne = {
// //     furColor: "black",
// //     hasTail : false,
// //     isChonky : true,
// //     cuddly : true,
// //     age : 2,
// // }

// let wayne = {age:2};
// wayne.hasTail = false;
// // console.log(wayne) 
// wayne["cuddly"] = true;
// let chonkitude = "isChonky";
// wayne[chonkitude] = true;
// // console.log(wayne)

// // ITERATING THROUGH OBJECTS

// // for...in
// //     key(s) object
// console.table(wayne)
// for(let key in wayne){
//     console.log(key)
//     let value = wayne[key];
//     console.log("    ", value);
// }

// let keys = Object.keys(wayne)

// console.log(keys)
// for (let idx = 0; idx < keys.length; idx++){
//     let key = keys[idx];
//     let value = wayne[key];
//     console.log("At the key of", key,"you can find the value", value)
// }


let wayne = {
    furColor: "black",
    hasTail: false,
    isChonky: true,
    cuddly: true,
    age: 2,
};

let values = Object.values(wayne);

console["log"](values);

let entries = Object.entries(wayne);
console["table"](entries);
console["log"](entries);