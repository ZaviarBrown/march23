function anagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const charTracker = {};

    for (const char of str1) {
        if (!charTracker[char]) {
            charTracker[char] = 1;
        } else {
            charTracker[char]++;
        }
    }

    for (const char of str2) {
        if (charTracker[char]) {
            charTracker[char]--;
        } else return false;
    }

    return true;
}

// function anagrams(str1, str2) {
//     const set = new Set(str1);
//     const set2 = new Set(str2);

//     console.log(set);
//     console.log(set2);

//     if (set.size !== set2.size) return false;

//     for (let num of str2) {
//         if (!set.has(num)) {
//             return false;
//         }
//     }

//     return true;
// }

// function commonElements(arr1, arr2) {
//     const firstSet = new Set(arr1);
//     const commons = [];

//     for (const num of arr2) {
//         if (firstSet.has(num)) {
//             commons.push(num);
//         }
//     }

//     return commons;
// }

function commonElements(arr1, arr2) {
    const firstSet = new Set(arr1);

    return arr2.filter((num) => firstSet.has(num));
}

function duplicate(arr) {
    const noDupes = new Set();

    for (const num of arr) {
        if (!noDupes.has(num)) noDupes.add(num);
        else return num;
    }
}

function twoSum(nums, target) {
    const otherNums = new Set();

    for (const num of nums) {
        const theOtherNum = target - num;

        if (otherNums.has(theOtherNum)) return true;
        else otherNums.add(num);
    }

    return false;
}

function wordPattern(pattern, strings) {
    const pairs = {};
    const seenWords = new Set();

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = strings[i];

        if (!pairs[letter]) {
            if (seenWords.has(word)) return false;

            pairs[letter] = word;
            seenWords.add(word);
        } else if (pairs[letter] !== word) return false;
    }

    return true;
}

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
