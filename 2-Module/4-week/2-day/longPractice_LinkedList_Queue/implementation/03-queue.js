const { SinglyLinkedNode } = require("./01-singly-linked-list");

//!
/**
 ** Queues are First In First Out
 * Queues always add to the back and remove from the front
 * Think of it like a line at the grocery store
 *
 * Enqueue: add to the back of the queue
 * Dequeue: remove from the front of the queue
 *
 * Queues can be implemented with an array:
 *! Enqueue === arr.push()
 *! Dequeue === arr.shift()
 *
 * The problem is arr.shift() has an O(n) time complexity, since every value
 * needs to be copied over to a new array in memory.
 *
 * Queues can also be implemented as a linked list:
 *? Enqueue === addToTail()
 *? Dequeue === removeFromHead()
 *
 * Now our Queue operates in O(1) time complexity for both methods!
 */

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //? Exactly the same as addToTail()
    //? O(1)
    enqueue(val) {
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        return ++this.length;

        // this.length++
        // return this.length

        /** Remember Prefix vs Postfix? It makes a difference here!!!
         * If we say:
         *! return this.length++
         *
         * What we're actually doing is returning the current .length value,
         * and only after the value is returned will the .length get incremented
         *
         * But if we say:
         *? return ++this.length
         *
         * Our .length value gets incremented first, THEN we return
         *
         * If we want to prefix, we have to say:
         *? this.length++
         *? return this.length
         *
         * In the end, it amounts to a single line of code difference, doesn't
         * really matter how you choose to write it, as long as you don't do it
         * the way shown on line 53
         */
    }

    //? Exactly the same as removeFromHead()
    //? O(1)
    dequeue() {
        if (!this.head) return null;

        const removed = this.head.value;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }

        this.length--;
        return removed;
    }
}

module.exports = {
    Queue,
    SinglyLinkedNode,
};
