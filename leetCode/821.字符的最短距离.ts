/*
 * @lc app=leetcode.cn id=821 lang=typescript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
function shortestToChar(s: string, c: string): number[] {
    const { length } = s;
    const result = new Array(length).fill(Infinity);

    //查找left
    for (let i = 0, j = -1; i < length; ++i) {
        if (s.charAt(i) === c) {
            j = i;
        }
        if (j !== -1) {
            result[i] = i - j;
        }
    }

    //查找right
    for (let i = length - 1, j = -1; i >= 0; --i) {
        if (s.charAt(i) === c) {
            j = i;
        }
        if (j !== -1) {
            result[i] = Math.min(result[i], j - i);
        }
    }
    return result;
}
// @lc code=end
