/*
 * @lc app=leetcode.cn id=589 lang=typescript
 *
 * [589] N 叉树的前序遍历
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

function preorder(root: Node | null): number[] {
    const result: Array<number> = [];
    const dfs = (node: Node | null): void => {
        if (!node) return;
        result.push(node.val);
        node.children.forEach((c) => dfs(c));
    };
    dfs(root);
    return result;
}
// @lc code=end
