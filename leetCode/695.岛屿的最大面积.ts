/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
function maxAreaOfIsland(grid: number[][]): number {
    const { length: m } = grid;
    const { length: n } = grid[0];
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const dfs = (i: number, j: number): number => {
        if (i < 0 || j < 0 || i >= m || j >= n || !grid[i][j]) return 0;
        grid[i][j] = 0;
        let ans = 1;
        for (const [dr, dc] of direction) {
            ans += dfs(i + dr, j + dc);
        }
        return ans;
    };
    let max = 0;

    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (!grid[i][j]) continue;
            max = Math.max(max, dfs(i, j));
        }
    }
    return max;
}
// @lc code=end
