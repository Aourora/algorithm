/*
 * @lc app=leetcode.cn id=198 lang=typescript
 *
 * [198] 打家劫舍
 */

// @lc code=start
function rob(nums: number[]): number {
    let f0 = 0,
        f1 = 0;
    for (const num of nums) {
        [f0, f1] = [f1, Math.max(f1, f0 + num)];
    }
    return f1;
}
// @lc code=end
