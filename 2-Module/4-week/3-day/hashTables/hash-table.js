const sha256 = require("js-sha256");

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}



class HashTable {
    constructor(numBuckets = 4) {
        this.count = 0;
        this.capacity = numBuckets;
        this.data = new Array(numBuckets).fill(null);
    }

    hash(key) {
        const hashedStr = sha256(key);

        const first8 = hashedStr.slice(0, 8);

        return parseInt(first8, 16);
        // return Number(`0x${first8}`);
    }

    hashMod(key) {
        return this.hash(key) % this.capacity;
    }

    insertNoCollisions(key, value) {
        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        if (this.data[index]) {
            throw new Error(
                "hash collision or same key/value pair already exists!"
            );
        }

        this.data[index] = newData;

        this.count++;
    }

    // if (this.data[index]) {
    //     newData.next = this.data[index];
    //     this.data[index] = newData;
    // } else {
    //     this.data[index] = newData;
    // }

    // This is just like addToHead()
    insertWithHashCollisions(key, value) {
        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        /**
         * If something already exists at this current index
         * do the addToHead thing
         *
         * this.data[index] === this.head
         * newData === newNode
         *
         * newData will point to old this.data[index]
         * this.data[index] is the front of the line, so that's where newData goes
         */
        if (this.data[index]) {
            newData.next = this.data[index];
        }

        this.data[index] = newData;

        this.count++;
    }

    // insert(key, value) {
    //     const newData = new KeyValuePair(key, value);

    //     const index = this.hashMod(key);

    //     if (this.data[index]) {
    //         let currData = this.data[index];

    //         while (currData) {
    //             if (currData.key === key) {
    //                 currData.value = value;

    //                 return;
    //             }

    //             currData = currData.next;
    //         }

    //         newData.next = this.data[index];
    //     }

    //     this.data[index] = newData;

    //     this.count++;
    // }

    update(index, newData) {
        // Check if we should update instead of handle collision

        let currData = this.data[index];

        // Start at the "head" and iterate through entire linked list
        while (currData) {
            // If we find a node.key in our list that matches the key of our new data
            if (currData.key === newData.key) {
                // Overwrite our old data with the new data
                currData.value = newData.value;

                // Exist our linked list and tell insert() that we updated
                return true;
            }

            // Move to the next node in the linked list
            currData = currData.next;
        }

        // If we reach this line, we didn't find a node to update
        // So, let insert() know that we didn't update
        return false;
    }

    insert(key, value) {
        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        if (this.data[index]) {
            // if update() returns true, we updated, so no need to handle a collision
            if (this.update(index, newData)) return;

            // if not, handle the collision
            newData.next = this.data[index];
        }

        this.data[index] = newData;

        this.count++;
    }
}

module.exports = HashTable;
