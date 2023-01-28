/*
 * @lc app=leetcode.cn id=1790 lang=typescript
 *
 * [1790] 仅执行一次字符串交换能否使两个字符串相等
 */

// @lc code=start
function areAlmostEqual(s1: string, s2: string): boolean {
    const array: Array<string> = [];
    for (let i = 0; i < s1.length; ++i) {
        if (s1.charAt(i) !== s2.charAt(i)) {
            array.push(s1[i], s2[i]);
            if (array.length > 4) return false;
        }
    }
    return array.length < 4
        ? !array.length
        : array[0] === array[3] && array[1] === array[2];
}
// @lc code=end
