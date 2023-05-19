// const anagrams = (str1, str2) => {
//     if (str1.length !== str2.length) return false;

//     const newSet1 = new Set(str1);
//     const newSet2 = new Set(str2);

//     for (let i = 0; i < str1.length; i++) {
//         if (!newSet2.has(str1[i])) return false;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         if (!newSet1.has(str2[i])) return false;
//     }

//     return true;
// };

function anagrams(str1, str2) {
    if (str1.length !== str2.length) return false;

    const tracker = {};

    for (const letter of str1) {
        if (!tracker[letter]) {
            tracker[letter] = 1;
        } else {
            tracker[letter]++;
        }
    }

    for (const letter of str2) {
        if (!tracker[letter]) return false;
        else {
            tracker[letter]--;
        }
    }

    return true;
}

// function commonElements(arr1, arr2) {
//     // Your code here
// }

// function duplicate(arr) {
//     // Your code here
// }

function commonElements(arr1, arr2) {
    // Your code here
    const newSet = new Set(arr1);
    const result = [];

    for (const num of arr2) {
        if (newSet.has(num)) {
            result.push(num);
        }
    }
    return result;
}

function duplicate(arr) {
    const newSet = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (!newSet.has(arr[i])) {
            newSet.add(arr[i]);
        } else {
            return arr[i];
        }
    }
}

function twoSum(nums, target) {
    const otherValues = new Set();

    for (const num of nums) {
        if (otherValues.has(num)) return true;

        const otherNum = target - num;

        otherValues.add(otherNum);
    }

    return false;
}

function wordPattern(pattern, strings) {
    const pair = {};
    const seenWords = new Set();

    for (let i = 0; i < pattern.length; i++) {
        const letter = pattern[i];
        const word = strings[i];

        if (!pair[letter]) {
            if (seenWords.has(word)) return false;

            pair[letter] = word;
            seenWords.add(word);
        } else if (pair[letter] !== word) return false;
    }

    return true;
}

// const wordPattern = (pattern, strings) => {
//     if (pattern.length !== strings.length) {
//         return false;
//     }
//     const obj1 = {};
//     const obj2 = {};
//

//     for (let i = 0; i < pattern.length; i++) {
//         const letter = pattern[i];

//         if (obj1[letter] === undefined) {
//             obj1[letter] = i;

//         }

//     }
//     for (let i = 0; i < pattern.length; i++) {
//         const word = strings[i];

//         if (obj2[word] === undefined) {
//             obj2[word] = i;

//         }
//     }

//     let letterStr = "";
//     let wordStr = "";

//     for (let i = 0; i < pattern.length; i++) {
//         const letter = pattern[i];
//         const word = strings[i];

//         letterStr += obj1[letter];
//         wordStr += obj2[word];
//     }

//     return letterStr === wordStr;
// };

// const wordPattern = (pattern, strings) => {
//     if (pattern.length !== strings.length) {
//         return false;
//     }
//     const obj1 = {};
//     const obj2 = {};

//     for (let i = 0; i < pattern.length; i++) {
//         const letter = pattern[i];

//         if (obj1[letter] === undefined) {
//             obj1[letter] = `${i}`;
//         } else {
//             obj1[letter] += `${i}`;
//         }
//     }
//     for (let i = 0; i < pattern.length; i++) {
//         const word = strings[i];

//         if (obj2[word] === undefined) {
//             obj2[word] = `${i}`;
//         } else {
//             obj2[word] += `${i}`;
//         }
//     }

//     const allLetters = Object.values(obj1);
//     const allWords = Object.values(obj2);

//     for (let i = 0; i < allLetters.length; i++) {
//         if (allLetters[i] !== allWords[i]) return false;
//     }

//     return true;
// };

module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
