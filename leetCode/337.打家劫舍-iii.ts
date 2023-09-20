/*
 * @lc app=leetcode.cn id=337 lang=typescript
 *
 * [337] 打家劫舍 III
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

function rob(root: TreeNode | null): number {
    const g: Map<TreeNode, number> = new Map();
    const f: Map<TreeNode, number> = new Map();

    const get = (map: Map<TreeNode, number>, node: TreeNode): number => {
        return map.get(node) || 0;
    };

    const dfs = (node: TreeNode | null): void => {
        if (!node) return;
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + get(g, node.left) + get(g, node.right));
        g.set(
            node,
            Math.max(get(f, node.left), get(g, node.left)) +
                Math.max(get(f, node.right), get(g, node.right))
        );
    };

    dfs(root);
    return Math.max(get(f, root), get(g, root));
}
// @lc code=end
