/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    let layer = [root];
    const result: Array<Array<number>> = [];
    let res: Array<number>;
    let temp: Array<TreeNode>;
    while (layer.length) {
        res = [];
        temp = [];
        for (const node of layer) {
            node.left && temp.push(node.left);
            node.right && temp.push(node.right);
            res.push(node.val);
        }
        result.push(res);
        layer = temp;
    }
    return result;
}
// @lc code=end
