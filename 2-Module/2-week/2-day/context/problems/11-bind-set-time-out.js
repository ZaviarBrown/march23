function boundFuncTimer(obj, func, delay) {
    //? Bind
    setTimeout(func.bind(obj), delay);

    // //? Call
    // setTimeout(() => func.call(obj), delay);

    // //? Apply
    // setTimeout(() => func.apply(obj), delay);

    // //! These do NOT work!!! Can you explain why?
    // setTimeout(() => func.bind(obj), delay);
    // setTimeout(func.call(obj), delay);
    // setTimeout(func.apply(obj), delay);
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
