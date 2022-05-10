/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
 */

import { TreeNode } from './common';

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//递归

// function isSymmetric(root: TreeNode | null): boolean {
//     const isSame = (
//         nodeA: TreeNode | null,
//         nodeB: TreeNode | null
//     ): boolean => {
//         if (!nodeA && !nodeB) return true;
//         if (!nodeA || !nodeB) return false;
//         return (
//             nodeA.val === nodeB.val &&
//             isSame(nodeA.left, nodeB.right) &&
//             isSame(nodeA.right, nodeB.left)
//         );
//     };
//     return isSame(root, root);
// }

//迭代

function isSymmetric(root: TreeNode | null): boolean {
    const isSame = (
        nodeA: TreeNode | null,
        nodeB: TreeNode | null
    ): boolean => {
        if (!nodeA && !nodeB) return true;
        if (!nodeA || !nodeB) return false;
        return nodeA.val === nodeB.val;
    };
    const queue: (TreeNode | null)[] = [root, root];
    while (queue.length) {
        const l = queue.shift();
        const r = queue.shift();
        if (!l && !r) continue;
        if (!l || !r || l.val !== r.val) return false;
        queue.push(l.left, r.right, l.right, r.left);
    }
    return true;
}

// @lc code=end
