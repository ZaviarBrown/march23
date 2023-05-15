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
        // Create a new node using passed in val
        const newNode = new LinkedListNode(val);
        // console.log("\n\n this is newNode =>", newNode);

        // Our new node will replace the current head
        // So, our newNode will point to the OLD head
        // So so, newNode.next with be our current this.head
        newNode.next = this.head;

        // Set the head to our newNode
        this.head = newNode;
        // console.log("\n\n this is the head =>", this.head);

        // Every time we add a new node, increment our length
        this.length++;
    }

    // addToHead(val) {
    //     const newNode = new LinkedListNode(val);

    //     newNode.next = this.head;

    //     this.head = newNode;

    //     this.length++;
    // }

    addToTail(val) {
        // Create a new node using passed in val
        const newNode = new LinkedListNode(val);

        // If I don't have a head, then my tail is my head
        if (!this.head) {
            this.head = newNode;
        } else {
            // Start at the head
            let findTail = this.head;

            // Search through our list until we find the tail
            // We know we've found the tail when we've reached a node that has
            // a .next of null
            //? while (findTail.next !== null)
            while (findTail.next) {
                findTail = findTail.next;
            }

            // Set the tail's .next to our newNode
            findTail.next = newNode;
        }

        this.length++;
    }

    // addToTail(val) {
    //     const node = new LinkedListNode(val);
    //     if (!this.tail) {
    //         this.head = node;
    //         this.tail = node;
    //     }

    //     let cur = this.head;
    //     for (let i = 1; i < this.length; i++) {
    //         cur = cur.next;
    //     }

    //     cur.next = node;
    //     this.tail = node;
    //     this.length++;
    // }

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

module.exports = LinkedList;
