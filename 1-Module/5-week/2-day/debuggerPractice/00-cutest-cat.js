/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.
*/

function cutestCat(cats) {
    let cutest;
    let i = 0;
    debugger;
    while (i < cats.length) {
        debugger;

        const cat = cats[i];
        if (cutest === undefined) {
            cutest = cat;
            debugger;
        } else if (cat.cuteness > cutest.cuteness) {
            cutest = cat;
            debugger;
        }
        debugger;

        i++;
    }
    debugger;
    return cutest;
}

const cats = [
    { name: "Princess", cuteness: 6 },
    { name: "Tiger", cuteness: 7 },
    { name: "Indie", cuteness: 5 },
    { name: "Fluffy", cuteness: 9 },
];
debugger;
console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }
