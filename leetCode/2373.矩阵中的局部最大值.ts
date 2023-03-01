/*
 * @lc app=leetcode.cn id=2373 lang=typescript
 *
 * [2373] 矩阵中的局部最大值
 */

// @lc code=start
function largestLocal(grid: number[][]): number[][] {
    const { length } = grid;
    const res = Array.from({ length: length - 2 }, () =>
        new Array(length - 2).fill(0)
    );
    for (let i = 0; i < length - 2; ++i) {
        for (let j = 0; j < length - 2; ++j) {
            for (let x = i; x < i + 3; ++x) {
                for (let y = j; y < j + 3; ++y) {
                    res[i][j] = Math.max(grid[x][y], res[i][j]);
                }
            }
        }
    }
    return res;
}
// @lc code=end
