/*
 * @lc app=leetcode.cn id=542 lang=typescript
 *
 * [542] 01 矩阵
 */

// @lc code=start
function updateMatrix(mat: number[][]): number[][] {
    const { length: m } = mat;
    const { length: n } = mat[0];

    const direction = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];

    const ans: Array<Array<number>> = Array.from({ length: m }, () =>
        Array(n).fill(0)
    );
    const closeList = Array.from({ length: m }, () => Array(n).fill(0));

    const checkRange = (i: number, j: number): boolean =>
        i >= 0 && j >= 0 && i < m && j < n && !closeList[i][j];
    const queue: Array<Array<number>> = [];
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (!mat[i][j]) {
                queue.push([i, j]);
                closeList[i][j] = 1;
            }
        }
    }

    while (queue.length) {
        const [i, j] = queue.shift();
        for (const [dx, dy] of direction) {
            const _i = i + dx;
            const _j = j + dy;
            if (checkRange(_i, _j)) {
                closeList[_i][_j] = 1;
                ans[_i][_j] = ans[i][j] + 1;
                queue.push([_i, _j]);
            }
        }
    }
    return ans;
}
// @lc code=end
