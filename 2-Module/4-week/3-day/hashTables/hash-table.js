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
        const hashStr = sha256(key);
        const first8 = hashStr.slice(0, 8);

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

    //! Basically an addToHead()
    insertWithHashCollisions(key, value) {
        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        if (this.data[index]) {
            newData.next = this.data[index];
        }

        this.data[index] = newData;

        this.count++;
    }

    insert(key, value) {
        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        if (this.data[index]) {
            let currData = this.data[index];

            while (currData) {
                if (currData.key === key) {
                    currData.value = value;
                    return;
                }

                currData = currData.next;
            }

            newData.next = this.data[index];
        }

        this.data[index] = newData;

        this.count++;
    }

    // insert(key, value) {
    //     let mod = this.hashMod(key);
    //     // const pair = new KeyValuePair(key, value);
    //     let wi = this.data[mod];

    //     if (wi === null) {
    //         this.data[mod] = new KeyValuePair(key, value);
    //         this.count++;
    //         return;
    //     }

    //     while (wi !== null) {
    //         if (wi.key === key) {
    //             wi.value = value;
    //             return;
    //         }
    //         wi = wi.next;
    //     }

    //     const pair = new KeyValuePair(key, value);
    //     pair.next = this.data[mod]

    //     this.data[mod] = pair;
    //     this.count++;
    // }
}

module.exports = HashTable;
