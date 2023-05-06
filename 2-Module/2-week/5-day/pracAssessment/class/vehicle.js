class Vehicle {
    constructor(modelName, year, price) {
        this.modelName = modelName;
        this.year = year;
        this.price = price;
        this.reviews = [];
    }

    validate() {
        if (this.modelName && this.year && this.price) {
            if (this.year >= 1950 && this.year <= 2100) {
                return true;
            }
        }
        return false;
    }

    update(newModelName, newYear, newPrice) {
        if (newPrice <= 0) throw new Error("Price must be greater than 0");
        if (newYear < 1950 || newYear > 2100)
            throw new Error("Year must be between 1950 and 2100");

        this.modelName = newModelName;
        this.year = newYear;
        this.price = newPrice;
    }

    getDetails() {
        return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
    }

    findReviewByTester(testerName) {
        return this.reviews.find((review) => review.tester.name === testerName);
    }
}

// //! for loop version find review by tester
// findReviewByTester(testerName) {
//     for (const currReview of this.reviews) {
//         if (currReview.tester.name === testerName) {
//             return currReview;
//         }
//     }
//     return "Couldn't find that guy sorryyy";
// }

// //! "Cleaner" validate
// validate() {
//     return this.modelName &&
//         this.year &&
//         this.price &&
//         this.year >= 1950 &&
//         this.year <= 2100
//         ? true
//         : false;
// }

module.exports = Vehicle;
