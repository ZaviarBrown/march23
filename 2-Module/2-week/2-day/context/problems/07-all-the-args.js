const allTheArgs = (func, ...args) => func.bind(null, ...args);

// function allTheArgs(func, ...args) {
//     // return (...extraArgs) => {
//     //     return func.call("literally anything here", ...args, ...extraArgs);
//     // };

//     return (...extraArgs) => {
//         return func.apply("literally anything here", [...args, ...extraArgs]);
//     };
// }

// const modifiedFunc = func.bind(null, ...args);
// // const modifiedFunc = func.bind("hello", ...args);
// // const modifiedFunc = func.bind({}, ...args);
// // const modifiedFunc = func.bind([], ...args);
// return modifiedFunc;

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
