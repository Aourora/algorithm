/*
 * @lc app=leetcode.cn id=1222 lang=typescript
 *
 * [1222] 可以攻击国王的皇后
 */

// @lc code=start
function queensAttacktheKing(queens: number[][], king: number[]): number[][] {
    const map: Map<number, boolean> = new Map();
    for (const [i, j] of queens) {
        map.set(i * 8 + j, true);
    }
    const result: number[][] = [];

    const direction = [
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
    ];

    const check = (x: number, y: number): boolean =>
        x > -1 && y > -1 && x < 8 && y < 8;

    for (const [dx, dy] of direction) {
        let [x, y] = king;
        x += dx;
        y += dy;
        while (check(x, y)) {
            if (map.has(x * 8 + y)) {
                result.push([x, y]);
                break;
            }
            x += dx;
            y += dy;
        }
    }

    return result;
}
// @lc code=end
