/*
 * @lc app=leetcode.cn id=99 lang=typescript
 *
 * [99] 恢复二叉搜索树
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

/**
 Do not return anything, modify root in-place instead.
 */

//解法一

// function recoverTree(root: TreeNode | null): void {
//     const array: TreeNode[] = [];
//     const dfs = (node: TreeNode | null): void => {
//         if (!node) return;
//         dfs(node.left);
//         array.push(node);
//         dfs(node.right);
//     };
//     dfs(root);

//     let x, y;
//     for (let i = 0; i < array.length - 1; ++i) {
//         if (array[i].val > array[i + 1].val) {
//             y = array[i + 1];
//             if (!x) {
//                 x = array[i];
//             }
//         }
//     }
//     if (x && y) {
//         const temp = x.val;
//         x.val = y.val;
//         y.val = temp;
//     }
// }

//解法二

// function recoverTree(root: TreeNode | null): void {
//     let pre: TreeNode, x!: TreeNode, y!: TreeNode;
//     const dfs = (node: TreeNode | null): void => {
//         if (!node) return;
//         dfs(node.left);
//         if (pre && pre.val > node.val) {
//             y = node;
//             if (!x) {
//                 x = pre;
//             }
//         }
//         pre = node;
//         dfs(node.right);
//     };
//     dfs(root);

//     if (x && y) {
//         const temp = x.val;
//         x.val = y.val;
//         y.val = temp;
//     }
// }

//解法三（morris中序遍历）
function recoverTree(root: TreeNode | null): void {
    let pre!: TreeNode, x!: TreeNode, y!: TreeNode;
    while (root) {
        if (root.left) {
            let predecessor = root.left;
            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right;
            }
            if (predecessor.right) {
                if (pre && pre.val > root.val) {
                    y = root;
                    if (!x) {
                        x = pre;
                    }
                }
                pre = root;
                predecessor.right = null;
                root = root.right;
            } else {
                predecessor.right = root;
                root = root.left;
            }
        } else {
            if (pre && pre.val > root.val) {
                y = root;
                if (!x) {
                    x = pre;
                }
            }
            pre = root;
            root = root.right;
        }
    }

    if (x && y) {
        const temp = x.val;
        x.val = y.val;
        y.val = temp;
    }
}

// @lc code=end
