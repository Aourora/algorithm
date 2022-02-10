/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 */


// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    const matches = (i, j) => {
        if (i === 0) return false;
        if (p[j - 1] === '.') return true;
        return s[i - 1] === p[j - 1];
    }
    const { length: sLen } = s;
    const { length: pLen } = p;
    const result = new Array(sLen + 1).fill().map(() => new Array(pLen + 1).fill(false));
    result[0][0] = true;
    for (let i = 0; i <= sLen; ++i) {
        for (let j = 1; j <= pLen; ++j) {
            if (p[j - 1] === '*') {
                result[i][j] ||= result[i][j - 2];
                if (matches(i, j - 1)) {
                    result[i][j] ||= result[i - 1][j];
                }
            } else {
                if (matches(i, j))
                    result[i][j] ||= result[i - 1][j - 1];
            }
        }
    }
    return result[sLen][pLen];
};
// @lc code=end

