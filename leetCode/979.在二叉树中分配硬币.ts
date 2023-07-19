/*
 * @lc app=leetcode.cn id=979 lang=typescript
 *
 * [979] 在二叉树中分配硬币
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

function distributeCoins(root: TreeNode | null): number {
    let ans = 0;
    const dfs = (node: TreeNode | null): number => {
        if (!node) return 0;
        const d = dfs(node.left) + dfs(node.right) + node.val - 1;
        ans += Math.abs(d);
        return d;
    };
    dfs(root);
    return ans;
}
// @lc code=end
