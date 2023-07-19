/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let v = NaN;
    let j = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== v) {
            v = nums[i];
            nums[++j] = v;
        }
    }
    return j + 1;
}
// @lc code=end
