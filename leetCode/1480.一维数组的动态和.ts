/*
 * @lc app=leetcode.cn id=1480 lang=typescript
 *
 * [1480] 一维数组的动态和
 */

// @lc code=start
function runningSum(nums: number[]): number[] {
    let count = 0;
    return nums.map((num) => (count += num));
}
// @lc code=end
