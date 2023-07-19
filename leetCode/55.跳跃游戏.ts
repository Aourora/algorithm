/*
 * @lc app=leetcode.cn id=55 lang=typescript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
function canJump(nums: number[]): boolean {
    let max = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (i > max) return false;
        max = Math.max(max, i + nums[i]);
    }
    return true;
}
// @lc code=end
