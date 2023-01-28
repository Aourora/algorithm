/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 */

// @lc code=start
function longestPalindrome(s: string): number {
    const array: Array<number> = new Array(26 * 2).fill(0);
    for (const _s of s) {
        let idx = _s.codePointAt(0);
        idx = idx - (idx > 90 ? 71 : 65);
        ++array[idx];
    }
    return array.reduce((res, cur) => {
        res += ((cur / 2) | 0) * 2;
        if (cur % 2 !== 0 && res % 2 == 0) {
            ++res;
        }
        return res;
    }, 0);
}
// @lc code=end
