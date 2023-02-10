/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(s: string): number {
    const map = new Map<string, number>();
    let i = 0,
        j = 0,
        max = 0;

    const { length } = s;
    while (j < length) {
        while (j < length && (!map.has(s[j]) || map.get(s[j]) < i)) {
            map.set(s[j], j);
            ++j;
        }
        max = Math.max(max, j - i);
        i = map.get(s[j]) + 1;
        map.set(s[j], j++);
    }
    return max;
}
// @lc code=end
