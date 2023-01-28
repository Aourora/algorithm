/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
    if (s === '') return true;
    let count = 0;
    for (let i = 0, { length } = t; i < length; ++i) {
        if (s[count] === t[i]) ++count;
        if (count >= s.length) return true;
    }
    return false;
}
// @lc code=end
