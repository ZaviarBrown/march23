class LinkedListNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new LinkedListNode(val);

        newNode.next = this.head;

        this.head = newNode;

        this.length++;
    }

    addToTail(val) {
        const newNode = new LinkedListNode(val);

        // console.log(`---------New Add To Tail ${val}-----------`);

        // this.print();
        if (!this.head) {
            this.head = newNode;
        } else {
            let findTail = this.head;

            // while (findTail.next !== null) {
            while (findTail.next) {
                findTail = findTail.next;
            }

            findTail.next = newNode;
        }
        // this.print();

        this.length++;
    }

    // You can use this function to help debug
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} -> `);
            current = current.next;
        }

        console.log("NULL");
    }
}

// let i = 0;

// for (; i < "abc".length; ) {
//     console.log("abc"[i]);
//     i++;
// }

// console.log(i);

module.exports = LinkedList;
