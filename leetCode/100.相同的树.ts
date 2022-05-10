/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    const dfs = (p: TreeNode | null, q: TreeNode | null): boolean => {
        if (!p && !q) return true;
        if (!p || !q) return false;
        return p.val === q.val && dfs(p.left, q.left) && dfs(p.right, q.right);
    };
    return dfs(p, q);
}
// @lc code=end
