/***********************************************************************
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'); // false
iceCreamShop(['moose tracks'], 'moose tracks'); // true
iceCreamShop([], 'honey lavender'); // false
***********************************************************************/

// console.log(favorite);
// for (let i = 0; i < flavors.length; i++) {
//     const currFlav = flavors[i];
//     console.log(currFlav);
// }

// while (flavors.length) {
//     const currFlav = flavors.shift();
//     console.log(currFlav === favorite);
// }

const iceCreamShop = (flavors, favorite) => {
    if (flavors.length === 0) {
        return false;
    }

    const currFlav = flavors.shift(); // this line REMOVES from my array

    if (currFlav === favorite) {
        return true;
    }

    return iceCreamShop(flavors, favorite); // this line uses that mutated array
};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
    module.exports = iceCreamShop;
} catch (e) {
    module.exports = null;
}
