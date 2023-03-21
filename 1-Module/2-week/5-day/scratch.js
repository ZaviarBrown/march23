// console.log(1 == "1.0");

/**
 * I'm getting an error that says
 * "cannot read properties of undefined, (reading .length)"\
 * I think I should be able to do what I'm trying, reading the length
 * of a string, but when I console.log(currString.length) I
 * don't get an output, and just keep seeing the same error.
 */

// let num = 10000;

// if (num > 0) {
//     console.log("Bigger than 0!");
// } else if (num > 50) {
//     console.log("bigger than 50!");
// } else if (num > 99) {
//     console.log("at least 100!");
// } else if (num > 9999) {
//     console.log("power level too high!");
// }

// let num = 500;

// if (num < 100) {
//     console.log("Less than 100!");
// } else  {
//     console.log("power level too high!");
// }

                // 0       1
let arr = ['Zaviar', 'Kirin', "Ra", "Momo", "Tenten"]
console.log("Done without a loop")
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

console.log("Done with a loop");

for (let i =0 ; i < arr.length; i++) {
    console.log(arr[i], "the number value is", i)
}