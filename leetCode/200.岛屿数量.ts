/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const bfs = (i: number, j: number): void => {
        if (i < 0 || j < 0 || i >= m || j >= n || grid[i][j] !== '1') return;
        grid[i][j] = '0';
        bfs(i + 1, j);
        bfs(i - 1, j);
        bfs(i, j + 1);
        bfs(i, j - 1);
    };
    let count = 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === '1') {
                ++count;
                bfs(i, j);
            }
        }
    }
    return count;
}
// @lc code=end
