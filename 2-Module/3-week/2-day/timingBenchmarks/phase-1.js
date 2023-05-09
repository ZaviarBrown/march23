// Adds up positive integers from 1-n
function addNums(n) {
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        counter += i;
    }

    return counter;
}

// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
    let counter = 0;

    for (let i = 1; i <= n; i++) {
        counter += addNums(i);
    }

    return counter;
}

module.exports = [addNums, addManyNums];
