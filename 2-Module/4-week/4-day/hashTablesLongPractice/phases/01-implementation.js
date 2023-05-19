class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    // get O(1), set O(1), deleteKey O(1)

    constructor(numBuckets = 8) {
        this.count = 0;
        this.capacity = numBuckets;
        this.data = new Array(numBuckets).fill(null);
    }

    hash(key) {
        let hashValue = 0;

        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i);
        }

        return hashValue;
    }

    hashMod(key) {
        // Get index after hashing
        return this.hash(key) % this.capacity;
    }

    insert(key, value) {
        if (this.count / this.capacity > 0.7) this.resize();

        const newData = new KeyValuePair(key, value);

        const index = this.hashMod(key);

        if (!this.data[index]) {
            this.data[index] = newData;
        } else {
            let currData = this.data[index];

            while (currData) {
                if (currData.key === key) {
                    currData.value = value;
                    return;
                }

                currData = currData.next;
            }

            newData.next = this.data[index];

            this.data[index] = newData;
        }

        this.count++;
    }

    read(key) {
        let find = this.data[this.hashMod(key)];

        if (find) {
            while (find) {
                if (find.key === key) return find.value;

                find = find.next;
            }
        }
    }

    resize() {
        const oldData = this.data;
        this.capacity *= 2;
        this.data = new Array(this.capacity).fill(null);
        this.count = 0;

        oldData.forEach((el) => {
            while (el) {
                this.insert(el.key, el.value);
                el = el.next;
            }
        });
    }

    delete(key) {
        let find = this.data[this.hashMod(key)];

        if (find) {
            if (find.key === key) {
                this.data[this.hashMod(key)] = find.next;
                this.count--;
            } else {
                while (find.next) {
                    if (find.next.key === key) {
                        find.next = find.next.next;
                        this.count--;
                        return;
                    }

                    find = find.next;
                }
            }
        }
        return "Key not found";
    }
}

module.exports = HashTable;
