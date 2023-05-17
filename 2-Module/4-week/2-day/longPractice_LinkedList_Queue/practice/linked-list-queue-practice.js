// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this.head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
        }

        this.length++;
        return this.head;
    }

    listLength() {
        return this.length;
    }

    // This is why we choose to manually set a .length property, much faster
    // to just return the .length than iterating through the whole list!
    listLengthLinearTime() {
        let counter = 0;
        let curr = this.head;

        while (curr) {
            curr = curr.next;
            counter++;
        }

        return counter;
    }

    sumOfNodes() {
        let sum = 0;
        let curr = this.head;

        while (curr) {
            sum += curr.value;
            curr = curr.next;
        }

        return sum;
        //? O(n)
    }

    averageValue() {
        return this.sumOfNodes() / this.length;

        //? O(n)
    }

    findNthNode(n) {
        // n is zero indexed

        if (this.length < n) return null;

        let findNode = this.head;

        for (let i = 0; i < n; i++) {
            findNode = findNode.next;
        }

        return findNode;
        //? O(n)
    }

    findMid() {
        // Since we already have a findNthNode, we simply have to pass it the
        // halfway point, which we can easily calculate from our .length

        const mid = Math.floor((this.length - 1) / 2);
        return this.findNthNode(mid);
        //? O(n)
    }

    reverse() {
        const newList = new SinglyLinkedList();
        let currNode = this.head;

        /**
         * addToHead() works similarly to arr.unshift()
         * This means that if we start at the beginning of our LL and call
         * newList.addToHead() on every value, we'll create a new list in reverse order
         *
         * Array Example (Same as Linked List)
         * const arr = [1, 2, 3, 4, 5]
         * const newArr = []
         *
         * newArr.unshift(arr[0]) // [1]
         * newArr.unshift(arr[1]) // [2, 1]
         * newArr.unshift(arr[2]) // [3, 2, 1]
         * newArr.unshift(arr[3]) // [4, 3, 2, 1]
         * newArr.unshift(arr[3]) // [5, 4, 3, 2 ,1 ]
         *
         */

        while (currNode) {
            newList.addToHead(currNode.value);
            currNode = currNode.next;
        }

        //? O(n)
        return newList;
    }

    //? O(n^2) time, O(1) space
    reverseInPlace() {
        // Stop our loop once we've reached the halfway point of the LL
        const stop = Math.floor(this.length / 2);

        // Since we don't have a tail value, we have to manually find the last
        // node that we haven't swapped the value of yet. We'll keep track of
        // its position and decrement it as we loop
        let tailPosition = this.length - 1;

        // Keep track of the first node we haven't swapped yet
        let front = this.head;

        for (let i = 0; i < stop; i++) {
            // Use the method we built to find the last un-swapped node
            let back = this.findNthNode(tailPosition);

            // Array destructuring to swap the values of the nodes
            // Look at a/A's readings on array destructuring for more info
            [front.value, back.value] = [back.value, front.value];

            // move our
            front = front.next;
            tailPosition--;
        }

        return this;
    }

    // //? O(n) time, O(1) space
    // //! This version of the solution is a disaster to type an explanation for,
    // //! but if you're eager to understand it, try drawing it out!
    // reverseInPlace() {
    //     if (!this.head) return this;

    //     let curr = this.head;
    //     let next = curr;
    //     let prev = null;

    //     while (next) {
    //         next = curr.next;
    //         curr.next = prev;
    //         prev = curr;
    //         curr = next;
    //     }

    //     this.head = prev;
    //     return this;
    // }
}

class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(head = null) {
        this.head = head;
        this.tail = head;
        this.length = 0;
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this.head;
    }

    findMid() {
        /**
         * In this version, we don't have an implementation of findNthNode.
         * We could go out of our way to find it, but we don't have to!
         * Instead, we can start at our head and tail and walk backwards until
         * one of two conditions are met:
         *
         *? 1. Our current "front" node overlaps with our current "back" node
         * This will happen when our LL has an odd number of values
         * (1)<-->(2)<-->(3)<-->(4)<-->(5)
         * Here if we start counting from both ends, we'll meet at (3)
         *
         *? 2. Our current "front.next" node is our current "back" node
         * This will happen when our LL has an even number of values
         * (1)<-->(2)<-->(3)<-->(4)<-->(5)<-->(6)
         * Here if we start counting from both ends, we'll reach a point where
         * "front" is (3) and "back" is (4). Since the spec asks us to round
         * down, we stop here and choose to return "front"
         */

        let front = this.head;
        let back = this.tail;

        while (front !== back && front.next !== back) {
            front = front.next;
            back = back.prev;
        }

        return front;
        //? O(n)
    }

    reverse() {
        /**
         * Similar implementation as singly linked list, however now that we
         * have a .tail property, we can easily start at the end of our list.
         * We also have a .prev property, so we can iterate backwards through
         * the linked list. This allows us to use addToTail(), which is most
         * similar to arr.push()
         */

        const newList = new DoublyLinkedList();
        let curr = this.tail;

        while (curr) {
            newList.addToTail(curr.value);
            curr = curr.prev;
        }

        return newList;
        //? O(n)
    }

    reverseInPlace() {
        /**
         * Again, a similar approach to our singly linked list, except this time
         * we have access to .tail and .prev. So instead of manually finding the
         * last node each time, we can just start and the head and tail and move
         * towards each other. This improves our time complexity to be O(n)
         */

        const stop = Math.floor(this.length / 2);

        let front = this.head;
        let back = this.tail;

        for (let i = 0; i < stop; i++) {
            [front.value, back.value] = [back.value, front.value];

            front = front.next;
            back = back.prev;
        }

        //? O(n)
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList,
};
