/*
 * @lc app=leetcode.cn id=45 lang=typescript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
function jump(nums: number[]): number {
    const { length } = nums;
    let maxPos = 0;
    let step = 0;
    let end = 0;
    for (let i = 0; i < length - 1; ++i) {
        maxPos = Math.max(maxPos, i + nums[i]);
        if (i === end) {
            end = maxPos;
            ++step;
        }
    }
    return step;
}
// @lc code=end
