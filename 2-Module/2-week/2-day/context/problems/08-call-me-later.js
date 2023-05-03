class CallCenter {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello this is ${this.name}`);
    }

    callMeLater(delay) {
        //? The proper way to solve this problem!!!
        setTimeout(() => this.sayHello(), delay);

        // //! Other bad ways this is technically possible

        // //! Bind
        // const bound = this.sayHello.bind(this);

        // //! Call
        // const bound = () => {
        //     this.sayHello.call(this);
        // };

        // //! Apply
        // const bound = () => {
        //     this.sayHello.apply(this);
        // };

        // //! setTimeout call
        // setTimeout(bound, delay);
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
    module.exports = CallCenter;
} catch {
    module.exports = null;
}
