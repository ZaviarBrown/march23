class Review {
    constructor(vehicle, tester, starRating, text) {
        this.vehicle = vehicle;
        this.tester = tester;
        this.starRating = starRating;
        this.text = text;
    }

    // I know to add it here because line 190 of spec says REVIEW.addReview()
    addReview() {
        this.vehicle.reviews.push(this);
        this.tester.reviews.push(this);
    }

    static filterByStars(rating, ...reviews) {
        return reviews.filter((el) => el.starRating === rating);
    }
}
// //! More verbose filter
// return reviews.filter((currReview) => {
//     if (currReview.starRating === rating) {
//         return true;
//     } else return false;
// });

// //! for loop versions for filter
// static filterByStars(rating, ...reviews) {
//     const finalArray = [];

//     // for (let i = 0; i < reviews.length; i++) {
//     //     const currReview = reviews[i];

//     //     if (currReview.starRating === rating) {
//     //         finalArray.push(currReview);
//     //     }
//     // }

//     for (const currReview of reviews) {
//         if (currReview.starRating === rating) {
//             finalArray.push(currReview);
//         }
//     }

//     return finalArray;
// }

module.exports = Review;
