/*
 * @lc app=leetcode.cn id=438 lang=typescript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
    const map = new Map();
    const result = [];
    for (const s of p) {
        map.set(s, (map.get(s) || 0) + 1);
    }

    const { length } = p;
    for (let i = 0; i < s.length; ++i) {
        if (i < length || s[i] !== s[i - length]) {
            const sum = map.get(s[i]);
            if (sum !== void 0 && sum > 0) {
                sum === 1 ? map.delete(s[i]) : map.set(s[i], sum - 1);
            } else {
                map.set(s[i], (sum || 0) - 1);
            }
        }

        if (i >= length && s[i] !== s[i - length]) {
            const sum = map.get(s[i - length]);
            if (sum !== void 0 && sum < 0) {
                sum === -1
                    ? map.delete(s[i - length])
                    : map.set(s[i - length], sum + 1);
            } else {
                map.set(s[i - length], (sum || 0) + 1);
            }
        }
        if (!map.size) {
            result.push(i - length + 1);
        }
    }
    return result;
}
// @lc code=end
