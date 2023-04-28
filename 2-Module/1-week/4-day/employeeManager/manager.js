const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    calculateBonus(multi) {
        return (this._totalSubSalary() + this.salary) * multi;
    }

    _totalSubSalary() {
        return this.employees.reduce(
            (prev, next) =>
                next instanceof Manager
                    ? (prev += next._totalSubSalary() + next.salary)
                    : (prev += next.salary),
            0
        );
    }
}

module.exports = Manager;
