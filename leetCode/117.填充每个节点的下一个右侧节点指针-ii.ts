/*
 * @lc app=leetcode.cn id=117 lang=typescript
 *
 * [117] 填充每个节点的下一个右侧节点指针 II
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

// import { Node } from './common';

function connect(root: Node | null): Node | null {
    let node = root;
    while (node) {
        let next = node;
        let nextStart: Node, last: Node;
        const temp = node.left || node.right;
        while (next) {
            if (next.left) {
                if (last) {
                    last.next = next.left;
                }
                if (!nextStart) {
                    nextStart = next.left;
                }
                last = next.left;
            }
            if (next.right) {
                if (last) {
                    last.next = next.right;
                }
                if (!nextStart) {
                    nextStart = next.right;
                }
                last = next.right;
            }
            next = next.next;
        }
        node = nextStart;
    }
    return root;
}
// @lc code=end
