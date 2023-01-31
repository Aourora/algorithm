/*
 * @lc app=leetcode.cn id=2319 lang=typescript
 *
 * [2319] 判断矩阵是否是一个 X 矩阵
 */

// @lc code=start
function checkXMatrix(grid: number[][]): boolean {
    const { length } = grid;
    for (let i = 0; i < length; ++i) {
        for (let j = 0; j < length; ++j) {
            if (i === j || i + j === length - 1) {
                if (grid[i][j] === 0) return false;
            } else if (grid[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}
// @lc code=end
