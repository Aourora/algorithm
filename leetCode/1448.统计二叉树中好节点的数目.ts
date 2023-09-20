/*
 * @lc app=leetcode.cn id=1448 lang=typescript
 *
 * [1448] 统计二叉树中好节点的数目
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

function goodNodes(root: TreeNode | null): number {
    let sum = 0;
    const dfs = (node: TreeNode | null, max: number): void => {
        if (!node) return;
        if (node.val >= max) {
            ++sum;
        }
        max = Math.max(max, node.val);
        dfs(node.left, max);
        dfs(node.right, max);
    };
    dfs(root, -Infinity);
    return sum;
}
// @lc code=end
