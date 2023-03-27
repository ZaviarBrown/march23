// Advanced Array Methods

// find the product of all numbers passed into a function

// function numsProduct(...nums) {
//     let product = 1;
//     // for (let i = 0; i < nums.length; i++){
//     // let num = nums[i];
//     nums.forEach((num) => product *= num)
//     // nums.forEach(function (num) {
//     //     product *= num;
//     // })
//     // }
//     return product;
// }
let numsProduct = (...nums) => nums.reduce((accum, ele) => ele * accum)
// let numsProduct = (...nums) => nums.reduce((accum, ele, i) => {
//     accum[i] = ele;
//     return accum;
// }, {})


console.log(numsProduct(5, 6, 10, 2, 7))

let data = [{
    id: 657,
    name: "manny",

},
{
    id: 200,
    name: "bill"
},
    { id: 3, name: "kirin" }
].reduce((accum, ele)=>{
    accum[ele.id] = ele;
    return accum;
},{})

console.log(data)
