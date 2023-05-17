// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new SinglyLinkedNode(val);

        // Our new node will point to whatever used to be the head
        newNode.next = this.head;

        // The head will now point to our new node
        this.head = newNode;

        this.length++;

        // They ask us to return the entire list, which is this current instance
        return this;
        //? O(1)
    }

    addToTail(val) {
        const newNode = new SinglyLinkedNode(val);

        // If we don't have a head node, then our list is empty, so setting the
        // head to our newNode is the same as setting our
        if (!this.head) {
            this.head = newNode;
        } else {
            // Since we don't have a tail property, we have to manually loop
            // through the whole list
            let curr = this.head;

            // Once we find the last node, we need to stop. We know we're at the
            // last node when there's nothing that comes next.
            while (curr.next) {
                curr = curr.next;
            }

            // Set the old last node to point to our newNode, making our node
            // the new final value in the list, aka the tail
            curr.next = newNode;
        }

        this.length++;

        return this;
        //? O(n)
    }

    removeFromHead() {
        if (!this.head) return;

        // Save a reference to the node being removed
        const removed = this.head;

        // Set the new head to the node that comes after the current head
        this.head = this.head.next;

        this.length--;

        return removed;
        //? O(1)
    }

    removeFromTail() {
        // If the list is empty, return undefined
        if (!this.head) return;

        /**
         * If there's no head.next value, that means our linked list only has
         * one value in it. So when we remove the tail, we're also removing the
         * head, which means we need to set the head to null
         */

        if (!this.head.next) {
            const removed = this.head;

            //? also working code => this.head = this.head.next
            this.head = null;

            this.length--;
            return removed;
        }

        /**
         * In all other cases, we need to search for the 2nd to last node.
         * Because we don't have a .prev on our nodes, we need to stop before
         * we're at the very last node.
         * That way, we can save the save the last node's data and set the 2nd
         * to last node's .next value to be null, making it the the new tail.
         */

        // Start at the head and loop to find the 2nd to last node
        let secondToLast = this.head;

        // Since we have to stop at the 2nd to last, we need to keep looping
        // until the currentNode.next.next is null
        while (secondToLast.next.next) {
            secondToLast = secondToLast.next;
        }

        const removed = secondToLast.next;

        // Set the 2nd to last node's .next to null, making it the new last node
        secondToLast.next = null;
        this.length--;

        return removed;
        //? O(n)
    }

    peekAtHead() {
        return this.head ? this.head.value : undefined;
        //? O(1)
    }

    print() {
        if (!this.head) return null;

        let currentNode = this.head;

        while (currentNode) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }

        return null;
        //? O(n)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode,
};
