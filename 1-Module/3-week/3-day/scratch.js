// Object?

// string -> 

// "hello"[0]-> 'h'
// ["h","e","l","l","o"][0] -> "h" 

let myObj = {
    "h" :"h",
    "e" : "e",
    "l" : "l",
    "l" : "overwritten",
    "o" : "o",
    "length": "banana"
}

// console.log([] instanceof Object)

// let wayne = {
//     furColor: "black",
//     hasTail : false,
//     isChonky : true,
//     cuddly : true,
//     age : 2,
// }

let wayne = {age:2};
wayne.hasTail = false;
console.log(wayne) 
wayne["cuddly"] = true;
let chonkitude = "isChonky";
wayne[chonkitude] = true;
console.log(wayne)
