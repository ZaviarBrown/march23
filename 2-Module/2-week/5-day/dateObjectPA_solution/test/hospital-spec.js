const { expect } = require("chai");

const User = require("../class/user.js");
const Doctor = require("../class/doctor.js");
const Patient = require("../class/patient.js");

const [Appointment, AppointmentError] = require("../class/appointment.js");

describe("User", function () {
    it("should set username and birthdate on creation", function () {
        // Create a user born on October 17, 1985
        let user = new User("John Doe", 10, 17, 1985);

        expect(user.name).to.equal("John Doe");

        // Use Date.toDateString()
        expect(user.getBirthday()).to.equal("Thu Oct 17 1985");
    });

    it("should get the age of the user", function () {
        const today = new Date();

        // Create a user born on October 17, 1985
        let user = new User("John Doe", 10, 17, 1985);
        let age = today.getFullYear() - 1985;

        if (
            today.getMonth() < 9 ||
            (today.getMonth() === 9 && today.getDate() < 17)
        ) {
            age--;
        }

        expect(user.getAge()).to.equal(age);

        let user2 = new User("Ryan Schneider", 11, 14, 1900);
        let age2 = today.getFullYear() - 1900;

        if (
            today.getMonth() < 10 ||
            (today.getMonth() === 10 && today.getDate() < 14)
        ) {
            age2--;
        }

        expect(user2.getAge()).to.equal(age2);
    });
});

describe("Doctor", function () {
    let doctor;

    beforeEach(function () {
        doctor = new Doctor("Richard Kimble", 7, 13, 1942);
    });

    it("should be a subclass of User", function () {
        expect(doctor instanceof User).to.be.true;
    });

    it(`has an array of scheduled appointments`, function () {
        expect(doctor.appointments).to.exist;
        expect(doctor.appointments).to.eql([]);
    });

    it("can add accepted insurance", function () {
        expect(doctor.acceptsInsurance("BnL Insurance")).to.be.false;

        doctor.addInsurance("BnL Insurance");

        expect(doctor.acceptsInsurance("BnL Insurance")).to.be.true;
    });

    it("can remove accepted insurance", function () {
        doctor.addInsurance("Insurance3");
        doctor.addInsurance("BnL Insurance");
        doctor.addInsurance("MyInsurance");

        expect(doctor.acceptsInsurance("BnL Insurance")).to.be.true;

        doctor.removeInsurance("BnL Insurance");

        expect(doctor.acceptsInsurance("BnL Insurance")).to.be.false;
    });
});

describe("Patient", function () {
    let patient;

    beforeEach(function () {
        patient = new Patient("Laszlo de Almasy", 12, 22, 1962);
    });

    it("should be a subclass of User", function () {
        expect(patient instanceof User).to.be.true;
    });

    it("can add insurance", function () {
        expect(patient.insurance).to.be.null;

        patient.setInsurance("BnL Insurance");

        expect(patient.getInsurance()).to.equal("BnL Insurance");
    });

    it("also updates old insurance to new insurance", function () {
        expect(patient.insurance).to.be.null;

        patient.setInsurance("BnL Insurance");

        expect(patient.getInsurance()).to.equal("BnL Insurance");

        patient.setInsurance("BrianaInsurance");

        expect(patient.getInsurance()).to.equal("BrianaInsurance");
        expect(patient.insurance).to.equal("BrianaInsurance");
    });
});

describe("Appointment", function () {
    let doctor;
    let patient;
    let patientNoInsurance;

    let today;
    let tomorrow;
    let yesterday;

    beforeEach(function () {
        doctor = new Doctor("Richard Kimble", 7, 13, 1942);
        doctor.addInsurance("BnL Insurance");

        patient = new Patient("Laszlo de Almasy", 12, 22, 1962);
        patient.setInsurance("BnL Insurance");

        patientNoInsurance = new Patient("Lon Hammond Jr.", 9, 18, 1973);
    });

    before("set dates", function () {
        today = new Date();

        tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
    });

    it("should allow appointments to be set in the future between 8am-5pm", function () {
        const hour = 8; // 8am
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        const appointment = new Appointment(
            doctor,
            patient,
            month,
            date,
            year,
            hour
        );

        expect(appointment).to.be.ok;
    });

    it("should not allow appointments to be set in the past", function () {
        const hour = 8; // 8am
        const date = yesterday.getDate();
        const month = yesterday.getMonth(); // 0-indexed already
        const year = yesterday.getFullYear();

        try {
            const appointment = new Appointment(
                doctor,
                patient,
                month,
                date,
                year,
                hour
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Appointment must be in the future");
        }
    });

    it("should not allow appointments to be set without insurance", function () {
        const hour = 8; // 8am
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        try {
            const appointment = new Appointment(
                doctor,
                patientNoInsurance,
                month,
                date,
                year,
                hour
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Patient's insurance not supported");
        }
    });

    it("should not allow appointments to be set with unaccepted insurance", function () {
        const hour = 8; // 8am
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        patient.setInsurance("Globex Health");

        try {
            const appointment = new Appointment(
                doctor,
                patient,
                month,
                date,
                year,
                hour
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Patient's insurance not supported");
        }
    });

    it("should allow appointments to be set on different time slots between 8-5", function () {
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        // 8am appointment
        const appointment = new Appointment(
            doctor,
            patient,
            month,
            date,
            year,
            8
        );
        expect(appointment).to.be.ok;

        // 12pm appointment
        const appointment2 = new Appointment(
            doctor,
            patient,
            month,
            date,
            year,
            12
        );
        expect(appointment2).to.be.ok;

        // 5pm appointment
        const appointment3 = new Appointment(
            doctor,
            patient,
            month,
            date,
            year,
            17
        );
        expect(appointment3).to.be.ok;
    });

    it("should not allow appointments to be set before 8am", function () {
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        try {
            // 7am appointment
            const appointment = new Appointment(
                doctor,
                patient,
                month,
                date,
                year,
                7
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Invalid time slot");
        }
    });

    it("should not allow appointments to be set after 5pm", function () {
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        try {
            // 6pm appointment
            const appointment = new Appointment(
                doctor,
                patient,
                month,
                date,
                year,
                18
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Invalid time slot");
        }
    });

    it("should not allow appointments to be set on overlapping time slots", function () {
        const date = tomorrow.getDate();
        const month = tomorrow.getMonth(); // 0-indexed already
        const year = tomorrow.getFullYear();

        // 8am appointment
        const appointment = new Appointment(
            doctor,
            patient,
            month,
            date,
            year,
            8
        );
        expect(appointment).to.be.ok;

        try {
            // 8am appointment
            const appointment2 = new Appointment(
                doctor,
                patient,
                month,
                date,
                year,
                8
            );
            expect("SHOULD NOT GET HERE").to.equal(false);
        } catch (error) {
            expect(error instanceof AppointmentError).to.equal(true);
            expect(error.message).to.equal("Invalid time slot");
        }
    });
});
