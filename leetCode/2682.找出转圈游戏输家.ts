/*
 * @lc app=leetcode.cn id=2682 lang=typescript
 *
 * [2682] 找出转圈游戏输家
 */

// @lc code=start
function circularGameLosers(n: number, k: number): number[] {
    const map: Map<number, boolean> = new Map();
    let index = 0;
    let i = 0;
    while (!map.has(index)) {
        map.set(index, true);
        index = (index + k * ++i) % n;
    }
    const result: number[] = [];
    for (i = 0; i < n; ++i) {
        if (!map.has(i)) {
            result.push(i + 1);
        }
    }
    return result;
}
// @lc code=end
