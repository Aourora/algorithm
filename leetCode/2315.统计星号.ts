/*
 * @lc app=leetcode.cn id=2315 lang=typescript
 *
 * [2315] 统计星号
 */

// @lc code=start
function countAsterisks(s: string): number {
    let result = 0,
        flag = false;
    for (const char of s) {
        if (!flag && char === '*') {
            ++result;
        } else if (char === '|') {
            flag = !flag;
        }
    }
    return result;
}
// @lc code=end
