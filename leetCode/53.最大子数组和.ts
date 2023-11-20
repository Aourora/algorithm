/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
    let sum = -Infinity;
    let max = -Infinity;
    for (const num of nums) {
        sum = Math.max(num, sum + num);
        max = Math.max(sum, max);
    }
    return max;
}
// @lc code=end
