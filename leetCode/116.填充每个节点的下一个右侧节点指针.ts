/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { Node } from './common';

// function connect(root: Node | null): Node | null {
//     const dfs = (node: Node | null, next: Node | null): void => {
//         if (!node) return;
//         node.next = next;
//         //右子树的next必定是next.left或者null
//         dfs(node.right, next ? next.left : null);
//         //左子树的next必定是右子树
//         dfs(node.left, node.right);
//     };
//     dfs(root, null);
//     return root;
// }

function connect(root: Node | null): Node | null {
    let node = root;
    while (node && node.left) {
        let next: Node | null = node;
        while (next) {
            next.left!.next = next.right;
            next.right!.next = next.next ? next.next.left : null;
            next = next.next;
        }
        node = node.left;
    }
    return root;
}
// @lc code=end
