/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
    let count = 0,
        result = NaN;
    for (const num of nums) {
        if (!count) result = num;
        count += num === result ? 1 : -1;
    }
    return result;
}
// @lc code=end
