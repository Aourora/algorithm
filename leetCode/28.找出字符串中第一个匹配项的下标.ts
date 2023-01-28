/*
 * @lc app=leetcode.cn id=28 lang=typescript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === needle[0]) {
            let j = 1;
            for (; j < needle.length; ++j) {
                if (!haystack[i + j]) return -1;
                if (haystack[i + j] !== needle[j]) break;
            }
            if (j === needle.length) return i;
        }
    }
    return -1;
}
// @lc code=end
