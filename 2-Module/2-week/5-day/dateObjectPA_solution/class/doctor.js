const User = require("./user");

class Doctor extends User {
    constructor(name, month, day, year) {
        super(name, month, day, year);
        this.appointments = [];
        this.insurance = [];
    }

    acceptsInsurance(insureName) {
        return this.insurance.includes(insureName);
    }

    addInsurance(insureName) {
        this.insurance.push(insureName);
    }

    removeInsurance(insureName) {
        this.insurance = this.insurance.filter((el) => el !== insureName);
    }
}

module.exports = Doctor;
