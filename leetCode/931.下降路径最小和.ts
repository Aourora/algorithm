/*
 * @lc app=leetcode.cn id=931 lang=typescript
 *
 * [931] 下降路径最小和
 */

// @lc code=start
function minFallingPathSum(matrix: number[][]): number {
    const { length } = matrix;
    const f = Array.from(matrix, (_, i) => new Array(length).fill(0));
    for (let i = 0; i < length; ++i) {
        f[0][i] = matrix[0][i];
    }

    for (let i = 1; i < length; ++i) {
        for (let j = 0; j < length; ++j) {
            if (j !== 0 && j !== length - 1) {
                f[i][j] =
                    matrix[i][j] +
                    Math.min(f[i - 1][j - 1], f[i - 1][j], f[i - 1][j + 1]);
            } else if (j === 0) {
                f[i][j] = matrix[i][j] + Math.min(f[i - 1][j], f[i - 1][j + 1]);
            } else {
                f[i][j] = matrix[i][j] + Math.min(f[i - 1][j - 1], f[i - 1][j]);
            }
        }
    }

    return Math.min(...f[length - 1]);
}
// @lc code=end
