/*
 * @lc app=leetcode.cn id=1726 lang=typescript
 *
 * [1726] 同积元组
 */

// @lc code=start
function tupleSameProduct(nums: number[]): number {
    const cnt = new Map<number, number>();
    for (let i = 0; i < nums.length - 1; ++i) {
        for (let j = i + 1; j < nums.length; ++j) {
            cnt.set(nums[i] * nums[j], (cnt.get(nums[i] * nums[j]) || 0) + 1);
        }
    }
    let sum = 0;
    for (const v of cnt.values()) {
        sum += v * (v - 1) * 4;
    }
    return sum;
}
// @lc code=end
