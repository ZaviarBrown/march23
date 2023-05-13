class DynamicArray {
    constructor(defaultSize = 4) {
        this.data = new Array(defaultSize);
        this.capacity = defaultSize;
        this.length = 0;
    }

    read(index) {
        return this.data[index];
    }

    push(val) {
        if (this.length === this.capacity) this.resize();

        this.data[this.length] = val;
        this.length++;

        return this.length;
    }

    pop() {
        if (!this.length) return undefined;

        const popped = this.data[this.length - 1];
        this.data[this.length - 1] = undefined;

        this.length--;

        return popped;
    }

    shift() {
        if (!this.length) return undefined;

        const shifted = this.data[0];

        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i + 1];
        }

        this.length--;

        return shifted;
    }

    unshift(val) {
        if (this.length === this.capacity) this.resize();

        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[0] = val;

        this.length++;

        return this.length;
    }

    indexOf(val) {
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === val) return i;
        }

        return -1;
    }

    resize() {
        const copyArr = this.data;

        this.capacity *= 2;
        this.data = new Array(this.capacity);

        for (let i = 0; i < this.length; i++) {
            this.data[i] = copyArr[i];
        }
    }
}

module.exports = DynamicArray;
