class DynamicArray {
    constructor(defaultSize = 4) {
        this.length = 0;
        this.capacity = defaultSize;
        this.data = new Array(defaultSize);
    }

    read(index) {
        return this.data[index];
    }

    unshift(val) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }

        this.data[0] = val;
        this.length++;

        console.log(this.data);
    }

    //! Not what we're looking for
    // unshift(val) {
    //     this.data = [val, ...this.data];

    //     this.length++;

    //     console.log(this.data);
    // }

    //! Not what we're looking for
    // unshift(val) {
    //     const newArr = [];

    //     newArr.push(val);

    //     for (let i = 0; i < this.data.length; i++) {
    //         newArr.push(this.data[i]);
    //     }

    //     this.data = newArr;

    //     this.length++;

    //     console.log(this.data);
    // }
}

module.exports = DynamicArray;
