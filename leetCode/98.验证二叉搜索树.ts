/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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

//!递归
// function isValidBST(root: TreeNode | null): boolean {
//     const check = (
//         node: TreeNode | null,
//         min: number,
//         max: number
//     ): boolean => {
//         if (!node) return true;
//         if (node.val >= max || node.val <= min) return false;
//         return (
//             check(node.left, min, node.val) && check(node.right, node.val, max)
//         );
//     };
//     return check(root, -Infinity, +Infinity);
// }

//!中序遍历
function isValidBST(root: TreeNode | null): boolean {
    let pre: TreeNode | null = null;
    const check = (node: TreeNode | null): boolean => {
        if (!node) return true;
        if (!check(node.left) || (pre && node.val <= pre.val)) return false;
        pre = node;
        return check(node.right);
    };
    return check(root);
}
// @lc code=end
