/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
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
 *         this.left = (left===undefined ? null : lexft)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    let node = root;
    while (node) {
        if (node.left && node.right) {
            //
            let last = node.left;
            while (last.right) {
                last = last.right;
            }
            last.right = node.right;
        }
        if (node.left) {
            node.right = node.left;
        }
        node.left = null;
        node = node.right;
    }
}
// @lc code=end
