/*
 * @lc app=leetcode.cn id=27 lang=typescript
 *
 * [27] 移除元素
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    const { length } = nums;
    let j = 0;
    for (let i = 0; i < length - j; ++i) {
        if (nums[i] === val) {
            nums[i] = nums[length - j - 1];
            nums[length - j - 1] = val;
            ++j;
            --i;
        }
    }
    return length - j;
}
// @lc code=end
