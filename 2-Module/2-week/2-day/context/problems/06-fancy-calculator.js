const Calculator = require("./02-calculator");

class FancyCalculator extends Calculator {
    constructor(total) {
        super(total);
    }

    setTotal(newTotal) {
        return (this.total = newTotal);
    }

    modulo(num) {
        return (this.total %= num);
    }

    squared() {
        return (this.total **= 2);
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
    module.exports = FancyCalculator;
} catch {
    module.exports = null;
}
