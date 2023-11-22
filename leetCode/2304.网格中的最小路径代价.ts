/*
 * @lc app=leetcode.cn id=2304 lang=typescript
 *
 * [2304] 网格中的最小路径代价
 */

// @lc code=start
function minPathCost(grid: number[][], moveCost: number[][]): number {
    const { length: m } = grid;
    const { length: n } = grid[0];
    const f = new Array(m)
        .fill(0)
        .map((_, i) => (i ? new Array(n).fill(0) : Array.from(grid[0])));
    for (let i = 1; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            let min = Infinity;
            for (let k = 0; k < n; ++k) {
                min = Math.min(min, f[i - 1][k] + moveCost[grid[i - 1][k]][j]);
            }
            f[i][j] = grid[i][j] + min;
        }
    }
    return Math.min(...f[m - 1]);
}
// @lc code=end
