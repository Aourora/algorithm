/*
 * @lc app=leetcode.cn id=283 lang=typescript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    if (!nums || !nums.length) return;
    let j = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            if (i > j) {
                nums[j] = nums[i];
                nums[i] = 0;
            }
            ++j;
        }
    }
}
// @lc code=end
