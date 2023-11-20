/*
 * @lc app=leetcode.cn id=2520 lang=typescript
 *
 * [2520] 统计能整除数字的位数
 */

// @lc code=start
function countDigits(num: number): number {
    let v1 = num,
        v2 = v1 % 10;
    let sum = 0;
    while (v1) {
        if (num % v2 === 0) ++sum;
        v1 = (v1 / 10) | 0;
        v2 = v1 % 10;
    }
    return sum;
}
// @lc code=end
