/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    const dfs = (node: TreeNode | null, sum: number): boolean => {
        if (!node) return false;
        if (!node.left && !node.right) {
            return sum + node.val === targetSum;
        }
        return (
            dfs(node.left, sum + node.val) || dfs(node.right, sum + node.val)
        );
    };
    return dfs(root, 0);
}
// @lc code=end
