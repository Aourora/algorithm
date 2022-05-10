/*
 * @lc app=leetcode.cn id=113 lang=typescript
 *
 * [113] 路径总和 II
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

// function pathSum(root: TreeNode | null, targetSum: number): number[][] {
//     const result: Array<Array<number>> = [];
//     const stack: Array<number> = [];
//     const dfs = (node: TreeNode | null, sum: number): void => {
//         if (!node) return;
//         sum += node.val;
//         stack.push(node.val);
//         if (!node.left && !node.right && sum === targetSum) {
//             result.push([...stack]);
//         }
//         dfs(node.left, sum);
//         dfs(node.right, sum);
//         stack.pop();
//     };
//     dfs(root, 0);
//     return result;
// }

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const result: Array<Array<number>> = [];
    const stack: Array<number> = [];
    const dfs = (node: TreeNode | null, sum: number): void => {
        if (!node) return;
        sum -= node.val;
        stack.push(node.val);
        if (!node.left && !node.right && !sum) {
            result.push([...stack]);
        }
        dfs(node.left, sum);
        dfs(node.right, sum);
        stack.pop();
    };
    dfs(root, targetSum);
    return result;
}

// @lc code=end
