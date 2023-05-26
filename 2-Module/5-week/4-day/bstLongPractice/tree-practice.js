const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

//? --------------------------------------------------------------------
//? --------------------------------- BST Min Max ---------------------------------
//? --------------------------------------------------------------------

function findMinBST(rootNode) {
    if (!rootNode) return null;

    let currNode = rootNode;

    while (currNode.left) {
        currNode = currNode.left;
    }

    return currNode.val;
}

function findMaxBST(rootNode) {
    if (!rootNode) return null;

    let currNode = rootNode;

    while (currNode.right) {
        currNode = currNode.right;
    }

    return currNode.val;
}

//! --------------------------------- Recursive ---------------------------------

function findMinBST(rootNode) {
    if (!rootNode) return null;

    if (rootNode.left) {
        return findMinBST(rootNode.left);
    }

    return rootNode.val;
}

function findMaxBST(rootNode) {
    if (!rootNode) return null;

    if (rootNode.right) {
        return findMaxBST(rootNode.right);
    }

    return rootNode.val;
}

//? --------------------------------------------------------------------
//? --------------------------------- BT Min Max ---------------------------------
//? --------------------------------------------------------------------

function findMinBT(rootNode) {
    let smallestVal = rootNode.val;

    const stack = [rootNode];

    while (stack.length) {
        const curr = stack.pop();

        if (smallestVal > curr.val) {
            smallestVal = curr.val;
        }

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return smallestVal;
}

function findMaxBT(rootNode) {
    let largestVal = rootNode.val;

    const stack = [rootNode];

    while (stack.length) {
        const curr = stack.pop();

        if (largestVal < curr.val) {
            largestVal = curr.val;
        }

        if (curr.left) stack.push(curr.left);
        if (curr.right) stack.push(curr.right);
    }

    return largestVal;
}

//! --------------------------------- Recursive ---------------------------------

// let compare = findMinBT(rootNode.left);

// if (smallestVal > compare) {
//     smallestVal = compare;
// }

function findMinBT(rootNode) {
    let smallestVal = rootNode.val;

    if (rootNode.left) {
        smallestVal = Math.min(smallestVal, findMinBT(rootNode.left));
    }
    if (rootNode.right) {
        smallestVal = Math.min(smallestVal, findMinBT(rootNode.right));
    }

    return smallestVal;
}

function findMaxBT(rootNode) {
    let largestVal = rootNode.val;

    if (rootNode.left) {
        largestVal = Math.max(largestVal, findMaxBT(rootNode.left));
    }
    if (rootNode.right) {
        largestVal = Math.max(largestVal, findMaxBT(rootNode.right));
    }

    return largestVal;
}

//? --------------------------------------------------------------------
//? --------------------------------- Get Height ---------------------------------
//? --------------------------------------------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;

    const queue = [rootNode];
    // Holds all nodes on current level
    // if levelTracker.length hits 0, I know I've moved on to the next level
    let levelTracker = [rootNode];
    let height = 0;

    while (queue.length) {
        const curr = queue.shift();
        levelTracker.shift();

        if (curr.left) queue.push(curr.left);
        if (curr.right) queue.push(curr.right);

        if (!levelTracker.length && queue.length) {
            height++;
            levelTracker = [...queue];
        }
    }

    return height;
}

//! --------------------------------- Recursive ---------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;
    if (!rootNode.left && !rootNode.right) return 0;
    return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right));
}

//* --------------------------------- Level Key On Node ---------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;

    rootNode.level = 0;

    const stack = [rootNode];
    let height = 0;

    while (stack.length) {
        const currNode = stack.pop();
        const nextLevel = currNode.level + 1;

        if (currNode.right) {
            currNode.right.level = nextLevel;
            stack.push(currNode.right);

            if (height < nextLevel) {
                height = nextLevel;
            }
        }
        if (currNode.left) {
            currNode.left.level = nextLevel;
            stack.push(currNode.left);

            if (height < nextLevel) {
                height = nextLevel;
            }
        }
    }

    return height;
}

// --------------------------------- Student Solutions ---------------------------------

function getHeight(rootNode) {
    if (!rootNode) {
        return -1;
    }
    if (!rootNode.left && !rootNode.right) {
        return 0;
    }
    let leftHeight = getHeight(rootNode.left);
    let rightHeight = getHeight(rootNode.right);

    return Math.max(leftHeight, rightHeight) + 1;
}

function getHeight(rootNode) {
    if (!rootNode) return -1;
    if (!rootNode.left && !rootNode.right) return 0;

    const left = getHeight(rootNode.left);
    const right = getHeight(rootNode.right);

    return Math.max(left, right) + 1;
}

//? --------------------------------------------------------------------
//? --------------------------------- Balanced Tree ---------------------------------
//? --------------------------------------------------------------------

function balancedTree(rootNode) {
    let queue = [rootNode];
    while (queue.length) {
        let curr = queue.shift();

        if (Math.abs(getHeight(curr.left) - getHeight(curr.right)) <= 1) {
            if (curr.left) queue.push(curr.left);
            if (curr.right) queue.push(curr.right);
        } else return false;
    }
    return true;
}

//! --------------------------------- Recursive ---------------------------------

function balancedTree(rootNode) {
    if (!rootNode) return true;

    const left = getHeight(rootNode.left);
    const right = getHeight(rootNode.right);

    if (Math.abs(left - right) <= 1) {
        const leftIsBalanced = balancedTree(rootNode.left);
        const rightIsBalanced = balancedTree(rootNode.right);

        return leftIsBalanced && rightIsBalanced;
    } else return false;
}

//? --------------------------------------------------------------------
//? --------------------------------- Count Nodes ---------------------------------
//? --------------------------------------------------------------------

function countNodes(rootNode) {
    if (!rootNode) return 0;

    const stack = [rootNode];
    let count = 0;

    while (stack.length) {
        const currNode = stack.pop();

        currNode.right && stack.push(currNode.right);
        currNode.left && stack.push(currNode.left);

        count++;
    }

    return count;
}

//! --------------------------------- Recursive ---------------------------------

function countNodes(rootNode) {
    if (!rootNode) return 0;

    return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

//? --------------------------------------------------------------------
//? --------------------------------- Get Parent ---------------------------------
//? --------------------------------------------------------------------

function getParentNode(rootNode, target) {
    if (rootNode.val === target) return null;

    const stack = [rootNode];

    while (stack.length) {
        const currNode = stack.pop();

        if (currNode.left && currNode.left.val === target) return currNode;
        if (currNode.right && currNode.right.val === target) return currNode;

        currNode.right && stack.push(currNode.right);
        currNode.left && stack.push(currNode.left);
    }

    return;
}

//? ----------------------------------------------------------------------------------------
//? --------------------------------- In-order Predecessor ---------------------------------
//? ------------------------- (The only one I solved recursively) --------------------------
//? ----------------------------------------------------------------------------------------

function inOrderPredecessor(rootNode, target, orderArr = []) {
    if (!rootNode) return;

    const left = inOrderPredecessor(rootNode.left, target, orderArr);
    if (left || left === null) return left;

    if (rootNode.val === target) {
        if (!orderArr.length) return null;
        else return orderArr[orderArr.length - 1];
    }

    orderArr.push(rootNode.val);

    const right = inOrderPredecessor(rootNode.right, target, orderArr);
    if (right || left === null) return right;
}

//! --------------------------------- While Loop ---------------------------------

function inOrderPredecessor(rootNode, target) {
    let current = rootNode;
    let stack = [];
    let predecessor = null;

    while (true) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else if (!current && stack.length > 0) {
            current = stack.pop();

            if (current.val === target) {
                if (!predecessor) return null;
                return predecessor.val;
            }
            predecessor = current;
            current = current.right;
        } else {
            break;
        }
    }
}

//? --------------------------------------------------------------------
//? --------------------------------- Delete Node In BST ---------------------------------
//? --------------------------------------------------------------------

// This is ugly and there's probably a much better solution

function deleteNodeBST(rootNode, target) {
    // Do a traversal to find the node. Keep track of the parent
    const parent = getParentNode(rootNode, target);

    let targetNode;
    let direction;

    // Set target based on parent
    if (parent && parent.left && parent.left.val === target) {
        targetNode = parent.left;
        direction = "left";
    }
    if (parent && parent.right && parent.right.val === target) {
        targetNode = parent.right;
        direction = "right";
    }

    if (rootNode.val === target) targetNode = rootNode;

    // Undefined if the target cannot be found
    if (!targetNode) return targetNode;

    // Case 0: Zero children and no parent:
    //   return null
    if (!parent && !targetNode.left && !targetNode.right) return null;

    // Case 1: Zero children:
    //   Set the parent that points to it to null
    if (parent && !targetNode.left && !targetNode.right) {
        parent[direction] = null;
        return;
    }

    // Case 3: One child:
    //   Make the parent point to the child
    if (parent && targetNode.left && !targetNode.right) {
        parent[direction] = targetNode.left;
        return;
    }
    if (parent && !targetNode.left && targetNode.right) {
        parent[direction] = targetNode.right;
        return;
    }

    // Case 2: Two children:
    //  Set the value to its in-order predecessor, then delete the predecessor
    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    const pre = inOrderPredecessor(rootNode, target);
    targetNode.val = pre;

    if (targetNode.left && targetNode.left.val === pre) targetNode.left = null;
    if (targetNode.right && targetNode.right.val === pre)
        targetNode.right = null;
}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST,
};
