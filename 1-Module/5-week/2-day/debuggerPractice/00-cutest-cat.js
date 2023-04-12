/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
    debugger;

    let cutest;
    let i = 0;

    while (i < cats.length) {
        const cat = cats[i];

        if (cutest === undefined) { // if (!cutest) //? Same as the working code
            cutest = cat
        } else if (cat.cuteness > cutest.cuteness) {
            debugger;
            cutest = cat;
        }
        i++;
    }

    return cutest;
}

const cats = [
    { name: "Princess", cuteness: 6 },
    { name: "Tiger", cuteness: 7 },
    { name: "Indie", cuteness: 5 },
    { name: "Fluffy", cuteness: 9 },
];
// console.log("heyyyyyy")

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
