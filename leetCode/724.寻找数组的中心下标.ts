/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心下标
 */

// @lc code=start
function pivotIndex(nums: number[]): number {
    const total = nums.reduce((res, cur) => res + cur, 0);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (2 * sum + nums[i] === total) {
            return i;
        } else {
            sum += nums[i];
        }
    }
    return -1;
}
// @lc code=end
