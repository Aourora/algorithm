/*
 * @lc app=leetcode.cn id=2485 lang=typescript
 *
 * [2485] 找出中枢整数
 */

// @lc code=start
function pivotInteger(n: number): number {
    const sum = function (_n: number): number {
        return _n + (_n * (_n - 1)) / 2;
    };
    const s = sum(n);
    for (let i = 1; i <= n; ++i) {
        if (sum(i) === s - sum(i) + i) return i;
    }
    return -1;
}
// @lc code=end
