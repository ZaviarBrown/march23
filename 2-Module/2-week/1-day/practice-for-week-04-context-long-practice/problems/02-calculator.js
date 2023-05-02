// Your code here
class Calculator {
    constructor() {
        this.total = 0;
    }

    add(num) {
        this.total += num;
        return this.total;
    }

    subtract(num) {
        this.total -= num;
        return this.total;
    }

    divide(num) {
        this.total /= num;
        return this.total;
    }

    multiply = function (num) {
        this.total *= num;
        return this.total;
    };
}

// let calculator = new Calculator();
// console.log(calculator.add(50));      // => 50
// console.log(calculator.subtract(35)); // => 15
// console.log(calculator.multiply(10)); // => 150
// console.log(calculator.divide(5));    // => 30
// console.log(calculator.total)         // => 30
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}