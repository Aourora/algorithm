/*
 * @lc app=leetcode.cn id=189 lang=typescript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const { length } = nums;
    k = k % length;
    const reverse = (
        array: Array<number>,
        start: number,
        end: number
    ): void => {
        while (start < end) {
            [array[start], array[end]] = [array[end], array[start]];
            ++start;
            --end;
        }
    };
    reverse(nums, 0, length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, length - 1);
}
// @lc code=end
