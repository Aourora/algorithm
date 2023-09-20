/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
function rob(nums: number[]): number {
    const range = (i: number, j: number): number => {
        let f0 = 0,
            f1 = 0;
        for (; i <= j; ++i) {
            [f0, f1] = [f1, Math.max(f1, f0 + nums[i])];
        }
        return f1;
    };
    const { length } = nums;
    if (length > 2) {
        return Math.max(range(0, length - 2), range(1, length - 1));
    } else {
        return Math.max(...nums);
    }
}
// @lc code=end
