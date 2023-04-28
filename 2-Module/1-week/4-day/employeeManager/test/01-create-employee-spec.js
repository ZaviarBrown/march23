const chai = require("chai");
const expect = chai.expect;

const Employee  = require("../employee");

describe("The Employee class", () => {
    let leo;

    beforeEach(() => {
        // console.log(Employee, "THIS IS THE THING THROWING THE ERROR!!!");
        leo = new Employee("Leonardo", 90000, "Ninja");
    });

    describe("constructor function", () => {
        it("should have a name property", () => {
            expect(leo).to.have.property("name");
        });

        it("should have a salary property", () => {
            expect(leo).to.have.property("salary");
        });

        it("should have a title property", () => {
            expect(leo).to.have.property("title");
        });

        it("should have a manager property", () => {
            expect(leo).to.have.property("manager");
        });

        it('manager property should be set to null if no "manager" argument is passed', () => {
            expect(leo.manager).to.eql(null);
        });
    });
});
