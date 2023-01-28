/*
 * @lc app=leetcode.cn id=779 lang=typescript
 *
 * [779] 第K个语法符号
 */

// @lc code=start
function kthGrammar(n: number, k: number): number {
    if (n === 1) return 0;
    return kthGrammar(n - 1, Math.ceil(k / 2)) ^ (k + 1) % 2;
}
// @lc code=end
