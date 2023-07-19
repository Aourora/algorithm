/*
 * @lc app=leetcode.cn id=994 lang=typescript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
    const { length: m } = grid;
    const { length: n } = grid[0];
    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const queue: Array<[number, number]> = [];
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
            }
        }
    }
    const checkRange = (i: number, j: number): boolean =>
        i >= 0 && j >= 0 && i < m && j < n && grid[i][j] === 1;
    let max = -1;
    while (queue.length) {
        const temp = queue.slice();
        queue.length = 0;
        for (const [i, j] of temp) {
            for (const [dx, dy] of direction) {
                const x = i + dx;
                const y = j + dy;
                if (checkRange(x, y)) {
                    queue.push([x, y]);
                    grid[x][y] = 2;
                }
            }
        }
        ++max;
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] === 1) {
                return -1;
            }
        }
    }
    return max === -1 ? 0 : max;
}
// @lc code=end
