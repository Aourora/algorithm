/*
 * @lc app=leetcode.cn id=1779 lang=typescript
 *
 * [1779] 找到最近的有相同 X 或 Y 坐标的点
 */

// @lc code=start
function nearestValidPoint(x: number, y: number, points: number[][]): number {
    let minDis = Infinity;
    let index = -1;
    for (let i = 0; i < points.length; ++i) {
        const [x1, y1] = points[i];
        if (
            (x === x1 && Math.abs(y - y1) < minDis) ||
            (y === y1 && Math.abs(x - x1) < minDis)
        ) {
            minDis = Math.abs(x - x1) || Math.abs(y - y1);
            index = i;
        }
    }
    return index;
}
// @lc code=end
