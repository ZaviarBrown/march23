class Calculator {
    constructor(total = 0) {
        this.total = total;
    }

    add(num) {
        return (this.total += num);
    }

    subtract(num) {
        return (this.total -= num);
    }

    divide(num) {
        return (this.total /= num);
    }

    multiply(num) {
        return (this.total *= num);
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
    module.exports = Calculator;
} catch {
    module.exports = null;
}
