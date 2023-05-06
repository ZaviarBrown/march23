const Review = require("./review");
const Bicycle = require("./bicycle");
const ElectricBicycle = require("./electric-bicycle");

class Tester {
    constructor(name) {
        this.name = name;
        this.reviews = [];
    }

    submitReview(vehicle, starRating, text) {
        if (vehicle.validate()) {
            const newReview = new Review(vehicle, this, starRating, text);
            newReview.addReview();

            if (vehicle instanceof Bicycle) {
                this.bikeTester = true;
            }

            if (vehicle instanceof ElectricBicycle) {
                this.eBikeTester = true;
            }

            return newReview;
        }

        throw new Error("Cannot submit review for invalid vehicle.");
    }
}

module.exports = Tester;
