/*
 * @lc app=leetcode.cn id=1457 lang=typescript
 *
 * [1457] 二叉树中的伪回文路径
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

function pseudoPalindromicPaths(root: TreeNode | null): number {
    let count = 0;
    const array = new Array(10).fill(0);
    const dfs = (node: TreeNode | null): void => {
        if (!node) {
            return;
        }
        ++array[node.val];

        if (node.left) {
            dfs(node.left);
        }

        if (node.right) {
            dfs(node.right);
        }
        if (
            !node.left &&
            !node.right &&
            array.reduce((res, cur) => res + (cur % 2), 0) < 2
        ) {
            ++count;
        }
        --array[node.val];
    };
    dfs(root);
    return count;
}
// @lc code=end
