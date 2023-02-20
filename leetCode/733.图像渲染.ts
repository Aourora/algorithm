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
    const preColor = image[sr][sc];

    const bfs = (r: number, c: number): void => {
        if (
            r < 0 ||
            c < 0 ||
            r >= m ||
            c >= n ||
            image[r][c] !== preColor ||
            image[r][c] === color
        ) {
            return;
        }
        image[r][c] = color;
        bfs(r + 1, c);
        bfs(r - 1, c);
        bfs(r, c + 1);
        bfs(r, c - 1);
    };
    bfs(sr, sc);
    return image;
}
// @lc code=end
