// PRIMITVE V REFERENCE!

let wayne = {
    name: "Wayne",
    furColor: "black",
    hasTail: false,
    isCuddly: true,
    isSoft: true,
}

// let wax = {};
// for (let key in wayne){
//     wax[key] = wayne[key]
// }
// let wax = { ...wayne };
// wax.furColor = "torty"
// wax["name"] = "Wax"
// console.log(wayne)
// console.log(wax)

let myArr = [1, 2, 3, 4];
// let myCopy = [...myArr]
// console.log(myCopy)
function adder(...nums) {
    console.log(nums)
    let sum = 0;
    while (nums.length) sum += nums.pop();
    console.log(nums,"after while")
    return sum;
}

// console.log(adder(...myArr))
// console.log(myArr)

// let arr1 = ["a","b","c"]
// let arr2 = ["d","e","f"]

// arr1.push(...arr2)
// console.log(arr1)

// let [banana, papaya, mango, ...kiwi] = arr1; //  ["a","b","c", ...arr2]

// console.log("banana", banana)
// console.log("papaya", papaya)
// console.log("mango", mango)
// console.log("kiwi", kiwi)


let wax = { ...wayne };
wax.furColor = "torty"
wax["name"] = "Wax"

console.log(wax)

let {isCuddly:isCuddlyVal, isSoft:papaya, ...rest} = wax;

console.log("isCuddly", banana) // true
console.log("isSoft", papaya) // true
console.log(rest) // 

