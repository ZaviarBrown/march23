let higherOrderFunction = (callback) => {
    // console.log(callback, "hey look at me")
    return callback();
};

let intoAFunction = () => {
    // console.log("I'm being passed into a function");
    return "I'm being passed into a function";
};

// let intoAFunctionPt2 = () => {
//     console.log("I'm ALSO being passed into a function");
// };

console.log(higherOrderFunction(intoAFunction()));
// console.log(intoAFunction());
// higherOrderFunction(intoAFunctionPt2);
