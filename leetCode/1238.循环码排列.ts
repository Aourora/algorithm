/*
 * @lc app=leetcode.cn id=1238 lang=typescript
 *
 * [1238] 循环码排列
 */

// @lc code=start
function circularPermutation(n: number, start: number): number[] {
    const res: Array<number> = [];
    for (let i = 0; i < Math.pow(2, n); ++i) {
        res.push((i >> 1) ^ i ^ start);
    }
    return res;
}
// @lc code=end
