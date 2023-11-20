/*
 * @lc app=leetcode.cn id=2582 lang=typescript
 *
 * [2582] 递枕头
 */

// @lc code=start
function passThePillow(n: number, time: number): number {
    time %= (n - 1) * 2;
    return time < n ? time + 1 : n * 2 - time - 1;
}

//1,2,3,4
// @lc code=end
