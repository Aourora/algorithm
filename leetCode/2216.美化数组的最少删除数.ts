/*
 * @lc app=leetcode.cn id=2216 lang=typescript
 *
 * [2216] 美化数组的最少删除数
 */

// @lc code=start
function minDeletion(nums: number[]): number {
    let count = 0;
    for (let i = 0; i < nums.length; ) {
        if (nums[i] === nums[i + 1]) {
            ++count;
            ++i;
        } else {
            i += 2;
        }
    }
    return (nums.length - count) % 2 == 0 ? count : count + 1;
}
// @lc code=end
