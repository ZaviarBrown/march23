function stringChanger(word, operation) {
    // check the value of operation

    // if cap, capital first char
    if (operation === "capitalize") {
        // find the first character, save to variable
        let firstChar = word[0];
        // find rest of word, save to variable
        let restOfWord = word.slice(1);

        let capitalVersion = firstChar.toUpperCase();
        // return firstChar.toUpperCase() + rest of word
        return capitalVersion + restOfWord;
    }
    // if upper, capital whole string/*
    else if (operation === "uppercase") {
        let capitalVerion = word.toUpperCase();
        return capitalVerion;
        // return word.toUpperCase();
    }

    // if double, return word+word
    else if (operation === "double") {
        return word + word;
    }

    // if reverse, return reversed word
    else if (operation === "reverse") {
        // create a "empty container" finalStr
        let finalStr = "";
        // loop backwards over my word
        for (let i = word.length - 1; i >= 0; i--) {
            // console.log("---New loop---")
            let currLetter = word[i];
            // console.log(currLetter, "current letter being looked at")

            // add each character to finalStr
            finalStr += currLetter;

            // console.log(finalStr, "finalStr's current value")
        }

        return finalStr;
    }
    else {
        return word;
    }
    // all other cases, return word unchanged
    // else if (operation === "unknown") {
    //     return word;
    // }
}

// TESTS
// DO NOT MODIFY ANYTHING BELOW THIS LINE

let score = 0;

if (stringChanger("foo", "capitalize") === "Foo") score++;
if (stringChanger("foo", "uppercase") === "FOO") score++;
if (stringChanger("foo", "double") === "foofoo") score++;
if (stringChanger("foo", "reverse") === "oof") score++;

if (stringChanger("foo", "unknown") === "foo") score++;

console.log("You have scored " + score + "/5 points.");

// if (stringChanger("foo", "unknown") === "foo") score++;
// if (stringChanger("foo", "+") === "foo") score++;
// if (stringChanger("foo", "fijefefuhu") === "foo") score++;
// console.log("You have scored " + score + "/7 points.");

