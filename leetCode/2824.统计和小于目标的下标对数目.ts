/*
 * @lc app=leetcode.cn id=2824 lang=typescript
 *
 * [2824] 统计和小于目标的下标对数目
 */

// @lc code=start
function countPairs(nums: number[], target: number): number {
    let result = 0;
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            if (nums[i] + nums[j] < target) {
                ++result;
            }
        }
    }
    return result;
}
// @lc code=end
