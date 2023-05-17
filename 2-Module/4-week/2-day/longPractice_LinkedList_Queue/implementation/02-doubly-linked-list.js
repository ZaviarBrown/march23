// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedNode(val);

        // Since we have a previous pointer, we have to remember to also update
        // the old head to point backwards to our newNode, which is the new head
        if (this.head) {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        //? O(1)
    }

    addToTail(val) {
        const newNode = new DoublyLinkedNode(val);

        if (this.tail) {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;

        //? O(1)
    }

    removeFromHead() {
        if (!this.head) return;

        const removed = this.head.value;

        // If there's only one value, head and tail point to the same node
        // So both must be set to null after removal
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head === this.tail.prev) {
            // If list is 2 nodes long, head and tail.prev point to same node
            // So tail.prev needs to be set to null after removal
            this.head = this.head.next;
            this.tail.prev = null;
        } else {
            // In all other cases, we set the head to the next node
            // But also update the new head.prev to null
            this.head = this.head.next;
            this.head.prev = null;
        }

        this.length--;
        return removed;
        //? O(1)
    }

    removeFromTail() {
        if (!this.head) return;

        const removed = this.tail.value;

        // If there's only one value, head and tail point to the same node
        // So both must be set to null after removal
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head.next === this.tail) {
            // If list is 2 nodes long, head.next and tail point to same node
            // So head.next needs to be set to null after removal
            this.tail = this.tail.prev;
            this.head.next = null;
        } else {
            // In all other cases, we set the tail to the prev node
            // But also update the new tail.next to null
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        this.length--;
        return removed;
        //? O(1)
    }

    // //? DRYer removeFromHead()
    // removeFromHead() {
    //     if (!this.head) return;

    //     const removed = this.head.value;

    //     if (this.head === this.tail) {
    //         this.head = null;
    //         this.tail = null;
    //     } else {
    //         this.head = this.head.next;
    //         if (this.head) this.head.prev = null;
    //     }

    //     this.length--;
    //     return removed;
    //     //? O(1)
    // }

    // //? DRYer removeFromTail()
    // removeFromTail() {
    //     if (!this.head) return;

    //     const removed = this.tail.value;

    //     if (this.head === this.tail) {
    //         this.head = null;
    //         this.tail = null;
    //     } else {
    //         this.tail = this.tail.prev;
    //         if (this.tail) this.tail.next = null;
    //     }

    //     this.length--;
    //     return removed;
    //     //? O(1)
    // }

    peekAtHead() {
        if (!this.head) return;

        return this.head.value;
        //? O(1)
    }

    peekAtTail() {
        if (!this.head) return;

        return this.tail.value;
        //? O(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode,
};
