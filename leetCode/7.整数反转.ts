/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 */

// @lc code=start
function reverse(x: number): number {
    let result = 0;
    const data = Math.abs(x).toString().replace(/0*$/, '');
    for (let i = 0; i < data.length; ++i) {
        result += +data[i] * 10 ** i;
    }
    result *= x > 0 ? 1 : -1;
    return result > 2 ** 31 - 1 || result < -(2 ** 31) ? 0 : result;
}
// @lc code=end
