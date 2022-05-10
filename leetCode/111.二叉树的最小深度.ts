/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

// function minDepth(root: TreeNode | null): number {
//     let result = 0;
//     if (!root) return result;
//     let queue: Array<TreeNode> = [root];
//     while (queue.length) {
//         ++result;
//         const temp: Array<TreeNode> = [];
//         for (let i = 0, { length } = queue; i < length; ++i) {
//             const node = queue[i];
//             if (!node.left && !node.right) return result;

//             if (node.left) {
//                 temp.push(node.left);
//             }
//             if (node.right) {
//                 temp.push(node.right);
//             }
//         }
//         queue = temp;
//     }
//     return result;
// }

function minDepth(root: TreeNode | null): number {
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;

        if (node.left && node.right) {
            return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
        }

        return minDepth(node.left || node.right) + 1;
    };
    return dfs(root);
}
// @lc code=end
