class Appointment {
    constructor(doctor, patient, month, date, year, hour) {
        this.doctor = doctor;
        this.patient = patient;
        this.app = new Date(year, month, date, hour);

        if (this.validateAppointment()) {
            this.doctor.appointments.push(this);
        }
    }

    checkFuture() {
        const today = new Date();
        const currYear = today.getFullYear();
        const currMonth = today.getMonth();
        const currDate = today.getDate();
        const currHour = today.getHours();

        //? Is it next year?
        if (this.app.getFullYear() > currYear) {
            // console.log("\n\n AAAHHHHHHH, year");
            return true;
        }
        if (this.app.getFullYear() < currYear) {
            // console.log("\n\n AAAHHHHHHH, year");
            throw new AppointmentError("Appointment must be in the future");
        }

        //? It's this year, so is it next month?
        if (this.app.getMonth() > currMonth) {
            // console.log("\n\n AAAHHHHHHH, month");
            return true;
        }
        if (this.app.getMonth() < currMonth) {
            // console.log("\n\n AAAHHHHHHH, month");
            // console.log(this.app.getMonth());
            // console.log(currMonth);
            throw new AppointmentError("Appointment must be in the future");
        }

        //? It's this month, so is it tomorrow or later?
        if (this.app.getDate() > currDate) {
            // console.log("\n\n AAAHHHHHHH, day");
            return true;
        }
        if (this.app.getDate() < currDate) {
            // console.log("\n\n AAAHHHHHHH, day");
            throw new AppointmentError("Appointment must be in the future");
        }

        //? It's today! Is it later than right now?
        if (this.app.getHours() > currHour) {
            // console.log("\n\n AAAHHHHHHH, hour");
            return true;
        }
        if (this.app.getHours() < currHour) {
            // console.log("\n\n AAAHHHHHHH, hour");
            throw new AppointmentError("Appointment must be in the future");
        }
    }

    checkInsurance() {
        const doctorAccepts = this.doctor.insurance;
        const patientInsurer = this.patient.insurance;

        if (doctorAccepts.includes(patientInsurer)) return true;
        throw new AppointmentError("Patient's insurance not supported");
    }

    checkHours() {
        const appTime = this.app.getHours();

        if (appTime >= 8 && appTime <= 17) return true;
        throw new AppointmentError("Invalid time slot");
    }

    checkOverlap() {
        const doctorsApps = this.doctor.appointments;

        if (doctorsApps.find((el) => el.app.getTime() === this.app.getTime())) {
            throw new AppointmentError("Invalid time slot");
        }

        return true;
    }

    validateAppointment() {
        return (
            this.checkFuture() &&
            this.checkInsurance() &&
            this.checkHours() &&
            this.checkOverlap()
        );
    }
}

class AppointmentError extends Error {
    constructor(message) {
        super(message);
    }
}

module.exports = [Appointment, AppointmentError];
