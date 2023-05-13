const findMinimum = (arr) =>
    arr.reduce((smol, next) => (smol < next ? smol : next), arr[0]);

const runningSum = (arr) => {
    const final = [];

    arr.reduce((prev, next) => {
        const sum = prev + next;
        final.push(sum);
        return sum;
    }, 0);

    return final;
};

const evenNumOfChars = (arr) => {
    return arr.reduce((total, str) => {
        if (!(str.length % 2)) total++;
        return total;
    }, 0);
};

const smallerThanCurr = (arr) => {
    const final = [];

    arr.forEach((num) => {
        const numSmaller = arr.reduce((total, nextNum) => {
            if (num > nextNum) total++;
            return total;
        }, 0);

        final.push(numSmaller);
    });

    return final;
};

const twoSum = (arr, target) => {
    const tracker = {};
    for (const num of arr) {
        const difference = target - num;

        if (tracker[difference]) {
            return true;
        } else {
            tracker[num] = difference;
        }
    }
    return false;
};

const secondLargest = (arr) => {
    arr.sort();

    arr.pop();

    return arr.pop();
};

//! My original version of shuffle
const shuffle = (arr) => {
    const copyArr = [...arr];
    const finalArr = [];

    while (finalArr.length < copyArr.length) {
        const rng = Math.floor(Math.random() * copyArr.length);

        if (copyArr[rng] !== null) {
            finalArr.push(copyArr[rng]);
            copyArr[rng] = null;
        }
    }

    return finalArr;
};

// //? Much better version of shuffle
// const shuffle = (arr) => {
//     const copyArr = [...arr];

//     for (let i = 0; i < copyArr.length; i++) {
//         const rng = Math.floor(Math.random() * copyArr.length);

//         [copyArr[i], copyArr[rng]] = [copyArr[rng], copyArr[i]];
//     }

//     return copyArr;
// };

module.exports = [
    findMinimum,
    runningSum,
    evenNumOfChars,
    smallerThanCurr,
    twoSum,
    secondLargest,
    shuffle,
];
