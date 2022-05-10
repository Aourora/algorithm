/*
 * @lc app=leetcode.cn id=1110 lang=typescript
 *
 * [1110] 删点成林
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

function delNodes(
    root: TreeNode | null,
    to_delete: number[]
): Array<TreeNode | null> {
    const result: Array<TreeNode | null> = [];

    const set = new Set(to_delete);

    const dfs = (node: TreeNode | null, isRoot: boolean): TreeNode | null => {
        if (!node) return null;
        let isDelete: boolean = false;
        if (set.has(node.val)) {
            isDelete = true;
        }
        if (!isDelete && isRoot) {
            result.push(node);
        }
        node.left = dfs(node.left, isDelete);
        node.right = dfs(node.right, isDelete);
        return isDelete ? null : node;
    };
    dfs(root, true);
    return result;
}

// @lc code=end
