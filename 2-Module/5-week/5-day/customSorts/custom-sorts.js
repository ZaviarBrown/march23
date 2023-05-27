function ageSort(users) {
    return users.sort((a, b) => a.age - b.age);
}

function oddEvenSort(arr) {
    return arr.sort((a, b) => {
        debugger;
        const aIsOdd = a % 2;
        const bIsOdd = b % 2;

        // Handle two odd numbers
        if (aIsOdd && bIsOdd) {
            return a - b;
        }

        // Handle two even numbers
        if (!aIsOdd && !bIsOdd) {
            return a - b;
        }

        if (aIsOdd) return -1;
        else return 1;
    });
}

function validAnagrams(s, t) {
    const sortS = s.split("").sort().join("");
    const sortT = t.split("").sort().join("");

    return sortS === sortT;
}

function reverseBaseSort(arr) {
    //? My Solution
    return arr.sort((a, b) => {
        const aLength = `${a}`.length;
        const bLength = `${b}`.length;

        if (aLength === bLength) return a - b;
        return b - a;
    });

    // //! App Academy's Math solution 🤮
    // return arr.sort((a, b) => {
    //     let baseA = Math.floor(Math.log10(a));
    //     let baseB = Math.floor(Math.log10(b));
    //     if (baseA === baseB) return a - b;
    //     else return baseB - baseA;
    // });
}

function frequencySort(arr) {
    const count = {};
    for (const num of arr) {
        if (!count[num]) count[num] = 0;
        count[num]++;
    }
    return arr.sort((a, b) => {
        if (count[a] === count[b]) return b - a;
        else if (count[a] > count[b]) return 1;
        else return -1;
    });
}

module.exports = [
    oddEvenSort,
    validAnagrams,
    reverseBaseSort,
    frequencySort,
    ageSort,
];
