/*
 * @lc app=leetcode.cn id=70 lang=typescript
 *
 * [70] 爬楼梯
 */

// @lc code=start
function climbStairs(n: number): number {
    const f = new Array(n);
    f[0] = 1;
    f[1] = 2;
    for (let i = 2; i < n; ++i) {
        f[i] = f[i - 1] + f[i - 2];
    }
    return f[n - 1];
}
// @lc code=end
