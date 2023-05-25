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

        if (currentNode.val > val) {
            if (!currentNode.left) {
                const newNode = new TreeNode(val);
                currentNode.left = newNode;
                return newNode;
            }

            return this.insert(val, currentNode.left);
        }

        if (currentNode.val < val) {
            if (!currentNode.right) {
                const newNode = new TreeNode(val);
                currentNode.right = newNode;
                return newNode;
            }

            return this.insert(val, currentNode.right);
        }
    }

    // insert(val, currentNode = this.root) {
    //     const newTreeNode = new TreeNode(val);

    //     if (currentNode === null) {
    //         this.root = newTreeNode;
    //     }

    //     const treeSearch = (currentNode) => {
    //         if (val < currentNode.val) {
    //             if (currentNode.left === null) {
    //                 currentNode.left = newTreeNode;
    //             } else {
    //                 return treeSearch(currentNode.left);
    //             }
    //         }
    //         if (val > currentNode.val) {
    //             if (currentNode.right === null) {
    //                 currentNode.right = newTreeNode;
    //             } else {
    //                 return treeSearch(currentNode.right);
    //             }
    //         }
    //     };
    //     return treeSearch(this.root);
    // }

    search(val) {
        let searchNode = this.root;

        // while (true) {
        //     if (!searchNode) return false;

        //     if (searchNode.val === val) return true;

        //     if (searchNode.val > val) {
        //         searchNode = searchNode.left;
        //     } else {
        //         searchNode = searchNode.right;
        //     }
        // }

        while (searchNode) {
            if (searchNode.val === val) return true;

            if (searchNode.val > val) {
                searchNode = searchNode.left;
            } else {
                searchNode = searchNode.right;
            }
        }

        return false;
    }

    preOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    inOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    postOrderTraversal(currentNode = this.root) {
        // Your code here
    }

    // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
        // your code here
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
        // your code here
    }
}

module.exports = { BinarySearchTree, TreeNode };
