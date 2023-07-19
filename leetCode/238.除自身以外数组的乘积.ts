/*
 * @lc app=leetcode.cn id=238 lang=typescript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
    const L: number[] = [];
    const R: number[] = [];
    L[0] = 1;
    for (let i = 1; i < nums.length; ++i) {
        L[i] = L[i - 1] * nums[i - 1];
    }
    R[nums.length - 1] = 1;
    for (let i = nums.length - 2; i >= 0; --i) {
        R[i] = R[i + 1] * nums[i + 1];
    }
    const res: number[] = [];
    for (let i = 0; i < nums.length; ++i) {
        res[i] = L[i] * R[i];
    }
    return res;
}
// @lc code=end
