/*
 * @lc app=leetcode.cn id=1302 lang=typescript
 *
 * [1302] 层数最深叶子节点的和
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

function deepestLeavesSum(root: TreeNode | null): number {
    let queue: Array<TreeNode> = [root];
    let sum: number = 0;

    while (queue.length) {
        const temp = queue;
        sum = 0;
        queue = [];
        for (const node of temp) {
            sum += node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }

    return sum;
}
// @lc code=end
