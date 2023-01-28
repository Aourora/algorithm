/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    const { length } = nums;
    let left, right;
    for (let i = 0; i < length; ++i) {
        left = i + 1;
        right = length - 1;
        while(left>-1&&right<length&&)
    }
}
// @lc code=end
