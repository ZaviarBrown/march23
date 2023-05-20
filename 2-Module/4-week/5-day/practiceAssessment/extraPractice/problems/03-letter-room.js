/******************************************

Before implementing the methods in this file, finish the methods in the
`LetterBin` class found in the `./problems/02-letter-bin.js` file.


The second class is called `LetterRoom`. `LetterRoom` should hold a queue of
`LetterBin`'s. There are methods on the class to add and remove a bin from the
queue. There are also methods to get the first and last bin in the queue without
removing them. Finally, there's a method to get the total number of bins in the
queue. Implement these methods.

******************************************/

const LetterBin = require("./02-letter-bin");

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

class LetterRoom {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    getLastBin() {
        // if there are no bins in the queue, return null
        if (!this.head) return null;

        // return the last bin added to the queue
        return this.tail.value;
    }

    getFirstBin() {
        // if there are no bins in the queue, return null
        if (!this.head) return null;

        // return the first bin added to the queue
        return this.head.value;
    }

    numBins() {
        return this.length;
    }

    addBin() {
        // create a new bin
        const newBin = new LetterBin();

        // create new node
        const newNode = new Node(newBin, null);

        // add it to the end of the queue
        //! addToTail()
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        // returns the newly created bin
        return newBin;
    }

    removeBin() {
        if (!this.head) return null;

        // remove the bin at the beginning of the queue
        //! removeFromHead()
        const removed = this.head;

        this.head = this.head.next;

        this.length--;

        // returns the removed bin
        return removed.value;
    }
}

module.exports = LetterRoom;
