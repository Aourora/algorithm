/*
 * @lc app=leetcode.cn id=733 lang=typescript
 *
 * [733] 图像渲染
 */

// @lc code=start
function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    color: number
): number[][] {
    const { length: m } = image;
    const { length: n } = image[0];
    const initColor = image[sr][sc];
    const bfs = (i: number, j: number): void => {
        if (
            i < 0 ||
            j < 0 ||
            i >= m ||
            j >= n ||
            image[i][j] === color ||
            image[i][j] !== initColor
        )
            return;
        image[i][j] = color;
        bfs(i + 1, j);
        bfs(i - 1, j);
        bfs(i, j + 1);
        bfs(i, j - 1);
    };
    bfs(sr, sc);
    return image;
}
// @lc code=end
