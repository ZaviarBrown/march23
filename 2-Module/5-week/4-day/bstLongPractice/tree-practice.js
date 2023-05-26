const { BinarySearchTree, TreeNode } = require("./binary-search-tree.js");
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

//? --------------------------------------------------------------------
//? --------------------------------- BST Min Max ---------------------------------
//? --------------------------------------------------------------------

function findMinBST(rootNode) {
    if (!rootNode) return null;

    while (rootNode.left) {
        rootNode = rootNode.left;
    }

    return rootNode.val;
}

function findMaxBST(rootNode) {
    if (!rootNode) return null;

    while (rootNode.right) {
        rootNode = rootNode.right;
    }

    return rootNode.val;
}

//! --------------------------------- Recursive ---------------------------------

function findMinBST(rootNode) {
    if (rootNode.left) {
        return findMinBST(rootNode.left);
    }

    return rootNode.val;
}

function findMaxBST(rootNode) {
    if (rootNode.right) {
        return findMaxBST(rootNode.right);
    }

    return rootNode.val;
}

//? --------------------------------------------------------------------
//? --------------------------------- BT Min Max ---------------------------------
//? --------------------------------------------------------------------

function findMinBT(rootNode) {
    if (!rootNode) return null;

    const stack = [rootNode];
    let smallestVal = rootNode.val;

    while (stack.length) {
        const currNode = stack.pop();

        if (smallestVal > currNode.val) {
            smallestVal = currNode.val;
        }

        currNode.left && stack.push(currNode.left);
        if (currNode.right) stack.push(currNode.right);
    }

    return smallestVal;
}

function findMaxBT(rootNode) {
    if (!rootNode) return null;

    const stack = [rootNode];
    let largestVal = rootNode.val;

    while (stack.length) {
        const currNode = stack.pop();

        if (largestVal < currNode.val) {
            largestVal = currNode.val;
        }

        if (currNode.left) stack.push(currNode.left);
        currNode.right && stack.push(currNode.right);
    }

    return largestVal;
}

//! --------------------------------- Recursive ---------------------------------

// const checkNext = findMinBT(rootNode.left);

// if (smallestVal > checkNext) {
//     smallestVal = checkNext;
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

//* --------------------------------- Student Submissions ---------------------------------

function findMinBT(rootNode, min = []) {
    if (!rootNode) return;
    findMinBT(rootNode.left, min);
    findMinBT(rootNode.right, min);
    min.push(rootNode.val);
    return Math.min(...min);
}

//? --------------------------------------------------------------------
//? --------------------------------- Get Height ---------------------------------
//? --------------------------------------------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;

    const queue = [rootNode];
    let levelTracker = [rootNode];
    let height = 0;

    while (queue.length) {
        const currNode = queue.shift();
        levelTracker.shift();

        currNode.left && queue.push(currNode.left);
        currNode.right && queue.push(currNode.right);

        if (!levelTracker.length && queue.length) {
            levelTracker = [...queue];
            height++;
        }
    }

    return height;
}

//! --------------------------------- Recursive ---------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;
    const leftHeight = getHeight(rootNode.left);
    const rightHeight = getHeight(rootNode.right);
    return 1 + Math.max(leftHeight, rightHeight);
}

//* --------------------------------- Level Key On Node ---------------------------------

function getHeight(rootNode) {
    if (!rootNode) return -1;
    if (!rootNode.left && !rootNode.right) return 0;

    let depth = 0;
    rootNode.level = 0;

    let queue = [rootNode];
    while (queue.length) {
        let curr = queue.pop();
        if (curr.left) {
            curr.left.level = curr.level + 1;
            queue.unshift(curr.left);
        }
        if (curr.right) {
            curr.right.level = curr.level + 1;
            queue.unshift(curr.right);
        }
        if (queue.length === 1) depth = queue[0].level;
    }
    return depth;
}

//? --------------------------------------------------------------------
//? --------------------------------- Balanced Tree ---------------------------------
//? ------------------- (The only one I solved recursively) ---------------------------------------

function balancedTree(rootNode) {
    if (!rootNode) return true;

    const left = getHeight(rootNode.left);
    const right = getHeight(rootNode.right);

    if (Math.abs(left - right) <= 1) {
        const isLeftBalanced = balancedTree(rootNode.left);
        const isRightBalanced = balancedTree(rootNode.right);

        return isLeftBalanced && isRightBalanced;
    }

    return false;
}

//! --------------------------------- While Loop ---------------------------------

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

//? --------------------------------------------------------------------
//? --------------------------------- Count Nodes ---------------------------------
//? --------------------------------------------------------------------

function countNodes(rootNode) {
    const stack = [rootNode];
    let count = 0;

    while (stack.length) {
        const curr = stack.pop();
        count++;

        curr.left && stack.push(curr.left);
        curr.right && stack.push(curr.right);
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
