// Do not change this
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //! Recursive
    insert(val, currentNode = this.root) {
        // If there's no root
        if (!this.root) {
            const newNode = new TreeNode(val);
            this.root = newNode;
            return newNode;
        }

        // If it should go left
        if (currentNode.val > val) {
            //! Base case
            if (!currentNode.left) {
                const newNode = new TreeNode(val);
                currentNode.left = newNode;
                return;
            }

            // If a .left exists
            return this.insert(val, currentNode.left);
        }

        // If it should go right
        if (currentNode.val < val || currentNode.val === val) {
            //! Base case
            if (!currentNode.right) {
                const newNode = new TreeNode(val);
                currentNode.right = newNode;
                return;
            }

            // If a .right exists
            return this.insert(val, currentNode.right);
        }
    }

    //? While loop
    // insert(val, currentNode = this.root) {
    //     const newNode = new TreeNode(val);

    //     if (!this.root) {
    //         this.root = newNode;
    //         return newNode;
    //     }

    //     while (true) {
    //         if (val < currentNode.val) {
    //             if (currentNode.left === null) {
    //                 currentNode.left = newNode;
    //                 break;
    //             }
    //             currentNode = currentNode.left;
    //         } else {
    //             if (currentNode.right === null) {
    //                 currentNode.right = newNode;
    //                 break;
    //             }
    //             currentNode = currentNode.right;
    //         }
    //     }
    // }

    //? While loop
    search(val) {
        let searchNode = this.root;

        while (true) {
            if (!searchNode) return false;

            if (searchNode.val === val) return true;

            if (val > searchNode.val) {
                searchNode = searchNode.right;
            } else {
                searchNode = searchNode.left;
            }
        }
    }

    // //! Recursive
    // search(val, currentNode = this.root) {
    //     if (currentNode === null) return false;

    //     if (currentNode.val === val) return true;

    //     if (val < currentNode.val) {
    //         return this.search(val, currentNode.left);
    //     }

    //     if (val > currentNode.val) {
    //         return this.search(val, currentNode.right);
    //     }
    // }

    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return null;

        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return null;

        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return null;

        this.postOrderTraversal(currentNode.left);
        this.postOrderTraversal(currentNode.right);
        console.log(currentNode.val);
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        const queue = [this.root];

        while (queue.length) {
            const currNode = queue.shift();

            console.log(currNode.val);

            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [this.root];

        while (stack.length) {
            const currNode = stack.pop();

            console.log(currNode.val);

            if (currNode.left) stack.push(currNode.left);
            if (currNode.right) stack.push(currNode.right);
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
