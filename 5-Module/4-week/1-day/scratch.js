// const myFunc = () => () => "Hey";

// function myFunc() {
//     return function myThunk() {
//         return "Hey";
//     };
// }

// console.log(myFunc);

// const mySandwichShop = (ingredient) => {
//     const withPickles = () => {
//         return "I want a sandwich with pickles and " + ingredient;
//     };

//     return withPickles;
// };

// const mySandwichShop = (ingredient) => () => {
//     return "I want a sandwich with pickles and " + ingredient;
// };

// const test = mySandwichShop("tomatoes");

// console.log(test());

const createSandwichThunk = () => (dispatch) => {};
