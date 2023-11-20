/*
 * @lc app=leetcode.cn id=260 lang=typescript
 *
 * [260] 只出现一次的数字 III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
    let sum = 0;
    for (const num of nums) {
        sum ^= num;
    }
    let k = 0;
    while (!(sum & (1 << k))) {
        ++k;
    }
    k = 1 << k;
    const res = [0, 0];
    for (const num of nums) {
        res[num & k ? 0 : 1] ^= num;
    }
    return res;
}
// @lc code=end
