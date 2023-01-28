/*
 * @lc app=leetcode.cn id=205 lang=typescript
 *
 * [205] 同构字符串
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
    const map: Map<string, string> = new Map<string, string>();
    const array: Array<string> = [];
    for (let i = 0; i < s.length; ++i) {
        if (!map.has(s[i])) {
            if (array.includes(t[i])) return false;
            array.push(t[i]);
            map.set(s[i], t[i]);
        } else if (map.get(s[i]) !== t[i]) {
            return false;
        }
    }
    return true;
}
// @lc code=end
