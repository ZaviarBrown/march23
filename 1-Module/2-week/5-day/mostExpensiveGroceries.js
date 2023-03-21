// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

function costOfGroceries(groceries) {
    // takes an array of strings (groceries)

    // add up the cost of all the groceries
    // create an "empty container" for our total cost

    let totalCost = 0;

    // loop through groceries
    for (let i = 0; i < groceries.length; i++) {
        let currItem = groceries[i];

        // add price to totalCost
        if (currItem === "butter") {
            totalCost += 1;
        } else if (currItem === "eggs") {
            totalCost += 2;
        } else if (currItem === "milk") {
            totalCost += 3;
        } else if (currItem === "bread") {
            totalCost += 4;
        } else if (currItem === "cheese") {
            totalCost += 5;
        }
    }

    return totalCost;
}

function mostExpensiveGroceries(groceriesList) {
    // create "empty container" to hold largestTotalCost = 0
    let largestTotalCost = 0;
    // create "empty container" to hold indexOfMostExpensive = 0
    let indexOfMostExpensive = 0;

    // loop through groceriesList
    for (let i = 0; i < groceriesList.length; i++) {
        // Each val in groList = subArray
        // Each subarray hold strings of groceries
        let currList = groceriesList[i];

        // for each subarray, find sum of all groceries //!!!!!!!!!!!!!
        // save the currentTotalCost to a variable
        let currentTotalCost = costOfGroceries(currList);
        // console.log(currList, currentTotalCost)

        // if my currentCost > largestCost
        if (currentTotalCost > largestTotalCost) {
            // update largestCost to be the currentCost
            largestTotalCost = currentTotalCost;
            // AND update indexOfMostExpensive to be current "i" value
            console.log(i);
            indexOfMostExpensive = i;
        }
    }

    return indexOfMostExpensive;
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

const groceriesA = ["cheese", "butter", "eggs"];
const groceriesB = ["eggs", "milk", "bread", "bread"];
const groceriesC = ["cheese", "bread"];
const groceriesD = ["eggs", "butter"];

costOfGroceries(groceriesA); // 8
costOfGroceries(groceriesB); // 13
costOfGroceries(groceriesC); // 9
costOfGroceries(groceriesD); // 3

// mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);

let score = 0;

// if (costOfGroceries(groceriesA) === 8) score++;
// if (costOfGroceries(groceriesB) === 13) score++;
// if (costOfGroceries(groceriesC) === 9) score++;
// if (costOfGroceries(groceriesD) === 3) score++;

if (
    mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) ===
    1
)
//     score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
// if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;

console.log("You have scored " + score + "/7 points.");

// //! Third Helper Version
// function unitPrice(singleGroceryItem) {
//     if (singleGroceryItem === "butter") {
//         return 1;
//     } else if (singleGroceryItem === "eggs") {
//         return 2;
//     } else if (singleGroceryItem === "milk") {
//         return 3;
//     } else if (singleGroceryItem === "bread") {
//         return 4;
//     } else {
//         return 5;
//     }
// }

// function costOfGroceries(groceries) {
//     let totalCost = 0;

//     for (let i = 0; i < groceries.length; i++) {
//         let currItem = groceries[i];

//         totalCost += unitPrice(currItem);
//     }

//     return totalCost;
// }

// //! Less variables, maybe harder to read but faster to write
// function mostExpensiveGroceries(groceriesList) {
//     let cost = 0;
//     let answer = 0;

//     for (let i = 0; i < groceriesList.length; i++) {
//         if (costOfGroceries(groceriesList[i]) > cost) {
//             cost = costOfGroceries(groceriesList[i]);

//             answer = i;
//         }
//     }

//     return answer;
// }
