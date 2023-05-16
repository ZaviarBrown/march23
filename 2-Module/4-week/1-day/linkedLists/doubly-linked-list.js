class DoublyLinkedListNode {
    constructor(val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedListNode(val);

        if (!this.head) {
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
        }

        this.head = newNode;
        this.length++;
    }

    addToTail(val) {
        const newNode = new DoublyLinkedListNode(val);

        if (!this.tail) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
        this.length++;
    }

    //? Less dry
    // addToHead(val) {
    //     const newNode = new DoublyLinkedListNode(val);

    //     if (!this.head) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         newNode.next = this.head;
    //         this.head.prev = newNode;
    //         this.head = newNode;
    //     }

    //     this.length++;
    // }

    //? Less dry
    // addToTail(val) {
    //     const newNode = new DoublyLinkedListNode(val);

    //     if (!this.tail) {
    //         this.head = newNode;
    //         this.tail = newNode;
    //     } else {
    //         this.tail.next = newNode;
    //         newNode.prev = this.tail;
    //         this.tail = newNode;
    //     }

    //     this.length++;
    // }

    //! Kind of ugly
    // addToTail(val) {
    //     const newNode = new DoublyLinkedListNode(val);

    //     if (!this.tail) return this.addToHead(val);

    //     this.tail.next = newNode;
    //     newNode.prev = this.tail;
    //     this.tail = newNode;
    //     this.length++;
    // }

    // You can use this function to help debug
    print() {
        let current = this.head;

        while (current) {
            process.stdout.write(`${current.value} <-> `);
            current = current.next;
        }

        console.log("NULL");
    }
}

module.exports = DoublyLinkedList;
