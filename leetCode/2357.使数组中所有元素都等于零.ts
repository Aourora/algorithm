/*
 * @lc app=leetcode.cn id=2357 lang=typescript
 *
 * [2357] 使数组中所有元素都等于零
 */

// @lc code=start
function minimumOperations(nums: number[]): number {
    const set = new Set(nums);
    set.delete(0);
    return set.size;
}
// @lc code=end
