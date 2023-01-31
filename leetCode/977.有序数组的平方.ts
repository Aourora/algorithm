/*
 * @lc app=leetcode.cn id=977 lang=typescript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
function sortedSquares(nums: number[]): number[] {
    const result: Array<number> = new Array(nums.length);
    for (let i = 0, j = nums.length - 1, pos = nums.length - 1; i <= j; ) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            result[pos] = nums[i] * nums[i];
            ++i;
        } else {
            result[pos] = nums[j] * nums[j];
            --j;
        }
        --pos;
    }
    return result;
}
// @lc code=end
