/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    f[0][0] = 1;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (i > 0 && j > 0) {
                f[i][j] = f[i - 1][j] + f[i][j - 1];
            } else if (i > 0) {
                f[i][j] = f[i - 1][j];
            } else if (j > 0) {
                f[i][j] = f[i][j - 1];
            }
        }
    }
    return f[m - 1][n - 1];
};
// @lc code=end

console.log(uniquePaths(51, 9));
