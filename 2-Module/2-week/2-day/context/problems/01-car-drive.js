class Car {
    constructor(speed = 0) {
        this.speed = speed;
    }

    drive(newSpeed) {
        this.speed = newSpeed;
        return this.speed;
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
    module.exports = Car;
} catch {
    module.exports = null;
}
