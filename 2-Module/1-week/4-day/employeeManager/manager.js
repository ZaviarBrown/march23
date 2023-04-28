const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, salary, title, manager = null) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }
}

const splinter = new Manager("Splinter", 100000, "Sensei");
console.log("Before: ", splinter);
// const leo = new Employee("Leonardo", 90000, "Ninja");

splinter.addEmployee(leo);

const leo = new Employee("Leonardo", 90000, "Ninja", splinter);

module.exports = Manager;
