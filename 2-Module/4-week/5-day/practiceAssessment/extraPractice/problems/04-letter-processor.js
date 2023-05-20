/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterRoom` class found in the `./problems/03-letter-room.js` file.


The final class is called `LetterProcessor`. `LetterProcessor` should be
initialized with a maximum amount of letters in can add in a bin,
`maxLettersPerBin`. Each instance should have its own `LetterRoom`. Implement
the method to add a letter to last `LetterBin` added to its `LetterRoom`. The
letter should be added to the top of that `LetterBin`'s stack.
Implement the method to remove a letter from the first `LetterBin` added to
`LetterProcessor`'s `LetterRoom`. The letter should be removed from the top of
that `LetterBin`'s stack.

******************************************/

const LetterRoom = require("./03-letter-room");

class LetterProcessor {
    constructor(maxLettersPerBin) {
        this.letterRoom = new LetterRoom();
        this.maxLettersPerBin = maxLettersPerBin;
    }

    addLetter(message) {
        // get last bin
        let lastBin = this.letterRoom.getLastBin();

        // if the last bin added is full, add a new bin to the letter room
        if (!lastBin || lastBin.numLetters() === this.maxLettersPerBin) {
            lastBin = this.letterRoom.addBin();
        }

        // add a letter with the specified message
        lastBin.addLetter(message);
    }

    removeLetter() {
        // get first bin
        const firstBin = this.letterRoom.getFirstBin();

        // if there are no more letters, then console.log 'No more letters to process!'
        if (!firstBin) {
            return console.log("No more letters to process!");
        }

        // remove a letter from the first bin added to the letter room
        const removed = firstBin.removeLetter();

        // if the first bin is empty after removing the letter, remove the bin from the letter room
        if (!firstBin.numLetters()) {
            this.letterRoom.removeBin();
        }

        return removed;
    }
}

module.exports = LetterProcessor;
