/*
 * @lc app=leetcode.cn id=2731 lang=typescript
 *
 * [2731] 移动机器人
 */

// @lc code=start
function sumDistance(nums: number[], s: string, d: number): number {
    const dir = s.split('');
    for (let i = 0; i < nums.length; ++i) {
        nums[i] += s[i] === 'L' ? -d : +d;
    }
    nums.sort((a, b) => a - b);
    let sum = 0;
    let ans = 0;
    const mod = 1e9 + 7;
    for (let i = 0; i < nums.length; ++i) {
        ans = (ans + (nums[i] * i - sum)) % mod;
        sum += nums[i];
    }
    return ans;
}
// @lc code=end
