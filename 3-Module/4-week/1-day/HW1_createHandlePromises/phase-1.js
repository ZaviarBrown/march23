function stretch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
            console.log("done stretching");
        }, 1000);
    });
}

// function stretch() {
//     return new Promise((resolve) =>
//         setTimeout(() => resolve(console.log("done stretching")), 1000)
//     );
// }

function runOnTreadmill() {
    return new Promise((res) => {
        setTimeout(() => {
            res();
            console.log("done running on treadmill");
        }, 500);
    });
}

function liftWeights() {
    return new Promise((banana) => {
        setTimeout(() => {
            banana();
            console.log("done lifting weights");
        }, 2000);
    });
}

function workout() {
    stretch()
        .then(() => runOnTreadmill())
        .then(() => liftWeights())
        .then(() => console.log("done working out"));
}

function workout() {
    stretch()
        .then(runOnTreadmill)
        .then(liftWeights)
        .then(() => console.log("done with workout"));
}

str.split().join()

/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/

workout();
// should print out the following:
// done stretching
// done running on treadmill
// done lifting weights
// done working out
