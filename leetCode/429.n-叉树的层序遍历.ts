/*
 * @lc app=leetcode.cn id=429 lang=typescript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

interface Node {
    val: number;
    children: Node[];
}

function levelOrder(root: Node | null): number[][] {
    if (!root) return [];
    const result: number[][] = [[root.val]];
    let queue: Node[] = root.children;
    while (queue.length) {
        const tempQueue: Node[] = [];
        const tempResult: number[] = [];
        for (const node of queue) {
            tempResult.push(node.val);
            tempQueue.push(...node.children);
        }
        result.push(tempResult);
        queue = tempQueue;
    }
    return result;
}
// @lc code=end
