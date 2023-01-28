/*
 * @lc app=leetcode.cn id=2293 lang=typescript
 *
 * [2293] 极大极小游戏
 */

// @lc code=start
function minMaxGame(nums: number[]): number {
    let length = nums.length / 2;
    while (length >= 1) {
        for (let i = 0; i < length; ++i) {
            nums[i] =
                i % 2 === 0
                    ? Math.min(nums[2 * i], nums[2 * i + 1])
                    : Math.max(nums[2 * i], nums[2 * i + 1]);
        }
        length /= 2;
    }
    return nums[0];
}
// @lc code=end
