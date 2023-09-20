/*
 * @lc app=leetcode.cn id=2596 lang=typescript
 *
 * [2596] 检查骑士巡视方案
 */

// @lc code=start
function checkValidGrid(grid: number[][]): boolean {
    if (grid[0][0]) return false;
    const dir = [
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2],
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
    ];

    const getNextIndex = (
        [i, j]: [number, number],
        nextStep: number
    ): [number, number] | null => {
        for (const [dx, dy] of dir) {
            if (grid[i + dy] && grid[i + dy][j + dx] === nextStep) {
                return [i + dy, j + dx];
            }
        }
        return null;
    };

    let step = 0;
    const maxStep = grid.length * grid.length - 1;
    let point: [number, number] = [0, 0];
    while (step < maxStep) {
        point = getNextIndex(point, step + 1);
        if (!point) return false;
        ++step;
    }
    return step === maxStep;
}

// @lc code=end
