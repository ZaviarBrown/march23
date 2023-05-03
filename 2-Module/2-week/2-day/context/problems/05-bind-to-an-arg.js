function bindToAnArg(func, arg) {
    return func.bind(null, arg);

    // return () => {
    //     return func.call("literally anything", arg)
    //     // return func.apply(true, [arg]);
    // };
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
