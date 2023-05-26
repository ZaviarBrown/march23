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

    insert(val, currentNode = this.root) {
        if (!this.root) {
            const newNode = new TreeNode(val);
            this.root = newNode;

            return newNode;
        }

        if (val < currentNode.val) {
            if (!currentNode.left) {
                const newNode = new TreeNode(val);
                currentNode.left = newNode;
                return newNode;
            }

            return this.insert(val, currentNode.left);
        }

        if (val > currentNode.val) {
            if (!currentNode.right) {
                const newNode = new TreeNode(val);
                currentNode.right = newNode;
                return newNode;
            }

            return this.insert(val, currentNode.right);
        }
    }

    search(val) {
        let currNode = this.root;

        while (true) {
            if (!currNode) return false;

            if (currNode.val === val) return true;

            if (val < currNode.val) {
                currNode = currNode.left;
            } else {
                currNode = currNode.right;
            }
        }
    }

    preOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        console.log(currentNode.val);
        this.preOrderTraversal(currentNode.left);
        this.preOrderTraversal(currentNode.right);
    }

    inOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

        this.inOrderTraversal(currentNode.left);
        console.log(currentNode.val);
        this.inOrderTraversal(currentNode.right);
    }

    postOrderTraversal(currentNode = this.root) {
        if (!currentNode) return;

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

            currNode.left && queue.push(currNode.left);
            currNode.right && queue.push(currNode.right);
        }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        const stack = [this.root];

        while (stack.length) {
            const currNode = stack.pop();

            console.log(currNode.val);

            currNode.left && stack.push(currNode.left);
            currNode.right && stack.push(currNode.right);
        }
    }
}

module.exports = { BinarySearchTree, TreeNode };
