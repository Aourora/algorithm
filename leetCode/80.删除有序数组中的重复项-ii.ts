/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let v1 = NaN,
        v2 = NaN;
    let j = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] !== v1) {
            nums[++j] = nums[i];
        }
        v1 = v2;
        v2 = nums[i];
    }
    return j + 1;
}
// @lc code=end
